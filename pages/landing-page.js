
import { useCallback } from "react";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import Navbar from "../components/navbar";
import Group3 from "../components/group3";
import Footer from "../components/footer";
import { PlusIcon } from '@heroicons/react/24/solid';

const LandingPage = () => {
  const router = useRouter();

  const onLetsCreateTextClick = useCallback(() => {
    router.push("/v-ideo");
  }, [router]);
  const groupData = [
    {
      videoSrc: "blue.mp4",
      title: "Lecture No.1",
      date: "Mar 10, 2024",
      status: "Online",
      link: "/v-ideo1"
    },
    {
      videoSrc: "binary.mp4",
      title: "Lecture No.2",
      date: "Apr 15, 2024",
      status: "Offline",
      link: "/v-ideo2"
    },
    {
      videoSrc: "blue.mp4",
      title: "Lecture No.3",
      date: "May 22, 2024",
      status: "Online",
      link: "/v-ideo3"
    },
    {
      videoSrc: "binary.mp4",
      title: "Lecture No.4",
      date: "Jun 18, 2024",
      status: "Online",
      link: "/v-ideo4"
    },
    {
      videoSrc: "binary.mp4",
      title: "Lecture No.5",
      date: "Jul 30, 2024",
      status: "Offline",
      link: "/v-ideo5"
    },
    {
      videoSrc: "video1.mp4",
      title: "Lecture No.6",
      date: "Jul 30, 2024",
      status: "Offline",
      link: "/v-ideo6"
    }
  ];
  return (
    <div className="relative w-full min-h-screen bg-gray1-800 overflow-hidden flex flex-col items-center justify-center pt-[53px] px-0 pb-0 box-border">
      <main className="relative w-full max-w-[1373px] h-auto flex flex-col items-center justify-center">
        {/* Background elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-[40px] rounded-full bg-blueviolet w-[216px] h-[216px] overflow-hidden mix-blend-normal z-0" />
        <div className="absolute top-[70%] left-[90%] transform -translate-x-1/2 -translate-y-1/2 blur-[40px] rounded-full bg-blueviolet w-[216px] h-[216px] overflow-hidden mix-blend-normal z-0" />
        <img
          className="absolute top-[-70px] right-[-531px] w-[1500px] h-[725px] object-cover"
          alt=""
          src="/grid@2x.png"
        />
        <div className="absolute top-[80%] left-[-10%] blur-[93.52px] rounded-full bg-moccasin-100 w-[505px] h-[505px] overflow-hidden mix-blend-normal z-0" />

        {/* Main Content */}
        <div className="w-full max-w-[1373px] px-5 flex flex-col items-center justify-center">
          <div className={`w-[1048.2px] flex flex-col items-end justify-start gap-[111px] max-w-full text-center text-41xl text-white font-inter mq750:gap-[28px] mq1100:gap-[55px] `}>

            {/* Navbar */}
            <Navbar />

            {/* Into-Part */}
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[66px] box-border max-w-full">
              <div className="w-[981px] flex flex-col items-start justify-start gap-[46px] max-w-full mq750:gap-[23px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
                  <div className="self-stretch h-9 flex flex-row items-start justify-center py-0 pr-[22px] pl-5 box-border">
                    <Button
                      className="self-stretch w-[265.4px] z-[1]"
                      endIcon={<img width="12px" height="12px" src="/icon-2.svg" />}
                      disableElevation
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#fafafa",
                        fontSize: "14",
                        background: "#18181b",
                        border: "#2b2b2b solid 1px",
                        borderRadius: "9999px",
                        "&:hover": { background: "#18181b" },
                        width: 265.4,
                      }}
                    >
                      Presenting New Learing Tech
                    </Button>
                  </div>
                  <h1 className="m-0 self-stretch relative text-inherit leading-[61px] font-medium font-inherit z-[2] mq450:text-17xl mq450:leading-[37px] mq750:text-29xl mq750:leading-[49px]">
                    Revolutionary Approach To Content Creation
                  </h1>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-base">
                  <div className="w-[723px] relative leading-[25px] flex items-center shrink-0 max-w-full z-[2]">
                    <span className="w-full">
                      <p className="m-0">
                        Create a real-time content creation system for lecturers using
                      </p>
                      <p className="m-0">speech recognition to capture concepts.</p>
                    </span>
                  </div>
                </div>

                {/* create button */}
                <div className="self-stretch h-9 flex flex-row items-start justify-center py-0  box-border">
                  <Button
                    className="self-stretch w-[160.4px] z-[1] bg-gray1-300" onClick={onLetsCreateTextClick}
                    endIcon={<img width="12px" height="12px" src="/icon-2.svg" />}
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fafafa",
                      fontSize: "14",
                      background: "#18181b",
                      border: "#ffffff solid 1px",
                      borderRadius: "9999px",
                      "&:hover": { background: "#18181b" },
                      width: 150.4,
                    }}
                  >
                    Let’s Create
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* main content part */}
      <div className="flex justify-center items-start min-h-screen p-6">
        <div className="flex gap-6">
          {/* Left part */}
          <div className="relative rounded-2xl bg-gray1-600 box-border w-[253px] h-[790px] overflow-hidden mix-blend-normal z-[1] border-[1px] border-solid border-gray1-300">
            <div className="h-14 pt-12 flex items-center justify-center">
              <button
                className="w-[160px] bg-gray-700 text-white text-sm font-medium py-2 px-4 rounded border border-white flex items-center justify-center hover:bg-gray-800"
                onClick={onLetsCreateTextClick}
              >
                Let’s Create
                <PlusIcon className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Main video content */}
          <div className="w-[789.2px] mt-4 flex flex-col items-start justify-start gap-[20px] max-w-full text-left text-xs text-gray1-200">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px_12.8px] min-h-[644px]">
              {groupData.map((data, index) => (
                <Group3
                  key={index}
                  videoSrc={data.videoSrc}
                  title={data.title}
                  date={data.date}
                  status={data.status}
                  link={data.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;

