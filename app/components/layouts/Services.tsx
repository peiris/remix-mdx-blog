import GlassCard from "../atoms/GlassCard";
import GradientComponent from "../atoms/GradientComponent";
import HowWeWork from "../atoms/HowWeWork";

function Services() {
  return (
    <div className="container pt-[100px]">
      <div className="">
        {/* Services text section */}

        <div className="flex flex-col gap-[8px] w-full">
          <span className="text-white text-bold">Our services</span>

          <div className="flex gap-[28px] justify-between items-center">
            <h2 className="text-white w-[360px] font-heading text-h2">
              What <span className="text-yellow">services</span> we’re offering
            </h2>
            <span className="text-white text-base w-[580px]">
              We offer a diverse range of services to help your business thrive
              in the digital landscape. Unlock the full potential of your online
              presence with our services from custom web development and
              innovative design to strategic SEO solutions and seamless user
              experiences.
            </span>
          </div>
        </div>

        <div className="flex gap-[24px] pt-[80px] pb-[60px]">
          <GradientComponent>
            <GlassCard
              topImage="/revamp.svg"
              imageClassName="w-[44px] h-full"
              heading="Futuristic revamp"
              description="Modernise your existing platforms with our futuristic touch. We give new life into your digital presence while using advanced technologies and innovative features."
              descriptionClassName="text-white/50"
            />
          </GradientComponent>
          <GradientComponent>
            {" "}
            <GlassCard
              topImage="/ux.svg"
              imageClassName="w-[44px] h-full"
              heading="UX magic"
              description="We create fascinating user experiences that captivate, engage, and leave a lasting impression. Let the magic of intuitive interfaces elevate your digital products.."
              descriptionClassName="text-white/50"
            />
          </GradientComponent>
          <GradientComponent>
            <GlassCard
              topImage="/web.svg"
              imageClassName="w-[44px] h-full"
              heading="Web alchemy"
              description="Transform your ideas into digital gold with our experienced team of web professionals. We combine creativity and technical know-how to develop remarkable web solutions."
              descriptionClassName="text-white/50"
            />
          </GradientComponent>
          <GradientComponent>
            <GlassCard
              topImage="/seven-day-web.svg"
              imageClassName="w-[44px] h-full"
              heading="Website in 7 days"
              description="We create stunning websites in just 7 days, tailored for urgent needs. This offer is ideal for small-scale websites, ensuring online experiences that accelerate your digital presence."
              descriptionClassName="text-white/50"
            />
          </GradientComponent>
        </div>

        {/* How we work */}
        <GradientComponent>
          <HowWeWork />
        </GradientComponent>
      </div>
    </div>
  );
}

export default Services;
