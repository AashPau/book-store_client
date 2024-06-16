import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import bookReducer from "../features/books/bookSlice";
import burrowReducer from "../features/burrow/burrowSlice";
import reviewReducer from "../features/reviews/reviewSlice";
import studentReducer from "../features/students/studentsSlice";

export default configureStore({
  reducer: {
    bookInfo: bookReducer,
    userInfo: userReducer,
    burrowInfo: burrowReducer,
    reviewInfo: reviewReducer,
    studentInfo: studentReducer,
  },
});
