import { createSlice } from '@reduxjs/toolkit'

const cityNameSlice = createSlice( {
    name: 'cityNameInput',
    initialState: {
        from: '',
        to: ''
    },
    reducers: {
        changeCityName( state, action ) {
            const { field, value } = action.payload;
            state[field] = value;
        },
    },
} );

export const { changeCityName } = cityNameSlice.actions;
export const cityNameReducer = cityNameSlice.reducer;
