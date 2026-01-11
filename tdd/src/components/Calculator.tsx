import { Box, Input, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";
import { add, subtract, multiply, divide } from "../logic/MathOperations";

type Operation = "add" | "subtract" | "multiply" | "divide";

const Calculator = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operation, setOperation] = useState<Operation>("add");
  const [error, setError] = useState<string | null>(null);

  const calculate = (): number | null => {
    try {
      setError(null);
      switch (operation) {
        case "add":
          return add(a, b);
        case "subtract":
          return subtract(a, b);
        case "multiply":
          return multiply(a, b);
        case "divide":
          return divide(a, b);
        default:
          return null;
      }
    } catch (err) {
      setError((err as Error).message);
      return null;
    }
  };

  const result = calculate();

  return (
    <Box>
      <Input
        aria-label="first number"
        type="number"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
      />

      <Select
        aria-label="operation"
        value={operation}
        onChange={(e) => setOperation(e.target.value as Operation)}
      >
        <MenuItem value="add">+</MenuItem>
        <MenuItem value="subtract">-</MenuItem>
        <MenuItem value="multiply">×</MenuItem>
        <MenuItem value="divide">÷</MenuItem>
      </Select>

      <Input
        aria-label="second number"
        type="number"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
      />

      {error ? (
        <Typography role="alert">{error}</Typography>
      ) : (
        <Typography>Result: {result}</Typography>
      )}
    </Box>
  );
};

export default Calculator;
