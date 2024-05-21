import { Col, Container, Row } from "react-bootstrap";
import { AuthRoute } from "../auth/AuthRoute";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { UserSidebar } from "./UserSidebar";
import { useSelector } from "react-redux";

export const UserLayout = ({ children, pageTitle }) => {
  const { user } = useSelector((state) => state.userInfo);
  return (
    <AuthRoute>
      <div>
        <Header />
        <Container fluid>
          <Row>
            <Col xs={3} className="bg-dark text-light">
              <div className="p-3">
                <div> Welcome</div>
                <h3>{user.fname + " " + user.lname}</h3>
              </div>
              <hr />
              <UserSidebar />
            </Col>
            <Col>
              <div className="p-2">{pageTitle}</div>
              <hr />
              <main className="main">{children}</main>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </AuthRoute>
  );
};
