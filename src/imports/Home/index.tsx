import svgPaths from "./svg-8jqq62xvy6";
import imgFrame131 from "./8672bc98772518e22c806c93b624d9255da88cf0.png";
import imgVector1 from "./a2ffe625782502a059eedd7672e049128c215782.png";
import imgFrame79 from "./609a2d76db8ff8e866b304ed3fb34f174ff5ea4e.png";
import imgFrame80 from "./dade9382b9729549003b5114d758b24bcc7512cb.png";
import imgFrame136 from "./904569796365b238e361d87cad3dec48e1507fe5.png";
import imgFrame137 from "./24c2ddd66d6efcbbf8e765c60d9246829ade878f.png";
import imgFrame138 from "./37795a200ddf557c32079a22a66e8f29e9df0ffd.png";
import imgFrame139 from "./2d64a4a5cb96ca80feee0de00612181013aec849.png";
import imgFrame140 from "./145e808ca1c9cbba28c2ae88fe46dcfdeb53d136.png";
import imgFrame141 from "./9b7cabc490983acee3e132ba15427a97c7537262.png";
import imgComponent18 from "./6d6f30a6a11d9f465fdee63d302a8eb91629a158.png";
import img131 from "./b060f2e7bbcb403cfbccdd8f1cb0592bd1028593.png";
import img201 from "./fcd89f23f4ad358626b04a01b5980643d416f2ca.png";
import imgFrame110 from "./f23abaa9d8ab4fa7a07a6eff07b6682e5259793a.png";
import imgFrame7 from "./3e6bd5007988590778b3c0a4ab0111fe593f9f68.png";
import imgFrame8 from "./ab19a604e93981368c45bccc4edda010fb042bf3.png";
import imgFrame9 from "./7a2eaf41fe740c61cd606a05496137d6bd972dfe.png";
import imgFrame10 from "./0d7706bc5c91588b0a2de9e7d76c240dda34809e.png";
import imgFooter from "./ff5318d16dd5f93f2647437a73bc8688b87582ae.png";
import imgFrame127 from "./c20da46eb86065efabefe8dda3d480f08dfffacc.png";
import websiteIcon from "@/images/Nanda logo.jpg";
import { useEffect, useState } from "react";

type HomeProps = {
  onNavigateAbout?: () => void;
  onNavigateLandSurveying?: () => void;
  onNavigateSolarWind?: () => void;
  onNavigateBuildingConstruction?: () => void;
  onNavigateElectricWork?: () => void;
  onNavigateBuildingManagement?: () => void;
  onNavigateProjects?: () => void;
  onNavigateProjectsSection?: () => void;
  onNavigateSustainability?: () => void;
  onNavigateCareers?: () => void;
  onNavigateContact?: () => void;
};

type ServiceDropdownItem = {
  label: string;
  onClick?: "landSurveying" | "solarWind" | "buildingConstruction" | "electricWork" | "buildingManagement";
};

type CoreServiceDestination = "landSurveying" | "solarWind" | "buildingConstruction" | "electricWork" | "buildingManagement";

type CoreService = {
  title: string;
  description: string;
  image: string;
  destination?: CoreServiceDestination;
};

const serviceDropdownItems: ServiceDropdownItem[] = [
  { label: "Land Surveying", onClick: "landSurveying" },
  { label: "Solar & Wind Related Work", onClick: "solarWind" },
  { label: "Building Construction", onClick: "buildingConstruction" },
  { label: "Electric Related Work", onClick: "electricWork" },
  { label: "Building Management", onClick: "buildingManagement" },
];

const coreServices: CoreService[] = [
  {
    title: "Infrastructure Development",
    description: "Roads, highways, industrial projects, and public infrastructure built to last generations.",
    image: imgFrame136,
  },
  {
    title: "Building Construction",
    description: "Commercial and residential construction solutions with precision engineering and quality assurance.",
    image: imgFrame137,
    destination: "buildingConstruction",
  },
  {
    title: "Solar Infrastructure",
    description: "Renewable energy and solar infrastructure development for a sustainable tomorrow.",
    image: imgFrame138,
    destination: "solarWind",
  },
  {
    title: "Land Surveying",
    description: "Accurate surveying and planning solutions using advanced technology and expertise.",
    image: imgFrame139,
    destination: "landSurveying",
  },
  {
    title: "Electrical Infrastructure",
    description: "Industrial and commercial electrical systems designed for safety and efficiency.",
    image: imgFrame140,
    destination: "electricWork",
  },
  {
    title: "Maintenance Services",
    description: "Long-term maintenance and support services to protect your infrastructure investment.",
    image: imgFrame141,
    destination: "buildingManagement",
  },
];

function AnimatedStat({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const duration = 1500;
    let animationFrame = 0;
    let startTime: number | undefined;

    const updateValue = (currentTime: number) => {
      if (startTime === undefined) startTime = currentTime;

      const progress = Math.min((currentTime - startTime) / duration, 1);
      setValue(Math.floor(progress * target));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(updateValue);
      }
    };

    animationFrame = window.requestAnimationFrame(updateValue);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [target]);

  return <>{value}{suffix}</>;
}

function Icon() {
  return <div className="absolute left-[534px] size-[32px] top-[702px]" data-name="Icon" />;
}

