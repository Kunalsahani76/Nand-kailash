import svgPaths from "./svg-qnsd4v7akj";
import imgFrame261 from "./388c6f432c37c031c6a38839fbfe789fed323b48.png";
import imgAaiDgpsSiteSurvey from "./b3a72735382587d0b88a89eff5b876a18e9ef1f3.png";
import imgAaiDgpsSiteSurvey1 from "./07299c2e7883a40c385c5023d7dd3322a05cf621.png";
import imgAaiDgpsSiteSurvey2 from "./c135664b81bb9b73372a18ca68fa63a8e0717ddb.png";
import imgAaiDgpsSiteSurvey3 from "./af7fa708b7f1fc4206d91a684172a411d0ff23c4.png";
import imgAaiDgpsSiteSurvey4 from "./225538c9e18de6cf62d70ac662f7a8f503156a13.png";
import imgAaiDgpsSiteSurvey5 from "./e2563cb05cbdd53957377fe8fd31ed3f83e0ce5e.png";
import imgAaiDgpsSiteSurvey6 from "./6cd3ea2ad01bfb257bbdc755cb1e0b45bebd24d2.png";
import imgAaiDgpsSiteSurvey7 from "./f9e8beff5d306bcd72e2d4302780f3d5e4c20259.png";
import imgAaiDgpsSiteSurvey8 from "./c6ff6dbaf5926741f658cbab6ebb0b492bf07556.png";
import imgFooter from "./ff5318d16dd5f93f2647437a73bc8688b87582ae.png";
import websiteIcon from "@/images/Nanda logo.jpg";

type ProjectsProps = {
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
  { label: "Solar & Wind Related Work", onClick: "solarWind" },
  { label: "Building Construction", onClick: "buildingConstruction" },
  { label: "Electric Related Work", onClick: "electricWork" },
  { label: "Building Management", onClick: "buildingManagement" },
];

function Overlay() {
  return (
    <div className="bg-[rgba(55,95,157,0.6)] content-stretch flex items-start px-[12px] py-[4px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">OUR WORK</p>
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Margin">
      <Container />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <Margin />
      <p className="[word-break:break-word] capitalize font-['Sora:ExtraBold',sans-serif] font-extrabold leading-[1.1] relative shrink-0 text-[64px] text-white tracking-[-1.28px] w-[964px]">Completed Projects</p>
    </div>
  );
}

function Frame19() {
  return <div className="bg-[#f4ff5f] h-[6px] opacity-0 relative shrink-0 w-0" />;
}

function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0" data-name="Component 19">
      <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.75)] w-[596px]">{`Delivering accuracy, quality & innovation in surveying and infrastructure projects across India.`}</p>
      <Frame19 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0">
      <Frame23 />
      <Component />
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

function Frame22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="bg-[#355d9b] content-stretch flex gap-[8px] items-center justify-center px-[32px] py-[15px] relative rounded-[4px] shrink-0 w-[208px]" data-name="Button">
        <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Contact Our Team</p>
        <Icon />
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0">
      <Frame24 />
      <Frame22 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-white whitespace-nowrap">
        <p className="leading-[36px]">33+</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pt-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">PROJECTS COMPLETED</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Margin1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[151px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Container1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-white whitespace-nowrap">
        <p className="leading-[36px]">20+</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pt-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">STATES COVERED</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Margin3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[113px]" data-name="Container">
      <Container7 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Container6 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Frame12 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[113px]" data-name="Container">
      <Container5 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Margin">
      <Container4 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Margin2 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-white whitespace-nowrap">
        <p className="leading-[36px]">100+</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pt-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">HAPPY CLIENTS</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Margin4 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[102px]" data-name="Container">
      <Container12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Container11 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Frame13 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[102px]" data-name="Container">
      <Container10 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Container9 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-white whitespace-nowrap">
        <p className="leading-[36px]">100%</p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pt-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">COMMITMENT TO QUALITY</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Margin5 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[173px]" data-name="Container">
      <Container17 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Container16 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Frame15 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[173px]" data-name="Container">
      <Container15 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Container14 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[32px] items-center justify-center px-[22px] py-[20px] relative size-full">
          <Frame9 />
          <Frame10 />
          <Frame8 />
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[38px] items-start left-[40px] top-[calc(50%+43.5px)] w-[717px]">
      <Frame25 />
      <Frame11 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="h-[749px] overflow-clip relative shrink-0 w-[1440px]">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame261} />
        <div className="absolute bg-gradient-to-l from-[rgba(102,102,102,0)] inset-0 to-[#0b1c30]" />
      </div>
      <Frame26 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffce1b] text-[36px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Explore Our Completed Projects</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <div className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#505050] text-[18px] text-center w-full">
        <p className="leading-[32px] mb-0">NKID has successfully undertaken various projects for DGPS site survey, structural height measurement,</p>
        <p className="leading-[32px]">topographical survey, GIS mapping and infrastructure development for leading clients across India.</p>
      </div>
    </div>
  );
}

