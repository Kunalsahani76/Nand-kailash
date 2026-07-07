import svgPaths from "./svg-cswna7aisz";
import imgFrame261 from "./cfccedd9423ec9e451d9eeb42de18f7604a2fd14.png";
import imgFooter from "./ff5318d16dd5f93f2647437a73bc8688b87582ae.png";
import imgFrame127 from "./c20da46eb86065efabefe8dda3d480f08dfffacc.png";
import websiteIcon from "@/images/website icon.png";

type BuldingManagmentProps = {
  onNavigateAbout?: () => void;
  onNavigateHome?: () => void;
  onNavigateLandSurveying?: () => void;
  onNavigateSolarWind?: () => void;
  onNavigateBuildingConstruction?: () => void;
  onNavigateElectricWork?: () => void;
  onNavigateBuildingManagement?: () => void;
  onNavigateProjects?: () => void;
  onNavigateSustainability?: () => void;
  onNavigateCareers?: () => void;
  onNavigateContact?: () => void;
};

type ServiceDropdownItem = {
  label: string;
  onClick?: "landSurveying" | "solarWind" | "buildingConstruction" | "electricWork" | "buildingManagement";
};

const serviceDropdownItems: ServiceDropdownItem[] = [
  { label: "Land Surveying", onClick: "landSurveying" },
  { label: "Solar Wind", onClick: "solarWind" },
  { label: "Building Construction", onClick: "buildingConstruction" },
  { label: "Electric Related Work", onClick: "electricWork" },
  { label: "Building Management", onClick: "buildingManagement" },
];

function Overlay() {
  return (
    <div className="bg-[rgba(55,95,157,0.6)] content-stretch flex items-start px-[12px] py-[4px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Industrial Excellence</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Overlay />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[202px]" data-name="Margin">
      <Container />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Margin />
      <div className="[word-break:break-word] capitalize font-['Sora:ExtraBold',sans-serif] font-extrabold leading-[0] min-w-full relative shrink-0 text-[64px] text-white tracking-[-1.28px] w-[min-content]">
        <p className="leading-[1.1] mb-0">{`Building Maintenance &`}</p>
        <p className="leading-[1.1] mb-0">Facility Management</p>
        <p className="leading-[1.1]">Services</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
      <Frame14 />
      <div className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.75)] w-[762px]">
        <p className="leading-[32px] mb-0">Ensuring Long-Term Performance, Safety, and Operational Excellence</p>
        <p className="leading-[32px]">for high-value infrastructure assets.</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M3.75 9H14.25" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9 3.75L14.25 9L9 14.25" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[25px] items-center relative shrink-0">
      <div className="bg-[#355d9b] content-stretch flex gap-[8px] items-center justify-center px-[32px] py-[15px] relative rounded-[4px] shrink-0 w-[208px]" data-name="Button">
        <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">{`Explore Projects `}</p>
        <Icon />
      </div>
      <div className="content-stretch flex h-[53px] items-center justify-center px-[33px] py-[17px] relative rounded-[4px] shrink-0 w-[197px]" data-name="Button">
        <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.5px] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">Contact Our Team</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-[914px]">
      <Frame15 />
      <Frame13 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[40px] top-[calc(50%-67.5px)] w-[1114px]">
      <Frame16 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[749px] overflow-clip relative shrink-0 w-[1440px]">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[128.17%] left-[0.02%] max-w-none top-[-3.71%] w-full" src={imgFrame261} />
        </div>
        <div className="absolute bg-gradient-to-l from-[rgba(102,102,102,0)] inset-0 to-[#0b1c30]" />
      </div>
      <Frame17 />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(55,95,157,0.6)] content-stretch flex items-start px-[12px] py-[8px] relative rounded-[2px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.96px] whitespace-nowrap">
        <p className="leading-[normal]">engineered excellence</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#111827] text-[48px] w-full">
        <p className="leading-[60px]">Integrated Maintenance Solutions</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[18px] w-full">
        <p className="leading-[32px] mb-0">AssetGuard provides enterprise-grade preventive and corrective</p>
        <p className="leading-[32px]">maintenance solutions. We manage the full lifecycle of residential, commercial, industrial, and public infrastructure assets, ensuring every bolt and circuit operates at peak performance.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[628px]" data-name="Container">
      <Overlay1 />
      <Heading />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#375f9d] text-[56px] text-center tracking-[-1.12px] w-full">
          <p className="leading-[64px]">24/7</p>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0b1c30] text-[16px] text-center w-full">
          <p className="leading-[24px]">Emergency Support</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#ffce1b] content-stretch flex flex-col gap-[14px] h-[162px] items-center justify-center pl-[20px] pr-[10px] py-[20px] relative rounded-[10.386px] shrink-0 w-[628px]" data-name="Background+Border">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#fdc425] text-[56px] text-center tracking-[-1.12px] w-full">
          <p className="leading-[64px]">99%</p>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f8f9ff] text-[16px] text-center w-full">
          <p className="leading-[24px]">Uptime Guaranteed</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#375f9d] content-stretch flex flex-col gap-[14px] h-[162px] items-start justify-center pl-[20px] pr-[10px] py-[20px] relative rounded-[10.386px] shrink-0 w-[628px]" data-name="Background+Border">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-[628px]" data-name="Container">
      <BackgroundBorder />
      <BackgroundBorder1 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#f8f9ff] content-stretch flex gap-[24px] items-center justify-center py-[96px] relative shrink-0 w-full">
      <Container1 />
      <Container3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffce1b] text-[36px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Our Core Competencies</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[65px] items-center relative shrink-0" data-name="Container">
      <Heading1 />
      <div className="bg-white h-[4px] relative shrink-0 w-[96px]" data-name="Background" />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[18px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
        <g id="Container">
          <path d={svgPaths.p2df73300} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#375f9d] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container9 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pt-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-[152px]">
          <p className="leading-[24px]">Civil Maintenance</p>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] capitalize font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.55)] w-[191px]">Structural masonry, tiling, and general repairs.</p>
      </div>
    </div>
  );
}

