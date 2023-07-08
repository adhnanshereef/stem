"use client";
import Link from "next/link";
import styles from "../../../../manual.module.css";

export default function AreaOfCircle() {
  type Type = "radius" | "diameter";
  let type: Type = "radius";
  let placeholder = `${
    type.charAt(0).toUpperCase() + type.slice(1)
  } of the Circle?`;
  function setType(value: Type) {
    type = value;
    placeholder = `${
      type.charAt(0).toUpperCase() + type.slice(1)
    } of the Circle?`;
    areaOfCircle();
    changePlaceholder();
  }
  function changePlaceholder() {
    const input = document.querySelector("input");
    if (input) {
      input.placeholder = placeholder;
    }
  }
  let value: string = "";
  function setValue(v: string) {
    value = v;
    areaOfCircle();
  }
  function areaOfCircle() {
    var answer = document.getElementById("answer");
    if (value) {
      var valueFloat = parseFloat(value);
      if (type == "diameter") {
        if (answer) {
          answer.innerHTML = `
          d = ${valueFloat}
          <br/> 
          r = ${valueFloat} / 2
          <br/> 
          r = ${valueFloat / 2} 
          <br/> 
          π ${valueFloat / 2} ^2 = ${Math.PI * Math.pow(valueFloat / 2, 2)}`;
        }
      } else if (type == "radius") {
        if (answer) {
          answer.innerHTML = `
            r = ${valueFloat} 
            <br/> 
            π ${valueFloat} ^2 = ${Math.PI * Math.pow(valueFloat, 2)}`;
        }
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
      <h2 className={styles.title}>Area of Circle</h2>
      <h3 className={styles.equation}>Area of Circle = πr^2</h3>
      <div className="inpSection">
        <h4 className={styles.question}>
          Do you have the diameter or the radius of the circle?
        </h4>
        <select
          onChange={(e) => setType(e.target.value as Type)}
          defaultValue="radius"
          name=""
          id=""
        >
          <option value="radius">Radius</option>
          <option value="diameter">Diameter</option>
        </select>
      </div>
      <input
        type="number"
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
      <h3 className={styles.equation} id="answer"></h3>
    </header>
  );
}
