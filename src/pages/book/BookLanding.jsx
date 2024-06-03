import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { ReviewBlock } from "../../components/customCard/ReviewBlock";
import { Stars } from "../../components/stars/Stars";
import { addNewBurrowAction } from "../../features/burrow/burrowAction";

const BookLanding = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();
  const { books } = useSelector((state) => state.bookInfo);
  const { user } = useSelector((state) => {
    state.userInfo;
  });
  const book = books.find((item) => item._id === _id);
  if (!book?._id) {
    return <Spinner animation="border" variant="success" />;
  }
  const { thumbnail, title, author, publishedYear, description } = book;
  const handleOnBookBurrow = () => {
    if (window.confirm("Are you sure you want to burrow this book?")) {
      dispatch(
        addNewBurrowAction({
          bookId: _id,
          bookTitle: title,
          thumbnail: thumbnail,
        })
      );
    }
  };
  return (
    <DefaultLayout>
      <Row className="g-2">
        <Col md={6}>
          <div className="m-auto" style={{ maxWidth: "450px" }}>
            <img src={thumbnail} alt="" width={"100%"} />
          </div>
        </Col>
        <Col md={6}>
          <h1>{title}</h1>
          <p>
            {author} - {publishedYear}
          </p>
          <p>
            <Stars stars={3} />
          </p>
          <p className="mt-5">{description.slice(0, 130)}...</p>
          <div className="d-grid">
            {user?._id ? (
              <Button disabled={isAvailable} onClick={handleOnBookBurrow}>
                Burrow this book
              </Button>
            ) : (
              <Link className="d-grid" to="/signin">
                <Button>Login to Burrow</Button>
              </Link>
            )}
          </div>
        </Col>
      </Row>
      <Row className="py-5">
        <Col>
          {/* tab bar */}
          <Tabs
            defaultActiveKey="description"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="description" title="Description">
              {description}
            </Tab>
            <Tab eventKey="reviews" title="Reviews">
              <ReviewBlock />
            </Tab>
          </Tabs>

          {/* content area  */}
        </Col>
      </Row>
    </DefaultLayout>
  );
};

export default BookLanding;
