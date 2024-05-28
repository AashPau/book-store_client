import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import bookReducer from "../features/books/bookSlice";

export default configureStore({
  reducer: {
    bookInfo: bookReducer,
    userInfo: userReducer,
  },
});
