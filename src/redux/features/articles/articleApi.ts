// redux/features/articles/articleApi.ts
import { baseApi } from "@/redux/api/baseApi";
import { Article } from "@/redux/features/articles/types";

export const articleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    uploadImage: build.mutation({
      query: (data) => ({
        url: "/upload",
        method: "POST",
        body: data,
      }),
    }),
    SaveDataBaseImage: build.mutation({
      query: (data) => ({
        url: "/image-gallery",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ImageGallery"],
    }),
    getAllImageFormDB: build.query({
      query: () => ({
        url: "/image-gallery",
        method: "GET",
      }),
      providesTags: ["ImageGallery"],
    }),

    // CREATE: Save Draft
    saveDraft: build.mutation<
      { success: boolean; message: string; data: Article },
      { title: string; content: string }
    >({
      query: (body) => ({
        url: "/articles/draft",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Article"], // ✅ auto reload
    }),

    // CREATE: Publish Article
    publishArticle: build.mutation<
      { success: boolean; message: string; data: Article },
      { title: string; content: string }
    >({
      query: (body) => ({
        url: "/articles/publish",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Article"], // ✅ auto reload
    }),

    // READ: Get All Articles
    getAllArticles: build.query<{ data: Article[] }, void>({
      query: () => "/articles",
      providesTags: ["Article"], // ✅ cache tag
    }),

    // READ: Get All Published Articles
    getAllPublishedArticles: build.query<{ data: Article[] }, void>({
      query: () => "/articles/published",
      providesTags: ["Article"], // ✅ cache tag
    }),

    // READ: Get Single Article
    getArticleById: build.query<{ data: Article }, string>({
      query: (id) => `/articles/${id}`,
      providesTags: ["Article"], // ✅ cache tag
    }),

    // UPDATE: Update Article
    updateArticle: build.mutation<
      { success: boolean; message: string; data: Article },
      { id: string; title: string; content: string }
    >({
      query: ({ id, ...body }) => ({
        url: `/articles/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Article"], // ✅ auto reload
    }),

    deleteArticle: build.mutation<
      { success: boolean; message: string },
      string
    >({
      query: (id) => ({
        url: `/articles/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Article"], // ✅ auto reload
    }),

    updateStatusArticle: build.mutation<
      { success: boolean; message: string; data: Article },
      string
    >({
      query: (id) => ({
        url: `/articles/${id}/publish`,
        method: "PATCH",
      }),
      invalidatesTags: ["Article"], // ✅ auto reload
    }),
  }),

  overrideExisting: false,
});

export const {
  useSaveDraftMutation,
  usePublishArticleMutation,
  useGetAllArticlesQuery,
  useGetAllPublishedArticlesQuery,
  useGetArticleByIdQuery,
  useUpdateArticleMutation,
  useDeleteArticleMutation,
  useUpdateStatusArticleMutation,
  useUploadImageMutation,
  useGetAllImageFormDBQuery,
  useSaveDataBaseImageMutation,
} = articleApi;
