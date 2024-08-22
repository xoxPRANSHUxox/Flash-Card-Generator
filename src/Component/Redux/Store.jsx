import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./Reducer";

const store = configureStore({
  reducer: {
    flashcardState: reducer, // Name this slice of state appropriately
  },
});

export default store;
