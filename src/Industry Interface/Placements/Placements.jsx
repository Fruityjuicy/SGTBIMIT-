import React from 'react'
import './placements.css'
import { Header, Navbar, Footer, Loader } from '../../Components'
import { Helmet } from 'react-helmet'

export default function Placements() {
    return (
        <>
            <Helmet title='SGTBIMIT | Placements' />
            <Header />
            <Navbar />

            <section className="placement-cell-section">
                <div className="placement-cell-container">
                    <h1>
                        Placements Cell
                    </h1>
                    <h2>
                        "Your success is our success <br /> Together we can, we will"
                    </h2>
                    <p>The Training & Placement Cell plays a pivotal role in counselling and guiding the students of the institute for their triumphant Career Placement, which is a crucial interface between the stages of completion of academic program of the students and their entry into avenues of suitable employment. To arrange practical trainings for students required in partial fulfilment of their degree requirements by coordinating with various companies, industries etc to provide relevant projects.</p>
                    <ul className='points'>
                        <li>To invite industries and putative companies with the aim of providing employment to students and assisting them in the placement process.</li>
                        <li>To organize lectures and workshops for students to provide supplemental information on career counselling.</li>
                        <li>To provide interview techniques, soft skills development through placement seminars and pre-placement talks.</li>
                    </ul>
                    <p>We have been successful in maintaining our high placement statistics over the years and the fact that our students bear the recession blues with record breaking placements itself is a testimony to our quality. Various reputed companies with good package salary have come to our college. Some of them are Intellipaat with 9 LPA package, Planet Spark with 7.10 LPA package, Unacademy with 12 LPA, Chegg India with 9.6 LPA, Prograd with 8 LPA and so on.</p>
                    <div className='pieimg'>
                        <img src={require("../../images/Placementpiechart.jpg")} alt="" />
                    </div> <br />
                    <div className='graphimg'>
                        <img src={require("../../images/Placementgraph.jpg")} alt="" />
                    </div>
                    <h3>Internships</h3>
                    <p>Internships play a crucial role in providing the students with the valuable work experience, help them in exploring a career path, provide them with an edge in the job market and guides them to develop and refine their skills.

                        SGTBIMIT provides internships in the various industrial sectors and corporate companies like Firstnaukri.com, HCL, TCS (ION), Sharekhan, IDBI, Federal, Talent4assure, AllSoft, Techexpelica, TKW’s Institute of Banking Finance, Younity, MBAtrek, Daily World Newspaper, Buzzibrains, Cashkaro, Exposys Data Labs, Unschool, Shine Project, DOBOT India, Inglu, Blitz Jobs, Mckinley and Rice. </p>
                    <h3>Industrial Visit</h3>
                    <p>In order to understand the working of corporate sector, the Training & Placement Cell plans and executes visits for second and third year students to different industries and organizations to get the right exposure and opportunity for training. An industrial visit to Parle, NSIC, Yakult and Mother Dairy was being organized for BBA, B&I and BCA students of second and third year. Total 48 companies visited our Campus with more than 260 students placed in different companies like Wipro, Finamigo, Infosys, TCS, Deloitte, Naukri.Com, RBS, People Scout, RBS , British Telecom, IBM India Pvt. Limited, Posterity, Rupee Maker, Capgemini etc.</p>

                    <h3>Pool Campus Placements</h3>
                    <p>These are mass recruitment drives organized by SGTBIMIT to bring a large no. of opportunities for deserving under graduates. Pool Campus provides vast platform to the students from various colleges.

                        It bridges the gap between a student and the corporate sector. Plethora of companies visits our institute in search of fresh talent which has considerable knowledge about the new techniques circulating in the industry. Pool Placements comes out to be a plus point for the students of the colleges as they get a chance to join the combined placement drives which is similar to on-campus drive with larger scale.

                        Campus Placements offers a student a wonderful opportunity to get placed during The courses of his academic pursuits, and provide him the comforts of a safe and secure future. Keeping in mind the importance of the campus placement programs, it is vital for a student to prepare adequately for these programs and make sure that they put their best foot forward. Wipro, Infosys, TCS, British Telecom, Naukri.com, Jaro, Mckinley and Rice People Scout visited our Institute where more than 450 students participated in the Pool Campus Drive from many affiliated institutes of GGSIPU.</p>

                    <h3>Online Webinars</h3>
                    <p>SGTBIMIT organised webinars on COVID-19 for the students and faculty. The objective of the webinars was to help them deal with the problems they are facing due to the nationwide lockdown to restrict the spread of corona virus.

                        The aim was to provide young people with a platform for genuine connection amid uncertainty and generate mental health awareness among young people, and strengthen demand for integrated mental health and psychosocial interventions.</p>



                </div>
            </section>
            <Footer />
        </>
    )
}