function Overlay() {
  return (
    <div className="bg-[rgba(55,95,157,0.6)] content-stretch flex items-start px-[12px] py-[4px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">HOME</p>
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

function Frame73() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Margin />
      <p className="[word-break:break-word] font-['Poppins:ExtraBold',sans-serif] leading-[0] not-italic relative shrink-0 text-[64px] text-white w-[1260px]">
        <span className="leading-[70px]">{`Building India's Future`}</span>
        <br />
        <span className="leading-[70px]">{`Through `}</span>
        <span className="leading-[70px] text-[#375f9d]">Smart Infrastructure</span>
      </p>
    </div>
  );
}

function Frame70() {
  return <div className="bg-[#f4ff5f] h-[6px] opacity-0 relative shrink-0 w-0" />;
}

function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0" data-name="Component 19">
      <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.78)] w-[720px]">{`Nanda Kailash Infrastructure & Developers delivers high-quality infrastructure, construction, renewable energy, and engineering solutions designed to support sustainable growth and modern development across India.`}</p>
      <Frame70 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0">
      <Frame73 />
      <Component />
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

function Frame72({ onNavigateProjectsSection }: Pick<HomeProps, "onNavigateProjectsSection">) {
  return (
    <div className="content-stretch flex gap-[25px] items-center relative shrink-0">
      <div className="bg-[#355d9b] content-stretch cursor-pointer flex gap-[8px] items-center justify-center px-[32px] py-[15px] relative rounded-[4px] shrink-0 w-[208px]" data-name="Button" onClick={onNavigateProjectsSection} role="button" tabIndex={0}>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.5px] min-w-px not-italic relative text-[15px] text-center text-white">{`Explore Projects `}</p>
        <Icon1 />
      </div>
      <div className="content-stretch flex h-[53px] items-center justify-center px-[33px] py-[17px] relative rounded-[4px] shrink-0 w-[197px]" data-name="Button">
        <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.5px] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">Contact Our Team</p>
      </div>
    </div>
  );
}

function Frame75({ onNavigateProjectsSection }: Pick<HomeProps, "onNavigateProjectsSection">) {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0">
      <Frame74 />
      <Frame72 onNavigateProjectsSection={onNavigateProjectsSection} />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p3c745100} id="Vector" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.pc932980} id="Vector_2" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Icon2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] w-[88px]">Sustainable Development</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p13bade00} id="Vector" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <Icon3 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] w-[79px]">Engineering Excellence</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="h-[26.674px] relative shrink-0 w-[24.009px]" data-name="Vector">
        <div className="absolute inset-[-2.5%_-2.78%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.3424 28.0069">
            <path d={svgPaths.p12e2b800} id="Vector" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] w-[93px]">Modern Infrastructure</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[22px] items-center justify-center px-[22px] py-[16px] relative rounded-[12px] shrink-0">
      <Frame17 />
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Frame76({ onNavigateProjectsSection }: Pick<HomeProps, "onNavigateProjectsSection">) {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[38px] items-start left-[40px] top-1/2">
      <Frame75 onNavigateProjectsSection={onNavigateProjectsSection} />
      <Frame77 />
    </div>
  );
}

function Frame39({ onNavigateProjectsSection }: Pick<HomeProps, "onNavigateProjectsSection">) {
  return (
    <div className="h-[750px] overflow-clip relative shrink-0 w-[1440px]">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame131} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(-89.741deg, rgba(255, 255, 255, 0) 45.706%, rgba(0, 0, 0, 0.7) 99.892%)" }} />
      </div>
      <Icon />
      <Frame76 onNavigateProjectsSection={onNavigateProjectsSection} />
    </div>
  );
}

function Frame26() {
  return (
    <div className="col-1 h-[157.341px] ml-0 mt-[345.66px] relative rounded-[14.467px] row-1 w-[215.557px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14.467px] size-full" src={imgFrame79} />
    </div>
  );
}

