import React, { useState } from 'react';
import { useSearchTicketsQuery } from "../../store";

const SearchForm = () => {
    const [params, setParams] = useState( null );
    const { data, error, isLoading } = useSearchTicketsQuery();

    const handleSubmit = ( e ) => {
        e.preventDefault();

        const formData = new FormData( e.target );

        const newParams = {
            from: formData.get( 'from' ),
            to: formData.get( 'to' ),
            departureDate: formData.get( 'departureDate' ),
            returnDate: formData.get( 'returnDate' ),
            adults: Number( formData.get( 'adults' ) ),
            children: Number( formData.get( 'children' ) ),
        };

        console.log( newParams );
        setParams( newParams );
    }

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
                            <input type="text" name="from" list="cities" placeholder="Enter city name" required/>
                        </label>
                        <label htmlFor="to">
                            To:
                            <input type="text" name="to" list="cities" placeholder="Enter city name"/>
                        </label>

                        <datalist id="cities">
                            <option value="New York"/>
                            <option value="Sydnay"/>
                            <option value="Berlin"/>
                            <option value="Cairo"/>
                            <option value="Kabul"/>
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
