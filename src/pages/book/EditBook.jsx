import React, { useEffect } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleBookAction } from "../../features/books/bookAction";

const EditBook = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { selectedBook } = useSelector((state) => state.bookInfo);
  useEffect(() => {
    //fetch single book
    dispatch(getSingleBookAction(_id));
  }, [dispatch, _id]);
  return (
    <UserLayout pageTitle={"Edit book"}>
      name:{selectedBook.title}
      {_id}EditBook
    </UserLayout>
  );
};

export default EditBook;
