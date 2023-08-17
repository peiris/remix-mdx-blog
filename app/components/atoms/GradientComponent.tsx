import React, { useState, MouseEvent, ReactNode } from "react";
import CN from "classnames";

export interface GradientComponentProps {
  children: ReactNode;
  [x: string]: any;
}

const GradientComponent: React.FC<GradientComponentProps> = ({
  children,
  className,
}) => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isMoving, setIsMoving] = useState(false);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    setIsMoving(true);
    setPosition({
      x: event.clientX - event.currentTarget.getBoundingClientRect().left - 305,
      y: event.clientY - event.currentTarget.getBoundingClientRect().top - 305,
    });
  };

  const handleMouseOut = () => {
    setIsMoving(false);
  };

  const GradientComponentClasses = CN(
    `overflow-hidden h-full w-full`,

    className
  );

  return (
    <div className={GradientComponentClasses}>
      <div
        className="relative h-full w-full rounded-[12px] bg-[#161B22]/90"
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
      >
        <span
          className="absolute top-0 right-0 bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-black/80 to-purple-500 rounded-full opacity-0 transition-opacity duration-1200 ease-in-out mix-blend-soft-light will-change-transform filter blur-[160px]"
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
            opacity: isMoving ? 0.8 : 0,
          }}
        />
        {children}
      </div>
    </div>
  );
};

export default GradientComponent;
