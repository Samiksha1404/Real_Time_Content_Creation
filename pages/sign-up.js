import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Checkbox,
  Button,
} from "@mui/material";
import InputField from "../components/InputField";
import { useRouter } from "next/router";

const SignUp = () => {
  const router = useRouter();

  const onButtonContainerClick = useCallback(() => {
    router.push("/login");
  }, [router]);

  return (
    <div className="w-full h-auto items-center justify-center relative bg-gray1-800 overflow-hidden flex flex-col items-start justify-start pt-[45px]  box-border gap-[27px] leading-[normal] tracking-[normal] text-left text-lg text-white font-inter lg:pl-[82px] lg:pr-[82px] lg:box-border mq750:pl-[41px] mq750:pr-[41px] mq750:box-border">
      <div className="w-[132px] flex flex-row items-start justify-start gap-[22.4px]">
        <img
          className="h-[45px] w-[48.6px] relative overflow-hidden shrink-0 mix-blend-normal min-h-[45px]"
          loading="lazy"
          alt=""
          src="/icon-3.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
          <a className="[text-decoration:none] self-stretch h-[39px] relative leading-[20px] font-semibold text-[inherit] flex items-center shrink-0">
            LOGO
          </a>
        </div>
      </div>

      <main className="w-[1157px] pb-12 flex flex-row items-start justify-center max-w-full">
        <section className="w-[979px] flex flex-row items-start justify-start relative max-w-full text-left text-14xl-4 text-lightslategray font-inter">
          <div className="h-[505px] w-[505px] absolute !m-[0] bottom-[-297px] left-[-253px] [filter:blur(93.52px)] rounded-[23377.29px] bg-moccasin-100 overflow-hidden shrink-0 mix-blend-normal" />
          <div className="h-[426px] w-[426px] absolute !m-[0] top-[0px] right-[-195px] [filter:blur(78.89px)] rounded-[19720.25px] bg-moccasin-200 overflow-hidden shrink-0 mix-blend-normal" />
          <div className="flex-1 [backdrop-filter:blur(50.84px)] rounded-[41.79px] bg-dimgray overflow-hidden flex flex-row items-start justify-start pt-6 pb-0 pr-0 pl-[21px] box-border max-w-full z-[1] mq750:h-auto mq750:gap-[17px]">
            <div className="flex-1 rounded-[33.43px] bg-gray1-700 overflow-y-auto flex flex-col items-start justify-start pt-2.5 px-[220px] pb-3 box-border gap-[22.3px] max-w-[149%] shrink-0 mq450:pb-[67px] mq450:box-border mq750:pl-[55px] mq750:pr-[55px] mq750:box-border mq1050:pt-5 mq1050:px-[110px] mq1050:pb-[103px] mq1050:box-border">
              <div className="w-[492px] flex flex-col items-start justify-start gap-[35.1px] max-w-full text-center text-white mq750:gap-[18px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8.4px] max-w-full">
                
                  <div className="self-stretch relative leading-[53px] font-semibold mq450:text-xl mq450:leading-[32px] mq1050:text-8xl mq1050:leading-[42px]">{`Sign Up `}</div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[16.3px] box-border max-w-full text-3xl-3 text-lightslategray">
                    <div className="self-stretch relative leading-[34px] mq450:text-lg mq450:leading-[27px]">
                      Welcome back! Please enter your details.
                    </div>
                    <InputField
                      email="Username"
                      inputValueWrapperPlacehol="example123"
                      propHeight="68px"
                      propPadding="0px 0px 0px"
                      propMarginTop="-0.2px"
                      propAlignSelf="stretch"
                      propFlex="unset"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[16.4px] box-border max-w-full">
                    <InputField
                      email="Email"
                      inputValueWrapperPlacehol="exampl@gmail.com"
                      propHeight="68px"
                      propPadding="0px 0px 0px"
                      propMarginTop="unset"
                      propAlignSelf="unset"
                      propFlex="1"
                    />
                  </div>
                  <div className=" h-[65.2px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[8.4px] max-w-full text-left text-lgi-5 text-dark-foregrounds-fg-base">
                    <div className=" flex flex-col items-start justify-start py-0 px-0 box-border gap-[8.4px] max-w-full">
                      <div className="flex flex-row items-center justify-start">
                        <div className="relative leading-[28px] text-[16px] inline-block min-w-[92px]">
                          Password
                        </div>
                      </div>
                      <TextField
                        className="[border:none] bg-[transparent] w-[501.5px] h-[52px] font-inter font-medium text-lgi-5 text-slategray max-w-[103%] shrink-0"
                        placeholder="••••••••••"
                      sx={{
                          "& fieldset": { borderColor: "#1f1e1a" },
                          "& .MuiInputBase-root": {
                            height: "52px",
                            backgroundColor: "#0c0c0c",
                            borderRadius: "16.72px",
                            fontSize: "19.5px",
                          },
                          "& .MuiInputBase-input": { color: "#5b657e" },
                          width: "501.5px",
                        }}
                      />
                    </div>
                    
                  </div>
                </div>

                <div className="self-stretch flex flex-col items-start justify-start gap-[14.3px] text-left text-lgi-5 text-lightslategray">
                  <div className="self-stretch h-[20.7px] flex flex-row items-end justify-between gap-[20px]">
                    <div className="mb-[-3.6px] flex flex-row items-start justify-start gap-[11.1px]">
                      <input
                        className="m-0 h-[20.9px] w-[20.9px] relative"
                        type="checkbox"
                      />
                      <div className="relative leading-[28px] font-medium">
                        Remember for 30 days
                      </div>
                    </div>
                    <a className="mb-[-3.6px] [text-decoration:none] flex flex-row items-start justify-start text-mediumslateblue">
                      <div className="flex flex-row items-start justify-start">
                        <div className="relative leading-[28px] font-medium">
                          Forgot password
                        </div>
                      </div>
                    </a>
                  </div>
                  <Button
                    className="self-stretch h-[55.7px] shadow-[0px_0px_0px_1.39px_rgba(26,_92,_255,_0.6)] mq450:pl-5 mq450:pr-5 mq450:box-border"
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
                    }}> Sign in
                  </Button>
                </div>
              </div>
              <div className="w-[491.6px] flex flex-row flex-wrap items-start justify-start gap-[16.7px] max-w-full text-base-7">
                <div className="flex-1 flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border min-w-[141px]">
                  <div className="self-stretch h-[1.4px] relative box-border border-t-[1.4px] border-solid border-stroke" />
                </div>
                <div className="relative leading-[28px] font-medium inline-block min-w-[24px]">
                  OR
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border min-w-[141px]">
                  <div className="self-stretch h-[1.4px] relative box-border border-t-[1.4px] border-solid border-stroke" />
                </div>
              </div>
              <div className="w-[491.5px] flex flex-col items-start justify-start gap-[14px] max-w-full text-lgi-5">
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16.7px]">
                <Button
                    className="h-[55.7px] flex-1 min-w-[115px]"
                    endIcon={
                      <img
                        width="25.1px"
                        height="19.5px"
                        src="/google.svg"
                      />
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
                  <Button
                    className="h-[55.7px] flex-1 min-w-[115px]"
                    endIcon={
                      <img
                        width="25.1px"
                        height="19.5px"
                        src="/github.svg"
                      />
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
                  <Button
                    className="h-[55.7px] flex-1 min-w-[115px]"
                    endIcon={
                      <img
                        width="25.1px"
                        height="19.5px"
                        src="/logosdiscordicon.svg"
                      />
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
                <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                  <div className="flex flex-row items-start justify-start gap-[11px] mq750:flex-wrap">
                    <div className="relative leading-[28px]">
                      Have an account?
                    </div>
                    <div
                      className="flex flex-row items-start justify-start cursor-pointer text-mediumslateblue"
                      onClick={onButtonContainerClick}
                    >
                      <div className="flex flex-row items-start justify-start">
                        <div className="relative leading-[28px] font-medium inline-block min-w-[81px] hover:text-white">
                          Login up
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SignUp;
