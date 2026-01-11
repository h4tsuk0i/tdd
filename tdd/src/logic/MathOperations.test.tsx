import { describe, test, expect } from "vitest";
import {add, subtract, multiply, divide } from "./MathOperations";

describe("Math Operations", () => {
  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtract two numbers", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test("mutiply two numbers", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test("divide two numbers", () => {
    expect(divide(24, 6)).toBe(4);
  });

  test("throws error when dividing by zero", () => {
    expect(divide(24, 0)).toThrow("Cannot diivde by zero");
  });
});
