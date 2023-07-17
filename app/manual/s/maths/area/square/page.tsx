"use client"
import Link from "next/link";
import styles from "../../../../manual.module.css";

export default function Manual() {
  function areaOfSquare(side:string){
    var answer = document.getElementById('answer');
    if(side){
      var sideFloat:number = parseFloat(side)
      if(answer){
        answer.innerHTML = `${side} x ${side} = ${sideFloat * sideFloat}`;
      }
    }else{
      if(answer){
        answer.innerHTML = '';
      }
    }
  }

  return (
    <header className={styles.header} >
      <h1 className={styles.heading}>Manual</h1>
      <h2 className={styles.title} >Area of Square</h2>
      <h3 className={styles.equation} >Area of square = side x side</h3>
      <input type="number" placeholder="Side of the Square?" onChange={(e)=>areaOfSquare(e.target.value)} />
      <h3 className={styles.answer} id="answer" ></h3>
    </header>
  );
}
