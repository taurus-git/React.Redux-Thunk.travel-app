import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useGetCitiesQuery, changeCityName } from "../../store";

const CityInput = ( { name, htmlFor, required } ) => {
    const dispatch = useDispatch();
    const { inputValue } = useSelector( ( state ) => {
        return {
            inputValue: state.cityNameInput.name
        }

    } );

    console.log(inputValue);

    const shouldSkip = !inputValue;
    const { data: citiesData } = useGetCitiesQuery( inputValue, { skip: shouldSkip } );

    const handleChange = ( e ) => {
        dispatch( changeCityName( e.target.value ) )
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
