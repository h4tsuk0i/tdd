import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { add, subtract, multiply, divide } from "../logic/MathOperations";

type Operation = "add" | "subtract" | "multiply" | "divide";

const Calculator = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operation, setOperation] = useState<Operation>("add");

  let result: number | null = null;
  let error: string | null = null;

  if (operation === "divide" && b === 0) {
    error = "Cannot divide by zero";
  } else {
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
  }
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <FormControl>
        <InputLabel id="first-number-label">First number</InputLabel>
        <Box margin="0.5rem">
          <OutlinedInput
            id="first-number-input"
            label="First number"
            aria-label="first number"
            aria-labelledby="first-number-label"
            type="text"
            inputMode="numeric"
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
          />
        </Box>
      </FormControl>

      <InputLabel id="operation-label">Operation</InputLabel>
      <Select
        aria-label="operation"
        label="Operation"
        labelId="operation-label"
        value={operation}
        onChange={(e) => setOperation(e.target.value as Operation)}
      >
        <MenuItem value="add">+</MenuItem>
        <MenuItem value="subtract">−</MenuItem>
        <MenuItem value="multiply">×</MenuItem>
        <MenuItem value="divide">÷</MenuItem>
      </Select>

      <FormControl>
        <InputLabel id="second-number-label">Second number</InputLabel>
        <Box margin="0.5rem">
          <OutlinedInput
            id="second-number-input"
            label="Second number"
            aria-label="second number"
            aria-labelledby="second-number-label"
            type="text"
            inputMode="numeric"
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
          />
        </Box>
      </FormControl>

      {error ? (
        <Typography role="alert" margin="0.5rem">
          {error}
        </Typography>
      ) : (
        <Typography margin="0.5rem">Result: {result}</Typography>
      )}
    </Box>
  );
};

export default Calculator;
