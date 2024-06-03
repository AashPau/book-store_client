import {
  fetchBooks,
  fetchSingleBook,
  postNewBook,
  editSingleBook,
} from "./bookAxios";
import { toast } from "react-toastify";
import { setBooks, setSelectedBook } from "./bookSlice";

export const postNewBookAction = (obj) => async (dispatch) => {
  const pending = postNewBook(obj);
  // call axios to gety data
  toast.promise(pending, {
    pending: "Please wait",
    success: pending.message,
  });
  const { status, message } = await pending;
  toast[status](message);
  //call slicer to save data
  dispatch(setBooks());
};
export const getAllBooksAction = (isPrivate) => async (dispatch) => {
  const { status, books } = await fetchBooks(isPrivate);
  if (status) {
    dispatch(setBooks(books));
  }
};

export const getSingleBookAction = (_id) => async (dispatch) => {
  console.log({ _id });
  const { status, books } = await fetchSingleBook(_id);
  console.log({ books });
  if (status) {
    dispatch(setSelectedBook(books));
  }
};

export const editSingleBookAction = (obj) => async (dispatch) => {
  const pending = editSingleBook(obj);
  toast.promise(pending, { pending: "Editing Book..." });
  const { status, message } = await pending;
  console.log(message);
  toast[status](message);
  status === "success" && dispatch(getSingleBookAction(obj._id));
};
