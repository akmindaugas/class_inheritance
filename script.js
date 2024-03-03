console.log("script.ts file alive");
// class
export class Figure {
    constructor({ color, isDigital }) {
        this.color = color;
        this.isDigital = isDigital;
    }
    //  method
    draw() {
        console.log("consolelog draw");
    }
    setColor(color) {
        if (!color) {
            return;
        }
        this.color = color;
    }
    getIsDigital() {
        return this.isDigital;
    }
}
