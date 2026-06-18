import Home from "@/imports/Home/index";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

const DESIGN_WIDTH = 1440;

export default function App() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => setScale(window.innerWidth / DESIGN_WIDTH);

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const scaledPageStyle: CSSProperties & { zoom: number } = {
    width: `${DESIGN_WIDTH}px`,
    transformOrigin: "top left",
    zoom: scale,
  };

  return (
    <div
      style={{
        width: "100%",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <div style={scaledPageStyle}>
        <Home />
      </div>
    </div>
  );
}
