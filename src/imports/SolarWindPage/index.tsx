import { useState, useEffect } from "react";
import svgPaths from "@/imports/SoloarWind/svg-0199klzz0k";
import imgHero from "@/imports/SoloarWind/3ff1ce590410f2da4862b33d06404660ec0e7a65.png";
import imgAbout from "@/imports/SoloarWind/3d34e7fd5b4bc7ce76b764d4b677991c3aeee310.png";
import imgProcessBg from "@/imports/SoloarWind/f5c723ac516ab16778bbc4a1a837f54ecbb670af.png";
import imgFooterBg from "@/imports/SoloarWind/ff5318d16dd5f93f2647437a73bc8688b87582ae.png";
import imgLogo from "@/imports/SoloarWind/c20da46eb86065efabefe8dda3d480f08dfffacc.png";
import websiteIcon from "@/images/website icon.png";
import { Menu, X } from "lucide-react";

const sora = "'Sora', sans-serif";
const inter = "'Inter', sans-serif";
const hanken = "'Hanken Grotesk', sans-serif";

type SolarWindPageProps = {
  onNavigateAbout?: () => void;
  onNavigateHome?: () => void;
  onNavigateProjects?: () => void;
  onNavigateSustainability?: () => void;
  onNavigateCareers?: () => void;
  onNavigateContact?: () => void;
};