function Frame27() {
  return (
    <div className="col-1 h-[178.752px] ml-[222.97px] mt-[324.12px] relative rounded-[13.19px] row-1 w-[219px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13.19px] size-full" src={imgFrame80} />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[335.968px] ml-0 mt-0 relative row-1 w-[441.653px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="335.968" src={imgVector1} width="441.59" />
      </div>
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(55,95,157,0.6)] content-stretch flex items-start px-[12px] py-[4px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">{`ABOUT NAND KAILASH INFRASTRUCTURE & DEVELOPERS `}</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Overlay1 />
      <div className="[word-break:break-word] capitalize font-['Poppins:ExtraBold',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#0b1f3a] text-[0px] w-[min-content]">
        <p className="leading-[60.445px] mb-0 text-[54.95px]">Driven by Vision.</p>
        <p className="leading-[60.445px] text-[#355d9b] text-[54.95px]">Powered by Infrastructure.</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[20px] w-[768px]">
        <p className="leading-[34px]">{`Nanda Kailash Infrastructure & Developers Pvt. Ltd. (NKID) is a leading infrastructure development company in India committed to transforming landscapes through innovative engineering, sustainable construction, land surveying, renewable energy infrastructure, electrical solutions, and integrated development projects. From roads and city infrastructure to commercial construction, renewable energy projects, and public infrastructure development, NKID delivers excellence with precision, quality, and trust.`}</p>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start relative shrink-0 w-full">
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function Icon4() {
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

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] h-full items-start relative shrink-0 w-[779px]">
      <Frame78 />
      <div className="bg-[#355d9b] content-stretch flex gap-[8px] items-center justify-center px-[32px] py-[15px] relative rounded-[4px] shrink-0 w-[256px]" data-name="Button">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.5px] min-w-px not-italic relative text-[15px] text-center text-white">{`Learn More About Us `}</p>
        <Icon4 />
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[100px] pt-[190px] px-[80px] relative size-full">
          <Group />
          <div className="flex flex-row items-center self-stretch">
            <Frame79 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[198px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-black text-center tracking-[1.2px] uppercase whitespace-nowrap">
            <p className="leading-[normal]">Our Core Services</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CoreServiceCard({ title, description, image, onClick }: CoreService & { onClick?: () => void }) {
  return (
    <div className={`group h-[318px] overflow-clip relative rounded-[12px] shrink-0 w-[437px]${onClick ? " cursor-pointer" : ""}`} onClick={onClick} onKeyDown={onClick ? (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onClick();
      }
    } : undefined} role={onClick ? "button" : undefined} tabIndex={onClick ? 0 : undefined}>
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full transition-transform duration-500 ease-out group-hover:scale-[1.04]" src={image} />
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.08)] inset-0 rounded-[12px] to-[rgba(0,0,0,0.75)] transition-opacity duration-500 ease-out group-hover:opacity-0" />
        <div className="absolute inset-0 rounded-[12px] bg-[rgba(0,0,0,0.52)] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
      </div>
      <div className="absolute bottom-[28px] left-[16px] right-[16px] translate-y-[48px] transition-transform duration-500 ease-out group-hover:translate-y-0">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[1.2] not-italic text-[22.31px] text-white">{title}</p>
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[23.606px] mt-[12px] not-italic opacity-0 text-[15.74px] text-white tracking-[0.5px] transition-all duration-500 ease-out group-hover:opacity-100">
          {description}
        </p>
      </div>
    </div>
  );
}

function Frame40({ onNavigateLandSurveying, onNavigateSolarWind, onNavigateBuildingConstruction, onNavigateElectricWork, onNavigateBuildingManagement }: Pick<HomeProps, "onNavigateLandSurveying" | "onNavigateSolarWind" | "onNavigateBuildingConstruction" | "onNavigateElectricWork" | "onNavigateBuildingManagement">) {
  const serviceNavigation: Record<CoreServiceDestination, (() => void) | undefined> = {
    landSurveying: onNavigateLandSurveying,
    solarWind: onNavigateSolarWind,
    buildingConstruction: onNavigateBuildingConstruction,
    electricWork: onNavigateElectricWork,
    buildingManagement: onNavigateBuildingManagement,
  };

  return (
    <div className="gap-x-[31px] gap-y-[31px] grid grid-cols-[repeat(3,fit-content(100%))] grid-rows-[repeat(2,fit-content(100%))] relative shrink-0 w-full">
      {coreServices.map((service) => (
        <CoreServiceCard key={service.title} {...service} onClick={service.destination ? serviceNavigation[service.destination] : undefined} />
      ))}
    </div>
  );
}

