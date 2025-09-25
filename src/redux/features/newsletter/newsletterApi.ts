import { TAG_TYPES } from "@/redux/constants/tagTypes";
import { baseApi } from "../../api/baseApi";

const newsletterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createNewsletter: builder.mutation({
      query: (data) => ({
        url: "/newsletter",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [TAG_TYPES.Newsletter],
    }),
    getAllNewsletters: builder.query({
      query: () => "/newsletter",
      providesTags: [TAG_TYPES.Newsletter],
    }),
    getNewsletterById: builder.query({
      query: (id) => `/newsletter/${id}`,
      providesTags: (result, error, id) => [{ type: TAG_TYPES.Newsletter, id }],
    }),
    updateNewsletter: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/newsletter/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [TAG_TYPES.Newsletter],
    }),
    deleteNewsletter: builder.mutation({
      query: (id) => ({
        url: `/newsletter/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG_TYPES.Newsletter],
    }),
    sendNewsletterToAll: builder.mutation({
      query: (data) => ({
        url: "/newsletter/send-all",
        method: "POST",
        body: data, // { subject, html }
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
  useSendNewsletterToAllMutation,
} = newsletterApi;
