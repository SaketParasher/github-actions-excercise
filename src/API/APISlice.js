import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

const customBaseQuery = fetchBaseQuery({
    baseUrl:'https://exercisedb.p.rapidapi.com/exercises',
    prepareHeaders:(headers,{getState}) => {
        headers.set('X-RapidAPI-Key','c4a706f4a1msh9f07879d634ec3ep1114d0jsn3a68c6729cfb');
        headers.set('X-RapidAPI-Host','exercisedb.p.rapidapi.com');
        return headers;
    }
})

export const ExcerciseAPI = createApi({
    baseQuery: customBaseQuery,
    reducerPath:'excerciseAPI',
    endpoints : (builder) => ({
        getAllBodyParts : builder.query({
            query : () => '/bodyPartList'
        })
    }),
    keepUnusedDataFor: 300
})

export const { useGetAllBodyPartsQuery } = ExcerciseAPI