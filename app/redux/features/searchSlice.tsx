import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SearchState = {
  keyword: string;
};

const initialState = {
  keyword: "",
} as SearchState;

export const search = createSlice({
  name: "search",
  initialState,
  reducers: {
    reset: () => initialState,
    setKeywordSearch: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },
  },
});

export const { setKeywordSearch, reset } = search.actions;

export default search.reducer;