function Service() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] gap-[14px] h-[246px] items-center px-[10px] py-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[211.2px]" data-name="Service 1">
      <Background />
      <Heading2 />
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[16px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
        <g id="Container">
          <path d={svgPaths.p10002b00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#375f9d] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pt-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-[153px]">
          <p className="leading-[24px] mb-0">Electrical</p>
          <p className="leading-[24px]">Maintenance</p>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] capitalize font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.55)] w-full">
          <p className="leading-[22px] mb-0">Wiring, switchgear, and</p>
          <p className="leading-[22px]">power distribution systems.</p>
        </div>
      </div>
    </div>
  );
}

function Service1() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] gap-[14px] h-[246px] items-center px-[10px] py-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[211.2px]" data-name="Service 2">
      <Background1 />
      <Heading3 />
      <Container12 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[19.55px] relative shrink-0 w-[16.3px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3 19.55">
        <g id="Container">
          <path d={svgPaths.p20682f80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#375f9d] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container13 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pt-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-[153px]">
          <p className="leading-[24px] mb-0">Plumbing</p>
          <p className="leading-[24px]">Maintenance</p>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] capitalize font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.55)] w-full">
          <p className="leading-[22px] mb-0">Pipework, drainage, and</p>
          <p className="leading-[22px]">water supply management.</p>
        </div>
      </div>
    </div>
  );
}

function Service2() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] gap-[14px] h-[246px] items-center px-[10px] py-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[211.2px]" data-name="Service 3">
      <Background2 />
      <Heading4 />
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p35e6fc60} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#375f9d] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container15 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pt-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-[152px]">
          <p className="leading-[24px]">HVAC Maintenance</p>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] capitalize font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.55)] w-full">Central cooling and ventilation system optimization.</p>
      </div>
    </div>
  );
}

function Service3() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] gap-[14px] h-[246px] items-center px-[10px] py-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[211.2px]" data-name="Service 4">
      <Background3 />
      <Heading5 />
      <Container16 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[19px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 19">
        <g id="Container">
          <path d={svgPaths.p285e6f00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#375f9d] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container17 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pt-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-[152px]">
          <p className="leading-[24px] mb-0">{`Painting &`}</p>
          <p className="leading-[24px]">Waterproofing</p>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] capitalize font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.55)] w-full">Exterior protective coatings and leak prevention.</p>
      </div>
    </div>
  );
}

function Service4() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] gap-[14px] h-[246px] items-center px-[10px] py-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[211.2px]" data-name="Service 5">
      <Background4 />
      <Heading6 />
      <Container18 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full">
      <Service />
      <Service1 />
      <Service2 />
      <Service3 />
      <Service4 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[18.025px] relative shrink-0 w-[18.525px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.525 18.025">
        <g id="Container">
          <path d={svgPaths.p3ce88680} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#375f9d] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container19 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pt-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-[152px]">
          <p className="leading-[24px]">Structural Repairs</p>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] capitalize font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.55)] w-full">Reinforcement and stability restoration projects.</p>
      </div>
    </div>
  );
}

