import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = 'sh428739766321522266746152871799';

const ticketsApi = createApi( {
    reducerPath: 'tickets',
    baseQuery: fetchBaseQuery( {
        baseUrl: 'https://partners.api.skyscanner.net/apiservices',
        prepareHeaders: ( headers ) => {
            headers.set( 'api-key', apiKey );
            return headers;
        }
    } ),
    endpoints( builder ) {
        return {
            searchTickets: builder.mutation( {
                query: ( { from, to, departureDate, returnDate, adults, children } ) => {
                    return {
                        url: '/browseroutes/v1.0/',
                        method: 'POST',
                        body: {
                            country: "DE",
                            currency: "EUR",
                            locale: "de-DE",
                            originPlace: to,
                            outboundDate: departureDate,
                            inboundDate: returnDate,
                            adults,
                            children,
                            cabinClass: "economy"
                        }
                    }
                }
            } )
        }
    }
} );

export const {
    useSearchTicketsMutation
} = ticketsApi

export { ticketsApi };
