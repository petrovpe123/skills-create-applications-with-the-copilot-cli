/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   + (Addition)       – Adds two numbers
 *   - (Subtraction)    – Subtracts the second number from the first
 *   * (Multiplication) – Multiplies two numbers
 *   / (Division)       – Divides the first number by the second (with division-by-zero handling)
 *   % (Modulo)         – Returns the remainder of dividing the first number by the second
 *   ^ (Exponentiation) – Raises the first number to the power of the second
 *   sqrt (Square Root)  – Returns the square root of a number (error on negatives)
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

// Modulo: returns the remainder of a divided by b
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a % b;
}

// Exponentiation: returns base raised to the exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square root: returns the square root of n, with error handling for negatives
function squareRoot(n) {
  if (n < 0) {
    throw new Error("Cannot calculate square root of a negative number");
  }
  return Math.sqrt(n);
}

async function main() {
  const rl = createInterface();
  console.log("=== Node.js CLI Calculator ===");
  console.log("Supported operations: + (add), - (subtract), * (multiply), / (divide), % (modulo), ^ (power), sqrt\n");

  let running = true;

  while (running) {
    const num1Str = await prompt(rl, "Enter the first number: ");
    const num1 = parseFloat(num1Str);
    if (isNaN(num1)) {
      console.log("Invalid number. Please try again.\n");
      continue;
    }

    const operator = (await prompt(rl, "Enter an operator (+, -, *, /, %, ^, sqrt): ")).trim();
    if (!["+", "-", "*", "/", "%", "^", "sqrt"].includes(operator)) {
      console.log("Invalid operator. Please use +, -, *, /, %, ^, or sqrt.\n");
      continue;
    }

    let num2 = NaN;
    if (operator !== "sqrt") {
      const num2Str = await prompt(rl, "Enter the second number: ");
      num2 = parseFloat(num2Str);
      if (isNaN(num2)) {
        console.log("Invalid number. Please try again.\n");
        continue;
      }
    }

    let result;
    try {
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
        case "^":
          result = power(num1, num2);
          break;
        case "sqrt":
          result = squareRoot(num1);
          break;
      }
      if (operator === "sqrt") {
        console.log(`\nResult: sqrt(${num1}) = ${result}\n`);
      } else {
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

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
