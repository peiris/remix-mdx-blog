import Button from "../atoms/Button";
import Cobe from "../atoms/cobe";

function Hero() {
  return (
    <div className="container pt-[100px] flex items-center justify-between">
      {/* Hero text section */}
      <div className="flex flex-col gap-[40px] mt-[-50px]">
        <div className="flex flex-col gap-[28px]">
          <h1 className="text-white max-w-[500px] font-heading text-h1">
            Convert leads into customers
          </h1>
          <span className="text-white text-base w-[400px]">
            A young, human-centric agency that builds digital products to
            increase your customer engagement and business growth.
          </span>
        </div>

        <div className="flex gap-[24px]">
          <Button
            label="Services"
            rightIcon={
              <i className="ri-arrow-right-s-line text-black text-[20px]" />
            }
          />
          <Button label="Hire us" appearance="outline" />
        </div>
      </div>

      <Cobe />
    </div>
  );
}

export default Hero;
