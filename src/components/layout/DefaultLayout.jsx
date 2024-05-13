import { Footer } from "./Footer";
import { Header } from "./Header";

export const DefaultLayout = ({ children }) => {
  return (
    <div>
      {/* header  */}
      <Header />

      {/* body  */}
      <main className="main">({children})</main>
      {/* footer  */}
      <Footer />
    </div>
  );
};
