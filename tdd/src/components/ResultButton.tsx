import { InputLabel } from "@mui/material";

interface ResultButtonProps {
  label: string;
  id: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const ResultButton = ({
  label,
  id,
  handleClick,
}: ResultButtonProps) => {
  return (
    <div>
      <InputLabel id={id + "-label"} shrink>
        {label}
      </InputLabel>
      <button
        id={id}
        aria-label={label}
        aria-labelledby={id + "-label"}
        onClick={handleClick}
        style={{ height: "3.5em" }}
      >
        =
      </button>
    </div>
  );
};