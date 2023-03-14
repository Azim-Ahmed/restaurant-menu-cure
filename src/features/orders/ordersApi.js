import apiSlice from '../api/apiSlice';

const ordersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: '/api/orders',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Order'],
      providesTags: ['Order'],
    }),
    updateOrder: builder.mutation({
      query: ({id, submitData}) => ({
        url: `/api/orders/${id}`,
        method: 'PUT',
        body: submitData,
      }),
      invalidatesTags: ['Order'],
      providesTags: ['Order'],
    }),

    // deleteCategory: builder.mutation({
    //   query: (id) => ({
    //     url: `/api/categories/${id}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['Category'],
    //   providesTags: ['Category'],
    // }),

    getOrders: builder.query({
      query: () => '/api/categories',
      providesTags: ['Order'],
    })
  }),
  overrideExisting: true,
});

export const {
  useCreateOrderMutation,
  useUpdateOrderMutation,
  useGetOrdersQuery
} = ordersApi;