function AaiDgpsSiteSurvey() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="AAI DGPS Site Survey">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAaiDgpsSiteSurvey} />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[240px] relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <AaiDgpsSiteSurvey />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0c1c38] text-[18px] w-full">
        <p className="leading-[28px]">Loon Land Development Limited and Others</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p11de1200} fill="var(--fill-0, #64748B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Svg />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Gurugram, Haryana</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-start p-[24px] relative size-full">
        <Heading2 />
        <Container22 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white col-1 relative rounded-[8px] row-1 self-start shrink-0 w-[373.333px]" data-name="Card 1">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container20 />
        <Container21 />
      </div>
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function AaiDgpsSiteSurvey1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="AAI DGPS Site Survey">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAaiDgpsSiteSurvey1} />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[240px] relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <AaiDgpsSiteSurvey1 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0c1c38] text-[18px] w-full">
        <p className="leading-[28px]">M/s HBP Estates Pvt. Ltd., Vasant Vihar</p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p11de1200} fill="var(--fill-0, #64748B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Svg1 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">New Delhi</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-start p-[24px] relative size-full">
        <Heading3 />
        <Container25 />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-white col-3 relative rounded-[8px] row-1 self-start shrink-0 w-[373.333px]" data-name="Card 14">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container23 />
        <Container24 />
      </div>
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function AaiDgpsSiteSurvey2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="AAI DGPS Site Survey">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAaiDgpsSiteSurvey2} />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[240px] relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <AaiDgpsSiteSurvey2 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0c1c38] text-[18px] w-full">
        <p className="leading-[28px]">Puri Construction Pvt. Ltd</p>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p11de1200} fill="var(--fill-0, #64748B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Svg2 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Gurugram, Haryana</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-start p-[24px] relative size-full">
        <Heading4 />
        <Container28 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white col-1 relative rounded-[8px] row-2 self-start shrink-0 w-[373.333px]" data-name="Card 11">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container26 />
        <Container27 />
      </div>
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function AaiDgpsSiteSurvey3() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="AAI DGPS Site Survey">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAaiDgpsSiteSurvey3} />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[240px] relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <AaiDgpsSiteSurvey3 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0c1c38] text-[18px] w-full">
        <p className="leading-[28px]">J.M. EnviroNet Pvt. Ltd.</p>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p11de1200} fill="var(--fill-0, #64748B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Svg3 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Jaipur, Rajasthan</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-start p-[24px] relative size-full">
        <Heading5 />
        <Container31 />
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div className="bg-white col-1 h-[369px] relative rounded-[8px] row-3 self-start shrink-0 w-[373.333px]" data-name="Card 16">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container29 />
        <Container30 />
      </div>
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function AaiDgpsSiteSurvey4() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="AAI DGPS Site Survey">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAaiDgpsSiteSurvey4} />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[240px] relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <AaiDgpsSiteSurvey4 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0c1c38] text-[18px] w-full">
        <p className="leading-[28px]">Mahesh Infracon Pvt. Ltd</p>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p11de1200} fill="var(--fill-0, #64748B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Svg4 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">{` Lucknow, U.P.`}</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-start p-[24px] relative size-full">
        <Heading6 />
        <Container34 />
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-white col-2 relative rounded-[8px] row-2 self-start shrink-0 w-[373.333px]" data-name="Card 15">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container32 />
        <Container33 />
      </div>
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function AaiDgpsSiteSurvey5() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="AAI DGPS Site Survey">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAaiDgpsSiteSurvey5} />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[240px] relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <AaiDgpsSiteSurvey5 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0c1c38] text-[18px] w-full">
        <p className="leading-[28px]">Urban Galaxy India Pvt. Ltd.</p>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p11de1200} fill="var(--fill-0, #64748B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Svg5 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">West Bengal</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-start p-[24px] relative size-full">
        <Heading7 />
        <Container37 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white col-2 h-[369px] relative rounded-[8px] row-3 self-start shrink-0 w-[373.333px]" data-name="Card 10">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container35 />
        <Container36 />
      </div>
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function AaiDgpsSiteSurvey6() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="AAI DGPS Site Survey">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAaiDgpsSiteSurvey6} />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[240px] relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <AaiDgpsSiteSurvey6 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0c1c38] text-[18px] w-full">
        <p className="leading-[28px]">Diamond Infra Promoters Pvt. Ltd</p>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p11de1200} fill="var(--fill-0, #64748B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Svg6 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Lucknow, U.P.</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-start p-[24px] relative size-full">
        <Heading8 />
        <Container40 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white col-3 relative rounded-[8px] row-2 self-start shrink-0 w-[373.333px]" data-name="Card 12">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container38 />
        <Container39 />
      </div>
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function AaiDgpsSiteSurvey7() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="AAI DGPS Site Survey">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAaiDgpsSiteSurvey7} />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[240px] relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <AaiDgpsSiteSurvey7 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0c1c38] text-[18px] w-full">
        <p className="leading-[28px]">Baba Homes Builders and Developers</p>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p11de1200} fill="var(--fill-0, #64748B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Svg7 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Mumbai, Maharashtra</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-start p-[24px] relative size-full">
        <Heading9 />
        <Container43 />
      </div>
    </div>
  );
}

