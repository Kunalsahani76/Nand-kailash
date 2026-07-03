import svgPaths from "./svg-lk900xpj0n";
import imgFrame261 from "./c596863bf47b237be97e8bb8a5279c257c9242c7.png";
import imgOverviewImage from "./86346583278eb9dd9a4174db6bae82b4f1e6595c.png";
import imgAb6AXuByfYv9RVkiAys3FlvDs8CmeRxiLvV5WDoHDvkw9Ayp9Qn3X9SVihFGqFyPaR407IkAyXtXnIsvgzE6J1WKyRai8PfevxhIu1LbcnRvNeqRuatshIlij7YkJMwuftftVFtzihmuEr3OBd3YO4C8SGnOSr6RwJweKGl8C0Crqay4Ofaet9NBhEkr7Qd5XBasPz8L7BMzWJ2F4ZhLXvj83YE1JXYxnxPgfCwS5MtLcQf9WMLgjbncu545QIaPcMsF9Hyx4Znif5 from "./7a109911bb20dfd6f588c8f03cd2eba3b259972c.png";
import imgAb6AXuAfuKtAtsC3EC8T3IOGtv9YF31JMnlybsnsrLRuPly0HpjYdWjJOoTp01XLo72NtMtIsBo3ZofyiouOvOzik2UwAt3BTkCdbbct7MxCsMwXk33VUdFhDjJcBaitszQg78LhWm1LYqPgF0WBsUlMj08RruWfP5OqLaBxgwGik1TRzBPvimn5YqD7XXOAgHmfzCyyhHrGkk5AjDkpdhpseYcdnBslZeniAzfgTopU5ZaHKk44T8A1Aqa32PmkhH0B2Da1J9I from "./f90707171438b616e13b0a26e81744ae73552251.png";
import imgAb6AXuDtzRrJme0S3ZTy10NjQzKxmZzPrEZgrGKnLv4DwiyEgIa8DwYxYxakZmvOqlEoBL57AoZhkaUrnq9RyhGk6ZgmLw0GS2QajDoQe6JRFlZp1QWQt0T98FhHcdcGd1ApbqEl4R9VLgNxSfVfDIm3SfLvcAcBe3FKge1YpA8PvGpfpUiikdBC6KgAytXqx8Le9YEb0ApP6GTjbEvpV1Iuacr3W9Tk2IQm00SxXf5EBlzgRXG0SvdDYozGtSa7Z2R0Gq3DAn8 from "./cee6f0e34ed7010835e02f74e2e7b1da72ed926c.png";
import imgAp1WrLuQraxDnOo1D3FeVDo76Ojmz0Y1WbiyqbYHd73Tk6WsW0M24Nosq6U2N45K2Xd6IiThAh6OmtS5SJwmSZfN8Rfk4ZwS6M4FrxcjFennk4Kv6GYxmnVp1Ys97R8QavEmrL8U70VlPdRHzsgVw3Ht9QuU3JSl51HMHeefVk1Cm9EkyvzPrwKbimg8CmaYk6B7QxNiu2EcMVgNkSvlWkLbSwVgNbW6OoJtIarM08AkVqJbWzaTvQCiI from "./543ce6438e9e27c3e519997f50308a8c4f140a0f.png";
import imgAp1WrLtTRnMEeBbTlDkHpMloG1EvIM6YeVGdfCEWMc0YKwYfi0MoE81Q85P8TPHc8I5Mfc9Gku3ThBuPh3KDvkqikQwbtIa1U6DLF0DCvIgmjLt2S2Tss5Pci2TQ6Bps6Y1G1YexKbjZ3PEXeGoaPGpiJycLbFllBjv5ZfDnlpJ45J1TepYQoSyo19RWbO7Vw0EiCkPdOyNp8Qi66EoSaenhl7NccDwM90TJkcLa0TpAl5Zmq6RAaOxRoP from "./adac8555dc9d9a3626b5a1a0cabe318b2e821d3d.png";
import imgFooter from "./ff5318d16dd5f93f2647437a73bc8688b87582ae.png";
import imgFrame127 from "./c20da46eb86065efabefe8dda3d480f08dfffacc.png";

