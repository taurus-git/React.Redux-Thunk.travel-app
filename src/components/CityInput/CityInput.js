import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";
import { useGetCitiesQuery, changeCityName } from "../../store";

const CityInput = ( { name, htmlFor, required } ) => {
    const dispatch = useDispatch();
    const inputValue = useSelector( ( state ) =>
        state.cityNameInput[htmlFor]
    );

    const [debouncedValue, setDebouncedValue] = useState( inputValue );

    const debounceUpdater = debounce( ( updateFunc, value ) => {
        updateFunc( value );
    }, 300 );

    const updateDebouncedValue = useCallback( ( value ) => {
        debounceUpdater( setDebouncedValue, value );
    }, [] );

    const shouldSkip = !debouncedValue;
    const { data: citiesData } = useGetCitiesQuery( debouncedValue, { skip: shouldSkip } );

    const handleChange = ( e ) => {
        const value = e.target.value;
        dispatch( changeCityName( { field: htmlFor, value } ) );
        updateDebouncedValue( value );
    };

    return (
        <>
            <label htmlFor={ htmlFor }>
                { name }
                <input type="text" name={ htmlFor } list={ `${ htmlFor }-cities` } placeholder="Enter city name"
                       value={ inputValue } onChange={ handleChange } required={ required }/>
            </label>
            <datalist id={ `${ htmlFor }-cities` }>
                { citiesData?.map( city => (
                    <option key={ city.code + city.name } value={ city.name }/>
                ) ) }
            </datalist>
        </>
    );
}

export default CityInput;
