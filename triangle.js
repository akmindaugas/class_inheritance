console.log("triangle.ts file alive");
import { Figure, Triangle } from "./figure.js";
// ===================================
const newFigure = new Figure("red", true);
console.log(newFigure);
newFigure.draw();
// =================================
const newTriangle = new Triangle("red", false, 19, 12, 34);
console.log(newTriangle);
