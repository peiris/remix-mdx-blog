import React, { useEffect, useState } from "react";

const MouseGrad: React.FC = () => {
  const [mouseXpercentage, setMouseXpercentage] = useState<number>(0);
  const [mouseYpercentage, setMouseYpercentage] = useState<number>(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const mouseX = event.pageX;
      const mouseY = event.pageY;

      const mouseXpercentage = Math.round((mouseX / windowWidth) * 100);
      const mouseYpercentage = Math.round((mouseY / windowHeight) * 100);

      
      setMouseXpercentage(mouseXpercentage);
      setMouseYpercentage(mouseYpercentage);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const MouseGradStyle: React.CSSProperties = {
    position: "fixed",
    top: "0px",
    left: "0px",
    height: "100%",
    width: "100%",
    background: `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, #183AFF to-#230188)`,
  };

  return <div className="radial-gradient" style={MouseGradStyle}></div>;
};

export default MouseGrad;