function Frame41({ onNavigateLandSurveying, onNavigateSolarWind, onNavigateBuildingConstruction, onNavigateElectricWork, onNavigateBuildingManagement }: Pick<HomeProps, "onNavigateLandSurveying" | "onNavigateSolarWind" | "onNavigateBuildingConstruction" | "onNavigateElectricWork" | "onNavigateBuildingManagement">) {
  return (
    <div className="content-stretch flex flex-col gap-[55px] items-center py-[50px] relative shrink-0 w-[1372.72px]" id="services">
      <Container1 />
      <Frame40 onNavigateLandSurveying={onNavigateLandSurveying} onNavigateSolarWind={onNavigateSolarWind} onNavigateBuildingConstruction={onNavigateBuildingConstruction} onNavigateElectricWork={onNavigateElectricWork} onNavigateBuildingManagement={onNavigateBuildingManagement} />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] left-0 not-italic text-[#ffce1b] text-[32px] text-left top-0 whitespace-nowrap">
        <p className="leading-[34px] capitalize">Why Choose Us</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-start justify-center relative shrink-0 w-full">
      <Text />
      <p className="[word-break:break-word] font-['Poppins:ExtraBold',sans-serif] leading-[0] not-italic relative shrink-0 text-[58px] text-white w-[1120px]">
        <span className="leading-[1.25]">{`Trusted Infrastructure Partner For`}</span>
        <br />
        <span className="leading-[1.25] text-[#375f9d]">Modern Development</span>
      </p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24.235px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.235 24.235">
        <g id="Icon">
          <path d={svgPaths.pe068860} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.01959" />
          <path d={svgPaths.p34bc8c00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.01959" />
          <path d={svgPaths.p2be46400} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.01959" />
          <path d={svgPaths.p250ea780} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.01959" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[#375f9d] content-stretch flex items-center justify-center left-0 px-[10.386px] rounded-[8.655px] size-[45.008px] top-0" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="h-full relative shrink-0 w-[45px]">
      <Container2 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] h-full items-start not-italic relative shrink-0 w-[341.903px]">
      <p className="font-['Poppins:Bold',sans-serif] leading-[29.717px] relative shrink-0 text-[20px] text-white w-full">Engineering Expertise</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[27.736px] relative shrink-0 text-[18px] text-[rgba(255,255,255,0.55)] w-full">Decades of combined experience in civil, structural, and mechanical engineering.</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[rgba(255,255,255,0.1)] gap-[14px] h-[170px] items-center justify-center overflow-clip px-[10px] py-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[437px]">
      <Frame47 />
      <Frame46 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24.235px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.2351 24.2351">
        <g id="Icon">
          <path d={svgPaths.p379b6880} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.01959" />
          <path d={svgPaths.p3c727400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.01959" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#375f9d] content-stretch flex items-center justify-center left-0 px-[10.386px] rounded-[8.655px] size-[45.008px] top-0" data-name="Container">
      <Icon6 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="h-full relative shrink-0 w-[45px]">
      <Container3 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] h-full items-start not-italic relative shrink-0 w-[341.903px]">
      <p className="font-['Poppins:Bold',sans-serif] leading-[29.717px] relative shrink-0 text-[20px] text-white w-full">Sustainable Development</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[27.736px] relative shrink-0 text-[18px] text-[rgba(255,255,255,0.55)] w-full">Every project designed with environmental responsibility at its core.</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[rgba(255,255,255,0.1)] gap-[14px] h-[170px] items-center justify-center overflow-clip px-[10px] py-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[437px]">
      <Frame51 />
      <Frame52 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p2d89800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M9.33333 24.5H18.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M14 19.8333V24.5" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[#375f9d] content-stretch flex items-center justify-center left-0 px-[10.386px] rounded-[8.655px] size-[45.008px] top-0" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="h-full relative shrink-0 w-[45px]">
      <Container4 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] h-full items-start not-italic relative shrink-0 w-[341.903px]">
      <p className="font-['Poppins:Bold',sans-serif] leading-[29.717px] relative shrink-0 text-[20px] text-white w-full">Modern Technology</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[27.736px] relative shrink-0 text-[18px] text-[rgba(255,255,255,0.55)] w-full">Leveraging cutting-edge tools and methods for superior project outcomes.</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[rgba(255,255,255,0.1)] gap-[14px] h-[170px] items-center justify-center overflow-clip px-[10px] py-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[437px]">
      <Frame54 />
      <Frame55 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame44 />
      <Frame49 />
      <Frame53 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p1fa66600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M14 7V14L18.6667 16.3333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[#375f9d] content-stretch flex items-center justify-center left-0 px-[10.386px] rounded-[8.655px] size-[45.008px] top-0" data-name="Container">
      <Icon8 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="h-full relative shrink-0 w-[45px]">
      <Container5 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] h-full items-start not-italic relative shrink-0 w-[341.903px]">
      <p className="font-['Poppins:Bold',sans-serif] leading-[29.717px] relative shrink-0 text-[20px] text-white w-full">Timely Delivery</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[27.736px] relative shrink-0 text-[18px] text-[rgba(255,255,255,0.55)] w-full">Proven track record of completing projects on schedule and within budget.</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[rgba(255,255,255,0.1)] gap-[14px] h-[170px] items-center justify-center overflow-clip px-[10px] py-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[437px]">
      <Frame57 />
      <Frame58 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p184ba090} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p5d36b00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p2f1426c0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p25f79f00} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[#375f9d] content-stretch flex items-center justify-center left-0 px-[10.386px] rounded-[8.655px] size-[45.008px] top-0" data-name="Container">
      <Icon9 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="h-full relative shrink-0 w-[45px]">
      <Container6 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] h-full items-start not-italic relative shrink-0 w-[341.903px]">
      <p className="font-['Poppins:Bold',sans-serif] leading-[29.717px] relative shrink-0 text-[20px] text-white w-full">Skilled Workforce</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[27.736px] relative shrink-0 text-[18px] text-[rgba(255,255,255,0.55)] w-full">Highly trained engineers, surveyors, and technicians at every level.</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[rgba(255,255,255,0.1)] gap-[14px] h-[170px] items-center justify-center overflow-clip px-[10px] py-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[437px]">
      <Frame60 />
      <Frame61 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p1b228440} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p309e840} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[#375f9d] content-stretch flex items-center justify-center left-0 px-[10.386px] rounded-[8.655px] size-[45.008px] top-0" data-name="Container">
      <Icon10 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="h-full relative shrink-0 w-[45px]">
      <Container7 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] h-full items-start not-italic relative shrink-0 w-[341.903px]">
      <p className="font-['Poppins:Bold',sans-serif] leading-[29.717px] relative shrink-0 text-[20px] text-white w-full">Quality Assurance</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[27.736px] relative shrink-0 text-[18px] text-[rgba(255,255,255,0.55)] w-full">Rigorous quality checks at every stage of design, build, and handover.</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[rgba(255,255,255,0.1)] gap-[14px] h-[170px] items-center justify-center overflow-clip px-[10px] py-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[437px]">
      <Frame63 />
      <Frame64 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame45 />
      <Frame59 />
      <Frame62 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[1359px]">
      <Frame48 />
      <Frame56 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#212121] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[33px] items-center justify-center px-[40px] py-[60px] relative size-full">
          <Frame42 />
          <Frame50 />
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[0] not-italic px-[40px] relative size-full text-[#0b1f3a]">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center relative shrink-0 text-[22px] tracking-[1.2px] uppercase w-full">
          <p className="leading-[16px]">OUR WORK</p>
        </div>
        <p className="font-['Poppins:ExtraBold',sans-serif] relative shrink-0 text-[32.97px] w-full">
          <span className="leading-[37.916px]">{`Infrastructure Projects That `}</span>
          <span className="leading-[37.916px] text-[#39619f]">Create Lasting Impact</span>
        </p>
      </div>
    </div>
  );
}

