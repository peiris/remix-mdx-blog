import type { FC } from "react";
import CN from "classnames";

export interface GlassCardProps {
  [x: string]: any;
  heading?: string;
  description?: string;
  topImage?: string;
  rightImage?: string;
  bottomImage?: string;
  headingClassName?: string;
  imageClassName?: string;
  descriptionClassName?: string;
  card?: any;
}

export const GlassCard: FC<GlassCardProps> = ({
  className,
  heading,
  description,
  topImage,
  rightImage,
  bottomImage,
  headingClassName,
  imageClassName,
  descriptionClassName,
  card,
  ...restProps
}: GlassCardProps) => {
  const GlassCardClasses = CN(
    `glass-card bg-[#161B22]/90 border border-[#30363D] py-[32px] px-[32px] rounded-[12px] gap-[20px] cursor-gradient h-full w-full`,
    {
      "flex flex-col": bottomImage,
      "flex flex-col gap-[20]": topImage,
      "flex gap-[24] items-center": rightImage,
      "flex flex-col gap-[24]": card,
    },
    className
  );

  return (
    <div className={GlassCardClasses} {...restProps}>
      {topImage && (
        <img
          src={topImage}
          className={CN("object-cover object-center", imageClassName)}
          alt="Card icon"
        />
      )}

      {rightImage && (
        <img
          src={rightImage}
          className={CN("object-cover object-center", imageClassName)}
          alt="Card icon"
        />
      )}

      <div className="flex flex-col gap-[12px]">
        <span className={CN("text-h5 text-white", headingClassName)}>
          {heading}
        </span>
        <span className={CN("text-md text-white", descriptionClassName)}>
          {description}
        </span>
      </div>

      {card && <div className="flex pt-[24px]"> {card} </div>}

      {bottomImage && (
        <img
          src={bottomImage}
          className={CN("object-cover object-center", imageClassName)}
          alt="Card icon bottom"
        />
      )}
    </div>
  );
};

GlassCard.defaultProps = {};

export default GlassCard;
