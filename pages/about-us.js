
import AboutContent from "../components/AboutContent";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const AboutUs = () => {
  return (
    <>
      <div className="w-full h-max pt-[53px] bg-gray1-800 overflow-hidden flex flex-col items-center justify-start mix-blend-normal leading-normal tracking-normal">
        <Navbar />

        {/* into section */}
        <div className="w-full h-[500px]  flex flex-col items-center justify-center text-center bg-gray1-800 relative">
          <div className="absolute top-[30px] [filter:blur(78.89px)] rounded-[19720.25px] bg-moccasin-200 w-[426px] h-[426px] overflow-hidden mix-blend-normal z-[0]">
            {/* Blurred div with lower z-index */}
          </div>
          <div className="relative z-[2] flex flex-col items-center ">
            <h1 className="flex flex-col items-end justify-start gap-[111px] max-w-full text-center text-41xl text-white font-inter mq750:gap-[28px] mq1100:gap-[55px] z-[2]">
              About Us
            </h1>
            <button className="cursor-pointer p-0 hover:bg-[#18181b] bg-gray1-300 rounded-9980xl box-border w-36 h-9 border-[1px] border-solid border-white flex items-center justify-center">
              <div className="flex items-center justify-center w-full h-full">
                <span className="text-sm leading-[25px] font-inter text-gray1-100 text-center mr-2">
                  Let’s Know
                </span>
                <img
                  className="w-[6.5px] h-3 overflow-hidden mix-blend-normal"
                  alt=""
                  src="/icon1.svg"
                />
              </div>
            </button>
          </div>
        </div>


       {/* Main Content */}
       
       <AboutContent />


        {/* footer */}
       <Footer/>

      </div>


    </>

  );
};

export default AboutUs;
