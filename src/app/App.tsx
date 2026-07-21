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
  const [pageHeight, setPageHeight] = useState(0);
  const [scrollToCompletedProjects, setScrollToCompletedProjects] = useState(false);
  const scaleRef = useRef(1);
  const pageContentRef = useRef<HTMLDivElement>(null);

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
    const content = pageContentRef.current;
    if (!content) return;

    const updateHeight = () => {
      const nextHeight = content.scrollHeight;
      setPageHeight((currentHeight) =>
        Math.abs(currentHeight - nextHeight) > 1 ? nextHeight : currentHeight,
      );
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(content);
    return () => observer.disconnect();
  }, [page]);

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

  useEffect(() => {
    const closeAllServiceDropdowns = () => {
      document.querySelectorAll<HTMLElement>("[data-services-dropdown]").forEach((dropdown) => {
        dropdown.dataset.open = "false";
      });
    };

    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const trigger = target.closest<HTMLElement>("[data-services-dropdown-trigger]");
      if (trigger) {
        const dropdown = trigger.closest<HTMLElement>("[data-services-dropdown]");
        if (!dropdown) return;

        const willOpen = dropdown.dataset.open !== "true";
        closeAllServiceDropdowns();
        dropdown.dataset.open = String(willOpen);
        return;
      }

      if (!target.closest("[data-services-dropdown]")) {
        closeAllServiceDropdowns();
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      document.querySelectorAll(".image-card-hover").forEach((element) => {
        element.classList.remove("image-card-hover");
      });

      document.querySelectorAll(".image-card-hover__image").forEach((element) => {
        element.classList.remove("image-card-hover__image");
      });

      document.querySelectorAll(".text-card-hover").forEach((element) => {
        element.classList.remove("text-card-hover");
      });

      document.querySelectorAll<HTMLImageElement>("img").forEach((image) => {
        const card = image.closest<HTMLElement>(
          '[data-name*="Card"], [data-name*="Article"], [data-name*="Service Cards"], [data-name*="Project Card"], div[class*="rounded"][class*="overflow-clip"]',
        );

        if (
          !card ||
          card.closest('[data-name="NAV BAR"], [data-name="FOOTER"], [data-name="Footer"]') ||
          card.className.includes("w-[1440px]") ||
          card.className.includes("h-[750px]")
        ) {
          return;
        }

        card.classList.add("image-card-hover");
        card.querySelectorAll("img").forEach((cardImage) => {
          cardImage.classList.add("image-card-hover__image");
        });
      });

      document
        .querySelectorAll<HTMLElement>(
          '[data-name*="Card"], [data-name*="Service Cards"], div[class*="bg-gradient-to-b"][class*="rounded"]',
        )
        .forEach((card) => {
          const hasImage = Boolean(card.querySelector("img"));
          const hasText = (card.textContent || "").trim().length > 8;
          const isChrome = Boolean(card.closest('[data-name="NAV BAR"], [data-name="FOOTER"], [data-name="Footer"]'));
          const isFullWidthSection = card.className.includes("w-[1440px]") || card.className.includes("h-[750px]");

          if (!hasImage && hasText && !isChrome && !isFullWidthSection) {
            card.classList.add("text-card-hover");
          }
        });
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [page]);

  const navigateTo = useCallback((nextPage: Page) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const navigateToCompletedProjects = useCallback(() => {
    setScrollToCompletedProjects(true);
    setPage("projects");
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    if (page !== "projects" || !scrollToCompletedProjects) return;

    const frame = window.requestAnimationFrame(() => {
      const section = document.getElementById("completed-projects");
      if (section) {
        window.scrollTo({
          top: window.scrollY + section.getBoundingClientRect().top - 80,
          left: 0,
          behavior: "smooth",
        });
      }
      setScrollToCompletedProjects(false);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [page, scrollToCompletedProjects]);

  const renderedPage =
    page === "about" ? (
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
    ) : page === "solarWind" ? (
      <SolarWindPage
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
    ) : page === "sustainability" ? (
      <Sustainability
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
        onNavigateProjectsSection={navigateToCompletedProjects}
        onNavigateSustainability={() => navigateTo("sustainability")}
        onNavigateCareers={() => navigateTo("career")}
        onNavigateContact={() => navigateTo("contact")}
      />
    );

  const scaledPageStyle: CSSProperties = {
    width: `${DESIGN_WIDTH}px`,
    // `transform` creates a containing block, which makes fixed navbars scroll
    // away with their page. Zoom preserves the existing visual scaling without
    // changing the navbar's viewport-fixed positioning.
    zoom: scale,
  };

  if (page === "solarWind" && scale < 1024 / DESIGN_WIDTH) {
    return (
      <div
        style={{
          width: "100%",
          minWidth: 0,
          overflowX: "hidden",
          position: "relative",
        }}
      >
        {renderedPage}
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        minWidth: 0,
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          height: pageHeight ? `${Math.ceil(pageHeight * scale)}px` : undefined,
          overflow: "hidden",
        }}
      >
        <div ref={pageContentRef} style={scaledPageStyle}>
          {renderedPage}
        </div>
      </div>
    </div>
  );
}
