class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

// Example usage:
const calc = new Calculator();
console.log(calc.add(5, 3));        // 8
console.log(calc.subtract(5, 3));   // 2
console.log(calc.multiply(5, 3));   // 15
console.log(calc.divide(5, 0));      // Error: Cannot divide by zero