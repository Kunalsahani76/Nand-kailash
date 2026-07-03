import AboutUs from "@/imports/AboutUs/index";
import BuildingConstruction from "@/imports/BuildingConstruction/index";
import BuldingManagment from "@/imports/BuldingManagment/index";
import ElectricWork from "@/imports/ElectricWork/index";
import Home from "@/imports/Home/index";
import Projects from "@/imports/Projects/index";
import ServiceSuryeys from "@/imports/ServiceSuryeys/index";
import Sustainability from "@/imports/Sustainability/index";
import SolarWindPage from "@/imports/SolarWindPage/index";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

const DESIGN_WIDTH = 1440;
type Page = "home" | "about" | "landSurveying" | "solarWind" | "buildingConstruction" | "electricWork" | "buildingManagement" | "projects" | "sustainability";

export default function App() {
  const [page, setPage] = useState<Page>("home");
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
        {page === "about" ? (
          <AboutUs
            onNavigateHome={() => setPage("home")}
            onNavigateLandSurveying={() => setPage("landSurveying")}
            onNavigateSolarWind={() => setPage("solarWind")}
            onNavigateBuildingConstruction={() => setPage("buildingConstruction")}
            onNavigateElectricWork={() => setPage("electricWork")}
            onNavigateBuildingManagement={() => setPage("buildingManagement")}
            onNavigateProjects={() => setPage("projects")}
            onNavigateSustainability={() => setPage("sustainability")}
          />
        ) : page === "landSurveying" ? (
          <ServiceSuryeys
            onNavigateAbout={() => setPage("about")}
            onNavigateHome={() => setPage("home")}
            onNavigateProjects={() => setPage("projects")}
            onNavigateSustainability={() => setPage("sustainability")}
          />
        ) : page === "solarWind" ? (
          <SolarWindPage
            onNavigateAbout={() => setPage("about")}
            onNavigateHome={() => setPage("home")}
            onNavigateProjects={() => setPage("projects")}
            onNavigateSustainability={() => setPage("sustainability")}
          />
        ) : page === "buildingConstruction" ? (
          <BuildingConstruction
            onNavigateAbout={() => setPage("about")}
            onNavigateHome={() => setPage("home")}
            onNavigateLandSurveying={() => setPage("landSurveying")}
            onNavigateSolarWind={() => setPage("solarWind")}
            onNavigateBuildingConstruction={() => setPage("buildingConstruction")}
            onNavigateElectricWork={() => setPage("electricWork")}
            onNavigateBuildingManagement={() => setPage("buildingManagement")}
            onNavigateProjects={() => setPage("projects")}
            onNavigateSustainability={() => setPage("sustainability")}
          />
        ) : page === "electricWork" ? (
          <ElectricWork
            onNavigateAbout={() => setPage("about")}
            onNavigateHome={() => setPage("home")}
            onNavigateLandSurveying={() => setPage("landSurveying")}
            onNavigateSolarWind={() => setPage("solarWind")}
            onNavigateBuildingConstruction={() => setPage("buildingConstruction")}
            onNavigateElectricWork={() => setPage("electricWork")}
            onNavigateBuildingManagement={() => setPage("buildingManagement")}
            onNavigateProjects={() => setPage("projects")}
            onNavigateSustainability={() => setPage("sustainability")}
          />
        ) : page === "buildingManagement" ? (
          <BuldingManagment
            onNavigateAbout={() => setPage("about")}
            onNavigateHome={() => setPage("home")}
            onNavigateLandSurveying={() => setPage("landSurveying")}
            onNavigateSolarWind={() => setPage("solarWind")}
            onNavigateBuildingConstruction={() => setPage("buildingConstruction")}
            onNavigateElectricWork={() => setPage("electricWork")}
            onNavigateBuildingManagement={() => setPage("buildingManagement")}
            onNavigateProjects={() => setPage("projects")}
            onNavigateSustainability={() => setPage("sustainability")}
          />
        ) : page === "projects" ? (
          <Projects
            onNavigateAbout={() => setPage("about")}
            onNavigateHome={() => setPage("home")}
            onNavigateProjects={() => setPage("projects")}
            onNavigateSustainability={() => setPage("sustainability")}
          />
        ) : page === "sustainability" ? (
          <Sustainability
            onNavigateAbout={() => setPage("about")}
            onNavigateHome={() => setPage("home")}
            onNavigateProjects={() => setPage("projects")}
            onNavigateSustainability={() => setPage("sustainability")}
          />
        ) : (
          <Home
            onNavigateAbout={() => setPage("about")}
            onNavigateLandSurveying={() => setPage("landSurveying")}
            onNavigateSolarWind={() => setPage("solarWind")}
            onNavigateBuildingConstruction={() => setPage("buildingConstruction")}
            onNavigateElectricWork={() => setPage("electricWork")}
            onNavigateBuildingManagement={() => setPage("buildingManagement")}
            onNavigateProjects={() => setPage("projects")}
            onNavigateSustainability={() => setPage("sustainability")}
          />
        )}
      </div>
    </div>
  );
}
