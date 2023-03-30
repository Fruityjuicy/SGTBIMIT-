import React, { useState } from "react";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import "./Society_Add.css";
import "../../Testimonials/Testimonials_ADD/Testimonials_ADD";
import axios from "axios";
import Resizer from "react-image-file-resizer";

const Society_Add = () => {

  const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      200,
      200,
      "JPEG",
      100,
      0,
      // (uri) => {
      //   resolve(uri);
      // },
    );
  });

  const [societUpdate, setSocieUpdate] = useState({
    title: "",
    detail: "",
    subdetail: "",
  });
  const [filedata, setFileData] = useState();

  const Onchagetesdetail = (e) => {
    setSocieUpdate({ ...societUpdate, [e.target.name]: e.target.value });
  };

  const SocietyAdd = async () => {
    try {
      let formData = new FormData();
      let image = await resizeFile(filedata)
      console.log(image);
      formData.append("image", image);
      formData.append("title", societUpdate.title);
      formData.append("detail", societUpdate.detail);
      formData.append("subdetail", societUpdate.subdetail);
      const data1 = (
        await axios.post(
          "http://localhost:5000/Society/Society_Add",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
      ).data;
      console.log(data1);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(filedata);
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
              <h1>Create a new Society</h1>
            </div>
            <div className="SocietyForm">
              <input
                type="text"
                name="title"
                id=""
                placeholder="Name"
                onChange={Onchagetesdetail}
              />
              <input
                type="text"
                name="subdetail"
                id=""
                placeholder="Sub Detail"
                onChange={Onchagetesdetail}
              />
              <div className="Message_image">
                <textarea
                  name="detail"
                  id=""
                  cols="15"
                  rows="5"
                  placeholder="Message"
                  onChange={Onchagetesdetail}
                ></textarea>
                <input
                  type="file"
                  name="image"
                  id="ImageUpload"
                  onChange={(e) => {
                    setFileData(e.target.files[0]);
                  }}
                  style={{width: "200px",height:"150px"}}
                />
              </div>

              <button
                className="button-19"
                onClick={() => {
                    SocietyAdd();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Society_Add;
