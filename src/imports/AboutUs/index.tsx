import svgPaths from "./svg-5euhhvgapu";
import imgFrame188 from "./9beb7f14fb67041f0abdd5e7e0bd05eed0e7733c.png";
import imgBridgeConstruction from "./42a1bc2d877cc5ec2fefdcc3d0c7a350783d775b.png";
import imgBridgeConstruction1 from "./76b8d323496c8a474dc413e55fed46b9071ed3e5.png";
import imgBridgeConstruction2 from "./1ea5abb30ca48411ac6e5c74f02c021cd8482097.png";
import imgBridgeConstruction3 from "./8c0991b0c02fdc229f3f99c10128576c26a2e2fc.png";
import imgAirportInfrastructure from "./84f4817162947d9787ba9a3ab0bd1d9cebfafe39.png";
import imgSmartCityDevelopment from "./65c74358b10cb9143c21e69c276ca19d18e6dbdd.png";
import imgPublicInfrastructure from "./3496944da273c07ae95ffb8dfae853dffc163a21.png";
import imgAffordableHousing from "./8156f42a1deb572fc6bb1c4185bd4cfc9d486c44.png";
import imgEnergyInfrastructure from "./93f5f04996dd583b03a34e96bd0a24d244f4ccee.png";
import imgHelipadDevelopment from "./4258e90c28613966d9952d403d256b7c66b19c31.png";
import imgLedStreetLighting from "./e0bc2c88badc287c0a56b2665444502786a2cddc.png";
import imgUrbanDevelopment from "./3ed02f5cef7d54c2feaec48c5c842b4d0e9f1172.png";
import imgImpactSection from "./9a4d4c14edb9fde255fedb215c49569dbf1f10d2.png";
import imgFrame251 from "./b7630425d6ae0fc80f6b8e21efb3e7d5b29986ea.png";
import imgFooter from "./ff5318d16dd5f93f2647437a73bc8688b87582ae.png";
import imgFrame127 from "./c20da46eb86065efabefe8dda3d480f08dfffacc.png";

type AboutUsProps = {
  onNavigateHome?: () => void;
};

function Overlay() {
  return (
    <div className="bg-[rgba(55,95,157,0.6)] content-stretch flex items-start px-[12px] py-[4px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">ABOUT US</p>
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

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Margin />
      <div className="[word-break:break-word] capitalize font-['Sora:ExtraBold',sans-serif] font-extrabold leading-[0] relative shrink-0 text-[0px] text-white tracking-[-1.28px] w-full whitespace-pre-wrap">
        <p className="leading-[1.1] mb-0 text-[64px]">{`Building Foundation for `}</p>
        <p className="leading-[1.1] text-[#355d9b] text-[64px]">Generation</p>
      </div>
    </div>
  );
}

function Frame35() {
  return <div className="bg-[#f4ff5f] h-[6px] opacity-0 relative shrink-0 w-0" />;
}

function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0" data-name="Component 19">
      <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.75)] w-[429px]">{`Nanda Kailash Infrastructure & Developers (NKID) was founded with a vision to contribute to India's infrastructure growth through innovative, sustainable, and impactful development solutions. `}</p>
      <Frame35 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
      <Frame58 />
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

function Frame57() {
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

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
      <Frame59 />
      <Frame57 />
    </div>
  );
}

