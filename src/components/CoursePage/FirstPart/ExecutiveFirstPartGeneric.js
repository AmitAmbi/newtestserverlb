import DecisionSection from "@/components/course/decisionSection/DecisionSection";
import HeroSection from "@/components/course/heroSection/HeroSection";
import dynamic from "next/dynamic";
const Navbar = dynamic(() =>
  import("@/components/course/navbarSection/NavbarSection")
);
const ProgramSection = dynamic(() =>
  import("@/components/course/programSection/programSection")
);

const OutcomeSection = dynamic(() =>
  import("@/components/course/outcomeSection/outcomeSection")
);

const WhyChooseSection = dynamic(() =>
  import("@/components/course/whyChooseSection/whyChooseSection")
);
const ExecutiveFirstPartGeneric = ({ProggramSectionData}) => {
  const pdfUrl = "/Brochure/Executive-iit-guwahati-generic.pdf";
  return (
    <>
      {" "}
      <Navbar
        dataScienceCounselling={true}
        dataScience={true}
        fullStack={true}
        backgorunimg={true}
        isSpecialPage={true}
        isGuwahati={true}
        interstedInHide={true}
      />
      <HeroSection
        title="Executive Program in Data Science & AI for "
        orgTitle="Managers and Tech Leaders"
        thumbnailurl="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/first_yt_thumb.webp"
        spanTag="E&ICT Academy IIT Guwahati"
        isSpecialPage={true}
        isGuwahati={true}
        interstedInHide={true}
        dataScienceCounselling={true}
        dataScience={true}
        brochurePdf={pdfUrl}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Executive-iit-guwahati-generic.pdf"
        backgroundGradient="radial-gradient(circle at 10% 10%, rgba(6, 59, 92, 0.9) 1%, transparent 30%), radial-gradient(circle at 90% 80%, rgba(254, 122, 54, 0.3) 1%, transparent 40%), #212121"
      />
      <DecisionSection />
      <ProgramSection
                    ProggramSectionData={ProggramSectionData}
        dataScienceCounselling={true}
        interstedInHide={true}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Executive-iit-guwahati-generic.pdf"
      />
      <OutcomeSection />
      <WhyChooseSection />
    </>
  );
};

export default ExecutiveFirstPartGeneric;
