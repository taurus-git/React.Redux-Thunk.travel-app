import { createSlice } from '@reduxjs/toolkit'

const cityNameSlice = createSlice( {
    name: 'cityNameInput',
    initialState: {
        origin: {},
        destination: {}
    },
    reducers: {
        changeCityName( state, action ) {
            const { field, name, code } = action.payload;
            if ( name && code ) {
                state[field][name] = code;
            } else {
                delete state[field].name;
            }
        },
    },
} );

export const { changeCityName } = cityNameSlice.actions;
export const cityNameReducer = cityNameSlice.reducer;