type ElectricWorkProps = {
  onNavigateAbout?: () => void;
  onNavigateHome?: () => void;
  onNavigateLandSurveying?: () => void;
  onNavigateSolarWind?: () => void;
  onNavigateBuildingConstruction?: () => void;
  onNavigateElectricWork?: () => void;
  onNavigateBuildingManagement?: () => void;
  onNavigateProjects?: () => void;
  onNavigateSustainability?: () => void;
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
        <p className="leading-[16px]">INFRASTRUCTURE EXCELLENCE</p>
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[244px]" data-name="Margin">
      <Container />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Margin />
      <div className="[word-break:break-word] capitalize font-['Sora:ExtraBold',sans-serif] font-extrabold leading-[0] min-w-full relative shrink-0 text-[0px] text-white tracking-[-1.28px] w-[min-content]">
        <p className="leading-[1.1] mb-0 text-[64px]">{`Electrical Infrastructure &`}</p>
        <p className="leading-[1.1] text-[64px]">Power Solutions</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
      <Frame14 />
      <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.75)] w-[762px]">Reliable Electrical Systems Designed for Efficiency, Safety, and Performance.</p>
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
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[40px] top-[calc(50%-118.5px)] w-[1114px]">
      <Frame16 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[749px] overflow-clip relative shrink-0 w-[1440px]">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-bottom size-full" src={imgFrame261} />
        <div className="absolute bg-gradient-to-l from-[rgba(102,102,102,0)] inset-0 to-[#0b1c30]" />
      </div>
      <Frame17 />
    </div>
  );
}

function OverviewImage() {
  return (
    <div className="h-[400px] relative shrink-0 w-[670px]" data-name="Overview Image">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[122.35%] left-[-0.07%] max-w-none top-[-14.07%] w-full" src={imgOverviewImage} />
      </div>
    </div>
  );
}

function OverlayBorderShadow() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="bg-[rgba(255,255,255,0)] h-full relative rounded-[12px] shrink-0 w-[568px]" data-name="Overlay+Border+Shadow">
        <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
          <OverviewImage />
        </div>
        <div aria-hidden className="absolute border-2 border-[#c3c5d9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div aria-hidden className="absolute border-[#375f9d] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pl-[28px] relative size-full">
        <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#111827] text-[48px] w-[625px]">
          <p className="leading-[60px]">Mission-Critical Power Infrastructure</p>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[18px] w-full">
        <p className="leading-[32px]">Comprehensive electrical engineering and installation services for commercial, industrial, infrastructure, and government projects. We bridge the gap between high-voltage utility grids and end-user distribution with precision-engineered solutions.</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[18px] w-full">
          <p className="leading-[32px]">Design Build</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-gradient-to-b col-1 from-[rgba(255,255,255,0.1)] h-[84.5px] justify-self-stretch relative rounded-[10.386px] row-1 shrink-0 to-[rgba(153,153,153,0.1)]" data-name="Background+Border">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-start justify-center pl-[20px] pr-[10px] py-[20px] relative size-full">
          <div className="h-[22.5px] relative shrink-0 w-[27.375px]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.375 22.5">
              <path d={svgPaths.p2dbffc00} fill="var(--fill-0, #375F9D)" id="Icon" />
            </svg>
          </div>
          <Heading2 />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[18px] w-full">
          <p className="leading-[32px]">Regulatory Compliance</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-gradient-to-b col-2 from-[rgba(255,255,255,0.1)] h-[87px] justify-self-stretch relative rounded-[10.386px] row-1 shrink-0 to-[rgba(153,153,153,0.1)]" data-name="Background+Border">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-start justify-center pl-[20px] pr-[10px] py-[20px] relative size-full">
          <div className="h-[25px] relative shrink-0 w-[20px]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 25">
              <path d={svgPaths.p2256d300} fill="var(--fill-0, #375F9D)" id="Icon" />
            </svg>
          </div>
          <Heading3 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_98px] pt-[8px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <BackgroundBorder1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[653px]" data-name="Container">
      <Heading />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[64px] items-center justify-center px-[40px] py-[96px] relative size-full">
          <OverlayBorderShadow />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffce1b] text-[36px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Specialized Technical Services</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <div className="bg-white h-[4px] relative shrink-0 w-[96px]" data-name="Background" />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p17b4a630} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[#375f9d] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay">
      <Container5 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[64px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Overlay1 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pl-[29.56px] pr-[29.57px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
          <p className="leading-[24px] mb-0">HT/LT Electrical</p>
          <p className="leading-[24px]">Installations</p>
        </div>
      </div>
    </div>
  );
}

function HtLtElectricalInstallations() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] gap-[14px] h-[170px] items-center pl-[20px] pr-[10px] py-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[220.8px]" data-name="HT/LT Electrical Installations">
      <Margin1 />
      <Heading4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[18px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
        <g id="Container">
          <path d={svgPaths.p18964900} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[#375f9d] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay">
      <Container6 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="h-[64px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Overlay2 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pl-[20.7px] pr-[20.71px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
          <p className="leading-[24px] mb-0">Power Distribution</p>
          <p className="leading-[24px]">Systems</p>
        </div>
      </div>
    </div>
  );
}