function Service5() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] gap-[14px] h-[246px] items-center px-[10px] py-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[211.2px]" data-name="Service 6">
      <Background5 />
      <Heading7 />
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p28fdd300} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#375f9d] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container21 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pt-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-[153px]">
          <p className="leading-[24px] mb-0">Facility</p>
          <p className="leading-[24px]">Management</p>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] capitalize font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.55)] w-full">
          <p className="leading-[22px] mb-0">End-to-end building</p>
          <p className="leading-[22px]">operations and logistics.</p>
        </div>
      </div>
    </div>
  );
}

function Service6() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] gap-[14px] h-[246px] items-center px-[10px] py-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[211.2px]" data-name="Service 7">
      <Background6 />
      <Heading8 />
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[22px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
        <g id="Container">
          <path d={svgPaths.p14f6a6c0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#375f9d] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container23 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pt-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-[153px]">
          <p className="leading-[24px] mb-0">Housekeeping</p>
          <p className="leading-[24px]">Management</p>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] capitalize font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.55)] w-full">
          <p className="leading-[22px] mb-0">High-standard hygiene</p>
          <p className="leading-[22px]">and sanitation services.</p>
        </div>
      </div>
    </div>
  );
}

function Service7() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] gap-[14px] h-[246px] items-center px-[10px] py-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[211.2px]" data-name="Service 8">
      <Background7 />
      <Heading9 />
      <Container24 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p2450e80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#375f9d] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container25 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pt-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-[152px]">
          <p className="leading-[24px] mb-0">Landscape</p>
          <p className="leading-[24px]">Maintenance</p>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] capitalize font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.55)] w-full">Professional green space upkeep and irrigation.</p>
      </div>
    </div>
  );
}

function Service8() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] gap-[14px] h-[246px] items-center px-[10px] py-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[211.2px]" data-name="Service 9">
      <Background8 />
      <Heading10 />
      <Container26 />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 size-[20.05px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.05 20.05">
        <g id="Container">
          <path d={svgPaths.p4768a80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#375f9d] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container27 />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pt-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-[152px]">
          <p className="leading-[24px]">Emergency Repair</p>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] capitalize font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.55)] w-full">Rapid response for critical system failures.</p>
      </div>
    </div>
  );
}

function Service9() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] gap-[14px] h-[246px] items-center px-[10px] py-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[211.2px]" data-name="Service 10">
      <Background9 />
      <Heading11 />
      <Container28 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full">
      <Service5 />
      <Service6 />
      <Service7 />
      <Service8 />
      <Service9 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full">
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#212121] content-stretch flex flex-col gap-[64px] items-center justify-center py-[64px] relative shrink-0 w-full">
      <Container8 />
      <Frame21 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffce1b] text-[36px] text-center w-full">
        <p className="leading-[normal]">Optimized Maintenance Frameworks</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[65px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading12 />
      <div className="bg-white h-[4px] relative shrink-0 w-[96px]" data-name="Background" />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Container29 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffce1b] text-[20px] w-full">
        <p className="leading-[24px]">Annual Maintenance (AMC)</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Heading13 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.7px] uppercase w-full">
        <p className="leading-[20px]">PREVENTIVE FOCUS</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Container30 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cacaca] text-[20px] w-full">
        <p className="leading-[27px]">Scheduled periodic inspections and maintenance to prevent failure and extend equipment life.</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <Container31 />
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <div className="relative shrink-0 size-[13.333px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
          <path d={svgPaths.p363cf400} fill="var(--fill-0, white)" id="Icon" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cacaca] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Quarterly inspections</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <div className="relative shrink-0 size-[13.333px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
          <path d={svgPaths.p363cf400} fill="var(--fill-0, white)" id="Icon" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cacaca] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Labor costs included</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <div className="relative shrink-0 size-[13.333px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
          <path d={svgPaths.p363cf400} fill="var(--fill-0, white)" id="Icon" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cacaca] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Priority service calls</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function ListMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="List:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <List />
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffce1b] text-[20px] w-full">
        <p className="leading-[24px]">Comprehensive (CMC)</p>
      </div>
    </div>
  );
}

