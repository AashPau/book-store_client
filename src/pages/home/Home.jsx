import { useEffect, useState } from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { CustomCarousel } from "../../components/customCarouse/CustomCarousel";
import { Container, Row, Col, Form } from "react-bootstrap";
import { CustomCard } from "../../components/customCard/CustomCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const { books } = useSelector((state) => state.bookInfo);
  const [searchBooks, setSearchBooks] = useState([]);

  useEffect(() => {
    setSearchBooks(books);
  }, [books]);

  const handleOnSearch = (e) => {
    const { value } = e.target;

    setSearchBooks(
      books.filter(({ title }) =>
        title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };
  return (
    <DefaultLayout>
      <CustomCarousel />

      {/* book list  */}

      <Container>
        <Row>
          <Col className="d-flex justify-content-between mt-5">
            <label>{books.length} books found!</label>
            <div>
              <Form.Control
                onChange={handleOnSearch}
                placeholder="search by book name .. "
              />
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="d-flex gap-2 flex-wrap">
            {/* loop through the book  */}
            {searchBooks.map(
              (book) =>
                book.status === "active" && (
                  <Link key={book._id} to={"/book/" + book._id}>
                    <CustomCard key={book._id} {...book} />
                  </Link>
                )
            )}
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default Home;
