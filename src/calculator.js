/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   + (Addition)          – Adds two numbers
 *   - (Subtraction)       – Subtracts the second number from the first
 *   * (Multiplication)    – Multiplies two numbers
 *   / (Division)          – Divides the first number by the second (with division-by-zero handling)
 *   % (Modulo)            – Returns the remainder of dividing the first number by the second (with division-by-zero handling)
 *   ** (Exponentiation)   – Raises the first number to the power of the second
 *   sqrt (Square Root)    – Returns the square root of a number (with negative number handling)
 */

function createInterface() {
  const readline = require("readline");
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

function prompt(rl, question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

// Addition: adds two numbers
function add(a, b) {
  return a + b;
}

// Subtraction: subtracts b from a
function subtract(a, b) {
  return a - b;
}

// Multiplication: multiplies two numbers
function multiply(a, b) {
  return a * b;
}

// Division: divides a by b, with division-by-zero handling
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// Modulo: returns the remainder of a divided by b, with division-by-zero handling
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Cannot modulo by zero");
  }
  return a % b;
}

// Exponentiation: raises base to the power of exp
function exponentiation(base, exp) {
  return Math.pow(base, exp);
}

// Square Root: returns the square root of n, with negative number handling
function squareRoot(n) {
  if (n < 0) {
    throw new Error("Cannot take the square root of a negative number");
  }
  return Math.sqrt(n);
}

async function main() {
  const rl = createInterface();
  console.log("=== Node.js CLI Calculator ===");
  console.log("Supported operations: + (add), - (subtract), * (multiply), / (divide), % (modulo), ** (exponentiation), sqrt (square root)\n");

  let running = true;

  while (running) {
    const operator = (await prompt(rl, "Enter an operator (+, -, *, /, %, **, sqrt): ")).trim();
    const validOperators = ["+", "-", "*", "/", "%", "**", "sqrt"];
    if (!validOperators.includes(operator)) {
      console.log("Invalid operator. Please use +, -, *, /, %, **, or sqrt.\n");
      continue;
    }

    const num1Str = await prompt(rl, "Enter the first number: ");
    const num1 = parseFloat(num1Str);
    if (isNaN(num1)) {
      console.log("Invalid number. Please try again.\n");
      continue;
    }

    let result;
    try {
      if (operator === "sqrt") {
        result = squareRoot(num1);
        console.log(`\nResult: sqrt(${num1}) = ${result}\n`);
      } else {
        const num2Str = await prompt(rl, "Enter the second number: ");
        const num2 = parseFloat(num2Str);
        if (isNaN(num2)) {
          console.log("Invalid number. Please try again.\n");
          continue;
        }

        switch (operator) {
          case "+":
            result = add(num1, num2);
            break;
          case "-":
            result = subtract(num1, num2);
            break;
          case "*":
            result = multiply(num1, num2);
            break;
          case "/":
            result = divide(num1, num2);
            break;
          case "%":
            result = modulo(num1, num2);
            break;
          case "**":
            result = exponentiation(num1, num2);
            break;
        }
        console.log(`\nResult: ${num1} ${operator} ${num2} = ${result}\n`);
      }
    } catch (err) {
      console.log(`\nError: ${err.message}\n`);
    }

    const again = (await prompt(rl, "Calculate again? (yes/no): ")).trim().toLowerCase();
    if (again !== "yes" && again !== "y") {
      running = false;
    }
    console.log();
  }

  console.log("Goodbye!");
  rl.close();
}

// Export functions for testing; run main only when executed directly
if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide, modulo, exponentiation, squareRoot };
