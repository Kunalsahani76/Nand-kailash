import svgPaths from "./svg-99usj9q6io";
import imgFrame261 from "./9278c55cce7c72870f23c23567ad097f99671c56.png";
import imgIndustrialBuildings from "./0e9240d3fd1008e28b60b391b56a339315e560f2.png";
import imgCommercialConstruction from "./c7ea7fdf1d8b1cac097cda7c11ce8f7417160a67.png";
import imgResidentialConstruction from "./5157ff3e3e1c4dd50e61810a085076161c6ff8ea.png";
import imgFrame358 from "./8243af9c9f4ec95b90bfa28a9f7529ddaee72469.png";
import imgFrame359 from "./81a19f4762f4be783e27b8d2f847f6bed92a750f.png";
import imgAb6AXuByfYv9RVkiAys3FlvDs8CmeRxiLvV5WDoHDvkw9Ayp9Qn3X9SVihFGqFyPaR407IkAyXtXnIsvgzE6J1WKyRai8PfevxhIu1LbcnRvNeqRuatshIlij7YkJMwuftftVFtzihmuEr3OBd3YO4C8SGnOSr6RwJweKGl8C0Crqay4Ofaet9NBhEkr7Qd5XBasPz8L7BMzWJ2F4ZhLXvj83YE1JXYxnxPgfCwS5MtLcQf9WMLgjbncu545QIaPcMsF9Hyx4Znif5 from "./7a109911bb20dfd6f588c8f03cd2eba3b259972c.png";
import imgAb6AXuAfuKtAtsC3EC8T3IOGtv9YF31JMnlybsnsrLRuPly0HpjYdWjJOoTp01XLo72NtMtIsBo3ZofyiouOvOzik2UwAt3BTkCdbbct7MxCsMwXk33VUdFhDjJcBaitszQg78LhWm1LYqPgF0WBsUlMj08RruWfP5OqLaBxgwGik1TRzBPvimn5YqD7XXOAgHmfzCyyhHrGkk5AjDkpdhpseYcdnBslZeniAzfgTopU5ZaHKk44T8A1Aqa32PmkhH0B2Da1J9I from "./f90707171438b616e13b0a26e81744ae73552251.png";
import imgAb6AXuDtzRrJme0S3ZTy10NjQzKxmZzPrEZgrGKnLv4DwiyEgIa8DwYxYxakZmvOqlEoBL57AoZhkaUrnq9RyhGk6ZgmLw0GS2QajDoQe6JRFlZp1QWQt0T98FhHcdcGd1ApbqEl4R9VLgNxSfVfDIm3SfLvcAcBe3FKge1YpA8PvGpfpUiikdBC6KgAytXqx8Le9YEb0ApP6GTjbEvpV1Iuacr3W9Tk2IQm00SxXf5EBlzgRXG0SvdDYozGtSa7Z2R0Gq3DAn8 from "./cee6f0e34ed7010835e02f74e2e7b1da72ed926c.png";
import imgAp1WrLuQraxDnOo1D3FeVDo76Ojmz0Y1WbiyqbYHd73Tk6WsW0M24Nosq6U2N45K2Xd6IiThAh6OmtS5SJwmSZfN8Rfk4ZwS6M4FrxcjFennk4Kv6GYxmnVp1Ys97R8QavEmrL8U70VlPdRHzsgVw3Ht9QuU3JSl51HMHeefVk1Cm9EkyvzPrwKbimg8CmaYk6B7QxNiu2EcMVgNkSvlWkLbSwVgNbW6OoJtIarM08AkVqJbWzaTvQCiI from "./543ce6438e9e27c3e519997f50308a8c4f140a0f.png";
import imgAp1WrLtTRnMEeBbTlDkHpMloG1EvIM6YeVGdfCEWMc0YKwYfi0MoE81Q85P8TPHc8I5Mfc9Gku3ThBuPh3KDvkqikQwbtIa1U6DLF0DCvIgmjLt2S2Tss5Pci2TQ6Bps6Y1G1YexKbjZ3PEXeGoaPGpiJycLbFllBjv5ZfDnlpJ45J1TepYQoSyo19RWbO7Vw0EiCkPdOyNp8Qi66EoSaenhl7NccDwM90TJkcLa0TpAl5Zmq6RAaOxRoP from "./adac8555dc9d9a3626b5a1a0cabe318b2e821d3d.png";
import imgFooter from "./ff5318d16dd5f93f2647437a73bc8688b87582ae.png";
import imgFrame127 from "./c20da46eb86065efabefe8dda3d480f08dfffacc.png";
import websiteIcon from "@/images/website icon.png";