function PowerDistributionSystems() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] gap-[14px] h-[170px] items-center pl-[20px] pr-[10px] py-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[220.8px]" data-name="Power Distribution Systems">
      <Margin2 />
      <Heading5 />
    </div>
  );
}

function Container7() {
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

function Overlay3() {
  return (
    <div className="bg-[#375f9d] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay">
      <Container7 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="h-[64px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Overlay3 />
      </div>
    </div>
  );
}

function SubstationWorks() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="bg-gradient-to-b from-[rgba(255,255,255,0.1)] h-full relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[220.8px]" data-name="Substation Works">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[14px] items-center pl-[20px] pr-[10px] py-[20px] relative size-full">
            <Margin3 />
            <div className="[word-break:break-word] flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
              <p className="leading-[24px]">Substation Works</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[18px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 18">
        <g id="Container">
          <path d={svgPaths.p2b968e00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[#375f9d] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay">
      <Container8 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="h-[64px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Overlay4 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pl-[19.09px] pr-[19.11px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
          <p className="leading-[24px] mb-0">{`Internal & External`}</p>
          <p className="leading-[24px]">Electrification</p>
        </div>
      </div>
    </div>
  );
}

function InternalExternalElectrification() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] gap-[14px] h-[170px] items-center pl-[20px] pr-[10px] py-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[220.8px]" data-name="Internal & External Electrification">
      <Margin4 />
      <Heading6 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[14.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5 20">
        <g id="Container">
          <path d={svgPaths.p303e1c00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay5() {
  return (
    <div className="bg-[#375f9d] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay">
      <Container9 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="h-[64px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Overlay5 />
      </div>
    </div>
  );
}

function StreetLightingSystems() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="bg-gradient-to-b from-[rgba(255,255,255,0.1)] h-full relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[220.8px]" data-name="Street Lighting Systems">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[14px] items-center pl-[20px] pr-[10px] py-[20px] relative size-full">
            <Margin5 />
            <div className="[word-break:break-word] flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-[137px]">
              <p className="leading-[24px]">Street Lighting Systems</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full">
      <HtLtElectricalInstallations />
      <PowerDistributionSystems />
      <SubstationWorks />
      <InternalExternalElectrification />
      <StreetLightingSystems />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 20">
        <g id="Container">
          <path d={svgPaths.p4c3b580} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay6() {
  return (
    <div className="bg-[#375f9d] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay">
      <Container10 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="h-[64px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Overlay6 />
      </div>
    </div>
  );
}

function SmartLedLighting() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="bg-gradient-to-b from-[rgba(255,255,255,0.1)] h-full relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[220.8px]" data-name="Smart LED Lighting">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[14px] items-center pl-[20px] pr-[10px] py-[20px] relative size-full">
            <Margin6 />
            <div className="[word-break:break-word] flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
              <p className="leading-[24px]">Smart LED Lighting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p52cd400} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay7() {
  return (
    <div className="bg-[#375f9d] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay">
      <Container11 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="h-[64px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Overlay7 />
      </div>
    </div>
  );
}

function CableLaying() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="bg-gradient-to-b from-[rgba(255,255,255,0.1)] h-full relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[220.8px]" data-name="Cable Laying">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[14px] items-center pl-[20px] pr-[10px] py-[20px] relative size-full">
            <Margin7 />
            <div className="[word-break:break-word] flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
              <p className="leading-[24px]">Cable Laying</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p12df5c00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay8() {
  return (
    <div className="bg-[#375f9d] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay">
      <Container12 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="h-[64px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Overlay8 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-[15.08px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
          <p className="leading-[24px] mb-0">{`Earthing & Lightning`}</p>
          <p className="leading-[24px]">Protection</p>
        </div>
      </div>
    </div>
  );
}

function EarthingLightningProtection() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] gap-[14px] h-[170px] items-center pl-[20px] pr-[10px] py-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[220.8px]" data-name="Earthing & Lightning Protection">
      <Margin8 />
      <Heading7 />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Container">
          <path d={svgPaths.p105c2000} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay9() {
  return (
    <div className="bg-[#375f9d] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay">
      <Container13 />
    </div>
  );
}

function Margin9() {
  return (
    <div className="h-[64px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Overlay9 />
      </div>
    </div>
  );
}

function DgSetInstallation() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="bg-gradient-to-b from-[rgba(255,255,255,0.1)] h-full relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[220.8px]" data-name="DG Set Installation">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[14px] items-center pl-[20px] pr-[10px] py-[20px] relative size-full">
            <Margin9 />
            <div className="[word-break:break-word] flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
              <p className="leading-[24px]">DG Set Installation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[15.075px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15.075">
        <g id="Container">
          <path d={svgPaths.p24d0e680} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay10() {
  return (
    <div className="bg-[#375f9d] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay">
      <Container14 />
    </div>
  );
}

function Margin10() {
  return (
    <div className="h-[64px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Overlay10 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-[17.69px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
          <p className="leading-[24px] mb-0">{`Electrical Testing &`}</p>
          <p className="leading-[24px]">Commissioning</p>
        </div>
      </div>
    </div>
  );
}

function ElectricalTestingCommissioning() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] gap-[14px] h-[170px] items-center pl-[20px] pr-[10px] py-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[220.8px]" data-name="Electrical Testing & Commissioning">
      <Margin10 />
      <Heading8 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full">
      <SmartLedLighting />
      <CableLaying />
      <EarthingLightningProtection />
      <DgSetInstallation />
      <ElectricalTestingCommissioning />
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
    <div className="bg-[#212121] content-stretch flex flex-col gap-[36px] items-center justify-center py-[96px] relative shrink-0 w-full">
      <Container4 />
      <Frame21 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffce1b] text-[36px] text-center w-[840px]">
        <p className="leading-[normal]">Our Project Lifecycle</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <div className="bg-white h-[4px] relative shrink-0 w-[96px]" data-name="Background" />
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#375f9d] content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] px-[4px] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">1</p>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px]">Assessment</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-full">
        <p className="leading-[24px] mb-0">Initial site survey, load</p>
        <p className="leading-[24px]">calculations, and feasibility analysis.</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[214.39px]" data-name="Container">
      <BackgroundBorder2 />
      <Heading10 />
      <Container19 />
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#375f9d] content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] px-[4px] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">2</p>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px]">Design</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[222px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-[222px]">
        <p className="leading-[24px]">Drafting SLDs, layout plans, and material procurement schedules.</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[222px]" data-name="Container">
      <BackgroundBorder3 />
      <Heading11 />
      <Container21 />
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#375f9d] content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] px-[4px] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">3</p>
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px]">Installation</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-full">
        <p className="leading-[24px]">Field execution by certified electricians and site supervisors.</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[214.39px]" data-name="Container">
      <BackgroundBorder4 />
      <Heading12 />
      <Container23 />
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#375f9d] content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] px-[4px] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">4</p>
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px]">Testing</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-full">
        <p className="leading-[24px]">Rigorous insulation, earthing, and relay testing protocols.</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[214.41px]" data-name="Container">
      <BackgroundBorder5 />
      <Heading13 />
      <Container25 />
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-[#375f9d] content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] px-[4px] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">5</p>
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px]">Maintenance</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-full">
        <p className="leading-[24px]">24/7 post-installation support and periodic health checks.</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[214.41px]" data-name="Container">
      <BackgroundBorder6 />
      <Heading14 />
      <Container27 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <div className="absolute bg-white h-[2px] left-0 right-0 top-[24px]" data-name="Progress Line" />
      <Container18 />
      <Container20 />
      <Container22 />
      <Container24 />
      <Container26 />
    </div>
  );
}

