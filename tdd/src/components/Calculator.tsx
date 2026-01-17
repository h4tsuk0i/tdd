import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { add, subtract, multiply, divide } from "../logic/MathOperations";
import NumberInput from "./NumberInput";

type Operation = "add" | "subtract" | "multiply" | "divide";

const Calculator = () => {
  const [a, setFirstNumber] = useState(0);
  const [b, setSecondNumber] = useState(0);
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
    <div style={{display: "flex", gap: "8px"}}>
      <FormControl>
       <NumberInput  id="first-number" label="First number" handleChange={(event) => setFirstNumber(Number(event.target.value))}/>
      </FormControl>

      <FormControl>
        <div>
          <InputLabel id="operation-label" shrink>
            Operation
          </InputLabel>
          <Select
            notched
            aria-label="operation"
            label="Operation"
            labelId="operation-label"
            value={operation}
            onChange={(e) => setOperation(e.target.value as Operation)}
            sx={{height: "3em"}}
          >
            <MenuItem value="add">+</MenuItem>
            <MenuItem value="subtract">−</MenuItem>
            <MenuItem value="multiply">×</MenuItem>
            <MenuItem value="divide">÷</MenuItem>
          </Select>
        </div>
      </FormControl>

      <FormControl>
      <NumberInput  id="second-number" label="Second number" handleChange={(event) => setSecondNumber(Number(event.target.value))}/>
      </FormControl>
      <FormControl>      
      {error ? (
        <Typography role="alert" padding="13px" paddingLeft="0px">
          {error}
        </Typography>
      ) : (
        <Typography
          padding="13px"
          alignContent="center"
          paddingLeft="0px"
          sx={{ color: "rgba(12, 12, 12, 1)" }}
        >
          = {result}
        </Typography>
      )}
      </FormControl>
    </div>
  );
};

export default Calculator;
