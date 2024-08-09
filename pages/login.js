import InputField from "../components/InputField";
import LoginButtons from "../components/LoginButton";
import PropTypes from "prop-types";

const Login = ({ onClose }) => {
  return (
    <div className="w-full h-[982px]  items-center justify-center relative bg-gray1-800 overflow-hidden leading-[normal] tracking-[normal] text-center text-14xl-4 text-white font-inter mq450:h-auto mq450:min-h-[982]">
      <div className="absolute top-[74px] left-[1081px] [filter:blur(78.89px)] rounded-[19720.25px] bg-moccasin-200 w-[426px] h-[426px] overflow-hidden mix-blend-normal" />
      <div className="absolute top-[calc(50%_-_385px)] left-[calc(50%_-_502px)] [backdrop-filter:blur(50.84px)] rounded-[41.79px] bg-dimgray w-[979px] overflow-hidden flex flex-row items-start justify-start pt-6 pb-0 pr-0 pl-[21px] box-border max-w-full max-h-full z-[1]">
        <div className="flex-1 rounded-[33.43px] bg-gray1-700 overflow-hidden flex flex-col items-center justify-start pt-7 pb-[53px] pr-5 pl-[25px] box-border gap-[42.1px] min-h-[664px] max-w-full">
          <div className="w-[497px] flex flex-col items-start justify-start gap-[8.4px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-8 box-border max-w-full">
              <div className="flex-1 relative leading-[53px] font-semibold inline-block max-w-full z-[2] mq450:text-xl mq450:leading-[32px] mq750:text-8xl mq750:leading-[42px]">
                Log in to your account
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full text-3xl-3 text-lightslategray">
              <div className="flex flex-row items-start justify-start py-0 px-8">
                <div className="relative tracking-[-0.01px] leading-[34px] z-[2] mq450:text-lg mq450:leading-[27px]">
                  Welcome back! Please enter your details.
                </div>
              </div>
              <div className="self-stretch h-[182.4px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[27.9px] max-w-full z-[2] mt-[-2.9px]">
                <InputField
                  email="Email"
                  inputValueWrapperPlacehol="exampl@gmail.com"
                />
                <InputField
                  email="Password"
                  inputValueWrapperPlacehol="••••••••••"
                  propHeight="unset"
                  propPadding="unset"
                  propMarginTop="unset"
                  propAlignSelf="stretch"
                  propFlex="unset"
                />
              </div>
            </div>
          </div>
          <LoginButtons />
        </div>
      </div>
      <img
        className="absolute top-[38px] left-[165px] w-[48.6px] h-[45px] overflow-hidden mix-blend-normal"
        alt=""
        src="/icon-3.svg"
      />
      <a className="[text-decoration:none] absolute top-[41px] left-[236px] text-lg leading-[20px] font-semibold text-[inherit] text-left flex items-center w-[61px] h-[39px]">
        LOGO
      </a>
      <footer className="absolute top-[475px] left-[-140px] [filter:blur(93.52px)] rounded-[23377.29px] bg-moccasin-100 w-[505px] h-[505px] overflow-hidden mix-blend-normal z-[2]" />
    </div>
  );
};

Login.propTypes = {
  onClose: PropTypes.func,
};

export default Login;
