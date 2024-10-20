import Footer from "@/components/Global/Footer/Footer";
import MentorsSection from "@/components/course/MentorsSection/MentorsSection";
import ProjectSection from "@/components/course/projectSection/ProjectSection";
import SyllabusSection from "@/components/course/syllabusSection/SyllabusSection";
import ToolsSection from "@/components/course/toolsSection/ToolsSection";
import dynamic from "next/dynamic";
const FAQNew = dynamic(() => import("../FAQNew/FAQNew"));
const ReviewSlider = dynamic(() =>
  import("@/components/course/reviewSlider/ReviewSlider")
);
const FeeSection = dynamic(() =>
  import("@/components/course/feeSection/FeeSectionCourse")
);
const JobReadySection = dynamic(() =>
  import("@/components/course/jobReadySection/JobReadySection")
);
const StructuredSection = dynamic(() =>
  import("@/components/course/stucturedSection/StucturedSection")
);
const UpskillingSection = dynamic(() =>
  import("@/components/course/upskillingSection/upskillingSection")
);

const ManagersNewSecondPart = ({ sections, FAQNewData, certificateNew }) => {
  const pdfUrl = "/Brochure/Executive-iit-guwahati-generic.pdf";
  return (
    <>
      <ReviewSlider />
      <MentorsSection />
      {/* <UpskillingSection /> */}
      <ProjectSection dataScienceCounselling={true} interstedInHide={true} />
      <SyllabusSection
        sections={sections}
        interstedInHide={true}
        brochurePdf={pdfUrl}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Executive-iit-guwahati-generic.pdf"
      />
      <ToolsSection />
      {/* <CertificateSection certificateNew={certificateNew} /> */}
      <FeeSection
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
      <JobReadySection />
      <StructuredSection />
      <FAQNew FAQNewData={FAQNewData} />

      <Footer />
    </>
  );
};

export default ManagersNewSecondPart;