function Heading3Margin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Heading14 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.7px] uppercase w-full">
        <p className="leading-[20px]">FULL COVERAGE</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Container32 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cacaca] text-[20px] w-full">
        <p className="leading-[27px] mb-0">All-inclusive package covering</p>
        <p className="leading-[27px]">preventive maintenance, spare parts, and unforeseen breakdowns.</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <Container33 />
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <div className="relative shrink-0 size-[13.333px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
          <path d={svgPaths.p363cf400} fill="var(--fill-0, white)" id="Icon" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cacaca] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Parts replacement included</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <div className="relative shrink-0 size-[13.333px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
          <path d={svgPaths.p363cf400} fill="var(--fill-0, white)" id="Icon" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cacaca] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">24/7 technical assistance</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <div className="relative shrink-0 size-[13.333px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
          <path d={svgPaths.p363cf400} fill="var(--fill-0, white)" id="Icon" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cacaca] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Monthly health reports</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item3 />
      <Item4 />
      <Item5 />
    </div>
  );
}

function ListMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="List:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <List1 />
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffce1b] text-[20px] w-full">
        <p className="leading-[24px]">On-Demand Services</p>
      </div>
    </div>
  );
}

function Heading3Margin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Heading15 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.7px] uppercase w-full">
        <p className="leading-[20px]">AGILE SUPPORT</p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Container34 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cacaca] text-[20px] w-full">
        <p className="leading-[27px] mb-0">Pay-per-visit model for specific tasks, emergency repairs, or one-off structural audits.</p>
        <p className="leading-[27px]">​</p>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <Container35 />
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <div className="relative shrink-0 size-[13.333px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
          <path d={svgPaths.p363cf400} fill="var(--fill-0, white)" id="Icon" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cacaca] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">No long-term commitment</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <div className="relative shrink-0 size-[13.333px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
          <path d={svgPaths.p363cf400} fill="var(--fill-0, white)" id="Icon" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cacaca] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Transparent unit pricing</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <div className="relative shrink-0 size-[13.333px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
          <path d={svgPaths.p363cf400} fill="var(--fill-0, white)" id="Icon" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cacaca] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Guaranteed technician arrival</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item6 />
      <Item7 />
      <Item8 />
    </div>
  );
}

function ListMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="List:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <List2 />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0 w-full">
      <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] gap-[14px] items-center px-[17px] py-[21px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[362.667px]" data-name="AMC">
        <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[10.386px]" />
        <Heading3Margin />
        <Margin1 />
        <Margin2 />
        <ListMargin />
        <div className="relative shrink-0 w-[334.667px]" data-name="Button">
          <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none" />
          <div className="bg-clip-padding border-2 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center py-[12px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
              <p className="leading-[24px]">Learn More</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] gap-[14px] items-center px-[17px] py-[21px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[362.667px]" data-name="AMC">
        <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[10.386px]" />
        <Heading3Margin1 />
        <Margin3 />
        <Margin4 />
        <ListMargin1 />
        <div className="relative shrink-0 w-[334.667px]" data-name="Button">
          <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none" />
          <div className="bg-clip-padding border-2 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center py-[12px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
              <p className="leading-[24px]">Learn More</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] gap-[14px] items-center px-[17px] py-[21px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[362.667px]" data-name="AMC">
        <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[10.386px]" />
        <Heading3Margin2 />
        <Margin5 />
        <Margin6 />
        <ListMargin2 />
        <div className="relative shrink-0 w-[334.667px]" data-name="Button">
          <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none" />
          <div className="bg-clip-padding border-2 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center py-[12px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
              <p className="leading-[24px]">Learn More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#212121] content-stretch flex flex-col gap-[64px] items-center justify-center py-[64px] relative shrink-0 w-[1440px]">
      <Frame24 />
      <Frame23 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffce1b] text-[36px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Engineered Advantages</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[65px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading16 />
      <div className="bg-white h-[4px] relative shrink-0 w-[96px]" data-name="Background" />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[638px]">
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fdc425] text-[16px] w-full">
        <p className="leading-[24px]">01</p>
      </div>
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px]">Reduced Downtime</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[448px] pt-[8px] relative shrink-0 w-[448px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[16px] whitespace-nowrap">
        <p className="leading-[24px] mb-0">Our proactive monitoring and preventive maintenance</p>
        <p className="leading-[24px]">protocols minimize operational interruptions by up to 45%.</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Heading17 />
      <Container39 />
    </div>
  );
}

