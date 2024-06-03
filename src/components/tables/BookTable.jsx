import { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { getAllBooksAction } from "../../features/books/bookAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const isPrivate = true;

export const BookTable = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.bookInfo);
  useEffect(() => {
    dispatch(getAllBooksAction(isPrivate));
  }, [dispatch]);
  console.log("books");
  console.log(books);
  return (
    <div>
      <div className="d-flex justify-content-between">
        <div>{books.length || 0} books found</div>
        <div>
          <input type="text" className="form-control" />
        </div>
      </div>
      <hr />
      <Table striped bordered hover>
        {/* <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead> */}
        <tbody>
          {books.map((item, i) => {
            return (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>
                  <img src={item.thumbnail} alt="" width={"70px"} />
                </td>
                <td>
                  <h2>{item.title}</h2>
                  <div>{item.author}</div>
                  <div
                    className={
                      item.status === "active" ? "text-success" : "text-danger"
                    }
                  ></div>
                </td>
                <td>
                  <Link to={"/admin/book/edit/" + item._id}>
                    <Button variant="warning">Edit</Button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