function Frame16() {
  return <div className="absolute bg-[#39619f] h-[5px] left-[23px] rounded-[30px] top-[338px] w-0" />;
}

function Frame32() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[40px] relative size-full">
          <div className="h-[350px] overflow-clip relative shrink-0 w-[322px]" data-name="Component 18">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgComponent18} />
              <div className="absolute bg-gradient-to-b from-[rgba(102,102,102,0)] inset-0 to-[rgba(0,0,0,0.8)]" />
            </div>
            <p className="[word-break:break-word] absolute bottom-[46px] font-['Poppins:Bold',sans-serif] leading-[45.152px] left-[calc(50%-105px)] not-italic text-[22px] text-white translate-y-full whitespace-nowrap">{`Roads & Highways`}</p>
            <Frame16 />
          </div>
          <div className="h-[350px] overflow-clip relative shrink-0 w-[322px]" style={{ backgroundImage: "linear-gradient(rgba(102, 102, 102, 0) 0%, rgba(0, 0, 0, 0.8) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Component 17">
            <div className="absolute h-[350px] left-0 top-0 w-[322px]" data-name="13 1">
              <div aria-hidden className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 overflow-hidden">
                  <img alt="" className="absolute h-full left-[-59.03%] max-w-none top-0 w-[163.08%]" src={img131} />
                </div>
                <div className="absolute bg-gradient-to-b from-[rgba(102,102,102,0)] inset-0 to-[rgba(0,0,0,0.8)]" />
              </div>
            </div>
            <p className="[word-break:break-word] absolute bottom-[46px] font-['Poppins:Bold',sans-serif] leading-[45.152px] left-[calc(50%-126px)] not-italic text-[22px] text-white translate-y-full whitespace-nowrap">Commercial Buildings</p>
          </div>
          <div className="bg-white h-[350px] overflow-clip relative shrink-0 w-[322px]">
            <div className="absolute h-[354px] left-0 top-0 w-[322px]" data-name="20 1">
              <div aria-hidden className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 overflow-hidden">
                  <img alt="" className="absolute h-[113.84%] left-[-46.27%] max-w-none top-[-13.84%] w-[210.25%]" src={img201} />
                </div>
                <div className="absolute bg-gradient-to-b from-[rgba(102,102,102,0)] inset-0 to-[rgba(0,0,0,0.8)]" />
              </div>
            </div>
            <p className="[word-break:break-word] absolute bottom-[46px] font-['Poppins:Bold',sans-serif] leading-[45.152px] left-[calc(50%-137px)] not-italic text-[22px] text-white translate-y-full whitespace-nowrap">Industrial Infrastructure</p>
          </div>
          <div className="bg-white h-[350px] overflow-clip relative shrink-0 w-[322px]">
            <div className="absolute h-[350px] left-0 top-0 w-[322px]" data-name="21 1">
              <div aria-hidden className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 overflow-hidden">
                  <img alt="" className="absolute h-full left-[-47.46%] max-w-none top-0 w-[253.62%]" src={imgFrame80} />
                </div>
                <div className="absolute bg-gradient-to-b from-[rgba(102,102,102,0)] inset-0 to-[rgba(0,0,0,0.8)]" />
              </div>
            </div>
            <p className="[word-break:break-word] absolute bottom-[46px] font-['Poppins:Bold',sans-serif] leading-[45.152px] left-[calc(50%-77px)] not-italic text-[22px] text-white translate-y-full whitespace-nowrap">Solar Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[52px] items-start py-[70px] relative shrink-0 w-full">
      <Frame33 />
      <Frame32 />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[19.5px] left-[60px] top-[131px] w-[629px]" data-name="Text">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] left-[99.5px] not-italic text-[#0b1f3a] text-[22px] text-center top-[11.22px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">SUSTAINABILITY</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="h-[497px] overflow-clip relative shrink-0 w-[1440px]">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame110} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(268.772deg, rgba(102, 102, 102, 0) 8.5893%, rgba(0, 0, 0, 0.27) 69.886%)" }} />
      </div>
      <Text1 />
      <p className="[word-break:break-word] absolute font-['Poppins:ExtraBold',sans-serif] leading-[0] left-[60px] not-italic text-[32.97px] text-white top-[176.5px] w-[629px]">
        <span className="leading-[37.916px]">{`Building Sustainable Infrastructure for `}</span>
        <span className="leading-[37.916px]">Tomorrow</span>
      </p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[28.8px] left-[60px] not-italic text-[16px] text-white top-[260.22px] w-[469px]">Focus on renewable energy, green construction, environmental responsibility, and future-focused infrastructure.</p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <p className="[word-break:break-word] capitalize font-['Poppins:ExtraBold',sans-serif] leading-[37.916px] not-italic relative shrink-0 text-[52px] text-center text-white w-full">{`Let's Build The Future Together `}</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[36px] not-italic relative shrink-0 text-[#f8fafc] text-[18px] text-center tracking-[0.5px] w-[732px]">{`Partner with Nanda Kailash Infrastructure & Developers Pvt. Ltd. for reliable, innovative, and sustainable infrastructure solutions`}</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
      <Frame67 />
      <Frame68 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[331px] opacity-98 relative rounded-[7px] shadow-[0px_0px_15.379px_0px_rgba(0,0,0,0.25)] shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[7px] size-full" src={imgFrame7} />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16.02px] items-start min-h-px relative w-full">
      <Frame5 />
      <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative rounded-bl-[10px] rounded-br-[10px] shrink-0">
        <div aria-hidden className="absolute border border-[#355d9b] border-solid inset-0 pointer-events-none rounded-bl-[10px] rounded-br-[10px]" />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[27.736px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">{`	Discuss Your Infrastructure Project`}</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="flex-[1_0_0] min-h-px opacity-98 relative rounded-[7px] shadow-[0px_0px_15.379px_0px_rgba(0,0,0,0.25)] w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[7px] size-full" src={imgFrame8} />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16.02px] items-start min-h-px relative w-full">
      <Frame6 />
      <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative rounded-bl-[10px] rounded-br-[10px] shrink-0">
        <div aria-hidden className="absolute border border-[#355d9b] border-solid inset-0 pointer-events-none rounded-bl-[10px] rounded-br-[10px]" />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[27.736px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Get Custom Infrastructure Solutions</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="flex-[1_0_0] min-h-px opacity-98 relative rounded-[7px] shadow-[0px_0px_15.379px_0px_rgba(0,0,0,0.25)] w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[7px] size-full" src={imgFrame9} />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16.02px] items-start min-h-px relative w-full">
      <Frame7 />
      <div className="relative rounded-bl-[10px] rounded-br-[10px] shrink-0 w-full">
        <div aria-hidden className="absolute border border-[#355d9b] border-solid inset-0 pointer-events-none rounded-bl-[10px] rounded-br-[10px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[27.736px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Request Engineering Consultation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="flex-[1_0_0] min-h-px opacity-98 relative rounded-[7px] shadow-[0px_0px_15.379px_0px_rgba(0,0,0,0.25)] w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[7px] size-full" src={imgFrame10} />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16.02px] items-start min-h-px relative w-full">
      <Frame8 />
      <div className="relative rounded-bl-[10px] rounded-br-[10px] shrink-0 w-full">
        <div aria-hidden className="absolute border border-[#355d9b] border-solid inset-0 pointer-events-none rounded-bl-[10px] rounded-br-[10px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[27.736px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Explore Partnership Opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[40px] relative size-full">
          <div className="content-stretch flex flex-col h-[427.02px] items-center justify-center overflow-clip px-[12px] py-[16px] relative rounded-[20px] shrink-0 w-[322px]" style={{ backgroundImage: "linear-gradient(143.444deg, rgba(255, 255, 255, 0.1) 1.2676%, rgba(153, 153, 153, 0.1) 97.636%)" }}>
            <Frame12 />
          </div>
          <div className="content-stretch flex flex-col h-[427.02px] items-center justify-center overflow-clip px-[12px] py-[16px] relative rounded-[20px] shrink-0 w-[322px]" style={{ backgroundImage: "linear-gradient(143.444deg, rgba(255, 255, 255, 0.1) 1.2676%, rgba(153, 153, 153, 0.1) 97.636%)" }}>
            <Frame13 />
          </div>
          <div className="content-stretch flex flex-col h-[427.02px] items-center justify-center overflow-clip px-[12px] py-[16px] relative rounded-[20px] shrink-0 w-[322px]" style={{ backgroundImage: "linear-gradient(143.444deg, rgba(255, 255, 255, 0.1) 1.2676%, rgba(153, 153, 153, 0.1) 97.636%)" }}>
            <Frame14 />
          </div>
          <div className="content-stretch flex flex-col h-[427.02px] items-center justify-center overflow-clip px-[12px] py-[16px] relative rounded-[20px] shrink-0 w-[322px]" style={{ backgroundImage: "linear-gradient(143.444deg, rgba(255, 255, 255, 0.1) 1.2676%, rgba(153, 153, 153, 0.1) 97.636%)" }}>
            <Frame15 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame65({ onNavigateContact }: Pick<HomeProps, "onNavigateContact">) {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-center justify-center py-[60px] relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(101.111deg, rgb(33, 33, 33) 65.567%, rgb(135, 135, 135) 123.03%)" }}>
      <Frame66 />
      <Frame69 />
      <button className="bg-[#355d9b] border-0 content-stretch cursor-pointer flex gap-[8px] items-center justify-center px-[32px] py-[15px] relative rounded-[4px] shrink-0" data-name="Button" onClick={onNavigateContact} type="button">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.5px] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">Contact Us Today</p>
      </button>
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute h-[49px] left-0 top-px w-[79px]">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={websiteIcon} />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[62px] relative shrink-0 w-full" data-name="Container">
      <Frame36 />
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

function Icon11() {
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

function Icon12() {
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

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1009)" id="Icon">
          <path d={svgPaths.p22916300} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2c68500} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11.6667 4.33333H11.6733" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_1009">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container10() {
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
          <Icon11 />
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0.26)] relative rounded-[8px] shrink-0 size-[36px]" data-name="Link">
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] py-px relative size-full">
          <Icon12 />
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0.26)] relative rounded-[8px] shrink-0 size-[36px]" data-name="Link">
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] py-px relative size-full">
          <Icon13 />
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-full items-start relative shrink-0 w-[203px]">
      <Container9 />
      <Paragraph />
      <Container10 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex h-[35.5px] items-start pb-[13px] relative shrink-0 w-full" data-name="Heading 4">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.36)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Poppins:Bold',sans-serif] leading-[22.5px] min-w-px not-italic relative text-[18px] text-black">Quick Links</p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-center left-0 top-0 w-[203px]" data-name="Link">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Home</p>
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
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">About Us</p>
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
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Services</p>
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
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Projects</p>
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
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Careers</p>
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
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">{`Contact `}</p>
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

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[289.125px] items-start relative shrink-0 w-[203px]" data-name="Container">
      <Heading />
      <List />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex h-[35.5px] items-start pb-[13px] relative shrink-0 w-full" data-name="Heading 4">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.26)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Poppins:Bold',sans-serif] leading-[22.5px] min-w-px not-italic relative text-[18px] text-black">Services</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-center left-0 top-0 w-[203px]" data-name="Link">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Infrastructure Development</p>
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
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Building Construction</p>
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
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Solar Projects</p>
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
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Land Surveying</p>
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
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Electrical Infrastructure</p>
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
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Maintenance Services</p>
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

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[289.125px] items-start relative shrink-0 w-[203px]" data-name="Container">
      <Heading1 />
      <List1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex h-[35.5px] items-start pb-[13px] relative shrink-0 w-full" data-name="Heading 4">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.26)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Poppins:Bold',sans-serif] leading-[22.5px] min-w-px not-italic relative text-[18px] text-black">Contact</p>
    </div>
  );
}

