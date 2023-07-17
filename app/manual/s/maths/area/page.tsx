import Link from "next/link";
import styles from "../../../manual.module.css";

export default function Area() {
  return (
    <header className={styles.header} >
      <h1 className={styles.heading}>Manual</h1>
      <h2 className={styles.title}>Area</h2>
      <div className={styles.manuals}>
        <Link href="./area/square" className="button-a">
          Square
        </Link>
        <Link href="/manual/s/maths/area/circle" className="button-a">
          Circle
        </Link>
        <Link href="/manual/s/maths/area/rectangle" className="button-a">
          Rectangle
        </Link>
      </div>
    </header>
  );
}
