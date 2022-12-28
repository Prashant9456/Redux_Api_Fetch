import { Box, InputLabel, SxProps, TextField } from "@mui/material";
import { customInputStyles } from "./customInput.style";
import { EventEmitter } from "events";
import React from "react";

const em = new EventEmitter();

em.removeAllListeners();

export const globalEmitter = em;

interface CustomProps {
  label?: string;
  placeHolder?: string;
  value?: string;
  onChange?: any;
  type?: string;
  name?: string;
  select?: boolean;
  onKeyPress?: any;
  InputProps?: any;
  error?: any;
  required?: boolean;
  InputLabelProps?: any;
  id?: string;
  sx?: SxProps;
  disabled?: boolean;
  propsToInputElement?: any;
}
const methodsContext = this;
export function debounce(func: Function, wait: number) {
    let timeout: any;
    return function (...args: any) {
      const context = methodsContext;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }

  

export const CustomInput = (props: CustomProps) => {
  const classes = customInputStyles;
  const { error = null } = props;
  

  return (
    <>    <Box>
      <Box mb={1}>
        <InputLabel required={props.required} sx={classes.nameField}>
          {props.label}
        </InputLabel>
      </Box>
      <TextField
        sx={classes.textField}
        variant="outlined"
        id={props.id}
        placeholder={props.placeHolder}
        type={props.type}
        name={props.name}
        select={props.select}
        value={props.value}
        InputProps={props.InputProps}
        inputProps={props.propsToInputElement}
        onChange={props.onChange}
        onKeyPress={props.onKeyPress}
        required={props.required}
        {...(error && { error: true, helperText: error })}
        disabled={props.disabled}
      />
    </Box>
    </>

  );
};
export default CustomInput

 
