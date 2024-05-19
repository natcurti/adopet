import { createSlice } from "@reduxjs/toolkit";
import { IAnimals } from "src/types/IAnimals";

const initialState: IAnimals[] = [];

const sliceAnimals = createSlice({
  name: "animals",
  initialState,
  reducers: {},
});

export default sliceAnimals.reducer;
