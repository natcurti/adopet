import { configureStore } from "@reduxjs/toolkit";
import sliceAnimals from "./reducers/sliceAnimals";

const store = configureStore({
  reducer: {
    animals: sliceAnimals,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
