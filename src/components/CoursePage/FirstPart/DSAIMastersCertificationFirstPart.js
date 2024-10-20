import dynamic from "next/dynamic";
import React from "react";

// Dynamically imported components
const HeroSectionMaster = dynamic(() =>
  import("@/components/course/heroSection/HeroSectionMaster")
);
const NavbarSection = dynamic(() =>
  import("@/components/course/navbarSection/NavbarSection")
);
const PSummaryAD = dynamic(() => import("../PSummary/PSummaryAD"));
const Practical = dynamic(() => import("../Practical/Practical"));
const ProgramSection = dynamic(() =>
  import("@/components/course/programSection/programSection")
);
const ReviewSlider = dynamic(() =>
  import("@/components/course/reviewSlider/reviewSlider")
);
const UpskillMbl = dynamic(() =>
  import("@/components/course/upskillingSection/UpskillMbl")
);
const UpskillingSection = dynamic(() =>
  import("@/components/course/upskillingSection/upskillingSection")
);
const MentorsSection = dynamic(() =>
  import("@/components/Global/MentorsSection/MentorsSection")
);
const OutcomeSection = dynamic(() =>
  import("@/components/course/outcomeSection/outcomeSection")
);
const AnimationNew = dynamic(() =>
  import("@/components/Home/whyChooseSection/AnimationNew")
);
const FirstPart = ({ ProggramSectionData, summaryData, upskillData, upskillingData }) => {
  const pdfUrl = "/Brochure/DSAI_Master.pdf";
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

      <HeroSectionMaster
        isSpecialPage={true}
        isGuwahati={true}
        interstedInHide={true}
        dataScienceCounselling={true}
        dataScience={true}
        brochurePdf={pdfUrl}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/UpdateBrochure/DSAI_Master.pdf"
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
        backgroundImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/CS_master_BG+(1).webp"
        PointsDiv={true}
      />
      <PSummaryAD
        summaryData={summaryData}
        customClassName="customAlignmentClass"
      />
      <Practical />

      <ProgramSection
        ProggramSectionData={ProggramSectionData}
        dataScienceCounselling={true}
        interstedInHide={true}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/UpdateBrochure/DSAI_Master.pdf"
      />

      <OutcomeSection />

      <AnimationNew />

      <ReviewSlider />
      <MentorsSection />
      <UpskillMbl  upskillData={upskillData}/>

      <UpskillingSection  upskillingData={upskillingData}/>
    </>
  );
};

export default React.memo(FirstPart);