function IconShieldCheck() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="IconShieldCheck">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="IconShieldCheck">
          <path d={svgPaths.p16179800} id="Vector" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
        <p className="leading-[25px]">25+</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">YEARS OF EXCELLENCE</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[150px]" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <IconShieldCheck />
      <Container1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
        <p className="leading-[25px]">Diverse</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">INFRASTRUCTURE VERTICALS</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[191px]" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Margin">
      <Container4 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <div className="h-[26.674px] relative shrink-0 w-[24.009px]" data-name="Vector">
        <div className="absolute inset-[-2.5%_-2.78%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.3424 28.0069">
            <path d={svgPaths.p12e2b800} id="Vector" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <Margin1 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG">
          <path d={svgPaths.p81d4400} id="Vector" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[25px]">Nation Building</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">WITH INTEGRITY</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[151px]" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[189px]">
      <Svg />
      <Container7 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[22px] items-center justify-center px-[22px] py-[16px] relative rounded-[4px] shrink-0">
      <Frame9 />
      <Frame10 />
      <Frame8 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[38px] items-start left-[40px] top-1/2 w-[850px]">
      <Frame60 />
      <Frame11 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="h-[749px] overflow-clip relative shrink-0 w-[1440px]">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame188} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(89.7667deg, rgba(0, 0, 0, 0.8) 0.10269%, rgba(102, 102, 102, 0) 187.35%)" }} />
      </div>
      <Frame61 />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(55,95,157,0.6)] content-stretch flex items-start px-[12px] py-[8px] relative rounded-[2px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.96px] whitespace-nowrap">
        <p className="leading-[normal]">ABOUT NKID</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#111827] text-[48px] w-full">
        <p className="leading-[60px] mb-0">Infrastructure is not just</p>
        <p className="leading-[60px] mb-0">what we build, it is the</p>
        <p className="leading-[60px]">future we enable.</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[18px] w-full">
        <p className="leading-[32px]">{`Nanda Kailash Infrastructure & Developers (NKID) was founded with a vision to contribute to India's infrastructure growth through innovative, sustainable, and impactful development solutions. We believe that infrastructure is more than roads, buildings, and utilities. It is the foundation that connects communities, drives economic growth, and improves the quality of life for future generations.`}</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[34px]">{`At NKID, we don't just build projects. We build lasting impact.`}</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start py-[20px] relative shrink-0 w-[714px]">
      <Overlay1 />
      <Heading />
      <Container10 />
    </div>
  );
}

function BridgeConstruction() {
  return (
    <div className="absolute h-[579px] left-0 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[0.25px] w-[584px]" data-name="Bridge Construction">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[116.8%] left-0 max-w-none top-[-8.4%] w-full" src={imgBridgeConstruction} />
      </div>
    </div>
  );
}

function BridgeConstruction1() {
  return (
    <div className="absolute h-[579px] left-[626px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[584px]" data-name="Bridge Construction">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBridgeConstruction1} />
    </div>
  );
}

function BridgeConstruction2() {
  return (
    <div className="absolute h-[579px] left-[1275px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[584px]" data-name="Bridge Construction">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBridgeConstruction2} />
    </div>
  );
}

function BridgeConstruction3() {
  return (
    <div className="absolute h-[579px] left-[1901px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[584px]" data-name="Bridge Construction">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBridgeConstruction3} />
    </div>
  );
}

function Frame37() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[40px] py-[30px] relative size-full">
          <Frame36 />
          <div className="h-[579px] overflow-clip relative rounded-[24px] shrink-0 w-[584px]" data-name="Component 23">
            <BridgeConstruction />
            <BridgeConstruction1 />
            <BridgeConstruction2 />
            <BridgeConstruction3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-[rgba(255,206,27,0.2)] content-stretch flex items-center justify-center p-[20px] relative rounded-[40px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffce1b] text-[22px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Our VISION</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0">
      <Frame56 />
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-[531px]">
        <p className="leading-[32px]">{`To be a trusted leader in infrastructure development by creating sustainable, innovative, and future-ready projects that contribute to India's growth and improve the lives of people and communities.`}</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[27px] h-full items-start relative shrink-0 w-[553px]" data-name="Component 20">
      <Frame31 />
    </div>
  );
}

function Frame33() {
  return <div className="bg-white h-[149px] relative shrink-0 w-[3px]" />;
}