type BuildingConstructionProps = {
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
        <p className="leading-[16px]">ENGINEERED EXCELLENCE</p>
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[205px]" data-name="Margin">
      <Container />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Margin />
      <p className="[word-break:break-word] capitalize font-['Sora:ExtraBold',sans-serif] font-extrabold leading-[0] min-w-full relative shrink-0 text-[0px] text-white tracking-[-1.28px] w-[min-content]">
        <span className="leading-[1.1] text-[#375f9d] text-[64px]">Building Construction</span>
        <span className="leading-[1.1] text-[64px]">{` & Allied Infrastructure Services`}</span>
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
      <Frame14 />
      <div className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.75)] w-[762px]">
        <p className="leading-[32px] mb-0">Delivering End-to-End Construction Solutions with Precision, Quality, and</p>
        <p className="leading-[32px] mb-0">{`Safety. We build the foundations of tomorrow's industrial and urban`}</p>
        <p className="leading-[32px]">landscapes.</p>
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
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[40px] top-[calc(50%-51.5px)] w-[1114px]">
      <Frame16 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[749px] overflow-clip relative shrink-0 w-[1440px]">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-bottom size-full" src={imgFrame261} />
        <div className="absolute bg-gradient-to-l from-[rgba(102,102,102,0)] inset-0 to-[rgba(11,28,48,0.89)]" />
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
        <p className="leading-[60px]">NKID Infrastructure Mastery</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[18px] w-full">
        <p className="leading-[32px] mb-0">At NKID, we redefine the standard of modern infrastructure. Our</p>
        <p className="leading-[32px] mb-0">approach integrates rigorous engineering principles with</p>
        <p className="leading-[32px] mb-0">innovative construction methodologies. From complex industrial</p>
        <p className="leading-[32px]">{`facilities to precision-led residential developments, our expertise spans the full spectrum of the built environment. We don't just build structures; we create durable assets that empower progress and withstand the test of time.`}</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Overlay1 />
      <Heading />
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#375f9d] text-[56px] text-center tracking-[-1.12px] w-full">
          <p className="leading-[64px]">15+</p>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0b1c30] text-[16px] text-center w-full">
          <p className="leading-[26px]">Years of Expertise</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#ffce1b] col-1 h-[162px] justify-self-stretch relative rounded-[10.386px] row-1 shrink-0" data-name="Background+Border">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-center justify-center pl-[20px] pr-[10px] py-[20px] relative size-full">
          <Container5 />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#fdc425] text-[56px] text-center tracking-[-1.12px] w-full">
          <p className="leading-[64px]">500+</p>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f8f9ff] text-[16px] text-center w-full">
          <p className="leading-[26px]">Projects Delivered</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#375f9d] col-1 h-[162px] justify-self-stretch relative rounded-[10.386px] row-2 shrink-0" data-name="Background+Border">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-start justify-center pl-[20px] pr-[10px] py-[20px] relative size-full">
          <Container7 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="col-2 gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__162px_162px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <BackgroundBorder />
      <BackgroundBorder1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_312.75px] max-w-[1280px] py-[100px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container4 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffce1b] text-[36px] text-center w-[840px]">
        <p className="leading-[normal]">Construction Categories</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <div className="bg-white h-[4px] relative shrink-0 w-[96px]" data-name="Background" />
    </div>
  );
}

function IndustrialBuildings() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Industrial Buildings">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[126.84%] left-0 max-w-none top-[-13.42%] w-full" src={imgIndustrialBuildings} />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Industrial Buildings</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[32px] mb-0 whitespace-pre">{`Precision-engineered factories, specialized warehouses, and heavy `}</p>
        <p className="leading-[32px] whitespace-pre">manufacturing units designed for peak operational efficiency.</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bottom-[-6px] left-px w-[655px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[32px] relative size-full">
        <Heading2 />
        <Container13 />
      </div>
    </div>
  );
}

function LargeFeatureIndustrial() {
  return (
    <div className="col-[1/span_2] h-[400px] justify-self-stretch relative row-1 shrink-0" data-name="Large Feature: Industrial">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <IndustrialBuildings />
        <div className="absolute bg-gradient-to-t from-[#0b1c30] inset-[1px_1.33px_1px_1px] opacity-90 to-[rgba(11,28,48,0)]" data-name="Gradient" />
        <Container12 />
      </div>
      <div aria-hidden className="absolute border border-[#c6c6cd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
        <p className="leading-[normal]">Commercial Construction</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Heading 3:margin">
      <Heading3 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[34px]">Corporate headquarters and retail landmarks.</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[2px] items-start left-1/2 top-[240px] w-[344.667px]">
      <Heading3Margin />
      <Container14 />
    </div>
  );
}

function CommercialConstruction() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Commercial Construction">
      <div aria-hidden className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-bottom size-full" src={imgCommercialConstruction} />
        <div className="absolute bg-clip-padding bg-gradient-to-b border-0 border-[transparent] border-solid from-[rgba(121,112,112,0)] inset-0 to-[#0b1c30]" />
      </div>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Frame28 />
      </div>
    </div>
  );
}

function Commercial() {
  return (
    <div className="col-3 h-[400px] justify-self-stretch relative row-1 shrink-0" data-name="Commercial">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <CommercialConstruction />
      </div>
      <div aria-hidden className="absolute border border-[#c6c6cd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ResidentialConstruction() {
  return (
    <div className="absolute inset-px" data-name="Residential Construction">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-31.64%] max-w-none top-0 w-[163.27%]" src={imgResidentialConstruction} />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
        <p className="leading-[normal]">Residential Construction</p>
      </div>
    </div>
  );
}

function Heading3Margin1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] pb-[8px] right-[32px] top-[240px]" data-name="Heading 3:margin">
      <Heading4 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bottom-[50px] content-stretch flex flex-col items-start left-[32px] right-[32px]" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-full">
        <p className="leading-[32px]">High-quality housing projects with premium finishes.</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[32px] right-[32px] top-[240px]">
      <Heading3Margin1 />
      <Container15 />
    </div>
  );
}

function Overlay2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-gradient-to-t from-[#0b1c30] h-[398px] left-[calc(50%+0.17px)] to-[rgba(11,28,48,0)] top-[calc(50%+0.25px)] w-[409px]" data-name="Overlay">
      <Group />
    </div>
  );
}