function Card8() {
  return (
    <div className="bg-white col-3 relative rounded-[8px] row-3 self-start shrink-0 w-[373.333px]" data-name="Card 17">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container41 />
        <Container42 />
      </div>
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function AaiDgpsSiteSurvey8() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="AAI DGPS Site Survey">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAaiDgpsSiteSurvey8} />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[240px] relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <AaiDgpsSiteSurvey8 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0c1c38] text-[18px] w-full">
        <p className="leading-[28px]">Grand Buildtech Limited</p>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p11de1200} fill="var(--fill-0, #64748B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Svg8 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">New Delhi</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-start p-[24px] relative size-full">
        <Heading10 />
        <Container46 />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white col-2 h-[369px] relative rounded-[8px] row-1 self-start shrink-0 w-[373.333px]" data-name="Card 13">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container44 />
        <Container45 />
      </div>
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function CardsGrid() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid-cols-[repeat(3,fit-content(100%))] grid-rows-[___463px_463px_463px] inline-grid pt-[16px] relative shrink-0" data-name="Cards Grid">
      <Card />
      <Card5 />
      <Card2 />
      <Card7 />
      <Card6 />
      <Card1 />
      <Card3 />
      <Card8 />
      <Card4 />
    </div>
  );
}

function PortfolioSection() {
  return (
    <div className="h-[1798px] max-w-[1280px] relative shrink-0 w-full" data-name="Portfolio Section" id="completed-projects">
      <div className="flex flex-col items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center justify-center max-w-[inherit] px-[48px] py-[80px] relative size-full">
          <Container19 />
          <CardsGrid />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Poppins:ExtraBold',sans-serif] leading-[60.445px] not-italic relative shrink-0 text-[48px] text-center text-white uppercase w-[1344px]">Have a Project in Mind?</p>
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

function Container48() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <div className="bg-[#355d9b] content-stretch flex gap-[8px] items-center justify-center px-[32px] py-[15px] relative rounded-[4px] shrink-0 w-[349px]" data-name="Button">
        <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Consult Our Engineers</p>
        <Icon1 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Heading />
      <div className="[word-break:break-word] capitalize flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px not-italic relative text-[#e1e1e1] text-[20px] text-center w-[854px]">
        <p className="leading-[34px] mb-0">We are always ready to take on new challenges and deliver exceptional</p>
        <p className="leading-[34px]">{`results. Let's discuss your next project.`}</p>
      </div>
      <Container48 />
    </div>
  );
}

