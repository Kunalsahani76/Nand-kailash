import svgPaths from "./svg-ir258knxg6";
import imgFrame261 from "./9581c1df52e5cbcdc283bbd4f517a12ffaf69d49.png";
import imgAb6AXuDcKAzknQAlWPfReUSvHfmbl4TfTsTolkWmPwXQdxe6MxlKjfHh0Dc7L436UksuepyVux5DIrHmhwxbaZDsptK3FyMjv2CsXt46SLhlzOnFjWlJ8C9IvyOl9Qvy3458T8ZroKkce0BbvSf8QYlAex0RkeqRrfV5G44YU8GaNnvIXxHtiznDpQ2Iq8Z3VJhPcrfcVmtJhov5URucoUj7Yh3WPvzG15WIxUi7N3Qq5ElTlghOK2T2Vf0Mf0UJpBxKcNxdWyQsuv from "./3894bde64a9ece66b50901f566ae343facb35d4e.png";
import imgFooter from "./ff5318d16dd5f93f2647437a73bc8688b87582ae.png";
import imgFrame127 from "./c20da46eb86065efabefe8dda3d480f08dfffacc.png";
import websiteIcon from "@/images/Nanda logo.jpg";
import { useState, type FormEvent } from "react";

type ContactProps = {
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
  { label: "Solar & Wind", onClick: "solarWind" },
  { label: "Building Construction", onClick: "buildingConstruction" },
  { label: "Electric Related Work", onClick: "electricWork" },
  { label: "Building Management", onClick: "buildingManagement" },
];

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[768px] relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Sora:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[0px] text-center text-white tracking-[-1.28px] whitespace-nowrap">
        <p className="text-[64px]">
          <span className="leading-[1.1]">{`CONTACT `}</span>
          <span className="[word-break:break-word] capitalize font-['Sora:ExtraBold',sans-serif] font-extrabold leading-[1.1] text-[#ffce1b] tracking-[-1.28px]">US</span>
        </p>
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
    <div className="content-stretch flex gap-[23px] items-center relative shrink-0">
      <div className="bg-[#355d9b] content-stretch flex gap-[8px] items-center justify-center px-[32px] py-[15px] relative rounded-[4px] shrink-0 w-[208px]" data-name="Button">
        <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Get Consultation</p>
        <Icon />
      </div>
      <div className="content-stretch flex h-[53px] items-center justify-center px-[33px] py-[17px] relative rounded-[4px] shrink-0 w-[197px]" data-name="Button">
        <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.5px] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">Contact Us</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[42px] items-center justify-center left-[calc(50%-0.39px)] top-1/2">
      <Heading />
      <Frame13 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[749px] overflow-clip relative shrink-0 w-[1440px]">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame261} />
        <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
      </div>
      <Frame14 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[29px] relative shrink-0 w-[21px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 22">
        <g id="Container">
          <path d={svgPaths.p1c5280a0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#375f9d] relative rounded-[10px] shrink-0 size-[48px]" data-name="Background+Border">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e1e3e4] text-[32px] text-center whitespace-nowrap">
        <p className="leading-[40px]">Phone</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="relative shrink-0" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[11px] relative size-full">
        <Heading2 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="flex flex-row items-center shrink-0">
      <div className="bg-gradient-to-b border border-[rgba(255,255,255,0.25)] border-solid from-[rgba(255,255,255,0.1)] h-[273px] relative rounded-[10px] shrink-0 to-[rgba(153,153,153,0.1)] w-[333px]" data-name="Overlay+Border+OverlayBlur">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[13px] items-center justify-start px-[27px] pt-[21px] relative size-full">
            <BackgroundBorder />
            <Heading3Margin />
            <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
              <p className="leading-[24px]">+91 9773944770 (Mobile)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Background+Border">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Background+Border">
          <rect fill="var(--fill-0, #375F9D)" height="48" rx="12" width="48" />
          <path d={svgPaths.pd126f00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e1e3e4] text-[32px] text-center whitespace-nowrap">
        <p className="leading-[40px]">Address</p>
      </div>
    </div>
  );
}