function Residential() {
  return (
    <div className="col-1 h-[400px] relative row-2 shrink-0 w-[410.667px]" data-name="Residential">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ResidentialConstruction />
        <Overlay2 />
      </div>
      <div aria-hidden className="absolute border border-[#c6c6cd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
        <p className="leading-[normal]">Institutional Buildings</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-full">
        <p className="leading-[32px] mb-0">Educational campuses and modern</p>
        <p className="leading-[32px]">healthcare facilities built for public welfare.</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[8px] items-start left-[calc(50%-1px)] top-[240px] w-[344.667px]" data-name="Container">
      <Heading5 />
      <Container17 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="col-2 justify-self-stretch overflow-clip relative row-2 self-stretch shrink-0">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame358} />
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 to-[#0c1c30]" />
      </div>
      <Container16 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
        <p className="leading-[normal]">Turnkey Projects</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-full">
        <p className="leading-[32px]">Concept-to-completion management ensuring absolute peace of mind for stakeholders.</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[8px] items-start left-[calc(50%-1px)] top-[240px] w-[344.667px]" data-name="Container">
      <Heading6 />
      <Container19 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="col-3 justify-self-stretch overflow-clip relative row-2 self-stretch shrink-0">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame359} />
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 to-[#0c1c30]" />
      </div>
      <Container18 />
    </div>
  );
}

function Container11() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[__400px_400px] relative shrink-0 w-full" data-name="Container">
      <LargeFeatureIndustrial />
      <Commercial />
      <Residential />
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function SectionConstructionCategoriesAsymmetricBentoGrid() {
  return (
    <div className="bg-[#212121] relative shrink-0 w-full" data-name="Section - Construction Categories (Asymmetric Bento Grid)">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[64px] py-[96px] relative size-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffce1b] text-[36px] text-center w-[840px]">
        <p className="leading-[normal]">Comprehensive Services Categories</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <div className="bg-white h-[4px] relative shrink-0 w-[96px]" data-name="Background" />
    </div>
  );
}

function Frame27() {
  return (
    <div className="relative shrink-0 size-[64px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Frame 372">
          <rect fill="var(--fill-0, #375F9D)" height="64" rx="32" width="64" />
          <path d={svgPaths.p395efb00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
          <p className="leading-[32px]">Structural Construction</p>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.55)] w-full">
          <p className="leading-[27.736px] mb-0">Precision engineering of foundational</p>
          <p className="leading-[27.736px]">and framing systems.</p>
        </div>
      </div>
    </div>
  );
}

function ServiceCards() {
  return (
    <div className="bg-gradient-to-b col-1 from-[rgba(255,255,255,0.1)] justify-self-stretch relative rounded-[10.386px] row-1 self-stretch shrink-0 to-[rgba(153,153,153,0.1)]" data-name="Service Cards">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-start justify-center pl-[20px] pr-[10px] py-[20px] relative size-full">
          <Frame27 />
          <Heading8 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="relative shrink-0 size-[64px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Frame 371">
          <rect fill="var(--fill-0, #375F9D)" height="64" rx="32" width="64" />
          <path d={svgPaths.p50be980} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
          <p className="leading-[32px]">{`RCC & Steel Structures`}</p>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.55)] w-full">
          <p className="leading-[27.736px] mb-0">Heavy-duty industrial framing and</p>
          <p className="leading-[27.736px]">reinforced concrete work.</p>
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-gradient-to-b col-2 from-[rgba(255,255,255,0.1)] justify-self-stretch relative rounded-[10.386px] row-1 self-stretch shrink-0 to-[rgba(153,153,153,0.1)]" data-name="Background">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-start justify-center pl-[20px] pr-[10px] py-[20px] relative size-full">
          <Frame26 />
          <Heading9 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="relative shrink-0 size-[64px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Frame 370">
          <rect fill="var(--fill-0, #375F9D)" height="64" rx="32" width="64" />
          <path d={svgPaths.p48eec00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
          <p className="leading-[32px]">{`Roads & Pavements`}</p>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.55)] w-full">
          <p className="leading-[27.736px] mb-0">Arterial road construction and heavy-</p>
          <p className="leading-[27.736px]">duty industrial paving.</p>
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-gradient-to-b col-3 from-[rgba(255,255,255,0.1)] justify-self-stretch relative rounded-[10.386px] row-1 self-stretch shrink-0 to-[rgba(153,153,153,0.1)]" data-name="Background">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-start justify-center pl-[20px] pr-[10px] py-[20px] relative size-full">
          <Frame25 />
          <Heading10 />
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 size-[64px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Frame 367">
          <rect fill="var(--fill-0, #375F9D)" height="64" rx="32" width="64" />
          <path d={svgPaths.p4240f00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
          <p className="leading-[32px]">Drainage Systems</p>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.55)] w-full">
          <p className="leading-[27.736px] mb-0">Integrated urban and industrial water</p>
          <p className="leading-[27.736px]">management solutions.</p>
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-gradient-to-b col-1 from-[rgba(255,255,255,0.1)] justify-self-stretch relative rounded-[10.386px] row-2 self-stretch shrink-0 to-[rgba(153,153,153,0.1)]" data-name="Background">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-start justify-center pl-[20px] pr-[10px] py-[20px] relative size-full">
          <Frame22 />
          <Heading11 />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative shrink-0 size-[64px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Frame 368">
          <rect fill="var(--fill-0, #375F9D)" height="64" rx="32" width="64" />
          <path d={svgPaths.p3c090c00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
          <p className="leading-[32px]">{`Landscaping & Site Dev`}</p>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.55)] w-full">
          <p className="leading-[27.736px] mb-0">Comprehensive site preparation and</p>
          <p className="leading-[27.736px]">aesthetic environment design.</p>
        </div>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-gradient-to-b col-2 from-[rgba(255,255,255,0.1)] justify-self-stretch relative rounded-[10.386px] row-2 self-stretch shrink-0 to-[rgba(153,153,153,0.1)]" data-name="Background">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-start justify-center pl-[20px] pr-[10px] py-[20px] relative size-full">
          <Frame23 />
          <Heading12 />
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="relative shrink-0 size-[64px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Frame 369">
          <rect fill="var(--fill-0, #375F9D)" height="64" rx="32" width="64" />
          <path d={svgPaths.p3e0f6898} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
          <p className="leading-[32px]">Interior Fit-Out</p>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.55)] w-full">
          <p className="leading-[27.736px] mb-0">High-end specialized finishes for</p>
          <p className="leading-[27.736px]">commercial and residential units.</p>
        </div>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-gradient-to-b col-3 from-[rgba(255,255,255,0.1)] justify-self-stretch relative rounded-[10.386px] row-2 self-stretch shrink-0 to-[rgba(153,153,153,0.1)]" data-name="Background">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-start justify-center pl-[20px] pr-[10px] py-[20px] relative size-full">
          <Frame24 />
          <Heading13 />
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[__228px_228px] h-[480px] relative shrink-0 w-full" data-name="Overlay">
      <ServiceCards />
      <Background />
      <Background1 />
      <Background2 />
      <Background3 />
      <Background4 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center justify-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Overlay3 />
    </div>
  );
}

