import svgPaths from "./svg-0199klzz0k";
import imgFrame261 from "./3ff1ce590410f2da4862b33d06404660ec0e7a65.png";
import imgAb6AXuDvN1Qzvim0EFxc9IxOzfTeJw2MXpkbt3On4570AR1XXiFwxqyz3YwxBxX5Uzatp6D1YUNvCFnOhPg28UClTbgMQcDhXvWxP81Yh0JlyaJr6Gov2Nle5AXixDEc9SqWWSlwcs2IePrFsLxcWgmfhuJqIfbi9R3RGugy9P9MWtEl7XqXxBebYprsRrOwb1OaxePcfrFz8FwYn6Wdaf1HVsSq4HzlHEjPkhHatoiflmvxq0EHutUQtIjI9LDfpWw1OsW13W2DyKo from "./3d34e7fd5b4bc7ce76b764d4b677991c3aeee310.png";
import imgFrame277 from "./f5c723ac516ab16778bbc4a1a837f54ecbb670af.png";
import imgFooter from "./ff5318d16dd5f93f2647437a73bc8688b87582ae.png";
import imgFrame127 from "./c20da46eb86065efabefe8dda3d480f08dfffacc.png";

function Overlay() {
  return (
    <div className="bg-[rgba(55,95,157,0.6)] content-stretch flex items-start px-[12px] py-[4px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">{`LAND SURVEYING & DGPS MAPPING`}</p>
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[273.14px]" data-name="Margin">
      <Container />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Margin />
      <div className="[word-break:break-word] capitalize font-['Sora:ExtraBold',sans-serif] font-extrabold leading-[0] min-w-full relative shrink-0 text-[0px] text-white tracking-[-1.28px] w-[min-content]">
        <p className="mb-0 text-[64px]">
          <span className="leading-[1.1] text-[#375f9d]">solar</span>
          <span className="leading-[1.1] text-white">/wind power</span>
        </p>
        <p className="leading-[1.1] text-[64px]">infrastructure</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
      <Frame24 />
      <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.75)] w-[762px]">Solar / Wind power infrastructure development refers to the process of building and expanding facilities that convert sunlight or wind into usable electricity. This includes large-scale solar and wind parks, grid infrastructure, and the necessary equipment and technologies for efficient and reliable power generation and distribution.</p>
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

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-[914px]">
      <Frame25 />
      <Frame22 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p24991e60} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Background">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <Svg />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-white whitespace-nowrap">
        <p className="leading-[36px]">13+</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white uppercase w-[156px]">
        <p className="leading-[15px] mb-0">Site Selection and</p>
        <p className="leading-[15px]">Preparation</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[156px]" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[66px] items-center relative shrink-0 w-[256px]" data-name="Container">
      <Background />
      <Container2 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p1ecd3100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Background">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <Svg1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-white whitespace-nowrap">
        <p className="leading-[36px]">9+</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap">
        <p className="leading-[15px] mb-0">Equipment</p>
        <p className="leading-[15px]">Installation</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[73px]" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[16px] h-[66px] items-center relative shrink-0 w-[256px]" data-name="Container">
      <Background1 />
      <Container6 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.pc4e4a90} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Background">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <Svg2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-white whitespace-nowrap">
        <p className="leading-[36px]">500+</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap">
        <p className="leading-[15px]">Grid Integration</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[95px]" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[16px] h-[66px] items-center relative shrink-0 w-[256px]" data-name="Container">
      <Background2 />
      <Container10 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p306d3840} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Background">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <Svg3 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">
        <p className="leading-[32px]">Pan India</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap">
        <p className="leading-[15px] mb-0">Monitoring and</p>
        <p className="leading-[15px]">Maintenance</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[108.16px]" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[16px] h-[66px] items-center relative shrink-0 w-[256px]" data-name="Container">
      <Background3 />
      <Container14 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[22px] items-center justify-center px-[22px] py-[16px] relative rounded-[4px] shrink-0">
      <Container1 />
      <Container5 />
      <Container9 />
      <Container13 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[38px] items-start left-[40px] top-[calc(50%-2.5px)]">
      <Frame26 />
      <Frame23 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[749px] overflow-clip relative shrink-0 w-[1440px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame261} />
      <Frame27 />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(55,95,157,0.6)] content-stretch flex items-start px-[12px] py-[8px] relative rounded-[2px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.96px] whitespace-nowrap">
        <p className="leading-[normal]">greenery</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[591px]" data-name="Heading 2">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#111827] text-[48px] w-full">
        <p className="leading-[60px] mb-0">Engineering Sustainable</p>
        <p className="leading-[60px] mb-0">Future with Renewable</p>
        <p className="leading-[60px]">Precision</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[18px] whitespace-nowrap">
        <p className="leading-[32px] mb-0">NANDA KAILASH designs and implements large-scale renewable</p>
        <p className="leading-[32px] mb-0">energy assets that define the next generation of global power.</p>
        <p className="leading-[32px] mb-0">Our solar and wind infrastructure solutions are engineered for</p>
        <p className="leading-[32px] mb-0">maximum efficiency, utilizing advanced site analysis and</p>
        <p className="leading-[32px]">structural optimization.</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[18px] w-full">
        <p className="leading-[32px]">From offshore wind farms to desert-scale solar arrays, we manage the entire lifecycle including environmental compliance, grid synchronization, and long-term asset management.</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container20 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start py-[20px] relative shrink-0 w-[689px]">
      <Overlay1 />
      <Heading />
      <Container17 />
      <Container19 />
    </div>
  );
}

