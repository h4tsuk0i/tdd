import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "./Calculator";

describe("Calculator component", () => {
  test("renders initial result", () => {
    render(<Calculator initialResult={0} />);
    expect(screen.getByText("= 0")).toBeInTheDocument();
  });
});

test("adds two numbers", () => {
  const result = sum(2, 3);
  render(<Calculator initialResult={0} />);
  fireEvent.click(screen.getByRole("button", { name: /result/i }));
  expect(screen.getByText("=" + " " + result.toString())).toBeInTheDocument();
});

test("subtracts two numbers", () => {
  const result = subtract(2, 3);
  render(<Calculator initialResult={0} />);
  fireEvent.click(screen.getByRole("button", { name: /result/i }));
  expect(screen.getByText("=" + " " + result.toString())).toBeInTheDocument();
});

test("multiplies the two numbers", () => {
  const result = multiply(2, 3);
  render(<Calculator initialResult={0} />);
  fireEvent.click(screen.getByRole("button", { name: /result/i }));
  expect(screen.getByText("=" + " " + result.toString())).toBeInTheDocument();
});

test("divides two numbers", () => {
  const result = divide(2, 3);
  render(<Calculator initialResult={0} />);
  fireEvent.click(screen.getByRole("button", { name: /result/i }));
  expect(screen.getByText("=" + " " + result.toString())).toBeInTheDocument();
});
