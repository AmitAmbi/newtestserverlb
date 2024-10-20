import { React, useState } from "react";
import styles from "./content.module.css";
import Form from "../../Global/Form/Form";
import Popup from "../../Global/Popup/Popup";
import Button from "@/components/Global/Button/Button";
import Link from "next/link";

function DataAnalytics({
  dataScienceCounselling,
  DataAnalytics,
  Advance,
  AIML,
  CDevops,
  Masterscontent,
  Banalytics,
  mangers,
  HRContent,
  Marketing,
  Bfsi,
  DevopsOnly,
  cComputingOnly,
}) {
  const [read, setRead] = useState(false);

  const handler = () => {
    setRead(!read);
  };
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };

  return (
    <div className={styles.container}>
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        downloadBrochure
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "350px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <Form dataScienceCounselling={dataScienceCounselling} />
        </div>
      </Popup>

      {Advance ? (
        <div className={styles.content}>
          <h2 style={{ fontSize: "30px" }}>
            Proliferate Your Success Probabilities With An Advanced
            Certification In Data Science and AI.{" "}
          </h2>
          <p>
            Interested in Data Science and AI, build a solid foundation for your
            career with Learnbay’s{" "}
            <b>Advance Data Science Certification Courses.</b> Learnbay ensures
            quality training to learners by providing flexible learning
            opportunities, domain electives, placement assistance, and hands-on
            industry-relevant projects. Ensure a lucrative career and thriving
            job opportunities with Learnbay’s Advanced Data Science and AI
            Certification Program.
          </p>
          {read ? (
            <>
              <h4 style={{ fontSize: "28px" }}>
                Acquaint Yourself With the Value of Advance Data Science
                Certification Courses.{" "}
              </h4>
              <h2 style={{ fontSize: "24px" }}>
                <b>What is Data Science? </b>
              </h2>
              {/* <h3>Course Overview</h3> */}
              <p>
                Data Science is a multidisciplinary field that makes use of
                various disciplines to extract insights from data. Currently,
                companies hold enormous amounts of data that contain some
                valuable information.
              </p>
              <p>
                It has to be identified, collected, and analyzed to make the
                most out of it. Data Science plays a vital role in such
                situations, it helps to manage, clean, and explore the data.
                Also, it builds models using the gathered information to predict
                outcomes and automate important tasks.
              </p>
              <p>
                Data Scientists, the practitioners of Data Science, will explain
                the findings and solutions through data storytelling to make
                everyone understand.
              </p>
              <p>
                Simply put, Data Scientists collect, clean, analyze, and explain
                the data through storytelling. At present, almost every company
                requires the help of the data science profession. Enroll in an
                <b>Advanced Certification in Data Science and AI</b> to succeed
                as a Data Scientist.
              </p>
              <h3>What is Artificial Intelligence? </h3>
              <p>
                Artificial Intelligence is a dynamic field of computer science
                that imitates human behaviour, intelligence, and decisions.
                Artificial Intelligence is like cognitive ability injected in a
                machine to mimic a human and act like a human. Artificial
                intelligence helps make decisions; recognize speech, images, and
                words; and analyze large amounts of information.
              </p>
              <p>
                At present, most companies and individuals use Artificial
                Intelligence to increase their productivity and efficiency by
                mimicking human intelligence at its best. To help you establish
                a solid career in AI, enroll in Learnbay's{" "}
                <b className={styles.links}>
                  <Link
                    href="https://www.learnbay.co/datascience/data-science-and-ai-masters-in-cs"
                    target="_blank"
                  >
                    master's in artificial intelligence
                  </Link>
                </b>
                .{" "}
              </p>
              <h3>Why is Data Science and AI important? </h3>
              <p>
                Data Science and Artificial Intelligence have been implemented
                in various fields to maximize productivity and efficiency.
                Businesses have started to leverage the use of large amounts of
                data with the help of data science and AI. Together these two
                technologies have contributed groundbreaking results and showed
                the potential of cutting edge technologies. The following points
                establish the importance of data science and AI.
              </p>
              <h3>
                Influencing Industries With Disruptive Technologies And
                Practices
              </h3>
              <p>
                Data Science and AI have impacted the way things work and move
                in certain industries. It has completely changed the way
                financial services operate, nowadays, the finance industry is
                heavily dependent on data science and AI. The term is not
                restricted solely to the finance industry but encompasses
                various industries such as Retail, Manufacturing, Healthcare,
                and Transportation.
              </p>
              <h3>
                Reinventing the Internet Presence And Improving Customer
                Engagement
              </h3>
              <p>
                In the era of smart devices, everyone uses the Internet not only
                to surf but to learn about new things, and to find and purchase
                new products. All the established companies regardless of their
                domains have been using AI to engage with the customers
                meaningfully. You can see the rise of Chatbots in the websites
                and applications of E-commerce and Banking companies. With the
                help of AI and data science, companies can strengthen their
                internet presence.
              </p>
              <h3>Efficient Decision-Making</h3>
              <p>
                Data Science and AI play an essential role when it comes to the
                decision-making process of a business. Companies are currently
                focused on getting data-driven insights to make efficient
                decisions. AI and Data Science provide companies and individuals
                with customized outlooks and experiences to select the best from
                available data.
              </p>
              <h3>Power To Solve Complex Problems</h3>
              <p>
                With the help of data science and AI, you can automate
                repetitive tasks, leading to less human intervention. This frees
                up more space and allocates those humans to work on complex
                problems. Also, using data science and AI, you can extract
                hidden insights from the large pile of datasets.
              </p>
              <p>
                With the proper guidance as a Data Science and AI practitioner,
                you can also come up with some breakthrough solutions. You can
                select a <b>data science course online</b> for flexibility and
                efficient training.
              </p>
              <h2>Why Go With A Data Science Course Online? </h2>
              <p>
                Data Science is a field that has expanded from a few industries
                to almost all the existing industries. The surge in the increase
                of data science professionals is the reflection of the demand
                upswing. You can find Data Scientists in all established
                corporations around the world.
              </p>
              <p>
                If you are interested and want to make a profitable and
                successful career in data science, choose wisely. A successful
                career in data science depends on your learning curve, and an
                Advanced Certificate Programme in Data Science will help you to
                achieve your goals.
              </p>
              <p>
                To help you out, Learnbay offers an Advanced Certification In
                Data Science and AI online program, including some unique
                features that benefit the learners in multiple aspects. This
                Data Science Certification Program contains features like:-
              </p>

              <h3>• 100% Career Assistance</h3>
              <p>
                Learnbay’s career services will make you job-ready and help you
                in all career aspects. To access career assistance services, one
                must secure a minimum score of 70% in their assigned tasks.
                Learners will get hands-on career assistance once they finish
                the assignments, case studies, projects, and assessments.{" "}
              </p>
              <p>
                Learnbay’s Career Service Pro features entail the following
                takeaways:
              </p>
              <ul className={styles.dothide}>
                <li>1. Resume building and optimization</li>
                <li>
                  2. Profile review and professional sessions to crack
                  interviews
                </li>
                <li>3. Unlimited interview calls </li>
                <li>4. Customized mock interview sessions </li>
                <li>
                  5. Feedback sessions to enhance the interview performance
                </li>
                <li>6. Industry-specific interview practices</li>
              </ul>

              <h3>• Certifications with Industry Recognition</h3>
              <p>
                Learnbay’s Advance Data Science Certification courses are
                inclusive of industry-accredited certifications. Their Advanced
                Data Science and AI program is an industry-accredited advanced
                certificate program in data science. Participants in this
                program, upon successful completion, will receive course
                completion certifications accredited by IBM and Microsoft.
                Furthermore, learners will also receive IBM-accredited project
                certification. These course completion certifications are
                globally recognized ones that help learners land a bankable job
                and assist in job promotion.
              </p>
              <h4>Versatile Domain Elective Options</h4>
              <p>
                Learnbay’s data science course online is one of the programs
                that offer domain electives to learners. Domain electives will
                be an edge for learners who want to land a job in a particular
                field. By opting for domain electives, learners will learn about
                a specific domain they are interested in. Learnbay offers
                different kinds of domains, they are as follows:
              </p>
              <ul>
                <li>
                  <li>• BFSI</li>
                  <li>• Healthcare</li>
                  <li>• Marketing</li>
                  <li>• Human Resources</li>
                  <li>• Supply Chain</li>
                  <li>• Manufacturing</li>
                </li>
                <ul />
                <h3>Hands-on Industry Relevant Projects</h3>
                <p>
                  In this Data Science Course Online, learners will receive
                  hands-on industry-relevant projects in real-time and can work
                  on capstone projects as well. While learners work on project
                  sessions, they will be guided by an experienced project
                  mentor. Another important and exciting feature is that
                  learners can work on offline projects in person under the
                  guidance of industry experts as well.
                </p>
                <h2>
                  Will An Advanced Certification In Data Science And AI Lead Me
                  To A Successful Career?{" "}
                </h2>
                <p>
                  Advanced certification programs will cover from top to bottom
                  the topics that are essential for your success and growth.
                  Programs with recognized certifications and advanced-level
                  training will boost your profile and professional development.
                  Upskilling with an advanced certification in data science and
                  AI, without a doubt, is a head start for your successful
                  career. Advanced-level certification programs will help you
                  become a team player, effective communicator, self-manage,
                  help with time management, and be more flexible and adaptable.{" "}
                </p>
                <h2>
                  Learnbay’s Advance Data Science and AI certification, is it
                  worth it?
                </h2>
                <p>
                  Among other advance data science certification courses,
                  Learnbay’s Advanced Certification in Data Science and AI will
                  lead you to a successful career.
                </p>
                <p>
                  This course’s curriculum is inclusive of comprehensive
                  training that is inclusive of domain electives to boost your
                  career value. This Advance Data Science and AI Certification
                  program is inclusive of projects spanning different industries
                  like finance, manufacturing, and more, this enables you to
                  gain more practical training which helps you to land a job at
                  top-tier companies.
                </p>
                <p>
                  Also, Learnbay’s Career Service Pro helps you in multiple
                  aspects so that you can land your dream job. You will be able
                  to crack interviews with the appropriate training from
                  industry experts.
                </p>
                <p>
                  You will receive excellent guidance from industry-experienced
                  experts with years of teaching experience. Learnbay’s
                  specialty lies in its flexible approach, as a learner you need
                  flexibility to manage your timings and here you will get to
                  attend learning sessions seamlessly according to your timings.
                </p>
                <p>
                  One-on-one doubt-clearing sessions ensure that the learners
                  will have face-to-face discussions with faculties to clarify
                  doubts effectively. You can set a session whenever you have a
                  doubt, it is an efficient way to improve your learning curve.
                </p>
                <p>
                  Plus, you will be receiving not one, but three globally
                  recognized certificates that lead you to your dream job. You
                  will receive hands-on experience by working on various
                  projects, including capstone projects. Additionally, to
                  provide you with more practical experience, Learnbay offers
                  access to startups and project sites to make you understand
                  how working professionals apply real-world applications.
                  <p>
                    To summarize, you will receive all the necessary training,
                    experience, and certifications to excel in the real-world
                    industry.
                  </p>
                </p>
              </ul>

              <div onClick={popupShow} className={styles.buttonDiv}>
                <Button bannerButton={true} text="DOWNLOAD SYLLABUS" />
              </div>
            </>
          ) : (
            ""
          )}
          <p
            style={{
              color: "#2D9CD7",
              fontWeight: "600",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handler}
            className={styles.readP}
          >
            {read ? "Read Less..." : "Read More..."}
          </p>
        </div>
      ) : (
        ""
      )}

      {AIML ? (
        <div className={styles.content}>
          
          <h2>
            Gain Expertise to Grow Beyond Technology with Artificial
            Intelligence Certification Program{" "}
          </h2>
          <p>
            Leap forward with the{" "}
            <b>Artificial Intelligence Certification Program</b> to unleash a
            data-driven future globally. Register with Learnbay’s{" "}
            <b>
              <i>
                ‘Advance AI & ML Certification Program for Tech Professionals’
              </i>
            </b>{" "}
            today. This program intends to bridge the learning gaps for tech
            experts and help them land attractive job prospects.
          </p>
          {read ? (
            <>
              <h4 style={{ fontSize: "28px" }}>
                Briefing on Cutting-edge AI &{" "}
                <b>Machine Learning Training for Tech Professionals</b>{" "}
              </h4>

              <h3>Introducing the Course </h3>
              <p>
                In fast-paced tech shifts worldwide, automation has become the
                latest development. Its dominance across diverse sectors
                encourages experts to upgrade themselves. As a result,
                Artificial Intelligence (AI) and Machine Learning (ML) are all
                set to make groundbreaking success. Following the trend,
                Learnbay introduces an Advanced AI and ML Certification Program,
                exclusively curated for IT experts. Learners aspiring to
                redefine their careers as per the AI & ML trends, find this
                course a game changer.
              </p>
              <h3>Overview of Current Industry Trends with AI & ML</h3>
              <p>
                The current state of the IT sector sees an alarming turn with
                the rise of AI. Its impactful presence across the tech sector
                transforms everything. AI extends business and social growth at
                large. Its imprints on human society and business space are all
                set to embark on a journey to see a seamless shift. AI evenly
                empowers tech experts to regain their career success with better
                opportunities. Eventually, the demand for an Advanced AI and ML
                program keeps increasing.
              </p>
              <p>
                Recent developments in AI models demand proven skill sets to
                sustain in the tech field. IT experts and leaders take online
                courses for tech skills development in AI and ML. Upskilling has
                become a mandate for many tech pros eager to kick-start their
                careers with the trending fields.
              </p>
              <p>
                The global AI market is projected to grow 36.8% by 2030, marking
                an undeniable presence globally. The rise of intricate
                Generative AI models demands proven expertise and an in-depth
                understanding of concepts. Thus, upskilling has become a wise
                decision for tech experts with relevant domain knowledge.
                Machine learning training for tech professionals has become a
                proven gateway to deal with GenAI trends.
              </p>
              <h3>
                Is upskilling with a Professional AI and ML Certification
                Program worth it?{" "}
              </h3>
              <p>
                If you are an IT pro with relevant years of experience,
                upskilling with an AI and ML Professional Certification is wise.
                In the space of automated operations, tech experts must refine
                their skill sets with in-demand AI/ML tools. It equips the
                career path with better job offers and attractive salary
                packages. Careful learning of the trending AI & ML tools makes
                you job-ready for cracking the jobs that are in demand these
                days.
              </p>
              <p>
                For this, check your eligibility that includes –
                <ul>
                  <li>• A working professional with basic domain knowledge</li>
                  <li>
                    • A pro having a graduation degree in any stream with good
                    academics
                  </li>
                  <li>• Basic knowledge of mathematics/statistics </li>
                  <li>• At least 1 year of work experience in any domain</li>
                </ul>{" "}
              </p>
              <h3>
                Briefing Learnbay’s{" "}
                <i>
                  Advance AI & ML Certification Program for Tech Professionals
                </i>
              </h3>
              <p>
                Learnbay envisions an automated future with proven skills in AI
                & ML. With trusted and experienced industry experts (mentors),
                it supports real-time career transition. Tech experts eager to
                gain hands-on expertise with cutting-edge AI/ML tools can opt
                for this program. Upskilling with an Artificial Intelligence
                Certification Program unlocks lucrative job offers.
              </p>
              <h3>
                Have a Look At the Impactful Features of Advanced AI and ML
                Certification
              </h3>
              <h4>• Exclusive Course for Tech Experts </h4>
              <p>
                Tech experts with their slow-paced careers can redefine
                themselves with this program. With basic domain knowledge and
                relevant work experience, techies can gain skills to deal with
                AI/ML trends. The professional AI and ML certification program
                offers open-learning space helping techies to gain success.
              </p>
              <h4>• Comprehensive Course Syllabus</h4>
              <p>
                <b>Advance AI & ML Certification Program</b> supports extensive
                learning of in-demand tools. This course offers precisely
                curated course content as per the latest trends in the AI/ML
                industry. It includes everything – from basic programming to
                trending Gen AI trends.
              </p>
              <h4>• Domain Electives</h4>
              <p>
                Techies can kick-start learning AI/ML tools to reshape their
                domain knowledge. This program has 6+ domain electives{" "}
                <i>
                  (BFSI, Manufacturing, Supply chain, HR, Marketing, and
                  Healthcare)
                </i>
                . Tech experts can choose any one domain and gain expertise in
                their field of interest.
              </p>
              <h4>• Renowned Experts as Mentors </h4>

              <p>
                It offers an open-learning platform with dedicated mentors from
                leading tech companies. Mentors offer personalized training to
                experts with 1:1 doubt clearing, project help, and placement
                support. Their irrefutable support for career shifts unleashes a
                bright future. Mentors offer relevant machine learning training
                for tech professionals to get better job offers from MNCs.
              </p>
              <h4>• 360-degree Knowledge Shaping with Live Projects </h4>
              <p>
                Advanced AI and ML Certification believes in thorough learning
                of leading tools. It industry-led training shapes your career to
                conquer success in the tech world. Hands-on learning via fresh
                live projects exposes real-world applications of AI/ML skills.
              </p>
              <h4>• Dedicated Placement Cell </h4>

              <p>
                This program offers a Job Assist Program with 100% dedicated
                placement help. Techies enrolling for this course get multiple
                job offers in their targeted roles across MNCs/MAANG. .
              </p>
              <h3>• Globally Recognized Industry Certifications </h3>
              <p>
                Enrolling in this program equips you with top-notch tech skills
                development in AI and ML. An{" "}
                <b>advanced AI and ML certification</b> brings extensive growth
                to your career and expands the earning limits. Here, you will
                get two-course certificates <i>(IBM & Microsoft)</i> and one
                project certificate <i>(IBM)</i>.
              </p>
              <h3>
                Learning Path of Professional AI and ML Certification Program
              </h3>
              <p>
                Techies eager to revamp their careers as per the latest AI/ML
                trends must enroll themselves in tech professional certification
                courses. This certification course crafts an inspiring learning
                path mending ways toward effective career growth. The learning
                path includes –
              </p>
              <ul>
                <li>
                  Specialized programming classes (Basic and Advanced level)
                </li>
                <li>Statistics and ML algorithms </li>
                <li>Data science tools </li>
                <li>Latest AI tools and trends</li>
                <li>
                  Deployment of Data Structures and Algorithms with basics{" "}
                </li>
                <li>Generative AI trends </li>
                <li>Future Trends</li>
                <h3>
                  Is AI/ML upskilling tough due to its expensive fee structure?{" "}
                </h3>
                <p>
                  Regardless of costly online courses, many techies opt for
                  AI/ML-led upskilling. Learnbay steps forward with its
                  industry-paced Artificial Intelligence certification Program
                  with a flexible fee structure. The program fee is INR 1,10,000
                  plus 18% GST. Yet, techies get a flexible payment option in
                  terms of installment. For this, learners can pay INR 7,211 per
                  month and start learning. It also offers a scholarship
                  facility (up to 25%) to eligible students, making their
                  learning journey hassle-free.{" "}
                </p>
                <p>
                  <b>
                    <i>Note:</i>
                  </b>{" "}
                  Working experts can also opt for{" "}
                  <b className={styles.links}>
                    <Link
                      href="https://www.learnbay.co/datascience/advance-data-science-certification-courses"
                      target="_blank"
                    >
                      Advance data science certification courses
                    </Link>
                  </b>{" "}
                  a to refine their skill sets as per the latest AI trends.
                </p>
              </ul>

              <div onClick={popupShow} className={styles.buttonDiv}>
                <Button bannerButton={true} text="DOWNLOAD SYLLABUS" />
              </div>
            </>
          ) : (
            ""
          )}
          <p
            style={{
              color: "#2D9CD7",
              fontWeight: "600",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handler}
            className={styles.readP}
          >
            {read ? "Read Less..." : "Read More..."}
          </p>
        </div>
      ) : (
        ""
      )}

      {DataAnalytics ? (
        <div className={styles.content}>
          <h2>Upskill Yourself with Data Analytics Course Online</h2>
          <p>
            Boost your career with Learnbay’s Data Analytics Program to land on
            the field of endless opportunities. Enroll in an industry-paced{" "}
            <b>online data analytics certification</b> in association with IBM.
            With existing domain knowledge, this course brings the massive
            privilege of having a job-ready future. From flexible learning
            platforms to 100% placement assistance, this course enhances your
            career to future-proof success.
          </p>
          {read ? (
            <>
              <h4 style={{ fontSize: "28px" }}>
                India’s Industry-led Best Online Data Analytics Course{" "}
              </h4>
              <h2 style={{ fontSize: "24px" }}>
                <b>Briefing With the Best Online Data Analytics Course </b>
              </h2>
              <h3>Course Overview</h3>
              <p>
                Amidst tech shift, this <b>data analytics online</b> training
                brings a universal course module curated with the latest data
                analytics tools. This guide offers a consistent learning scope
                for data enthusiasts to update their knowledge in data
                analytics. With flexible learning sessions (Live online/
                offline/ hybrid) and real-time industry projects, working
                professionals can unleash the power of data.
              </p>
              <p>
                Apart from this, a course completion certificate & capstone
                project certificate from <b>IBM,</b> level up the chances of
                career growth.
              </p>
              <h3>About IBM Certifications</h3>
              <p>
                Learnbay offers a scope of earning valuable certifications in
                the data analytics course program. The completion of the course
                program certifies the learners with IBM certifications (course
                completion and projects). Certification are like a getaway
                ticket to flourishing career growth scope in the trending
                industries. These certificates help the learners get better job
                offers & get interview calls from reputed MNCs.
              </p>
              <h3>What is Data Analytics?</h3>
              <p>
                At present, each sector deals with huge yet vague data.
                Extracting raw data is simple but real hardship starts with
                deriving facts. Data analytics deals with the most related tools
                that help experts gather valuable facts from the raw datasets.
              </p>
              <p>
                Strategically formed data helps business leaders reach better
                decisions. Data analytics tools guide data experts to improve
                their yield through better views of the trends & facts.
              </p>
              <p>
                From healthcare to the retail sector, all need data to function
                aptly. With the scope of data analytics tools, healthcare
                professionals can detect grave diseases & retailers can track
                consumer choices.
              </p>
              <p>
                Hence, data analytics has become pervasive with vast use in both
                tech and non-tech sectors. If you intend to pursue a career in
                data analytics, you must choose to enroll in an{" "}
                <b>online data analytics certification</b> program.
              </p>
              <h3>
                Why is Data Analytics important for the expert & the business?
              </h3>
              <p>
                Data analytics is a broad term that covers data analysis
                methods. With specific use of data analytics tools & techniques,
                an expert can study complex data patterns to reach the facts.
                Since the digital era surrounds industries, the need for
                seamless actions increases quickly.
              </p>
              <p>
                Some pros led by data analytics that make it vital for
                industries are -
              </p>
              <ul>
                <li>Impactful decisions made by the business leaders</li>
                <li>
                  Streamlining business actions as per industry trends with
                  fewer errors
                </li>
                <li>Insightful trace of risks and timely address</li>
                <li>Boost business yields</li>
                <li>Tailored offers to the customers backed with facts</li>
              </ul>
              <p>
                Yet, if you become a skilled data analyst through
                <b> data analytics online training</b>, you will learn about its
                real-time uses across firms.
              </p>
              <h3>Why Choose Data Analytics Program?</h3>
              <p>
                Data analytics skills are trending like hotcakes due to
                explosive growth in data usage. Due to this, a surge in demand
                for skilled data analysts is visible in each field. So, it's
                high time to make a wise career decision in data analytics that
                will help you to get into leading MNCs with alluring packages.
              </p>
              <p>
                Your dream to evolve as a data analyst can come true with a
                leading data analytics program. Learnbay offers the best online
                course for data analytics that equips you with
                <b> unique benefits like</b> -
              </p>
              <ul>
                <li>
                  <b>Flexible Learning Platform</b>
                </li>
                <p>
                  Learnbay’s data analytics program offers a flexible learning
                  setup for working professionals. The flexibility of the course
                  comes in two forms -
                </p>
                <ul style={{ listStyle: "lower-latin" }}>
                  <li>
                    <b>
                      <i>Flexible career move</i>
                    </b>{" "}
                    – The data analytics course program targets both tech &
                    non-tech enthusiasts. With basic knowledge of applied
                    mathematics, one can start learning data analytics. Unlike
                    in the past, data experts see diverse options for careers
                    that go beyond coding skills. Hence, with basic domain
                    knowledge & numerical skills, pursuing a career in data
                    analytics is possible. Learnbay ensures that professional
                    existing knowledge and years of experience do not get
                    wasted.
                  </li>
                  <br />
                  <li>
                    <b>
                      <i>Flexible sessions</i>
                    </b>{" "}
                    – This program offers an industry-paced training session for
                    the working experts on weekdays and weekends. Hence, having
                    a work-study balance is possible. Plus, the experts can opt
                    for classroom study or online training mode as per their
                    schedule. In the case of hybrid sessions, theoretical
                    training is open online, and real-time projects take place
                    in innovation labs.
                  </li>
                  <br />
                </ul>
                <li>
                  <b>Industry-led Training</b> <br />
                  It is simple to gain theoretical knowledge of data analytics
                  concepts, but the <b>best online data analytics course</b> It
                  is simple to gain theoretical knowledge of data analytics
                  concepts, but the best online data analytics course program
                  offers real-time learning. The custom-fit training scope with
                  this program provides the scope for mastering trending
                  analytics tools. Capstone projects allow you to learn the use
                  of analytics tools to hone your talent. Learnbay brings
                  industry-paced project innovation labs guided by experts to
                  train learners in real-time.
                </li>
                <br />
                <li>
                  <b>100% Job Assistance</b> <br />
                  Learnbay’s data analytics program brings a job-ready program
                  for learners who gain a least score of 70% in their tasks.
                  This job-ready program starts once you complete your capstone
                  projects, and case studies, & pass the assessments.
                  <br />
                  <br />
                  <b>What will you get from this program? </b>
                  <br />
                  <ul>
                    <li>
                      <b>○ years of placement support:</b> Learners will gain
                      uninterrupted placement help from experts until they land
                      a suitable job. It offers flexible access to job
                      interviews with MNCs.{" "}
                    </li>
                    <li>
                      <b>○ 6 1:1 mock interviews with Industry partners: </b>{" "}
                      Learners gain real-time insights into the latest trends
                      and attend mock interviews with 450+ industry partners. It
                      enhances the chances of landing a reputable job across
                      MNCs.
                    </li>
                    <li>
                      <b>○ Resume Preparation:</b> Mentors help learners revamp
                      their resumes with proven skills and validate them with
                      proper certifications.{" "}
                    </li>
                    <li>
                      <b>○ 1:1 LinkedIn profile review:</b> Learners gain help
                      with LinkedIn profile reviews and design creative cover
                      letters.{" "}
                    </li>
                    <li>
                      <b>○ 100% dedicated placement team:</b> Learners get
                      eligible for Career Service Pro after successful
                      completion of the course. It helps them secure good
                      positions in their desirable MNCs.{" "}
                    </li>
                  </ul>
                  <p>
                    Learnbay allies with 300+ placement & hiring partners that
                    conduct interviews in trending data roles. The aspirants
                    with good results will be eligible for Learnbay’s prime
                    mentoring & exclusive placement drive with industry leaders.
                  </p>
                  <p>
                    <b>
                      This program is available in offline mode at our
                      experience centers in top metro cities.
                    </b>
                  </p>
                </li>
                <li>
                  Globally Approved Certificate
                  <br />
                  <p>
                    The <b>online data analytics certification</b> is famous for
                    the worth a course completion certificate holds in real
                    time. Learnbay’s allies with IBM enhance the quality of the
                    certificate. The certificate helps you get lucrative job
                    offers with better salary hikes. It brings an excellent
                    career growth scope for the aspirants who learn, grow, and
                    succeed under tech giants like IBM. The best part here is,
                    that you get{" "}
                    <b>
                      <i>industrial project experience certification</i>
                    </b>
                    along with the course completion certificate. Plus, you can
                    opt for offline project sections under the in-person
                    supervision of industry experts.
                  </p>
                </li>
              </ul>
              <h3>Is Data Analytics Course Worth Pursuing? </h3>
              <p>
                The answer is yes. Amidst tech innovations in each sector, the
                need for a skilled data analyst continues to grow. The practice
                of extracting insights from raw data has become famous in the
                data field. The explosive use of data in the industry creates
                millions of analytics jobs each year.
              </p>
              <p>
                <i>
                  Projections reveal a growth of 23% in data analyst jobs by
                  2031.
                </i>{" "}
                Yet, <b>data analytics online training</b> can only lessen the
                skills gap in the industry.
              </p>
              <p>
                Irrespective of the domain skills, you can learn data analytics
                tools and use them in real time. An industry-paced course has
                the benefit of bringing course modules with the latest trends on
                the board. With the data analytics course program, you get
                eligible for job roles like business analyst, data engineer,
                domain-specific data analyst, quantitative analyst, and risk
                analyst.
              </p>
              <p>
                Also, upskilling gets easier with a proven course program. The
                <b>best online data analytics course</b> program offers training
                in Python programming, statistics, ML, SQL, PowerBI, Big data,
                time series, & advanced Excel. Thus, your duty of extracting
                insights from complex data gets easy. Yet, a career counseling
                session can clear your doubts clearer.
              </p>
              <h3>How does career counseling at Learnbay work? </h3>
              <p>
                Before opting for a data analytics course or any other course,
                an industry expert (career counselor) will approach you with the
                vital details. This session will guide you through industry
                trends in the field of data, your eligibility, and a wise career
                move that shall have a better scope for growth in the domain. A
                clear guide in this course program offers you room for wise
                investment in education.
              </p>
              <p>Learnbay’s career counseling offers –</p>
              <ul>
                <li>● 15–20 mins telephonic counseling</li>
                <li>● Career guidance from experts</li>
                <li>● Scholarship eligibility check and verification</li>
              </ul>

              <h3>Is data analytics an IT job? </h3>
              <p>
                No, the data analytics job is open for both tech & non-tech
                experts. But it requires basic knowledge of IT tools and
                programming languages like Python & SQL.
              </p>
              <p>
                <b>Then who must opt for a data analytics course?</b>
              </p>
              <p>Anyone who has - </p>
              <ul>
                <li>● A graduation degree with good academics</li>
                <li>
                  ● At least one year of work experience in the IT/Non-IT field
                </li>
                <li>
                  ● A career at early or mid-stage in any discipline wishful to
                  switch to a data analytics career
                </li>
              </ul>
              <p>
                <b>Note:</b> If you wish to have the upper hand in data science
                for better decision-making, then you must enroll for the{" "}
                <b className={styles.links}>
                  <a
                    href="https://www.learnbay.co/datascience/advance-data-science-certification-courses"
                    target="_blank"
                  >
                    advance Data Science and AI certification course
                  </a>
                </b>{" "}
                today.
              </p>
              <h3>Is Learnbay’s certification in data analytics worth it?</h3>
              <p>
                Once you are done with the data analytics course program
                successfully with a minimum of 70% marks, you get eligible for
                certification from IBM powered by Learnbay. Learnbay’s dual
                certification brings the scope of getting your resume
                highlighted amongst the crowd. The certification opens the
                chance for premium job roles in MNCs. Getting 70% marks in
                Learnbay is not an easy task unless you complete your course
                with a cent percent of dedication.
              </p>
              <p>Plus, you must opt for this due to the following reasons -</p>
              <ul>
                <li>
                  <i>Better access to start-ups and their project sites</i>
                </li>
                <li>
                  <i>Work with industry-level projects</i>
                </li>
                <li>
                  <i>Get a tag of globally recognized certified data analyst</i>
                </li>
              </ul>
              <h3>How to earn certification in data analytics?</h3>
              <p>
                Learnbay’s data analytics course online goes through counseling,
                learning, project work, & assessment to gain certification.
                Learning is the key step here that supports your theoretical and
                practical knowledge. If you can learn the concepts well, then
                you can pass the assessments & handle real-time projects too.
              </p>
              <h3>
                What are the domain specializations available? Is it necessary
                for you to choose one?
              </h3>
              <p>
                The <b>data analytics course online</b> by Learnbay curates a
                domain-specific program that helps learners to have
                industry-specific careers. The aspirants can choose any one
                domain and start making their profiles as data analysts in the
                same. From learning to real-time project work, learners must
                stick to one domain.
              </p>
              <h3>
                What are the domain specializations available? Is it necessary
                for you to choose one?{" "}
              </h3>
              <p>
                The data analytics course online by Learnbay curates a
                domain-specific program that helps learners to have
                industry-specific careers. The aspirants can choose any one
                domain and start making their profiles as data analysts in the
                same. From learning to real-time project work, learners must
                stick to one domain.
              </p>
              <p>Available domains are -</p>
              <ul>
                <li>
                  <i>Oil, Energy & Gas</i>
                </li>
                <li>
                  <i>Healthcare</i>
                </li>
                <li>
                  <i>BFSI</i>
                </li>
                <li>
                  <i>Manufacturing</i>
                </li>
                <li>
                  <i>Supply chain, E-Commerce & Retail</i>
                </li>
              </ul>
              <p>
                Domain specialization is vital for working professionals willing
                to make a career in a more focused field. A student with an MBA
                in HR or a B.Com in Accounts can opt for the HR analyst or
                Financial analyst role. Choosing the right domain makes the
                learning journey easy and data-driven.
              </p>
              <h3>
                Why is Learnbay tagged as the best online data analytics course
                provider?
              </h3>
              <p>
                The flexibility of learning is the first and foremost factor for
                joining Learnbay. Next, its collaboration with IBM offers you
                industry-level projects & global certification that opens up
                top-level job offers.
                <b>It offers you –</b>
                <ul>
                  <li>
                    Guaranteed interview calls from any of the 450+ MNCs
                    (industry partners)
                  </li>
                  <li>
                    Guaranteed interview calls from any of the 450+ MNCs
                    (industry partners)
                  </li>
                  <li>● Experiential learning space with live projects</li>
                  <li>● Domain-specific training</li>
                  <li>
                    ● Live instructor-led sessions with 1:1 doubt clearing
                  </li>
                  <li>
                    ● Personalized Resume & LinkedIn profile creation help
                  </li>
                </ul>
              </p>
              <div onClick={popupShow} className={styles.buttonDiv}>
                <Button bannerButton={true} text="DOWNLOAD SYLLABUS" />
              </div>
            </>
          ) : (
            ""
          )}
          <p
            style={{
              color: "#2D9CD7",
              fontWeight: "600",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handler}
            className={styles.readP}
          >
            {read ? "Read Less..." : "Read More..."}
          </p>
        </div>
      ) : (
        ""
      )}
      {CDevops ? (
        <div className={styles.content}>
          <h2>Advanced Cloud Computing & DevOps Certification Program </h2>
          <h4 style={{ fontSize: "24px" }}>
            Demonstrate Your Technical Expertise with a Cloud Computing
            Certification
          </h4>
          <p>
            Elevate your technical knowledge to attain success in today’s
            reforming tech world. Enroll today with Learnbay’s{" "}
            <i>
              <b>Advanced Cloud Computing & DevOps Certification Program</b>
            </i>{" "}
            and unleash infinite scope of growth. Upskill with an industry-paced{" "}
            <b>cloud computing certification</b> and land your dream career.
          </p>
          {read ? (
            <>
              <h4 style={{ fontSize: "28px" }}>
                Briefing with the Industry-paced Cloud Computing Online Courses{" "}
              </h4>

              <h3>Course Overview</h3>
              <p>
                Amidst the Industrial Revolution, digital creations gained
                momentum in the recent few years. Cloud computing is the most
                buzzed tech shift taking place worldwide. With a rising margin
                in the industry, most IT experts step forward to career
                transition. Comprehensive learning of in-demand cloud skills via
                live instructor-led training paves the way toward DevOps
                certification. Its flexible training sessions with live projects
                support tech career-building with 100% success.
              </p>
              <p>
                Apart from the 360-degree knowledge-building platform, this
                course also offers dual certification from{" "}
                <i>
                  <b>IBM & Microsoft</b>
                </i>
                .
              </p>
              <h3>Know Everything About Dual Certification</h3>
              <p>
                Learnbay offers a globally recognized Cloud technology
                certification from tech giants such as IBM & Microsoft. Elevate
                your career level with internationally accredited dual
                certification. It acknowledges the Cloud and DevOps skills and
                validates your tech career with assured job offers. Dual
                certification includes course completion certificates and
                capstone project certificates.
              </p>
              <h3>Cloud Computing & DevOps in Brief </h3>
              <p>
                Cloud computing is a network connection that links the internal
                servers of a firm. Its flexible interaction with many servers
                over the internet. It helps in data storing, extracting, and
                handling. Its encrypted configurations help experts work within
                a secured environment while handling complex data sets.
              </p>
              <p>
                In short, cloud computing platforms deliver benefits in terms of
                cost-effectiveness, speed, scalable operations, seamless access,
                and security. <b>Cloud computing online courses</b> guide
                learners to gain excellence with related skills.
              </p>
              <p>
                DevOps refers to the method of enhancing a system’s capability
                to deliver optimized products and services. It denotes the
                merger of development and operations linked with the IT
                industry. DevOps has become a popular concept over the years,
                discarding traditional ways of designing software products. It
                integrates systems to deliver faster and more scalable
                offerings.{" "}
              </p>
              <p>
                From a career upfront, <b>AWS DevOps certification</b> justifies
                your career enhancement journey. It unlocks ways to crack
                progressive careers in the IT sector with DevOps practices.
              </p>
              <h3>Cloud Computing Turning Game-changer for Businesses </h3>
              <p>
                Businesses deal with multiple stakeholders to meet their end
                goals. Thus, firms must stay resourceful, competitive, and
                flexible to thrive in their sector. This is why, over 94% of
                companies all over the world use some means of cloud services.
                It helps firms to have seamless operations with higher yields.
              </p>
              <p>
                <b>
                  Some proven benefits of building a cloud-based culture in
                  firms are –
                </b>
                <ul>
                  <li>• Scale up the yields of your businesses</li>
                  <li>• Optimization of business processes</li>
                  <li>• Resourcefulness </li>
                  <li>• Cost-saving measures with increasing revenues</li>
                  <li>• Flexible operations with IT systems</li>
                  <li>• Timely meeting of industry demands</li>
                </ul>{" "}
              </p>
              <h3>Importance of Cloud Computing skills for tech experts </h3>
              <p>
                Tech experts need to upgrade their skill sets as per the latest
                trends. Owing to the rising uses of cloud services, IT experts
                (developers, engineers, and coders) must learn cloud computing.
                Firms search for certified cloud experts to help them deal with
                vast IT systems and scale up yields. Thus, IT pros must upskill
                via cloud technology certification to future-proof their skills.
              </p>
              <i>
                <b>Note:</b> Experts enrolling in a certificate course in
                business analytics can also upgrade their skills to sustain in
                the field. Yet, knowledge of Cloud skills gives better results.
              </i>
              <h3>DevOps Redefining Businesses in Today’s Era!!</h3>
              <p>
                Businesses from diverse fields use vast IT systems for many
                operations. It covers software product development and operation
                handling for better yields. Thus, DevOps has become a popular
                method for handling the software development lifecycle. Some
                usefulness of DevOps in today’s businesses are –
              </p>
              <ul>
                <li>• 360-degree software development lifecycle management</li>
                <li>• Secured configuration</li>
                <li>• Continuous integration and quality deliveries</li>
                <li>• Transparent communication with teams</li>
                <li>• Reliable and risk-free operations</li>
                <li>• Cost-saving business processes</li>
                <li>• Faster, reliable, and resourceful deliveries</li>
              </ul>
              <h4>
                Is Cloud Computing Certification worth it to sustain in the IT
                sector?{" "}
              </h4>
              <p>
                Yes, certification in cloud skills is worth enough to retain
                your tech career. Firms are marking groundbreaking success due
                to cloud computing solutions. Hence, upskilling with in-demand
                cloud skills is essential for experts. Yet, one must opt for
                cloud computing certification with an industry-driven institute
                to unlock better career scopes. Certificates validate the skills
                to crack better job offers with hands-on learning of the
                trending cloud tools.
              </p>
              <h4>
                Key Features of Advanced Cloud Computing & DevOps Certification
                Program
              </h4>
              <p>
                The Cloud computing market in India projects to see a growth of
                18.37% by 2029. Firms in private and public sectors are
                welcoming cloud services with open hands. It has been an
                industry player in the recent few years. Its integration with
                DevOps enables flexible, seamless, and scalable offerings.
              </p>
              <p>
                AWS, Microsoft Azure, Google Cloud, etc, have been prominent
                creations to support firms scaling up their yields. Thus,
                enrolling in the AWS DevOps Certification is an effective way to
                future-proof your tech career.
              </p>
              <p>
                Here, you can opt for the ‘Cloud Computing & DevOps
                Certification Program’ to gain excellence with experiential
                learning. Some exciting features that it offers are –
              </p>
              <h4>• Book your consultation with experts before you enroll</h4>
              <p>
                Learners opting for this course can go for career counseling
                with career experts. It is a telephonic discussion of 15 – 20
                mins. In case of request, learners can have 1:1 direct sessions
                with counselors. Learners can clear any query related to the
                Cloud and <b>DevOps certification online</b> sessions.
              </p>
              <h4>• Industry-paced Course Syllabus </h4>

              <p>
                It offers an open-learning platform with dedicated mentors from
                leading tech companies. Mentors offer personalized training to
                experts with 1:1 doubt clearing, project help, and placement
                support. Their irrefutable support for career shifts unleashes a
                bright future. Mentors offer relevant machine learning training
                for tech professionals to get better job offers from MNCs.
              </p>
              <h4>• 360-degree Knowledge Shaping with Live Projects </h4>
              <p>
                The Cloud and DevOps course syllabus considers the latest
                industry trends. It is comprehensively curated to meet the
                expectations of top-tier MNCs/MAANG. Learners will gain live
                instructor-led training from renowned industry experts. You will
                gain a 360-degree knowledge-building scope – from programming
                languages to cloud deployment.
              </p>
              <h4>• Inclusive & Flexible Training Sessions </h4>

              <p>
                This course offers an inclusive learning space to IT pros eager
                to future-proof their tech careers. Learners get a flexible
                training schedule that won’t hamper their work-study balance.
                You can either opt for weekday or weekend training sessions at
                your convenience. Renowned faculties from leading tech companies
                support your learning as mentors.
              </p>
              <h3>• Experiential Learning </h3>
              <p>
                Learners opting for this course gain experiential learning with
                learned tools. Azure DevOps certification helps learners work
                with fresh capstone projects in offline project innovation labs.
                Mentors guide and support learners to see through actual
                business issues and tackle them. Learners have 10+ real-time
                stimulated projects and they can choose one as per their
                interests.
              </p>
              <h3>• Dedicated Placement Assistance (Career Service Pro)</h3>
              <p>
                Learners opting for Cloud and DevOps certification will get 100%
                dedicated placement support. Under this, learners will get a
                Career Service Pro benefit including 1:1 doubt-clearing, resume
                preparation, LinkedIn profile creation, mock interviews, and
                unlimited interview calls.
              </p>
              <h3>• Globally-recognized Certifications</h3>
              <p>
                Learners opting for <b>cloud computing online courses</b> will
                gain dual certification from IBM & Microsoft. This program
                includes course completion certificates from IBM & Microsoft and
                a project certificate from IBM. These certificates are highly
                valued and enhance the chances of getting selected across MNCs.
              </p>
              <h3>
                How does Career Service Pro support the career transition of
                tech pros? What are its core features?
              </h3>
              <p>
                Cloud and <b>DevOps certification online</b> offers the
                privilege of having dedicated placement support. Eligible
                learners (one with at least 70% scores in assessments) will get
                the benefit of ‘Career Service Pro’ for successful transition.
                It helps learners overcome their redundant skill sets and
                future-proof with new ones.
              </p>
              <i>Core features are –</i>
              <ul>
                <li>• 3 years of Job Assistance</li>
                <li>
                  • 6 mock interviews with renowned experts from MNCs/MAANG{" "}
                </li>
                <li>• Resume preparation help </li>
                <li>• 1:1 LinkedIn Profiling</li>
                <li>• Dedicated Placement team </li>

                <h3>
                  Is Learnbay’s <b>Cloud Computing certification</b> worth it?{" "}
                </h3>
                <p>
                  Yes, upskilling with Learnbay’s cloud and DevOps certification
                  is worthy enough to lift your career with alluring offers.
                  Have a look into the USPs of the course that level up your
                  success rates –
                </p>
                <ul>
                  <li>• Career Counselling</li>
                  <li>
                    • Comprehensively designed Cloud and{" "}
                    <b>DevOps course syllabus</b>
                  </li>
                  <li>• Flexible live instructor-led training</li>
                  <li>
                    • Affordable course fees with flexible payment options
                  </li>
                  <li>• Up to 25% scholarship for eligible students</li>
                  <li>• Hands-on learning of tools via live projects</li>
                  <li>• Career Service Pro</li>
                  <li>
                    • Globally-recognized certifications{" "}
                    <i>(IBM & Microsoft)</i>
                  </li>
                </ul>
                <h3>
                  Is Learnbay’s Cloud Computing online courses affordable?{" "}
                </h3>
                <p>
                  Yes, Learnbay introduces an industry-paced cloud program with
                  an affordable fee structure. Its cloud course fees cost INR
                  1,10,000 + 18% GST. It includes a flexible financing plan with
                  easy payment options – No-cost EMI and easy loans. With this,
                  one can pay INR 7,211 per month and start learning.{" "}
                </p>
                <h3>
                  Can Cloud and DevOps certification unlock better job prospects
                  in the IT sector?
                </h3>
                <p>
                  Cloud skills are trending in the IT sector, bringing alluring
                  job offers for IT experts. Thus, upskilling with an
                  industry-paced cloud technology certification is useful. It
                  unlocks better job prospects with attractive salary packages.
                  The average salary of a Cloud Engineer in India is INR
                  7,65,507 per annum.
                </p>
                <p>
                  DevOps skills are leading the tech industry and becoming a
                  hope for many IT experts to craft a successful career. It
                  expands your earning potential with a bright future. The
                  average salary of a DevOps engineer is INR 8,00,000 per annum.
                  Thus, you can choose the right career path with lucrative job
                  offers.{" "}
                </p>
                <h3>
                  Which certification is beneficial for IT experts eager for a
                  career in DevOps?
                </h3>
                <p>
                  AWS & <b>Azure DevOps certification</b> is vital for an IT
                  expert to redefine a slow-paced career with multiple offers.
                  Learnbay’s globally recognized certification is equivalent to
                  these certifications that will make you job-ready. It
                  future-proofs your skills via fresh capstone projects and
                  dedicated mentoring.
                </p>
              </ul>

              <div onClick={popupShow} className={styles.buttonDiv}>
                <Button bannerButton={true} text="DOWNLOAD SYLLABUS" />
              </div>
            </>
          ) : (
            ""
          )}
          <p
            style={{
              color: "#2D9CD7",
              fontWeight: "600",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handler}
            className={styles.readP}
          >
            {read ? "Read Less..." : "Read More..."}
          </p>
        </div>
      ) : (
        ""
      )}

      {DevopsOnly ? (
        <div className={styles.content}>
          <h2>Advanced DevOps Certification Program </h2>
          <h4 style={{ fontSize: "24px" }}>
            Learnbay’s Industry-specific DevOps Course with Certification
          </h4>
          <h3 style={{ fontSize: "20px" }}>Course Overview</h3>
          <p>
            Today’s IT sector welcomes major operating shifts due to the
            fast-paced rise of tech creations. Knowing the trending tools is
            crucial if you’re from the IT sector and eager to update your
            career. DevOps has become the latest buzzword in the IT industry,
            paving the way for resilient deployment and related tasks.
          </p>
          {read ? (
            <>
              <p>
                Constant skill upgrades are vital for techies to stay ahead of
                the career race. Hence, learning from a DevOps course with
                certification paves the way for an exciting tech career.
              </p>
              <p>
                The rapid rise of DevOps models alters the classic software
                development and related IT functions. Learnbay notifies the
                Advanced DevOps Certification Program, guiding techies with
                proven career shifts. Our regularly updated course syllabus
                guides techies in learning and practicing emerging DevOps tools.
                <p>
                  Plus, techies can validate their skills with dual
                  certifications (IBM & Microsoft) to ascertain global-level
                  success.
                </p>
              </p>
              <h3>Learn More About Dual Certifications </h3>
              <p>
                Learnbay sets the stage for inclusive skills growth for IT
                experts in various career levels. Our alliance with top tech
                leaders IBM & Microsoft escalates success metrics with alluring
                perks. Techies willing to rebuild their careers in top-tier
                fields must upskill themselves as per the rising DevOps trends.
                We attest globally valued dual certifications to your career,
                driving notable gains. Learners will obtain IBM & Microsoft
                certifications after they complete coursework and projects.
              </p>
              <h3>DevOps: A Latest Digital Creation!! </h3>
              <p>
                The bustling path of today’s tech world embraces DevOps as a new
                form of software creation and delivery. DevOps is the fine
                unison of development and operations, fostering a culture of
                resilient IT functions. The present IT sector relies on DevOps
                for seamless operations – idea generation to deployment.
              </p>
              <p>
                The leading tech firms adopt the DevOps model to respond
                properly to the changing market dynamics. The rise of DevOps
                drives maximum efficiency in meeting user needs with agile
                solutions. Industry facts state that around 85% of firms cherish
                potential gains after adopting DevOps practices. Firms with fine
                DevOps skills can discard inherent risks and ensure data
                security.
              </p>
              <p>
                Upskilling is the right method to attain global-scale success in
                the rising IT sector. Techies upskilling via leading DevOps
                training institutes can attain exciting career gains in today’s
                tech age.
              </p>
              <h3>DevOps Optimizing Business Returns </h3>
              <p>
                The rise of DevOps brings alluring gains to global businesses.
                DevOps practices boost the culture of tech creation, driving
                user satisfaction and retention. It enhances collaboration and
                makes the best possible solutions for optimal business growth.
                Some of the major benefits that firms can have via DevOps
                practices are –
              </p>
              <ul>
                <li>Enriching business efficacious </li>
                <li>Team collusion</li>
                <li>Cost-saving ways of working</li>
                <li>Data security and safety </li>
                <li>Faster and agile software solutions </li>
                <li>Scalable results during the deployment and refinement</li>
                <li>Automation of business tasks with higher yields </li>
                <li>Enriching business credibility </li>
              </ul>
              <h3>Importance of DevOps Skills for Tech Experts </h3>
              <p>
                DevOps is the most trending tech creation, lifting business
                growth with definite gains. Automation is the future of the
                rising IT sector, and techies with proven DevOps skill sets can
                accelerate a firm’s success. Hence, MNCs prefer hiring skilled
                DevOps experts with proven knowledge of the latest trends.
                Upskilling via Learnbay’s Advanced DevOps course is useful for
                techies willing to learn in-demand tools and attain success. .
              </p>
              <p>
                <b>
                  Quality learning of DevOps practices and principles equips
                  tech experts with skills –
                </b>
                <ul>
                  <li>• Faster delivery of products/services </li>
                  <li>• Error-free tasks</li>
                  <li>• Work automation </li>
                  <li>• Decreasing intricacies</li>
                  <li>• More scalable and agile solutions </li>
                  <li>• Cost-saving methods for tasks</li>
                </ul>{" "}
              </p>
              <h3>
                Is a DevOps certification course worth investing in to prosper
                in today’s tech sector?{" "}
              </h3>
              <p>
                Today’s tech sector declares rapid growth in working dynamics,
                inspiring techies to upgrade their skills regularly. Upskilling
                is the optimal way to succeed and gain engagement in the tech
                era.
              </p>
              <p>
                IT experts with proper DevOps skill sets can face the changing
                industry trends and reach the peak of success. Unlike typical
                courses, learning from the leading DevOps training institutes is
                worth investing in.
              </p>
              <p>
                Our DevOps training with placement unleashes the way to build a
                global-level career with the leading MNCs. Learners will also
                receive IBM & Microsoft certifications by the end of the course
                and projects.{" "}
              </p>
              <h3>
                Enlisting Core Features of DevOps Course with Certification
              </h3>
              <p>
                Upskilling with Learnbay’s best DevOps certification course
                online enriches your earning limits and career values. Core
                features include –
              </p>
              <ul>
                <li>
                  <h5>Upskilling via inclusively designed courses</h5>
                  <p>
                    Techies eager to revamp their careers prefer upskilling from
                    a worthy training institute with a frequently revised
                    syllabus. Our DevOps certification course modules include
                    the latest tools and trends vital for techies to learn. Our
                    live instructor-led training sessions with proven mentorship
                    help you gain abstract and practical learning.{" "}
                  </p>
                </li>
                <li>
                  <h5>Practice-based learning methods</h5>
                  <p>
                    DevOps is the latest trend, and it has many integrated
                    functionalities. Hence, techies must learn and practice the
                    proven tools via live projects to gain insights. Our
                    leading-edge DevOps training institutes guide techies to
                    work with 10+ real-world projects. Here, techies can choose
                    their projects and learn the real-world uses of DevOps
                    concepts.{" "}
                  </p>
                </li>
                <li>
                  <h5>100% Career Support Services</h5>
                  <p>
                    Techies joining our DevOps course with placement can avail
                    of hassle-free career support services. Here, techies can
                    redefine their careers with proven skills and enrich their
                    job selection chances. Eligible learners with at least 70%
                    scores can avail of ‘Career Service PRO’. Techies will gain
                    every career benefit under this course – from 1:1
                    doubt-clearing to resume-making.{" "}
                  </p>
                </li>

                <li>
                  <h5>Global certifications</h5>
                  <p>
                    Techies joining our DevOps course with certification can
                    validate their skills with exciting career gains. The
                    program offers two-course completion certificates from IBM &
                    Microsoft and one IBM project certificate.{" "}
                  </p>
                </li>
              </ul>
              <h4>
                How does Learnbay’s Job Assist Program help techies stay
                competitive? List our core features.
              </h4>
              <p>
                Learnbay is the prime upskilling hub for techies eager to
                relaunch their careers in DevOps. Here, eligible learners with
                at least 70% of scores in tasks and projects avail of career
                support services. Our DevOps training with placement equips
                techies with eternal career growth options.
              </p>
              <i>
                <b>Our Career Service PRO includes –</b>
              </i>

              <ul>
                <li>3 years of Job and Placement Support</li>
                <li>6 mock interviews with renowned experts from MNCs/MAANG</li>
                <li>Resume review</li>
                <li>1:1 LinkedIn Profiling</li>
                <li>Reliable Placement team</li>
              </ul>

              <h4>
                Is Learnbay’s DevOps course with certification worth it for
                upskilling?{" "}
              </h4>

              <p>
                Learning with our DevOps certification course is worth it for
                thriving career building. Its regularly updated course modules
                help techies refine their skills and land their dream roles. To
                be precise, of key tools and trends in DevOps.
              </p>
              <i>
                <b>Some elite factors that level up career worth are –</b>
              </i>
              <ul>
                <li>
                  Career advice from reputed industry experts in the tech world
                </li>
                <li>All-inclusive course syllabus</li>
                <li>Practical learning via real-time projects </li>
                <li>Career Service PRO</li>
                <li>Affordable fee structure </li>
                <li>DevOps certification from Microsoft (Course)</li>
                <li>IBM DevOps certification (Course & Project)</li>
              </ul>
              <h4>
                Does Learnbay’s DevOps Certification Course offer affordable
                upskilling?{" "}
              </h4>

              <p>
                Yes, Learnbay’s Advanced DevOps Certification Program costs you
                INR 55,000 + 18% GST (with INR 5,408 installments per month).
                Experts can opt for flexible payment options with no-cost EMI
                and easy loans.
              </p>
              <h4>
                Can upskilling from DevOps training institutes unlock better
                career growth options in today’s tech age?{" "}
              </h4>
              <p>
                DevOps learning is useful for techies willing to crack better
                job offers in today's rapidly changing tech age. A certified
                DevOps Engineer earns INR 840,000 annually, which can vary
                depending on your work experience and skill set. Hence,
                upskilling from a DevOps course with certification is useful to
                unleash alluring career offers.
              </p>

              <div onClick={popupShow} className={styles.buttonDiv}>
                <Button bannerButton={true} text="DOWNLOAD SYLLABUS" />
              </div>
            </>
          ) : (
            ""
          )}
          <p
            style={{
              color: "#2D9CD7",
              fontWeight: "600",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handler}
            className={styles.readP}
          >
            {read ? "Read Less..." : "Read More..."}
          </p>
        </div>
      ) : (
        ""
      )}
      {cComputingOnly ? (
        <div className={styles.content}>
          <h2>Best Cloud Computing Certification Course </h2>
          <h4 style={{ fontSize: "24px" }}>Online | Learnbay</h4>
          <p>
            Accelerate technical skills and success limits in today’s tech
            landscape. Enroll in Learnbay’s cloud computing certification course
            today to ascertain global success. Upskill via industry-driven
            courses and land your dream roles in the emerging tech world via IBM
            & Microsoft Certifications.
          </p>
          {read ? (
            <>
              <h3>
                Briefing Learnbay’s Industry-paced Cloud Computing Programs{" "}
              </h3>

              <h3>Course Overview</h3>
              <p>
                In today’s rapidly rising tech era, global businesses rely
                heavily on massive data sets to make informed moves. Meanwhile,
                data storage and optimization have become prime factors to lift
                business yields. Hence, many reputed MNCs prefer adopting cloud
                computing for seamless data solutions.
              </p>
              <p>
                The fast-paced, changing tech space demands cutting-edge skills
                with leading cloud tools. Learnbay marks a historic move,
                declaring the Advanced Cloud Computing Certification Program
                driving global-scale success for techies. This cloud computing
                certification course equips tech experts with proven skill sets
                to thrive.
                <p>
                  Techies enrolling in this course will revamp their careers
                  with global job offers. Plus, our USP of offering dual
                  certifications (IBM & Microsoft) escalates success metrics.
                </p>
              </p>
              <h3>Dual Certifications in Brief!!</h3>
              <p>
                Learnbay offers an open learning edge with global scale credit
                of learned skill sets with its dual certifications. Our alliance
                with IBM & Microsoft validates your skills to land your dream
                roles and attain tempting success. Now it's your turn to
                accelerate success extents with IBM & Microsoft certifications
                for the course and project tasks.
              </p>
              <h3>Cloud Computing: An Eminent Tech Creation</h3>
              <p>
                Amidst the fast-paced tech evolution, cloud computing has taken
                a central role across the global digital space. The 21st Century
                is an eyewitness to the massive growth of cloud computing across
                various sectors. Owing to the rising reliance on data-driven
                business models, demand for cloud computing boosts. Hence, the
                present business landscape invests everything in cloud
                technology to upscale operating powers and forge higher yields.
              </p>
              <p>
                Cloud computing refers to seamless data storage, extraction, and
                handling functions. Clouds are hosted services that connect
                various servers for hassle-free data functions. Firms can easily
                store their data in the cloud without human interruption. Unlike
                classic data storage methods, cloud computing builds a secure
                platform for handling complex data sets.
              </p>
              <p>
                Cloud-driven data solutions work with various platforms designed
                for firms of different scales of operation. Hence, techies must
                gain fine knowledge and skills in choosing the right cloud
                computing platforms with proven data-driven tactics. Techies
                upskilling via a cloud computing training institute can elevate
                their skills and learn to choose the right cloud platform.
              </p>
              <h3>Cloud Computing Leveraging Business Outcomes </h3>
              <p>
                Today’s digital space boosts firms to leverage their ways of
                operating in diverse markets. Firms with huge data sets adopt
                various tech-driven methods for various goals. A company
                comprises various stakeholders who are integral to daily
                activities and decision-making processes.
              </p>
              <p>
                As per the market reports, over 94% of firms rely on cloud-based
                services to optimize their yields. It reduces a firm’s costs and
                expands profit margins.
              </p>
              <i>
                <b>
                  Some proven benefits that firms can have via cloud-based
                  services are –
                </b>
              </i>
              <ul>
                <li>Enriching business yields</li>
                <li>Business process optimization</li>
                <li>Cost-effective methods with higher yields</li>
                <li>Seamless and agile business functions </li>
                <li>Data security and safety </li>
                <li>Blending industry trends for better results</li>
              </ul>
              <h3>
                Essence of Cloud-driven Skills for Techies in Today’s Era{" "}
              </h3>
              <p>
                Cloud computing is the latest buzzword that is crafting a
                seamless and automated future for firms. Techies eager to revamp
                their careers in today’s ever-changing digital era must upskill
                from the best institute for cloud computing. IT experts from
                diverse fields must gain cloud skills and refine their abilities
                to stay competitive.
              </p>
              <p>
                <b>
                  Proven learning of cloud computing enriches a tech career with
                  vital gains like –
                </b>
                <ul>
                  <li>• Devising cost-saving methods for tasks </li>
                  <li>• Scaling up business yields</li>
                  <li>• Flexible union with various teams </li>
                  <li>• Data security</li>
                  <li>• Increasing competitiveness </li>
                </ul>{" "}
              </p>
              <h3>
                Is a cloud computing certification course worth investing in to
                sustain in today’s tech world?{" "}
              </h3>
              <p>
                Yes, joining the best certification courses for cloud computing
                is helpful for techies to sustain themselves in the industry.
                Constant learning informs you of the latest cloud trends, tools,
                platforms, etc. It helps techies gain an upper edge in rising
                markets. Certification courses validate your tech skills and
                attest useful credentials to your career.
              </p>
              <p>
                Learning with globally recognized certifications enriches your
                earning limits. It unlocks global-scale job offers with alluring
                pay scales. Hence, it is worthy enough to invest in any of the
                trending courses with globally valued certificates.
              </p>

              <h3>Featuring Cloud Computing Courses</h3>
              <p>
                Industry-focused cloud computing programs enrich career values
                with their elite features, attracting a massive alert for tech
                experts. Such features are –
              </p>
              <ul>
                <li>
                  <h5>Upskilling via comprehensively designed courses</h5>
                  <p>
                    Techies eager to revamp their careers prefer upskilling from
                    a reputed training institute with a frequently updated
                    syllabus. Our cloud computing course modules include the
                    latest tools and trends vital for techies to learn. Our live
                    instructor-led training sessions with proven mentorship help
                    you gain abstract and practical knowledge.{" "}
                  </p>
                </li>
                <li>
                  <h5>Practice-based learning methods</h5>
                  <p>
                    Cloud computing is a complex trend with lots of critical
                    functionalities. Hence, techies must learn and practice the
                    proven tools via live projects to gain insights. Our
                    leading-edge cloud computing programs guide techies to work
                    with 10+ live projects. Here, techies can choose their
                    projects to know the real-world uses of cloud computing.{" "}
                  </p>
                </li>
                <li>
                  <h5>100% Career Support Services</h5>
                  <p>
                    Techies joining our cloud computing certification course can
                    avail of hassle-free career support services. Here, techies
                    can redefine their careers with proven skills and enrich
                    their job selection chances. Eligible learners with at least
                    70% scores can avail of ‘Career Service PRO.’ Techies will
                    gain every viable career benefit under this program – from
                    1:1 doubt-clearing to resume-making.
                  </p>
                </li>

                <li>
                  <h5>Global certifications</h5>
                  <p>
                    Techies joining our cloud computing training institute can
                    validate their skills via our global-scale certifications
                    from IBM & Microsoft. The program offers two-course
                    completion certificates from IBM & Microsoft and one IBM
                    project certificate.{" "}
                  </p>
                </li>
              </ul>
              <h4>
                How does a career support service from a cloud computing
                training institute support techies? Enlist the core features.
              </h4>
              <p>
                Learnbay is the best institute for cloud computing, and it
                offers hassle-free career support services. Techies enrolling in
                our courses gain the edge of effortless job support. Eligible
                experts with proven skills and at least 70% scores in tasks can
                avail of our ‘Career Service PRO’ for a thriving career shift.
              </p>
              <i>
                <b>Core features are –</b>
              </i>

              <ul>
                <li>3 years of Job and Placement Support</li>
                <li>6 mock interviews with renowned experts from MNCs/MAANG</li>
                <li>Resume review</li>
                <li>1:1 LinkedIn Profiling</li>
                <li>Dedicated Placement team</li>
              </ul>

              <h4>
                Is Learnbay’s cloud courses online worth it for upskilling?{" "}
              </h4>

              <p>
                Yes, upskilling via Learnbay’s cloud computing courses is
                helpful for techies to upscale their skills and confirm
                global-scale success. Its frequently updated course modules help
                techies stay informed of the latest growth and rise globally.
                Joining us will equip you with skills to face and tackle
                real-world issues.
              </p>
              <i>
                <b>
                  Our course USPs will always keep you competitive and ahead of
                  the career race with vital gains. These benefits are –
                </b>
              </i>
              <ul>
                <li>
                  Career advice from reputed industry experts in the tech world
                </li>
                <li>All-inclusive course modules </li>
                <li>Practical learning via live projects </li>
                <li>Career Service PRO</li>
                <li>Affordable fee structure </li>
                <li>Cloud computing certification Microsoft (Course)</li>
                <li>IBM cloud computing certification (Course & Project)</li>
              </ul>
              <h4>
                Does Learnbay’s best certification courses for cloud computing
                offer affordable learning?
              </h4>

              <p>
                Yes, Learnbay declares an industry-driven cloud computing
                certification course with an affordable fee structure. It will
                cost you INR 50,000 + 18% GST (with INR 4,917 monthly
                installment). Learners can opt for flexible payment options with
                no-cost EMI and easy loans.
              </p>
              <h4>
                Can upskilling via cloud computing programs unlock better career
                prospects in today’s tech world?
              </h4>
              <p>
                In today’s job marketplace, a cloud computing expert earns INR
                16.6 LPA on average. Firms rely on cloud-based services for
                end-to-end functions because of rising data trends. Hence,
                techies must elevate their skill sets per the latest cloud
                industry updates. Learning with us will give you proven
                technical skills to crack critical job roles with alluring pay
                scales.
              </p>
              <h4>
                Which cloud computing certification is best for techies willing
                to revamp their IT careers?
              </h4>
              <p>
                A certification program from the best institute for cloud
                computing is vital for tech experts to revamp their careers.
                Learnbay’s globally recognized certification courses validate
                your skills and make you job-ready to land your dream roles.{" "}
              </p>
              <p>
                Hence, experts eager to update their static careers can join our
                cloud computing programs.{" "}
              </p>

              <div onClick={popupShow} className={styles.buttonDiv}>
                <Button bannerButton={true} text="DOWNLOAD SYLLABUS" />
              </div>
            </>
          ) : (
            ""
          )}
          <p
            style={{
              color: "#2D9CD7",
              fontWeight: "600",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handler}
            className={styles.readP}
          >
            {read ? "Read Less..." : "Read More..."}
          </p>
        </div>
      ) : (
        ""
      )}

      {Masterscontent ? (
        <div className={styles.content}>
          <h2 style={{ fontSize: "35px" }}>
            Unlock Global Job Opportunities with
            <b> a Master’s in Computer Science Data Science and AI</b>
          </h2>
          <p>
            Leap into career excellence with Learnbay's Master's Degree Program
            in Data Science and AI. Enroll in an industry-driven master's
            program that expands your earning potential and unlocks global job
            offers. From custom-curated learning of the latest trends to better
            placement support, a Master’s in Computer Science Data Science, and
            AI has everything you need.
          </p>
          {read ? (
            <>
              <h4 style={{ fontSize: "28px" }}>
                India's Inclusive Learning Platform for Working Pros Offering{" "}
                <b>Masters in Computer Science</b>{" "}
              </h4>

              <h3>Course Overview </h3>
              <p>
                In response to the evolving tech age and surge in demand for
                skilled data scientists, Learnbay introduces a{" "}
                <b>Master’s in CS Artificial Intelligence and Data Science.</b>{" "}
                With an inclusive learning setup, this course welcomes working
                pros from diverse domains at any career level. This master's
                program is designed to help experts prepare for a rewarding
                career in data science.
              </p>

              <h3>
                Why choose Learnbay's Master in CS : Data Science and AI?{" "}
              </h3>
              <p>
                Accelerate your full career potential with Learnbay's{" "}
                <b>Master in CS Data Science and AI</b> program. Here’s why you
                should choose the online master's degree data science program by
                Learnbay over others :
                <ul>
                  <li>
                    <b>Comprehensive Skill Building:</b> You can gain expertise
                    in trending generative AI concepts. Our program offers a
                    360-degree knowledge-building experience to ensure you earn
                    such highly demanded skill expertise.
                  </li>
                  <li>
                    <b>Guaranteed Career Support:</b> We guarantee 100% job
                    support to help your success in this field after completion
                    of the course. We’ll help you cherish all of your existing
                    potential to land at your desired career level.{" "}
                  </li>
                  <li>
                    <b>Flexible Learning:</b> Our hybrid learning platform
                    caters to professionals from various fields, enabling you to
                    study at your own pace and convenience. You are free to
                    choose the degree of your offline support- whether it be the
                    doubt clearance sessions, mock interviews, or capstone
                    projects.
                  </li>
                </ul>
              </p>
              <p>
                Apart from these gains, this course offers a{" "}
                <b>computer science master’s degree</b> from{" "}
                <i>
                  <b>Woolf University</b>
                </i>{" "}
                (Global Collegiate Higher Education Institution), followed by
                globally recognized certifications from <i>IBM & Microsoft</i>{" "}
                (Dual Certification).
              </p>
              <p>
                Data science is becoming one of the most rewarding careers. We
                expect a surge in demand for skilled data scientists with
                alluring paychecks. A data scientist's average salary in India
                is ₹ 13,50,000, which ranges between USD 130,000 – and
                <i> USD 195,000 overseas.</i>
              </p>
              <p>
                Learnbay is present in prime cities of India like{" "}
                <i>
                  <b>Bengaluru, Hyderabad, Delhi, and Pune,</b>
                </i>{" "}
                shaping worthy careers in data science with hands-on practice
                with live projects. Concerning the upcoming demands, it brings
                on an MS in Computer Science Data Science and AI program with
                endless growth and job offers.
              </p>

              <h3>
                Advantageous Features of a Master's Degree in Data Science
              </h3>
              <p>
                Discover the features that will set you apart from the crowd and
                under the limelight of recruiters' demands.
                <ul>
                  <li>
                    <i>
                      <b>
                        • Industry-driven Syllabus supporting Generative AI:
                      </b>
                    </i>{" "}
                    Learnbay's{" "}
                    <b>
                      Master's in CS artificial intelligence and data science
                    </b>{" "}
                    crafts the syllabus with the latest Gen AI trends (ChatGPT,
                    Bard, & many more) and trending skills in the job market.
                  </li>
                  <li>
                    <i>
                      <b>• 360-degree career growth:</b>
                    </i>{" "}
                    Our <b>masters in computer science online</b> program brings
                    360-degree knowledge-building scope for experts from diverse
                    domains.
                  </li>
                  <li>
                    <i>
                      <b>• Woolf University degree:</b>
                    </i>{" "}
                    Upskilling with a <b>Masters in Data Science and AI</b>{" "}
                    program by Learnbay offers you a globally accredited
                    Master's Degree by Woolf University degree along with ample
                    ECTS credits. This is well-recognized in the US, Canada,
                    Europe, & 60+ Western countries).
                  </li>
                  <li>
                    <i>
                      <b>• Training from Global Faculties:</b>
                    </i>{" "}
                    Learnbay's <b>Master's degree in data science</b> offers the
                    scope of mentorship by renowned experts from MNCs/MAANG and
                    also from global Ph.D. scholars.
                  </li>
                </ul>
              </p>

              <p>
                <i>Globally recognized certifications:</i> Learnbay's{" "}
                <b>Master’s in Computer Science</b> degree offers dual
                certification from IBM & Microsoft, increasing the chances of
                redefining a career at a global level.
              </p>

              <h3>
                Why is Masters in Computer Science Online Essential for Career
                Transition?
              </h3>
              <p>
                Data science has become an inclusive platform for tech and
                non-tech working pros. Amidst the fast-paced rise of AI models,
                many professional courses are coming up to support real-time
                career enhancement. In such times, a master’s program in
                computer science, Gen AI, or a{" "}
                <b>
                  <a
                    href="https://www.learnbay.co/cloud&devops/cloud-computing-and-devOps-certification-program"
                    target="_blank"
                  >
                    cloud computing certification
                  </a>
                </b>{" "}
                supports career transition.
              </p>
              <p>
                Owing to the gaining popularity, master’s programs in leading AI
                rends have become a preferred gateway for many pros. Upskilling
                with an <b>MS in Computer Science Data Science and AI</b>{" "}
                program is vital for career shifts. At present, firms depend on
                data science for reasons like –
                <ul>
                  <li>• Making decisions with facts and insights</li>
                  <li>• Seamless activities with assured success</li>
                  <li>• Better insights into industry trends</li>
                  <li>• Boosting business yields </li>
                  <li>• Ensuring success led by satisfied customers</li>
                </ul>
                Therefore, to adapt to evolving job requirements, it is
                advisable to enroll in a Master in CS Data Science and AI
                program.
              </p>

              <h2>Domain Electives</h2>
              <h4>
                Industry Training with Diverse Domain Electives with a Masters
                in Data Science and AI
              </h4>
              <p>
                Learnbay's{" "}
                <b>Master’s in Computer Science Data Science and AI</b> program
                offers training with diverse domain electives such as –
                <ul>
                  <li>• BFSI</li>
                  <li>• Healthcare</li>
                  <li>• E-commerce, Retail, Supply Chain </li>
                  <li>• Manufacturing</li>
                </ul>
              </p>
              <h2>
                Leap Into Excellence with Proven Specializations with a Master's
                degree in data science
              </h2>
              <p>
                Learnbay's data science master's degree offers the scope of
                reshaping their careers with any of the specializations like –
              </p>
              <b>
                <p style={{ textDecoration: "underline" }}>
                  Specialization 1: Data Science & Data Analytics
                </p>
              </b>
              <p>
                Learners get the scope of upgrading their skill sets with the
                latest data science and data analytics tools like –
                <ul>
                  <li>• Data Visualization tools</li>
                  <li>• Deep learning</li>
                  <li>• Programming languages (SQL)</li>
                  <li>• Product analytics</li>
                  <li>• Generative AI</li>
                  <li>• Productization of ML Systems</li>
                </ul>
              </p>
              <b>
                {" "}
                <p style={{ textDecoration: "underline" }}>
                  Specialization 2: Artificial Intelligence & Machine Learning
                </p>
              </b>
              <p>
                <ul>
                  <li>• Deep learning and Advanced data analytics</li>
                  <li>• Reinforcement learning</li>
                  <li>• ML Ops</li>
                  <li>• High dimensional data analysis</li>
                  <li>• Deep learning for NLP</li>
                  <li>• Essential and Advanced Data Structures</li>
                  <li>• Product analytics</li>
                  <li>• Generative AI</li>
                  <li>• Productization of ML Systems</li>
                </ul>
              </p>

              <h3>Degree and Certification Details</h3>
              <h4>About Woolf University Master's Degree</h4>
              <p>
                Learnbay's master's program offers a Master's Degree accredited
                by <b>Woolf University</b> equivalent to a master's from the{" "}
                <b>US, Canada, and Europee</b> with better jobs and hikes of
                working pros. Woolf University's degree for a e{" "}
                <b>Master in CS Artificial Intelligence and Data Science</b> is
                well recognized across{" "}
                <b>
                  <i>60+ Western countries,</i>
                </b>{" "}
                driving alluring global job offers.
              </p>
              <h4>About Dual Certifications (IBM & Microsoft)</h4>
              <p>
                Learnbay's <b>Computer Science Master’s degree</b> offers dual
                certification from{" "}
                <i>
                  <b>IBM & Microsoft,</b>
                </i>{" "}
                supporting career shifts and adding value to one's slow-paced
                career. After completing the master's program, learners get a
                project experience certificate from IBM & course completion
                certificates from IBM & Microsoft.
              </p>
              <h4>Module Details </h4>
              <p>
                Learnbay's <b>masters in computer science online</b> program
                offers a top-notch syllabus with the latest Generative AI
                trends. The flexible modules help tech and non-tech experts
                learn advanced concepts, followed by hands-on expertise with
                live projects. To keep pace with the changes, it upgrades the
                syllabus, aligning it with the latest demand in the job market.
                Regardless of domain discipline, this master’s degree course
                syllabus makes you job-ready with dedicated mentoring and
                placement help.
              </p>
              <p>
                Also, the syllabus includes simulated real-time projects, fresh
                capstone projects, and other activities.
              </p>
              <h3>
                Learnbay’s Project Innovation Labs Behind the Success of Our
                Learners
              </h3>
              <p>
                Learnbay’s commitment to fast-forward stagnant careers mapping
                with today’s competitiveness results in successful career
                transitions. Our project innovation labs help trusted learners
                drive real-time success. Our project innovation labs operate
                across four prime cities in India – Bengaluru, Hyderabad, Pune,
                and Delhi. Also, you can get the online experience from any part
                of the world. Experts enrolling in{" "}
                <b>Masters in Computer Science</b> program will have benefits
                like –
                <ul>
                  <li>
                    • Learners gain real-time insights to tackle business issues
                    efficiently
                  </li>
                  <li>• Live projects handled under dedicated mentorships</li>
                  <li>• Work on chosen domain-specific projects</li>
                  <li>• Networking with industry experts</li>
                </ul>
              </p>
              <h3>Job Assistance Program</h3>
              <h4>Data Science Job Support by Learnbay</h4>
              <p>
                Learnbay's<b> MS in Computer Science Data Science and AI</b>{" "}
                program guides working experts with 100% placement support (at
                startup or MNC level) across its centers. In terms of redefining
                stagnant careers in the age of data science, a master’s program
                supports career growth with success.
              </p>
              <h4>
                How does the Job Assistance program help a data scientist's
                career? (Career Service Pro)
              </h4>
              <p>
                After completing the course and projects with at least 70% of
                marks, a learner is eligible for this job assist program.
                Learnbay's data science master degree offers 360-degree
                career-building chances to learners from diverse domains that
                include –
                <ul>
                  <li>• Resume Preparation</li>
                  <li>• LinkedIn Profile Review</li>
                  <li>• Three years of Job and Placement support</li>
                  <li>• Three years of Job and Placement support</li>
                  <li>• 1:1 Review/Doubt-clearing Sessions</li>
                  <li>• Endless Interview Calls</li>
                </ul>
              </p>

              <h3>Know Your Projects </h3>
              <p>
                Learnbay's{" "}
                <b>Master’s in Computer Science Data Science and AI </b>
                program offers training in diverse domains with the latest
                trends. Learners develop their practical skills with 10+ fresh
                capstone projects. Hands-on learning via live projects in
                offline experience centers refines the skill sets to face
                cut-throat competition in data science. Learners get
                uninterrupted mentorship with 1:1 doubt-clearing help from their
                mentors. Upskilling with real-time exposure to real business
                situations enriches a career with unstoppable success.
              </p>

              <div onClick={popupShow} className={styles.buttonDiv}>
                <Button bannerButton={true} text="DOWNLOAD SYLLABUS" />
              </div>
            </>
          ) : (
            ""
          )}
          <p
            style={{
              color: "#2D9CD7",
              fontWeight: "600",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handler}
            className={styles.readP}
          >
            {read ? "Read Less..." : "Read More..."}
          </p>
        </div>
      ) : (
        ""
      )}
      {Banalytics ? (
        <div className={styles.content}>
        <div className={styles.btnread}>
        <p
            style={{
              color: "#fff",
              fontWeight: "600",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handler}
            className={styles.readP}
          >
            {read ? "Read Less..." : "Read More..."}
          </p>
          </div>
          <h2>
          Online Business Analyst Course Overview
          </h2>
          <p>
            Industries consist of innumerable amounts of data, and companies are
            in a blind situation where they are not able to use this data to
            gain an edge. But business analytics will help you to transform the
            business from a data-blind to a data visionary. With the help of the
            Business Analytics Online Course, you can put your career in a
            fast-track mode to succeed professionally.
          </p>
          {read ? (
            <>
            
              <h2 style={{ fontSize: "24px" }}>
                <b>What is Business Analytics? Why Do We Need It? </b>
              </h2>

              <p>
                Business Analytics is a process that combines applications of
                statistical and quantitative techniques to analyze the data to
                extract meaningful insights. The extracted information or data
                will be used by decision-makers to come up with business
                decisions, and strategies for optimizing the business
                operations.
              </p>
              <p>
                At present, Business Analytics seems to be the most accepted
                best practice adopted by every MNC worldwide. Business Analytics
                has changed how the industries view manufacturing, retail
                operations, and making decisions. Business Analytics has helped
                companies make informed decisions, these decisions are fueled by
                the help of data. Regardless of the scale of the company,
                business analytics has helped companies to thrive in these
                competitive markets.
              </p>

              <p>
                In short, a company will make good decisions, earn a competitive
                advantage, improve its understanding of consumer’s perspectives,
                and develop strategies to enhance productivity.
              </p>

              <p>
                These are some of the reasons why we need business analytics. In
                the past, it was something expensive and not an easy process,
                but nowadays it has become a necessity if you want to succeed in
                cutting-edge markets. Business analytics leverages the data and
                helps in improving the company's potential to earn more and make
                smart decisions.
              </p>
              <p>
                Companies are recruiting more and more business analysts to
                foster their productivity at jet speed. If you are an aspiring
                business analyst with the right{" "}
                <b>certificate course in business analytics</b> you can become a
                successful business analyst.
              </p>
              <p>
                From healthcare to the retail sector, all need data to function
                aptly. With the scope of data analytics tools, healthcare
                professionals can detect grave diseases & retailers can track
                consumer choices.
              </p>

              <h2>How Business Analytics Has Impacted The Industries?</h2>
              <p>
                From gathering data sets to analyzing information everything has
                changed after the rise of business analytics, even the new tools
                help you to do business intelligence in an efficient manner.
                From Business Intelligence to Business Analytics everything has
                changed in recent years. You can apply for a business analytics
                course online to learn more about the applications of business
                analytics in the real world.
              </p>
              <p>
                You can see the importance of business analytics in the current
                market scenario, to understand more about it let us dive into
                the practices and how they impacted and changed the operations
                of various industries.
                <ul>
                  <li>
                    <h4 style={{ fontSize: "18px" }}>• Business Analytics in Healthcare Industry</h4>
                    <p>
                      The Healthcare Industry has seen a significant change in
                      recent years. As you can see, the use of business
                      analytics has increased in the healthcare industry,
                      especially in the areas of medicine, diagnostics,
                      optimization of resources, and patient care. Business
                      Analytics is revolutionizing the entire healthcare sector
                      from pharmaceuticals to health insurance. It has brought a
                      lot of useful and good changes to industries like
                      revealing the pattern of patients to take better care of
                      them, identifying and predicting risk factors of the
                      patients, flawless operations, and allocation to patient
                      care.
                    </p>
                  </li>
                  <li>
                    <h4 style={{ fontSize: "18px" }}>• Business Analytics in Finance Industry</h4>
                    <p>
                      The finance industry is one of the most impacted
                      industries by business analytics and new-age technology.
                      Business Analytics has impacted and changed the way how
                      banking, insurance, finance, and investment companies
                      operate. Business analytics is totally a game changer for
                      the industry, it helps companies to make data-driven
                      decision that covers all aspects of the business including
                      financial performance, trends in the market, and customer
                      behavior; optimized risk management with the ability to
                      analyze the risks of various asset classes; and
                      incorporating new technologies and merging with AI to
                      revolutionize the financial industry.
                    </p>
                  </li>
                  <li>
                    <h4 style={{ fontSize: "18px" }}>• Business Analytics in Retail Industry</h4>
                    <p>
                      The Retail industry is seeing innovative changes by
                      adapting business analytics practices. With the help of
                      business analytics companies have started to know more
                      about the customer understanding and perspective of their
                      procurements. All kinds of business segments in the retail
                      industry have dynamically changed including foods,
                      consumer electronics, automotive, e-commerce, and health &
                      beauty. By earning the right{" "}
                      <b>certificate in business analytics,</b> you can easily
                      land a job in the retail sector.
                    </p>
                    <p>
                      These are some of the industries that have been impacted
                      largely by business analytics but are not limited. Also,
                      another important point is that business analytics has
                      started to integrate with Deep Tech, which is considered
                      to be the future. All kinds of established businesses have
                      started to leverage Deep tech by integrating it with
                      business analytics to improve their effectiveness and
                      productivity.
                    </p>
                    <p>
                      With the rapid increase in the demand for business
                      analytics, there are many{" "}
                      <b>best courses for business analytics</b> also available.
                      If you are interested in learning more about business
                      analytics, you can find several good{" "}
                      <b>business analytics online courses.</b> Earning a good
                      certificate in <b>business analytics</b> will pay off
                      hugely and will certainly help you to establish a great
                      career.
                    </p>
                  </li>
                </ul>
              </p>
              <h2>Is a Business Analytics Certification Program Worth It?</h2>
              <p>
                <b>Certification in business analytics</b> will help you to
                successfully establish your career and land your dream job. If
                you enroll in a <b>certificate program in business analytics</b>{" "}
                with comprehensive training, you will receive training for
                cutting-edge technologies and practices. Upon completion of the{" "}
                <b>certificate program in business analytics</b>, you will
                receive certification from renowned institutions. These
                certifications and cutting-edge skills will help you to be
                recognized by top-tier companies from different industries.
              </p>
              <h2>
              Why Go With Learnbay’s Business Analytics Certification Course?
              </h2>

              <p>
                Among other <b>best courses for business analytics,</b>{" "}
                Learnbay’s <b>Business Analytics Online Course</b> not only
                offers comprehensive training but training for new technologies
                like Generative AI and focuses on hands-on practical experience.
              </p>
              <p>
                Learnbay’s <b>Certificate Course in Business Analytics</b> helps
                you to delve into real-world business analytics applications and
                covers future trends as well. Learnbay’s{" "}
                <b>business analytics training</b> includes the following
                features -
                <ul>
                  <li>
                    <h4 style={{ fontSize: "20px" }}>
                      1. Industry Relevant Course Curriculum
                    </h4>
                    <p>
                      Learners will get to learn from the beginner to the most
                      advanced level, their business analytics training covers
                      various topics as follows:-
                      <ul>
                        <li>• Introduction to Business Analytics</li>
                        <li>• Excel & Business Statistics</li>
                        <li>• Data Science</li>
                        <li>• Artificial Intelligence</li>
                        <li>• Machine Learning</li>
                        <li>• Big Data Analytics and Visualization</li>
                        <li>• Deployment AWS+Azure</li>
                        <li>• Generative AI</li>
                        <li>• NLP (Natural Language Processing)</li>
                      </ul>
                    </p>
                  </li>
                  <li>
                    <h3 style={{ fontSize: "24px" }}>
                      2. Hands-on Experience With Real-World Exposure
                    </h3>
                    <p>
                      As a part of the training, Learnbay will encourage you to
                      work on real-time projects and capstone projects. With the
                      help of these projects and case studies, you will get to
                      learn the real-world applications that are being
                      implemented by business analytics practitioners to solve
                      business problems.
                    </p>
                    <p>
                      Upon completion of capstone projects, you will be able to
                      receive a project{" "}
                      <b>certification in business analytics</b> from IBM.
                      Additionally, to enhance your learning and practical
                      experience Learnbay offers you the opportunity to work on
                      projects in offline mode.
                    </p>
                  </li>
                  <li>
                    <h3 style={{ fontSize: "24px" }}>
                      3. Globally Recognized Certifications{" "}
                    </h3>
                    <p>
                      As it is a <b>certificate course in business analytics</b>
                      , upon successful completion, you will be able to receive
                      two-course certifications. Learnbay has collaborated with
                      Microsoft and IBM to offer these certifications. Having
                      these certifications will enhance your profile value and
                      help you to be recognized by employers globally.
                    </p>
                  </li>
                  <li>
                    <h3 style={{ fontSize: "24px" }}>
                      4. Career-Focused Domain Electives
                    </h3>
                    <p>
                      Learning business analytics alongside gaining expertise in
                      a niche area, will be a competitive edge. In this way, you
                      will be able to tailor your business analytics training
                      according to your area of interest. Having domain
                      expertise will increase your job opportunities by opening
                      ways to certain career paths.
                    </p>
                    <p>
                      Again, having a recognized{" "}
                      <b>certificate in business analytics</b> with domain
                      expertise is an edge in this competitive job market.
                    </p>
                  </li>
                  <li>
                    <h3 style={{ fontSize: "24px" }}>
                      5. Personalized Career Services
                    </h3>
                    <p>
                      You can find different kinds of courses for business
                      analytics, but the{" "}
                      <b>best courses for business analytics</b> will have
                      career assistance in their course curriculum. Learnbay’s
                      certificate program in business analytics is inclusive of
                      comprehensive career assistance known as Career Service
                      Pro. This career service pro feature is inclusive of
                      various features such as:
                      <ul>
                        <li>
                          <h3 style={{ fontSize: "20px" }}>
                          • Placement Support
                          </h3>
                          <p>
                            Learnbay offers comprehensive career services where
                            you will receive unlimited job interview calls,
                            career guidance, and mock interviews.
                          </p>
                        </li>
                        <li>
                          <h4 style={{ fontSize: "20px" }}>
                            • Personalized Career Services
                          </h4>
                          <p>
                            Their tailored services help you to prepare and
                            optimize your resume and provide feedback for areas
                            of improvement and skill enhancement.{" "}
                          </p>
                        </li>
                        <li>
                          <h3 style={{ fontSize: "24px" }}>
                            6. Networking Opportunities
                          </h3>
                          <p>
                            Not only will you find the best-suited job role as
                            per your desire but you will also be able to network
                            with various professionals and passed-out students.
                          </p>
                          <p>
                            With all these features, one can say Learnbay’s
                            Business Analytics Certification Program is one of
                            the best courses for business analytics. Also, with
                            the help of Learnbay, one can apply for business
                            analytics course online with ease.
                          </p>
                        </li>
                      </ul>
                    </p>
                  </li>
                </ul>
              </p>
              <h2>
              What are the Benefits of Learning a Business Analytics Course Online?
              </h2>
              <p>
                If you are interested in advancing your career as a business
                analyst, you can start by learning skills and analytics tools
                that are the trends of the future like AI and machine learning.
                Integrating business analytics with AI has brought incredible
                changes in the way how businesses operate. As a Business
                Analyst, you will have a good knowledge of AI and to grasp the
                better part of it, you have to learn from comprehensive courses.
              </p>
              <p>
                Try to search for{" "}
                <a
                  href="https://www.learnbay.co/datascience/artificial-intelligence-certification-course"
                  target="_blank"
                >
                  advanced course in artificial intelligence and machine
                  learning{" "}
                </a>{" "}
                to gain more extensive knowledge about the real-world
                applications of it. There are various master’s degree program in
                AI as well, so select the best one to gain the edge.
              </p>
              <p>
                Learnbay’s{" "}
                <a
                  href="https://www.learnbay.co/datascience/data-science-and-ai-masters-in-cs"
                  target="_blank"
                >
                  Master’s in Computer Science Data Science{" "}
                </a>
                and AI is a specialization program that leverages your prior
                work experience by combining it with competitive and most-demand
                skills in the market. This is an ideal program for those who
                want to delve more deeply into the field of AI and Analytics.
              </p>

              <div onClick={popupShow} className={styles.buttonDiv}>
                <Button bannerButton={true} text="DOWNLOAD SYLLABUS" />
              </div>
            </>
          ) : (
            ""
          )}
          <p
            style={{
              color: "#2D9CD7",
              fontWeight: "600",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handler}
            className={styles.readP}
          >
            {read ? "Read Less..." : ""}
          </p>
        </div>
      ) : (
        ""
      )}
      {mangers ? (
        <div className={styles.content}>
          <h4 style={{ textAlign: "center" }}>
            Data Science and AI Certification Program for Managers and Leaders{" "}
          </h4>
          <p>
            The growth of technology in recent years has forced everyone to
            change their perspective and mandated most of them to learn and
            upskill. Managers and Leaders in the organization are also not
            exceptional to this change. As a manager, it is really important to
            get familiar with the recent trends and changes in technologies to
            manage effectively. Suppose you are an existing manager or a team
            leader who is interested in starting the journey with data science
            and artificial intelligence. In that case, the following data
            science course for managers will help you out hugely.
          </p>
          {read ? (
            <>
              <h4 style={{ fontSize: "28px" }}>
                Find out how the Data Science and AI Certification Program for
                Managers and Leaders will help you.{" "}
              </h4>
              <h2 style={{ fontSize: "24px" }}>
                How do Managers and Leaders make use of Data Science and AI?
              </h2>

              <p>
                Data Science is not only a simple buzz or trend word but it is a
                multifaceted concept that transformed the way managers and
                leaders work with its powerful tools and applications. These
                professionals take the help of AI and Data Science to boost
                their decision-making process. From identifying the right areas
                to allocate the resources to identifying skill gaps of
                employees, it helps the management big time. Also, data-driven
                insights help managers and leaders avoid gut-feeling-based and
                hypothesis-driven decisions.
              </p>
              <p>
                The following are some specific examples of how AI and{" "}
                <b>Data Science for managers</b> is useful.
              </p>
              <ul>
                <li>
                  <h3>• Predictive AI analytics for sales forecasting</h3>
                  <p>
                    Artificial Intelligence models with customized commands can
                    analyze historical data, industry trends, consumer behavior,
                    and pricing power based on seasons. By analyzing all these
                    factors, this AI model provides accurate sales prediction.
                    According to this suggestion, the managers can set sales
                    targets and procurement of resources.
                  </p>
                </li>
                <li>
                  <h3>• Machine learning models to do risk management</h3>
                  <p>
                    Machine learning models help managers analyze the potential
                    risks in all aspects including{" "}
                    <b>
                      machinery failures, raw material shortage, financial
                      frauds, custom churn, and data on employee performance.
                    </b>{" "}
                    With this prediction and suggestion on risk management, the
                    management can be more proactive and hedge against the risk
                    to protect the business.
                  </p>
                  <p>
                    Other than these activities, managers seek the assistance of
                    AI and Data Science in optimizing inventory, resources,
                    operations, team performance, employee performance, and
                    customer experience. <b>Data science for managers</b> plays
                    an important role and helps them increase productivity too.
                    Also, gaining specialized Data Science and{" "}
                    <b>AI certification for managers</b> will help professionals
                    in managerial roles to achieve new steps in their careers.
                  </p>
                  <p>
                    Artificial Intelligence and <b>Data science for leaders</b>{" "}
                    is not only helpful but has become an essential skill to
                    have in this 21st century.
                  </p>
                </li>
                <li>
                  <h3>
                    • Is There Any Specific AI and Data Science Course for
                    Managers and Leaders?
                  </h3>
                  <p>
                    Learnbay offers a specifically designed course for
                    professionals who are in managerial and leadership roles.
                    This <b>data science course for managers and leaders</b>{" "}
                    contains all the necessary and advanced modules in AI and
                    data science topics. You can find the essential topics in
                    tech and non-tech skills like{" "}
                    <b>
                      Deep learning, Natural language processing, Power BI,
                      Machine learning, project management,
                    </b>
                    and <b>Agile</b> among others. Additionally, as a perk, you
                    can find training for <b>Generative AI tools</b> like{" "}
                    <b>ChatGPT</b> and
                    <b>Dall-E</b>. In their bonus modules, you can find training
                    for various other latest and useful skills and tools.
                  </p>
                  <p>
                    Another important thing to notice is that this course
                    program has a supporting faculty and flexibility to attend
                    the training sessions. Learnbay, being fully aware of the
                    learner's timings, offers more flexibility and supports them
                    constantly throughout the course completion. You can find a
                    <b>Career Service Pro</b> feature in this program which
                    gives learners full support and helps them to crack the
                    interviews by giving them <b>mock interviews,</b> resume
                    preparation,
                    <b>unlimited interview calls,</b> and career guidance by
                    industry experts.
                  </p>
                  <p>
                    This program authenticates your learning journey by helping
                    you to earn <b>IBM and Microsoft certifications.</b> These
                    course and project certifications own global recognition,
                    and even recruiters from various industries will value the
                    certifications highly. To provide more real-world exposure
                    to the students, Learnbay offers simulated real-time and
                    capstone projects. At the end of the program, you will be
                    offered opportunities to work on capstone projects. To make
                    practical training more interesting, they offer project
                    innovation labs. These project labs help learners to learn
                    in a cutting-edge environment, especially under the guidance
                    of industry experts.
                  </p>
                </li>
                <li>
                  <h3>
                    • Why Opt For Learnbay’s Data Science Course For Managers?
                  </h3>
                  <p>
                    AI and <b>Data Science for managers</b> plays a vital role
                    in professional field. This Data Science course for managers
                    and leaders will provide domain-based training. This feature
                    will not only enhance the learning experience but will help
                    you hone your career path in a particular industry by
                    teaching the specific set of skills required for that
                    domain.
                  </p>
                  <p>
                    If you are a person who wants to get into the banking
                    industry, you can choose an elective related to banking to
                    make your career path easy. This program in{" "}
                    <b>data science for managers</b> is inclusive of the
                    following domains - <b>BFSI</b>
                    (Banking, Financial Services, and Insurance);{" "}
                    <b>Healthcare; Supply Chain;</b> and <b>Manufacturing.</b>
                  </p>
                  <p>
                    As mentioned earlier, Learnbay’s Data Science and{" "}
                    <b>AI certification for Managers</b> and Leaders program
                    will offer flexibility and continuous student support. You
                    can opt for
                    <b>one-on-one doubt-clearing sessions</b> according to your
                    free time and the support team will help you to schedule
                    one. The faculty members are friendly and easily
                    approachable. Additionally, even if you are from a non-tech
                    background, Learnbay will make sure to set you on the right
                    track and help you learn comprehensively.
                  </p>
                  <p>
                    <b>In brief,</b> Learnbay honed and designed this course to
                    benefit professionals who are in managerial and leadership
                    roles. If you enroll in this course, you can expect to
                    receive training for cutting-edge tools and technologies,
                    gain real-world industry exposure, earn globally recognized
                    certifications, and work on simulated real-time capstone
                    projects.
                  </p>
                  <p>
                    Also, if you are a candidate who is looking for cutting-edge
                    data science and artificial intelligence with specialization
                    training, you can look out for Learnbay's master's degree in
                    Data Science and AI. This program comes with two advanced
                    specializations and a certification from the world's first
                    Global Collegiate University.
                  </p>
                </li>
              </ul>

              <div onClick={popupShow} className={styles.buttonDiv}>
                <Button bannerButton={true} text="DOWNLOAD SYLLABUS" />
              </div>
            </>
          ) : (
            ""
          )}
          <p
            style={{
              color: "#2D9CD7",
              fontWeight: "600",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handler}
            className={styles.readP}
          >
            {read ? "Read Less..." : "Read More..."}
          </p>
        </div>
      ) : (
        ""
      )}

      {HRContent ? (
        <div className={styles.content}>
          <h2>
            Lead a Data-informed Work Culture via an Industry-focused HR
            Analytics Course
          </h2>
          <p>
            Step up to build a data-driven workspace with more factual HR
            decisions. In the human-tech nexus, thrive as a top-notch HR leader
            leading diverse work teams. Learnbay’s{" "}
            <i>
              <b>‘HR Analytics Certification Program’ </b>
            </i>{" "}
            is here to navigate your success with engaging results. Enroll in an
            industry-paced HR analytics course today and build an agile
            workspace.
          </p>
          {read ? (
            <>
              <h2>Outlining Domain-Specific HR Analytics Course Online</h2>
              <h4 style={{ fontSize: "28px" }}>
                Introducing the HR Analytics Program{" "}
              </h4>

              <p>
                The fast-paced and constantly evolving business world has made
                it imperative to establish a cohesive and collaborative
                workplace environment. Such work culture alterations, demand
                domain-focused skills to leverage the yields. Thus, Learnbay’s
                industry-led <b>HR analytics training</b> program envisions an
                engaging future. An open learning space to raise HR experts
                driving proven talent decisions. Unlock a scope to get versed in
                real-world people issues with data-driven methods.
              </p>

              <h3>
                Why choose Learnbay's Master in CS : Data Science and AI?{" "}
              </h3>
              <i>
                <b>
                  <p>
                    Before diving into the course features, let’s brief you on
                    the latest HR analytics trends.
                  </p>
                </b>
              </i>
              <h3>Watch out for the latest HR Analytics Trends in 2024</h3>
              <p>
                As businesses continue to rely on data-driven growth metrics,
                the HR domain meets some exciting trends. If you are an HR pro,
                eager to drive a profitable career in your domain, enroll in the
                best<b> HR analytics course.</b>
              </p>
              <p>
                Owing to the increasing dominance of technology, current trends
                mainly focus on human effects across digital space. An
                industry-driven training shall equip you with proven knowledge
                and expertise to handle emerging trends. Some trends that you
                must know are –
                <ul>
                  <li>
                    <b>• Generative AI with Insights:</b> HR analytics get
                    support from GenAI that eases the way of extracting facts
                    and driving informed decisions.
                  </li>
                  <li>
                    <b> •Predictive Analytics:</b> Data-driven prediction of
                    supply gaps, talent hunt, and employee engagement – all in
                    one space to lead people analytics.
                  </li>
                  <li>
                    <b>• Improved Decision-making with Real-time Data:</b>{" "}
                    Experts gain a hands-on learning scope via HR analytics
                    training for driving optimal decisions with facts.
                  </li>
                  <li>
                    <b>• Enriched Data Visualization:</b> Having access to clear
                    and arranged data sets paves the way for insightful
                    communication and realistic moves.
                  </li>
                  <li>
                    Agile HR practices: 2024 aims to build an agile work culture
                    with flexible HR practices to cope with changing business
                    goals.
                  </li>
                </ul>
              </p>
              <p>
                Thus, upskilling with the best <b>HR analytics certification</b>{" "}
                can help you handle the trends and attain competitive success.
              </p>

              <h3>
                • Is HR Analytics a good career choice for working
                professionals?
              </h3>

              <p>
                A career in HR can be a mixture of risks and fortunes. You can
                see a blend of skills and domain knowledge to excel in an HR
                career. Owing to the data-driven shifts, upskilling via an HR
                analytics course online is a good decision. The right upskilling
                unlocks a rewarding career path with alluring job offers in the
                HR domain. An HR analyst’s salary ranges between INR 2.8 LPA and
                INR 8.5 LPA. Thus, it's a good career choice for experts.
              </p>

              <h4>• Who is eligible for the course?</h4>
              <p>
                Any working pro with –
                <ul>
                  <li>• A bachelor’s degree in any domain (tech/non-tech)</li>
                  <li>• Good academic knowledge</li>
                  <li>• Minimum of 6 months work experience (IT/Non-IT)</li>
                  <li>• Early – mid-career pros interested in HR analytics</li>
                </ul>
              </p>

              <p>
                <li>
                  <b>Note:</b>
                </li>{" "}
                Experts enrolling in the <b>business analytics course</b> can
                also kick-start their careers as HR analysts, but may lack
                domain-led expertise.
              </p>

              <h3>• Is Learnbay’s HR Analytics Certification worth it?</h3>
              <p>
                The cutting-edge tech shifts demand hands-on expertise with the
                trending analytics tools. Plus, your skills seek validation to
                help you thrive across the changing work sphere. Upskilling with
                Learnbay’s <b>HR analytics program</b> attests to globally
                recognized dual certifications <b>(IBM & Microsoft).</b>
              </p>

              <h4>• What is Dual Certification in Learnbay? </h4>
              <p>
                Learners enrolling in Learnbay’s <b>HR analytics course</b> are
                entitled to gain dual certification. All eligible learners will
                obtain two-course completion certificates{" "}
                <b>(IBM & Microsoft)</b> and one project certificate from{" "}
                <b>IBM</b>. These industry certifications are globally approved
                and validate your skills for better offers.
              </p>

              <h3>
                • How does Learnbay’s <b>HR Analytics Certification Course</b>{" "}
                help in Career Growth?
              </h3>
              <p>
                Learnbay offers the best <b>HR analytics course online</b> to
                lift your career growth limits.{" "}
              </p>
              <i>
                <b>
                  <p>
                    Let’s know the elite course features that help you lift your
                    career with better job offers.{" "}
                  </p>
                </b>
              </i>
              <ul>
                <li>
                  <h4>• Comprehensive Course Syllabus </h4>
                  <p>
                    Experts get an open learning space to upgrade their skills
                    with Learnbay’s detailed course syllabus as per the latest
                    trends. It offers an in-depth upskilling scope with
                    theoretical and practical expertise in trending tools. It
                    covers –
                  </p>
                  <li>• Introduction to Strategic HRM with Data Analytics</li>
                  <li>• Excel, Statistics, SQL, & MongoDB</li>
                  <li>• Tableau & Power BI</li>
                  <li>• Data Science & AI</li>
                  <li>• Deployment of Tools</li>
                  <li>• GenAI Tools and Trends</li>
                </li>

                <li>
                  <h4>• Project-based Upskilling with Industry Experts</h4>
                  <p>
                    Learners gain an experiential learning experience with
                    Learnbay’s capstone projects under proven mentorship.
                    Eligible learners work with real-time simulation projects
                    across project innovation labs under the guidance of
                    industry experts. Plus, IBM project certification validates
                    your skills to handle real world HR practices tactfully.
                  </p>
                </li>
                <li>
                  <h4>• 100% Job & Placement support</h4>
                  <p>
                    Learnbay’s <p>HR analytics training</p> has a ‘Career
                    Service Pro’ deal for eligible experts with 100% placement
                    help. You can upgrade your soft skills, remodel your resume,
                    and attend unlimited interview calls. A proven gateway to
                    better job offers in the HR domain.
                  </p>
                </li>
                <li>
                  <h4>• Globally Accredited Certifications</h4>
                  <p>
                    Learnbay offers the best globally recognized HR analytics
                    certification (IBM & Microsoft). It unlocks the way to crack
                    competitive job offers across top-notch MNCs.
                  </p>
                </li>
                <li>
                  <h4>• Highlights of ‘Career Service Pro’</h4>
                  <p>
                    Learnbay’s <b>HR Analytics certification course</b> supports
                    your career transition with ‘Career Service Pro’ and it
                    covers –
                    <ul>
                      <li>• Three years of job & placement support</li>
                      <li>• 1:1 doubt-clearing sessions</li>
                      <li>• Six 1:1 mock interviews with feedback</li>
                      <li>• Tailored Resume Build & Optimization</li>
                      <li>• LinkedIn Profile Review</li>
                      <li>
                        • 8 – 10 Interview calls (450+ industry partners of
                        Learnbay)
                      </li>
                    </ul>
                  </p>
                </li>
              </ul>
              <h3>
                • Which job roles can I target with Learnbay’s HR Analyst
                Training Program?
              </h3>
              <p>
                Learnbay’s dedicated placement cell with the HR Analytics course
                online, helps you target promising roles like –
                <ul>
                  <li>• HR Data Scientist</li>
                  <li>• Retention Specialist</li>
                  <li>• HR Analyst</li>
                  <li>• Talent Acquisition Analyst</li>
                  <li>• HR Compliance Analyst</li>
                  <li>• Workforce Planner</li>
                  <li>• Employee Relations Analyst</li>
                </ul>
              </p>

              <h3>
                • Can I balance Work and HR Analytics Course Training with
                Learnbay?
              </h3>
              <p>
                Yes, you can. If you are a full-time working pro interested in
                HR analytics, Learnbay’s extended support is here. It offers a
                flexible upskilling platform where you can opt for hybrid
                training sessions. You can opt for weekday or weekend sessions
                following your work schedules. HR analytics certification course
                offers pre-recorded training videos and study resources for
                flexible learning.
              </p>
              <h3>
                • Is upskilling with Learnbay’s HR Analytics Course expensive?
              </h3>
              <p>
                Learnbay’s <b>HR analytics certification</b> costs you INR
                75,000 plus 18% GST. Learners can avail of easy no-cost EMI
                options with INR 4,912/month. Learnbay’s accessible payment
                partners support hassle-free upskilling. It also offers up to
                25% scholarships to eligible learners for quality upskilling.
                Enroll today and start learning while you earn.
              </p>
              <p>
                Register with Learnbay’s custom-fit{" "}
                <i>
                  '<b>HR Analytics Certification Program’</b>
                </i>{" "}
                and drive career merits with better job prospects.
              </p>

              <div onClick={popupShow} className={styles.buttonDiv}>
                <Button bannerButton={true} text="DOWNLOAD SYLLABUS" />
              </div>
            </>
          ) : (
            ""
          )}
          <p
            style={{
              color: "#2D9CD7",
              fontWeight: "600",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handler}
            className={styles.readP}
          >
            {read ? "Read Less..." : "Read More..."}
          </p>
        </div>
      ) : (
        ""
      )}
      {Marketing ? (
        <div className={styles.content}>
          <h2>
            Learn to Optimize the ROI of Your Business with a Marketing
            Analytics Course
          </h2>
          <p>
            Upskill and set foot into a data-driven culture of marketing. Engage
            yourself in developing insightful marketing campaigns and leverage
            business ROI. Learnbay’s ‘Marketing Analytics Certification Program’
            is all set to empower marketers with data-informed action plans.
            Enroll today to master your skills with a leading-edge marketing
            analyst course.{" "}
          </p>

          {read ? (
            <>
              <h2>
                {" "}
                Laying Out Domain-centric <b>Marketing Analytics Program</b>
              </h2>
              <h4>Course Overview </h4>

              <p>
                The advancing digital era anticipates a successful amalgamation
                of data-driven culture and the marketing domain. Increasing
                reliance on insightful marketing methods demands quality
                upskilling. Thus, working pros must enroll in an industry-led
                marketing analytics certification course to unlock infinite
                success. Learnbay’s online course envisions sustainable business
                handling with higher ROI. This course ensures data-driven career
                excellence for marketing pros with better job prospects.
              </p>
              <h3>Take a Look Into the Marketing Analytics Industry</h3>
              <p>
                We are certainly in the tech age, where realistic predictions
                matter the most. Strategy planning and decision-making are
                incomplete without predictions. Marketing is a crucial domain
                that relies heavily on timely predictions. Businesses try to
                revamp their brands due to changing consumer behavior and market
                dynamics. Marketing analytics ensure the accuracy and
                effectiveness of action plans with higher yields. Thus,
                upskilling with proven <b>marketing analytics training</b> is
                essential in today’s era.
              </p>
              <h4>Is Marketing Analytics trending currently?</h4>
              <p>
                As per the industry research report, the global marketing
                analytics market size is expected to grow by 12.84% by 2029.
                Following the growing reliance on analytics, diverse sectors
                expect a 19% rise in the employment of marketing analysts by
                2031. No wonder, marketing pros are on the race in today’s
                competitive edge. Upskilling is the right way to conquer success
                and crack promising job offers globally.
              </p>
              <h2>
                Role of Marketing Analytics Program to Overcome Outpaced Career
              </h2>
              <p>
                Learnbay introduces the{" "}
                <i>
                  <b>‘Marketing Analytics Certification Program’</b>
                </i>{" "}
                to empower marketers with proven excellence. Working pros in any
                domain or experts with generic marketing careers find it useful.
                <i>
                  • For a better understanding, let’s review the program
                  features.
                </i>
                <ul>
                  <li>
                    <h4>• Specifically Curated Course Syllabus</h4>
                    <p>
                      Learnbay’s marketing analytics online course syllabus
                      follows the latest trends in the industry. Learners
                      enrolling in the course will get a 360-degree
                      knowledge-building scope (theoretical and practical). It
                      covers –
                    </p>
                    <ul>
                      <li>•Overview of Marketing Analytics</li>
                      <li>• Excel, Statistics, SQL, MongoDB</li>
                      <li>• Tableau & Power BI</li>
                      <li>• Data Science and AI</li>
                      <li>• Deployment of Analytics Tools</li>
                      <li>• AI Generative Tools and Trends</li>
                    </ul>
                  </li>
                  <li>
                    <h3>• Flexible Training Sessions by Industry Experts</h3>
                    <p>
                      Experts enrolling in Learnbay’s{" "}
                      <b>marketing analytics course</b>
                      will gain flexible training sessions from industry
                      experts. It offers hybrid and live instructor-led training
                      sessions with flexible schedules. It means you can opt for
                      weekday or weekend sessions as per your work duties.
                    </p>
                    <h3>• Flexible Financing Plans</h3>
                    <p>
                      Learners opting for the{" "}
                      <b>marketing analytics certification</b>
                      course are entitled to flexible fee payment options.
                      Eligible learners can avail of scholarships (up to 25%)
                      for hassle-free upskilling. With a no-cost EMI option,
                      marketing enthusiasts can upgrade their skills without
                      funding worries.
                    </p>
                  </li>
                  <li>
                    <h3>• Experiential Learning with Projects</h3>
                    <p>
                      Learnbay believes in practice-based learning. Thus,
                      learners opting for the marketing analyst course shall
                      work with real-time simulation projects. The projects are
                      exclusively designed following the latest marketing
                      analytics trends. It helps experts gain exposure to
                      real-world businesses and handle them well.
                    </p>
                  </li>
                  <li>
                    <h3>• Placement Assistance</h3>
                    <p>
                      Learnbay’s tie-up with 450+ industry partners supports job
                      and placement drives. Learners get unlimited exposure to
                      the industry via mock interviews and soft skills
                      development via ‘Career Service Pro’. It helps learners
                      crack job interviews with top-tier MNCs.
                    </p>
                  </li>
                  <li>
                    <h3>• Globally-valued Certifications</h3>
                    <p>
                      A globally valued marketing analytics certificate unlocks
                      promising job offers from MAANG & MNCs. Learnbay’s
                      industry-driven program offers two globally recognized
                      course certifications (IBM & Microsoft) and one project
                      certificate (IBM).
                    </p>
                  </li>
                  <li></li>
                </ul>
              </p>
              <h3>How does Learnbay help you enroll in the right course?</h3>
              <p>
                Learnbay’s counseling sessions play a key role in supporting
                your career transition decision. If you are confused about the
                worthiness of the course program, expert career counselors are
                here to help. Counselors listen to your career goals and suggest
                the best course that will expand your earning potential.
                Following the suggestions, you can decide on a program for
                upskilling.
              </p>
              <h3>
                What roles do Learnbay’s career services play in your career
                transition?
              </h3>
              <p>
                Learnbay’s upskilling programs offer a ‘Career Service Pro’
                package to eligible learners for better placements. This package
                includes –
                <ul>
                  <li>• Three years of job & placement support</li>
                  <li>• 1:1 doubt sessions</li>
                  <li>• Interview Prep. with feedback </li>
                  <li>• Resume Build & Optimization</li>
                  <li>• LinkedIn Profile Review</li>
                  <li>
                    • 8 – 10 Interview calls (450+ industry partners of
                    Learnbay)
                  </li>
                </ul>
              </p>
              <i>
                <b>
                  <p>
                    Before diving into the course features, let’s brief you on
                    the latest HR analytics trends.
                  </p>
                </b>
              </i>
              <h3>
                Crack Top Job Roles with Learnbay’s{" "}
                <b>Marketing Analytics Course?</b>{" "}
              </h3>
              <p>
                Learnbay’s dedicated placement cell in the{" "}
                <b>marketing analytics certification course,</b> helps you crack
                prime job roles like –
                <ul>
                  <li>• Marketing Analysts</li>
                  <li>• Market Research Analysts</li>
                  <li>• Business Intelligence Analysts</li>
                  <li>• Customer Insights Analysts</li>

                  <li>• CRM Analysts</li>
                  <li>• Data Scientists</li>
                  <li>• Retail Analysts</li>
                </ul>
              </p>
              <h3>
                How are Learnbay’s Marketing Analytics Online Course different
                from others?
              </h3>
              <p>
                Learnbay’s marketing analytics training follows industry trends
                and steps that help you stay informed of developments. Factors
                that show Learnbay is unique compared to others are –
                <ul>
                  <li>• GenAI inclusive syllabus</li>
                  <li>• Project-based learning</li>
                  <li>• Targeting in-demand roles (placement cell)</li>
                  <li>
                    • Industry certifications with global-scale values (IBM &
                    Microsoft)
                  </li>
                  <li>• Networking with Industry Experts</li>
                </ul>
              </p>
              <h3>
                Learnbay’s <b>Marketing Analyst Course</b> - One-stop Solution
                for Career Transition
              </h3>
              <p>
                Learnbay aims to support career transition decisions of working
                pros with dedicated coaching. Its industry-focused programs
                deliver inclusive training on the latest trends. Experts
                enrolling in the program receive advanced training sessions that
                make them job-ready within 6 months. Thus, it turns into a
                one-stop solution for experts to crack jobs from top-tier
                industry partners like Walmart, IBM, Microsoft, and others.
              </p>
              <p>
                To summarize, experts at any career level can make up their
                minds about a career change in the trending industry. Learnbay’s
                marketing analytics program is a proven gateway to drive career
                success with infinite offers. Experts dream of building an
                unbeatable career in the marketing domain and upskilling is the
                wise way. Learnbay’s industry-specific training helps you to
                land global job prospects. Enroll today and unlock promising
                careers.
              </p>

              <div onClick={popupShow} className={styles.buttonDiv}>
                <Button bannerButton={true} text="DOWNLOAD SYLLABUS" />
              </div>
            </>
          ) : (
            ""
          )}
          <p
            style={{
              color: "#2D9CD7",
              fontWeight: "600",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handler}
            className={styles.readP}
          >
            {read ? "Read Less..." : "Read More..."}
          </p>
        </div>
      ) : (
        ""
      )}

      {Bfsi ? (
        <div className={styles.content}>
          <h1>
            Step Up Beyond Conventional Financial Decision-making with{" "}
            <b>Data Science in BFSI</b>
          </h1>
          <p>
            Empower yourself to grapple with the evolving financial sector via
            industry-driven upskilling. Enroll with Learnbay’s{" "}
            <i>
              <b>‘Data Science and AI for BFSI Professionals’</b>
            </i>{" "}
            today. Upgrade your financial expertise via{" "}
            <b>Data Science in BFSI</b> and land the highest-paying job.
          </p>

          {read ? (
            <>
              <h2>
                Briefing on Leading-edge Training for{" "}
                <b>Data Science in Financial Services </b>
              </h2>
              <h4>Course Overview </h4>

              <p>
                The emerging field of data science drives unbeatable excellence
                in diverse sectors. The banking and financial services sector is
                one of them. Data science integration with the{" "}
                <b>BFSI domain</b>
                expands career growth limits with assured gains. Upskilling with
                Learnbay’s domain-led data science course empowers your career
                with industry-driven skills. Its in-depth GenAI-inclusive course
                curriculum supports real-time skill enhancement.
              </p>
              <h3>
                Transforming the World of Banking & Financial Services with Data
                Science{" "}
              </h3>
              <p>
                <b>Data science in financial services</b> has become essential
                for the sector to sustain itself in the modern economy. The
                constant tech shifts raise the demand for skilled data
                scientists in BFSI processing data-driven decisions. The global
                data science platform expects a rise of 27.7% by 2026 covering
                all prime industries. Since the BFSI sector is prone to
                uncertainties,
                <b>data science in banking and finance</b> has become a
                game-changer.
              </p>

              <p>
                Many BFSI experts with relevant years of experience can become a
                part of the growing digital space with the right upskilling.
                Data science for banking and finance unlocks promising career
                growth options with assured gains. Recent years have seen a
                fast-paced rise in the use of data science in financial
                services.
              </p>
              <p>
                Thus, upskilling with an industry-focused course program is the
                prime gateway to enriching career values with better job offers.
              </p>
              <h2>
                Is enrolling in{" "}
                <b>Data Science and AI for BFSI Professionals</b> worth it?
              </h2>
              <p>
                If you are a BFSI expert at an early or mid-career level eager
                to upgrade your career’s worth, upskilling is a wise solution.
                If you are interested in the <b>BFSI domain,</b> opting for the{" "}
                <p>
                  <i>
                    <b>Note:</b>
                  </i>{" "}
                  Experts can also opt for an{" "}
                  <b>Advance Data Science and AI Course</b> and improve their
                  financial knowledge as per the latest trends.
                </p>
                <h3>
                  Briefing Learnbay’s Data Science and AI for BFSI Professionals
                  Program
                </h3>
                <ul>
                  <li>
                    <h4>Industry-fit Course Syllabus</h4>
                    <p>
                      This program offers industry-fit course syllabi curated as
                      per the latest updates. Learners get a 360-degree
                      knowledge-building (theoretical & practical) scope via
                      this course. With this, you learn the use of{" "}
                      <b>data science in financial services.</b>
                    </p>
                  </li>
                  <li>
                    <h4>Domain-specific Training</h4>
                    <p>
                      Renowned industry experts provide domain-specific training
                      to learners enrolling in the course. It helps to gain a
                      complete knowledge of real-time uses of{" "}
                      <b>data science in BFSI.</b> Experts learn about
                      real-world uses of data science tools and improve their
                      ways of working.
                    </p>
                  </li>
                  <li>
                    <h4>Experiential Learning</h4>
                    <p>
                      Learnbay believes in real-time skills upgrades. Thus, this
                      program introduces two fresh capstone projects to make you
                      aware of real cases. Mentors help you gain hands-on
                      learning experiences with in-demand tools in the{" "}
                      <b>BFSI domain.</b>
                    </p>
                  </li>

                  <li>
                    <h4>Job & Placement Support</h4>
                    <p>
                      Upskilling is incomplete without placement. Learnbay
                      envisions a bright BFSI career with valid skills upgrades.
                      This course offers 100% placement support via its Career
                      Service Pro program. A learner will get everything – from
                      resume preparation to unlimited interview calls from any
                      of the 450+ industry partners.{" "}
                    </p>
                  </li>
                  <li>
                    <h4>Globally-valued Certifications </h4>
                    <p>
                      Learners opting for this course will gain the scope of
                      validating their careers with globally accredited industry
                      certifications. This course offers 2 course certificates
                      <b>(IBM & Microsoft)</b> and 1 project certificate{" "}
                      <b>(IBM).</b>
                    </p>
                  </li>
                  <li>
                    <h4>Can a full-time Banker opt for this course? </h4>
                    <p>
                      Yes, if you are a full-time banker and wish to become a
                      data scientist, this course is useful for you. Also, the
                      other non-bankers eager to switch to data science can
                      upskill via Data Science and AI for BFSI Professionals
                      program. With good academics and basic numeracy skills,
                      anyone can kick-start their career with this program.{" "}
                    </p>
                  </li>
                  <li>
                    <h4>
                      Differentiating Data Scientist and BFSI Data Scientist.
                    </h4>
                    <p>
                      Data scientists in general have broader roles and duties
                      to play. On the contrary, BFSI data scientists are liable
                      to handle finance-related tasks. In today’s changing job
                      landscape, having domain-led expertise is vital for
                      experts. Becoming a data scientist in the BFSI domain can
                      be fruitful in the long run with a specialized career
                      path. Data science in financial services deals with –
                      <ul>
                        <li>Financial budgeting</li>
                        <li>Fraud detection & analysis</li>
                        <li>Deciding financial models</li>
                        <li>Credit risks analysis </li>
                        <li>Regulatory compliance </li>
                        <li>Financial market analysis </li>
                      </ul>
                      <p>
                        From a career perspective, data scientists in the BFSI
                        domain can lead specific roles across global financial
                        organizations. A general data scientist can earn INR 8
                        LPA – INR 23 LPA on average. On the other hand, the
                        average salary for a data scientist in financial
                        services ranges between INR 4 LPA and INR 28 LPA.{" "}
                      </p>
                    </p>
                  </li>
                </ul>
                <h2>
                  How does Learnbay support your career transition journey in
                  the BFSI domain?{" "}
                </h2>
                <p>
                  Enrolling in Learnbay’s{" "}
                  <i>
                    <b>Data Science and AI for BFSI Professionals</b>
                  </i>{" "}
                  program is the first step to successful career growth. Its
                  inclusive training offers a real-time learning platform via
                  the ‘Project Innovation Lab’.
                </p>
                <h3>So, how does Project Innovation Lab support upskilling?</h3>
                <p>
                  Data science in BFSI demands hands-on expertise in tools to
                  attain true success. Learnbay supports experiential learning
                  where learners get exposure to real-world business issues. You
                  will work on 2 real-time simulation projects under your
                  mentor’s guidance at project innovation labs. Experts from the
                  BFSI domain choose their real-time projects and work to gain
                  industry-driven experience. Learnbay’s Project innovation labs
                  justify its pledge to 360-degree knowledge development.
                </p>
                <p>
                  Apart from 360-degree career upskilling, it offers 100%
                  placement help via ‘Career Service Pro’. With this, learners
                  gain adequate skills to use data science in banking and
                  finance.
                </p>
                <h4>Then, how does Career Service Pro help? </h4>
                <p>
                  All the eligible learners with a score of at least 70% in
                  assessments can opt for this pro package. It offers –
                  <ul>
                    <li>
                      Three years of job and placement help with assured job
                      offers
                    </li>
                    <li>
                      Six 1:1 mock interviews with any of the 450+ industry
                      partners
                    </li>
                    <li>Resume Building</li>
                    <li>LinkedIn profile review</li>
                    <li>1:1 doubt-clearing sessions with mentors</li>
                  </ul>
                </p>
              </p>

              <div onClick={popupShow} className={styles.buttonDiv}>
                <Button bannerButton={true} text="DOWNLOAD SYLLABUS" />
              </div>
            </>
          ) : (
            ""
          )}
          <p
            style={{
              color: "#2D9CD7",
              fontWeight: "600",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handler}
            className={styles.readP}
          >
            {read ? "Read Less..." : "Read More..."}
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default DataAnalytics;