function Container15() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] px-[40px] relative size-full">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function ProcessSection() {
  return (
    <div className="bg-[#212121] content-stretch flex flex-col items-center justify-center py-[96px] relative shrink-0 w-full" data-name="Process Section">
      <Container15 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffce1b] text-[36px] text-center w-[840px]">
        <p className="leading-[normal]">Industries We Empower</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading15 />
      <div className="bg-white h-[4px] relative shrink-0 w-[96px]" data-name="Background" />
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

function Container30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Ab6AXuByfYv9RVkiAys3FlvDs8CmeRxiLvV5WDoHDvkw9Ayp9Qn3X9SVihFGqFyPaR407IkAyXtXnIsvgzE6J1WKyRai8PfevxhIu1LbcnRvNeqRuatshIlij7YkJMwuftftVFtzihmuEr3OBd3YO4C8SGnOSr6RwJweKGl8C0Crqay4Ofaet9NBhEkr7Qd5XBasPz8L7BMzWJ2F4ZhLXvj83YE1JXYxnxPgfCwS5MtLcQf9WMLgjbncu545QIaPcMsF9Hyx4Znif />
      </div>
    </div>
  );
}

function Container33() {
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

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Airports</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Heading16 />
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Container32 />
      </div>
    </div>
  );
}

