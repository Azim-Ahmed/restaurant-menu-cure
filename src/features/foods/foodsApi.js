import apiSlice from '../api/apiSlice';

const foodsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createFood: builder.mutation({
      query: (data) => ({
        url: '/api/foods',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Food'],
      providesTags: ['Food'],
    }),
    updateFood: builder.mutation({
      query: ({id, submitData}) => ({
        url: `/api/foods/${id}`,
        method: 'PUT',
        body: submitData,
      }),
      invalidatesTags: ['Food'],
      providesTags: ['Food'],
    }),
    getFoodsByCategory: builder.query({
      query: (id) => `/api/categories/${id}?populate=foods`,
      providesTags: ['Food'],
    }),
  }),
  overrideExisting: true,
});

export const {useCreateFoodMutation, useUpdateFoodMutation,useGetFoodsByCategoryQuery } = foodsApi;