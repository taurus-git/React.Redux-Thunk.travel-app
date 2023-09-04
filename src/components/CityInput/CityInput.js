import React, { useState } from 'react';
import { useGetCitiesQuery } from "../../store";

const CityInput = ( { name, htmlFor, required } ) => {
    const [inputValue, setInputValue] = useState( "" );
    const shouldSkip = !inputValue;
    const { data: citiesData } = useGetCitiesQuery( inputValue, { skip: shouldSkip } );

    const handleChange = ( e ) => {
        setInputValue( e.target.value );
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
