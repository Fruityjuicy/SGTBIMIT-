import React from 'react'
import './faculty.css'
import useFetch from '../../useFetch'
import { Header, Navbar, Footer, Loader } from '../../Components'
import { Helmet } from 'react-helmet'
export default function Faculty() {
    const { data: facultyData, isPending } = useFetch("http://localhost:5000/Faculty/Faculty_Display")

    return (
        <>
            <Helmet title="SGTBIMIT | Faculty" />
            <Header />
            <Navbar />
            <section className='faculty'>
                <div className="faculty-container">
                    <h1 className="faculty-title">Core Faculty</h1>
                    <p className="faculty-content">SGTBIMIT has very diversified and experienced faculties of their domains that works day in day out for their students to make them industry ready</p>
                    <div className="faculty-grid">
                        {isPending && <Loader />}
                        {facultyData && facultyData.map(({ _id, name, post, detail, Department }, i) => (
                            <div className="faculty-card">
                                <img src={`http://localhost:5000/Faculty/Faculty_Image_Display/${_id}`} alt="cant load" />
                                <div className='fac-name'>
                                    <h2 className="faculty-name">{name}</h2>
                                    <p>{post}</p>
                                    <div className='fac-details'>
                                        <p className="faculty-note">{detail}</p>
                                        <p className="faculty-department">
                                            <span style={{
                                                fontFamily: "SF Pro Display-Bold"
                                            }}>{"Department: "}</span>
                                            {Department}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
