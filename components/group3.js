
import PropTypes from 'prop-types';

const Group3 = ({ videoSrc, title, date, status, link }) => {
  return (
    <div className="w-[253px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-gray1-600 flex flex-col items-start justify-start pt-0 px-0 pb-[16.1px] box-border gap-[17px] z-[2] text-left text-xs text-gray1-200 font-inter">
      <video
        className="self-stretch rounded-3xs flex flex-row items-start justify-center bg-cover bg-no-repeat bg-[top] z-[1]"
        controls
      >
        <source src={videoSrc} />
      </video>
      <div className="flex flex-row items-start justify-start py-0 px-3.5">
        <div className="flex flex-col items-start justify-start gap-[3.5px]">
          <div className="relative text-sm tracking-[0.03em] text-gray1-100 inline-block min-w-[93px] z-[1]">
            {title}
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[2.3px] gap-[4.3px]">
            <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
              <img
                className="w-[11.4px] h-[9.8px] relative overflow-hidden shrink-0 z-[1]"
                alt="Calendar Icon"
                src="/lucidecalendar.svg"
              />
            </div>
            <div className="relative tracking-[0.03em] inline-block min-w-[85.5px] z-[1]">
              {date}
            </div>
          </div>
          <div className="w-[71px] flex flex-row items-start justify-start pt-0 px-0 pb-[6.2px] box-border gap-[5.8px]">
            <img
              className="h-[11.1px] w-[9.6px] relative shrink-0 z-[1]"
              alt="Status Icon"
              src="/indicators.svg"
            />
            <div className="flex-1 relative tracking-[0.03em] shrink-0 z-[1]">
              {status}
            </div>
          </div>
          <div className="flex items-start justify-start w-[100px]">
            <button
              className="w-[220.4px] cursor-pointer bg-[transparent] h-7 bg-white text-xs text-black border border-black rounded hover:bg-gray-100"
              onClick={() => window.location.href = link}>
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Group3.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Group3;