function SectionServicesGrid() {
  return (
    <div className="bg-[#212121] relative shrink-0 w-full" data-name="Section - Services Grid">
      <div aria-hidden className="absolute border border-[#221616] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[64px] py-[96px] relative size-full">
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffce1b] text-[36px] text-center w-[840px]">
        <p className="leading-[normal]">The NKID Advantage</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center relative size-full">
        <Heading14 />
        <div className="bg-white h-[4px] relative shrink-0 w-[96px]" data-name="Background" />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[15px] relative shrink-0 w-[30px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 15">
        <g id="Container">
          <path d={svgPaths.p1d03b200} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#375f9d] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[64px]" data-name="Background+Border">
      <Container32 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[16px] relative shrink-0 w-full" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white whitespace-nowrap">
        <p className="leading-[32px]">Expert Teams</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1a1] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px] mb-0">Qualified project managers</p>
        <p className="leading-[20px]">and engineers.</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center pb-[20px] px-[16px] relative size-full">
          <BackgroundBorder2 />
          <Heading15 />
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[26.25px] relative shrink-0 w-[27.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.5 26.25">
        <g id="Container">
          <path d={svgPaths.p2e076997} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#375f9d] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[64px]" data-name="Background+Border">
      <Container35 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[16px] relative shrink-0 w-full" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white whitespace-nowrap">
        <p className="leading-[32px]">Quality Assurance</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1a1] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px] mb-0">Rigorous multi-stage</p>
        <p className="leading-[20px]">quality inspections.</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center pb-[20px] px-[16px] relative size-full">
          <BackgroundBorder3 />
          <Heading16 />
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[25px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 25">
        <g id="Container">
          <path d={svgPaths.p30b4c680} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#375f9d] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[64px]" data-name="Background+Border">
      <Container38 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[16px] relative shrink-0 w-full" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white whitespace-nowrap">
        <p className="leading-[32px]">Safety First</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1a1] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px] mb-0">Strict OSHA-aligned safety</p>
        <p className="leading-[20px]">protocols.</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center pb-[20px] px-[16px] relative size-full">
          <BackgroundBorder4 />
          <Heading17 />
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Container">
          <path d={svgPaths.p21ecf998} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#375f9d] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[64px]" data-name="Background+Border">
      <Container41 />
    </div>
  );
}

function Heading18() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[16px] relative shrink-0 w-full" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white whitespace-nowrap">
        <p className="leading-[32px]">Timely Delivery</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1a1] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px] mb-0">Data-driven project</p>
        <p className="leading-[20px]">scheduling accuracy.</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center pb-[20px] px-[16px] relative size-full">
          <BackgroundBorder5 />
          <Heading18 />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[21.24px] relative shrink-0 w-[21.244px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2443 21.2404">
        <g id="Container">
          <path d={svgPaths.p3f7ba400} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-[#375f9d] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[64px]" data-name="Background+Border">
      <Container44 />
    </div>
  );
}

function Heading19() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[16px] relative shrink-0 w-full" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white whitespace-nowrap">
        <p className="leading-[32px]">Sustainable</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1a1] text-[14px] text-center w-[231px] whitespace-pre-wrap">
        <p className="leading-[20px] mb-0">{`Eco-conscious construction `}</p>
        <p className="leading-[20px]">and waste mgmt.</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="col-5 content-stretch flex flex-col gap-[8px] items-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <BackgroundBorder6 />
      <Heading19 />
      <Container45 />
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(5,minmax(0,1fr))] grid-rows-[_180px] relative size-full">
        <Container31 />
        <Container34 />
        <Container37 />
        <Container40 />
        <Container43 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.1)] h-[312px] max-w-[1280px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-full" data-name="Container">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-start justify-center max-w-[inherit] pl-[20px] pr-[10px] py-[20px] relative size-full">
          <Container29 />
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function SectionWhyChooseNkid() {
  return (
    <div className="bg-[#212121] relative shrink-0 w-full" data-name="Section - Why Choose NKID">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[64px] py-[96px] relative size-full">
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Heading20() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffce1b] text-[36px] text-center w-[840px]">
        <p className="leading-[normal]">COMPLETED PROJECTS</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading20 />
      <div className="bg-white h-[4px] relative shrink-0 w-[96px]" data-name="Background" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[1440px]">
      <Container47 />
    </div>
  );
}

