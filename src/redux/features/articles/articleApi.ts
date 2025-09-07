import { baseApi } from "../../api/baseApi";

const articleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createArticle: builder.mutation({
      query: (data) => ({
        url: "/articles",
        method: "POST",
        body: data,
      }),
    }),
    getAllArticles: builder.query({
      query: () => "/articles",
    }),
    getArticleById: builder.query({
      query: (id) => `/articles/${id}`,
    }),
    updateArticle: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/articles/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteArticle: builder.mutation({
      query: (id) => ({
        url: `/articles/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateArticleMutation,
  useGetAllArticlesQuery,
  useGetArticleByIdQuery,
  useUpdateArticleMutation,
  useDeleteArticleMutation,
} = articleApi;
