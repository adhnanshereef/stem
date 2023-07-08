"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./manual.module.css";

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
    <header>
      <h1 className={styles.heading}>Manual</h1>
      <div className={styles.manuals}>
        <button
          onClick={(e) => showSubManuals("maths")}
          className={styles.manual}
        >
          Maths <i className="fa-solid fa-caret-down"></i>
        </button>
        <div id="maths" className={styles.subManuals}>
          <Link href="/manual/s/maths/area" className="button-a">
            Area
          </Link>
        </div>
        <button className={styles.manual}>
          Physics <i className="fa-solid fa-caret-down"></i>
        </button>

        {/* Chemistry --start */}
        <button onClick={(e) => showSubManuals("chemistry")} className={styles.manual}>
          Chemistry <i className="fa-solid fa-caret-down"></i>
        </button>
        <div id="chemistry" className={styles.subManuals}>
          <Link href="/manual/s/chemistry/electronic-configuration" className="button-a">
            Electronic Configuration
          </Link>
        </div>
        {/* Chemistry --end */}
      </div>
    </header>
  );
}