function ArticleAirportsCard() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] gap-[14px] h-[257.7px] items-center overflow-clip pb-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[220.8px]" data-name="Article - Airports Card">
      <Container30 />
      <Container31 />
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

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Ab6AXuAfuKtAtsC3EC8T3IOGtv9YF31JMnlybsnsrLRuPly0HpjYdWjJOoTp01XLo72NtMtIsBo3ZofyiouOvOzik2UwAt3BTkCdbbct7MxCsMwXk33VUdFhDjJcBaitszQg78LhWm1LYqPgF0WBsUlMj08RruWfP5OqLaBxgwGik1TRzBPvimn5YqD7XXOAgHmfzCyyhHrGkk5AjDkpdhpseYcdnBslZeniAzfgTopU5ZaHKk44T8A1Aqa32PmkhH0B2Da1J9I />
      </div>
    </div>
  );
}

function Container37() {
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

function Heading17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Smart Cities</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[11.99px] items-center relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Heading17 />
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Container36 />
      </div>
    </div>
  );
}

function ArticleSmartCitiesCard() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] gap-[14px] h-[257.7px] items-center overflow-clip pb-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[220.8px]" data-name="Article - Smart Cities Card">
      <Container34 />
      <Container35 />
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

function Container38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Ab6AXuDtzRrJme0S3ZTy10NjQzKxmZzPrEZgrGKnLv4DwiyEgIa8DwYxYxakZmvOqlEoBL57AoZhkaUrnq9RyhGk6ZgmLw0GS2QajDoQe6JRFlZp1QWQt0T98FhHcdcGd1ApbqEl4R9VLgNxSfVfDIm3SfLvcAcBe3FKge1YpA8PvGpfpUiikdBC6KgAytXqx8Le9YEb0ApP6GTjbEvpV1Iuacr3W9Tk2IQm00SxXf5EBlzgRXG0SvdDYozGtSa7Z2R0Gq3DAn />
      </div>
    </div>
  );
}

function Container41() {
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

function Heading18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Government</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Heading18 />
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Container40 />
      </div>
    </div>
  );
}

function ArticleGovernmentCard() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] gap-[14px] h-[257.7px] items-center overflow-clip pb-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[220.8px]" data-name="Article - Government Card">
      <Container38 />
      <Container39 />
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

