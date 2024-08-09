import { useCallback } from "react";
import { Checkbox, Button } from "@mui/material";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const LoginButtons = ({ className = "" }) => {
  const router = useRouter();

  const onFrameButtonClick = useCallback(() => {
    router.push("/landing-page");
  }, [router]);

  const onButtonContainerClick = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  return (
    <div
      className={`w-[497px] flex flex-col items-end justify-start gap-[15.9px] max-w-full text-left text-lgi-5 text-lightslategray font-inter ${className}`}
    >
      <div className="self-stretch h-[24.5px] flex flex-row items-start justify-between gap-[20px] z-[2]">
        <div className="mt-[-1.7px] flex flex-row items-start justify-start gap-[11.1px]">
          <input
            className="m-0 h-[20.9px] w-[20.9px] relative shrink-0"
            type="checkbox"
          />
          <div className="relative leading-[28px] font-medium shrink-0">
            Remember for 30 days
          </div>
        </div>
        <div className="mt-[-1.7px] flex flex-row items-start justify-start text-mediumslateblue">
          <div className="flex flex-row items-start justify-start">
            <a className="[text-decoration:none] relative leading-[28px] font-medium text-[inherit]">
              Forgot password
            </a>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[6.4px] box-border max-w-full">
        <Button
          className="h-[55.7px] flex-1 shadow-[0px_0px_0px_1.39px_rgba(26,_92,_255,_0.6)] max-w-full cursor-pointer z-[2]"
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "19.5",
            background: "#313131",
            border: "#000 solid 1px",
            borderRadius: "11.14px",
            "&:hover": { background: "#313131" },
            height: 55.7,
          }}
          onClick={onFrameButtonClick}
        >
          Log In
        </Button>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-0 px-0 pb-[6.4px] gap-[16.7px] text-base-7">
        <div className="flex-1 flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border min-w-[143px]">
          <div className="self-stretch h-[1.4px] relative box-border z-[2] border-t-[1.4px] border-solid border-stroke" />
        </div>
        <div className="relative leading-[28px] font-medium inline-block min-w-[24px] z-[2]">
          OR
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border min-w-[143px]">
          <div className="self-stretch h-[1.4px] relative box-border z-[2] border-t-[1.4px] border-solid border-stroke" />
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16.8px]">
        <Button
          className="h-[55.7px] flex-1 min-w-[115px] z-[2]"
          endIcon={<img width="25.1px" height="25.1px" src="/icon.svg" />}
          disableElevation
          variant="contained"
          sx={{
            background: "#20242d",
            borderRadius: "11.14px",
            "&:hover": { background: "#20242d" },
            height: 55.7,
          }}
        />
        <Button
          className="h-[55.7px] flex-1 min-w-[115px] z-[2]"
          endIcon={<img width="25.1px" height="25.1px" src="/mdigithub.svg" />}
          disableElevation
          variant="contained"
          sx={{
            background: "#20242d",
            borderRadius: "11.14px",
            "&:hover": { background: "#20242d" },
            height: 55.7,
          }}
        />
        <Button
          className="h-[55.7px] flex-1 min-w-[115px] z-[2]"
          endIcon={
            <img width="25.1px" height="19.5px" src="/logosdiscordicon.svg" />
          }
          disableElevation
          variant="contained"
          sx={{
            background: "#20242d",
            borderRadius: "11.14px",
            "&:hover": { background: "#20242d" },
            height: 55.7,
          }}
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
        <div className="flex flex-row items-start justify-start [row-gap:20px] mq450:flex-wrap">
          <div className="w-[218.1px] flex flex-col items-start justify-start py-0 px-0 box-border">
            <div className="mr-[-16.9px] w-[235px] relative leading-[25px] inline-block shrink-0 z-[2]">
              Don’t have an account?
            </div>
          </div>
          <div
            className="h-[24.5px] flex flex-row items-start justify-start py-0 px-0 box-border shrink-0 cursor-pointer z-[3] text-mediumslateblue"
            onClick={onButtonContainerClick}
          >
            <div className="flex flex-row items-start justify-start shrink-0">
              <a className="[text-decoration:none] relative leading-[28px] font-medium text-[inherit] inline-block min-w-[70px] whitespace-nowrap">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LoginButtons.propTypes = {
  className: PropTypes.string,
};

export default LoginButtons;
