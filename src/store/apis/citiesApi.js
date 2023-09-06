import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const citiesApi = createApi( {
    reducerPath: 'cities',
    baseQuery: fetchBaseQuery( {
        baseUrl: 'https://autocomplete.travelpayouts.com',
    } ),
    endpoints( builder ) {
        return {
            getCities: builder.query( {
                query: ( searchTerm ) => {
                    if ( !searchTerm ) return null;

                    return {
                        url: `/places2`,
                        method: 'GET',
                        params: {
                            locale: 'en',
                            types: ['city', 'airport'],
                            term: searchTerm,
                        }
                    }
                }
            } ),
        }
    }
} );

export const {
    useGetCitiesQuery
} = citiesApi

export { citiesApi };