function Heading3Margin1() {
  return (
    <div className="relative shrink-0" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[11px] relative size-full">
        <Heading3 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-[3.86px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4c6cf] text-[16px] text-center w-full">
            <p className="leading-[24px]">Nanda Kailash Infrastructure &amp; Developers Private Limited, #544, DLF Prime Towers, F-79 &amp; 80, Okhla Industrial Area Phase - 1, New Delhi - 110020. INDIA.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="flex flex-row items-center shrink-0">
      <div className="bg-gradient-to-b border border-[rgba(255,255,255,0.25)] border-solid from-[rgba(255,255,255,0.1)] h-[273px] relative rounded-[10px] shrink-0 to-[rgba(153,153,153,0.1)] w-[457px]" data-name="Overlay+Border+OverlayBlur">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[13px] items-center justify-start px-[27px] pt-[21px] relative size-full">
            <BackgroundBorder1 />
            <Heading3Margin1 />
            <Container1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Background+Border">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Background+Border">
          <rect fill="var(--fill-0, #375F9D)" height="48" rx="12" width="48" />
          <path d={svgPaths.p28ef4400} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e1e3e4] text-[32px] text-center whitespace-nowrap">
        <p className="leading-[40px]">Email</p>
      </div>
    </div>
  );
}

function Heading3Margin2() {
  return (
    <div className="relative shrink-0" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[11px] relative size-full">
        <Heading4 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4c6cf] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">arjun@nanda-kailash.in</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4c6cf] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">info@nanda-kailash.in</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur2() {
  return (
    <div className="flex flex-row items-center shrink-0">
      <div className="bg-gradient-to-b border border-[rgba(255,255,255,0.25)] border-solid from-[rgba(255,255,255,0.1)] h-[273px] relative rounded-[10px] shrink-0 to-[rgba(153,153,153,0.1)] w-[333px]" data-name="Overlay+Border+OverlayBlur">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[13px] items-center justify-start px-[27px] pt-[21px] relative size-full">
            <BackgroundBorder2 />
            <Heading3Margin2 />
            <Container2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#212121] h-[500px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between max-w-[1280px] relative w-full">
          <OverlayBorderOverlayBlur />
          <OverlayBorderOverlayBlur1 />
          <OverlayBorderOverlayBlur2 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffce1b] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px]">INQUIRY FORM</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e1e3e4] text-[48px] tracking-[-0.48px] w-full">
        <p className="leading-[56px]">Secure Project Inquiry</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Heading1 />
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(196,198,207,0.4)] w-full">
          <p className="leading-[normal]">Full Name</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input">
      <div className="content-stretch flex items-start justify-center overflow-clip pb-[18px] pt-[17px] relative rounded-[inherit] size-full">
        <Container11 />
      </div>
      <div aria-hidden className="absolute border-[#44474e] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container10() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Input />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[14px] text-white top-[-9px] whitespace-nowrap">
        <p className="leading-[20px]">PROJECT CONTACT</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(196,198,207,0.4)] w-full">
          <p className="leading-[normal]">Corporate Email</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input">
      <div className="content-stretch flex items-start justify-center overflow-clip pb-[18px] pt-[17px] relative rounded-[inherit] size-full">
        <Container13 />
      </div>
      <div aria-hidden className="absolute border-[#44474e] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container12() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Input1 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[14px] text-white top-[-9px] whitespace-nowrap">
        <p className="leading-[20px]">EMAIL ADDRESS</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="gap-x-[40px] gap-y-[40px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_57px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container12 />
    </div>
  );
}

