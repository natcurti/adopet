import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import animalsAvaliable from "src/services/animalsAvaliable";
import { IAnimals } from "src/types/IAnimals";

const initialState: IAnimals[] = [];

export const getAnimals = createAsyncThunk(
  "animals/get",
  animalsAvaliable.getAnimals
);

const sliceAnimals = createSlice({
  name: "animals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAnimals.fulfilled, (state, { payload }) => {
      state.push(payload);
    });
  },
});

export default sliceAnimals.reducer;
