import styles from "./component-styles/nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <h2>Native Form Builder</h2>
      </div>
    </nav>
  );
};

export default Nav;
