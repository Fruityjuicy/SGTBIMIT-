import React, { useState, useEffect } from "react";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import "../../Society/Society_Add/Society_Add.css";
import "../../Testimonials/Testimonials_ADD/Testimonials_ADD";
import axios from "axios";
import { useParams } from "react-router-dom";
import imageCompression from "browser-image-compression";

const Society_Update = () => {
  const [GovernUpdate, setGovernUpdate] = useState({
    name: "",
    position: "",
    shortNote: "",
    longNote: "",
  });
  const { _id } = useParams();

  const [filedata, setFileData] = useState();

  const Onchagetesdetail = (e) => {
    setGovernUpdate({ ...GovernUpdate, [e.target.name]: e.target.value });
  };

  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  useEffect(() => {
    const TestSingleData = async () => {
      try {
        const data = (
          await axios.get(
            `http://localhost:5000/Administration/Single_Administration_Display/${_id}`
          )
        ).data;
        setGovernUpdate({
          name : data?.name,
          position: data?.position,
          shortNote: data?.shortNote,
          longNote : data?.longNote
        });
      } catch (error) {
        console.log(error);
      }
    };
    TestSingleData();
  }, [_id]);

  // console.log(societUpdate);

  const GoverningUpdate = async () => {
    try {
      let formData = new FormData();
      const compressedFile = await imageCompression(filedata, options);
      formData.append("image", compressedFile);
      formData.append("name", GovernUpdate.name);
      formData.append("position", GovernUpdate.position);
      formData.append("shortNote", GovernUpdate.shortNote);
      formData.append("longNote", GovernUpdate.longNote);
      const data1 = (
        await axios.post(
          `http://localhost:5000/Administration/Administration_Update/${_id}`,
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
              <h1>Update Governing Body</h1>
            </div>
            <div className="SocietyForm">
              <input
                type="text"
                name="name"
                id=""
                placeholder="Name"
                value={GovernUpdate.name}
                onChange={Onchagetesdetail}
              />
              <input
                type="text"
                name="position"
                id=""
                placeholder="Position"
                value={GovernUpdate.position}
                onChange={Onchagetesdetail}
              />
              <input
                type="text"
                name="shortNote"
                id=""
                placeholder="Short Note"
                value={GovernUpdate.shortNote}
                onChange={Onchagetesdetail}
              />
              <textarea
                name="longNote"
                id=""
                cols="15"
                rows="5"
                placeholder="Detail"
                value={GovernUpdate.longNote}
                onChange={Onchagetesdetail}
              ></textarea>
              <div className="Message_image">
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  id="ImageUpload"
                  onChange={(e) => {
                    setFileData(e.target.files[0]);
                  }}
                  style={{ width: "400px", height: "200px" }}
                />
                {filedata ? (
                  <img
                    src={URL.createObjectURL(filedata)}
                    alt=""
                    style={{
                      width: "400px",
                      height: "200px",
                      borderRadius: "10px",
                    }}
                  />
                ) : (
                  <img
                    src={`http://localhost:5000/Administration/AdministrationImageDisplay/${_id}`}
                    alt=""
                    style={{
                      width: "400px",
                      height: "200px",
                      borderRadius: "10px",
                    }}
                  />
                )}
              </div>
              <button
                className="button-19"
                onClick={() => {
                    GoverningUpdate();
                }}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Society_Update;
