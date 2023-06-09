import React, { useEffect, useState } from "react";
import "../../Pages/Society/Society_Display/Society_Display.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FileData from "./FileDataa";
import "./QuestionPaperDisplay.css"
import { Header, Navbar, Footer } from "../../Components";
import { Helmet } from "react-helmet";

const QuestionPaperDisplay = () => {
  const [render, setRender] = useState(0);
  const [getSociety, setSociety] = useState([]);
  const [dataReset, setDataReset] = useState(true);
  const [getPaperFilter, setPaperfilter] = useState({
    course: "",
    Year: "",
    Semester: "",
  });

  const [getPaperFilterData, setPaperFilterData] = useState({
    course: "",
    Year: "",
    Semester: "",
    _id: "",
  });

  const [filter, setfilter] = useState({});

  const Onchagetesdetail = (e) => {
    setPaperfilter({ ...getPaperFilter, [e.target.name]: e.target.value });
  };

  const navigator = useNavigate("");

  //------------------------- All object Display -------------------------//
  const QuestionPaperDataGet = async () => {
    try {
      const data = (
        await axios.get(
          "http://localhost:5000/QuestionPaper/Question_Paper_Display_All"
        )
      ).data;
      setSociety(data);

      setRender(0);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    QuestionPaperDataGet();
  }, [render]);

  //-------------------- Single Document Data get ----------------------//
  const SinglePaperDisplay = async () => {
    try {
      // console.log(getPaperFilter);
      const Detail = (
        await axios.get(
          `http://localhost:5000/QuestionPaper/Display/${getPaperFilter.course}/${getPaperFilter.Year}/${getPaperFilter.Semester}`
        )
      ).data;
      // console.log(Detail);

      setPaperFilterData({
        course: Detail?.Data[0]?.course,
        Year: Detail?.Data[0]?.Year,
        Semester: Detail?.Data[0]?.Semester,
        _id: Detail?.Data[0]?._id,
      });
      setDataReset(false);
    } catch (error) {
      console.log(error);
    }
  };

  //----------- Reset the Data --------------//
  const ResetPaperData = async () => {
    if (!dataReset) {
      setDataReset(true);
      setRender(1);
      setPaperfilter({
        course: " ",
        Year: " ",
        Semester: " ",
      });
    }
  };

  //--------------- Get the Filter Data ----------------------//
  const filterData = async (course) => {
    try {
      const data = (
        await axios.get(
          `http://localhost:5000/QuestionPaper/Filter_Data/${course}`
        )
      ).data;
      setfilter(data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <Helmet title="SGTBIMIT | Previous Year Papers" />
    <Header />
    <Navbar />
      <div className="SocietyDisplayContainer"
      style={{
        fontFamily: "SF Pro Display"
      }}
      >
        <div className="SideBar">
        </div>
        <div className="Testimonial_DetailContainer">
          <div className="TesHeaderCard">
            <div className="TesDisplayHeading">
              <h1
              style={{
                fontFamily: "SF Pro Display"
              }}>Prev Year Papers</h1>
            </div>
            <div className="filterContainer-f">
              <span className="NameAndSelect-f">
                <h4>Course</h4>
                <select
                  name="course"
                  id=""
                  placeholder="course"
                  value={getPaperFilter.course}
                  onChange={(e) => {
                    filterData(e.target.value);
                    Onchagetesdetail(e);
                  }}
                >
                  <option value=" ">Select Course</option>
                  <option value="BCA">BCA</option>;
                  <option value="BBA">BBA</option>;
                  <option value="BBA B&I">BBA B&I</option>;
                  <option value="BCOM">BCOM</option>;
                </select>
              </span>
              <span className="NameAndSelect-f">
                <h4>Year</h4>
                <select
                  name="Year"
                  id=""
                  placeholder="Year"
                  value={getPaperFilter.Year}
                  onChange={Onchagetesdetail}
                >
                  <option value=" ">Select Year</option>
                  {filter?.Years?.map((value) => {
                    // console.log(value);
                    return <option value={value.year}>{value.year}</option>;
                  })}
                </select>
              </span>
              <span className="NameAndSelect-f">
                <h4>Semester</h4>
                <select
                  name="Semester"
                  id=""
                  placeholder="Semester"
                  onChange={Onchagetesdetail}
                  value={getPaperFilter.Semester}
                >
                  <option value=" ">Select Semester</option>
                  {filter?.Years?.map((value) => {
                    if (value.year == getPaperFilter.Year) {
                      return value.Semesters.map((value1) => {
                        return (
                          <option value={value1.Semester}>
                            {value1.Semester}
                          </option>
                        );
                      });
                    }
                  })}
                </select>
              </span>
              <button onClick={SinglePaperDisplay} className="button-30-f">Search</button>
              <button onClick={ResetPaperData} className="button-30-f">Clear</button>
            </div>
            {/* {dataReset ? (
              <div className="PaperDisplayCardContainer">
                {console.log(dataReset)}
                {getSociety.map((value) => {
                  return (
                    <div className="Society_Card Paper_Card">
                      <h3
                      style={{
                        fontFamily: "SF Pro Display"
                      }}>
                        {value.course}
                      </h3>
                      <div className="Society_Card_ImageDescription ">
                        <FileData
                          course={value?.course}
                          Year={value?.Year}
                          Semester={value?.Semester}
                          _id={value?._id}
                          
                        />
                        <div className="Society_Describe">
                          <h4
                          style={{
                            fontFamily: "SF Pro Display"
                          }}>{value.Year}</h4>
                          <h4
                          style={{
                            fontFamily: "SF Pro Display"
                          }}> Semester : {value.Semester}</h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : ( */}
              <div className="TesDisplayCardContainer">
                {/* {console.log(getPaperFilterData)} */}
                <div className="Society_Card">
                  <h3>
                    {getPaperFilterData?.course}
                    
                  </h3>
                  <div className="Society_Card_ImageDescription">
                    {getPaperFilterData ? (
                      <FileData
                        course={getPaperFilterData?.course}
                        Year={getPaperFilterData?.Year}
                        Semester={getPaperFilterData?.Semester}
                        _id={getPaperFilterData?._id}
                      />
                    ) : (
                      "  "
                    )}
                    <div className="Society_Describe">
                      <h4>{getPaperFilterData.Year}</h4>
                      <h4> Semester : {getPaperFilterData?.Semester}</h4>
                    </div>
                  </div>
                </div>
              </div>
            {/* )} */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QuestionPaperDisplay;
