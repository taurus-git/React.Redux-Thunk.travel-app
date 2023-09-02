import { configureStore } from '@reduxjs/toolkit';
import { ticketsApi } from './apis/ticketsApi';
import { citiesApi } from './apis/citiesApi';

export const store = configureStore( {
    reducer: {
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


