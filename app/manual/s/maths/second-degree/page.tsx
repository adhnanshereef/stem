"use client";
import { useState } from "react";
import styles from "../../../manual.module.css";

export default function AreaOfCircle() {
  const [aa, setA] = useState<number | undefined>();
  const [bb, setB] = useState<number | undefined>();
  const [cc, setC] = useState<number | undefined>();
  const [dd, setD] = useState<number>(0);
  function quadraticFormula(a: number, b: number, c: number) {
    var answer = document.getElementById("answer");
    var discriminant: number = b * b - 4 * a * c;
    if (discriminant > 0) {
      var x1: number = (-b + Math.sqrt(discriminant)) / (2 * a);
      var x2: number = (-b - Math.sqrt(discriminant)) / (2 * a);
      if (answer) {
        answer.innerHTML = `
        Since b<span class='superscript'>2</span> - 4 a c = ${b}<span class='superscript'>2</span> - 4×${a}×${c} = ${discriminant} which is greater than 0, there are multiple solutions for the equation.
        <br/>
        <div class="division">
          <span class="nominator">
            -b ± √b<span class="superscript">2</span> - 4 a c
          </span>
          <span class="denominator">2 a</span>
        </div>
        <div class="division">
        <span class="nominator">
          -${b} + √${discriminant}
        </span>
        <span class="denominator">2×${a}</span>
        </div> = ${x1}
        <br />
        AND
        <br />
      <div class="division">
      <span class="nominator">
        -${b} - √${discriminant}
      </span>
      <span class="denominator">2×${a}</span>
      </div> = ${x2}
      <br />
      The solutions of the equation are ${x1} and ${x2}
        `;
      }
    } else if (discriminant == 0) {
      var x: number = -b / (2 * a);
      if (answer) {
        answer.innerHTML = `
        Since b<span class='superscript'>2</span> - 4 a c = ${b}<span class='superscript'>2</span> - 4×${a}×${c} = ${discriminant} which is equal to 0, there is only one solution for the equation.
        <br/>
        <div class="division">
          <span class="nominator">
            -b ± √b<span class="superscript">2</span> - 4 a c
          </span>
          <span class="denominator">2 a</span>
        </div>
        <div class="division">
        <span class="nominator">
          -${b}
        </span>
        <span class="denominator">2×${a}</span>
        </div> = ${x}
      <br />
        The solution of the equation is ${x}
        `;
      }
    } else {
      if (answer) {
        answer.innerHTML = `Since b<span class='superscript'>2</span> - 4 a c = ${b}<span class='superscript'>2</span> - 4×${a}×${c} = ${discriminant}
         which is less than 0, the roots of the equation are complex numbers. Therefore, there is no solution for the equation.`;
      }
    }
  }
  function find() {
    if (aa && bb && cc) {
      quadraticFormula(aa, bb, cc - dd);
    } else {
      var answer = document.getElementById("answer");
      if (answer) {
        answer.innerHTML = "Please fill all the fields";
      }
    }
  }
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>Manual</h1>
      <h2 className={styles.title}>Second Degree Equation</h2>
      <h3 className={styles.equation}>
        Quadratic Formula x ={" "}
        <div className="division">
          <span className="nominator">
            -b ± √b<span className="superscript">2</span> - 4 a c
          </span>
          <span className="denominator">2 a</span>
        </div>
        ax<span className="superscript">2</span> + bx + c = 0
      </h3>
      <div className={styles.sdInput}>
        <input
          id="a"
          placeholder="a"
          type="number"
          value={aa || ""}
          onChange={(e) => setA(e.target.valueAsNumber)}
        />{" "}
        x<span className="superscript">2</span> &nbsp;+{" "}
        <input
          id="b"
          placeholder="b"
          type="number"
          value={bb || ""}
          onChange={(e) => setB(e.target.valueAsNumber)}
        />{" "}
        x +{" "}
        <input
          id="c"
          placeholder="c"
          type="number"
          value={cc || ""}
          onChange={(e) => setC(e.target.valueAsNumber)}
        />{" "}
        ={" "}
        <input
          id="d"
          type="number"
          value={dd || 0}
          onChange={(e) => setD(e.target.valueAsNumber)}
        />
      </div>
      <button onClick={() => find()}>Find</button>
      <br />
      <h3 className={styles.answerLeft} id="answer"></h3>
    </header>
  );
}
