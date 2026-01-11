import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "./Calculator";
import { sum, subtract, divide, multiply } from "../logic/MathOperations";

const setup = () => {
  render(<Calculator />);
  const first = screen.getByLabelText("first number");
  const second = screen.getByLabelText("second number");
  const operation = screen.getByLabelText("operation");

  return { first, second, operation };
};

describe("<Calculator />", () => {
  test("add two numbers", () => {
    const { first, second } = setup();

    fireEvent.change(first, { target: { value: "2" } });
    fireEvent.change(second, { target: { value: "3" } });

    expect(screen.getByText("Result: 5")).toBeInTheDocument();
  });

  test("subtract two numbers", () => {
    const { first, second, operation } = setup();

    fireEvent.change(operation, { target: { value: "subtract" } });
    fireEvent.change(first, { target: { value: "5" } });
    fireEvent.change(second, { target: { value: "3" } });

    expect(screen.getByText("Result: 2")).toBeInTheDocument();
  });

  test("multiply two numbers", () => {
    const { first, second, operation } = setup();

    fireEvent.change(operation, { target: { value: "multiply" } });
    fireEvent.change(first, { target: { value: "2" } });
    fireEvent.change(second, { target: { value: "3" } });

    expect(screen.getByText("Result: 6")).toBeInTheDocument();
  });

  test("divide two numbers", () => {
    const { first, second, operation } = setup();

    fireEvent.change(operation, { target: { value: "division" } });
    fireEvent.change(first, { target: { value: "24" } });
    fireEvent.change(second, { target: { value: "6" } });

    expect(screen.getByText("Result: 4")).toBeInTheDocument();
  });

  test("erorr when dividing by zero", () => {
    const { first, second, operation } = setup();

    fireEvent.change(operation, { target: { value: "division" } });
    fireEvent.change(first, { target: { value: "24" } });
    fireEvent.change(second, { target: { value: "0" } });

    expect(screen.getByRole("altert")).toHaveTextContent(
      "Cannot divide by zero"
    );
  });
});
