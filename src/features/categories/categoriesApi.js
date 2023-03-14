import apiSlice from '../api/apiSlice';

const categoriesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (data) => ({
        url: '/api/categories',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Category'],
      providesTags: ['Category'],
    }),
    updateCategory: builder.mutation({
      query: ({id, submitData}) => ({
        url: `/api/categories/${id}`,
        method: 'PUT',
        body: submitData,
      }),
      invalidatesTags: ['Category'],
      providesTags: ['Category'],
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/api/categories/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Category'],
      providesTags: ['Category'],
    }),

    getCategories: builder.query({
      query: () => '/api/categories',
      providesTags: ['Category'],
    })
  }),
  overrideExisting: true,
});

export const {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
  useGetFoodsByCategoryQuery,
} = categoriesApi;
