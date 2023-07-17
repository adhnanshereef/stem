"use client";
import Link from "next/link";
import styles from "../../../../manual.module.css";

export default function AreaOfRectangle() {
  let length:string = "";
  let breadth:string = "";
  function setL(l:string){
    length = l
    areaOfRectangle()
  }
  function setB(b:string){
    breadth = b
    areaOfRectangle()
  }
  function areaOfRectangle() {
    var answer = document.getElementById("answer");
    if (length && breadth) {
      var lengthFloat: number = parseFloat(length);
      var breadthFloat: number = parseFloat(breadth);
      if (answer) {
        answer.innerHTML = `${length} x ${breadth} = ${lengthFloat * breadthFloat}`;
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
      <h2 className={styles.title}>Area of Rectangle</h2>
      <h3 className={styles.equation}>Area of Rectangle = length x breadth</h3>
      <input
        type="number"
        placeholder="Length of the Rectangle?"
        onChange={(e)=>setL(e.target.value)}
      />
      <input
        type="number"
        placeholder="Breadth of the Rectangle?"
        onChange={(e)=>setB(e.target.value)}
      />
      <h3 className={styles.answer} id="answer"></h3>
    </header>
  );
}
