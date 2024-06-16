import React, { useEffect } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { Button, Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStudents } from "../../features/students/studentsAction";

const StudentsList = () => {
  const dispatch = useDispatch();
  const { students } = useSelector((state) => state.studentInfo);

  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);
  return (
    <UserLayout pageTitle="Student List">
      <div>
        <div className="d-flex justify-content-between mb-4">
          <div>{students.length} Reviews found!</div>
        </div>
        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {students.map((user, i) => (
              <tr key={user._id}>
                <td>{i + 1}</td>
                <td>{user.fName}</td>
                <td>{user.lName}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </UserLayout>
  );
};

export default StudentsList;