function Ab6AXuDvN1Qzvim0EFxc9IxOzfTeJw2MXpkbt3On4570AR1XXiFwxqyz3YwxBxX5Uzatp6D1YUNvCFnOhPg28UClTbgMQcDhXvWxP81Yh0JlyaJr6Gov2Nle5AXixDEc9SqWWSlwcs2IePrFsLxcWgmfhuJqIfbi9R3RGugy9P9MWtEl7XqXxBebYprsRrOwb1OaxePcfrFz8FwYn6Wdaf1HVsSq4HzlHEjPkhHatoiflmvxq0EHutUQtIjI9LDfpWw1OsW13W2DyKo() {
  return (
    <div className="h-[579px] relative rounded-[24px] shrink-0 w-[584px]" data-name="AB6AXuDvN1qzvim0eFXC9IxOZFTeJw2mXpkbt3ON4570aR1xXiFWXQYZ3YwxBxX5UZATP6d1_yUNvCFnOhPg28uClTbgMQcDhXV-wxP81yh0jlyaJr6gov2nle5aXixDEc9SqW-wSLWCS2IePrFSLxcWGMFHUJqIfbi9R3rGUGY9_P9mWtEl7XQXxBebYprsRROwb1OaxePcfrFZ8fwYn6WDAF1hVSSq4hzlHEjPkhHatoiflmvxq0eHutUQtIjI9lDfpWw1OsW13W2dyKo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgAb6AXuDvN1Qzvim0EFxc9IxOzfTeJw2MXpkbt3On4570AR1XXiFwxqyz3YwxBxX5Uzatp6D1YUNvCFnOhPg28UClTbgMQcDhXvWxP81Yh0JlyaJr6Gov2Nle5AXixDEc9SqWWSlwcs2IePrFsLxcWgmfhuJqIfbi9R3RGugy9P9MWtEl7XqXxBebYprsRrOwb1OaxePcfrFz8FwYn6Wdaf1HVsSq4HzlHEjPkhHatoiflmvxq0EHutUQtIjI9LDfpWw1OsW13W2DyKo} />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[70px] py-[30px] relative size-full">
          <Frame11 />
          <Ab6AXuDvN1Qzvim0EFxc9IxOzfTeJw2MXpkbt3On4570AR1XXiFwxqyz3YwxBxX5Uzatp6D1YUNvCFnOhPg28UClTbgMQcDhXvWxP81Yh0JlyaJr6Gov2Nle5AXixDEc9SqWWSlwcs2IePrFsLxcWgmfhuJqIfbi9R3RGugy9P9MWtEl7XqXxBebYprsRrOwb1OaxePcfrFz8FwYn6Wdaf1HVsSq4HzlHEjPkhHatoiflmvxq0EHutUQtIjI9LDfpWw1OsW13W2DyKo />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffce1b] text-[36px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Development Process for Solar / Wind Energy Power Station</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[1280px]" data-name="Container">
      <Heading1 />
      <div className="bg-white h-[4px] relative shrink-0 w-[96px]" data-name="Background" />
    </div>
  );
}

