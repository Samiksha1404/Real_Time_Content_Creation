
import PropTypes from "prop-types";

const AboutContent = ({ }) => {
  return (
    <div className="w-[930px] flex flex-col items-end justify-start gap-[36px] max-w-full text-left text-11xl text-white font-inter mq450:gap-[18px]">
      <section className="w-full flex flex-col items-center justify-center gap-2 text-sm">
        <div className="w-full max-w-[1204px] flex flex-col md:flex-row items-start justify-start relative text-lg text-gray1-200">
          <div className="absolute top-[4px] left-1/2 transform -translate-x-1/2 md:top-[4px] md:left-[-108px] h-[216px] w-[216px] blur-[40px] rounded-9980xl bg-blueviolet overflow-hidden" />
          <div className="flex-1 bg-gray1-600 rounded-3xs shadow-md p-6 md:p-[50px] z-[1] border border-gray1-300">
            Welcome to [Company Name], where we're revolutionizing content creation for educators. Our real-time system utilizes speech recognition to capture concepts, integrates online image retrieval, and employs text summarization for efficient information condensation. By eliminating manual input barriers, we provide instant access to visual aids, enhancing traditional methods and empowering lecturers worldwide. With a passionate team dedicated to innovation, we're committed to reshaping the future of educational content creation.
          </div>
        </div>
      </section>


      <div className="self-stretch flex flex-row items-start justify-start gap-[32px] max-w-full mq450:gap-[16px] mq1100:flex-wrap">
        <div className="flex-[0.8951] bg-gray1-600 rounded-3xs shadow-md p-10 gap-[29px] min-w-[291px] z-[1] border border-gray1-300 mq450:pt-[26px] mq450:pb-[81px]">
          <h2 className="text-inherit font-normal inline-block min-w-[89px] z-[1] mq450:text-lg mq750:text-5xl">Vision</h2>
          <div className="text-lg text-gray1-200">
            <p>Our vision is to enhance learning outcomes and engagement by creating dynamic learning environments that leverage cutting-edge technology. We aim to revolutionize the educational experience by improving the efficiency of information retrieval, enabling educators to enrich their teaching with diverse multimedia content and interactive resources.</p>
          </div>
        </div>

        <div className="flex-1 bg-gray1-600 rounded-3xs shadow-md p-10 text-lg text-gray1-200 mq450:pt-[26px] mq450:pb-5">
          <h2 className="text-11xl text-white font-normal inline-block z-[1] mq450:text-lg mq750:text-5xl">Features</h2>
          <div className="flex flex-col items-start justify-start gap-[18px] mt-4">
            <div className="z-[1]">
              <p>● Real-Time Speech Recognition: The system accurately transcribes spoken content in real-time, converting lectures into text format instantly.</p>
              <p>● Concept Extraction: Advanced algorithms extract key concepts and keywords from the transcribed text to identify primary topics covered in the lecture.</p>
              <p>● Online Image Retrieval: Integration with APIs or web scraping techniques to fetch relevant images from online sources based on extracted concepts and keywords.</p>
            </div>
            <div className="flex flex-row items-start justify-end mt-4">
              <button className="cursor-pointer py-1 px-[3px] bg-gray1-300 w-[84px] rounded-9980xl border border-white flex items-center justify-center">
                <span className="text-sm leading-[25px] font-inter text-gray1-100">More</span>
                <img className="w-3 h-3 ml-1" src="/icon-2.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
        <div className="absolute top-[102px] right-[-313px] h-[426px] w-[426px] blur-[78.89px] rounded-[19720.25px] bg-moccasin-200 overflow-hidden" />
        <div className="flex-1 bg-gray1-600 rounded-3xs shadow-md p-[60px] gap-[49px] z-[1] border border-gray1-300 mq450:gap-[24px] mq450:pt-9 mq450:pb-[30px] mq1100:p-[55px]">
          <h2 className="w-[214px] text-inherit font-normal inline-block z-[1] mq450:text-lg mq750:text-5xl">How it work</h2>
          <div className="flex flex-row items-start justify-start pr-[30px] pl-8 mt-4">
            <img className="flex-1 h-[665px] max-w-full object-cover" src="/real-time-content-flowchart-1@2x.png" alt="" loading="lazy" />
          </div>
        </div>
      </div>

      <div className="self-stretch mb-12 flex flex-row items-start justify-start relative max-w-full">
        <div className="absolute right-[-108px] bottom-[-34px] h-[216px] w-[216px] blur-[40px] rounded-[9980px] bg-blueviolet overflow-hidden" />
        <div className="flex-1 bg-gray1-600 rounded-3xs shadow-md p-[25.9px] pb-[64px] z-[1] border border-gray1-300">
          <h2 className="w-[270.6px] text-inherit font-normal inline-block z-[1] mq450:text-lg mq750:text-5xl">Benefits</h2>
          <div className="text-lg text-gray1-200 mt-4">
            <p>● Time Efficiency: Our project saves educators time by automating content creation tasks.</p>
            <p>● Enhanced Engagement: Students are more engaged with dynamic visual aids and real-time information.</p>
            <p>● Improved Learning Outcomes: Students grasp concepts better and retain information more effectively.</p>
            <p>● Innovation in Education: Our project drives innovation by leveraging cutting-edge technologies like AI and real-time processing.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
