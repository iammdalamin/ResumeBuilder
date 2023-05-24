import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const resumeApi = createApi({
  
  reducerPath: "resumeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
//   baseQuery: fetchBaseQuery({ baseUrl: "https://shop-server-ymqb.onrender.com/api/v1" }),
  endpoints: (builder) => ({
    getAllResumes: builder.query({
        query: () => ({
            url: `/resume/creative`,
            method: "GET",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }),
    }),
    createResume: builder.mutation({
      query: (body) => ({
        url: '/resume/create/creative',
        method: 'POST',
        body,
      }),
    }),
    registration: builder.mutation({
      query: (...body) => ({
        url: '/registration',
        method: 'POST',
        body,
      }),
    }),
  }),
  })

export const {useGetAllResumesQuery, useCreateResumeMutation, useRegistrationMutation} = resumeApi;