"use client";
import Link from "next/link";
import styles from "../../../manual.module.css";

export default function ElectronicConfiguration() {
  function electronicConfiguration(atomicNumber: string) {
    var answer = document.getElementById("answer");
    if (atomicNumber) {
      var an: number = parseFloat(atomicNumber);
      var ec: string = "";
      var n: number = 1;
      var sc: number = 2 * (n * n);
      while (an > 0) {
        sc = 2 * (n * n);
        var s: number = 0;
        while (sc > 0) {
          if (an != 0) {
            s += 1;
            an--;
          }
          sc--;
        }
        ec += s + ", ";
        n++;
      }
      ec = ec.slice(0, ec.length - 2);
      if (answer) {
        answer.innerHTML = ec;
      }
    } else {
      if (answer) {
        answer.innerHTML = "";
      }
    }
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>Manual</h1>
      <h2 className={styles.title}>Electronic Configuration</h2>
      <input
        type="number"
        placeholder="Atomic Number of the Element?"
        onChange={(e) => electronicConfiguration(e.target.value)}
      />
      <h3 className={styles.equation} id="answer"></h3>
    </header>
  );
}

// sc = 2 * (n * n);
//         var s: number = 0;
//         while (sc>1) {
//           if (an != 0) {
//             s += 1;
//             an = an - 1;
//             sc -= 1;
//           }
//           sc--
//         }
//         ec += s+", ";
//         n ++;
