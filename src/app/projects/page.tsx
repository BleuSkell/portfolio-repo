"use client"

import {useEffect, useState} from "react";

import Nav from "@/components/nav"
import Footer from "@/components/footer"
import "@/app/page-css/projects.css"

import Image from "next/image"
import star from "public/star.png"

export default function ProjectsPage() {
    const [shouldAnimate, setShouldAnimate] = useState(false)

    const categories = ["coding", "design", "creative", "other"]
    const tags = [
        "Traditional art", "Digital art", "Illustration", "Painting", "Animation",
        "Web design", "UI/UX Design", "Graphic design", "Figma",
        "REACT", "Laravel", "WordPress", "JS", "CSS", "HTML", "PHP", "MySQL", "Java",
        "Fun", "Fashion", "Music", "Film/video",
    ]
    const projects = [
        {name: "POM3", category: categories[0], tags: [tags[9], tags[10], tags[18]]},
        {name: "opads", category: categories[0], tags: [tags[18], tags[17]]},
        {name: "CV Template", category: categories[1], tags: [tags[7], tags[8]]},
        {name: "Portfolio repo", category: categories[0], tags: [tags[9], tags[12], tags[13]]},
        {name: "Fashion designs", category: categories[2], tags: [tags[19], tags[2]]},
        {name: "WP LLM Toolkit", category: categories[0], tags: [tags[11], tags[15], tags[14], tags[13], tags[12]]},
        {name: "CITA company map", category: categories[0], tags: [tags[11], tags[15], tags[14], tags[13], tags[12]]},
    ]

    useEffect(() => {
        if (sessionStorage.getItem("loadingFinished") === "true") {
            setShouldAnimate(true)
            return
        }

        const handleLoaderHidden = () => setShouldAnimate(true)
        window.addEventListener("load", handleLoaderHidden)
        return () => window.removeEventListener("load", handleLoaderHidden)
    }, [])

    return (
        <div className="flex flex-col bg-primary font-sans">
            <Nav/>

            <main>
                <section className="flex flex-col items-center justify-center" style={{height: "100vh"}}>
                    <div className="typewriter-text relative">
                        <span className={`${shouldAnimate ? "typewriter-blockout" : ""}`}/>
                    </div>
                </section>

                <section className="flex flex-col">
                    <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", padding: "20px"}}>
                        {projects.map((project, index) => (
                            <div key={index} className="flex flex-col text-left gap-4 font-instrument-sans">
                                <div className="bg-gray-500 p-2 rounded-lg w-64 h-32">

                                </div>

                                <div className="flex flex-col gap-2">
                                    <p className="text-secondary text-xl" style={{fontWeight: "600"}}>{project.name}</p>
                                    <div className="flex flex-row items-center gap-2">
                                        <Image src={star} alt="star" className="w-10 h-10"/>
                                        <p className="text-tertiary text-xl">{project.category}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <p key={tagIndex} className="text-xs">{tag}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    )
}