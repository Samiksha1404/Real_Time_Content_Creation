import { useCallback } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";

const Navbar = ({  }) => {
  const router = useRouter();

  const onHomeTextClick = useCallback(() => {
    router.push("/landing-page");
  }, [router]);

  const onAboutUsTextClick = useCallback(() => {
    router.push("/about-us");
  }, [router]);

  const onContactUsTextClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  return (
    <div
      className={`self-stretch  flex flex-row items-start justify-center py-0 pr-[86px] pl-5 box-border sticky top-[0] z-[99] max-w-full mq450:pr-5 mq450:box-border mq750:pr-[43px] mq750:box-border `}
    >
      <header className="w-[641.7px]  rounded-2xl bg-gray1-600 box-border flex flex-row items-start justify-between py-1.5 pr-[17px] pl-3.5 gap-[20px] max-w-full z-[1] text-left text-sm text-white font-inter border-[1px] border-solid border-gray1-300 mq450:hidden">
        <div className="h-12 w-[641.7px] relative rounded-2xl bg-gray1-600 box-border hidden max-w-full border-[1px] border-solid border-gray1-300" />
        <div className="flex flex-col items-start justify-start pt-px pb-0 pr-1 pl-0">
          <a href="/landing-page">
            <img
              className="w-[30px] h-[30px] relative overflow-hidden shrink-0 mix-blend-normal z-[1]"
              alt="Logo"
              src="/icon-1.svg"
            />
          </a>
        </div>
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <a
            className="[text-decoration:none] hover:underline relative leading-[23px] text-[inherit] inline-block min-w-[66px] whitespace-nowrap cursor-pointer z-[1]"
            onClick={onHomeTextClick}
          >
            Home
          </a>
        </div>
        <div className="flex flex-col  items-start justify-start pt-1 px-0 pb-0">
          <a
            className="[text-decoration:none] hover:underline relative leading-[23px] text-[inherit] inline-block min-w-[66px] whitespace-nowrap cursor-pointer z-[1]"
            onClick={onAboutUsTextClick}
          >
            About Us
          </a>
        </div>
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <a
            className="[text-decoration:none] hover:underline relative leading-[23px] text-[inherit] inline-block min-w-[66px] whitespace-nowrap cursor-pointer z-[1]"
            onClick={onContactUsTextClick}
          >
            Contact Us
          </a>
        </div>
        <div className="w-[100px] flex flex-row items-start justify-start gap-[20px]">
          <Button
            className="flex-1 relative bg-white text-black hover:text-white"
            href="/sign-up"
            sx={{
              textTransform: "none",
              color: "#fafafa",
              fontSize: "14px",
              background: "#18181b",
              border: "#2b2b2b solid 1px",
              borderRadius: "50px",
              "&:hover": { background: "#18181b" },
              width: 265.4,
            }}
          >
            Log Out
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
