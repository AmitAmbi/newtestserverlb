import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import HeroSectionAI from "@/components/course/heroSection/HeroSectionAI";
import NavbarSection from "@/components/course/navbarSection/NavbarSection";

const ReviewSlider = dynamic(() => import("@/components/course/reviewSlider/reviewSlider"), {
  ssr: false, // Disable server-side rendering if needed
});

const PSummaryAD = dynamic(() => import("../PSummary/PSummaryAD"));
const PsummaryForm = dynamic(() => import("../PSummary/PsummaryForm"));
const Practical = dynamic(() => import("../Practical/Practical"));
const ProgramSection = dynamic(() =>
  import("@/components/course/programSection/programSection")
);
const OutcomeSection = dynamic(() =>
  import("@/components/course/outcomeSection/outcomeSection")
);
const WhyChooseSection = dynamic(() =>
  import("@/components/course/whyChooseSection/whyChooseSection")
);

const AIFirstPart = ({ ProggramSectionData, summaryData }) => {
  const [isMobile, setIsMobile] = useState(null); // Initialize with null to avoid initial false render

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
    };

    handleResize(); // Set the initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const pdfUrl = "/Brochure/AIML.pdf";

  return (
    <>
      <NavbarSection dataScienceCounselling={true} interstedInHide={true} />
      <HeroSectionAI
        isSpecialPage={true}
        isGuwahati={true}
        interstedInHide={true}
        dataScienceCounselling={true}
        dataScience={true}
        brochurePdf={pdfUrl}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/UpdateBrochure/AIML.pdf"
        noIIt={true}
        applicationIcon="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/blue_Bots.webp"
        ProgramIcon="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/blue_Cal_bots.webp"
        trainingIcon="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/build_bots.webp"
        CloseDes="Program Eligibility"
        CloseBotDate="Min 1 year"
        DurationBot="Program Duration"
        DurationBotDate="11 Months"
        TrainingBot="Training Format"
        BotWidth={70}
        BotHeight={56}
        backgroundImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/bg_AI_MLS.webp"
        purpleButton={true}
        PointsDiv={true}
      />

      {isMobile !== null && ( // Render only after determining the screen size
        isMobile ? (
          <PSummaryAD summaryData={summaryData} />
        ) : (
          <PsummaryForm
            showForm={true}
            interstedInHide={true}
            dataScienceCounselling={true}
            dataScience={true}
          />
        )
      )}

      <Practical />
      <ProgramSection
        ProggramSectionData={ProggramSectionData}
        interstedInHide={true}
        dataScienceCounselling={true}
        dataScience={true}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/UpdateBrochure/AIML.pdf"
      />
      <OutcomeSection />
      <WhyChooseSection />
      <ReviewSlider />
    </>
  );
};

export default React.memo(AIFirstPart);
