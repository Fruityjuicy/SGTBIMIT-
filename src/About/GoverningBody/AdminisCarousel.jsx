import React, { useEffect } from "react";
import useFetch from "../../useFetch";
import { Carousel } from "react-responsive-carousel";
import "./adminis.css";
import Navbar from "../../Components/Navbar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Loader from "../../Components/Loader";
export default function AdminisCarousel() {
<<<<<<< HEAD


  const { data : adminisArray, isPending } = useFetch(
    "http://localhost:5000/Administration/Administration_Display"
  );
=======
  const { data: adminisArray, isPending, error } = useFetch("http://localhost:5000/Administration/Administration_Display")
>>>>>>> 91932f9e0d62be30566961718ffc6c506a1efecc

  useEffect(() => {
    document
      .querySelector(".about-nav-link")
      .classList.remove("dropdown-active-item");
  }, []);

    const numAscending = adminisArray ? [...adminisArray].sort((a, b) => a.Index - b.Index) : adminisArray
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <section className="adminis-section">
        {isPending && <Loader />}
        {error && <div className="error">{error}</div> }
        <Carousel
<<<<<<< HEAD
          // infiniteLoop={true}
=======
>>>>>>> 91932f9e0d62be30566961718ffc6c506a1efecc
          interval={4000}
          className="adminis-carousel"
          autoPlay={true}
          selectedItem={0}
        >
          {
            numAscending?.map((adminis) => (
              <div className="adminis" key={adminis?.Index}>
                <img
                  src={`http://localhost:5000/Administration/AdministrationImageDisplay/${adminis._id}`}
                  alt="cant load"
                  className="adminis-img"
                />
                <h2 className="adminis-heading">
                  {adminis?.name}
                  <strong className="position"> {adminis?.position}</strong>
                </h2>
                <strong className="short-note">
                  WAHEGURU JI KA KHALSA, WAHEGURU JI KI FATEH!!
                  <strong>{adminis.shortNote}</strong>
                </strong>
                <p className="long-note"> {adminis?.longNote} </p>
              </div>
            ))}
        </Carousel>
      </section>
      <Footer></Footer>
    </>
  );
}
