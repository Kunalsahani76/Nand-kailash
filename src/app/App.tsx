import AboutUs from "@/imports/AboutUs/index";
import BuildingConstruction from "@/imports/BuildingConstruction/index";
import BuldingManagment from "@/imports/BuldingManagment/index";
import Career from "@/imports/Career/index";
import Contact from "@/imports/Contact/index";
import ElectricWork from "@/imports/ElectricWork/index";
import Home from "@/imports/Home/index";
import Projects from "@/imports/Projects/index";
import ServiceSuryeys from "@/imports/ServiceSuryeys/index";
import Sustainability from "@/imports/Sustainability/index";
import SolarWindPage from "@/imports/SolarWindPage/index";
import type { CSSProperties } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

const DESIGN_WIDTH = 1440;
type Page = "home" | "about" | "landSurveying" | "solarWind" | "buildingConstruction" | "electricWork" | "buildingManagement" | "projects" | "sustainability" | "career" | "contact";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [scale, setScale] = useState(1);
  const scaleRef = useRef(1);

  useEffect(() => {
    let frame = 0;

    const updateScale = () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      frame = requestAnimationFrame(() => {
        const nextScale = window.innerWidth / DESIGN_WIDTH;

        if (Math.abs(nextScale - scaleRef.current) > 0.001) {
          scaleRef.current = nextScale;
          setScale(nextScale);
        }
      });
    };

    updateScale();
    window.addEventListener("resize", updateScale, { passive: true });
    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      document.querySelectorAll<HTMLImageElement>("img").forEach((image, index) => {
        image.decoding = "async";

        if (index > 2) {
          image.loading = "lazy";
        }
      });
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [page]);

  const navigateTo = useCallback((nextPage: Page) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
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
            onNavigateHome={() => navigateTo("home")}
            onNavigateLandSurveying={() => navigateTo("landSurveying")}
            onNavigateSolarWind={() => navigateTo("solarWind")}
            onNavigateBuildingConstruction={() => navigateTo("buildingConstruction")}
            onNavigateElectricWork={() => navigateTo("electricWork")}
            onNavigateBuildingManagement={() => navigateTo("buildingManagement")}
            onNavigateProjects={() => navigateTo("projects")}
            onNavigateSustainability={() => navigateTo("sustainability")}
            onNavigateCareers={() => navigateTo("career")}
            onNavigateContact={() => navigateTo("contact")}
          />
        ) : page === "landSurveying" ? (
          <ServiceSuryeys
            onNavigateAbout={() => navigateTo("about")}
            onNavigateHome={() => navigateTo("home")}
            onNavigateProjects={() => navigateTo("projects")}
            onNavigateSustainability={() => navigateTo("sustainability")}
            onNavigateCareers={() => navigateTo("career")}
            onNavigateContact={() => navigateTo("contact")}
          />
        ) : page === "solarWind" ? (
          <SolarWindPage
            onNavigateAbout={() => navigateTo("about")}
            onNavigateHome={() => navigateTo("home")}
            onNavigateProjects={() => navigateTo("projects")}
            onNavigateSustainability={() => navigateTo("sustainability")}
            onNavigateCareers={() => navigateTo("career")}
            onNavigateContact={() => navigateTo("contact")}
          />
        ) : page === "buildingConstruction" ? (
          <BuildingConstruction
            onNavigateAbout={() => navigateTo("about")}
            onNavigateHome={() => navigateTo("home")}
            onNavigateLandSurveying={() => navigateTo("landSurveying")}
            onNavigateSolarWind={() => navigateTo("solarWind")}
            onNavigateBuildingConstruction={() => navigateTo("buildingConstruction")}
            onNavigateElectricWork={() => navigateTo("electricWork")}
            onNavigateBuildingManagement={() => navigateTo("buildingManagement")}
            onNavigateProjects={() => navigateTo("projects")}
            onNavigateSustainability={() => navigateTo("sustainability")}
            onNavigateCareers={() => navigateTo("career")}
            onNavigateContact={() => navigateTo("contact")}
          />
        ) : page === "electricWork" ? (
          <ElectricWork
            onNavigateAbout={() => navigateTo("about")}
            onNavigateHome={() => navigateTo("home")}
            onNavigateLandSurveying={() => navigateTo("landSurveying")}
            onNavigateSolarWind={() => navigateTo("solarWind")}
            onNavigateBuildingConstruction={() => navigateTo("buildingConstruction")}
            onNavigateElectricWork={() => navigateTo("electricWork")}
            onNavigateBuildingManagement={() => navigateTo("buildingManagement")}
            onNavigateProjects={() => navigateTo("projects")}
            onNavigateSustainability={() => navigateTo("sustainability")}
            onNavigateCareers={() => navigateTo("career")}
            onNavigateContact={() => navigateTo("contact")}
          />
        ) : page === "buildingManagement" ? (
          <BuldingManagment
            onNavigateAbout={() => navigateTo("about")}
            onNavigateHome={() => navigateTo("home")}
            onNavigateLandSurveying={() => navigateTo("landSurveying")}
            onNavigateSolarWind={() => navigateTo("solarWind")}
            onNavigateBuildingConstruction={() => navigateTo("buildingConstruction")}
            onNavigateElectricWork={() => navigateTo("electricWork")}
            onNavigateBuildingManagement={() => navigateTo("buildingManagement")}
            onNavigateProjects={() => navigateTo("projects")}
            onNavigateSustainability={() => navigateTo("sustainability")}
            onNavigateCareers={() => navigateTo("career")}
            onNavigateContact={() => navigateTo("contact")}
          />
        ) : page === "projects" ? (
          <Projects
            onNavigateAbout={() => navigateTo("about")}
            onNavigateHome={() => navigateTo("home")}
            onNavigateProjects={() => navigateTo("projects")}
            onNavigateSustainability={() => navigateTo("sustainability")}
            onNavigateCareers={() => navigateTo("career")}
            onNavigateContact={() => navigateTo("contact")}
          />
        ) : page === "sustainability" ? (
          <Sustainability
            onNavigateAbout={() => navigateTo("about")}
            onNavigateHome={() => navigateTo("home")}
            onNavigateProjects={() => navigateTo("projects")}
            onNavigateSustainability={() => navigateTo("sustainability")}
            onNavigateCareers={() => navigateTo("career")}
            onNavigateContact={() => navigateTo("contact")}
          />
        ) : page === "career" ? (
          <Career
            onNavigateAbout={() => navigateTo("about")}
            onNavigateHome={() => navigateTo("home")}
            onNavigateLandSurveying={() => navigateTo("landSurveying")}
            onNavigateSolarWind={() => navigateTo("solarWind")}
            onNavigateBuildingConstruction={() => navigateTo("buildingConstruction")}
            onNavigateElectricWork={() => navigateTo("electricWork")}
            onNavigateBuildingManagement={() => navigateTo("buildingManagement")}
            onNavigateProjects={() => navigateTo("projects")}
            onNavigateSustainability={() => navigateTo("sustainability")}
            onNavigateCareers={() => navigateTo("career")}
            onNavigateContact={() => navigateTo("contact")}
          />
        ) : page === "contact" ? (
          <Contact
            onNavigateAbout={() => navigateTo("about")}
            onNavigateHome={() => navigateTo("home")}
            onNavigateLandSurveying={() => navigateTo("landSurveying")}
            onNavigateSolarWind={() => navigateTo("solarWind")}
            onNavigateBuildingConstruction={() => navigateTo("buildingConstruction")}
            onNavigateElectricWork={() => navigateTo("electricWork")}
            onNavigateBuildingManagement={() => navigateTo("buildingManagement")}
            onNavigateProjects={() => navigateTo("projects")}
            onNavigateSustainability={() => navigateTo("sustainability")}
            onNavigateCareers={() => navigateTo("career")}
            onNavigateContact={() => navigateTo("contact")}
          />
        ) : (
          <Home
            onNavigateAbout={() => navigateTo("about")}
            onNavigateLandSurveying={() => navigateTo("landSurveying")}
            onNavigateSolarWind={() => navigateTo("solarWind")}
            onNavigateBuildingConstruction={() => navigateTo("buildingConstruction")}
            onNavigateElectricWork={() => navigateTo("electricWork")}
            onNavigateBuildingManagement={() => navigateTo("buildingManagement")}
            onNavigateProjects={() => navigateTo("projects")}
            onNavigateSustainability={() => navigateTo("sustainability")}
            onNavigateCareers={() => navigateTo("career")}
            onNavigateContact={() => navigateTo("contact")}
          />
        )}
      </div>
    </div>
  );
}