function Container15() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(196,198,207,0.4)] w-full">
          <p className="leading-[normal]">+ 1234567890</p>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input">
      <div className="content-stretch flex items-start justify-center overflow-clip pb-[18px] pt-[17px] relative rounded-[inherit] size-full">
        <Container15 />
      </div>
      <div aria-hidden className="absolute border-[#44474e] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input2 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[14px] text-white top-[-9px] whitespace-nowrap">
        <p className="leading-[20px]">PHONE NUMBER</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(196,198,207,0.4)] w-full">
          <p className="leading-[24px]">Briefly describe your project requirements...</p>
        </div>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="relative shrink-0 w-full" data-name="Textarea">
      <div className="content-stretch flex items-start justify-center overflow-auto pb-[89px] pt-[16px] relative rounded-[inherit] size-full">
        <Container17 />
      </div>
      <div aria-hidden className="absolute border-[#44474e] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Textarea />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[14px] text-white top-[-9px] whitespace-nowrap">
        <p className="leading-[20px]">PROJECT BRIEF</p>
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

type InquiryFormValues = {
  name: string;
  email: string;
  phone: string;
  brief: string;
};

type InquiryFieldProps = {
  label: string;
  name: keyof InquiryFormValues;
  placeholder: string;
  type?: "email" | "tel" | "text";
  value: string;
  onChange: (name: keyof InquiryFormValues, value: string) => void;
};

function InquiryField({ label, name, placeholder, type = "text", value, onChange }: InquiryFieldProps) {
  return (
    <label className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <span className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic text-[14px] text-white whitespace-nowrap">{label}</span>
      <input
        className="bg-transparent border-0 border-b border-[#44474e] font-['Manrope:Regular',sans-serif] font-normal leading-[24px] outline-none pb-[18px] pt-[2px] text-[16px] text-[#e1e3e4] transition-colors w-full placeholder:text-[rgba(196,198,207,0.4)] focus:border-[#ffce1b]"
        name={name}
        onChange={(event) => onChange(name, event.target.value)}
        placeholder={placeholder}
        required
        type={type}
        value={value}
      />
    </label>
  );
}

type InquiryTextareaProps = {
  value: string;
  onChange: (name: keyof InquiryFormValues, value: string) => void;
};

function InquiryTextarea({ value, onChange }: InquiryTextareaProps) {
  return (
    <label className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <span className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic text-[14px] text-white whitespace-nowrap">PROJECT BRIEF</span>
      <textarea
        className="bg-transparent border-0 border-b border-[#44474e] font-['Manrope:Regular',sans-serif] font-normal h-[130px] leading-[24px] outline-none pb-[18px] pt-[2px] resize-none text-[16px] text-[#e1e3e4] transition-colors w-full placeholder:text-[rgba(196,198,207,0.4)] focus:border-[#ffce1b]"
        name="brief"
        onChange={(event) => onChange("brief", event.target.value)}
        placeholder="Briefly describe your project requirements..."
        required
        value={value}
      />
    </label>
  );
}

