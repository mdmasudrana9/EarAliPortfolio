import { baseApi } from "../../api/baseApi";

const newsletterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createNewsletter: builder.mutation({
      query: (data) => ({
        url: "/newsletter",
        method: "POST",
        body: data,
      }),
    }),
    getAllNewsletters: builder.query({
      query: () => "/newsletter",
    }),
    getNewsletterById: builder.query({
      query: (id) => `/newsletter/${id}`,
    }),
    updateNewsletter: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/newsletter/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteNewsletter: builder.mutation({
      query: (id) => ({
        url: `/newsletter/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateNewsletterMutation,
  useGetAllNewslettersQuery,
  useGetNewsletterByIdQuery,
  useUpdateNewsletterMutation,
  useDeleteNewsletterMutation,
} = newsletterApi;