function Ab6AXuByfYv9RVkiAys3FlvDs8CmeRxiLvV5WDoHDvkw9Ayp9Qn3X9SVihFGqFyPaR407IkAyXtXnIsvgzE6J1WKyRai8PfevxhIu1LbcnRvNeqRuatshIlij7YkJMwuftftVFtzihmuEr3OBd3YO4C8SGnOSr6RwJweKGl8C0Crqay4Ofaet9NBhEkr7Qd5XBasPz8L7BMzWJ2F4ZhLXvj83YE1JXYxnxPgfCwS5MtLcQf9WMLgjbncu545QIaPcMsF9Hyx4Znif() {
  return (
    <div className="aspect-[220.8000030517578/159.6999969482422] relative shrink-0 w-full" data-name="AB6AXuByfYv9rVkiAYS3flvDs8cmeRXILvV5WDo-hDvkw9Ayp9Qn3x9sVih-fGqFYPaR407IK_AyXtXNIsvgzE6J1wKyRAI8pfevxhIU1lbcnRVNeqRuatshIlij7YkJMwuftftVFtzihmuEr3OBd3yO4c8SGnOSr6rw_jweKGl8C0crqay4ofaet9nBHEkr7Qd5xBASPz8L7BMzW_j2F4zhLXvj83yE1jXYxnxPGFCwS5mt_LCQf9wMLgjbncu545QIaPcMsF9HYX4Znif5">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[100.08%] left-0 max-w-none top-[-0.04%] w-full" src={imgAb6AXuByfYv9RVkiAys3FlvDs8CmeRxiLvV5WDoHDvkw9Ayp9Qn3X9SVihFGqFyPaR407IkAyXtXnIsvgzE6J1WKyRai8PfevxhIu1LbcnRvNeqRuatshIlij7YkJMwuftftVFtzihmuEr3OBd3YO4C8SGnOSr6RwJweKGl8C0Crqay4Ofaet9NBhEkr7Qd5XBasPz8L7BMzWJ2F4ZhLXvj83YE1JXYxnxPgfCwS5MtLcQf9WMLgjbncu545QIaPcMsF9Hyx4Znif5} />
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Ab6AXuByfYv9RVkiAys3FlvDs8CmeRxiLvV5WDoHDvkw9Ayp9Qn3X9SVihFGqFyPaR407IkAyXtXnIsvgzE6J1WKyRai8PfevxhIu1LbcnRvNeqRuatshIlij7YkJMwuftftVFtzihmuEr3OBd3YO4C8SGnOSr6RwJweKGl8C0Crqay4Ofaet9NBhEkr7Qd5XBasPz8L7BMzWJ2F4ZhLXvj83YE1JXYxnxPgfCwS5MtLcQf9WMLgjbncu545QIaPcMsF9Hyx4Znif />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[18.15px] relative shrink-0 w-[20.679px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.6794 18.15">
        <g id="Container">
          <path d={svgPaths.p37534660} fill="var(--fill-0, #375F9D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Airports</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container51 />
      <Heading21 />
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Container50 />
      </div>
    </div>
  );
}

function ArticleAirportsCard() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] gap-[14px] h-[257.7px] items-center overflow-clip pb-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[220.8px]" data-name="Article - Airports Card">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Ab6AXuAfuKtAtsC3EC8T3IOGtv9YF31JMnlybsnsrLRuPly0HpjYdWjJOoTp01XLo72NtMtIsBo3ZofyiouOvOzik2UwAt3BTkCdbbct7MxCsMwXk33VUdFhDjJcBaitszQg78LhWm1LYqPgF0WBsUlMj08RruWfP5OqLaBxgwGik1TRzBPvimn5YqD7XXOAgHmfzCyyhHrGkk5AjDkpdhpseYcdnBslZeniAzfgTopU5ZaHKk44T8A1Aqa32PmkhH0B2Da1J9I() {
  return (
    <div className="aspect-[220.8000030517578/159.6999969482422] relative shrink-0 w-full" data-name="AB6AXuAFUKtAtsC3eC8T_3iOGtv9yF31JMnlybsnsrLRu-Ply0hpjYDWjJOoTP01XLo7_2nt-MtISBo3ZOFYIOU_OVOzik2UWAt-3bTkCDBBCT7_mxCsMwXK33vUdFhDJJcBaitszQG78lhWM1LYqPgF0wBSUlMJ0_8RruWfP5oqLaBxgwGik1tRzBPvimn5YqD7xX_oAGHmfzCyyhHrGkk5AJDkpdhpseYCDNBslZENIAzfgTopU5zaHKk44T8a1AQA32PmkhH0b2Da1j9I">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[100.08%] left-0 max-w-none top-[-0.04%] w-full" src={imgAb6AXuAfuKtAtsC3EC8T3IOGtv9YF31JMnlybsnsrLRuPly0HpjYdWjJOoTp01XLo72NtMtIsBo3ZofyiouOvOzik2UwAt3BTkCdbbct7MxCsMwXk33VUdFhDjJcBaitszQg78LhWm1LYqPgF0WBsUlMj08RruWfP5OqLaBxgwGik1TRzBPvimn5YqD7XXOAgHmfzCyyhHrGkk5AjDkpdhpseYcdnBslZeniAzfgTopU5ZaHKk44T8A1Aqa32PmkhH0B2Da1J9I} />
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Ab6AXuAfuKtAtsC3EC8T3IOGtv9YF31JMnlybsnsrLRuPly0HpjYdWjJOoTp01XLo72NtMtIsBo3ZofyiouOvOzik2UwAt3BTkCdbbct7MxCsMwXk33VUdFhDjJcBaitszQg78LhWm1LYqPgF0WBsUlMj08RruWfP5OqLaBxgwGik1TRzBPvimn5YqD7XXOAgHmfzCyyhHrGkk5AjDkpdhpseYcdnBslZeniAzfgTopU5ZaHKk44T8A1Aqa32PmkhH0B2Da1J9I />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[19px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
        <g id="Container">
          <path d={svgPaths.p3f0e4300} fill="var(--fill-0, #375F9D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Smart Cities</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex gap-[11.99px] items-center relative shrink-0 w-full" data-name="Container">
      <Container55 />
      <Heading22 />
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Container54 />
      </div>
    </div>
  );
}

