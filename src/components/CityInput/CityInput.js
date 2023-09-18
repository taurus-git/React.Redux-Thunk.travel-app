import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useGetCitiesQuery, changeCityName } from "../../store";

const CityInput = ( { name, htmlFor } ) => {
    const dispatch = useDispatch();
    const city = useSelector( ( state ) => state.cityNameInput[htmlFor] );
    const [debouncedValue, setDebouncedValue] = useState( city.name );
    const { data: citiesData } = useGetCitiesQuery( debouncedValue, { skip: !debouncedValue } );
    const isCitiesDataExist = citiesData && Object.keys( citiesData )?.length > 0;

    useEffect( () => {
        if ( debouncedValue && isCitiesDataExist ) {
            const cityCode = citiesData.find( city => city.name === debouncedValue )?.code;
            if ( cityCode ) {
                dispatch( changeCityName( { field: htmlFor, name: debouncedValue, code: cityCode } ) );
            }
        }
    }, [isCitiesDataExist, debouncedValue, citiesData, dispatch] );

    const handleChange = ( e ) => {
        const cityName = e.target.value;

        setTimeout( () =>
                setDebouncedValue( cityName ),
            200 );
    };

    const preparePlaceholder = ( str ) => {
        if ( !str || typeof 'string' === str ) return "";

        return str.charAt( 0 ).toUpperCase() + str.slice( 1 ).toLowerCase();
    }

    return (
        <>
            <label htmlFor={ htmlFor }
                   className="visually-hidden">
                { name }
            </label>
            <span className={ `search-form__icon--${ htmlFor }` }></span>
            <input type="text"
                   name={ htmlFor }
                   list={ `${ htmlFor }-cities` }
                   className="search-form__input"
                   placeholder={ preparePlaceholder( htmlFor ) }
                   value={ city.name }
                   onChange={ handleChange }
                   required/>
            <datalist id={ `${ htmlFor }-cities` }>
                { citiesData?.map( city => (
                    <option key={ city.code + city.name } value={ city.name }/>
                ) ) }
            </datalist>
        </>
    );
}

export default CityInput;
