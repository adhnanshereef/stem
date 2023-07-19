"use client";
import styles from "./prompt.module.css";
import { useState } from "react";

import * as Functions from "./functions";

export default function Prompt() {
  const [prompts, setPrompts] = useState("");
  function proceed() {
    let unAnswere =
      "We're sorry, we are under development. So, we can't understand what you're asking about arithmetic sequence.";
    let answer = document.getElementById("answer");
    let prompt_array = prompts.split(" ");
    var stage1: any = "";
    var stage2: any = "";
    var iX: any = null;
    var n: any = null;
    var sequence: any = null;
    var value: any = null;
    var length: any = null;
    var breadth: any = null;
    var height: any = null;
    var radius: any = null;
    var side: any = null;
    var radiusOrDiameter: any = null;
    if (prompt_array.length == 1 && prompt_array[0] == "") {
      if (answer) {
        answer.innerHTML = "Enter a prompt before proceed!";
      }
      return;
    }
    if (answer) {
      answer.innerHTML = "Wait! I am thinking...";
    }
    for (let i = 0; i < prompt_array.length; i++) {
      var prompt = prompt_array[i];
      if (prompt == "sum") {
        stage2 = "sum";
        iX = prompt_array.indexOf("terms") - 1;
        n = prompt_array[iX];
        iX = null;
      } else if (prompt == "term") {
        stage2 = "nth";
        iX = i - 1;
        n = prompt_array[iX].replace(/(th|st|nd|rd)/g, "");
        iX = null;
      } else if (prompt == "arithmetic") {
        stage1 = "arithmetic";
      } else if (prompt == "sequence") {
        stage1 += " sequence";
        iX = i + 1;
        try {
          sequence = prompt_array[iX].split(",");
        } catch (e) {
          if (answer) {
            answer.innerHTML = "We couldn't find a arithmetic sequence!";
          }
          return;
        }
        if (sequence.length < 2) {
          if (answer) {
            answer.innerHTML =
              "We need at least first two terms to find the answer!";
          }
          return;
        }
        iX = null;
      } else if (prompt == "area") {
        stage1 = "area";
      } else if (prompt == "perimeter") {
        stage1 = "perimeter";
      } else if (prompt == "circle") {
        stage2 = "circle";
        iX = prompt_array.indexOf("with") + 1;
        radiusOrDiameter = prompt_array[iX];
        if (radiusOrDiameter == "radius" || radiusOrDiameter == "diameter") {
          iX = prompt_array.indexOf(radiusOrDiameter) + 1;
          value = prompt_array[iX];
        }
        iX = null;
      } else if (prompt == "square") {
        stage2 = "square";
        iX = prompt_array.indexOf("side") + 1;
        value = prompt_array[iX];
        iX = null;
      } else if (prompt == "rectangle") {
        stage2 = "rectangle";
        iX = prompt_array.indexOf("length") + 1;
        length = parseFloat(prompt_array[iX]);
        iX = prompt_array.indexOf("breadth") + 1;
        breadth = parseFloat(prompt_array[iX]);
        iX = null;
      }
      // Volume
      else if (prompt == "volume") {
        stage1 = "volume";
      } else if (prompt == "cylinder") {
        stage2 = "cylinder";
        iX = prompt_array.indexOf("radius") + 1;
        radius = parseFloat(prompt_array[iX]);
        iX = prompt_array.indexOf("height") + 1;
        height = parseFloat(prompt_array[iX]);
        iX = null;
      } else if (prompt == "sphere") {
        stage2 = "sphere";
        iX = prompt_array.indexOf("radius") + 1;
        radius = parseFloat(prompt_array[iX]);
        iX = null;
      } else if (prompt == "cube") {
        stage2 = "cube";
        iX = prompt_array.indexOf("side") + 1;
        side = parseFloat(prompt_array[iX]);
        iX = null;
      }
      // Subshell Electronic Configuration
      else if (prompt == "subshell") {
        if (prompt_array[i + 1] == "electronic") {
          stage1 = "subshell electronic configuration";
          iX = prompt_array.indexOf("atomic") + 2;
          stage2 = prompt_array[iX];
          iX = null;
        }
      }
    }
    // Words have been identified
    if (stage1 == "arithmetic sequence") {
      if (stage2 == "sum") {
        if (answer) {
          answer.innerHTML = Functions.findSumOfArithmeticSequence(
            sequence,
            n
          ).toString();
        }
      } else if (stage2 == "nth") {
        if (answer) {
          answer.innerHTML = Functions.findNthTermOfArithmeticSequence(
            sequence,
            n
          ).toString();
        }
      } else {
        if (answer) {
          answer.innerHTML = unAnswere;
        }
      }
    } else if (stage1 == "area") {
      if (stage2 == "circle") {
        if (answer) {
          answer.innerHTML = Functions.findAreaOfCircle(
            radiusOrDiameter,
            value
          ).toString();
        }
      } else if (stage2 == "square") {
        if (answer) {
          answer.innerHTML = Functions.findAreaOfSequare(value).toString();
        }
      } else if (stage2 == "rectangle") {
        if (answer) {
          answer.innerHTML = Functions.findAreaOfRectangle(
            length,
            breadth
          ).toString();
        }
      } else {
        if (answer) {
          answer.innerHTML =
            "We're sorry, we are under development. So, we can't understand what you're asking about area.";
        }
      }
    } else if (stage1 == "perimeter") {
      if (stage2 == "circle") {
        if (radiusOrDiameter == "radius") {
          if (answer) {
            answer.innerHTML = Functions.findPerimeterOfCircle(
              "radius",
              value
            ).toString();
          }
        } else if (radiusOrDiameter == "diameter") {
          if (answer) {
            answer.innerHTML = Functions.findPerimeterOfCircle(
              "diameter",
              value
            ).toString();
          }
        } else {
          if (answer) {
            answer.innerHTML =
              "Please provide the radius or diameter of the circle.";
          }
        }
      } else if (stage2 == "square") {
        if (answer) {
          answer.innerHTML = Functions.findPerimeterOfSquare(value).toString();
        }
      } else if (stage2 == "rectangle") {
        if (answer) {
          answer.innerHTML = Functions.findPerimeterOfRectangle(
            length,
            breadth
          ).toString();
        }
      } else {
        if (answer) {
          answer.innerHTML =
            "We're sorry, we are under development. So, we can't understand what you're asking about perimeter.";
        }
      }
    } else if (stage1 == "volume") {
      if (stage2 == "cylinder") {
        if (answer) {
          answer.innerHTML = Functions.findVolumeOfCylinder(
            radius,
            height
          ).toString();
        }
      } else if (stage2 == "sphere") {
        if (answer) {
          answer.innerHTML = Functions.findVolumeOfSphere(radius).toString();
        }
      } else if (stage2 == "cube") {
        if (answer) {
          answer.innerHTML = Functions.findVolumeOfCube(side).toString();
        }
      } else {
        if (answer) {
          answer.innerHTML =
            "We're sorry, we are under development. So, we can't understand what you're asking about volume.";
        }
      }
    } else if (stage1 == "subshell electronic configuration") {
      if (stage2) {
        if (answer) {
          answer.innerHTML = Functions.subshellelectronicConfiguration(stage2);
        }
      } else {
        if (answer) {
          answer.innerHTML =
            "Provide a atomic number to find Subshell Electronic Configuration";
        }
      }
    } else {
      if (answer) {
        answer.innerHTML =
          "We're sorry, we are under development. So, we can't answer your question.";
      }
    }
    if (answer) {
      answer.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>Prompt</h1>
      <textarea
        name="prompts"
        id="prompts"
        placeholder="What do you have to find?"
        value={prompts}
        onChange={(e) => setPrompts(e.target.value)}
      ></textarea>
      <button onClick={proceed}>Proceed</button>
      <p id="answer"></p>
    </header>
  );
}
