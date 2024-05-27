import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
// import { IoIosAddCircle } from "react-icons";
import { BookTable } from "../../components/tables/BookTable";

const BookList = () => {
  return (
    <UserLayout pageTitle={"Book List"}>
      <div className="text-end mb-5">
        <Link to="/admin/books/new">
          <Button variant="primary">
            {/* <IoIosAddCircle /> */}
            Add New book
          </Button>
        </Link>
      </div>
      <BookTable />
    </UserLayout>
  );
};

export default BookList;
