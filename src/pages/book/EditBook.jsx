import { useEffect } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editSingleBookAction,
  getSingleBookAction,
} from "../../features/books/bookAction";
import useForm from "../../hooks/useForm";
import { inputFields } from "../../assets/formInputs";
import { CustomInput } from "../../components/customInpute/CustomInput";
import { Button, Form } from "react-bootstrap";

const EditBook = () => {
  const { _id } = useParams();

  const dispatch = useDispatch();
  const { form, handleOnChange, setForm } = useForm({});
  const { selectedBook } = useSelector((state) => state.bookInfo);

  useEffect(() => {
    //fetch single book

    if (_id !== form?._id) {
      dispatch(getSingleBookAction(_id));
      setForm(selectedBook);
    }
  }, [dispatch, _id, selectedBook, setForm, form]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { __v, createdAt, updatedAt, isbn, ...rest } = form;
    console.log(rest);
    if (window.confirm("Are you sure you want to make changes to the book")) {
      dispatch(editSingleBookAction(rest));
    }
  };

  return (
    <UserLayout pageTitle="Edit book">
      <div className="mt-5">
        <h4 className="py-4 ">Update details about the book</h4>
        <hr />
        <Form onSubmit={handleOnSubmit}>
          <Form.Check
            name="status"
            type="switch"
            checked={form?.status === "active"}
            onChange={handleOnChange}
            label={form?.status?.toUpperCase()}
            className={
              form?.status === "active"
                ? "mb-3 text-success"
                : "mb-3 text-danger"
            }
          />
          {inputFields.map((input, i) => {
            return (
              <CustomInput
                key={i}
                disabled={input.name === "isbn"}
                {...input}
                onChange={handleOnChange}
                value={form[input.name]}
              />
            );
          })}
          <div className="d-grid">
            <Button type="submit">Update Book Details</Button>
          </div>
        </Form>
      </div>
    </UserLayout>
  );
};

export default EditBook;