function Container42() {
  return (
    <div className="h-[159.7px] relative shrink-0 w-[239.55px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Ap1WrLuQraxDnOo1D3FeVDo76Ojmz0Y1WbiyqbYHd73Tk6WsW0M24Nosq6U2N45K2Xd6IiThAh6OmtS5SJwmSZfN8Rfk4ZwS6M4FrxcjFennk4Kv6GYxmnVp1Ys97R8QavEmrL8U70VlPdRHzsgVw3Ht9QuU3JSl51HMHeefVk1Cm9EkyvzPrwKbimg8CmaYk6B7QxNiu2EcMVgNkSvlWkLbSwVgNbW6OoJtIarM08AkVqJbWzaTvQCiI />
      </div>
    </div>
  );
}

function Container45() {
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

function Heading19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Industrial</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <Heading19 />
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Container44 />
      </div>
    </div>
  );
}

function ArticleIndustrialCard() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] gap-[14px] h-[257.7px] items-center overflow-clip pb-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[220.8px]" data-name="Article - Industrial Card">
      <Container42 />
      <Container43 />
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

function Container46() {
  return (
    <div className="h-[161px] relative shrink-0 w-[242px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Ap1WrLtTRnMEeBbTlDkHpMloG1EvIM6YeVGdfCEWMc0YKwYfi0MoE81Q85P8TPHc8I5Mfc9Gku3ThBuPh3KDvkqikQwbtIa1U6DLF0DCvIgmjLt2S2Tss5Pci2TQ6Bps6Y1G1YexKbjZ3PEXeGoaPGpiJycLbFllBjv5ZfDnlpJ45J1TepYQoSyo19RWbO7Vw0EiCkPdOyNp8Qi66EoSaenhl7NccDwM90TJkcLa0TpAl5Zmq6RAaOxRoP />
      </div>
    </div>
  );
}

function Container49() {
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

function Heading20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Residential</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex gap-[11.99px] items-center relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <Heading20 />
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Container48 />
      </div>
    </div>
  );
}

function ArticleResidentialCard() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] gap-[14px] h-[257.7px] items-center overflow-clip pb-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[220.8px]" data-name="Article - Residential Card">
      <Container46 />
      <Container47 />
    </div>
  );
}

function Frame23() {
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

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center justify-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Frame23 />
    </div>
  );
}

function SectionProjectShowcase() {
  return (
    <div className="bg-[#212121] relative shrink-0 w-full" data-name="Section - Project Showcase">
      <div className="content-stretch flex flex-col items-start px-[64px] py-[96px] relative size-full">
        <Container28 />
      </div>
    </div>
  );
}

function Heading21() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Poppins:ExtraBold',sans-serif] leading-[60.445px] not-italic relative shrink-0 text-[48px] text-white uppercase whitespace-nowrap">Ready to Power Your Next Venture?</p>
    </div>
  );
}

function Container51() {
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

function Container52() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <div className="bg-[#355d9b] content-stretch flex gap-[8px] items-center justify-center px-[32px] py-[15px] relative rounded-[4px] shrink-0 w-[349px]" data-name="Button">
        <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Consult Our Engineers</p>
        <Icon1 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Heading21 />
      <Container51 />
      <Container52 />
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
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute h-[49px] left-0 top-px w-[73px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame127} />
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[62px] relative shrink-0 w-[224px]" data-name="Container">
      <Frame8 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[224px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute capitalize font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[18px] text-black top-[-0.5px] w-[314px]">{`Building India's infrastructure future through quality engineering, sustainable practices, and innovative solutions across construction, roads, solar, and more.`}</p>
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
        <g clipPath="url(#clip0_1_754)" id="Icon">
          <path d={svgPaths.p22916300} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2c68500} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11.6667 4.33333H11.6733" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_754">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container55() {
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
        <Container54 />
        <Paragraph />
        <Container55 />
      </div>
    </div>
  );
}

function Heading22() {
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

function Container56() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[289.125px] items-start relative shrink-0 w-[203px]" data-name="Container">
      <Heading22 />
      <List />
    </div>
  );
}

function Heading23() {
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

function Container57() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[289.125px] items-start relative shrink-0 w-[203px]" data-name="Container">
      <Heading23 />
      <List1 />
    </div>
  );
}

