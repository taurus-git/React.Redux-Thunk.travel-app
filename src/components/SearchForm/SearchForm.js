import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchTicketsQuery, useGetCitiesQuery } from "../../store";
import CityInput from "../CityInput/CityInput";

const SearchForm = () => {
    const { from, to } = useSelector( ( state ) =>
        state.cityNameInput
    );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        const formData = new FormData( e.target );


        /*const newParams = {
            from: citiesData?.find( city => city.name === from)?.code,
            to: citiesData?.find( city => city.name === to )?.code,
            /!*departureDate: formData.get( 'departureDate' ),
            returnDate: formData.get( 'returnDate' ),
            adults: Number( formData.get( 'adults' ) ),
            children: Number( formData.get( 'children' ) ),*!/
        };

        console.log( newParams );*/
    };

    return (
        <div className="container">
            <div className="search-form">
                <div className="search-form__title">
                    <h1>The whole world awaits.</h1>
                </div>
                <div className="search-form__form">

                    <form onSubmit={ handleSubmit }>
                        <CityInput name="From:" htmlFor="from" required/>
                        <CityInput name="To:" htmlFor="to"/>

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
