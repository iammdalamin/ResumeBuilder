import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken } from '../helpers/SessionHelper';

export const resumeApi = createApi({
  
  reducerPath: "resumeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://resumebuilder-0509.onrender.com/api/v1" }),
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
    findResume: builder.query({
        query: (type) => ({
            url: `/resume/create/${type}`,
            method: "GET",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }),
    }),
    createResume: builder.mutation({
      query: (type) => ({
        url: `/resume/create/${type}`,
        method: 'GET',
        headers:{"token":getToken()}
      }),
    }),
    updateResume: builder.mutation({
      query: (body) => ({
        url: `resume/builder`,
        method: 'PUT',
        headers: { "token": getToken() },
        body
        
      }),
    }),
    registration: builder.mutation({
      query: (...body) => ({
        url: '/registration',
        method: 'POST',
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),
  }),
  })

export const {useGetAllResumesQuery, useCreateResumeMutation, useRegistrationMutation, useLoginMutation, useFindResumeQuery, useUpdateResumeMutation} = resumeApi;