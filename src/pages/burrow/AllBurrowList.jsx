import { useEffect } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBurrowsAction } from "../../features/burrow/burrowAction";
import { Table } from "react-bootstrap";

const AllBurrowList = () => {
  const dispatch = useDispatch();
  const { burrows } = useSelector((state) => state.burrowInfo);

  useEffect(() => {
    dispatch(fetchAllBurrowsAction());
  }, [dispatch]);

  return (
    <UserLayout pageTitle={"All burrow list"}>
      <div>
        <div className="d-flex justify-content-between mb-4">
          <div>{burrows.length} Reviews found!</div>
        </div>
        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Book Title</th>
              <th>Returned?</th>
            </tr>
          </thead>
          <tbody>
            {burrows.map((item, i) => (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>{item.userName}</td>
                <td>{item.bookTitle}</td>
                <td>{item.isReturned.toString().toUpperCase()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </UserLayout>
  );
};

export default AllBurrowList;
