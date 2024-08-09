import { useCallback } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


const ContactUs = () => {
  const router = useRouter();

  const onAboutUsTextClick = useCallback(() => {
    router.push("/about-us");
  }, [router]);
  const onGroupContainerClick = useCallback(() => {
    router.push("/landing-page");
  }, [router]);

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
              Contact Us
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

        {/* contact section  */}
        <section className={`w-full max-w-[928px] flex flex-col items-center justify-start pt-[42px] px-5 pb-[62px] gap-10 relative text-dark-foregrounds-fg-base font-readex-pro `}>
          <div className="absolute bottom-[-61px] left-[-122px] h-[216px] w-[216px] blur-[40px] rounded-9980xl bg-blueviolet z-0" />
          <img className="w-full h-full absolute top-0 left-0 max-w-full max-h-full z-0" alt="Background" src="/about-us-text.svg" />

          <div className="w-full max-w-[501.5px] flex flex-col items-start gap-2 z-10">
            <label>Email</label>
            <div className="w-full flex flex-row items-center bg-gray1-800 rounded-2xl p-3 border border-gray1-400">
              <input className="w-full bg-transparent outline-none text-lgi-5 text-slategray" placeholder="example@gmail.com" type="text" />
            </div>
          </div>

          <div className="w-full max-w-[501.5px] flex flex-col items-start gap-2 z-10">
            <label>Phone</label>
            <div className="w-full flex flex-row items-center bg-gray1-800 rounded-2xl p-3 border border-gray1-400">
              <input className="w-full bg-transparent outline-none text-lgi-5 text-slategray" placeholder="00000000" type="text" />
            </div>
          </div>

          <div className="w-full max-w-[501.5px] flex flex-col items-start gap-2 z-10">
            <label>Message</label>
            <textarea className="w-full h-[129px] bg-gray1-800 rounded-2xl p-3 border border-gray1-400 text-lgi-5 text-slategray" placeholder="Write your message here"></textarea>
          </div>

          <button onClick={onGroupContainerClick} className="w-[113px] h-9 rounded-9980xl bg-gray1-300 border border-white flex items-center justify-center text-gray1-100 z-10">
            Sent
            <img className="ml-2 w-3.5 h-3" alt="Send Icon" src="/icon-21.svg" />
          </button>
        </section>


        {/* footer */}
        <Footer />
      </div>




    </>
  );
};

export default ContactUs;
