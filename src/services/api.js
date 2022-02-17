import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//https://mockapi.io/clone/62096b516df46f0017f4c503

const phonebookApi = createApi({
  reducerPath: "contacts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://62096b516df46f0017f4c502.mockapi.io/api/v1",
  }),
  tagTypes: ["Contacts"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `contacts/`,
      providesTags: ["Contacts"],
    }),
    deleteContactById: builder.mutation({
      query: (id) => ({
        url: `contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
    postContact: builder.mutation({
      query: (contact) => ({
        url: "contacts/",
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

const {
  useGetContactsQuery,
  useDeleteContactByIdMutation,
  usePostContactMutation,
} = phonebookApi;

export {
  phonebookApi,
  useGetContactsQuery,
  useDeleteContactByIdMutation,
  usePostContactMutation,
};