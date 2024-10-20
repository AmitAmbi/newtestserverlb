import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically imported components
const BottomBar = dynamic(() => import("@/components/Global/BottomBar/BottomBar"));
const Footer = dynamic(() => import("@/components/Global/Footer/Footer"));
const WhatsappFloat = dynamic(() => import("@/components/Global/WhatappsFloat/WhatsappFloat"));
const NewSevenSection = dynamic(() => import("@/components/Global/SeventhSectionNew/NewSevenSection"));
const ProjectSection = dynamic(() => import("@/components/course/projectSection/ProjectSection"));
const SyllabusSection = dynamic(() => import("@/components/course/syllabusSection/SyllabusSection"));
const StructuredSection = dynamic(() => import("@/components/course/structuredSection/StructuredSection"));
const Achive = dynamic(() => import("@/components/course/jobReadySection/Achive"));
const ToolsSection = dynamic(() => import("@/components/course/toolsSection/ToolsSection"));
const CertificateSection = dynamic(() => import("@/components/course/certificateSection/CertificateSection"));
const FeeSection = dynamic(() => import("@/components/course/feeSection/FeeSectionCourse"));
const FAQNew = dynamic(() => import("../FAQNew/FAQNew"));
const Content = dynamic(() => import("../Content/content"));


const SecondPart = ({
  sections,
  FAQNewData,
  certificateNew,
}) => {
  const [popupData, setPopupData] = useState([]);

  // const emiPopupProps = {
  //   emiType: 'No Cost EMI',
  //   duration1: '18 months',
  //   totalAmount1: '₹2,50,000',
  //   monthlyPayment1: '₹16,389',
  //   greenDown1: 'Standard Interest Rates Applicable',
  //   duration2: '24 months',
  //   totalAmount2: '₹2,50,000',
  //   monthlyPayment2: '₹12,292',
  //   greenDown2: 'Another Green Down Text',
  // };
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
            if (popupData === "Adv Data Science and AI") {
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
  const pdfUrl = "/Brochure/DSAI_Master.pdf";
  return (
    <div>

     
      <ProjectSection dataScienceCounselling={true} interstedInHide={true} />

      <SyllabusSection
        sections={sections}
        interstedInHide={true}
        brochurePdf={pdfUrl}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/UpdateBrochure/DSAI_Master.pdf"
      />
      <ToolsSection />
      <CertificateSection certificateNew={certificateNew} />

      <FeeSection
Fee="₹ 1,35,000 "
FeeEmi="₹ 7,500/ month"

// Hybrid Classes
hybridFee="₹ 1,50,000"
hybridEmi="₹ 8,333/ month"


        // EMIPOPUP
        emiType="Live online classes"
        duration1="12 Months"
        totalAmount1="₹1,90,000"
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

      <FAQNew FAQNewData={FAQNewData} />
      <NewSevenSection />
      <Content/>
      <Footer />
      <BottomBar dataScienceCounselling={true} interstedInHide={true} />
      <WhatsappFloat />
      {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
    </div>
  );
};

export default SecondPart;
