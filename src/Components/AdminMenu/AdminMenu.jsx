import React, { useState } from "react";
import { ImBoxAdd } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./AdminMenu.css";
const AdminMenu = () => {
  const [isHomeActive, setIsHomeActive] = useState(false);
  const [isSUBTestimonialActive, setIsSUBTestimonialActive] = useState(false);
  const [isSUBSocietyActive, setIsSUBSocietyActive] = useState(false);
  const [isSUBFacultyActive, setIsSUBFacultyActive] = useState(false);
  const [isSUBAdministrationActive, setIsSUBAdministrationActive] =
    useState(false);
  const [isAboutActive, setIsAboutActive] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="AdminMenuContainer">
        <div
          className="Categories"
          onClick={() => {
            navigate("/admin");
          }}
        >
          <span className="categories_Header">
            <span>
              <MdDashboard className="CatHeadIcons" />
              <h3>Dashboard</h3>
            </span>
          </span>
        </div>
        <div className="Categories">
          <span
            className="categories_Header"
            onClick={() => {
              setIsHomeActive(!isHomeActive);
            }}
          >
            <span>
              <ImBoxAdd className="CatHeadIcons" />
              <h3>Home</h3>
            </span>
            <IoIosArrowDown className="CatHeadIcons" />
          </span>
          {isHomeActive && (
            <div className="Categoriesdropdown">
              <span>
                <p
                  onClick={() => {
                    setIsSUBTestimonialActive(!isSUBTestimonialActive);
                  }}
                  style={{
                    backgroundColor: "#e0e1dd",
                  }}
                >
                  TESTIMONIALS <IoIosArrowDown className="CatHeadIcons" />
                </p>
                {isSUBTestimonialActive && (
                  <div className="Categoriesdropdown">
                    <span>
                      <p
                        onClick={() => {
                          navigate("/admin/Testimonials_Add");
                        }}
                      >
                        TESTIMONIAL ADD
                      </p>
                      <p
                        onClick={() => {
                          navigate("/admin/Testimonials_Display");
                        }}
                      >
                        TESTIMONIALS DISPLAY
                      </p>
                    </span>
                  </div>
                )}
                
                <p
                  onClick={() => {
                    setIsSUBFacultyActive(!isSUBFacultyActive);
                  }}
                  style={{
                    backgroundColor: "#e0e1dd",
                  }}
                >
                  FACULTY <IoIosArrowDown className="CatHeadIcons" />
                </p>
                {isSUBFacultyActive && (
                  <div className="Categoriesdropdown">
                    <span>
                      <p
                        onClick={() => {
                          navigate("/admin/Faculty_Add");
                        }}
                      >
                        FACULTY ADD
                      </p>
                      <p
                        onClick={() => {
                          navigate("/admin/Faculty_Display");
                        }}
                      >
                        FACULTY DISPLAY
                      </p>
                    </span>
                  </div>
                )}
              </span>
            </div>
          )}
        </div>
        <div className="Categories">
          <span
            className="categories_Header"
            onClick={() => {
              setIsAboutActive(!isAboutActive);
            }}
          >
            <span>
              <ImBoxAdd className="CatHeadIcons" />
              <h3>ABOUT US</h3>
            </span>
            <IoIosArrowDown className="CatHeadIcons" />
          </span>
          {isAboutActive && (
            <div className="Categoriesdropdown">
              <span>
                <p
                  onClick={() => {
                    setIsSUBAdministrationActive(!isSUBAdministrationActive);
                  }}
                  style={{
                    backgroundColor: "#e0e1dd",
                  }}
                >
                  GOVERNING BODY <IoIosArrowDown className="CatHeadIcons" />
                </p>
                {isSUBAdministrationActive && (
                  <div className="Categoriesdropdown">
                    <span>
                      <p
                        onClick={() => {
                          navigate("/admin/Administration_Add");
                        }}
                      >
                        GOVERNING BODY ADD
                      </p>
                      <p
                        onClick={() => {
                          navigate("/admin/Administration_Display");
                        }}
                      >
                        GOVERNING BODY DISPLAY
                      </p>
                    </span>
                  </div>
                )}
              </span>
            </div>
          )}
        </div>
        <div className="Categories">
          <span
            className="categories_Header"
            onClick={() => {
              setIsSUBSocietyActive(!isSUBSocietyActive);
            }}
          >
            <span>
              <ImBoxAdd className="CatHeadIcons" />
              <h3>SOCIETY</h3>
            </span>
            <IoIosArrowDown className="CatHeadIcons" />
          </span>
          {isSUBSocietyActive && (
            <div className="Categoriesdropdown">
              <span>
                <p
                  onClick={() => {
                    navigate("/admin/Society_Add");
                  }}
                >
                  SOCIETY ADD
                </p>
                <p
                  onClick={() => {
                    navigate("/admin/Society_Display");
                  }}
                >
                  SOCIETY DISPLAY
                </p>
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
