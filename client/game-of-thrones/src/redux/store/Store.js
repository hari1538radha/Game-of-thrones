import { configureStore } from "@reduxjs/toolkit";
import CharReducer from "../DataSlice/CharSLice";
export default configureStore({
  reducer: {
    data: CharReducer,
  },
});
