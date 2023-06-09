import React, { useEffect, useState } from "react";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import { useParams } from "react-router-dom";
import axios from "axios";

const EResourcesUpdate = () => {
  const [SingleData, setSingleData] = useState({
    name: "",
    url: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const TestSingleData = async () => {
      try {
        const data = (
          await axios.post(
            "http://localhost:5000/E_Resources/EResources_Single_Display",
            { id }
          )
        ).data;
        setSingleData({
          name: data?.source?.name,
          url: data?.source?.url,
        });
      } catch (error) {
        console.log(error);
      }
    };
    TestSingleData();
  }, [id]);

  const EResoucesUpdate = async (e) => {
    e.preventDefault();
    try {
      const data = (
        await axios.post(
          `http://localhost:5000/E_Resources/EResources_Update/${id}`,
          { SingleData }
        )
      ).data;
    } catch (error) {
      console.log(error);
    }
  };

  const Onchagetesdetail = (e) => {
    setSingleData((SingleData) => ({
      ...SingleData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="TestimonialUpdateContainer" style={{ display: "flex" }}>
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="TestimonialDetailContainer">
          <AdminHeader />
          <div className="TesHeadingFormContainer">
            <div className="Testimonial_Heading">
              <h1>Update E-Resources</h1>
            </div>
            <div className="TestimonialForm">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={SingleData.name}
                onChange={Onchagetesdetail}
              />
              <input
                type="text"
                name="url"
                id="url"
                placeholder="URL"
                value={SingleData.url}
                onChange={Onchagetesdetail}
              />
              <button className="button-19" onClick={EResoucesUpdate}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EResourcesUpdate;
