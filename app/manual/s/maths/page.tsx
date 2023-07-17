"use client";
import Link from "next/link";
import styles from "../../manual.module.css";

export default function Manual() {
  function showSubManuals(id: string) {
    var subManualsElement = document.getElementById(id);
    if (subManualsElement) {
      if (subManualsElement.style.display != "flex") {
        subManualsElement.style.display = "flex";
      } else if (subManualsElement.style.display == "flex") {
        subManualsElement.style.display = "none";
      }
    }
  }

  return (
    <header className={styles.header} >
      <h1 className={styles.heading}>Manual</h1>
      <h2 className={styles.title} >Area</h2>
      <div className={styles.manuals}>
        <Link href="/manual/s/maths/area" className="button-a">
          Area
        </Link>
      </div>
    </header>
  );
}
