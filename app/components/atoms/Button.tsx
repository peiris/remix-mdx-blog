import type { FC } from "react";
import CN from "classnames";

export interface ButtonProps {
  [x: string]: any;
  appearance?: "link" | "primary" | "active" | "outline";
  size?: "sm" | "md" | "lg";
  label?: string;
  leftIcon?: any;
  rightIcon?: any;
}

export const Button: FC<ButtonProps> = ({
  appearance,
  className,
  label,
  size,
  leftIcon,
  rightIcon,
  ...restProps
}: ButtonProps) => {
  const ButtonClasses = CN(
    "button cursor-pointer flex items-center gap-[12px]",

    /* Appearance */
    {
      "bg-yellow text-black rounded-[4px] hover:text-B-800 hover:bg-yellow/80 text-center":
        appearance === "primary",
      "rounded-[4px] text-black bg-white text-center": appearance === "active",
      "text-white hover:text-yellow": appearance === "link",
      "text-white hover:text-yellow  border border-white0rounded-[4px] hover:border-yellow rounded-[4px]":
        appearance === "outline",

      /* Size */
      "h-[48px] px-[28px] py-[12px] text-bold": size === "sm",
    },

    className
  );

  return (
    <button className={ButtonClasses} {...restProps} type="button">
      {leftIcon && <div className="inline-flex">{leftIcon}</div>}

      {label}

      {rightIcon && <div className="inline-flex">{rightIcon}</div>}
    </button>
  );
};

Button.defaultProps = {
  appearance: "primary",
  size: "sm",
};

export default Button;
