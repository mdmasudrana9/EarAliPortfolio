// redux/features/articles/articleSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ArticleState {
  title: string;
  content: string;
  status: "draft" | "published" | "";
}

const initialState: ArticleState = {
  title: "",
  content: "",
  status: "",
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },
    setStatus: (state, action: PayloadAction<"draft" | "published" | "">) => {
      state.status = action.payload;
    },
    resetArticle: () => initialState,
  },
});

export const { setTitle, setContent, setStatus, resetArticle } =
  articleSlice.actions;
export default articleSlice.reducer;
