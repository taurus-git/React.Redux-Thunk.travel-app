import { createSlice } from '@reduxjs/toolkit'

const cityNameSlice = createSlice( {
    name: 'cityNameInput',
    initialState: {
        name: '',
    },
    reducers: {
        changeCityName ( state, action ) {
            state.name = action.payload;
        },
    },
} );

export const { changeCityName } = cityNameSlice.actions;
export const cityNameReducer = cityNameSlice.reducer;
