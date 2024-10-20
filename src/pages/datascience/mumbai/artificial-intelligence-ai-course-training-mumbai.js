import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { AIMumbaiCourseData } from "../../../CityData/Mumbai/artificialIntelligenceAiCourseTrainingMumbaiData";
import Footer from "../../../components/Global/Footer/Footer";
import Form from "../../../components/Global/Form/Form";
import Navbar from "../../../components/Global/Navbar/Navbar";
import Popup from "../../../components/Global/Popup/Popup";
import FeeSection from "../../../components/Seo/FeeSection/FeeSection";
import Testimonial from "../../../components/Seo/Testimonial/Testimonial";
import styles from "../../../styles/Home.module.css";
const FirstSection = dynamic(() =>
  import("../../../components/Seo/FirstSection/FirstSection")
);
const SecondSection = dynamic(() =>
  import("../../../components/Seo/SecondSection/SecondSection")
);
const ProgramInfo = dynamic(() =>
  import("../../../components/Seo/ProgramInfo/ProgramInfo")
);
const SeventhSection = dynamic(() =>
  import("../../../components/Seo/SeventhSection/SeventhSection")
);
const ProgramFee = dynamic(() =>
  import("../../../components/Seo/ProgramInfo/ProgramFee/ProgramFee")
);
const CityText = dynamic(() =>
  import("../../../components/Seo/CityText/CityText")
);
const CitiesLeft = dynamic(() =>
  import("../../../components/Seo/CitiesLeft/CitiesLeft")
);
const CitiesRight = dynamic(() =>
  import("../../../components/Seo/CitiesRight/CitiesRight")
);
const FAQNew = dynamic(() => import("../../../components/Seo/FAQNew/FAQNew"));
const OfferPopup = dynamic(() =>
  import("../../../components/Global/OfferPopup/OfferPopup")
);
export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
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
  const pdfUrl = "/Brochure/Advance-AI-ML.pdf";
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Artificial Intelligence Course in Mumbai with Job Assistance
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay provides Artificial Intelligence Training in Mumbai For Managers and Leaders. Our courses are affordable and flexible. Enroll Now."
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/mumbai/artificial-intelligence-ai-course-training-mumbai"
        />
        <meta
          property="og:title"
          content="Artifical intellgince Course in Mumbai | Data Science Training in Mumbai"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Artifical intellgince Course in Mumbai. Learnbay is Advanced Artifical intellgince Course Training Institute in Mumbai. Artifical intellgince Course in Mumbai will enhance your career"
        />
        <meta
          property="og:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <meta property="og:image:height" content="100" />
        <meta property="og:image:width" content="256" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Learnbay" />
        <meta
          name="twitter:title"
          content="Artifical intellgince Course in Mumbai | Data Science Training in Mumbai"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Artifical intellgince Course in Mumbai. Learnbay is Advanced Artifical intellgince Course Training Institute in Mumbai. Artifical intellgince Course in Mumbai will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Artifical intellgince Course in Mumbai. Learnbay is Advanced Artifical intellgince Course Training Institute in Mumbai. Artifical intellgince Course in Mumbai will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <meta
          name="keywords"
          content="Artificial Intelligence course in Mumbai, Artificial Intelligence training in Mumbai, Artificial Intelligence institute in Mumbai, best Artificial Intelligence institute in Mumbai, Artificial Intelligence course in Mumbai, Artificial Intelligence certification in Mumbai, Artificial Intelligence training institute in Mumbai, advanced Artificial Intelligence course in Mumbai, Artificial Intelligence course with Placement Assistance, Artificial Intelligence course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/mumbai/artificial-intelligence-ai-course-training-mumbai"
        />
        <meta
          name="copyright"
          content="Learnbay: Artificial Intelligence Training in Mumbai"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
      </Head>
      <main>
        {" "}
        <Navbar popup={true} dataScience={true} interstedInHide={true} />
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            <Form popup={true} setTrigger={setPopups} dataScience={true} />
          </div>
        </Popup>
        <FirstSection
          FirstTyped="Guaranteed Interview Calls"
          SecondTyped="Capstone Project Certificate"
          ThirdTyped="Live Interactive Classes"
          dataScience={true}
          interstedInHide={true}
          titleCourse="Data Science and AI Program For Manager & Leaders"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advance+Artifical+Intelligence+%26+ML+Certification+Program.pdf"
          brochurePdf={pdfUrl}
          idss="qxwIns6z2Bc"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Business-Analytics-Masters-Header.png"
          firstToparaImg="For Managers and Leaders"
          firstHeading="Artificial Intelligence (AI) Course Training in Mumbai"
          firstTopPara="IBM Certified Industry-curated Artificial Intelligence program"
          cityParaCont=" Become a successful data science manager/leader within 11 months. Learn the secret data scientific tricks of managing data science projects. Learn directly from industry leaders via live classes and live projects."
        />
        <SecondSection
          SecondSectionData={AIMumbaiCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={AIMumbaiCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="₹ 1,15,000"
            FeeEmi="₹ 7,539/ Month"
            weekdaybatch="Weekday Batch"
            weekendbatch="Weekend Batch"
            weekday="MON - FRI"
            weekend="SAT - SUN"
            WeekdayDate="Nov 8th"
            WeekendDate="Oct 27th"
            WeekendTime="9:30 AM - 1 PM"
            WeekdayTime="8:00 AM - 10:00 AM"
            FeeContent3="Flexible payment"
            FeeContent4="Easy loan procedure"
            FeeContent5="10 days refund policy"
            FeeContent6="No additional cost"
            dataScienceCounselling={true}
            dataScience={true}
            titleCourse="AI & ML Program for tech professionals"
            brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advance+Artifical+Intelligence+%26+ML+Certification+Program.pdf"
            brochurePdf={pdfUrl}
            interstedInHide={true}
            // <EMI POPUP
            emiType="NO COST EMI"
            duration1="18 Months"
            totalAmount1="₹1,15,000"
            monthlyPayment1="₹7,539"
            greenDown1="Standard Intrest rate Applicable"
            duration2="12 Months"
            totalAmount2="₹1,15,000"
            monthlyPayment2="₹11,308"
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              ProgramBot1={AIMumbaiCourseData[0].ProgramBot1}
              ProgramBot2={AIMumbaiCourseData[0].ProgramBot2}
              ProgramHead3={AIMumbaiCourseData[0].ProgramHead3}
              ProgramHead1={AIMumbaiCourseData[0].ProgramHead1}
              ProgramHead2={AIMumbaiCourseData[0].ProgramHead2}
              ProgramHead4={AIMumbaiCourseData[0].ProgramHead4}
              ProgramBot3={AIMumbaiCourseData[0].ProgramBot3}
              ProgramBot66={AIMumbaiCourseData[0].ProgramBot66}
              ProgramBot67={AIMumbaiCourseData[0].ProgramBot67}
              ProgramBot4={AIMumbaiCourseData[0].ProgramBot4}
              ProgramBot5={AIMumbaiCourseData[0].ProgramBot5}
              ProgramBot6={AIMumbaiCourseData[0].ProgramBot6}
              Courselink1={AIMumbaiCourseData[0].Courselink1}
              Courselink2={AIMumbaiCourseData[0].Courselink2}
              Courselink3={AIMumbaiCourseData[0].Courselink3}
              Courselink4={AIMumbaiCourseData[0].Courselink4}
              Courselink5={AIMumbaiCourseData[0].Courselink5}
              Course1={AIMumbaiCourseData[0].Course1}
              Course2={AIMumbaiCourseData[0].Course2}
              Course3={AIMumbaiCourseData[0].Course3}
              Course4={AIMumbaiCourseData[0].Course4}
              Course5={AIMumbaiCourseData[0].Course5}
              DomainHead1={AIMumbaiCourseData[0].DomainHead1}
              DomainBot1={AIMumbaiCourseData[0].DomainBot1}
              DomainBot2={AIMumbaiCourseData[0].DomainBot2}
              DomainBot3={AIMumbaiCourseData[0].DomainBot3}
              DomainList1={AIMumbaiCourseData[0].DomainList1}
              DomainList2={AIMumbaiCourseData[0].DomainList2}
              DomainList3={AIMumbaiCourseData[0].DomainList3}
              DomainList4={AIMumbaiCourseData[0].DomainList4}
              DomainList5={AIMumbaiCourseData[0].DomainList5}
              DomainList6={AIMumbaiCourseData[0].DomainList6}
              DomainList7={AIMumbaiCourseData[0].DomainList7}
              DomainList8={AIMumbaiCourseData[0].DomainList8}
              DomainList9={AIMumbaiCourseData[0].DomainList9}
              DomainList10={AIMumbaiCourseData[0].DomainList10}
              Domainlink1={AIMumbaiCourseData[0].Domainlink1}
              Domainlink2={AIMumbaiCourseData[0].Domainlink2}
              Domainlink3={AIMumbaiCourseData[0].Domainlink3}
              Domainlink4={AIMumbaiCourseData[0].Domainlink4}
              Domainlink5={AIMumbaiCourseData[0].Domainlink5}
              Domainlink6={AIMumbaiCourseData[0].Domainlink6}
              Domainlink7={AIMumbaiCourseData[0].Domainlink7}
              Domainlink8={AIMumbaiCourseData[0].Domainlink8}
              Domainlink9={AIMumbaiCourseData[0].Domainlink9}
              Domainlink10={AIMumbaiCourseData[0].Domainlink10}
              CertificationBot1={AIMumbaiCourseData[0].CertificationBot1}
              src={AIMumbaiCourseData[0].src}
              src22={AIMumbaiCourseData[0].src22}
              src33={AIMumbaiCourseData[0].src33}
              ModuleBot1={AIMumbaiCourseData[0].ModuleBot1}
              ModuleBot2={AIMumbaiCourseData[0].ModuleBot2}
              ModuleHead1={AIMumbaiCourseData[0].ModuleHead1}
              ModuleHead2={AIMumbaiCourseData[0].ModuleHead2}
              syllabush1={AIMumbaiCourseData[0].syllabush1}
              syllabusb1={AIMumbaiCourseData[0].syllabusb1}
              SyllabusBotlist11={AIMumbaiCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={AIMumbaiCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={AIMumbaiCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={AIMumbaiCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={AIMumbaiCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={AIMumbaiCourseData[0].SyllabusBotlist16}
              syllabush2={AIMumbaiCourseData[0].syllabush2}
              syllabusb2={AIMumbaiCourseData[0].syllabusb2}
              SyllabusBotlist21={AIMumbaiCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={AIMumbaiCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={AIMumbaiCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={AIMumbaiCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={AIMumbaiCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={AIMumbaiCourseData[0].SyllabusBotlist26}
              syllabush3={AIMumbaiCourseData[0].syllabush3}
              syllabusb3={AIMumbaiCourseData[0].syllabusb3}
              SyllabusBotlist31={AIMumbaiCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={AIMumbaiCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={AIMumbaiCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={AIMumbaiCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={AIMumbaiCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={AIMumbaiCourseData[0].SyllabusBotlist36}
              syllabush4={AIMumbaiCourseData[0].syllabush4}
              syllabusb4={AIMumbaiCourseData[0].syllabusb4}
              SyllabusBotlist41={AIMumbaiCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={AIMumbaiCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={AIMumbaiCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={AIMumbaiCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={AIMumbaiCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={AIMumbaiCourseData[0].SyllabusBotlist46}
              syllabussrc={AIMumbaiCourseData[0].syllabussrc}
              JobBot1={AIMumbaiCourseData[0].JobBot1}
              JobBot2={AIMumbaiCourseData[0].JobBot2}
              JobHead1={AIMumbaiCourseData[0].JobHead1}
              JobHead2={AIMumbaiCourseData[0].JobHead2}
              JobBot6={AIMumbaiCourseData[0].JobBot6}
              JobBot3={AIMumbaiCourseData[0].JobBot3}
              JobBot5={AIMumbaiCourseData[0].JobBot5}
              JobBot4={AIMumbaiCourseData[0].JobBot4}
              ProjectsBot1={AIMumbaiCourseData[0].ProjectsBot1}
              ProjectsHead1={AIMumbaiCourseData[0].ProjectsHead1}
              src1={AIMumbaiCourseData[0].src1}
              ProjectsH1={AIMumbaiCourseData[0].ProjectsH1}
              Projectsp1={AIMumbaiCourseData[0].Projectsp1}
              src2={AIMumbaiCourseData[0].src2}
              ProjectsH2={AIMumbaiCourseData[0].ProjectsH2}
              Projectsp2={AIMumbaiCourseData[0].Projectsp2}
              src3={AIMumbaiCourseData[0].src3}
              ProjectsH3={AIMumbaiCourseData[0].ProjectsH3}
              Projectsp3={AIMumbaiCourseData[0].Projectsp3}
              src4={AIMumbaiCourseData[0].src4}
              ProjectsH4={AIMumbaiCourseData[0].ProjectsH4}
              Projectsp4={AIMumbaiCourseData[0].Projectsp4}
              AlumniBot1={AIMumbaiCourseData[0].AlumniBot1}
              Asrc1={AIMumbaiCourseData[0].Asrc1}
              AlumniH1={AIMumbaiCourseData[0].AlumniH1}
              Alumnip1={AIMumbaiCourseData[0].Alumnip1}
              Asrc2={AIMumbaiCourseData[0].Asrc2}
              AlumniH2={AIMumbaiCourseData[0].AlumniH2}
              Alumnip2={AIMumbaiCourseData[0].Alumnip2}
              Asrc3={AIMumbaiCourseData[0].Asrc3}
              AlumniH3={AIMumbaiCourseData[0].AlumniH3}
              Alumnip3={AIMumbaiCourseData[0].Alumnip3}
              Asrc4={AIMumbaiCourseData[0].Asrc4}
              AlumniH4={AIMumbaiCourseData[0].AlumniH4}
              Alumnip4={AIMumbaiCourseData[0].Alumnip4}
              alt1={AIMumbaiCourseData[0].alt1}
              alt2={AIMumbaiCourseData[0].alt2}
              alt3={AIMumbaiCourseData[0].alt3}
              alt4={AIMumbaiCourseData[0].alt4}
              alt5={AIMumbaiCourseData[0].alt5}
              alt6={AIMumbaiCourseData[0].alt6}
              alt7={AIMumbaiCourseData[0].alt7}
              alt8={AIMumbaiCourseData[0].alt8}
              alt9={AIMumbaiCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={AIMumbaiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={AIMumbaiCourseData[0].CityTextB}
          CityText={AIMumbaiCourseData[0].CityText}
          CityTextLB={AIMumbaiCourseData[0].CityTextLB}
          CityTextL={AIMumbaiCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
