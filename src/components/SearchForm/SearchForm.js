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

    const handleFocus = ( e ) => {
        e.target.type = "date";
        e.target.placeholder = "";
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
                <div className="search-form__container">
                    <form onSubmit={ handleSubmit }>
                        <div className="search-form__field-wrapper">
                            <CityInput name="From:" htmlFor="origin"/>
                        </div>
                        <div className="search-form__field-wrapper">
                            <CityInput name="To:" htmlFor="destination"/>
                        </div>
                        <div className="search-form__fields-container">
                            <div className="search-form__field-wrapper search-form__field-wrapper--horizontal">
                                <label htmlFor="departDate" className="visually-hidden">
                                    Check in:
                                </label>
                                <input
                                    type="text"
                                    name="departDate"
                                    placeholder="Check in"
                                    onFocus={ handleFocus }
                                    required
                                />
                                <span className={ `search-form__icon--calendar` }
                                      onClick={() => {
                                          document.querySelector('input[name="departDate"]').showPicker();
                                      }}>
                                </span>
                            </div>
                            <div className="search-form__field-wrapper search-form__field-wrapper--horizontal">
                                <label htmlFor="returnDate" className="visually-hidden">
                                    Check out:
                                </label>
                                <input
                                    type="text"
                                    name="returnDate"
                                    placeholder="Check out"
                                    onFocus={ handleFocus }
                                />
                                <span className={ `search-form__icon--calendar` }
                                      onClick={() => {
                                          document.querySelector('input[name="returnDate"]').showPicker();
                                      }}>
                                </span>
                            </div>
                        </div>
                        <div className="search-form__field-wrapper search-form__field-wrapper--search">
                            <button type="submit">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SearchForm;
