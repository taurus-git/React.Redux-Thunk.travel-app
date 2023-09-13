import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ticketsApi = createApi( {
    reducerPath: 'tickets',
    baseQuery: fetchBaseQuery( {
        baseUrl: 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v2',
        prepareHeaders: ( headers ) => {
            headers.set( 'X-Access-Token', 'c6ecab81486906255a2881537e682364' );
            headers.set( 'X-RapidAPI-Key', '75f5621318msh8bd9323a60d425cp1d9e40jsn506c451c1332' );
            headers.set( 'X-RapidAPI-Host', 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com' );
            return headers;
        }
    } ),
    endpoints( builder ) {
        return {
            searchTickets: builder.query( {
                query: ( { origin, destination, departDate, returnDate } ) => {

                    if ( !origin || !destination || !departDate ) return;

                    return {
                        url: '/prices/nearest-places-matrix',
                        method: 'GET',
                        params: {
                            origin: origin,
                            destination: destination,
                            depart_date: departDate,
                            return_date: returnDate,
                            flexibility: '7',
                            currency: 'EUR',
                            show_to_affiliates: 'true',
                            limit: '10',
                            distance: '1',
                        }
                    }
                }
            } ),
        }
    }
} );

export const {
    useSearchTicketsQuery,
} = ticketsApi

export { ticketsApi };
