import IconText from "./IconText";

function HowWeWork() {
  return (
    <div className="bg-[#161B22]/90 border border-[#30363D] py-[60px] px-[60px] rounded-[12px] flex items-center">
      <div className="text-white text-h4 bg-[#2C3340]/90 py-[12px] pl-[24px] pr-[80px] rounded-[8px] w-[340px]">
        How we work
      </div>

      {/* Icon */}
      <div className="flex">
        <img
          src="/connect.svg"
          className="w-[180px]"
          alt="spiced connector icon"
        />
      </div>

      <div className="bg-[#2C3340]/90 py-[40px] px-[40px] rounded-[8px] w-full flex flex-col gap-[40px]">
        <IconText
          heading="Easy onboarding"
          description="We prioritise your time and investment by offering a hassle-free and
        efficient onboarding process."
          icon="/check-icon.svg"
        />
        <IconText
          heading="Discovery phase"
          description="We dive deep into understanding your goals, audience, and project requirements, setting the foundation for a successful collaboration."
          icon="/check-icon.svg"
        />
        <IconText
          heading="Agile development"
          description="With agile development process we break down the work into iterative sprints, allowing for quick feedback, continuous improvement, and efficient delivery of high-quality results."
          icon="/check-icon.svg"
        />
        <IconText
          heading="Continuous improvements"
          description="At every stage of the project, we seek ways to enhance and refine based on new insights and evolving requirements while making sure to timely deliver the project."
          icon="/check-icon.svg"
        />
      </div>
    </div>
  );
}

export default HowWeWork;
