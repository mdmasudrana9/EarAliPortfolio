// redux/features/articles/articleApi.ts
import { baseApi } from "@/redux/api/baseApi";
import { Article } from "@/redux/features/articles/types";

export const articleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
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
      // invalidatesTags: ["Article"],
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
      // invalidatesTags: ["Article"],
    }),

    // READ: Get All Articles
    getAllArticles: build.query<{ data: Article[] }, void>({
      query: () => "/articles",
      // providesTags: ["Article"],
    }),

    // READ: Get Single Article
    getArticleById: build.query<{ data: Article }, string>({
      query: (id) => `/articles/${id}`,
      // providesTags: ["Article"],
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
      // invalidatesTags: ["Article"],
    }),

    // DELETE: Delete Article
    deleteArticle: build.mutation<
      { success: boolean; message: string },
      string
    >({
      query: (id) => ({
        url: `/articles/${id}`,
        method: "DELETE",
      }),
      // invalidatesTags: ["Article"],
    }),
  }),

  overrideExisting: false,
});

export const {
  useSaveDraftMutation,
  usePublishArticleMutation,
  useGetAllArticlesQuery,
  useGetArticleByIdQuery,
  useUpdateArticleMutation,
  useDeleteArticleMutation,
} = articleApi;
