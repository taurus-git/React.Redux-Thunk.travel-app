import { createSlice } from '@reduxjs/toolkit'

const flightsDataSlice = createSlice( {
    name: 'flightsData',
    initialState: [],
    reducers: {
        setFlightsData( state, action ) {
            return action.payload;
        },
    },
} )

export const { setFlightsData } = flightsDataSlice.actions
export const flightsDataReducer = flightsDataSlice.reducer
