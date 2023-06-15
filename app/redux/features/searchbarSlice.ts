import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SearchbarState = {
  open: boolean;
};

const initialState = {
  open: false,
} as SearchbarState;

export const searchbar = createSlice({
  name: "searchbar",
  initialState,
  reducers: {
    reset: () => initialState,
    openDialog: (state) => {
      state.open = true;
    },
    closeDialog: (state) => {
      state.open = false;
    },
  },
});

export const { openDialog, closeDialog, reset } = searchbar.actions;

export default searchbar.reducer;
