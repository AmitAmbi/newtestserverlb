import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { AIPuneCourseData } from "../../../CityData/Pune/artificialIntelligenceAiCourseTrainingPuneData";
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
        <title>Best Artificial Intelligence Course in Pune - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Best Artificial Intelligence Training Program in Pune with flexible schedules, IBM certification, job assistance, and more. Enhance your skills and advance your career. Enroll Now."
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/pune/artificial-intelligence-ai-course-training-pune"
        />
        <meta
          property="og:title"
          content="Artificail Intelligence Course in pune | Data Science Training in pune"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Artificail Intelligence Course in pune. Learnbay is Advanced Artificail Intelligence Course Training Institute in pune. Artificail Intelligence Course in pune will enhance your career"
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
          content="Artificail Intelligence Course in Chennai | Data Science Training in Chennai"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Artificail Intelligence Course in Chennai. Learnbay is Advanced Artificail Intelligence Course Training Institute in Chennai. Artificail Intelligence Course in Chennai will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Artificail Intelligence Course in Chennai. Learnbay is Advanced Artificail Intelligence Course Training Institute in Chennai. Artificail Intelligence Course in Chennai will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <meta
          name="keywords"
          content="Artificial Intelligence course in Pune, Artificial Intelligence training in Pune, Artificial Intelligence institute in Pune, best Artificial Intelligence institute in Pune, Artificial Intelligence course in Pune, Artificial Intelligence certification in Pune, Artificial Intelligence training institute in Pune, advanced Artificial Intelligence course in Pune, Artificial Intelligence course with Placement Assistance, Artificial Intelligence course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/pune/artificial-intelligence-ai-course-training-pune"
        />
        <meta
          name="copyright"
          content="Learnbay: Artificial Intelligence Courses Certification Training India"
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
          idss="qxwIns6z2Bc"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Business-Analytics-Masters-Header.png"
          firstToparaImg="For Managers and Leaders"
          firstHeading="Artificial Intelligence (AI) Course Training in Pune"
          firstTopPara="IBM Certified AI training With Domain Specialization and 100% job assistance"
          cityParaCont="Become a successful data science manager/leader within 11 months. Learn the secret data scientific tricks of managing data science projects. Learn directly from industry leaders via live classes and live projects."
        />
        <SecondSection SecondSectionData={AIPuneCourseData[0].secondSection} />
        <Testimonial
          redirectDS={true}
          Testimonial={AIPuneCourseData[0].testimonial}
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
              ProgramBot1={AIPuneCourseData[0].ProgramBot1}
              ProgramHead3={AIPuneCourseData[0].ProgramHead3}
              ProgramBot3={AIPuneCourseData[0].ProgramBot3}
              ProgramBot66={AIPuneCourseData[0].ProgramBot66}
              ProgramBot67={AIPuneCourseData[0].ProgramBot67}
              ProgramBot4={AIPuneCourseData[0].ProgramBot4}
              ProgramBot5={AIPuneCourseData[0].ProgramBot5}
              ProgramBot6={AIPuneCourseData[0].ProgramBot6}
              Courselink1={AIPuneCourseData[0].Courselink1}
              Courselink2={AIPuneCourseData[0].Courselink2}
              Courselink3={AIPuneCourseData[0].Courselink3}
              Courselink4={AIPuneCourseData[0].Courselink4}
              Courselink5={AIPuneCourseData[0].Courselink5}
              Course1={AIPuneCourseData[0].Course1}
              Course2={AIPuneCourseData[0].Course2}
              Course3={AIPuneCourseData[0].Course3}
              Course4={AIPuneCourseData[0].Course4}
              Course5={AIPuneCourseData[0].Course5}
              DomainHead1={AIPuneCourseData[0].DomainHead1}
              DomainBot1={AIPuneCourseData[0].DomainBot1}
              DomainBot2={AIPuneCourseData[0].DomainBot2}
              DomainBot3={AIPuneCourseData[0].DomainBot3}
              DomainList1={AIPuneCourseData[0].DomainList1}
              DomainList2={AIPuneCourseData[0].DomainList2}
              DomainList3={AIPuneCourseData[0].DomainList3}
              DomainList4={AIPuneCourseData[0].DomainList4}
              DomainList5={AIPuneCourseData[0].DomainList5}
              DomainList6={AIPuneCourseData[0].DomainList6}
              DomainList7={AIPuneCourseData[0].DomainList7}
              DomainList8={AIPuneCourseData[0].DomainList8}
              DomainList9={AIPuneCourseData[0].DomainList9}
              DomainList10={AIPuneCourseData[0].DomainList10}
              Domainlink1={AIPuneCourseData[0].Domainlink1}
              Domainlink2={AIPuneCourseData[0].Domainlink2}
              Domainlink3={AIPuneCourseData[0].Domainlink3}
              Domainlink4={AIPuneCourseData[0].Domainlink4}
              Domainlink5={AIPuneCourseData[0].Domainlink5}
              Domainlink6={AIPuneCourseData[0].Domainlink6}
              Domainlink7={AIPuneCourseData[0].Domainlink7}
              Domainlink8={AIPuneCourseData[0].Domainlink8}
              Domainlink9={AIPuneCourseData[0].Domainlink9}
              Domainlink10={AIPuneCourseData[0].Domainlink10}
              CertificationBot1={AIPuneCourseData[0].CertificationBot1}
              src={AIPuneCourseData[0].src}
              src22={AIPuneCourseData[0].src22}
              src33={AIPuneCourseData[0].src33}
              ModuleBot1={AIPuneCourseData[0].ModuleBot1}
              ModuleBot2={AIPuneCourseData[0].ModuleBot2}
              syllabush1={AIPuneCourseData[0].syllabush1}
              syllabusb1={AIPuneCourseData[0].syllabusb1}
              SyllabusBotlist11={AIPuneCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={AIPuneCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={AIPuneCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={AIPuneCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={AIPuneCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={AIPuneCourseData[0].SyllabusBotlist16}
              syllabush2={AIPuneCourseData[0].syllabush2}
              syllabusb2={AIPuneCourseData[0].syllabusb2}
              SyllabusBotlist21={AIPuneCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={AIPuneCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={AIPuneCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={AIPuneCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={AIPuneCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={AIPuneCourseData[0].SyllabusBotlist26}
              syllabush3={AIPuneCourseData[0].syllabush3}
              syllabusb3={AIPuneCourseData[0].syllabusb3}
              SyllabusBotlist31={AIPuneCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={AIPuneCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={AIPuneCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={AIPuneCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={AIPuneCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={AIPuneCourseData[0].SyllabusBotlist36}
              syllabush4={AIPuneCourseData[0].syllabush4}
              syllabusb4={AIPuneCourseData[0].syllabusb4}
              SyllabusBotlist41={AIPuneCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={AIPuneCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={AIPuneCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={AIPuneCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={AIPuneCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={AIPuneCourseData[0].SyllabusBotlist46}
              syllabussrc={AIPuneCourseData[0].syllabussrc}
              JobBot1={AIPuneCourseData[0].JobBot1}
              JobBot2={AIPuneCourseData[0].JobBot2}
              JobHead2={AIPuneCourseData[0].JobHead2}
              JobBot3={AIPuneCourseData[0].JobBot3}
              JobBot4={AIPuneCourseData[0].JobBot4}
              ProjectsBot1={AIPuneCourseData[0].ProjectsBot1}
              src1={AIPuneCourseData[0].src1}
              ProjectsH1={AIPuneCourseData[0].ProjectsH1}
              Projectsp1={AIPuneCourseData[0].Projectsp1}
              src2={AIPuneCourseData[0].src2}
              ProjectsH2={AIPuneCourseData[0].ProjectsH2}
              Projectsp2={AIPuneCourseData[0].Projectsp2}
              src3={AIPuneCourseData[0].src3}
              ProjectsH3={AIPuneCourseData[0].ProjectsH3}
              Projectsp3={AIPuneCourseData[0].Projectsp3}
              src4={AIPuneCourseData[0].src4}
              ProjectsH4={AIPuneCourseData[0].ProjectsH4}
              Projectsp4={AIPuneCourseData[0].Projectsp4}
              AlumniBot1={AIPuneCourseData[0].AlumniBot1}
              Asrc1={AIPuneCourseData[0].Asrc1}
              AlumniH1={AIPuneCourseData[0].AlumniH1}
              Alumnip1={AIPuneCourseData[0].Alumnip1}
              Asrc2={AIPuneCourseData[0].Asrc2}
              AlumniH2={AIPuneCourseData[0].AlumniH2}
              Alumnip2={AIPuneCourseData[0].Alumnip2}
              Asrc3={AIPuneCourseData[0].Asrc3}
              AlumniH3={AIPuneCourseData[0].AlumniH3}
              Alumnip3={AIPuneCourseData[0].Alumnip3}
              Asrc4={AIPuneCourseData[0].Asrc4}
              AlumniH4={AIPuneCourseData[0].AlumniH4}
              Alumnip4={AIPuneCourseData[0].Alumnip4}
              alt1={AIPuneCourseData[0].alt1}
              alt2={AIPuneCourseData[0].alt2}
              alt3={AIPuneCourseData[0].alt3}
              alt4={AIPuneCourseData[0].alt4}
              alt5={AIPuneCourseData[0].alt5}
              alt6={AIPuneCourseData[0].alt6}
              alt7={AIPuneCourseData[0].alt7}
              alt8={AIPuneCourseData[0].alt8}
              alt9={AIPuneCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={AIPuneCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={AIPuneCourseData[0].CityTextB}
          CityText={AIPuneCourseData[0].CityText}
          CityTextLB={AIPuneCourseData[0].CityTextLB}
          CityTextL={AIPuneCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
