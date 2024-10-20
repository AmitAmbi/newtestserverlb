import dynamic from "next/dynamic";
import React from "react";

// Dynamically importing components
const HeroSection = dynamic(() =>
  import("@/components/course/heroSection/HeroSection")
);
const NavbarSection = dynamic(() =>
  import("@/components/course/navbarSection/NavbarSection")
);
const PSummaryAD = dynamic(() => import("../PSummary/PSummaryAD"));
const ProgramSection = dynamic(() =>
  import("@/components/course/programSection/programSection")
);
const OutcomeSection = dynamic(() =>
  import("@/components/course/outcomeSection/outcomeSection")
);
const WhyChooseSection = dynamic(() =>
  import("@/components/course/whyChooseSection/whyChooseSection")
);
const Practical = dynamic(() => import("../Practical/Practical"));
const FirstPart = ({ ProggramSectionData, summaryData }) => {
  const pdfUrl = "/Brochure/Advance_DSAI.pdf";
  return (
    <>
      <NavbarSection
        dataScienceCounselling={true}
        dataScience={true}
        fullStack={true}
        backgorunimg={true}
        isSpecialPage={true}
        isGuwahati={true}
        interstedInHide={true}
      />
      <HeroSection
        thumbnailurl="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/managers_YT.webp"
        spanTag="Project-based learning"
        spanIcon="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/ada_AI_icon.webp"
        isSpecialPage={true}
        isGuwahati={true}
        interstedInHide={true}
        dataScienceCounselling={true}
        dataScience={true}
        brochurePdf={pdfUrl}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/UpdateBrochure/Advance_DSAI.pdf"
        title="Advanced Data Science & AI Program with"
        orgTitle=" Domain Specialization"
        descrption="Unlock the power of data with our comprehensive program, featuring hands-on learning, real-world projects, and domain specialization in fields like BFSI, healthcare, and retail."
        noIIt={true}
        applicationIcon="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/blue_Bots.webp"
        ProgramIcon="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/blue_Cal_bots.webp"
        trainingIcon="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/build_bots.webp"
        CloseDes="Program Eligibility "
        CloseBotDate="Min 1 year"
        DurationBot="Program Duration"
        DurationBotDate="11 Months"
        TrainingBot="Training Format"
        BotWidth={70}
        BotHeight={56}
        backgroundGradient="radial-gradient(circle at 10% 10%, rgba(6, 59, 92, 0.9) 1%, transparent 30%), radial-gradient(circle at 90% 80%, rgba(254, 122, 54, 0.3) 1%, transparent 40%), #212121"
        showRightForm={true}
      />
      <PSummaryAD summaryData={summaryData} />
      <Practical />
      <ProgramSection
        ProggramSectionData={ProggramSectionData}
        yearExp="1+ Years of Experience"
        PointOne="Data Analyst "
        pointTwo="Non-Techies"
        PointOneIcon="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/icon_Datas.webp"
        pointTwoIcon="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/icon_ytwos.webp"
        rightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/ryt_programImg+(2).webp"
        dataScienceCounselling={true}
        interstedInHide={true}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/UpdateBrochure/Advance_DSAI.pdf"
      />

      <OutcomeSection />
      <WhyChooseSection />
    </>
  );
};

export default React.memo(FirstPart);
