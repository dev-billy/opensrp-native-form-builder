const date = new Date();
const styles = {
  width: "100%",
  background: "#112137CF",
  color: "#fff",
};
const Footer = () => {
  return (
    <footer style={styles}>
      <p style={{ textAlign: "center" }}>&copy; {date.getFullYear()} </p>
    </footer>
  );
};

export default Footer;
