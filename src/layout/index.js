import Nav from "../components/Nav";
import Footer from "../components/Footer";
const styles = {
  display: "flex",
  flexDirection: "column",
};

const contentStyles = {
  padding: "1.5em 2em",
  minHeight: "77vh",
};

const Layout = ({ children }) => {
  return (
    <main style={styles}>
      <Nav />
      <div style={contentStyles}>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
