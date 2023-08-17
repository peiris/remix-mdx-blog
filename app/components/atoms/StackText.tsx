import type { FC } from "react";
import CN from "classnames";

export interface StackTextProps {
  [x: string]: any;
}

const textData = [
  {
    id: 0,
    description: "Custom web design (UI/UX)",
  },
  {
    id: 1,
    description: "Custom web development",
  },
  {
    id: 2,
    description: "E-commerce solutions",
  },
  {
    id: 3,
    description: "CMS solutions",
  },
  {
    id: 4,
    description: "SEO",
  },
];
export const StackText: FC<StackTextProps> = ({
  appearance,
  className,
  label,
  size,
  leftIcon,
  rightIcon,
  ...restProps
}: StackTextProps) => {
  const StackTextClasses = CN(
    "stack-text w-full flex flex-1 relative",

    className
  );

  return (
    <div className={StackTextClasses}>
      <div className="relative z-[3] flex justify-start items-center bg-[#2C3340] p-[20px] w-full rounded-[8px] shadow-card">
        <div className="flex flex-col gap-[4px]">
          {(textData || []).map(({ description }, index: number) => (
            <div
              className="text-white flex items-center gap-[12px] font-md"
              key={index}
            >
              <i className="ri-check-line " />
              <span>{description}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-[8px] right-[8px] bg-[#2C3340] rounded-[8px] shadow-card z-[2] bottom-[-6px] h-[200px]" />

      <div className="absolute left-[16px] right-[16px] bg-[#2C3340] rounded-[8px] shadow-card z-[1] bottom-[-12px] h-[200px]" />
    </div>
  );
};

export default StackText;