function ArticleSmartCitiesCard() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] gap-[14px] h-[257.7px] items-center overflow-clip pb-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[220.8px]" data-name="Article - Smart Cities Card">
      <Container52 />
      <Container53 />
    </div>
  );
}

function Ab6AXuDtzRrJme0S3ZTy10NjQzKxmZzPrEZgrGKnLv4DwiyEgIa8DwYxYxakZmvOqlEoBL57AoZhkaUrnq9RyhGk6ZgmLw0GS2QajDoQe6JRFlZp1QWQt0T98FhHcdcGd1ApbqEl4R9VLgNxSfVfDIm3SfLvcAcBe3FKge1YpA8PvGpfpUiikdBC6KgAytXqx8Le9YEb0ApP6GTjbEvpV1Iuacr3W9Tk2IQm00SxXf5EBlzgRXG0SvdDYozGtSa7Z2R0Gq3DAn() {
  return (
    <div className="aspect-[220.8000030517578/159.6999969482422] relative shrink-0 w-full" data-name="AB6AXuDtzRrJME0S3ZTy10NjQZKxmZzPrEZgrGKn-LV4dwiyEgIa8_DwYxYXAKZmvOqlEoB_L57aoZHKAUrnq9ryhGK6ZgmLW0gS2qajDoQE6jRFlZP1qWQt0t98FHHcdcGd1ApbqEL4R9vLgNXSfVfDIm3SfLVCAcBE3FKge1YpA8pvGPFPUiikdB-C_6KgAytXQX8le9YEb0apP6gTjbEvpV1Iuacr3W9Tk2iQm00SxXF5eBlzg-R-_xG0SvdDYozGTSa7Z2r0Gq3D_AN8">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[100.08%] left-0 max-w-none top-[-0.04%] w-full" src={imgAb6AXuDtzRrJme0S3ZTy10NjQzKxmZzPrEZgrGKnLv4DwiyEgIa8DwYxYxakZmvOqlEoBL57AoZhkaUrnq9RyhGk6ZgmLw0GS2QajDoQe6JRFlZp1QWQt0T98FhHcdcGd1ApbqEl4R9VLgNxSfVfDIm3SfLvcAcBe3FKge1YpA8PvGpfpUiikdBC6KgAytXqx8Le9YEb0ApP6GTjbEvpV1Iuacr3W9Tk2IQm00SxXf5EBlzgRXG0SvdDYozGtSa7Z2R0Gq3DAn8} />
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Ab6AXuDtzRrJme0S3ZTy10NjQzKxmZzPrEZgrGKnLv4DwiyEgIa8DwYxYxakZmvOqlEoBL57AoZhkaUrnq9RyhGk6ZgmLw0GS2QajDoQe6JRFlZp1QWQt0T98FhHcdcGd1ApbqEl4R9VLgNxSfVfDIm3SfLvcAcBe3FKge1YpA8PvGpfpUiikdBC6KgAytXqx8Le9YEb0ApP6GTjbEvpV1Iuacr3W9Tk2IQm00SxXf5EBlzgRXG0SvdDYozGtSa7Z2R0Gq3DAn />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p5df7b00} fill="var(--fill-0, #375F9D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Government</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Heading23 />
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Container58 />
      </div>
    </div>
  );
}

function ArticleGovernmentCard() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] gap-[14px] h-[257.7px] items-center overflow-clip pb-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[220.8px]" data-name="Article - Government Card">
      <Container56 />
      <Container57 />
    </div>
  );
}

