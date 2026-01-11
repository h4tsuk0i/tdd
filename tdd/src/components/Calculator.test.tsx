import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Calculator from "./Calculator";

const setup = async () => {
  const user = userEvent.setup();
  render(<Calculator />);

  const first = screen.getByLabelText("First number") as HTMLInputElement;
  const second = screen.getByLabelText("Second number") as HTMLInputElement;

  return { user, first, second };
};

const clearAndType = async (
  user: ReturnType<typeof userEvent.setup>,
  input: HTMLInputElement,
  value: string
) => {
  await user.click(input);
  await user.keyboard("{Control>}{a}{/Control}{Backspace}");
  await user.type(input, value);
};

const selectOperation = async (
  user: ReturnType<typeof userEvent.setup>,
  symbol: "+" | "−" | "×" | "÷"
) => {
  await user.click(screen.getByRole("combobox", { name: /operation/i }));

  const listbox = await screen.findByRole("listbox");

  await user.click(within(listbox).getByText(symbol));
};

describe("<Calculator />", () => {
  test("add two numbers", async () => {
    const { user, first, second } = await setup();

    await selectOperation(user, "+");
    await clearAndType(user, first, "2");
    await clearAndType(user, second, "3");

    expect(screen.getByText("Result: 5")).toBeInTheDocument();
  });

  test("subtract two numbers", async () => {
    const { user, first, second } = await setup();

    await selectOperation(user, "−");
    await clearAndType(user, first, "5");
    await clearAndType(user, second, "3");

    expect(screen.getByText("Result: 2")).toBeInTheDocument();
  });

  test("multiply two numbers", async () => {
    const { user, first, second } = await setup();

    await selectOperation(user, "×");
    await clearAndType(user, first, "2");
    await clearAndType(user, second, "3");

    expect(screen.getByText("Result: 6")).toBeInTheDocument();
  });

  test("divide two numbers", async () => {
    const { user, first, second } = await setup();

    await selectOperation(user, "÷");
    await clearAndType(user, first, "24");
    await clearAndType(user, second, "6");

    expect(screen.getByText("Result: 4")).toBeInTheDocument();
  });

  test("erorr when dividing by zero", async () => {
    const { user, first, second } = await setup();

    await selectOperation(user, "÷");
    await clearAndType(user, first, "24");
    await clearAndType(user, second, "0");

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Cannot divide by zero"
    );
  });
});