function SectionFinalCta() {
  return (
    <div className="bg-[#0b1c30] content-stretch flex flex-col h-[505px] items-start overflow-clip px-[64px] py-[128px] relative shrink-0 w-[1440px]" data-name="Section - Final CTA">
      <div className="absolute flex inset-[0_-21.02%_0_78.98%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-20.7012cqw,100cqh)] skew-x-[-13.93deg] w-[79.2988cqw]">
          <div className="bg-[#ffce1b] relative size-full" data-name="Overlay+VerticalBorder">
            <div aria-hidden className="absolute border-[#fdc425] border-l border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <Container47 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute h-[49px] left-0 top-px w-[79px]">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={websiteIcon} />
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[62px] relative shrink-0 w-full" data-name="Container">
      <Frame16 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Paragraph">
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
        <g clipPath="url(#clip0_1_670)" id="Icon">
          <path d={svgPaths.p22916300} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2c68500} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11.6667 4.33333H11.6733" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_670">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-start relative shrink-0 w-full" data-name="Container">
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

function Frame17() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex flex-col gap-[12px] h-full items-start relative shrink-0 w-[203px]">
        <Container50 />
        <Paragraph />
        <Container51 />
      </div>
    </div>
  );
}

function Heading11() {
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

function List() {
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

function Container52() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[289.125px] items-start relative shrink-0 w-[203px]" data-name="Container">
      <Heading11 />
      <List />
    </div>
  );
}

function Heading12() {
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

function List1() {
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

function Container53() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[289.125px] items-start relative shrink-0 w-[203px]" data-name="Container">
      <Heading12 />
      <List1 />
    </div>
  );
}