function Frame62() {
  return (
    <div className="bg-[rgba(255,206,27,0.2)] content-stretch flex items-center justify-center p-[20px] relative rounded-[40px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffce1b] text-[22px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Our Mission</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-[465px]">
      <Frame62 />
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">
        <p className="leading-[32px]">To deliver high-quality infrastructure solutions through innovation, engineering excellence, and responsible project execution.</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex gap-[27px] h-full items-start relative shrink-0" data-name="Component 21">
      <Frame32 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[rgba(55,95,157,0.8)] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[64px] items-center justify-center px-[40px] py-[50px] relative size-full">
          <div className="flex flex-row items-center self-stretch">
            <Component1 />
          </div>
          <Frame33 />
          <div className="flex flex-row items-center self-stretch">
            <Component2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffce1b] text-[36px] text-center w-[840px]">
        <p className="leading-[normal]">Our Core Values</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[1280px]" data-name="Container">
      <Heading1 />
      <div className="bg-white h-[4px] relative shrink-0 w-[96px]" data-name="Background" />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute left-0 size-[45.008px] top-0" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.0079 45.0079">
        <g id="Container">
          <path d={svgPaths.p14ae9940} fill="var(--fill-0, #375F9D)" />
          <path d={svgPaths.p205c0f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="h-full relative shrink-0 w-[45px]">
      <Container14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] h-full items-start not-italic relative shrink-0 w-[341.903px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[20px] text-white w-full">Integrity</p>
      <p className="capitalize font-['Inter:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.55)] w-full">We conduct our business with honesty, transparency, and accountability in every project and partnership.</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute left-0 size-[45.008px] top-0" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.0079 45.0079">
        <g id="Container">
          <path d={svgPaths.p14ae9940} fill="var(--fill-0, #375F9D)" />
          <path d={svgPaths.p1a429f80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="h-full relative shrink-0 w-[45px]">
      <Container15 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] h-full items-start not-italic relative shrink-0 w-[341.903px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[20px] text-white w-full">Exellence</p>
      <p className="capitalize font-['Inter:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.55)] w-full">We strive for the highest standards of quality, performance, and professionalism in everything we do.</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute left-0 size-[45.008px] top-0" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.0079 45.0079">
        <g id="Container">
          <path d={svgPaths.p14ae9940} fill="var(--fill-0, #375F9D)" />
          <path d={svgPaths.pfa52600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="h-full relative shrink-0 w-[45px]">
      <Container16 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] h-full items-start not-italic relative shrink-0 w-[341.903px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[20px] text-white w-full">Innovation</p>
      <p className="capitalize font-['Inter:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.55)] w-full">We continuously seek smarter and more efficient solutions that improve project outcomes and support future growth.</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <div className="bg-gradient-to-b content-stretch flex from-[rgba(255,255,255,0.1)] gap-[14px] h-[170px] items-center justify-center overflow-clip px-[10px] py-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[437px]">
        <Frame16 />
        <Frame15 />
      </div>
      <div className="bg-gradient-to-b content-stretch flex from-[rgba(255,255,255,0.1)] gap-[14px] h-[170px] items-center justify-center overflow-clip px-[10px] py-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[437px]">
        <Frame18 />
        <Frame20 />
      </div>
      <div className="bg-gradient-to-b content-stretch flex from-[rgba(255,255,255,0.1)] gap-[14px] h-[170px] items-center justify-center overflow-clip px-[10px] py-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[437px]">
        <Frame21 />
        <Frame22 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute left-0 size-[45.008px] top-0" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.0079 45.0079">
        <g id="Container">
          <path d={svgPaths.p14ae9940} fill="var(--fill-0, #375F9D)" />
          <path d={svgPaths.p2ddeb900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="h-full relative shrink-0 w-[45px]">
      <Container17 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] h-full items-start not-italic relative shrink-0 w-[341.903px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] min-w-full relative shrink-0 text-[20px] text-white w-[min-content]">Sustainbality</p>
      <p className="capitalize font-['Inter:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.55)] w-[351px]">{`We are committed to responsible development practices that create long-term environmental, `}</p>
    </div>
  );
}

function Icon1() {
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

function Container18() {
  return (
    <div className="absolute bg-[#375f9d] content-stretch flex items-center justify-center left-0 px-[10.386px] rounded-[8.655px] size-[45.008px] top-0" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="h-full relative shrink-0 w-[45px]">
      <Container18 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] h-full items-start not-italic relative shrink-0 w-[341.903px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[20px] text-white w-full">Collaboration</p>
      <p className="capitalize font-['Inter:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.55)] w-full">We conduct our business with honesty, transparency, and accountability in every project and partnership.</p>
    </div>
  );
}

function Icon2() {
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

function Container19() {
  return (
    <div className="absolute bg-[#375f9d] content-stretch flex items-center justify-center left-0 px-[10.386px] rounded-[8.655px] size-[45.008px] top-0" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="h-full relative shrink-0 w-[45px]">
      <Container19 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] h-full items-start not-italic relative shrink-0 w-[341.903px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[20px] text-white w-full">Commitment</p>
      <p className="capitalize font-['Inter:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.55)] w-full">We remain dedicated to delivering projects safely, efficiently, and with a focus on exceeding expectations.</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <div className="bg-gradient-to-b content-stretch flex from-[rgba(255,255,255,0.1)] gap-[14px] h-[170px] items-center justify-center overflow-clip px-[10px] py-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[437px]">
        <Frame24 />
        <Frame25 />
      </div>
      <div className="bg-gradient-to-b content-stretch flex from-[rgba(255,255,255,0.1)] gap-[14px] h-[170px] items-center justify-center overflow-clip px-[10px] py-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[437px]">
        <Frame26 />
        <Frame27 />
      </div>
      <div className="bg-gradient-to-b content-stretch flex from-[rgba(255,255,255,0.1)] gap-[14px] h-[170px] items-center justify-center overflow-clip px-[10px] py-[20px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-[437px]">
        <Frame28 />
        <Frame29 />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[1359px]">
      <Frame17 />
      <Frame23 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-[#212121] content-stretch flex flex-col gap-[55px] items-center py-[60px] relative shrink-0 w-full">
      <Container13 />
      <Frame19 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffce1b] text-[36px] text-center w-[840px]">
        <p className="leading-[normal]">What We Do</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[1280px]" data-name="Container">
      <Heading2 />
      <div className="bg-white h-[4px] relative shrink-0 w-[96px]" data-name="Background" />
    </div>
  );
}

function AirportInfrastructure() {
  return (
    <div className="absolute inset-0 opacity-60" data-name="Airport Infrastructure">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[115.62%] left-[-0.05%] max-w-none top-[-7.75%] w-full" src={imgAirportInfrastructure} />
        </div>
        <div className="absolute bg-gradient-to-t from-[25.586%] from-[rgba(0,0,0,0.4)] inset-0 to-[rgba(102,102,102,0)]" />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[0.7px] uppercase w-full">
        <p className="leading-[20px] mb-0">{`AIRPORT & AVIATION`}</p>
        <p className="leading-[20px]">INFRASTRUCTURE</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-end p-[24px]" data-name="Container">
      <Heading3 />
    </div>
  );
}

function SmartCityDevelopment() {
  return (
    <div className="absolute inset-0 opacity-60" data-name="Smart City Development">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[115.62%] left-0 max-w-none top-[-7.81%] w-full" src={imgSmartCityDevelopment} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[0.7px] uppercase w-full">
        <p className="leading-[20px]">SMART CITY DEVELOPMENT</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-end p-[24px]" data-name="Container">
      <Heading4 />
    </div>
  );
}

function PublicInfrastructure() {
  return (
    <div className="absolute inset-0 opacity-60" data-name="Public Infrastructure">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[233.41%] left-[0.08%] max-w-none top-[-0.11%] w-full" src={imgPublicInfrastructure} />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[0.7px] uppercase w-full">
        <p className="leading-[20px]">PUBLIC INFRASTRUCTURE</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-end p-[24px]" data-name="Container">
      <Heading5 />
    </div>
  );
}

function AffordableHousing() {
  return (
    <div className="absolute inset-0 opacity-60" data-name="Affordable Housing">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[115.62%] left-0 max-w-none top-[-7.81%] w-full" src={imgAffordableHousing} />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[0.7px] uppercase w-full">
        <p className="leading-[20px]">AFFORDABLE HOUSING</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-end p-[24px]" data-name="Container">
      <Heading6 />
    </div>
  );
}

function EnergyInfrastructure() {
  return (
    <div className="absolute inset-0 opacity-60" data-name="Energy Infrastructure">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[115.62%] left-0 max-w-none top-[-7.81%] w-full" src={imgEnergyInfrastructure} />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[0.7px] uppercase w-full">
        <p className="leading-[20px] mb-0">{`ENERGY & UTILITY`}</p>
        <p className="leading-[20px]">INFRASTRUCTURE</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-end p-[24px]" data-name="Container">
      <Heading7 />
    </div>
  );
}

function HelipadDevelopment() {
  return (
    <div className="absolute inset-0 opacity-60" data-name="Helipad Development">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHelipadDevelopment} />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[0.7px] uppercase w-full">
        <p className="leading-[20px]">HELIPAD DEVELOPMENT</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-end p-[24px]" data-name="Container">
      <Heading8 />
    </div>
  );
}

function LedStreetLighting() {
  return (
    <div className="absolute inset-0 opacity-60" data-name="LED Street Lighting">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[115.62%] left-0 max-w-none top-[-7.81%] w-full" src={imgLedStreetLighting} />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[0.7px] uppercase w-full">
        <p className="leading-[20px] mb-0">LED STREET LIGHTING</p>
        <p className="leading-[20px]">SOLUTIONS</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-end p-[24px]" data-name="Container">
      <Heading9 />
    </div>
  );
}

function UrbanDevelopment() {
  return (
    <div className="absolute inset-0 opacity-60" data-name="Urban Development">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUrbanDevelopment} />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[0.7px] uppercase w-full">
        <p className="leading-[20px] mb-0">{`URBAN & COMMUNITY`}</p>
        <p className="leading-[20px]">DEVELOPMENT</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-end p-[24px]" data-name="Container">
      <Heading10 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-center flex flex-wrap gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-black h-[256px] overflow-clip relative rounded-[12px] shrink-0 w-[326px]" data-name="Card 1">
        <AirportInfrastructure />
        <Container23 />
      </div>
      <div className="bg-black h-[256px] overflow-clip relative rounded-[12px] shrink-0 w-[326px]" data-name="Card 2">
        <SmartCityDevelopment />
        <Container24 />
      </div>
      <div className="bg-black h-[256px] overflow-clip relative rounded-[12px] shrink-0 w-[326px]" data-name="Card 3">
        <PublicInfrastructure />
        <Container25 />
      </div>
      <div className="bg-black h-[256px] overflow-clip relative rounded-[12px] shrink-0 w-[326px]" data-name="Card 4">
        <AffordableHousing />
        <Container26 />
      </div>
      <div className="bg-black h-[256px] overflow-clip relative rounded-[12px] shrink-0 w-[326px]" data-name="Card 5">
        <EnergyInfrastructure />
        <Container27 />
      </div>
      <div className="bg-black h-[256px] overflow-clip relative rounded-[12px] shrink-0 w-[326px]" data-name="Card 6">
        <HelipadDevelopment />
        <Container28 />
      </div>
      <div className="bg-black h-[256px] overflow-clip relative rounded-[12px] shrink-0 w-[326px]" data-name="Card 7">
        <LedStreetLighting />
        <Container29 />
      </div>
      <div className="bg-black h-[256px] overflow-clip relative rounded-[12px] shrink-0 w-[326px]" data-name="Card 8">
        <UrbanDevelopment />
        <Container30 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="max-w-[1400px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[43px] items-center justify-center max-w-[inherit] px-[24px] relative size-full">
          <Container21 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function SectionSolutionsGrid() {
  return (
    <div className="bg-[#212121] content-stretch flex flex-col items-center justify-center py-[96px] relative shrink-0 w-full" data-name="Section - Solutions Grid">
      <Container20 />
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white w-full">
          <p className="leading-[40px]">250+</p>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffce1b] text-[12px] tracking-[0.96px] w-full">
          <p className="leading-[normal] mb-0">PROJECTS</p>
          <p className="leading-[normal]">DELIVERED</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="VerticalBorder">
      <div aria-hidden className="absolute border-[#f3f4f6] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[26px] relative size-full">
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white w-full">
          <p className="leading-[40px]">25+</p>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffce1b] text-[12px] tracking-[0.96px] w-full">
          <p className="leading-[normal] mb-0">STATES</p>
          <p className="leading-[normal]">PRESENCE</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder1() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="VerticalBorder">
      <div aria-hidden className="absolute border-[#f3f4f6] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[26px] relative size-full">
        <Container34 />
        <Container35 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white w-full">
          <p className="leading-[40px]">200+</p>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffce1b] text-[12px] tracking-[0.96px] w-full">
          <p className="leading-[normal] mb-0">INDUSTRY</p>
          <p className="leading-[normal]">EXPERTS</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder2() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="VerticalBorder">
      <div aria-hidden className="absolute border-[#f3f4f6] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[26px] relative size-full">
        <Container36 />
        <Container37 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white w-full">
          <p className="leading-[40px]">100+</p>
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffce1b] text-[12px] tracking-[0.96px] w-full">
          <p className="leading-[normal] mb-0">STRATEGIC</p>
          <p className="leading-[normal]">PARTNERS</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder3() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-start shrink-0" data-name="VerticalBorder">
      <div aria-hidden className="absolute border-[#f3f4f6] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[26px] relative size-full">
        <Container38 />
        <Container39 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white w-full">
          <p className="leading-[40px]">5M+</p>
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffce1b] text-[12px] tracking-[0.96px] w-full">
          <p className="leading-[normal] mb-0">LIVES</p>
          <p className="leading-[normal]">IMPACTED</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder4() {
  return (
    <div className="col-5 justify-self-stretch relative row-1 self-start shrink-0" data-name="VerticalBorder">
      <div aria-hidden className="absolute border-[#f3f4f6] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[26px] relative size-full">
        <Container40 />
        <Container41 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(5,minmax(0,1fr))] grid-rows-[_80px] relative shrink-0 w-[912px]" data-name="Container">
      <VerticalBorder />
      <VerticalBorder1 />
      <VerticalBorder2 />
      <VerticalBorder3 />
      <VerticalBorder4 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0 w-full">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffce1b] text-[36px] w-[432px]">
        <p className="leading-[normal] mb-0">Impacting Lives.</p>
        <p className="leading-[normal]">Building India.</p>
      </div>
      <Container31 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0 w-full">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0b1f3a] text-[24px] w-full">
        <p className="leading-[normal]">OUR IMPACT</p>
      </div>
      <Frame39 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffce1b] text-[36px] text-center w-full">
        <p className="leading-[normal]">how we work</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading11 />
      <div className="bg-black h-[4px] relative shrink-0 w-[96px]" data-name="Background" />
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-[#375f9d] content-stretch flex flex-col items-center justify-center px-[10px] py-[8px] relative rounded-[50px] shrink-0 w-[39px]">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-full">
        <p className="leading-[24px]">01</p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame42 />
      <div className="flex h-px items-center justify-center relative shrink-0 w-[76px]">
        <div className="flex-none rotate-[0.75deg]">
          <div className="h-0 relative w-[76.007px]">
            <div className="absolute inset-[-7.36px_-1.32%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.0066 14.7279">
                <path d={svgPaths.p3f7b5b00} fill="var(--stroke-0, #FFCE1B)" id="Arrow 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full">
      <Frame49 />
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Discover</p>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[260px]">
      <Frame63 />
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-full">
        <p className="leading-[24px] mb-0">We understand project goals, site</p>
        <p className="leading-[24px] mb-0">conditions, and stakeholder</p>
        <p className="leading-[24px]">expectations.</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#375f9d] content-stretch flex flex-col items-center justify-center px-[10px] py-[8px] relative rounded-[50px] shrink-0 w-[39px]">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">02</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-center relative shrink-0 w-full">
      <Frame43 />
      <div className="flex h-px items-center justify-center relative shrink-0 w-[76px]">
        <div className="flex-none rotate-[0.75deg]">
          <div className="h-0 relative w-[76.007px]">
            <div className="absolute inset-[-7.36px_-1.32%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.0066 14.7279">
                <path d={svgPaths.p3f7b5b00} fill="var(--stroke-0, #FFCE1B)" id="Arrow 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[240px]">
        <p className="leading-[24px]">We create detailed plans and frameworks to ensure efficiency and feasibility.</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Strategize</p>
      </div>
      <Frame47 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-[243px]">
      <Frame50 />
      <Frame51 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-[#375f9d] content-stretch flex flex-col items-center justify-center px-[10px] py-[8px] relative rounded-[50px] shrink-0 w-[39px]">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">03</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-center relative shrink-0 w-full">
      <Frame44 />
      <div className="flex h-px items-center justify-center relative shrink-0 w-[76px]">
        <div className="flex-none rotate-[0.75deg]">
          <div className="h-0 relative w-[76.007px]">
            <div className="absolute inset-[-7.36px_-1.32%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.0066 14.7279">
                <path d={svgPaths.p3f7b5b00} fill="var(--stroke-0, #FFCE1B)" id="Arrow 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-[261px]">
      <Frame52 />
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Execute</p>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[270px]">
      <Frame65 />
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">
        <p className="leading-[24px] mb-0">We implement with precision using</p>
        <p className="leading-[24px] mb-0">best practices, technology, and</p>
        <p className="leading-[24px]">experienced teams.</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-[#375f9d] content-stretch flex flex-col items-center justify-center px-[10px] py-[8px] relative rounded-[50px] shrink-0 w-[39px]">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">04</p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame45 />
      <div className="flex h-px items-center justify-center relative shrink-0 w-[76px]">
        <div className="flex-none rotate-[0.75deg]">
          <div className="h-0 relative w-[76.007px]">
            <div className="absolute inset-[-7.36px_-1.32%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.0066 14.7279">
                <path d={svgPaths.p3f7b5b00} fill="var(--stroke-0, #FFCE1B)" id="Arrow 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full">
      <Frame54 />
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Deliver</p>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[243px]">
      <Frame67 />
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-full">
        <p className="leading-[24px] mb-0">We ensure quality, safety, and</p>
        <p className="leading-[24px]">timely delivery at every stage.</p>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-[#375f9d] content-stretch flex flex-col items-center justify-center px-[10px] py-[8px] relative rounded-[50px] shrink-0 w-[39px]">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">05</p>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame46 />
      <div className="flex h-px items-center justify-center relative shrink-0 w-[76px]">
        <div className="flex-none rotate-[0.75deg]">
          <div className="h-0 relative w-[76.007px]">
            <div className="absolute inset-[-7.36px_-1.32%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.0066 14.7279">
                <path d={svgPaths.p3f7b5b00} fill="var(--stroke-0, #FFCE1B)" id="Arrow 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full">
      <Frame55 />
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Sustain</p>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[266px]">
      <Frame69 />
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-full">
        <p className="leading-[24px] mb-0">We build infrastructure that</p>
        <p className="leading-[24px]">delivers long-term value and future readiness.</p>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex gap-[20px] items-start justify-center relative shrink-0">
      <Frame64 />
      <Frame53 />
      <Frame66 />
      <Frame68 />
      <Frame70 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame251} />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[55px] items-center px-[20px] py-[80px] relative size-full">
          <Container42 />
          <Frame71 />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute h-[49px] left-0 top-px w-[73px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame127} />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[62px] relative shrink-0 w-[224px]" data-name="Container">
      <Frame12 />
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

function Icon3() {
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

function Icon4() {
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

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1064)" id="Icon">
          <path d={svgPaths.p22916300} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2c68500} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11.6667 4.33333H11.6733" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_1064">
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
          <Icon3 />
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0.26)] relative rounded-[8px] shrink-0 size-[36px]" data-name="Link">
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] py-px relative size-full">
          <Icon4 />
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0.26)] relative rounded-[8px] shrink-0 size-[36px]" data-name="Link">
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] py-px relative size-full">
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-full items-start relative shrink-0">
      <Container44 />
      <Paragraph />
      <Container45 />
    </div>
  );
}

