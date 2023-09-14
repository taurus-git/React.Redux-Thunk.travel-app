import { createSlice } from '@reduxjs/toolkit'

const flightsDataSlice = createSlice( {
    name: 'flightsData',
    initialState: [],
    reducers: {
        getFlightsData( state, action ) {
            console.log(state);
            console.log(action.payload);
            return action.payload;
        },
    },
} )

export const { getFlightsData } = flightsDataSlice.actions
export const flightsDataReducer = flightsDataSlice.reducer
