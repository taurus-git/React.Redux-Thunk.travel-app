import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchTicketsQuery } from "../../store";
import CityInput from "../CityInput/CityInput";

const SearchForm = () => {
    const { origin, destination } = useSelector( ( state ) =>
        state.cityNameInput
    );
    const [searchQuery, setSearchQuery] = useState( {} );
    const { data: searchResults, error, isFetching } = useSearchTicketsQuery(
        searchQuery, { skip: !searchQuery.origin || !searchQuery.destination }
    );

    const getCityCode = ( city ) => {
        if ( Object.keys( city ).length ) {
            const name = Object.keys( city )[0];
            const code = city[name];
            return code;
        }
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        const formData = new FormData( e.target );
        const { departureDate, returnDate, adults, children } = formData;
        const params = {
            origin: getCityCode( origin ),
            destination: getCityCode( destination ),
            departureDate: departureDate,
            returnDate: returnDate,
            adults: Number( adults ),
            children: Number( children ),
        };

        setSearchQuery( params );
    };

    console.log(searchResults);

    let content;
    if (isFetching) {
        content = <div>Loading...</div>
    } else if ( error ) {
        content = <div>Error loading Search results</div>;
    } else if (searchResults && searchResults.destinations) {
        content = searchResults.destinations[0];
    } else {
        content = <div>No results found</div>
    }

    return (
        <div className="container">
            <div className="search-form">
                <div className="search-form__title">
                    <h1>The whole world awaits.</h1>
                </div>
                <div className="search-form__form">
                    <form onSubmit={ handleSubmit }>
                        <CityInput name="From:" htmlFor="origin"/>
                        <CityInput name="To:" htmlFor="destination"/>

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

                { content }

            </div>
        </div>
    );
}

export default SearchForm;
