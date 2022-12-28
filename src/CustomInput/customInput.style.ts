import {
    boldFont,
    inputLabelRequiredColor,
    mediumFont,
  } from "../App.style";
  
  
  export const customInputStyles = {
    textField: {
      width: "100%",
      "& .MuiInputBase-input": {
        position: "relative",
        padding: "12px 12px",
        "&::placeholder": {
          ...mediumFont,
        },
      },
      "& .MuiOutlinedInput-root": {
        borderRadius: "12px",
        "&.Mui-focused fieldset": {
          borderColor: "#4B0150",
        },
      },
    },
    nameField: {
      ...boldFont,
      color: "#212121",
      "& .MuiFormLabel-asterisk": {
        color: inputLabelRequiredColor,
      },
    },
  } as const;
  
  export default customInputStyles;
  