function Benefit() {
  return (
    <div className="bg-[#375f9d] content-stretch flex flex-col h-[288px] items-center justify-center overflow-clip p-[40px] relative rounded-[12px] shrink-0 w-[760px]" data-name="Benefit 1">
      <Container37 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="relative shrink-0 w-[287px]">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start leading-[0] relative size-full text-[16px]">
        <div className="flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-normal justify-center relative shrink-0 text-[#fdc425] w-full">
          <p className="leading-[24px]">02</p>
        </div>
        <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center not-italic relative shrink-0 text-black w-full">
          <p className="leading-[24px]">Extended Asset Life</p>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center not-italic relative shrink-0 text-[#505050] w-full">
          <p className="leading-[24px]">Systematic care ensures your physical assets reach or exceed their designed lifecycle expectations.</p>
        </div>
      </div>
    </div>
  );
}

function Benefit1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[288px] items-center justify-center p-[41px] relative rounded-[12px] shrink-0 w-[368px]" data-name="Benefit 2">
      <div aria-hidden className="absolute border border-[#c6c6cd] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame28 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full">
      <Benefit />
      <Benefit1 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[0] relative shrink-0 text-[16px] w-[301px]">
      <div className="flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-normal justify-center relative shrink-0 text-black w-full">
        <p className="leading-[24px]">03</p>
      </div>
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center not-italic relative shrink-0 text-black w-full">
        <p className="leading-[24px]">Cost Optimization</p>
      </div>
      <div className="capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center not-italic relative shrink-0 text-[#3d3d3d] w-full">
        <p className="leading-[24px]">Shift from reactive spending to predictable operational budgets through smart facility management.</p>
      </div>
    </div>
  );
}

function Benefit2() {
  return (
    <div className="bg-[#ffce1b] content-stretch flex flex-col h-[288px] items-center justify-center p-[40px] relative rounded-[12px] shrink-0 w-[368px]" data-name="Benefit 3">
      <Frame32 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="relative shrink-0 w-[301px]">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start leading-[0] relative size-full text-[16px]">
        <div className="flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-normal justify-center relative shrink-0 text-[#fdc425] w-full">
          <p className="leading-[24px]">04</p>
        </div>
        <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center not-italic relative shrink-0 text-black w-full">
          <p className="leading-[24px]">Regulatory Compliance</p>
        </div>
        <div className="capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center not-italic relative shrink-0 text-[#505050] w-full">
          <p className="leading-[24px] mb-0">We ensure your facility meets all local</p>
          <p className="leading-[24px]">safety, environmental, and building code standards.</p>
        </div>
      </div>
    </div>
  );
}

function Benefit3() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[288px] items-center justify-center p-[41px] relative rounded-[12px] shrink-0 w-[368px]" data-name="Benefit 4">
      <div aria-hidden className="absolute border border-[#c6c6cd] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame33 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[0] relative shrink-0 text-[16px] w-[301px]">
      <div className="flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-normal justify-center relative shrink-0 text-[#fdc425] w-full">
        <p className="leading-[24px]">05</p>
      </div>
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center not-italic relative shrink-0 text-white w-full">
        <p className="leading-[24px]">Improved Safety</p>
      </div>
      <div className="capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center not-italic relative shrink-0 text-[#e3e3e3] w-full">
        <p className="leading-[24px] mb-0">Strict adherence to safety protocols</p>
        <p className="leading-[24px]">reduces workplace hazards and liability risks.</p>
      </div>
    </div>
  );
}

function Benefit4() {
  return (
    <div className="bg-black content-stretch flex flex-col h-[288px] items-center justify-center p-[40px] relative rounded-[12px] shrink-0 w-[368px]" data-name="Benefit 5">
      <Frame34 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full">
      <Benefit2 />
      <Benefit3 />
      <Benefit4 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full">
      <Frame27 />
      <Frame31 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[#212121] content-stretch flex flex-col gap-[64px] items-center justify-center py-[64px] relative shrink-0 w-full">
      <Frame26 />
      <Frame29 />
    </div>
  );
}

function Heading18() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Poppins:ExtraBold',sans-serif] leading-[60.445px] not-italic relative shrink-0 text-[48px] text-white uppercase whitespace-nowrap">Ready for Structural Precision?</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[672px] relative shrink-0 w-[672px]" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e1e1e1] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[34px] mb-0">Contact our engineering team today to perform a comprehensive audit of your</p>
        <p className="leading-[34px]">facility and infrastructure.</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M3.75 9H14.25" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9 3.75L14.25 9L9 14.25" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <div className="bg-[#355d9b] content-stretch flex gap-[8px] items-center justify-center px-[32px] py-[15px] relative rounded-[4px] shrink-0 w-[349px]" data-name="Button">
        <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Consult Our Engineers</p>
        <Icon1 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Heading18 />
      <Container41 />
      <Container42 />
    </div>
  );
}

