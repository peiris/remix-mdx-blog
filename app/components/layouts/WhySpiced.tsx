import GlassCard from "../atoms/GlassCard";
import CN from "classnames";
import Cobe from "../atoms/cobe";
import StackText from "../atoms/StackText";
import GradientComponent from "../atoms/GradientComponent";

const cardData = [
  {
    id: 0,
    heading: "Fast turnaround time",
    description:
      "With a focus on efficiency, we pride ourselves on delivering projects within tight timelines, ensuring quick and reliable results for our clients.",
    topImage: "/rabbit.svg",
    imageClassName: "w-[60px] h-[50px]",
  },
  {
    id: 1,
    heading: "100+",
    headingClassName: "!text-h2",
    description: "Finely crafted components and styles",
  },
  {
    id: 2,
    heading: "Customised solutions",
    description:
      "We understand that your business is unique. That’s why we offer scalable and personalised solutions that perfectly align with your business goals.",
    card: <StackText />,
  },
  {
    id: 3,
    heading: "Responsive web development",
    description:
      "We design and develop with responsiveness in mind, providing seamless experiences across mobile, desktop, and tablet devices.",
    rightImage: "/devices.png",
    imageClassName: "w-[252px] h-[127px]",
  },
];

function WhySpiced() {
  return (
    <div className="pt-[140px] flex-col w-full flex">
      {/* text section */}
      <div className="container flex flex-col gap-[40px] w-full relative">
        <span className="-left-[640px] pt-[60px] absolute">
          <Cobe />
        </span>

        <h1 className="text-yellow font-700 font-heading text-h2">
          Why Spiced?
        </h1>

        {/* Cards */}

        <div className="grid auto-rows-[220px] grid-cols-6 gap-[12px]">
          {(cardData || []).map(
            (
              {
                heading,
                description,
                topImage,
                rightImage,
                card,
                headingClassName,
                imageClassName,
              },
              i
            ) => (
              <GradientComponent
                key={i}
                className={CN(
                  i === 0 ? "col-span-3" : "",
                  i === 1 ? "col-span-1" : "",
                  i === 2 ? "row-span-2 col-span-2" : "",
                  i === 3 ? "col-span-4" : ""
                )}
              >
                <GlassCard
                  heading={heading}
                  description={description}
                  topImage={topImage}
                  rightImage={rightImage}
                  headingClassName={headingClassName}
                  imageClassName={imageClassName}
                  card={card}
                />
              </GradientComponent>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default WhySpiced;
