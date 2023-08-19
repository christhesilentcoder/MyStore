import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => '/products', // Corrected the query path by adding a slash at the beginning.
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`, // Define a function that takes the ID as an argument and constructs the URL.
    }),
  }),
});

export const { useGetAllProductsQuery,useGetProductByIdQuery  } = productApi;