import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Notices.css";
import anti_ragging_poster from "../Assets/anti_ragging_poster.pdf";

export default function Notice(){

    const note= [
        {
            link: anti_ragging_poster,
            title: "anti ragging poster",
            miniinfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus asperiores aliquid, mollitia sit ullam cupiditate qui quam ab fuga suscipit quod possimus perferendis enim reiciendis error, laborum unde velit. Eius."
        },
        {
            link: anti_ragging_poster,
            title: "anti ragging poster",
            miniinfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus asperiores aliquid, mollitia sit ullam cupiditate qui quam ab fuga suscipit quod possimus perferendis enim reiciendis error, laborum unde velit. Eius."
        },
        {
            link: anti_ragging_poster,
            title: "anti ragging poster",
            miniinfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus asperiores aliquid, mollitia sit ullam cupiditate qui quam ab fuga suscipit quod possimus perferendis enim reiciendis error, laborum unde velit. Eius."
        },
        {
            link: anti_ragging_poster,
            title: "anti ragging poster",
            miniinfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus asperiores aliquid, mollitia sit ullam cupiditate qui quam ab fuga suscipit quod possimus perferendis enim reiciendis error, laborum unde velit. Eius."
        },
        {
            link: anti_ragging_poster,
            title: "anti ragging poster",
            miniinfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus asperiores aliquid, mollitia sit ullam cupiditate qui quam ab fuga suscipit quod possimus perferendis enim reiciendis error, laborum unde velit. Eius."
        },
        {
            link: anti_ragging_poster,
            title: "anti ragging poster",
            miniinfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus asperiores aliquid, mollitia sit ullam cupiditate qui quam ab fuga suscipit quod possimus perferendis enim reiciendis error, laborum unde velit. Eius."
        },
        {
            link: anti_ragging_poster,
            title: "anti ragging poster",
            miniinfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus asperiores aliquid, mollitia sit ullam cupiditate qui quam ab fuga suscipit quod possimus perferendis enim reiciendis error, laborum unde velit. Eius."
        },
    ]

    return(
        <>
            <Header />
            <Navbar />
            <>
            <div className="n_container">
                <h1>IMPORTANT NOTICES</h1>
                <div className="newsbox">
                    <div className="col">
                            {note.map((n => (
                        <div className="b">
                            <div className="nt">
                                <a href={n.link}>{n.title}</a>
                            </div>
                            <div className="nc">
                                <p>{n.miniinfo}</p>
                            </div>
                        </div> )
                            ))};
                    </div>
                </div>
            </div>
            </>
            <Footer />
        </>
    )
}
