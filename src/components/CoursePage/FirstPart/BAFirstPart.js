import React from "react";
import dynamic from "next/dynamic";

// Dynamically import components
const NavbarSection = dynamic(() => import("@/components/course/navbarSection/NavbarSection"), { ssr: false });
const HeroSectionBA = dynamic(() => import("@/components/course/heroSection/HeroSectionBA"));
const PSummaryAD = dynamic(() => import("../PSummary/PSummaryAD"));
const Practical = dynamic(() => import("../Practical/Practical"));
const ProgramSection = dynamic(() => import("@/components/course/programSection/programSection"));
const OutcomeSection = dynamic(() => import("@/components/course/outcomeSection/outcomeSection"));
const AnimationNew = dynamic(() => import("@/components/Home/whyChooseSection/AnimationNew"), { ssr: false });

const BusinessAnalyticsFirstPart = ({ ProggramSectionData, summaryData }) => {
  const pdfUrl = "/Brochure/Business_Analytics.pdf";
  return (
    <>
      {" "}
      <NavbarSection
        dataScienceCounselling={true}
        dataScience={true}
        fullStack={true}
        backgorunimg={true}
        isSpecialPage={true}
        isGuwahati={true}
        interstedInHide={true}
      />
      <HeroSectionBA
        isSpecialPage={true}
        isGuwahati={true}
        interstedInHide={true}
        dataScienceCounselling={true}
        dataScience={true}
        brochurePdf={pdfUrl}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/UpdateBrochure/Business_Analytics.pdf"
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
        backgroundImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/businesssss_Bg.webp"
        PointsDiv={true}
      />
      <PSummaryAD summaryData={summaryData} />
      <Practical />
      <ProgramSection
        ProggramSectionData={ProggramSectionData}
        dataScienceCounselling={true}
        interstedInHide={true}
        brochurePdf={pdfUrl}

    
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/UpdateBrochure/Business_Analytics.pdf"
      />
      <OutcomeSection />
      <AnimationNew />
    </>
  );
};

export default React.memo(BusinessAnalyticsFirstPart);
