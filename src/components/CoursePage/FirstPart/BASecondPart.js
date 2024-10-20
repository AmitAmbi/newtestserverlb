import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamic Imports for Components
const BottomBar = dynamic(() => import("@/components/Global/BottomBar/BottomBar"));
const ReviewSlider = dynamic(() => import("@/components/course/reviewSlider/reviewSlider"));
const UpskillMbl = dynamic(() => import("@/components/course/upskillingSection/UpskillMbl"));
const UpskillingSection = dynamic(() => import("@/components/course/upskillingSection/upskillingSection"));
const ProjectSection = dynamic(() => import("@/components/course/projectSection/ProjectSection"));
const SyllabusSection = dynamic(() => import("@/components/course/syllabusSection/SyllabusSection"));
const ToolsSection = dynamic(() => import("@/components/course/toolsSection/ToolsSection"));
const CertificateSection = dynamic(() => import("@/components/course/certificateSection/CertificateSection"));
const FeeSection = dynamic(() => import("@/components/course/feeSection/FeeSectionCourse"));
const NewSevenSection = dynamic(() => import("@/components/Global/SeventhSectionNew/NewSevenSection"));
const StructuredSection = dynamic(() => import("@/components/course/structuredSection/StructuredSection"));
const Achive = dynamic(() => import("@/components/course/jobReadySection/Achive"));

// Already Dynamic Imports

const WhatsappFloat = dynamic(() => import("@/components/Global/WhatappsFloat/WhatsappFloat"));

const MentorsSection = dynamic(() => import("../../../components/Global/MentorsSection/MentorsSection"));

const FAQNew = dynamic(() => import("../../../components/CoursePage/FAQNew/FAQNew"));
const Footer = dynamic(() => import("@/components/Global/Footer/Footer"));
const Content = dynamic(() => import("../../CoursePage/Content/content"));

const SecondPart = ({ sections, certificateNew, FAQNewData, toolsdynamic, upskillData, upskillingData }) => {
  const [popupData, setPopupData] = useState([]);
  // console.log(popupData);
  useEffect(() => {
    // console.log("inside UseEFFect");
    const fetchPopup = async () => {
      const data = await fetch("/api/Popup/popupGenerate", {
        method: "GET",
      });
      if (data.status === 200) {
        const { popData } = await data.json();
        // console.log(popData, "get data");
        if (popData == []) {
          setPopupData([]);
        }

        popData.map((data, i) => {
          // console.log(data);
          data.page.map((popupData, i) => {
            // console.log(popData);
            if (popupData === "Business Analytics Program") {
              setPopupData(data);
              // console.log(popupData);
              return;
            }
          });
        });
      }
    };
    fetchPopup();
  }, []);
  const pdfUrl = "/Brochure/Business_Analytics.pdf";
  return (
    <div>
      <ReviewSlider />
      <MentorsSection />
      <UpskillMbl  upskillData={upskillData}/>
      <UpskillingSection upskillingData={upskillingData} />

      <ProjectSection dataScienceCounselling={true} interstedInHide={true}
        brochurePdf={pdfUrl}
              brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/UpdateBrochure/Business_Analytics.pdf" />
      <SyllabusSection
        sections={sections}
        interstedInHide={true}
        brochurePdf={pdfUrl}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/UpdateBrochure/Business_Analytics.pdf"
      />

      <ToolsSection />
      <CertificateSection certificateNew={certificateNew} />
      <FeeSection
        Fee="₹ 95,000"
        FeeEmi="₹ 5,277/ month"
        // Hybrid Classes
        hybridFee="₹ 1,05,000"
        hybridEmi="₹ 5,833/ month"
        // EMIPOPUP
        emiType="Live online classes"
        duration1="12 Months"
        totalAmount1="₹ 95,000"
        monthlyPayment1="₹14,094"
        greenDown1="Hybrid Classes"
        duration2="12 Months"
        totalAmount2="₹2,10,000"
        monthlyPayment2="₹12,455"
        dataScienceCounselling={true}
        iitGuwatiGen={true}
      />
      <StructuredSection />
      <Achive />

      <FAQNew FAQNewData={FAQNewData} toolsdynamic={toolsdynamic} />
      <Content Banalytics={true} dataScienceCounselling={true} />
      <NewSevenSection />
      <Footer />
      <BottomBar dataScienceCounselling={true} interstedInHide={true} />
      <WhatsappFloat />
      {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
    </div>
  );
};

export default SecondPart;
