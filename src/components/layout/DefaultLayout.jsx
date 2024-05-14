import { Container } from "react-bootstrap";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const DefaultLayout = ({ children, pageTitle }) => {
  return (
    <div>
      {/* header  */}
      <Header />
      <Container>
        {/* body  */}
        <div className="p-2">{pageTitle}</div>
        <main className="main">{children}</main>
      </Container>
      {/* footer  */}
      <Footer />
    </div>
  );
};
