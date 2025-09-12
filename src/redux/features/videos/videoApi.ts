import { TAG_TYPES } from "@/redux/constants/tagTypes";
import { baseApi } from "../../api/baseApi";

const videoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createVideo: builder.mutation({
      query: (data) => ({
        url: "/videos",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [TAG_TYPES.Video], // create এর পর cached data refresh করার জন্য
    }),
    getAllVideos: builder.query({
      query: () => "/videos",
      providesTags: [TAG_TYPES.Video],
    }),
    getVideoById: builder.query({
      query: (id) => `/videos/${id}`,
      providesTags: [TAG_TYPES.Video],
    }),
    updateVideo: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/videos/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [TAG_TYPES.Video],
    }),
    deleteVideo: builder.mutation({
      query: (id) => ({
        url: `/videos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG_TYPES.Video],
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
