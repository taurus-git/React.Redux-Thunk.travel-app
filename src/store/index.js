import { configureStore } from '@reduxjs/toolkit';
import { ticketsApi } from './apis/ticketsApi';
import { citiesApi } from './apis/citiesApi';
import { cityNameReducer } from "./slices/cityNameSlice";

export const store = configureStore( {
    reducer: {
        cityNameInput: cityNameReducer,
        [ticketsApi.reducerPath]: ticketsApi.reducer,
        [citiesApi.reducerPath]: citiesApi.reducer,
    },
    middleware: ( getDefaultMiddleware ) =>
        getDefaultMiddleware().concat( ticketsApi.middleware, citiesApi.middleware ),
} );


export {
    useSearchTicketsQuery,
} from './apis/ticketsApi';
export {
    useGetCitiesQuery,
} from './apis/citiesApi';
export {
    changeCityName,
} from './slices/cityNameSlice';