function SectionFinalCta() {
  return (
    <div className="bg-[#0b1c30] relative shrink-0 w-full" data-name="Section - Final CTA">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[64px] py-[128px] relative size-full">
          <div className="absolute flex inset-[0_-21.02%_0_78.98%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="flex-none h-[hypot(-20.7012cqw,100cqh)] skew-x-[-13.93deg] w-[79.2988cqw]">
              <div className="bg-[#ffce1b] relative size-full" data-name="Overlay+VerticalBorder">
                <div aria-hidden className="absolute border-[#fdc425] border-l border-solid inset-0 pointer-events-none" />
              </div>
            </div>
          </div>
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute h-[49px] left-0 top-px w-[73px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={websiteIcon} />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[62px] relative shrink-0 w-[224px]" data-name="Container">
      <Frame8 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[224px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[23px] left-0 not-italic text-[16px] text-black top-[-0.5px] w-[223px]">{`Building India's infrastructure future through quality engineering, sustainable practices, and innovative solutions across construction, roads, solar, and more.`}</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p36786300} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p391f9d80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_823)" id="Icon">
          <path d={svgPaths.p22916300} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2c68500} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11.6667 4.33333H11.6733" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_823">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-start relative shrink-0" data-name="Container">
      <div className="bg-[rgba(0,0,0,0.26)] relative rounded-[8px] shrink-0 size-[36px]" data-name="Link">
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] py-px relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="Social Icons">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[7.93%_4.17%_9.21%_4.17%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 13.2573">
                  <path d={svgPaths.p2746f000} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0.26)] relative rounded-[8px] shrink-0 size-[36px]" data-name="Link">
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] py-px relative size-full">
          <Icon2 />
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0.26)] relative rounded-[8px] shrink-0 size-[36px]" data-name="Link">
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] py-px relative size-full">
          <Icon3 />
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0.26)] relative rounded-[8px] shrink-0 size-[36px]" data-name="Link">
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] py-px relative size-full">
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex flex-col gap-[12px] h-full items-start relative shrink-0">
        <Container44 />
        <Paragraph />
        <Container45 />
      </div>
    </div>
  );
}