function Heading12() {
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

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[289.125px] items-start relative shrink-0 w-[203px]" data-name="Container">
      <Heading12 />
      <List />
    </div>
  );
}

function Heading13() {
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

function Container47() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[289.125px] items-start relative shrink-0 w-[203px]" data-name="Container">
      <Heading13 />
      <List1 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex h-[35.5px] items-start pb-[13px] relative shrink-0 w-full" data-name="Heading 4">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.26)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] font-bold leading-[22.5px] min-w-px relative text-[18px] text-black">Contact</p>
    </div>
  );
}

function Icon6() {
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
        <Icon6 />
        <Container51 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1101)" id="Icon">
          <path d={svgPaths.p2a44c680} id="Vector" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_1101">
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
        <Icon7 />
        <Container53 />
      </div>
    </div>
  );
}

function Icon8() {
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
        <Icon8 />
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
      <Heading14 />
      <Container49 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Frame13 />
      </div>
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
        <Frame41 />
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

function Frame14() {
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

function Frame7({ onNavigateHome }: AboutUsProps) {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <button className="bg-transparent border-0 content-stretch cursor-pointer flex flex-col items-start justify-center p-[10px] relative shrink-0" onClick={onNavigateHome} type="button">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#404040] text-[16px] whitespace-nowrap">Home</p>
        <Frame />
      </button>
      <div className="content-stretch flex flex-col items-start justify-center p-[10px] relative shrink-0">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#404040] text-[16px] whitespace-nowrap">About Us</p>
        <Frame1 />
      </div>
      <div className="content-stretch flex flex-col items-start justify-center p-[10px] relative shrink-0">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#404040] text-[16px] whitespace-nowrap">Services</p>
        <Frame2 />
      </div>
      <div className="content-stretch flex flex-col items-start justify-center p-[10px] relative shrink-0">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#404040] text-[16px] whitespace-nowrap">Projects</p>
        <Frame3 />
      </div>
      <div className="content-stretch flex flex-col items-start justify-center p-[10px] relative shrink-0">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#404040] text-[16px] whitespace-nowrap">Sustainability</p>
        <Frame4 />
      </div>
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

export default function AboutUs({ onNavigateHome }: AboutUsProps) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative size-full" data-name="ABOUT US">
      <Frame30 />
      <Frame37 />
      <Frame34 />
      <Frame38 />
      <SectionSolutionsGrid />
      <div className="content-stretch flex flex-col h-[344px] items-center justify-center px-[24px] py-[96px] relative shrink-0 w-[1440px]" data-name="Impact Section">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[221.51%] left-[-0.03%] max-w-none top-[-0.09%] w-full" src={imgImpactSection} />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.51)] inset-0" />
        </div>
        <Frame40 />
      </div>
      <Frame48 />
      <div className="h-[486px] relative rounded-[6px] shrink-0 w-[1440px]" data-name="FOOTER">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <Footer />
        </div>
        <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
      <div className="absolute backdrop-blur-[12.5px] bg-white content-stretch drop-shadow-[-20px_68px_10px_rgba(0,0,0,0),-13px_43px_9px_rgba(0,0,0,0.01),-7px_24px_7.5px_rgba(0,0,0,0.04),-3px_11px_5.5px_rgba(0,0,0,0.07),-1px_3px_3px_rgba(0,0,0,0.08)] flex items-center justify-between left-0 px-[120px] py-[10px] top-0 w-[1440px]" data-name="NAV BAR">
        <div aria-hidden className="absolute border border-[rgba(64,64,64,0.5)] border-solid inset-0 pointer-events-none" />
        <Frame14 />
        <Frame7 onNavigateHome={onNavigateHome} />
        <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-[10px] relative rounded-[4px] shrink-0">
          <div aria-hidden className="absolute border-[#ffce1b] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#404040] text-[14px] text-center whitespace-nowrap">Get Consultation</p>
        </div>
      </div>
    </div>
  );
}
