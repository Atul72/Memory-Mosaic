import AppNav from "./AppNav";
import styles from "./SideBar.module.css";
import { Outlet } from "react-router-dom";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; copyright {new Date().getFullYear()} by Memory Mosaic Inc.
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
