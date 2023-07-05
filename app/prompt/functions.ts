// ---/ Mathematics
// --------/ Arithmetic Sequencexporte
export function findNthTermOfArithmeticSequence(sequence: number[], n: number) {
  let d = sequence[1] - sequence[0];
  let f = sequence[0];
  let nthTerm = d * n + (f - d);
  return nthTerm;
}

export function findSumOfArithmeticSequence(sequence: number[], n: number) {
  let d = sequence[1] - sequence[0];
  let f = sequence[0];
  let sum = (n / 2) * (2 * f + (n - 1) * d);
  return sum;
}

// --------/ Area
// ------------/ Circle
export function findAreaOfCircle(radiusOrDiameter: string, value: number) {
  if (radiusOrDiameter == "radius") {
    return Math.PI * Math.pow(value, 2);
  } else if (radiusOrDiameter == "diameter") {
    return Math.PI * Math.pow(value / 2, 2);
  } else {
    return "Provided value is radius or diameter?";
  }
}

// ------------/ Sequare
export function findAreaOfSequare(side: number) {
  return Math.pow(side, 2);
}
// ------------/ Rectangle
export function findAreaOfRectangle(length: number, breadth: number) {
  return length * breadth;
}

// --------/ Perimeter
// ------------/ Circle
export function findPerimeterOfCircle(radiusOrDiameter: string, value: number) {
  if (radiusOrDiameter == "radius") {
    return 2 * Math.PI * value;
  } else if (radiusOrDiameter == "diameter") {
    return Math.PI * value;
  } else {
    return "Provided value is radius or diameter?";
  }
}

// ------------/ Square
export function findPerimeterOfSquare(side: number) {
  return 4 * side;
}

// ------------/ Rectangle
export function findPerimeterOfRectangle(length: number, breadth: number) {
  return 2 * (length + breadth);
}

// --------/ Volume
// ------------/ Cube
export function findVolumeOfCube(side: number) {
  return Math.pow(side, 3);
}
// ------------/ Cylinder
export function findVolumeOfCylinder(radius: number, height: number) {
  return Math.PI * Math.pow(radius, 2) * height;
}
// ------------/ Sphere
export function findVolumeOfSphere(radius: number) {
  return (4 / 3) * Math.PI * Math.pow(radius, 3);
}
