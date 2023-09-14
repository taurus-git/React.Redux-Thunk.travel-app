import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchTicketsQuery, getFlightsData } from "../../store";
import CityInput from "../CityInput/CityInput";

const SearchForm = () => {
    const dispatch = useDispatch();
    const { origin, destination } = useSelector( ( state ) => state.cityNameInput );
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
        const params = {
            origin: getCityCode( origin ),
            destination: getCityCode( destination ),
            departDate: formData.get( 'departDate' ),
            returnDate: formData.get( 'returnDate' ),
        };

        setSearchQuery( params );
    };

    useEffect( () => {
        if ( searchResults && searchResults.destinations ) {
            dispatch( getFlightsData( searchResults ) );
        }
    }, [searchResults, dispatch] );

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
                        <label htmlFor="departDate">
                            Departure date:
                            <input type="date" name="departDate" required/>
                        </label>
                        <label htmlFor="returnDate">
                            Return ticket date:
                            <input type="date" name="returnDate"/>
                        </label>
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SearchForm;
