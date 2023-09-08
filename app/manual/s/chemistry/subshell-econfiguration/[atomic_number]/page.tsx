import styles from "@/app/manual/manual.module.css";

export default function SubshellElectronicConfiguration({
  params,
}: {
  params: { atomic_number: string };
}) {
  const atomicNumber = params.atomic_number;
  let answer: string = "";
  function subshellelectronicConfiguration() {
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
          answer =
            "Atomic numbers represent the number of protons in an atom's nucleus. Since atoms cannot have a negative or zero atomic number, the subshell electronic configuration cannot be determined. Please enter an atomic number greater than or equal to 1.";
        }
        // Define the stable ones
        else if (an == 24) {
          answer =
            "The electron configuration of chromium is 1s^2 2s^2 2p^6 3s^2 3p^6 4s^1  3d^5. This configuration is different from what one might expect based on the order of filling of the 3d and 4s orbitals. Normally, electrons fill the 4s orbital before moving to the 3d orbital. However, in the case of chromium, one electron from the 4s orbital moves to the 3d orbital, resulting in a half-filled 3d subshell. This arrangement is more stable due to the exchange energy associated with electron-electron interactions in the subshell.";
        } else if (an == 29) {
          answer =
            "The electron configuration of copper is 1s^2 2s^2 2p^6 3s^2 3p^6 4s^1  3d^10. Similar to chromium, copper does not follow the usual filling order. Instead of having the 4s<span class='superscript' >2</span> configuration, one electron from the 4s orbital moves to the 3d orbital, leading to a fully-filled 3d subshell. A completely filled subshell is energetically favorable, resulting in greater stability.";
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
              answer = "Something Went Wrong!";

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
                    s += "^" + se + " ";
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
                          s += "^" + se + " ";
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
                          s += "^" + se + " ";
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

          answer = s;
        }
      } else {
        answer =
          "Oops! The atomic number you entered exceeds the maximum limit. Please enter a valid atomic number within the allowed range. Keep in mind that there is also no element with such a high atomic number.";
      }
    } else {
      answer = "";
    }
  }

  subshellelectronicConfiguration();

  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>Stem</h1>
      <h2 className={styles.title}>Subshell Electronic Configuration</h2>
      <p className={styles.des}>
        The Subshell Electronic Configuration in Stem calculates the subshell
        electronic configuration for any atom based on its atomic number. Simply
        input the atomic number, and the generator will provide you the subshell
        electronic configuration.
      </p>
      <h4 className={styles.what}>
        Subshell Electronic Configuration of the element with atomic number{" "}
        {atomicNumber}
      </h4>
      <h3 className={styles.answer}>{answer}</h3>
    </header>
  );
}
