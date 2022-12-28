import { Theme } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { CSSProperties, withStyles } from "@mui/styles";
const textAlign ="center";
const inputLabelRequiredColor = "red";
const pureWhiteColor = "#ffffff";
const defaultFontSize = 14;
const purplePrimaryColor = "#1A0224";
export const disabledBackgroundColor = "#888888";

const theme = createTheme({
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Poppins_Regular",
        "Poppins_Medium",
        "Poppins_Bold",
        "Poppins_Black",
        "sans-serif",
      ].join(","),
    },
  });
  const boldFont: CSSProperties = {
    fontFamily: "SourceSans3_Bold",
    fontWeight: 700,
  };
  const mediumFont: CSSProperties = {
    fontFamily: "SourceSans3_Medium",
    fontWeight: 500,
  };
  const regularFont: CSSProperties = {
    fontFamily: "SourceSans3_Regular",
    fontWeight: 400,
  };
  
  const centerItemFlex: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const getRelativeFontSize = (value: number = 0) => {
    let size = defaultFontSize + value;
    return size + "px";
  };
  
  const customButtonStyle: CSSProperties = {
    borderRadius: "15px",
    border: "none",
    fontSize: getRelativeFontSize(),
    textAlign: "center",
    backgroundColor: purplePrimaryColor,
    padding: "10px 15px",
    // boxShadow: " 4px 4px 30px rgba(0, 0, 0, 0.03)",
    boxShadow: "0 2px 0 rgb(0 0 0 / 2%)",
    color: "#FFFFFF",
    cursor: "pointer",
    textTransform: "none",
    height: "47px",
    transition: "all .3s ease",
    "&:hover": {
      background: "#c20c85",
    },
  };
export const AppStyle={
    App:{
        margintop: "50px",
        display: "flex",
        padding: "10px",
        flexDirection: "row",
        flexWrap: 'wrap',
        marginleft: "15px",
        justifyContent: 'start',
        alignItems: 'start',
        width: "fit-content",
        // width: "200px",
        marginright: "10px",
         height: "100%",
        border: "2px solid rgb(139, 126, 126)",
        
    },
      searchInputWrapper: {
        display: "flex",
        alignItem: "center",
        gap: "10px",
      },
      searchInput: {
        width: "100%",
        height: "50px",
        border: "1px solid rgba(0,0,0,.5)",
      },
    Appcard:{
        marginleft: "25px",
        padding:"5px"
      },
      inputsSectionDropdowns: {
        display: "flex",
        gap: "10px",
      },
      dropDownStyle: {
        backgroundColor: pureWhiteColor,
        height: "47px",
        padding: "2px",
        width: " 150px",
        borderRadius: "12px",
        ...regularFont,
      },
      optionStyle: {
        ...regularFont,
      },
      mainCardInputsSection: {
        display: "flex",
        margin: "20px 0",
        [theme.breakpoints.down("md")]: {
          marginTop: theme.spacing(0),
        },
      },
}
export {
    textAlign,
    theme,
    boldFont,
    inputLabelRequiredColor,
    mediumFont,
    pureWhiteColor,
    regularFont,
    customButtonStyle,
    centerItemFlex,
    
    


};
export default AppStyle;