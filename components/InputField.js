import { useMemo } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";


const InputField = ({
  className = "",
  email,
  inputValueWrapperPlacehol,
  propHeight,
  propPadding,
  propMarginTop,
  propAlignSelf,
  propFlex,
}) => {
  const inputFieldStyle = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding,
      marginTop: propMarginTop,
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propHeight, propPadding, propMarginTop, propAlignSelf, propFlex]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start max-w-full shrink-0 text-left text-lgi-5 text-dark-foregrounds-fg-base font-inter ${className}`}
      style={inputFieldStyle}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[8.4px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-0 gap-[8.4px]">
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-[28px] text-[16px] inline-block min-w-[50px]">
              {email}
            </div>
          </div>
          <TextField
            className="[border:none] bg-[transparent] self-stretch h-[55.7px] font-inter text-[16px] text-lgi-5 text-slategray"
            placeholder={inputValueWrapperPlacehol}
           
            sx={{
              "& fieldset": { borderColor: "#1f1e1a" },
              "& .MuiInputBase-root": {
                height: "55.7px",
                backgroundColor: "#0c0c0c",
                borderRadius: "16.72px",
                fontSize: "19.5px",
              },
              "& .MuiInputBase-input": { color: "#5b657e" },
            }}
          />
        </div>
        <div className="w-[445.8px] h-7 relative leading-[27.86px] text-gray-500 hidden max-w-full">
          This is a hint text to help user.
        </div>
      </div>
    </div>
  );
};

InputField.propTypes = {
  className: PropTypes.string,
  email: PropTypes.string,
  inputValueWrapperPlacehol: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propPadding: PropTypes.any,
  propMarginTop: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
};

export default InputField;