function Line() {
  return (
    <div className="absolute bg-[#ffce1b] h-[24px] left-[463px] top-[42px] w-[3px]" data-name="LINE">
      <div aria-hidden className="absolute border border-[#fffa5d] border-solid inset-[-1px] pointer-events-none shadow-[-0.25px_-0.25px_1px_0px_#d6c100,0.25px_0.25px_1px_0px_#d6c100,0px_0px_3px_0px_rgba(255,250,93,0.6),0px_0px_5px_0px_rgba(255,250,93,0.4),0px_0px_4px_0px_rgba(210,204,0,0.3)]" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute h-0 left-[463.5px] opacity-0 top-[21px] w-px">
      <div aria-hidden className="absolute border border-[#fffa5d] border-solid inset-[-1px] pointer-events-none shadow-[-0.25px_-0.25px_1px_0px_#d6c100,0.25px_0.25px_1px_0px_#d6c100,0px_0px_3px_0px_rgba(255,250,93,0.6),0px_0px_5px_0px_rgba(255,250,93,0.4),0px_0px_4px_0px_rgba(210,204,0,0.3)]" />
      <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.1)] bottom-[-599px] left-1/2 top-0 w-px" data-name="Central Line" />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#e9c349] text-[24px] text-right whitespace-nowrap">
        <p className="leading-[normal]">Site Selection</p>
      </div>
      <Frame19 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4c6cf] text-[16px] text-right w-[424px]">
        <p className="leading-[26px]">Land is selected and prepared for solar panel or wind turbine installation, including clearing and geotechnical assessments.</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[424px]" data-name="Container">
      <Heading2 />
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p1869180} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#375f9d] content-stretch drop-shadow-[0px_0px_10px_rgba(233,195,73,0.5)] flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Background+Shadow">
      <Container24 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-0 right-0 top-0">
      <Container22 />
      <BackgroundShadow />
    </div>
  );
}

function Container25() {
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

function BackgroundBorder() {
  return (
    <div className="bg-[#375f9d] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[48px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(233,195,73,0.4)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container25 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#e9c349] text-[24px] w-full">
        <p className="leading-[normal]">Equipment Installation</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4c6cf] text-[16px] w-full">
        <p className="leading-[26px]">Solar panels / wind turbines, inverters, and other equipment are installed according to project specifications.</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[424px]" data-name="Container">
      <Heading3 />
      <Container27 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center justify-end left-[1.5px] right-[-1.5px] top-[179px]">
      <BackgroundBorder />
      <Container26 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#e9c349] text-[24px] text-right whitespace-nowrap">
        <p className="leading-[normal]">Grid Integration</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4c6cf] text-[16px] text-right w-[424px]">
        <p className="leading-[26px]">The solar / wind power generation system is connected to the electricity grid, allowing for distribution to consumers.</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[424px]" data-name="Container">
      <Heading4 />
      <Container29 />
    </div>
  );
}

