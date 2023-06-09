import React, { useEffect, useState } from "react";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import axios from "axios";
import "../../Society/Society_Display/Society_Display.css";
import "../../Faculty/Faculty_Display/FacultyDisplay.css"
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";
const { Meta } = Card;

const RecruitersDisplay = () => {
  const [render, setRender] = useState(0);
  const [getRecruiters, setRecruiters] = useState([]);
  const navigator = useNavigate("");

  useEffect(() => {
    const TestimonialsDataGet = async () => {
      try {
        const data = (
          await axios.get("http://localhost:5000/Recruiters/recruiters_Display")
        ).data;
        setRecruiters(data);
        setRender(0);
      } catch (error) {
        console.log(error);
      }
    };
    TestimonialsDataGet();
    ImagesGet();
  }, [render]);

  const ImagesGet = (value) => {
    return (
      <img
        src={`http://localhost:5000/Recruiters/Recruiter_Image_Display/${value}`}
        alt=""
        style={{height : "300px", borderBottom : "1px solid #f0f0f0" , paddingBottom : "5px"}}
      />
    );
  };

  const RecruitersDelete = async (value) => {
    try {
      const _id = value;
      // console.log(_id);
      await axios.post(`http://localhost:5000/Recruiters/recruiters_Delete/${_id}`);
      setRender(1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="SocietyDisplayContainer">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="Testimonial_DetailContainer">
          <AdminHeader />
          <div className="TesHeaderCard">
            <div className="TesDisplayHeading">
              <h1>Our Recruiters</h1>
            </div>
            <div className="FacultyCardContainer">
             {getRecruiters.map((value) =>{
                return(
                    <div className="FacultyCard">
                    <Card
                      hoverable
                      style={{
                        width: 240,
                      }}
                      cover={
                        ImagesGet(value?._id)
                      }
                    >
                      <div className="FacultyCardtitle">
                        <Meta title={value?.Name} bordered={false} style = {{padding : "10px"}}/>
                        <Meta
                        //   title={value?.name}
                          // description={value?.companyName}
                        />
                      </div>
                      <span className="FacultyCardController">
                        <BiEditAlt
                          style={{
                            paddingRight: "10px",
                            borderRight : "1px solid #f0f0f0",
                            width: "35px",
                            fontSize : "20px",
                            color: "#adb5bd",
                          }}
                          onClick={() => {
                              navigator(`/admin/recruiters_Update/${value._id}`);
                          }}
                        />
                        <RiDeleteBin6Line
                          className="TestBin"
                          onClick={() => {
                            RecruitersDelete(value._id);
                          }}
                          style={{ color: "#d00000" }}
                        />
                      </span>
                    </Card>
                  </div>
                )
             })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecruitersDisplay;
