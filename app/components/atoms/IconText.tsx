import type { FC } from "react";
import CN from "classnames";

export interface IconTextProps {
  [x: string]: any;
  heading?: string;
  description?: string;
  icon?: string;
}

export const IconText: FC<IconTextProps> = ({
  className,
  heading,
  description,
  icon,
  ...restProps
}: IconTextProps) => {
  const IconTextClasses = CN(
    `icon-text flex gap-[36px] items-start`,
    className
  );

  return (
    <div className={IconTextClasses} {...restProps}>
      {/* icon and heading */}
      <div className="flex gap-[8px] w-[200px] items-center">
        <img
          src={icon}
          className="w-[24px] h-full"
          alt="check icon"
        />
        <span className="text-white text-bold w-[180px]">{heading}</span>
      </div>
      <p className="text-md text-white/50">
      {description}
      </p>
    </div>
  );
};

IconText.defaultProps = {};

export default IconText;