function Container30() {
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

function BackgroundBorder1() {
  return (
    <div className="bg-[#375f9d] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[48px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(233,195,73,0.4)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container30 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-0 right-0 top-[368px]">
      <Container28 />
      <BackgroundBorder1 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[14.15px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14.15">
        <g id="Container">
          <path d={svgPaths.p793b600} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#375f9d] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[48px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(233,195,73,0.4)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container31 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#e9c349] text-[24px] w-full">
        <p className="leading-[normal]">Monitoring</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4c6cf] text-[16px] w-full">
        <p className="leading-[26px]">Ongoing monitoring and maintenance ensure optimal performance and reliability of the solar / wind power infrastructure.</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[424px]" data-name="Container">
      <Heading5 />
      <Container33 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center justify-end left-0 right-0 top-[552px]">
      <BackgroundBorder2 />
      <Container32 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_4.667px_rgba(47,182,122,0.25)] flex flex-col gap-[55px] items-center py-[80px] relative shrink-0 w-full">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#212121] inset-0" />
        <div className="absolute backdrop-blur-[14.253px] inset-0 opacity-40 overflow-hidden">
          <img alt="" className="absolute h-[239.98%] left-[-2.1%] max-w-none top-[-26.99%] w-[229.61%]" src={imgFrame277} />
        </div>
      </div>
      <Container21 />
      <div className="h-[640px] relative shrink-0 w-[925px]">
        <Line />
        <Frame15 />
        <Frame16 />
        <Frame17 />
        <Frame18 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffce1b] text-[36px] text-center w-[840px]">
        <p className="leading-[normal]">Key Infrastructure Components</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[1280px]" data-name="Container">
      <Heading6 />
      <div className="bg-white h-[4px] relative shrink-0 w-[96px]" data-name="Background" />
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 size-[33px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        <g id="Container">
          <path d={svgPaths.p6aaaf10} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#375f9d] relative rounded-[8.655px] shrink-0 size-[45.008px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10.386px] relative size-full">
        <Container37 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
          <p className="leading-[32px]">Solar/Wind Parks</p>
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c4c6cf] text-[16px] w-full">
          <p className="leading-[24px] mb-0">Large-scale land</p>
          <p className="leading-[24px] mb-0">development optimized for</p>
          <p className="leading-[24px] mb-0">maximum energy capture</p>
          <p className="leading-[24px] mb-0">and environmental</p>
          <p className="leading-[24px]">harmony.</p>
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-gradient-to-b col-1 from-[rgba(255,255,255,0.1)] h-[322px] justify-self-stretch relative rounded-[10.386px] row-1 shrink-0 to-[rgba(153,153,153,0.1)]" data-name="Card 1">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-start justify-center pl-[20px] pr-[10px] py-[20px] relative size-full">
          <Container36 />
          <Heading7 />
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="Container">
          <path d={svgPaths.p238f1900} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[#375f9d] relative rounded-[8.655px] shrink-0 size-[45.008px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10.386px] relative size-full">
        <Container40 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
          <p className="leading-[32px] mb-0">Grid</p>
          <p className="leading-[32px]">Infrastructure</p>
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c4c6cf] text-[16px] w-full">
          <p className="leading-[24px] mb-0">High-voltage transmission</p>
          <p className="leading-[24px] mb-0">lines and substation hubs</p>
          <p className="leading-[24px] mb-0">designed for minimal loss</p>
          <p className="leading-[24px]">across distances.</p>
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-gradient-to-b col-2 from-[rgba(255,255,255,0.1)] h-[322px] justify-self-stretch relative rounded-[10.386px] row-1 shrink-0 to-[rgba(153,153,153,0.1)]" data-name="Card 2">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-start justify-center pl-[20px] pr-[10px] py-[20px] relative size-full">
          <Container39 />
          <Heading8 />
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 size-[33px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        <g id="Container">
          <path d={svgPaths.p5c25b80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[#375f9d] relative rounded-[8.655px] shrink-0 size-[45.008px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10.386px] relative size-full">
        <Container43 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
          <p className="leading-[32px]">Equipment</p>
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c4c6cf] text-[16px] w-full">
          <p className="leading-[24px] mb-0">Procurement of Tier-1</p>
          <p className="leading-[24px] mb-0">hardware components</p>
          <p className="leading-[24px] mb-0">tested for extreme weather</p>
          <p className="leading-[24px]">durability.</p>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-gradient-to-b col-3 from-[rgba(255,255,255,0.1)] h-[322px] justify-self-stretch relative rounded-[10.386px] row-1 shrink-0 to-[rgba(153,153,153,0.1)]" data-name="Card 3">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-start justify-center pl-[20px] pr-[10px] py-[20px] relative size-full">
          <Container42 />
          <Heading9 />
          <Container44 />
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[28.5px] relative shrink-0 w-[33px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 28.5">
        <g id="Container">
          <path d={svgPaths.pbd21200} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#375f9d] relative rounded-[8.655px] shrink-0 size-[45.008px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10.386px] relative size-full">
        <Container46 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
          <p className="leading-[32px]">Smart Grid Tech</p>
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c4c6cf] text-[16px] w-full">
          <p className="leading-[24px] mb-0">AI-driven energy distribution</p>
          <p className="leading-[24px] mb-0">systems that adapt to real-</p>
          <p className="leading-[24px] mb-0">time consumption and</p>
          <p className="leading-[24px]">supply changes.</p>
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-gradient-to-b col-4 from-[rgba(255,255,255,0.1)] h-[322px] justify-self-stretch relative rounded-[10.386px] row-1 shrink-0 to-[rgba(153,153,153,0.1)]" data-name="Card 4">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-start justify-center pl-[20px] pr-[10px] py-[20px] relative size-full">
          <Container45 />
          <Heading10 />
          <Container47 />
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_322px] relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function SectionKeyComponentsGrid() {
  return (
    <div className="bg-[#212121] relative shrink-0 w-full" data-name="Section - KEY COMPONENTS GRID">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[55px] items-center justify-center px-[64px] py-[128px] relative size-full">
          <Container34 />
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffce1b] text-[36px] text-center w-[840px]">
        <p className="leading-[normal]">Integrated IoT Monitoring Systems</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 w-[1280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center relative size-full">
        <Heading11 />
        <div className="bg-white h-[4px] relative shrink-0 w-[96px]" data-name="Background" />
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.1)] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[20px] py-[25px] relative size-full">
        <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bacac4] text-[18px] text-center w-[988px]">
          <p className="leading-[32px]">{`The Internet of Things (IoT) describes a network of physical devices ("things") connected to the internet, capable of collecting and exchanging data. These devices range from household objects to industrial tools and are equipped with sensors, software, and other technologies to enable communication and data sharing.`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#212121] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center pb-[80px] pt-[81px] px-[10px] relative size-full">
          <Container48 />
          <Frame28 />
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

function Container50() {
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

function Icon1() {
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

function Icon2() {
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

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_832)" id="Icon">
          <path d={svgPaths.p22916300} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2c68500} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11.6667 4.33333H11.6733" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
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

function Container51() {
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
          <Icon1 />
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
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-full items-start relative shrink-0">
      <Container50 />
      <Paragraph />
      <Container51 />
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

function Container52() {
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

function Container53() {
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

function Icon4() {
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
        <Icon4 />
        <Container57 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_826)" id="Icon">
          <path d={svgPaths.p2a44c680} id="Vector" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_826">
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
        <Icon5 />
        <Container59 />
      </div>
    </div>
  );
}

function Icon6() {
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
        <Icon6 />
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
      <Heading14 />
      <Container55 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Frame9 />
      </div>
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
        <Frame13 />
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

function Frame7() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="content-stretch flex flex-col items-start justify-center p-[10px] relative shrink-0">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#404040] text-[16px] whitespace-nowrap">Home</p>
        <Frame />
      </div>
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

export default function SoloarWind() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative size-full" data-name="SOLOAR WIND">
      <Frame14 />
      <Frame12 />
      <Frame20 />
      <SectionKeyComponentsGrid />
      <Frame21 />
      <div className="h-[486px] relative rounded-[6px] shrink-0 w-[1440px]" data-name="FOOTER">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <Footer />
        </div>
        <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
      <div className="absolute backdrop-blur-[12.5px] bg-white content-stretch drop-shadow-[-20px_68px_10px_rgba(0,0,0,0),-13px_43px_9px_rgba(0,0,0,0.01),-7px_24px_7.5px_rgba(0,0,0,0.04),-3px_11px_5.5px_rgba(0,0,0,0.07),-1px_3px_3px_rgba(0,0,0,0.08)] flex items-center justify-between left-0 px-[120px] py-[10px] top-0 w-[1440px]" data-name="NAV BAR">
        <div aria-hidden className="absolute border border-[rgba(64,64,64,0.5)] border-solid inset-0 pointer-events-none" />
        <Frame10 />
        <Frame7 />
        <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-[10px] relative rounded-[4px] shrink-0">
          <div aria-hidden className="absolute border-[#ffce1b] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#404040] text-[14px] text-center whitespace-nowrap">Get Consultation</p>
        </div>
      </div>
    </div>
  );
}
