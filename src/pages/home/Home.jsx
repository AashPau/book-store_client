import { Container, Row, Col, Form } from "react-bootstrap";
import { CustomCarousel } from "../../components/customCarousel/CustomCarousel";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { CustomCard } from "../../components/customCard/CustomCard";

const Home = () => {
  return (
    <div>
      <DefaultLayout>
        <CustomCarousel />
        {/* book list  */}
        <Container>
          <Row>
            <Col className="d-flex justify-content-between mt-5">
              <label htmlFor="">20 books found</label>
              <div>
                <Form.Control placeholder="search by book name..."></Form.Control>
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <CustomCard />
            </Col>
          </Row>
        </Container>
      </DefaultLayout>
    </div>
  );
};

export default Home;
