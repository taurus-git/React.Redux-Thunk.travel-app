import { configureStore } from '@reduxjs/toolkit';
import { ticketsApi } from './apis/ticketsApi';

export const store = configureStore( {
    reducer: {
        [ticketsApi.reducerPath]: ticketsApi.reducer,
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( ticketsApi.middleware ),
} );

export {
    useSearchTicketsQuery
} from './apis/ticketsApi';