function Icon14() {
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

function Container16() {
  return (
    <div className="[word-break:break-word] absolute h-[44px] leading-[21px] left-[28px] not-italic text-black top-0 w-[81.969px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium left-0 text-[16px] top-0">EMAIL</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-0 text-[14px] top-[22px]">info@nkid.in</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[44px] relative shrink-0 w-[203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon14 />
        <Container16 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_962)" id="Icon">
          <path d={svgPaths.p2a44c680} id="Vector" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_962">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="[word-break:break-word] absolute h-[44px] leading-[21px] left-[28px] not-italic text-black top-0 w-[114.313px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium left-0 text-[16px] top-0">PHONE</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-0 text-[14px] top-[22px]">+91 98765 43210</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[44px] relative shrink-0 w-[203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon15 />
        <Container18 />
      </div>
    </div>
  );
}

function Icon16() {
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

function Container20() {
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

function Container19() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon16 />
        <Container20 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[196px] items-start relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container17 />
      <Container19 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[289.125px] items-start relative shrink-0 w-[203px]" data-name="Container">
      <Heading2 />
      <Container14 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Frame37 />
      </div>
      <Container11 />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[417.125px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[80px] px-[64px] relative size-full">
        <Frame71 />
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

function Container22() {
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

function Container21() {
  return (
    <div className="content-stretch flex flex-col h-[68.5px] items-start pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.56)] border-solid border-t inset-0 pointer-events-none" />
      <Container22 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute content-stretch flex flex-col h-[485.625px] items-start left-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[-0.5px] w-[1440px]" data-name="Footer">
      <img alt="" className="absolute inset-0 max-w-none object-cover opacity-68 pointer-events-none size-full" src={imgFooter} />
      <Container8 />
      <Container21 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[61px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[8.33%] left-1/4 right-1/4 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.5833 55.9167">
            <path d={svgPaths.p2a4ee380} id="Vector" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.08333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[8.33%] right-3/4 top-1/2" data-name="Vector">
        <div className="absolute inset-[-10%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.25 30.5">
            <path d={svgPaths.p27af5600} id="Vector" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.08333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-3/4 right-[8.33%] top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-7.69%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.25 38.125">
            <path d={svgPaths.p3d0a6600} id="Vector" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.08333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[41.67%] right-[41.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-2.54px_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.25 5.08333">
            <path d="M2.54167 2.54167H12.7083" id="Vector" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.08333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_41.67%_58.33%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-2.54px_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.25 5.08333">
            <path d="M2.54167 2.54167H12.7083" id="Vector" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.08333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_41.67%_41.67%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-2.54px_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.25 5.08333">
            <path d="M2.54167 2.54167H12.7083" id="Vector" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.08333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[41.67%] right-[41.67%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-2.54px_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.25 5.08333">
            <path d="M2.54167 2.54167H12.7083" id="Vector" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.08333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[61px]" data-name="Container">
      <Icon17 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start not-italic relative shrink-0 w-[165px]">
      <p className="font-['Poppins:ExtraBold',sans-serif] leading-[52px] relative shrink-0 text-[44px] text-black whitespace-nowrap"><AnimatedStat suffix="+" target={50} /></p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] relative shrink-0 text-[#2f2f2f] text-[18px] whitespace-nowrap">Projects Delivered</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Container23 />
      <Frame20 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[61px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-2.62%_-3.28%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.3333 53.4994">
            <path d={svgPaths.p3aab8480} id="Vector" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_37.5%_45.83%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-8.74%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9167 17.9167">
            <path d={svgPaths.p154f2000} id="Vector" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[61px]" data-name="Container">
      <Icon18 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start not-italic relative shrink-0 w-[165px]">
      <p className="font-['Poppins:ExtraBold',sans-serif] leading-[52px] relative shrink-0 text-[44px] text-black whitespace-nowrap"><AnimatedStat suffix="+" target={10} /></p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] relative shrink-0 text-[#2f2f2f] text-[18px] whitespace-nowrap">Cities Reached</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Container24 />
      <Frame23 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[61px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61 61">
        <g id="Icon">
          <path d={svgPaths.p3bf1c680} id="Vector" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p36418100} id="Vector_2" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p682cd80} id="Vector_3" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p31bd7780} id="Vector_4" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start not-italic relative shrink-0 w-[190px]">
      <p className="font-['Poppins:ExtraBold',sans-serif] leading-[52px] relative shrink-0 text-[44px] text-black whitespace-nowrap"><AnimatedStat suffix="+" target={100} /></p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] relative shrink-0 text-[#2f2f2f] text-[18px] whitespace-nowrap">Skilled Workforce</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Icon19 />
      <Frame25 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[61px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61 61">
        <g id="Icon">
          <path d={svgPaths.p6236d00} id="Vector" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p1519ec80} id="Vector_2" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start not-italic relative shrink-0 whitespace-nowrap">
      <p className="font-['Poppins:ExtraBold',sans-serif] leading-[52px] relative shrink-0 text-[44px] text-black"><AnimatedStat suffix="%" target={100} /></p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] relative shrink-0 text-[#2f2f2f] text-[18px]">Sustainability Focus</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Icon20 />
      <Frame31 />
    </div>
  );
}

function Frame38() {
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

function Frame10() {
  return <div className="bg-[#404040] h-[3px] relative shrink-0 w-0" />;
}

function Frame11() {
  return <div className="bg-[#404040] h-[3px] relative shrink-0 w-0" />;
}

function Frame9({ onNavigateAbout, onNavigateLandSurveying, onNavigateSolarWind, onNavigateBuildingConstruction, onNavigateElectricWork, onNavigateBuildingManagement, onNavigateProjects, onNavigateSustainability, onNavigateCareers, onNavigateContact }: HomeProps) {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="content-stretch flex flex-col items-start justify-center p-[10px] relative shrink-0">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#404040] text-[16px] whitespace-nowrap">Home</p>
        <Frame />
      </div>
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
        <Frame10 />
      </button>
      <button className="bg-transparent border-0 content-stretch cursor-pointer flex flex-col items-start justify-center p-[10px] relative shrink-0" onClick={onNavigateContact} type="button">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#404040] text-[16px] whitespace-nowrap">Contact Us</p>
        <Frame11 />
      </button>
    </div>
  );
}

export default function Home({ onNavigateAbout, onNavigateLandSurveying, onNavigateSolarWind, onNavigateBuildingConstruction, onNavigateElectricWork, onNavigateBuildingManagement, onNavigateProjects, onNavigateProjectsSection, onNavigateSustainability, onNavigateCareers, onNavigateContact }: HomeProps) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="HOME">
      <Frame39 onNavigateProjectsSection={onNavigateProjectsSection} />
      <Frame80 />
      <Frame41 onNavigateLandSurveying={onNavigateLandSurveying} onNavigateSolarWind={onNavigateSolarWind} onNavigateBuildingConstruction={onNavigateBuildingConstruction} onNavigateElectricWork={onNavigateElectricWork} onNavigateBuildingManagement={onNavigateBuildingManagement} />
      <Frame43 />
      <Frame34 />
      <Frame35 />
      <Frame65 onNavigateContact={onNavigateContact} />
      <div className="h-[486px] relative rounded-[6px] shrink-0 w-[1440px]" data-name="FOOTER">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <Footer />
        </div>
        <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex h-[145px] items-center justify-between left-1/2 px-[36px] rounded-[5.25px] shadow-[0px_8px_18px_rgba(0,0,0,0.28)] top-[720px] w-[1200px]">
        <div aria-hidden className="absolute bg-[#f4f4f4] inset-0 pointer-events-none rounded-[5.25px]" />
        <Frame21 />
        <Frame22 />
        <Frame24 />
        <Frame28 />
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_1px_1px_1px_0px_white,inset_-1px_-1px_1px_0px_rgba(0,0,0,0.15)]" />
      </div>
      <div className="bg-white content-stretch flex fixed items-center justify-between left-0 px-[120px] py-[10px] shadow-[0px_2px_8px_rgba(0,0,0,0.12)] top-0 w-[1440px] z-50" data-name="NAV BAR">
        <div aria-hidden className="absolute border border-[rgba(64,64,64,0.5)] border-solid inset-0 pointer-events-none" />
        <Frame38 />
        <Frame9 onNavigateAbout={onNavigateAbout} onNavigateLandSurveying={onNavigateLandSurveying} onNavigateSolarWind={onNavigateSolarWind} onNavigateBuildingConstruction={onNavigateBuildingConstruction} onNavigateElectricWork={onNavigateElectricWork} onNavigateBuildingManagement={onNavigateBuildingManagement} onNavigateProjects={onNavigateProjects} onNavigateSustainability={onNavigateSustainability} onNavigateCareers={onNavigateCareers} onNavigateContact={onNavigateContact} />
        <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-[10px] relative rounded-[4px] shrink-0">
          <div aria-hidden className="absolute border-[#ffce1b] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#404040] text-[14px] text-center whitespace-nowrap">Get Consultation</p>
        </div>
      </div>
    </div>
  );
}
