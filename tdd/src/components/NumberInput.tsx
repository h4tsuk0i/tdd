import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

/*type NumberInputExample = {
secondLabel: string
}*/


interface NumberInputProps  {
 label: string;
 id: string;
 handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
 //handleChangeTwo: (event: Event) => NumberInputExample
}

export const NumberInput = ({label, id, handleChange}: NumberInputProps) => {
    return(
        <div>
        <InputLabel
          id={id + "-label"}
          shrink
        >
          {label}
        </InputLabel>
        <OutlinedInput
          id={id}
          label={label}
          aria-label={label}
          aria-labelledby={id + "-label"}
          notched
          type="text"
          inputMode="numeric"
          onChange={handleChange}
          sx={
            {height: "3em"}
          }
        />
      </div>
    );
 
}

export default NumberInput;