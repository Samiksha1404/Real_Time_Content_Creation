
import { useCallback } from "react";
import { useRouter } from "next/router";

const Start = () => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  return (
   
     <div className="w-full h-screen relative bg-gray1-800 overflow-hidden flex flex-row items-start justify-center pt-[243px] px-5 pb-[422px] box-border leading-[normal] tracking-[normal] text-left text-[32px] text-white font-inter"> 
       <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-0">
        <div className="w-[426px] [filter:blur(78.89px)] rounded-[19720.25px] bg-moccasin-200 overflow-hidden shrink-0 flex flex-row items-start justify-center pt-[172px] px-5 pb-[173px] box-border mix-blend-normal max-w-full mq450:pt-28 mq450:pb-28 mq450:box-border"></div>
      </div>
      <div
        className="relative w-[216px] mt-12  flex flex-row items-end justify-between gap-[20px] cursor-pointer z-10"
        onClick={onGroupContainerClick}>
        <img
          className=" w-[79.5px]  relative overflow-hidden shrink-0 mix-blend-normal border-2 border-red-500"
          alt="hello"
          src="/logoicon.svg"
        />
        <div className="w-[99.8px] flex flex-col items-start justify-end pt-0 px-0 pb-[5.4px] box-border">
          <div className="self-stretch  relative text-white  font-semibold flex items-center shrink-0 mq450:text-[19px] mq450:leading-[12px] mq750:text-[26px] mq750:leading-[16px]">
            LOGO
          </div>
        </div>
      </div> 
    </div> 
  );
};

export default Start;



