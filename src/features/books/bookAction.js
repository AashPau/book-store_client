import { fetchBooks, fetchSingleBook, postNewBook } from "./bookAxios";
import { toast } from "react-toastify";
import { setBooks } from "./bookSlice";
import setSelectedBook from "./bookSlice";

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
};
export const getAllBooks = () => async (dispatch) => {
  const { status, books } = await fetchBooks();
  if (status) {
    dispatch(setBooks(books));
  }
};

fetchSingleBook;

export const getSingleBookAction = (_id) => async (dispatch) => {
  const { status, books } = await fetchSingleBook(_id);
  if (status) {
    dispatch(setSelectedBook(books));
  }
};