function Ap1WrLuQraxDnOo1D3FeVDo76Ojmz0Y1WbiyqbYHd73Tk6WsW0M24Nosq6U2N45K2Xd6IiThAh6OmtS5SJwmSZfN8Rfk4ZwS6M4FrxcjFennk4Kv6GYxmnVp1Ys97R8QavEmrL8U70VlPdRHzsgVw3Ht9QuU3JSl51HMHeefVk1Cm9EkyvzPrwKbimg8CmaYk6B7QxNiu2EcMVgNkSvlWkLbSwVgNbW6OoJtIarM08AkVqJbWzaTvQCiI() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="AP1WRLuQraxDNOo1d3feVDo76ojmz0Y1WBIYQB-YHd73TK6_wsW0m24NOSQ6u2N45K2XD6II-ThAh6omtS5sJwmSZfN8Rfk4zwS6_M4frxcjFennk4Kv6gYxmnVP1ys-97r8QAV-EmrL8u70VLPdRHzsgVW3Ht9quU3jSL51hMHeefVK1CM9EKYVZPrwKbimg8CMAYk6B7QXNiu2ecMVgNkSvlWKLbSwVGNbW6OoJTIar_m08akVQJbWZATvQCiI">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-0.05%] max-w-none top-0 w-[100.09%]" src={imgAp1WrLuQraxDnOo1D3FeVDo76Ojmz0Y1WbiyqbYHd73Tk6WsW0M24Nosq6U2N45K2Xd6IiThAh6OmtS5SJwmSZfN8Rfk4ZwS6M4FrxcjFennk4Kv6GYxmnVp1Ys97R8QavEmrL8U70VlPdRHzsgVw3Ht9QuU3JSl51HMHeefVk1Cm9EkyvzPrwKbimg8CmaYk6B7QxNiu2EcMVgNkSvlWkLbSwVgNbW6OoJtIarM08AkVqJbWzaTvQCiI} />
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[159.7px] relative shrink-0 w-[239.55px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Ap1WrLuQraxDnOo1D3FeVDo76Ojmz0Y1WbiyqbYHd73Tk6WsW0M24Nosq6U2N45K2Xd6IiThAh6OmtS5SJwmSZfN8Rfk4ZwS6M4FrxcjFennk4Kv6GYxmnVp1Ys97R8QavEmrL8U70VlPdRHzsgVw3Ht9QuU3JSl51HMHeefVk1Cm9EkyvzPrwKbimg8CmaYk6B7QxNiu2EcMVgNkSvlWkLbSwVgNbW6OoJtIarM08AkVqJbWzaTvQCiI />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p11741000} fill="var(--fill-0, #375F9D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Industrial</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container63 />
      <Heading24 />
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Container62 />
      </div>
    </div>
  );
}

function ArticleIndustrialCard() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] gap-[14px] h-[257.7px] items-center overflow-clip pb-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[220.8px]" data-name="Article - Industrial Card">
      <Container60 />
      <Container61 />
    </div>
  );
}

function Ap1WrLtTRnMEeBbTlDkHpMloG1EvIM6YeVGdfCEWMc0YKwYfi0MoE81Q85P8TPHc8I5Mfc9Gku3ThBuPh3KDvkqikQwbtIa1U6DLF0DCvIgmjLt2S2Tss5Pci2TQ6Bps6Y1G1YexKbjZ3PEXeGoaPGpiJycLbFllBjv5ZfDnlpJ45J1TepYQoSyo19RWbO7Vw0EiCkPdOyNp8Qi66EoSaenhl7NccDwM90TJkcLa0TpAl5Zmq6RAaOxRoP() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="AP1WRLtTRnMEeBBTlDKHpMloG1EvI_M6YeVGdfC_eWMc0YKwYFI0moE81q85P8tPHc8i5MFC9gku3thBUPh3kDvkqikQwbtIa1U_6d-lF0dCVIgmjLt-2S2Tss5PCI2tQ6Bps6y1-G1YEXKbjZ3pEXeGoaPGpiJycLbFllBJV5zfDnlpJ45J1tepYQoSyo19RWbO7Vw0eiCkPdOYNp8qi66eoSAENHL7NCCDwM90TJkcLA0TpAL5Zmq6RAaOxRoP">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-0.05%] max-w-none top-0 w-[100.1%]" src={imgAp1WrLtTRnMEeBbTlDkHpMloG1EvIM6YeVGdfCEWMc0YKwYfi0MoE81Q85P8TPHc8I5Mfc9Gku3ThBuPh3KDvkqikQwbtIa1U6DLF0DCvIgmjLt2S2Tss5Pci2TQ6Bps6Y1G1YexKbjZ3PEXeGoaPGpiJycLbFllBjv5ZfDnlpJ45J1TepYQoSyo19RWbO7Vw0EiCkPdOyNp8Qi66EoSaenhl7NccDwM90TJkcLa0TpAl5Zmq6RAaOxRoP} />
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[161px] relative shrink-0 w-[242px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Ap1WrLtTRnMEeBbTlDkHpMloG1EvIM6YeVGdfCEWMc0YKwYfi0MoE81Q85P8TPHc8I5Mfc9Gku3ThBuPh3KDvkqikQwbtIa1U6DLF0DCvIgmjLt2S2Tss5Pci2TQ6Bps6Y1G1YexKbjZ3PEXeGoaPGpiJycLbFllBjv5ZfDnlpJ45J1TepYQoSyo19RWbO7Vw0EiCkPdOyNp8Qi66EoSaenhl7NccDwM90TJkcLa0TpAl5Zmq6RAaOxRoP />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[18px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
        <g id="Container">
          <path d={svgPaths.p7ab5f00} fill="var(--fill-0, #375F9D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Residential</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex gap-[11.99px] items-center relative shrink-0 w-full" data-name="Container">
      <Container67 />
      <Heading25 />
    </div>
  );
}

