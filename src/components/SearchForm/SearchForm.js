import React, { useState } from 'react';
import { useSearchTicketsQuery, useGetCitiesQuery } from "../../store";

const SearchForm = () => {
    const [inputValue, setInputValue] = useState( "" );
    const shouldSkip = !inputValue;
    const { data: citiesData } = useGetCitiesQuery( inputValue, { skip: shouldSkip } );

    const handleChange = ( e ) => {
        setInputValue( e.target.value );
    };


    const handleSubmit = ( e ) => {
        e.preventDefault();

        const formData = new FormData( e.target );

        const newParams = {
            from: citiesData?.find( city => city.name === formData.get( 'from' ) )?.code,
            to: citiesData?.find( city => city.name === formData.get( 'to' ) )?.code,
            /*departureDate: formData.get( 'departureDate' ),
            returnDate: formData.get( 'returnDate' ),
            adults: Number( formData.get( 'adults' ) ),
            children: Number( formData.get( 'children' ) ),*/
        };

        console.log( newParams );
    };

    return (
        <div className="container">
            <div className="search-form">
                <div className="search-form__title">
                    <h1>The whole world awaits.</h1>
                </div>
                <div className="search-form__form">

                    <form onSubmit={ handleSubmit }>

                        <label htmlFor="from">
                            From:
                            <input type="text" name="from" list="cities" placeholder="Enter city name"
                                   value={ inputValue } onChange={ handleChange } required/>
                        </label>
                        <label htmlFor="to">
                            To:
                            <input type="text" name="to" list="cities" placeholder="Enter city name"/>
                        </label>

                        <datalist id="cities">
                            { citiesData?.map( city => (
                                <option key={ city.code + city.name } value={ city.name }/>
                            ) ) }
                        </datalist>

                        <label htmlFor="departureDate">
                            Departure date:
                            <input type="date" name="departureDate" required/>
                        </label>

                        <label htmlFor="returnTicketDate">
                            Return ticket date:
                            <input type="date" name="returnDate"/>
                        </label>

                        <label htmlFor="adults">
                            Adults:
                            <input type="number" name="adults" min="1" defaultValue="2"/>
                        </label>

                        <label htmlFor="children">
                            Children:
                            <input type="number" name="children" min="0" defaultValue="0"/>
                        </label>

                        <button type="submit">Search</button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default SearchForm;
