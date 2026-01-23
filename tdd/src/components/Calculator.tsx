import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { add, subtract, multiply, divide } from "../logic/MathOperations";
import NumberInput from "./NumberInput";
import { ResultButton } from "./ResultButton";

type Operation = "add" | "subtract" | "multiply" | "divide";

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState<Operation>("add");

  const handleMathOperation = () => {
    switch (operation) {
      case "add":
        setResult(add(firstNumber, secondNumber));
        break;
      case "subtract":
        setResult(subtract(firstNumber, secondNumber));
        break;
      case "multiply":
        setResult(multiply(firstNumber, secondNumber));
        break;
      case "divide":
        setResult(divide(firstNumber, secondNumber));
        break;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
      }}
    >
      <FormControl>
        <NumberInput
          id="first-number"
          label="First number"
          handleChange={(event) => setFirstNumber(Number(event.target.value))}
        />
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
            sx={{ height: "3em" }}
          >
            <MenuItem value="add">+</MenuItem>
            <MenuItem value="subtract">−</MenuItem>
            <MenuItem value="multiply">×</MenuItem>
            <MenuItem value="divide">÷</MenuItem>
          </Select>
        </div>
      </FormControl>

      <FormControl>
        <NumberInput
          id="second-number"
          label="Second number"
          handleChange={(event) => setSecondNumber(Number(event.target.value))}
        />
      </FormControl>

      <FormControl>
        <ResultButton
          id="result-button"
          label="Result button"
          handleClick={handleMathOperation}
        />
      </FormControl>

      <FormControl>
        <Typography sx={{ paddingTop: "0.75em" }}>{result}</Typography>
      </FormControl>
    </div>
  );
};

export default Calculator;