/* ─── Navbar ─── */
function Navbar({ onNavigateAbout, onNavigateHome, onNavigateProjects, onNavigateSustainability, onNavigateCareers, onNavigateContact }: SolarWindPageProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", onClick: onNavigateHome },
    { label: "About Us", onClick: onNavigateAbout },
    { label: "Services" },
    { label: "Projects", onClick: onNavigateProjects },
    { label: "Sustainability", onClick: onNavigateSustainability },
    { label: "Careers", onClick: onNavigateCareers },
    { label: "Contact Us", onClick: onNavigateContact },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow ${scrolled ? "shadow-md" : ""}`}
      style={{ backgroundColor: "rgba(255,255,255,0.98)", borderBottom: "1px solid rgba(64,64,64,0.5)" }}
    >
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-[120px] py-[10px]">
        {/* Logo */}
        <img src={websiteIcon} alt="Nanda Kailash Infrastructure" className="h-[49px] w-auto object-contain" />

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href="#"
              onClick={(event) => {
                if (link.onClick) {
                  event.preventDefault();
                  link.onClick();
                }
              }}
              className="px-[10px] py-[10px] text-[16px] text-[#404040] whitespace-nowrap"
              style={{ fontFamily: inter, fontWeight: 500, lineHeight: "21px" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#"
          className="hidden lg:flex items-center justify-center px-[10px] py-[10px] rounded-[4px] text-[14px] text-[#404040] whitespace-nowrap"
          style={{ fontFamily: inter, fontWeight: 600, lineHeight: "21px", backgroundColor: "#fafafa", border: "0.6px solid #ffce1b" }}
        >
          Get Consultation
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-[#404040]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-[rgba(64,64,64,0.2)] px-6 pb-4">
          {links.map((link) => (
            <a
              key={link.label}
              href="#"
              onClick={(event) => {
                if (link.onClick) {
                  event.preventDefault();
                  setOpen(false);
                  link.onClick();
                }
              }}
              className="block py-3 text-[16px] text-[#404040] border-b border-[rgba(64,64,64,0.1)] last:border-0"
              style={{ fontFamily: inter, fontWeight: 500 }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="mt-4 inline-flex items-center justify-center px-[10px] py-[10px] rounded-[4px] text-[14px] text-[#404040]"
            style={{ fontFamily: inter, fontWeight: 600, backgroundColor: "#fafafa", border: "0.6px solid #ffce1b" }}
          >
            Get Consultation
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[749px] overflow-hidden">
      {/* Background image */}
      <img
        src={imgHero}
        alt="Solar Wind Power Infrastructure"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-10 lg:px-[40px] pt-[100px] pb-6 lg:pt-0 min-h-[580px] lg:min-h-[749px]">
        <div className="flex flex-col gap-[38px] max-w-[914px]">
          {/* Title block */}
          <div className="flex flex-col gap-[18px]">
            <div className="flex flex-col gap-[20px]">
              {/* Badge */}
              <div className="inline-flex">
                <span
                  className="px-3 py-1 rounded-[4px] text-white text-[11px] md:text-[12px] tracking-[1.2px] uppercase"
                  style={{ fontFamily: inter, fontWeight: 700, backgroundColor: "rgba(55,95,157,0.6)" }}
                >
                  LAND SURVEYING &amp; DGPS MAPPING
                </span>
              </div>

              {/* Heading */}
              <div
                className="text-[40px] md:text-[52px] lg:text-[64px] capitalize leading-[1.1] tracking-[-1.28px]"
                style={{ fontFamily: sora, fontWeight: 800 }}
              >
                <span className="text-[#375f9d]">solar</span>
                <span className="text-white">/wind power</span>
                <br />
                <span className="text-white">infrastructure</span>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-[15px] md:text-[18px] text-[rgba(255,255,255,0.75)] leading-[32px] capitalize max-w-[762px]"
              style={{ fontFamily: inter, fontWeight: 400 }}
            >
              Solar / Wind power infrastructure development refers to the process of building and expanding facilities that convert sunlight or wind into usable electricity. This includes large-scale solar and wind parks, grid infrastructure, and the necessary equipment and technologies for efficient and reliable power generation and distribution.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#"
              className="flex items-center gap-2 px-[32px] py-[15px] rounded-[4px] text-white text-[16px]"
              style={{ fontFamily: inter, fontWeight: 400, backgroundColor: "#355d9b", lineHeight: "26px" }}
            >
              Explore Projects
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3.75 9H14.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 3.75L14.25 9L9 14.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#"
              className="flex items-center justify-center px-[33px] py-[17px] rounded-[4px] text-white text-[15px]"
              style={{ fontFamily: inter, fontWeight: 600, border: "1px solid white", lineHeight: "22.5px" }}
            >
              Contact Our Team
            </a>
          </div>

          {/* Stats bar */}
          <div
            className="flex flex-wrap gap-4 lg:gap-[22px] items-center px-4 md:px-[22px] py-[16px] rounded-[4px]"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          >
            {[
              { icon: svgPaths.p24991e60, value: "13+", label: "Site Selection and\nPreparation", viewBox: "0 0 24 24" },
              { icon: svgPaths.p1ecd3100, value: "9+", label: "Equipment\nInstallation", viewBox: "0 0 24 24" },
              { icon: svgPaths.pc4e4a90, value: "500+", label: "Grid Integration", viewBox: "0 0 24 24" },
              { icon: svgPaths.p306d3840, value: "Pan India", label: "Monitoring and\nMaintenance", viewBox: "0 0 24 24" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-[16px] min-w-[160px] flex-1">
                <div
                  className="flex items-center justify-center rounded-[8px] shrink-0"
                  style={{ width: 48, height: 48, border: "1px solid white" }}
                >
                  <svg width="24" height="24" viewBox={stat.viewBox} fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={stat.icon} />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span
                    className="text-white text-[28px] md:text-[30px]"
                    style={{ fontFamily: inter, fontWeight: 900, lineHeight: "36px" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-white text-[10px] uppercase whitespace-pre-line"
                    style={{ fontFamily: inter, fontWeight: 700, lineHeight: "15px" }}
                  >
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── About Section ─── */
function AboutSection() {
  return (
    <section className="w-full bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 px-6 md:px-10 lg:px-[70px] py-[60px] lg:py-[30px]">
        {/* Left: text */}
        <div className="flex flex-col gap-[24px] py-[20px] w-full lg:max-w-[689px]">
          {/* Badge */}
          <div className="inline-flex">
            <span
              className="px-3 py-2 rounded-[2px] text-white text-[12px] tracking-[0.96px] capitalize"
              style={{ fontFamily: inter, fontWeight: 500, backgroundColor: "rgba(55,95,157,0.6)" }}
            >
              greenery
            </span>
          </div>

          {/* Heading */}
          <div
            className="text-[#111827] text-[32px] md:text-[40px] lg:text-[48px] capitalize"
            style={{ fontFamily: sora, fontWeight: 400, lineHeight: "1.25" }}
          >
            Engineering Sustainable Future with Renewable Precision
          </div>

          {/* First paragraph */}
          <p
            className="text-[#4b5563] text-[16px] md:text-[18px] capitalize"
            style={{ fontFamily: inter, fontWeight: 400, lineHeight: "32px" }}
          >
            NANDA KAILASH designs and implements large-scale renewable energy assets that define the next generation of global power. Our solar and wind infrastructure solutions are engineered for maximum efficiency, utilizing advanced site analysis and structural optimization.
          </p>

          {/* Second paragraph */}
          <p
            className="text-[#4b5563] text-[16px] md:text-[18px] capitalize"
            style={{ fontFamily: inter, fontWeight: 400, lineHeight: "32px" }}
          >
            From offshore wind farms to desert-scale solar arrays, we manage the entire lifecycle including environmental compliance, grid synchronization, and long-term asset management.
          </p>
        </div>

        {/* Right: image */}
        <div className="w-full lg:w-auto shrink-0">
          <img
            src={imgAbout}
            alt="Solar panels infrastructure"
            className="w-full lg:w-[584px] lg:h-[579px] object-cover rounded-[24px]"
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Development Process Section ─── */
function DevelopmentProcessSection() {
  const steps = [
    {
      title: "Site Selection",
      desc: "Land is selected and prepared for solar panel or wind turbine installation, including clearing and geotechnical assessments.",
      iconPath: svgPaths.p1869180,
      iconViewBox: "0 0 16 20",
      side: "left",
    },
    {
      title: "Equipment Installation",
      desc: "Solar panels / wind turbines, inverters, and other equipment are installed according to project specifications.",
      iconPath: svgPaths.p3ce88680,
      iconViewBox: "0 0 18.525 18.025",
      side: "right",
    },
    {
      title: "Grid Integration",
      desc: "The solar / wind power generation system is connected to the electricity grid, allowing for distribution to consumers.",
      iconPath: svgPaths.p12df5c00,
      iconViewBox: "0 0 16 20",
      side: "left",
    },
    {
      title: "Monitoring",
      desc: "Ongoing monitoring and maintenance ensure optimal performance and reliability of the solar / wind power infrastructure.",
      iconPath: svgPaths.p793b600,
      iconViewBox: "0 0 20 14.15",
      side: "right",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden" style={{ backgroundColor: "#212121" }}>
      {/* Blurred background image */}
      <div className="absolute inset-0 opacity-40 overflow-hidden">
        <img
          src={imgProcessBg}
          alt=""
          className="absolute w-[230%] h-[240%] object-cover pointer-events-none"
          style={{ top: "-27%", left: "-2%" }}
        />
      </div>
      <div className="absolute inset-0" style={{ backgroundColor: "#212121", opacity: 0.7 }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-[55px] px-6 md:px-10 lg:px-[80px] py-[80px]">
        {/* Section heading */}
        <div className="flex flex-col items-center gap-[16px] w-full max-w-[1280px]">
          <h2
            className="text-[#ffce1b] text-[24px] md:text-[30px] lg:text-[36px] text-center capitalize"
            style={{ fontFamily: sora, fontWeight: 700, lineHeight: "normal" }}
          >
            Development Process for Solar / Wind Energy Power Station
          </h2>
          <div className="bg-white h-[4px] w-[96px]" />
        </div>

        {/* Timeline */}
        <div className="w-full max-w-[925px]">
          {/* Desktop timeline (alternating) */}
          <div className="hidden lg:block relative" style={{ minHeight: 640 }}>
            {/* Center line */}
            <div
              className="absolute top-0 bottom-0"
              style={{
                left: "50%",
                transform: "translateX(-50%)",
                width: 3,
                backgroundColor: "rgba(255,206,27,0.15)",
              }}
            />

            {steps.map((step, i) => {
              const topPositions = [0, 179, 368, 552];
              const isLeft = step.side === "left";
              return (
                <div
                  key={i}
                  className="absolute flex items-center gap-[16px]"
                  style={{
                    top: topPositions[i],
                    left: 0,
                    right: 0,
                    flexDirection: isLeft ? "row" : "row-reverse",
                  }}
                >
                  {/* Text block */}
                  <div
                    className="flex flex-col gap-[8px]"
                    style={{ width: 424, textAlign: isLeft ? "right" : "left" }}
                  >
                    <h3
                      className="text-[#e9c349] text-[24px] capitalize"
                      style={{ fontFamily: sora, fontWeight: 600, lineHeight: "normal", textAlign: isLeft ? "right" : "left" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-[#c4c6cf] text-[16px] capitalize"
                      style={{ fontFamily: inter, fontWeight: 400, lineHeight: "26px", textAlign: isLeft ? "right" : "left" }}
                    >
                      {step.desc}
                    </p>
                  </div>

                  {/* Center gap */}
                  <div style={{ flex: "0 0 16px" }} />

                  {/* Icon */}
                  <div
                    className="flex items-center justify-center rounded-[12px] shrink-0 drop-shadow-[0px_0px_10px_rgba(233,195,73,0.5)]"
                    style={{
                      width: 48,
                      height: 48,
                      backgroundColor: "#375f9d",
                      border: "1px solid rgba(233,195,73,0.4)",
                    }}
                  >
                    <svg width="20" height="20" viewBox={step.iconViewBox} fill="none">
                      <path d={step.iconPath} fill="white" />
                    </svg>
                  </div>

                  {/* Remaining space */}
                  <div style={{ flex: 1 }} />
                </div>
              );
            })}
          </div>

          {/* Mobile timeline (stacked) */}
          <div className="lg:hidden flex flex-col gap-[40px]">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div
                  className="flex items-center justify-center rounded-[12px] shrink-0"
                  style={{
                    width: 48,
                    height: 48,
                    backgroundColor: "#375f9d",
                    border: "1px solid rgba(233,195,73,0.4)",
                  }}
                >
                  <svg width="20" height="20" viewBox={step.iconViewBox} fill="none">
                    <path d={step.iconPath} fill="white" />
                  </svg>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h3
                    className="text-[#e9c349] text-[20px] capitalize"
                    style={{ fontFamily: sora, fontWeight: 600, lineHeight: "normal" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[#c4c6cf] text-[15px] capitalize"
                    style={{ fontFamily: inter, fontWeight: 400, lineHeight: "26px" }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Key Infrastructure Components ─── */
function KeyComponentsSection() {
  const cards = [
    {
      iconPath: svgPaths.p6aaaf10,
      iconViewBox: "0 0 33 33",
      title: "Solar/Wind Parks",
      desc: "Large-scale land development optimized for maximum energy capture and environmental harmony.",
    },
    {
      iconPath: svgPaths.p238f1900,
      iconViewBox: "0 0 27 27",
      title: "Grid Infrastructure",
      desc: "High-voltage transmission lines and substation hubs designed for minimal loss across distances.",
    },
    {
      iconPath: svgPaths.p5c25b80,
      iconViewBox: "0 0 33 33",
      title: "Equipment",
      desc: "Procurement of Tier-1 hardware components tested for extreme weather durability.",
    },
    {
      iconPath: svgPaths.pbd21200,
      iconViewBox: "0 0 33 28.5",
      title: "Smart Grid Tech",
      desc: "AI-driven energy distribution systems that adapt to real-time consumption and supply changes.",
    },
  ];

  return (
    <section
      className="w-full"
      style={{ backgroundColor: "#212121", borderTop: "1px solid rgba(255,255,255,0.2)" }}
    >
      <div className="flex flex-col items-center gap-[55px] px-6 md:px-10 lg:px-[64px] py-[80px] lg:py-[128px]">
        {/* Heading */}
        <div className="flex flex-col items-center gap-[16px] w-full max-w-[1280px]">
          <h2
            className="text-[#ffce1b] text-[24px] md:text-[30px] lg:text-[36px] text-center capitalize"
            style={{ fontFamily: sora, fontWeight: 700, lineHeight: "normal" }}
          >
            Key Infrastructure Components
          </h2>
          <div className="bg-white h-[4px] w-[96px]" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] w-full max-w-[1280px]">
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative rounded-[10.386px] flex flex-col gap-[14px] p-[20px]"
              style={{
                background: "linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(153,153,153,0.1))",
                minHeight: 322,
              }}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center rounded-[8.655px] shrink-0"
                style={{ width: 45, height: 45, backgroundColor: "#375f9d" }}
              >
                <svg width="28" height="28" viewBox={card.iconViewBox} fill="none">
                  <path d={card.iconPath} fill="white" />
                </svg>
              </div>

              {/* Title */}
              <h3
                className="text-white text-[22px] md:text-[24px] pt-[16px]"
                style={{ fontFamily: hanken, fontWeight: 600, lineHeight: "32px" }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className="text-[#c4c6cf] text-[16px]"
                style={{ fontFamily: hanken, fontWeight: 400, lineHeight: "24px" }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── IoT Monitoring Section ─── */
function IoTMonitoringSection() {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: "#212121", borderTop: "1px solid rgba(255,255,255,0.2)" }}
    >
      <div className="flex flex-col items-center gap-[32px] px-6 md:px-10 py-[80px]">
        {/* Heading */}
        <div className="flex flex-col items-center gap-[16px] w-full max-w-[1280px]">
          <h2
            className="text-[#ffce1b] text-[24px] md:text-[30px] lg:text-[36px] text-center capitalize"
            style={{ fontFamily: sora, fontWeight: 700, lineHeight: "normal" }}
          >
            Integrated IoT Monitoring Systems
          </h2>
          <div className="bg-white h-[4px] w-[96px]" />
        </div>

        {/* Text card */}
        <div
          className="w-full max-w-[1028px] rounded-[10.386px] px-[20px] py-[25px]"
          style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(153,153,153,0.1))" }}
        >
          <p
            className="text-[#bacac4] text-[15px] md:text-[18px] text-center capitalize"
            style={{ fontFamily: inter, fontWeight: 400, lineHeight: "32px" }}
          >
            {`The Internet of Things (IoT) describes a network of physical devices ("things") connected to the internet, capable of collecting and exchanging data. These devices range from household objects to industrial tools and are equipped with sensors, software, and other technologies to enable communication and data sharing.`}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  const quickLinks = ["Home", "About Us", "Services", "Projects", "Careers", "Contact"];
  const services = ["Infrastructure Development", "Building Construction", "Solar Projects", "Land Surveying", "Electrical Infrastructure", "Maintenance Services"];

  return (
    <footer className="relative w-full">
      {/* Background image */}
      <img
        src={imgFooterBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.68 }}
      />
      {/* White overlay to make footer light */}
      <div className="absolute inset-0 bg-white/80" />

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="px-6 md:px-10 lg:px-[64px] pt-[80px] pb-[40px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {/* Column 1: Logo + About */}
            <div className="flex flex-col gap-[12px]">
              <div className="relative h-[49px] w-[73px]">
                <img src={websiteIcon} alt="Nanda Kailash" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <p
                className="text-black text-[16px] md:text-[18px] capitalize leading-[32px] max-w-[314px]"
                style={{ fontFamily: inter, fontWeight: 400 }}
              >
                {"Building India's infrastructure future through quality engineering, sustainable practices, and innovative solutions across construction, roads, solar, and more."}
              </p>
              {/* Social icons */}
              <div className="flex gap-[12px] mt-2">
                {/* X / Twitter */}
                <a
                  href="#"
                  className="flex items-center justify-center rounded-[8px]"
                  style={{ width: 36, height: 36, backgroundColor: "rgba(0,0,0,0.26)", border: "1px solid rgba(0,0,0,0.3)" }}
                >
                  <svg width="14" height="13.26" viewBox="0 0 14.6667 13.2573" fill="none">
                    <path d={svgPaths.p2746f000} fill="black" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="#"
                  className="flex items-center justify-center rounded-[8px]"
                  style={{ width: 36, height: 36, backgroundColor: "rgba(0,0,0,0.26)", border: "1px solid rgba(0,0,0,0.3)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d={svgPaths.p36786300} stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                {/* Twitter bird */}
                <a
                  href="#"
                  className="flex items-center justify-center rounded-[8px]"
                  style={{ width: 36, height: 36, backgroundColor: "rgba(0,0,0,0.26)", border: "1px solid rgba(0,0,0,0.3)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d={svgPaths.p391f9d80} stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="#"
                  className="flex items-center justify-center rounded-[8px]"
                  style={{ width: 36, height: 36, backgroundColor: "rgba(0,0,0,0.26)", border: "1px solid rgba(0,0,0,0.3)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d={svgPaths.p22916300} stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p2c68500} stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.6667 4.33333H11.6733" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col gap-[20px]">
              <div className="pb-[13px]" style={{ borderBottom: "1px solid rgba(0,0,0,0.36)" }}>
                <h4
                  className="text-black text-[18px]"
                  style={{ fontFamily: sora, fontWeight: 700, lineHeight: "22.5px" }}
                >
                  Quick Links
                </h4>
              </div>
              <div className="flex flex-col gap-[12px]">
                {quickLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-black text-[16px] capitalize"
                    style={{ fontFamily: inter, fontWeight: 400, lineHeight: "26px" }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3: Services */}
            <div className="flex flex-col gap-[20px]">
              <div className="pb-[13px]" style={{ borderBottom: "1px solid rgba(0,0,0,0.26)" }}>
                <h4
                  className="text-black text-[18px]"
                  style={{ fontFamily: sora, fontWeight: 700, lineHeight: "22.5px" }}
                >
                  Services
                </h4>
              </div>
              <div className="flex flex-col gap-[12px]">
                {services.map((service) => (
                  <a
                    key={service}
                    href="#"
                    className="text-black text-[16px] capitalize"
                    style={{ fontFamily: inter, fontWeight: 400, lineHeight: "26px" }}
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 4: Contact */}
            <div className="flex flex-col gap-[20px]">
              <div className="pb-[13px]" style={{ borderBottom: "1px solid rgba(0,0,0,0.26)" }}>
                <h4
                  className="text-black text-[18px]"
                  style={{ fontFamily: sora, fontWeight: 700, lineHeight: "22.5px" }}
                >
                  Contact
                </h4>
              </div>
              <div className="flex flex-col gap-[20px]">
                {/* Email */}
                <div className="flex items-start gap-[12px]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-1 shrink-0">
                    <path d={svgPaths.p17070980} stroke="#355D9B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p120c8200} stroke="#355D9B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <p className="text-black text-[16px]" style={{ fontFamily: inter, fontWeight: 500, lineHeight: "21px" }}>EMAIL</p>
                    <p className="text-black text-[14px]" style={{ fontFamily: inter, fontWeight: 400, lineHeight: "21px" }}>info@nkid.in</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-[12px]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-1 shrink-0">
                    <path d={svgPaths.p2a44c680} stroke="#355D9B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <p className="text-black text-[16px]" style={{ fontFamily: inter, fontWeight: 500, lineHeight: "21px" }}>PHONE</p>
                    <p className="text-black text-[14px]" style={{ fontFamily: inter, fontWeight: 400, lineHeight: "21px" }}>+91 98765 43210</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-[12px]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-1 shrink-0">
                    <path d={svgPaths.p1f466f80} stroke="#355D9B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p17781bc0} stroke="#355D9B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <p className="text-black text-[16px]" style={{ fontFamily: inter, fontWeight: 500, lineHeight: "21px" }}>ADDRESS</p>
                    <p className="text-black text-[14px]" style={{ fontFamily: inter, fontWeight: 400, lineHeight: "21px" }}>New Delhi, India</p>
                    <p className="text-black text-[14px]" style={{ fontFamily: inter, fontWeight: 400, lineHeight: "21px" }}>Pan-India Operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.56)" }}>
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-2 px-6 md:px-10 lg:px-[64px] py-[24px]"
            style={{ backgroundColor: "#0b1f3a" }}
          >
            <p
              className="text-white text-[13px] text-center sm:text-left"
              style={{ fontFamily: inter, fontWeight: 400, lineHeight: "19.5px" }}
            >
              © 2026 Nanda Kailash Infrastructure &amp; Developers. All rights reserved.
            </p>
            <p
              className="text-white text-[13px] text-center sm:text-right"
              style={{ fontFamily: inter, fontWeight: 400, lineHeight: "19.5px" }}
            >
              Infrastructure Company in India | Construction | Solar | Engineering
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── App ─── */
export default function SolarWindPage({ onNavigateAbout, onNavigateHome, onNavigateProjects, onNavigateSustainability, onNavigateCareers, onNavigateContact }: SolarWindPageProps) {
  return (
    <div className="w-full min-h-screen bg-white" data-name="SOLAR WIND">
      <Navbar onNavigateAbout={onNavigateAbout} onNavigateHome={onNavigateHome} onNavigateProjects={onNavigateProjects} onNavigateSustainability={onNavigateSustainability} onNavigateCareers={onNavigateCareers} onNavigateContact={onNavigateContact} />
      <main>
        <HeroSection />
        <AboutSection />
        <DevelopmentProcessSection />
        <KeyComponentsSection />
        <IoTMonitoringSection />
      </main>
      <Footer />
    </div>
  );
}
