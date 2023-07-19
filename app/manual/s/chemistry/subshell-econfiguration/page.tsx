"use client";
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
      let an: number = parseInt(atomicNumber);
      let s: string = "";
      let n: number = 1;
      let balance: Array<BalanceObj> = [];
      if (an < 100000) {
        if (an < 1) {
          if (answer) {
            answer.innerHTML =
              "Atomic numbers represent the number of protons in an atom's nucleus. Since atoms cannot have a negative or zero atomic number, the subshell electronic configuration cannot be determined. Please enter an atomic number greater than or equal to 1.";
          }
        }
        // Define the stable ones
        else if (an == 24) {
          if (answer) {
            answer.innerHTML =
              "The electron configuration of chromium is 1s<span class='superscript' >2</span> 2s<span class='superscript' >2</span> 2p<span class='superscript' >6</span> 3s<span class='superscript' >2</span> 3p<span class='superscript' >6</span> 4s<span class='superscript' >1</span>  3d<span class='superscript' >5</span>. This configuration is different from what one might expect based on the order of filling of the 3d and 4s orbitals. Normally, electrons fill the 4s orbital before moving to the 3d orbital. However, in the case of chromium, one electron from the 4s orbital moves to the 3d orbital, resulting in a half-filled 3d subshell. This arrangement is more stable due to the exchange energy associated with electron-electron interactions in the subshell.";
          }
        } else if (an == 29) {
          if (answer) {
            answer.innerHTML =
              "The electron configuration of copper is 1s<span class='superscript' >2</span> 2s<span class='superscript' >2</span> 2p<span class='superscript' >6</span> 3s<span class='superscript' >2</span> 3p<span class='superscript' >6</span> 4s<span class='superscript' >1</span>  3d<span class='superscript' >10</span>. Similar to chromium, copper does not follow the usual filling order. Instead of having the 4s<span class='superscript' >2</span> configuration, one electron from the 4s orbital moves to the 3d orbital, leading to a fully-filled 3d subshell. A completely filled subshell is energetically favorable, resulting in greater stability.";
          }
        } else {
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
                    s += "<span class='superscript' >" + se + "</span> ";
                  }
                }
                if (c == "s") {
                  // Balance Loop --start
                  balance.map((b) => {
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
                          s += "<span class='superscript' >" + se + "</span> ";
                        }
                      }
                    } else if (bc == "f") {
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
                          s += "<span class='superscript' >" + se + "</span> ";
                        }
                      }
                    }
                  });
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
        }
      } else {
        if (answer) {
          answer.innerHTML =
            "Oops! The atomic number you entered exceeds the maximum limit. Please enter a valid atomic number within the allowed range. Keep in mind that there is also no element with such a high atomic number.";
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
      <h1 className={styles.heading}>Stem</h1>
      <h2 className={styles.title}>Subshell Electronic Configuration</h2>
      <p className={styles.des} >
        The Subshell Electronic Configuration in Stem calculates the subshell
        electronic configuration for any atom based on its atomic number. Simply
        input the atomic number, and the generator will provide you the subshell
        electronic configuration.
      </p>
      <input
        type="number"
        placeholder="Atomic Number of the Element?"
        onChange={(e) => subshellelectronicConfiguration(e.target.value)}
      />
      <h3 className={styles.answer} id="answer"></h3>
    </header>
  );
}