function Form() {
  const [values, setValues] = useState<InquiryFormValues>({
    name: "",
    email: "",
    phone: "",
    brief: "",
  });
  const [status, setStatus] = useState("");

  const updateValue = (name: keyof InquiryFormValues, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
    setStatus("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Project inquiry from ${values.name}`);
    const body = encodeURIComponent(
      `Project Contact: ${values.name}\nEmail Address: ${values.email}\nPhone Number: ${values.phone}\n\nProject Brief:\n${values.brief}`,
    );

    window.location.href = `mailto:info@nanda-kailash.in?subject=${subject}&body=${body}`;
    setStatus("Thank you. Your inquiry is ready to send from your email app.");
  };

  return (
    <form className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Form" onSubmit={handleSubmit}>
      <div className="gap-x-[40px] gap-y-[40px] grid grid-cols-[repeat(2,minmax(0,1fr))] relative shrink-0 w-full" data-name="Container">
        <InquiryField label="PROJECT CONTACT" name="name" onChange={updateValue} placeholder="Full Name" value={values.name} />
        <InquiryField label="EMAIL ADDRESS" name="email" onChange={updateValue} placeholder="Corporate Email" type="email" value={values.email} />
      </div>
      <InquiryField label="PHONE NUMBER" name="phone" onChange={updateValue} placeholder="+ 1234567890" type="tel" value={values.phone} />
      <InquiryTextarea onChange={updateValue} value={values.brief} />
      <button className="bg-[#355d9b] border-0 content-stretch cursor-pointer flex gap-[8px] items-center justify-center px-[32px] py-[15px] relative rounded-[4px] shrink-0 w-[208px]" data-name="Button" type="submit">
        <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">SEND MESSAGE</p>
        <Icon1 />
      </button>
      {status ? <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[14px] text-[#ffce1b]">{status}</p> : null}
    </form>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-[666.67px]">
      <Container7 />
      <Form />
    </div>
  );
}

function Ab6AXuDcKAzknQAlWPfReUSvHfmbl4TfTsTolkWmPwXQdxe6MxlKjfHh0Dc7L436UksuepyVux5DIrHmhwxbaZDsptK3FyMjv2CsXt46SLhlzOnFjWlJ8C9IvyOl9Qvy3458T8ZroKkce0BbvSf8QYlAex0RkeqRrfV5G44YU8GaNnvIXxHtiznDpQ2Iq8Z3VJhPcrfcVmtJhov5URucoUj7Yh3WPvzG15WIxUi7N3Qq5ElTlghOK2T2Vf0Mf0UJpBxKcNxdWyQsuv() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="AB6AXuDcKAzknQAlWPfReUSvHFMBL4tfTSTolkWmPwXQdxe6MxlKjfHH0dc7L436UKSUEPYVux5dIrHmhwxbaZDsptK3FyMJV2CS_XT46sLhlzOnFJWlJ8c9IVYOl9Qvy3458T8zroKKCE0bbv--SF8qYLAex0rkeqRrfV5g44yU8GaNnvIXxHTIZNDp-Q2Iq8Z3vJH-PcrfcVmtJHOV5uRUCOUj7Yh3WPvzG15WIxUI7n3qq5ElTlgh-oK2t2vf0Mf0UJpBxKCNxdWyQsuv">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAb6AXuDcKAzknQAlWPfReUSvHfmbl4TfTsTolkWmPwXQdxe6MxlKjfHh0Dc7L436UksuepyVux5DIrHmhwxbaZDsptK3FyMjv2CsXt46SLhlzOnFjWlJ8C9IvyOl9Qvy3458T8ZroKkce0BbvSf8QYlAex0RkeqRrfV5G44YU8GaNnvIXxHtiznDpQ2Iq8Z3VJhPcrfcVmtJhov5URucoUj7Yh3WPvzG15WIxUi7N3Qq5ElTlghOK2T2Vf0Mf0UJpBxKcNxdWyQsuv} />
    </div>
  );
}

