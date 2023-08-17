import Button from "./Button";

function Cta() {
  return (
    <div className="container flex items-center gap-[100px] pt-[160px] pb-[100px]">
      {/* Icon */}
      <div className="relative flex z-[2]">
        <img
          src="/globe.png"
          className="w-[308px] h-full"
          alt="spiced connector icon"
        />
        <div className="absolute w-[220px] h-[220px] bg-gradient-to-br from-[#183AFF] to-[#230188] rounded-full blur-[160px] z-[-1]" />
      </div>

      <div className="flex flex-col gap-[40px]">
        <div className="flex flex-col gap-[24px]">
          <h2 className="text-h2 font-heading text-white">
            Let’s talk about your product
          </h2>
          <p className="text-base text-white max-w-[610px]">
            We love connecting with new clients and exploring innovative product
            ideas. Whether you have an inquiry about a digital solution or any
            other question, we're here to help! Reach out to us and let's start
            a conversation.
          </p>
        </div>

        <div className="flex gap-[24px]">
          <Button label="Schedule a call" />
          <Button label="Email us" appearance="outline" />
        </div>
      </div>
    </div>
  );
}

export default Cta;
