const { add, subtract, multiply, divide, modulo, exponentiation, squareRoot } = require("../calculator");

// =============================================
// Addition tests
// =============================================
describe("add", () => {
  // Example from image: 2 + 3 = 5
  test("adds 2 + 3 to equal 5", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds two positive numbers", () => {
    expect(add(10, 20)).toBe(30);
  });

  test("adds two negative numbers", () => {
    expect(add(-5, -3)).toBe(-8);
  });

  test("adds a positive and a negative number", () => {
    expect(add(10, -4)).toBe(6);
  });

  test("adds zero to a number", () => {
    expect(add(7, 0)).toBe(7);
  });

  test("adds two zeros", () => {
    expect(add(0, 0)).toBe(0);
  });

  test("adds decimal numbers", () => {
    expect(add(1.5, 2.3)).toBeCloseTo(3.8);
  });

  test("adds large numbers", () => {
    expect(add(1000000, 2000000)).toBe(3000000);
  });
});

// =============================================
// Subtraction tests
// =============================================
describe("subtract", () => {
  // Example from image: 10 - 4 = 6
  test("subtracts 10 - 4 to equal 6", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("subtracts two positive numbers", () => {
    expect(subtract(20, 5)).toBe(15);
  });

  test("subtracts resulting in a negative number", () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test("subtracts two negative numbers", () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  test("subtracts zero from a number", () => {
    expect(subtract(8, 0)).toBe(8);
  });

  test("subtracts a number from zero", () => {
    expect(subtract(0, 5)).toBe(-5);
  });

  test("subtracts equal numbers to get zero", () => {
    expect(subtract(42, 42)).toBe(0);
  });

  test("subtracts decimal numbers", () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

// =============================================
// Multiplication tests
// =============================================
describe("multiply", () => {
  // Example from image: 45 * 2 = 90
  test("multiplies 45 * 2 to equal 90", () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test("multiplies two positive numbers", () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test("multiplies by zero", () => {
    expect(multiply(100, 0)).toBe(0);
  });

  test("multiplies two negative numbers", () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test("multiplies a positive and a negative number", () => {
    expect(multiply(5, -3)).toBe(-15);
  });

  test("multiplies by one (identity)", () => {
    expect(multiply(99, 1)).toBe(99);
  });

  test("multiplies decimal numbers", () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10);
  });

  test("multiplies large numbers", () => {
    expect(multiply(1000, 1000)).toBe(1000000);
  });
});

// =============================================
// Division tests
// =============================================
describe("divide", () => {
  // Example from image: 20 / 5 = 4
  test("divides 20 / 5 to equal 4", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("divides two positive numbers", () => {
    expect(divide(100, 4)).toBe(25);
  });

  test("divides resulting in a decimal", () => {
    expect(divide(10, 3)).toBeCloseTo(3.3333, 4);
  });

  test("divides a negative by a positive number", () => {
    expect(divide(-12, 4)).toBe(-3);
  });

  test("divides two negative numbers", () => {
    expect(divide(-20, -5)).toBe(4);
  });

  test("divides zero by a number", () => {
    expect(divide(0, 5)).toBe(0);
  });

  test("divides by one (identity)", () => {
    expect(divide(42, 1)).toBe(42);
  });

  test("divides decimal numbers", () => {
    expect(divide(7.5, 2.5)).toBeCloseTo(3);
  });

  // Edge case: division by zero
  test("throws error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });

  test("throws error when dividing zero by zero", () => {
    expect(() => divide(0, 0)).toThrow("Cannot divide by zero");
  });
});

// =============================================
// Modulo tests
// =============================================
describe("modulo", () => {
  test("returns remainder of 10 % 3 = 1", () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test("returns remainder of two positive numbers", () => {
    expect(modulo(17, 5)).toBe(2);
  });

  test("returns zero when evenly divisible", () => {
    expect(modulo(20, 4)).toBe(0);
  });

  test("returns remainder of a negative dividend", () => {
    expect(modulo(-10, 3)).toBe(-1);
  });

  test("returns remainder when dividend is smaller than divisor", () => {
    expect(modulo(3, 10)).toBe(3);
  });

  test("returns remainder of zero divided by a number", () => {
    expect(modulo(0, 5)).toBe(0);
  });

  test("returns remainder of decimal numbers", () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  // Edge case: modulo by zero
  test("throws error when modulo by zero", () => {
    expect(() => modulo(10, 0)).toThrow("Cannot modulo by zero");
  });

  test("throws error when modulo zero by zero", () => {
    expect(() => modulo(0, 0)).toThrow("Cannot modulo by zero");
  });
});

// =============================================
// Exponentiation tests
// =============================================
describe("exponentiation", () => {
  test("raises 2 ** 3 to equal 8", () => {
    expect(exponentiation(2, 3)).toBe(8);
  });

  test("raises a number to the power of 0 equals 1", () => {
    expect(exponentiation(5, 0)).toBe(1);
  });

  test("raises a number to the power of 1 equals itself", () => {
    expect(exponentiation(7, 1)).toBe(7);
  });

  test("raises a negative base to an even power", () => {
    expect(exponentiation(-3, 2)).toBe(9);
  });

  test("raises a negative base to an odd power", () => {
    expect(exponentiation(-2, 3)).toBe(-8);
  });

  test("raises 0 to any positive power equals 0", () => {
    expect(exponentiation(0, 5)).toBe(0);
  });

  test("raises a number to a fractional power (square root)", () => {
    expect(exponentiation(9, 0.5)).toBeCloseTo(3);
  });

  test("raises a number to a negative power", () => {
    expect(exponentiation(2, -2)).toBeCloseTo(0.25);
  });
});

// =============================================
// Square Root tests
// =============================================
describe("squareRoot", () => {
  test("returns sqrt(9) = 3", () => {
    expect(squareRoot(9)).toBe(3);
  });

  test("returns sqrt(16) = 4", () => {
    expect(squareRoot(16)).toBe(4);
  });

  test("returns sqrt(0) = 0", () => {
    expect(squareRoot(0)).toBe(0);
  });

  test("returns sqrt(1) = 1", () => {
    expect(squareRoot(1)).toBe(1);
  });

  test("returns sqrt(2) as an irrational number", () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142, 4);
  });

  test("returns sqrt(0.25) = 0.5", () => {
    expect(squareRoot(0.25)).toBeCloseTo(0.5);
  });

  test("returns sqrt of a large number", () => {
    expect(squareRoot(1000000)).toBe(1000);
  });

  // Edge case: square root of a negative number
  test("throws error for negative number", () => {
    expect(() => squareRoot(-1)).toThrow("Cannot take the square root of a negative number");
  });

  test("throws error for a large negative number", () => {
    expect(() => squareRoot(-100)).toThrow("Cannot take the square root of a negative number");
  });
});
