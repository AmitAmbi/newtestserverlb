import Footer from "@/components/Global/Footer/Footer";
import MentorsSection from "@/components/course/MentorsSection/MentorsSection";
import CertificateSection from "@/components/course/certificateSection/CertificateSection";
import ProjectSection from "@/components/course/projectSection/ProjectSection";
import SyllabusSection from "@/components/course/syllabusSection/SyllabusSection";
import ToolsSection from "@/components/course/toolsSection/ToolsSection";
import UpskillMbl from "@/components/course/upskillingSection/UpskillMbl";
import dynamic from "next/dynamic";
const FAQNew = dynamic(() =>
  import("../../../components/CoursePage/FAQNew/FAQNew")
);
const ReviewSlider = dynamic(() =>
  import("@/components/course/reviewSlider/reviewSlider")
);
const FeeSection = dynamic(() =>
  import("@/components/course/feeSection/FeeSectionCourse")
);
const JobReadySection = dynamic(() =>
  import("@/components/course/jobReadySection/jobReadySection")
);
const StructuredSection = dynamic(() =>
  import("@/components/course/structuredSection/StructuredSection")
);
const UpskillingSection = dynamic(() =>
  import("@/components/course/upskillingSection/upskillingSection")
);

const ExecutiveSecondPart = ({ sections, FAQNewData, certificateNew, upskillData, upskillingData }) => {
  const pdfUrl = "/Brochure/DSAI_for_Managers_and_Leaders.pdf";
  return (
    <>
      <ReviewSlider />
      <MentorsSection />

      <UpskillMbl upskillData={upskillData}/>
      <UpskillingSection upskillingData={upskillingData} />
      <ProjectSection dataScienceCounselling={true} interstedInHide={true} />
      <SyllabusSection
        sections={sections}
        interstedInHide={true}
        brochurePdf={pdfUrl}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/UpdateBrochure/DSAI_for_Managers_and_Leaders.pdf"
      />
      <ToolsSection />
      <CertificateSection  certificateNew={certificateNew}/>
      <FeeSection
// OnlineFEE
Fee="₹ 1,15,000 "
FeeEmi="₹ 6,388/ month"

// Hybrid Classes
hybridFee="₹ 1,30,000"
hybridEmi="₹ 7,222/ month"



        // EMIPOPUP
        emiType="NO COST EMI"
        duration1="12 Months"
        totalAmount1="₹1,90,000"
        monthlyPayment1="₹14,094"
        greenDown1="Standard Interest Rates Applicable"
        duration2="12 Months"
        totalAmount2="₹2,10,000"
        monthlyPayment2="₹12,455"
        dataScienceCounselling={true}
        iitGuwatiGen={true}
      />
      <JobReadySection />
      <StructuredSection />
      <FAQNew FAQNewData={FAQNewData} />

      <Footer />
    </>
  );
};

export default ExecutiveSecondPart;
