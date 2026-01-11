import { Box, Input, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";
import { add, subtract, multiply, divide } from "../logic/MathOperations";

type Operation = "add" | "subtract" | "multiply" | "divide";

const Calculator = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operation, setOperation] = useState<Operation>("add");

  let result: number | null = null;
  let error: string | null = null;

  try {
    switch (operation) {
      case "add":
        result = add(a, b);
        break;
      case "subtract":
        result = subtract(a, b);
        break;
      case "multiply":
        result = multiply(a, b);
        break;
      case "divide":
        result = divide(a, b);
        break;
      default:
        return null;
    }
  } catch (err) {
    error = (err as Error).message;
    return null;
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
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
