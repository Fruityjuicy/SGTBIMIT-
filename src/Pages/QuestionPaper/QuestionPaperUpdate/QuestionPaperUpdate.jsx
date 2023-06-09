import React, { useState,useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import { useParams } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "../QuestionPaperAdd/QuestionPaperAdd.css";
import "../../Society/Society_Add/Society_Add.css";
import "../../Testimonials/Testimonials_ADD/Testimonials_ADD";

const QuestionPaperUpdate = () => {
  const [societUpdate, setSocieUpdate] = useState({
    course: "",
    Year: "",
    Semester: "",
  });

  const { Year, Semester, course, _id } = useParams();

  const [filedata, setFileData] = useState();

  function handleFileInputChange(event) {
    const files = event.target.files;
    const newImages = [];

    if(files.length){
      for (let i = 0; i < files.length; i++) {
        newImages.push(files[i]);
      }
  
      setFileData(newImages);
    }else{
      setFileData(files);
    }
  }

  const Onchagetesdetail = (e) => {
    setSocieUpdate({ ...societUpdate, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setSocieUpdate({
      course: course,
      Year: Year,
      Semester: Semester,
    })
  }, [])


  const PaperUpdate = async () => {
    try {
      let formData = new FormData();
      if (filedata.length) {
        for (let i = 0; i < filedata.length; i++) {
          formData.append("file", filedata[i]);
        }
      } else {
        formData.append("file", filedata);
      }
      formData.append("course", societUpdate.course);
      formData.append("Year", societUpdate.Year);
      formData.append("Semester", societUpdate.Semester);
      const data1 = (
        await axios.post(`http://localhost:5000/QuestionPaper/Question_Paper_Update/${_id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
      ).data;
      toast(`${data1.message}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // console.log(data1);
    } catch (error) {
      console.log(error);
      toast.error(`${error.message}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <>
      <div className="societyAddConatiner">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="SocietyDetailContainer">
          <AdminHeader />
          <div className="SocietyFormContainer">
            <div className="Society_Heading">
              <h1>Paper Data Update</h1>
            </div>
            <div className="SocietyForm">
              <select name="course" id="" value={societUpdate?.course} onChange={Onchagetesdetail}
              >
                <option value=" ">Select Course</option>
                <option value="BCA">BCA</option>
                <option value="BBA">BBA</option>
                <option value="BBA B&I">BBA B&I</option>
                <option value="BCOM">BCOM</option>
              </select>
              <input
                type="text"
                name="Year"
                id=""
                placeholder="Year"
                value={societUpdate?.Year}
                onChange={Onchagetesdetail}
              />
              <select name="Semester" id="" value={societUpdate?.Semester} onChange={Onchagetesdetail} >
                <option value=" ">Select Semester</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              <div className="Message_image">
                <input
                  type="file"
                  name="file"
                  id="ImageUpload"
                  multiple
                  onChange={handleFileInputChange}
                  style={{ width: "200px", height: "150px" }}
                />
              </div>
              <button
                className="button-19"
                onClick={async () => {
                  PaperUpdate();
                }}
              >
                Submit
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionPaperUpdate;
