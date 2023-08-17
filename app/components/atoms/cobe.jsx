import createGlobe from "cobe";
import { useEffect, useRef } from "react";

// https://github.com/shuding/cobe


export default function Cobe() {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1300,
      height: 1300,
      scale: 1,
      phi: 2.16,
      theta: 0.04,
      dark: 1,
      diffuse: 1.1,
      mapSamples: 18000,
      mapBrightness: 6,
      mapBaseBrightness: 0,
      baseColor: [0.0588, 0.3137, 0.7294], // divide the hex code by 255
      markerColor: [0.9373, 0.9373, 0.9373],
      glowColor: [0, 0, 0],
      opacity: 0.9,
      markers: [],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, [canvasRef]);

  return (
    <div className="-mr-[28px]">
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      />
    </div>
  );
}