function Heading19() {
  return (
    <div className="content-stretch flex h-[35.5px] items-start pb-[13px] relative shrink-0 w-full" data-name="Heading 4">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.36)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] font-bold leading-[22.5px] min-w-px relative text-[18px] text-black">Quick Links</p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-center left-0 top-0 w-[203px]" data-name="Link">
      <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Home</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[21px] relative shrink-0 w-[203px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-center left-0 top-0 w-[203px]" data-name="Link">
      <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">About Us</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[21px] relative shrink-0 w-[203px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link1 />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-center left-0 top-0 w-[203px]" data-name="Link">
      <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Services</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[203px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link2 />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-center left-0 top-0 w-[203px]" data-name="Link">
      <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Projects</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[21px] relative shrink-0 w-[203px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link3 />
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-center left-0 top-0 w-[203px]" data-name="Link">
      <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Careers</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[21px] relative shrink-0 w-[203px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link4 />
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-center left-0 top-0 w-[203px]" data-name="Link">
      <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">{`Contact `}</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[203px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link5 />
      </div>
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[219px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[289.125px] items-start relative shrink-0 w-[203px]" data-name="Container">
      <Heading19 />
      <List3 />
    </div>
  );
}

function Heading20() {
  return (
    <div className="content-stretch flex h-[35.5px] items-start pb-[13px] relative shrink-0 w-full" data-name="Heading 4">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.26)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] font-bold leading-[22.5px] min-w-px relative text-[18px] text-black">Services</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-center left-0 top-0 w-[203px]" data-name="Link">
      <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Infrastructure Development</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[21px] relative shrink-0 w-[203px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link6 />
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-center left-0 top-0 w-[203px]" data-name="Link">
      <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Building Construction</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[21px] relative shrink-0 w-[203px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link7 />
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-center left-0 top-0 w-[203px]" data-name="Link">
      <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Solar Projects</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[21px] relative shrink-0 w-[203px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link8 />
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-center left-0 top-0 w-[203px]" data-name="Link">
      <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Land Surveying</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[21px] relative shrink-0 w-[203px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link9 />
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-center left-0 top-0 w-[203px]" data-name="Link">
      <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Electrical Infrastructure</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[21px] relative shrink-0 w-[203px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link10 />
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-center left-0 top-0 w-[203px]" data-name="Link">
      <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Maintenance Services</p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[203px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link11 />
      </div>
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[186px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
      <ListItem9 />
      <ListItem10 />
      <ListItem11 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[289.125px] items-start relative shrink-0 w-[203px]" data-name="Container">
      <Heading20 />
      <List4 />
    </div>
  );
}

function Heading21() {
  return (
    <div className="content-stretch flex h-[35.5px] items-start pb-[13px] relative shrink-0 w-full" data-name="Heading 4">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.26)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] font-bold leading-[22.5px] min-w-px relative text-[18px] text-black">Contact</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17070980} id="Vector" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p120c8200} id="Vector_2" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="[word-break:break-word] absolute h-[44px] leading-[21px] left-[28px] not-italic text-black top-0 w-[81.969px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium left-0 text-[16px] top-0">EMAIL</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-0 text-[14px] top-[22px]">info@nkid.in</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[44px] relative shrink-0 w-[203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon5 />
        <Container51 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_849)" id="Icon">
          <path d={svgPaths.p2a44c680} id="Vector" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_849">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container53() {
  return (
    <div className="[word-break:break-word] absolute h-[44px] leading-[21px] left-[28px] not-italic text-black top-0 w-[114.313px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium left-0 text-[16px] top-0">PHONE</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-0 text-[14px] top-[22px]">+91 98765 43210</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[44px] relative shrink-0 w-[203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon6 />
        <Container53 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1f466f80} id="Vector" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container55() {
  return (
    <div className="[word-break:break-word] absolute h-[68px] left-[28px] not-italic text-black top-0 w-[139.906px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 text-[16px] top-0 whitespace-nowrap">ADDRESS</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 text-[14px] top-[22px] w-[140px]">
        <p className="leading-[21px] mb-0">New Delhi, India</p>
        <p className="leading-[21px]">Pan-India Operations</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon7 />
        <Container55 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[196px] items-start relative shrink-0 w-full" data-name="Container">
      <Container50 />
      <Container52 />
      <Container54 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[289.125px] items-start relative shrink-0 w-[203px]" data-name="Container">
      <Heading21 />
      <Container49 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame9 />
      <Container46 />
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[417.125px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[80px] px-[64px] relative size-full">
        <Frame11 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[434.531px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-white top-0 whitespace-nowrap">{`© 2026 Nanda Kailash Infrastructure & Developers. All rights reserved.`}</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[412.375px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-white top-0 whitespace-nowrap">Infrastructure Company in India | Construction | Solar | Engineering</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[#0b1f3a] h-[67.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[64px] py-[24px] relative size-full">
          <Paragraph1 />
          <Paragraph2 />
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col h-[68.5px] items-start pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.56)] border-solid border-t inset-0 pointer-events-none" />
      <Container57 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute content-stretch flex flex-col h-[485.625px] items-start left-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[-0.5px] w-[1440px]" data-name="Footer">
      <img alt="" className="absolute inset-0 max-w-none object-cover opacity-68 pointer-events-none size-full" src={imgFooter} />
      <Container43 />
      <Container56 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[49px] relative shrink-0 w-[73px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={websiteIcon} />
    </div>
  );
}

function Frame() {
  return <div className="bg-[#404040] h-[3px] relative shrink-0 w-0" />;
}

function Frame1() {
  return <div className="bg-[#404040] h-[3px] relative shrink-0 w-0" />;
}

function Frame2() {
  return <div className="bg-[#404040] h-[3px] relative shrink-0 w-0" />;
}

function Frame3() {
  return <div className="bg-[#404040] h-[3px] relative shrink-0 w-0" />;
}

function Frame4() {
  return <div className="bg-[#404040] h-[3px] relative shrink-0 w-0" />;
}

function Frame5() {
  return <div className="bg-[#404040] h-[3px] relative shrink-0 w-0" />;
}

function Frame6() {
  return <div className="bg-[#404040] h-[3px] relative shrink-0 w-0" />;
}

function Frame7({ onNavigateAbout, onNavigateHome, onNavigateLandSurveying, onNavigateSolarWind, onNavigateBuildingConstruction, onNavigateElectricWork, onNavigateBuildingManagement, onNavigateProjects, onNavigateSustainability, onNavigateCareers, onNavigateContact }: BuldingManagmentProps) {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <button className="bg-transparent border-0 content-stretch cursor-pointer flex flex-col items-start justify-center p-[10px] relative shrink-0" onClick={onNavigateHome} type="button">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#404040] text-[16px] whitespace-nowrap">Home</p>
        <Frame />
      </button>
      <button className="bg-transparent border-0 content-stretch cursor-pointer flex flex-col items-start justify-center p-[10px] relative shrink-0" onClick={onNavigateAbout} type="button">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#404040] text-[16px] whitespace-nowrap">About Us</p>
        <Frame1 />
      </button>
      <div className="content-stretch flex flex-col group items-start justify-center p-[10px] relative shrink-0">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#404040] text-[16px] whitespace-nowrap">Services</p>
        <Frame2 />
        <div className="absolute hidden group-hover:flex group-focus-within:flex flex-col left-1/2 top-[51px] -translate-x-1/2 w-[270px] z-[60]">
          {serviceDropdownItems.map((item) => (
            <button
              className="bg-white border border-[#404040] content-stretch cursor-pointer flex items-center justify-start h-[35px] px-[12px] text-left w-full"
              key={item.label}
              onClick={item.onClick === "landSurveying" ? onNavigateLandSurveying : item.onClick === "solarWind" ? onNavigateSolarWind : item.onClick === "buildingConstruction" ? onNavigateBuildingConstruction : item.onClick === "electricWork" ? onNavigateElectricWork : item.onClick === "buildingManagement" ? onNavigateBuildingManagement : undefined}
              type="button"
            >
              <span className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#404040] text-[16px] whitespace-nowrap">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
      <button className="bg-transparent border-0 content-stretch cursor-pointer flex flex-col items-start justify-center p-[10px] relative shrink-0" onClick={onNavigateProjects} type="button">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#404040] text-[16px] whitespace-nowrap">Projects</p>
        <Frame3 />
      </button>
      <button className="bg-transparent border-0 content-stretch cursor-pointer flex flex-col items-start justify-center p-[10px] relative shrink-0" onClick={onNavigateSustainability} type="button">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#404040] text-[16px] whitespace-nowrap">Sustainability</p>
        <Frame4 />
      </button>
      <button className="bg-transparent border-0 content-stretch cursor-pointer flex flex-col items-start justify-center p-[10px] relative shrink-0" onClick={onNavigateCareers} type="button">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#404040] text-[16px] whitespace-nowrap">Careers</p>
        <Frame5 />
      </button>
      <button className="bg-transparent border-0 content-stretch cursor-pointer flex flex-col items-start justify-center p-[10px] relative shrink-0" onClick={onNavigateContact} type="button">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#404040] text-[16px] whitespace-nowrap">Contact Us</p>
        <Frame6 />
      </button>
    </div>
  );
}

export default function BuldingManagment({ onNavigateAbout, onNavigateHome, onNavigateLandSurveying, onNavigateSolarWind, onNavigateBuildingConstruction, onNavigateElectricWork, onNavigateBuildingManagement, onNavigateProjects, onNavigateSustainability, onNavigateCareers, onNavigateContact }: BuldingManagmentProps) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative size-full" data-name="BULDING MANAGMENT">
      <Frame12 />
      <Frame18 />
      <Frame22 />
      <Frame25 />
      <Frame30 />
      <SectionFinalCta />
      <div className="h-[486px] relative rounded-[6px] shrink-0 w-[1440px]" data-name="FOOTER">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <Footer />
        </div>
        <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
      <div className="bg-white content-stretch flex fixed items-center justify-between left-0 px-[120px] py-[10px] shadow-[0px_2px_8px_rgba(0,0,0,0.12)] top-0 w-[1440px] z-50" data-name="NAV BAR">
        <div aria-hidden className="absolute border border-[rgba(64,64,64,0.5)] border-solid inset-0 pointer-events-none" />
        <Frame10 />
        <Frame7
          onNavigateAbout={onNavigateAbout}
          onNavigateHome={onNavigateHome}
          onNavigateLandSurveying={onNavigateLandSurveying}
          onNavigateSolarWind={onNavigateSolarWind}
          onNavigateBuildingConstruction={onNavigateBuildingConstruction}
          onNavigateElectricWork={onNavigateElectricWork}
          onNavigateBuildingManagement={onNavigateBuildingManagement}
          onNavigateProjects={onNavigateProjects}
          onNavigateSustainability={onNavigateSustainability}
          onNavigateCareers={onNavigateCareers}
          onNavigateContact={onNavigateContact}
        />
        <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-[10px] relative rounded-[4px] shrink-0">
          <div aria-hidden className="absolute border-[#ffce1b] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#404040] text-[14px] text-center whitespace-nowrap">Get Consultation</p>
        </div>
      </div>
    </div>
  );
}