function Heading24() {
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

function Container61() {
  return (
    <div className="[word-break:break-word] absolute h-[44px] leading-[21px] left-[28px] not-italic text-black top-0 w-[81.969px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium left-0 text-[16px] top-0">EMAIL</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-0 text-[14px] top-[22px]">info@nkid.in</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[44px] relative shrink-0 w-[203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon5 />
        <Container61 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_745)" id="Icon">
          <path d={svgPaths.p2a44c680} id="Vector" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_745">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container63() {
  return (
    <div className="[word-break:break-word] absolute h-[44px] leading-[21px] left-[28px] not-italic text-black top-0 w-[114.313px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium left-0 text-[16px] top-0">PHONE</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-0 text-[14px] top-[22px]">+91 98765 43210</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[44px] relative shrink-0 w-[203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon6 />
        <Container63 />
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

function Container65() {
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

function Container64() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon7 />
        <Container65 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[196px] items-start relative shrink-0 w-full" data-name="Container">
      <Container60 />
      <Container62 />
      <Container64 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[289.125px] items-start relative shrink-0 w-[203px]" data-name="Container">
      <Heading24 />
      <Container59 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame9 />
      <Container56 />
      <Container57 />
      <Container58 />
    </div>
  );
}

function Container53() {
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

function Container67() {
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

function Container66() {
  return (
    <div className="content-stretch flex flex-col h-[68.5px] items-start pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.56)] border-solid border-t inset-0 pointer-events-none" />
      <Container67 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute content-stretch flex flex-col h-[485.625px] items-start left-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[-0.5px] w-[1440px]" data-name="Footer">
      <img alt="" className="absolute inset-0 max-w-none object-cover opacity-68 pointer-events-none size-full" src={imgFooter} />
      <Container53 />
      <Container66 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[49px] relative shrink-0 w-[73px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame127} />
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

function Frame7({ onNavigateAbout, onNavigateHome, onNavigateLandSurveying, onNavigateSolarWind, onNavigateBuildingConstruction, onNavigateElectricWork, onNavigateBuildingManagement, onNavigateProjects, onNavigateSustainability }: ElectricWorkProps) {
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
      <div className="content-stretch flex flex-col items-start justify-center p-[10px] relative shrink-0">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#404040] text-[16px] whitespace-nowrap">Careers</p>
        <Frame5 />
      </div>
      <div className="content-stretch flex flex-col items-start justify-center p-[10px] relative shrink-0">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#404040] text-[16px] whitespace-nowrap">Contact Us</p>
        <Frame6 />
      </div>
    </div>
  );
}

export default function ElectricWork({ onNavigateAbout, onNavigateHome, onNavigateLandSurveying, onNavigateSolarWind, onNavigateBuildingConstruction, onNavigateElectricWork, onNavigateBuildingManagement, onNavigateProjects, onNavigateSustainability }: ElectricWorkProps) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative size-full" data-name="ELECTRIC WORK">
      <Frame12 />
      <Frame18 />
      <Frame22 />
      <ProcessSection />
      <SectionProjectShowcase />
      <SectionFinalCta />
      <div className="h-[486px] relative rounded-[6px] shrink-0 w-[1440px]" data-name="FOOTER">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <Footer />
        </div>
        <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
      <div className="absolute backdrop-blur-[12.5px] bg-white content-stretch drop-shadow-[-20px_68px_10px_rgba(0,0,0,0),-13px_43px_9px_rgba(0,0,0,0.01),-7px_24px_7.5px_rgba(0,0,0,0.04),-3px_11px_5.5px_rgba(0,0,0,0.07),-1px_3px_3px_rgba(0,0,0,0.08)] flex items-center justify-between left-0 px-[120px] py-[10px] top-0 w-[1440px]" data-name="NAV BAR">
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
        />
        <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-[10px] relative rounded-[4px] shrink-0">
          <div aria-hidden className="absolute border-[#ffce1b] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#404040] text-[14px] text-center whitespace-nowrap">Get Consultation</p>
        </div>
      </div>
    </div>
  );
}
