//Задача 1
function parseCount(number) {
    let parse = Number.parseInt(number);
    if (Number.isNaN(parse)) {
       throw new Error("Невалидное значение");
    }
    return parse;
 }
 
 function validateCount(number) {
    try {
       return parseCount(number);
    } catch (error) {
       return error;
    }
 }
 
 //Задача 2
 class Triangle {
    constructor(side1, side2, side3) {
       if ((side1 > (side2 + side3)) || (side2 > (side1 + side3)) || (side3 > (side2 + side1))) {
          throw new Error("Треугольник с такими сторонами не существует");
       }
       this.side1 = side1;
       this.side2 = side2;
       this.side3 = side3;
    }
    getPerimeter() {
       return this.side1 + this.side2 + this.side3;
    }
    getArea() {
       const p = this.getPerimeter() / 2;
       return +Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3)).toFixed(3);
    }
 }
 
 function getTriangle(side1, side2, side3) {
    try {
       let triangle = new Triangle(side1, side2, side3);
       return triangle;
    } catch (error) {
       return {
          getArea() {
             return "Ошибка! Треугольник не существует"
          },
          getPerimeter() {
             return "Ошибка! Треугольник не существует"
          },
       }
    }
 }