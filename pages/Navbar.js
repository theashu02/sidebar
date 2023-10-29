import styles from "../styles/Home.module.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export default function Navbar() {
  return (
    <div className={styles.sidenavcontainer}>
      <div className={styles.navupper}>
        <div className={styles.navmenu}>
          <a className={styles.menuitem}>
            <p className={rubik.className}>Dashboard</p>
          </a>
          <a className={styles.menuitem}>
            <p className={rubik.className}>Approval Application</p>
          </a>
          <a className={styles.menuitem}>
            <p className={rubik.className}>Join/Create a meet</p>
          </a>
          <a className={styles.menuitem}>
            <p className={rubik.className}>Complaints/Issue</p>
          </a>
          <a className={styles.menuitem}>
            <p className={rubik.className}>Important Links</p>
          </a>
        </div>
      </div>
      <div className={styles.navfooter}>
          <a className={styles.footer}>
            <p className={rubik.className}>SignOut</p>
          </a>
      </div>
    </div>
  );
}
