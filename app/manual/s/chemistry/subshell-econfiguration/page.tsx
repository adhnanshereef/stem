"use client";
import Link from "next/link";
import styles from "../../../manual.module.css";

export default function SubshellElectronicConfiguration() {
  function subshellelectronicConfiguration(atomicNumber: string) {
    var answer = document.getElementById("answer");
    if (atomicNumber) {
      interface BalanceObj {
        block: string;
        shell: number;
      }
      let max: { [key: string]: number } = { s: 2, p: 6, d: 10, f: 14 };
      let an: number = parseFloat(atomicNumber);
      let s: string = "";
      let n: number = 1;
      let balance: Array<BalanceObj> = [];
      // let cs: string = "s";
      while (an > 0) {
        let maxS: Array<string> = [];
        // If --start
        if (n == 1) {
          maxS = ["s"];
        } else if (n == 2) {
          maxS = ["s", "p"];
        } else if (n == 3) {
          maxS = ["s", "p", "d"];
        } else if (n > 3) {
          maxS = ["s", "p", "d", "f"];
        } else {
          if (answer) {
            answer.innerHTML = "Something Went Wrong!";
          }
          break;
        }
        // If --end

        for (var i = 0; i < maxS.length; i++) {
          var c = maxS[i];

          if (an > 0) {
            if (c == "d") {
              balance.push({ block: c, shell: n });
            } else if (c == "f") {
              balance.push({ block: c, shell: n });
            } else {
              if (an > 0) {
                s += n + c;
                var se: number = 0;
                for (var j = 0; j < max[c]; j++) {
                  if (an > 0) {
                    se++;
                    an--;
                  }
                }
                s += se + " ";
              }
            }
            if (c == "s") {
              // Balance Loop --start
              for (var g = 0; g < balance.length; g++) {
                var b = balance[g];

                var bc = b.block;
                var bn = b.shell;

                if (bc == "d") {
                  if (bn == n - 1) {
                    if (an > 0) {
                      s += bn + bc;
                      var se: number = 0;
                      for (var j = 0; j < max[bc]; j++) {
                        if (an > 0) {
                          se++;
                          an--;
                        }
                      }
                      s += se + " ";
                      balance.splice(g, 1);
                    }
                  }
                }else if (bc == "f") {
                  if (bn == n - 2) {
                    if (an > 0) {
                      s += bn + bc;
                      var se: number = 0;
                      for (var j = 0; j < max[bc]; j++) {
                        if (an > 0) {
                          se++;
                          an--;
                        }
                      }
                      s += se + " ";
                      balance.splice(g, 1);
                    }
                  }
                }
              }
              // Balance Loop --end
            }
          }
        }

        n++;
      }
      s = s.slice(0, s.length - 1);
      if (answer) {
        answer.innerHTML = s;
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
      <h2 className={styles.title}>Subshell Electronic Configuration</h2>
      <input
        type="number"
        placeholder="Atomic Number of the Element?"
        onChange={(e) => subshellelectronicConfiguration(e.target.value)}
      />
      <h3 className={styles.equation} id="answer"></h3>
    </header>
  );
}
