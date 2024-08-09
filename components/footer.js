
const Footer = () => {
  return (
    <footer className={`self-stretch  flex flex-row  pt-[73px] px-[66px] pb-1 gap-[183px] max-w-full text-left text-lg text-white font-inter border-[1px] border-solid border-gray1-300 mq450:gap-[23px] mq750:gap-[46px] mq1275:flex-wrap mq1275:gap-[91px] mq1275:justify-center mq1275:pl-[33px] mq1275:pr-[33px] mq1275:box-border `}>
      <div className="h-[228px] w-[1440px] relative box-border hidden max-w-full border-[1px] border-solid border-gray1-300" />
      <div className={`w-[910px] flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-lg text-white font-inter mq750:flex-wrap mq750:justify-center `}>
      <div className="w-[132px] flex flex-row items-start justify-start gap-[22.4px]">
        <a href="/landing-page">
        <img className="h-[45px] w-[48.6px] relative overflow-hidden shrink-0 mix-blend-normal min-h-[45px] z-[1]"
          src="/icon-3.svg"
        />
        </a>
        <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
          <h3 className="m-0 self-stretch h-[39px] relative text-inherit leading-[20px] font-semibold font-inherit flex items-center shrink-0 z-[1]">
            LOGO
          </h3>
        </div>
      </div>

      <div className="w-[511px] flex flex-col items-center justify-center pt-2.5 px-0 pb-0 box-border max-w-full text-sm-9 text-gray1-100">
        <div className=" flex flex-row items-start justify-start gap-[42px] max-w-full mq750:flex-wrap mq750:gap-[21px]">
        <a href="/landing-page" className="[text-decoration:none] hover:underline font-medium text-[inherit] inline-block min-w-[106px] z-[1]">Home</a>
        {/* <a href="#" className=" [text-decoration:none] hover:underline font-medium text-[inherit] inline-block min-w-[106px] z-[1]">Course Content</a> */}
        <a href="/about-us" className=" [text-decoration:none] hover:underline font-medium text-[inherit] inline-block min-w-[106px] z-[1]">About Us</a>
        <a href="/contact-us" className=" [text-decoration:none] hover:underline font-medium text-[inherit] inline-block min-w-[106px] z-[1]">Contact Us</a>
        </div>

        <div className="w-[346px] flex flex-row items-center justify-center pt-8 py-0 px-5 box-border max-w-full text-xs-7">
         <div className="w-[180px] relative leading-[20px] flex items-center shrink-0 z-[1]">
          Real-Time-content © 2024
         </div>
        </div>
      </div>
    </div>
      
    </footer>
  
  );
};



export default Footer;
