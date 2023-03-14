import apiSlice from '../api/apiSlice';

const tablesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateTable: builder.mutation({
      query: ({id, submitData}) => ({
        url: `/api/tables/${id}`,
        method: 'PUT',
        body: submitData,
      }),
      invalidatesTags: ['Table'],
      providesTags: ['Table'],
    }),
    getTables: builder.query({
      query: () => '/api/tables',
      providesTags: ['Table'],
    }),
    getSingleTableData: builder.query({
      query: (id) => `/api/tables/${id}?populate=order`,
      providesTags: ['Table'],
    }),
  }),
  overrideExisting: true,
});

export const {useUpdateTableMutation, useGetTablesQuery, useGetSingleTableDataQuery } = tablesApi;