function Border() {
  return (
    <div className="h-[555px] min-h-[300px] relative rounded-[8px] shrink-0 w-full" data-name="Border">
      <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <Ab6AXuDcKAzknQAlWPfReUSvHfmbl4TfTsTolkWmPwXQdxe6MxlKjfHh0Dc7L436UksuepyVux5DIrHmhwxbaZDsptK3FyMjv2CsXt46SLhlzOnFjWlJ8C9IvyOl9Qvy3458T8ZroKkce0BbvSf8QYlAex0RkeqRrfV5G44YU8GaNnvIXxHtiznDpQ2Iq8Z3VJhPcrfcVmtJhov5URucoUj7Yh3WPvzG15WIxUi7N3Qq5ElTlghOK2T2Vf0Mf0UJpBxKcNxdWyQsuv />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame22() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[373.33px]">
        <Border />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#212121] relative shrink-0 w-full">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[160px] py-[80px] relative size-full">
          <Frame21 />
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] w-full">
        <p className="leading-[26px] mb-0">NKID invests in the highest grade of calibrated</p>
        <p className="leading-[26px] mb-0">technical instruments to ensure data integrity and</p>
        <p className="leading-[26px]">precision for every field operation.</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black w-full">
        <p className="leading-[28px]">Software Suite</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-full">
        <p className="leading-[16px]">Advanced Processing</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Container20 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[16px]">Data Processing Software</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#f3a01c] relative rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <Margin />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[16px]">CAD Software</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#f3a01c] relative rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <Margin1 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[16px]">HP Plotter Output</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#f3a01c] relative rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <Margin2 />
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

function SoftwareCard() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Software Card">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[32px] pt-[48px] px-[32px] relative size-full">
        <Container19 />
        <List />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[407px]">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white w-full">
        <p className="leading-[45px]">Calibrated Equipment</p>
      </div>
      <Container18 />
      <SoftwareCard />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffce1b] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">DGPS</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">
        <p className="leading-[20px]">13 Complete Sets</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-[117px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading6 />
        <Container22 />
      </div>
    </div>
  );
}

function Dgps() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.1)] h-[108px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-full" data-name="DGPS">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[30px] relative size-full">
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffce1b] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">Digital Level</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">
        <p className="leading-[20px]">High Precision</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-[110px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading7 />
        <Container24 />
      </div>
    </div>
  );
}

function DigitalLevel() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.1)] h-[108px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-full" data-name="Digital Level">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[30px] relative size-full">
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffce1b] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">Digitex Locator</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">
        <p className="leading-[20px]">Utility Detection</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-[134px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading8 />
        <Container26 />
      </div>
    </div>
  );
}

function DigitexLocator() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.1)] h-[108px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-full" data-name="Digitex Locator">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[30px] relative size-full">
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0 w-[395px]">
      <Dgps />
      <DigitalLevel />
      <DigitexLocator />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffce1b] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">Total Station</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">
        <p className="leading-[20px]">9 Instruments</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-[116px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading9 />
        <Container28 />
      </div>
    </div>
  );
}

function TotalStation() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.1)] h-[108px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-full" data-name="Total Station">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[30px] relative size-full">
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffce1b] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">Auto Level</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">
        <p className="leading-[20px]">2 Instruments</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-[94px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading10 />
        <Container30 />
      </div>
    </div>
  );
}

function AutoLevel() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.1)] h-[108px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-full" data-name="Auto Level">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[30px] relative size-full">
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffce1b] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">GPS</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">
        <p className="leading-[20px]">Field Navigation</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-[107px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading11 />
        <Container32 />
      </div>
    </div>
  );
}

function Gps() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.1)] h-[108px] relative rounded-[10.386px] shrink-0 to-[rgba(153,153,153,0.1)] w-full" data-name="GPS">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[30px] relative size-full">
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0 w-[394.667px]">
      <TotalStation />
      <AutoLevel />
      <Gps />
    </div>
  );
}

function Frame17() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex gap-[16px] h-full items-center relative shrink-0">
        <Frame15 />
        <Frame16 />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#212121] content-stretch flex gap-[33px] items-center justify-center py-[60px] relative shrink-0 w-full">
      <Frame18 />
      <Frame17 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute h-[49px] left-0 top-px w-[79px]">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={websiteIcon} />
    </div>
  );
}

