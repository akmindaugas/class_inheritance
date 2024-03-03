console.log("script.ts file alive");
// 1. Sukurti klasę Figure. Klasė turi turėt parameturs "color", "isDigital". Metodą "draw";
// 2. Sukurtos klasės parametrai turi būt protected tipo;
// 3. Sukurkit klases Triangle ir Circle;
// 4.  Circle iš viso turi turėt parameturs "color", "isDigital", parametrą "draw";
// 5. Triangle iš viso turi turėt parameturs "color", "isDigital", "aLength", "bLength", "cLength", bei parametrus "draw", "getArea"; (Triagle turės turėti savo kenstruktoriu bei kviesti super() );
// 6. Triangle sukurti "color" getterį bei setterį;
// 7. Triangle turi turėt metodą getPerimeter;
// 8. Išanalizuot CAO 9 temos pvz;

// type
// type FigureType = {
//   color: string;
//   isDigital: boolean;
// };
// class
export class Figure {
  constructor(color: string, isDigital: boolean) {
    this.color = color;
    this.isDigital = isDigital;
  }

  // access protection
  private color: string;
  private isDigital: boolean;
  //  method
  draw() {
    console.log("consolelog draw");
  }

  setColor(color: Figure["color"]) {
    if (!color) {
      return;
    }
    this.color = color;
  }
  getIsDigital() {
    return this.isDigital;
  }
}
// ==========================================
// type TriangleType = {
//   aLength: number;
//   bLength: number;
//   cLength: number;
// }

export class Triangle extends Figure {
  constructor(
    color: string,
    isDigital: boolean,
    aLength: number,
    bLength: number,
    cLength: number
  ) {
    super(color, isDigital);
    this.aLength = aLength;
    this.bLength = bLength;
    this.cLength = cLength;
  }

  aLength: number;
  bLength: number;
  cLength: number;

  draw() {
    console.log("draw Triangle");
  }
  getArea() {
    return "perimeter";
  }
}
// ====================================================
export class Circle extends Figure {
  constructor(color: string, isDigital: boolean) {
    super(color, isDigital);
  }

  draw() {
    console.log("draw Circle");
  }
}

console.log("last code line");
