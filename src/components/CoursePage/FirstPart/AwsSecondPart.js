import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically imported components
const BottomBar = dynamic(() =>
  import("@/components/Global/BottomBar/BottomBar")
);
const Footer = dynamic(() => import("@/components/Global/Footer/Footer"));
const SeventhSection = dynamic(() =>
  import("@/components/Global/SeventhSection/SeventhSection")
);
const WhatsappFloat = dynamic(() =>
  import("@/components/Global/WhatappsFloat/WhatsappFloat")
);
const LJourney = dynamic(() => import("../LJourney/LJourney"));
const SyllabusNew = dynamic(() => import("../Syllabus/MasterSyllabus"));
const ToolsCovered = dynamic(() => import("../ToolsCovered/ToolsCovered"));
const Certificate = dynamic(() =>
  import("../../../components/CoursePage/Certificate/Certificate")
);
const FeeSection = dynamic(() =>
  import("../../../components/CoursePage/FeeSection/FeeSection")
);
const MentorsSection = dynamic(() =>
  import("../../../components/Global/MentorsSection/MentorsSection")
);
const SliderTab = dynamic(() =>
  import("../../../components/Global/SliderTabs/SliderTabs")
);
const PlacementCall = dynamic(() =>
  import("../../../components/Global/PlacementCall/PlacementCall")
);
const DevOpsProject = dynamic(() =>
  import("../DevOps/DevOpsProject/DevOpsProject")
);
const FAQNew = dynamic(() =>
  import("../../../components/CoursePage/FAQNew/FAQNewDomain")
);

const SecondPart = ({
  masterSyllabusMobile,
  CertificateData,
  projectSection,
  mbldevops,
  FAQNewData,
  devops,
  devopfee,
  adsHide,
  CloudAWs,
}) => {
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
            if (
              popupData ===
              "Advance Cloud Computing & DevOps Certification Program"
            ) {
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
  const pdfUrl = "/Brochure/AWS.pdf";
  return (
    <div style={{ marginTop: "50px" }}>
      <LJourney />
      <SyllabusNew
        masterSyllabusMobile={masterSyllabusMobile}
        dataScienceCounselling={true}
        dataScience={true}
        // interstedInHide={interstedInHide}
        titleCourse="Certificate in AWS Cloud Computing & Devops"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/AWS-Cloud-and-Devops-Certification-Program.pdf"
        brochurePdf={pdfUrl}
        buttonHide={true}
      />
      <ToolsCovered devops={true} mbldevops={mbldevops} />
      <Certificate data={CertificateData} />
      <FeeSection
        devopfee={devopfee}
        adsHide={adsHide}
        Fee=" ₹ 50,000"
        FeeEmi="₹ 3,277/month"
        weekdaybatch="Weekend Batch"
        weekendbatch="Weekday Batch"
        weekday="SAT - SUN"
        weekend="MON - FRI"
        WeekdayDate="Oct 27th"
        WeekendDate="Nov 8th"
        WeekendTime="8:00 PM - 10:00 PM"
        WeekdayTime="9:30 AM - 1 PM"
        FeeContent3="Flexible payment"
        FeeContent4="Easy loan procedure"
        FeeContent5="10 days refund policy"
        FeeContent6="No additional cost"
        dataScienceCounselling={true}
        // interstedInHide={interstedInHide}
        dataScience={true}
        titleCourse="Certificate in AWS Cloud Computing & Devops"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/AWS-Cloud-and-Devops-Certification-Program.pdf"
        brochurePdf={pdfUrl}
        // <EMI POPUP
        emiType="NO COST EMI"
        duration1="18 Months"
        totalAmount1="₹ 50,000"
        monthlyPayment1="₹ 3,277"
        greenDown1="Standard Intrest rate Applicable"
        duration2="12 Months"
        totalAmount2="₹ 50,000"
        monthlyPayment2="₹ 4,916"
      />

      <MentorsSection />
      <SliderTab WithoutService={true} />
      {adsHide ? "" : <PlacementCall devops={devops} />}

      <DevOpsProject
        CloudAWs={true}
        titleCourse="Certificate in AWS Cloud Computing & Devops"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/AWS-Cloud-and-Devops-Certification-Program.pdf"
        brochurePdf={pdfUrl}
        dataScience={true}
        // interstedInHide={true}
      />

      {adsHide ? "" : <FAQNew FAQNewData={FAQNewData} />}
      <SeventhSection />
      {adsHide ? "" : <Footer />}
      <BottomBar
        dataScienceCounselling={true}
        // interstedInHide={true}
      />
      <WhatsappFloat />
      {/* {adsHide ? (
        ""
      ) : (
        <>
          {popupData.length == 0 ? (
            ""
          ) : (
            <OfferPopup popupData={popupData} devops={devops} />
          )}
        </>
      )} */}
    </div>
  );
};

export default SecondPart;