function Container34() {
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
        <g clipPath="url(#clip0_1_654)" id="Icon">
          <path d={svgPaths.p22916300} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2c68500} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11.6667 4.33333H11.6733" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_654">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container35() {
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
        <Container34 />
        <Paragraph />
        <Container35 />
      </div>
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

function List1() {
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

function Container36() {
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

function List2() {
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

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[289.125px] items-start relative shrink-0 w-[203px]" data-name="Container">
      <Heading13 />
      <List2 />
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

function Container41() {
  return (
    <div className="[word-break:break-word] absolute h-[44px] leading-[21px] left-[28px] not-italic text-black top-0 w-[81.969px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium left-0 text-[16px] top-0">EMAIL</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-0 text-[14px] top-[22px]">info@nkid.in</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[44px] relative shrink-0 w-[203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon5 />
        <Container41 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_668)" id="Icon">
          <path d={svgPaths.p2a44c680} id="Vector" stroke="var(--stroke-0, #355D9B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_668">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container43() {
  return (
    <div className="[word-break:break-word] absolute h-[44px] leading-[21px] left-[28px] not-italic text-black top-0 w-[114.313px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium left-0 text-[16px] top-0">PHONE</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-0 text-[14px] top-[22px]">+91 98765 43210</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[44px] relative shrink-0 w-[203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon6 />
        <Container43 />
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

function Container45() {
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

function Container44() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon7 />
        <Container45 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[196px] items-start relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container42 />
      <Container44 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[289.125px] items-start relative shrink-0 w-[203px]" data-name="Container">
      <Heading14 />
      <Container39 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame9 />
      <Container36 />
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container33() {
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

function Container47() {
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

function Container46() {
  return (
    <div className="content-stretch flex flex-col h-[68.5px] items-start pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.56)] border-solid border-t inset-0 pointer-events-none" />
      <Container47 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute content-stretch flex flex-col h-[485.625px] items-start left-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[-0.5px] w-[1440px]" data-name="Footer">
      <img alt="" className="absolute inset-0 max-w-none object-cover opacity-68 pointer-events-none size-full" src={imgFooter} />
      <Container33 />
      <Container46 />
    </div>
  );
}

function Frame10() {
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

function Frame7({ onNavigateAbout, onNavigateHome, onNavigateLandSurveying, onNavigateSolarWind, onNavigateBuildingConstruction, onNavigateElectricWork, onNavigateBuildingManagement, onNavigateProjects, onNavigateSustainability, onNavigateCareers, onNavigateContact }: ContactProps) {
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

export default function Contact({ onNavigateAbout, onNavigateHome, onNavigateLandSurveying, onNavigateSolarWind, onNavigateBuildingConstruction, onNavigateElectricWork, onNavigateBuildingManagement, onNavigateProjects, onNavigateSustainability, onNavigateCareers, onNavigateContact }: ContactProps) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative size-full" data-name="CONTACT">
      <Frame12 />
      <Frame20 />
      <Frame23 />
      <Frame19 />
      <div className="h-[486px] relative rounded-[6px] shrink-0 w-[1440px]" data-name="FOOTER">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <Footer />
        </div>
        <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
      <div className="bg-white content-stretch flex fixed items-center justify-between left-0 px-[120px] py-[10px] shadow-[0px_2px_8px_rgba(0,0,0,0.12)] top-0 w-[1440px] z-50" data-name="NAV BAR">
        <div aria-hidden className="absolute border border-[rgba(64,64,64,0.5)] border-solid inset-0 pointer-events-none" />
        <Frame10 />
        <Frame7 onNavigateAbout={onNavigateAbout} onNavigateHome={onNavigateHome} onNavigateLandSurveying={onNavigateLandSurveying} onNavigateSolarWind={onNavigateSolarWind} onNavigateBuildingConstruction={onNavigateBuildingConstruction} onNavigateElectricWork={onNavigateElectricWork} onNavigateBuildingManagement={onNavigateBuildingManagement} onNavigateProjects={onNavigateProjects} onNavigateSustainability={onNavigateSustainability} onNavigateCareers={onNavigateCareers} onNavigateContact={onNavigateContact} />
        <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-[10px] relative rounded-[4px] shrink-0">
          <div aria-hidden className="absolute border-[#ffce1b] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#404040] text-[14px] text-center whitespace-nowrap">Get Consultation</p>
        </div>
      </div>
    </div>
  );
}
