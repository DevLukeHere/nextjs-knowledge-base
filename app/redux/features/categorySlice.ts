import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CategoryState = {
  currentCategory: any;
};

const initialState = {
  currentCategory: [],
} as CategoryState;

export const category = createSlice({
  name: "category",
  initialState,
  reducers: {
    reset: () => initialState,
    setCurrentCategory: (state, action: PayloadAction<any>) => {
      state.currentCategory = action.payload;
    },
  },
});

export const { setCurrentCategory, reset } = category.actions;

export default category.reducer;