function Container65() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Container66 />
      </div>
    </div>
  );
}

function ArticleResidentialCard() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] gap-[14px] h-[257.7px] items-center overflow-clip pb-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[220.8px]" data-name="Article - Residential Card">
      <Container64 />
      <Container65 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0">
      <ArticleAirportsCard />
      <ArticleSmartCitiesCard />
      <ArticleGovernmentCard />
      <ArticleIndustrialCard />
      <ArticleResidentialCard />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center justify-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function SectionProjectShowcase() {
  return (
    <div className="bg-[#212121] relative shrink-0 w-full" data-name="Section - Project Showcase">
      <div className="content-stretch flex flex-col items-start px-[64px] py-[96px] relative size-full">
        <Container46 />
      </div>
    </div>
  );
}

function Heading26() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Poppins:ExtraBold',sans-serif] leading-[60.445px] not-italic relative shrink-0 text-[54.95px] text-white uppercase whitespace-nowrap">Ready to Build with Precision?</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[672px] relative shrink-0 w-[672px]" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e1e1e1] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[34px] mb-0">Consult with our infrastructure experts to bring your large-scale construction</p>
        <p className="leading-[34px]">vision to life with guaranteed quality and safety.</p>
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

function Container70() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0" data-name="Container">
      <div className="bg-[#355d9b] content-stretch flex gap-[8px] items-center justify-center px-[32px] py-[15px] relative rounded-[4px] shrink-0 w-[349px]" data-name="Button">
        <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Discuss Your Construction Project</p>
        <Icon1 />
      </div>
      <div className="content-stretch flex h-[53px] items-center justify-center px-[33px] py-[17px] relative rounded-[4px] shrink-0 w-[197px]" data-name="Button">
        <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.5px] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">Contact Our Team</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Heading26 />
      <Container69 />
      <Container70 />
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
          <Container68 />
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

function Container72() {
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
        <g clipPath="url(#clip0_1_766)" id="Icon">
          <path d={svgPaths.p22916300} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2c68500} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11.6667 4.33333H11.6733" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_766">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container73() {
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
        <Container72 />
        <Paragraph />
        <Container73 />
      </div>
    </div>
  );
}

function Heading27() {
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

function Container74() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[289.125px] items-start relative shrink-0 w-[203px]" data-name="Container">
      <Heading27 />
      <List />
    </div>
  );
}

function Heading28() {
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

function Container75() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[289.125px] items-start relative shrink-0 w-[203px]" data-name="Container">
      <Heading28 />
      <List1 />
    </div>
  );
}

function Heading29() {
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

function Container79() {
  return (
    <div className="[word-break:break-word] absolute h-[44px] leading-[21px] left-[28px] not-italic text-black top-0 w-[81.969px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium left-0 text-[16px] top-0">EMAIL</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-0 text-[14px] top-[22px]">info@nkid.in</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[44px] relative shrink-0 w-[203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon5 />
        <Container79 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_832)" id="Icon">
          <path d={svgPaths.p2a44c680} id="Vector" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_832">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container81() {
  return (
    <div className="[word-break:break-word] absolute h-[44px] leading-[21px] left-[28px] not-italic text-black top-0 w-[114.313px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium left-0 text-[16px] top-0">PHONE</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-0 text-[14px] top-[22px]">+91 98765 43210</p>
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[44px] relative shrink-0 w-[203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon6 />
        <Container81 />
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

function Container83() {
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

function Container82() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon7 />
        <Container83 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[196px] items-start relative shrink-0 w-full" data-name="Container">
      <Container78 />
      <Container80 />
      <Container82 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[289.125px] items-start relative shrink-0 w-[203px]" data-name="Container">
      <Heading29 />
      <Container77 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame9 />
      <Container74 />
      <Container75 />
      <Container76 />
    </div>
  );
}

function Container71() {
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
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-white top-0 whitespace-nowrap">{`Â© 2026 Nanda Kailash Infrastructure & Developers. All rights reserved.`}</p>
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

function Container85() {
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

function Container84() {
  return (
    <div className="content-stretch flex flex-col h-[68.5px] items-start pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.56)] border-solid border-t inset-0 pointer-events-none" />
      <Container85 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute content-stretch flex flex-col h-[485.625px] items-start left-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[-0.5px] w-[1440px]" data-name="Footer">
      <img alt="" className="absolute inset-0 max-w-none object-cover opacity-68 pointer-events-none size-full" src={imgFooter} />
      <Container71 />
      <Container84 />
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

function Frame7({ onNavigateAbout, onNavigateHome, onNavigateLandSurveying, onNavigateSolarWind, onNavigateBuildingConstruction, onNavigateElectricWork, onNavigateBuildingManagement, onNavigateProjects, onNavigateSustainability, onNavigateCareers, onNavigateContact }: BuildingConstructionProps) {
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

export default function BuildingConstruction({ onNavigateAbout, onNavigateHome, onNavigateLandSurveying, onNavigateSolarWind, onNavigateBuildingConstruction, onNavigateElectricWork, onNavigateBuildingManagement, onNavigateProjects, onNavigateSustainability, onNavigateCareers, onNavigateContact }: BuildingConstructionProps) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative size-full" data-name="BUILDING CONSTRUCTION">
      <Frame12 />
      <Container1 />
      <SectionConstructionCategoriesAsymmetricBentoGrid />
      <SectionServicesGrid />
      <SectionWhyChooseNkid />
      <SectionProjectShowcase />
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
