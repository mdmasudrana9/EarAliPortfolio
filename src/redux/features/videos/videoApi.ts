import { baseApi } from "../../api/baseApi";

const videoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createVideo: builder.mutation({
      query: (data) => ({
        url: "/videos",
        method: "POST",
        body: data,
      }),
    }),
    getAllVideos: builder.query({
      query: () => "/videos",
    }),
    getVideoById: builder.query({
      query: (id) => `/videos/${id}`,
    }),
    updateVideo: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/videos/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteVideo: builder.mutation({
      query: (id) => ({
        url: `/videos/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateVideoMutation,
  useGetAllVideosQuery,
  useGetVideoByIdQuery,
  useUpdateVideoMutation,
  useDeleteVideoMutation,
} = videoApi;