function Heading13() {
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

function Container57() {
  return (
    <div className="[word-break:break-word] absolute h-[44px] leading-[21px] left-[28px] not-italic text-black top-0 w-[81.969px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium left-0 text-[16px] top-0">EMAIL</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-0 text-[14px] top-[22px]">info@nkid.in</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[44px] relative shrink-0 w-[203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon5 />
        <Container57 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_694)" id="Icon">
          <path d={svgPaths.p2a44c680} id="Vector" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_694">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container59() {
  return (
    <div className="[word-break:break-word] absolute h-[44px] leading-[21px] left-[28px] not-italic text-black top-0 w-[114.313px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium left-0 text-[16px] top-0">PHONE</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-0 text-[14px] top-[22px]">+91 98765 43210</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[44px] relative shrink-0 w-[203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon6 />
        <Container59 />
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

function Container61() {
  return (
    <div className="[word-break:break-word] absolute h-[112px] left-[28px] not-italic text-black top-0 w-[203px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 text-[16px] top-0 whitespace-nowrap">ADDRESS</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 text-[14px] top-[22px] w-[260px]">
        <p className="leading-[21px] mb-0">544, DLF Prime Towers, F-79 &amp; 80,</p>
        <p className="leading-[21px] mb-0">Okhla Industrial Area Phase - 1,</p>
        <p className="leading-[21px]">New Delhi - 110020. INDIA.</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon7 />
        <Container61 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[196px] items-start relative shrink-0 w-full" data-name="Container">
      <Container56 />
      <Container58 />
      <Container60 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[289.125px] items-start relative shrink-0 w-[203px]" data-name="Container">
      <Heading13 />
      <Container55 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame17 />
      <Container52 />
      <Container53 />
      <Container54 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[417.125px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[80px] px-[64px] relative size-full">
        <Frame20 />
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

function Container63() {
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

function Container62() {
  return (
    <div className="content-stretch flex flex-col h-[68.5px] items-start pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.56)] border-solid border-t inset-0 pointer-events-none" />
      <Container63 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute content-stretch flex flex-col h-[485.625px] items-start left-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[-0.5px] w-[1440px]" data-name="Footer">
      <img alt="" className="absolute inset-0 max-w-none object-cover opacity-68 pointer-events-none size-full" src={imgFooter} />
      <Container49 />
      <Container62 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="h-[49px] relative shrink-0 w-[79px]">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={websiteIcon} />
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

function Frame7({ onNavigateAbout, onNavigateHome, onNavigateLandSurveying, onNavigateSolarWind, onNavigateBuildingConstruction, onNavigateElectricWork, onNavigateBuildingManagement, onNavigateProjects, onNavigateSustainability, onNavigateCareers, onNavigateContact }: ProjectsProps) {
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
      <div className="content-stretch flex flex-col group items-start justify-center p-[10px] relative shrink-0" data-services-dropdown>
        <p className="[word-break:break-word] cursor-pointer font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#404040] text-[16px] whitespace-nowrap" data-services-dropdown-trigger>Services</p>
        <Frame2 />
        <div className="absolute hidden group-data-[open=true]:flex flex-col left-1/2 top-[51px] -translate-x-1/2 w-[270px] z-[60]">
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

export default function Projects({ onNavigateAbout, onNavigateHome, onNavigateLandSurveying, onNavigateSolarWind, onNavigateBuildingConstruction, onNavigateElectricWork, onNavigateBuildingManagement, onNavigateProjects, onNavigateSustainability, onNavigateCareers, onNavigateContact }: ProjectsProps) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative size-full" data-name="Projects">
      <Frame21 />
      <PortfolioSection />
      <SectionFinalCta />
      <div className="h-[486px] relative rounded-[6px] shrink-0 w-[1440px]" data-name="FOOTER">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <Footer />
        </div>
        <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
      <div className="bg-white content-stretch flex fixed items-center justify-between left-0 px-[120px] py-[10px] shadow-[0px_2px_8px_rgba(0,0,0,0.12)] top-0 w-[1440px] z-50" data-name="NAV BAR">
        <div aria-hidden className="absolute border border-[rgba(64,64,64,0.5)] border-solid inset-0 pointer-events-none" />
        <Frame18 />
        <Frame7 onNavigateAbout={onNavigateAbout} onNavigateHome={onNavigateHome} onNavigateLandSurveying={onNavigateLandSurveying} onNavigateSolarWind={onNavigateSolarWind} onNavigateBuildingConstruction={onNavigateBuildingConstruction} onNavigateElectricWork={onNavigateElectricWork} onNavigateBuildingManagement={onNavigateBuildingManagement} onNavigateProjects={onNavigateProjects} onNavigateSustainability={onNavigateSustainability} onNavigateCareers={onNavigateCareers} onNavigateContact={onNavigateContact} />
        <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-[10px] relative rounded-[4px] shrink-0">
          <div aria-hidden className="absolute border-[#ffce1b] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#404040] text-[14px] text-center whitespace-nowrap">Get Consultation</p>
        </div>
      </div>
    </div>
  );
}
