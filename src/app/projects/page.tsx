"use client"

import { useEffect, useState, useRef } from "react";

import Nav from "@/components/nav"
import Footer from "@/components/footer"
import "@/app/page-css/projects.css"

import Image from "next/image"
import star from "public/star.png"
import arrowLink from "public/arrow-link.png"
import searchIcon from "public/search-icon.png"
import searchChar from "public/pages/projects/temp-search.png"

import project from "public/pages/projects/temp-project.jpg"

export default function ProjectsPage() {
    const [shouldAnimate, setShouldAnimate] = useState(false)
    const [catRef, setCatRef] = useState<HTMLSelectElement | null>(null)
    const [tagRef, setTagRef] = useState<HTMLSelectElement | null>(null)
    const [searchRef, setSearchRef] = useState<HTMLInputElement | null>(null)

    const categories = ["Coding", "Design", "Creative", "Other"]
    const tags = [
        "Traditional art", "Digital art", "Illustration", "Painting", "Animation",
        "Web design", "UI/UX Design", "Graphic design", "Figma",
        "REACT", "Laravel", "WordPress", "JS", "CSS", "HTML", "PHP", "MySQL", "Java",
        "Fun", "Fashion", "Music", "Film/video",
    ]
    const projectList = [
        {name: "POM3", src: project, category: categories[0], tags: [tags[9], tags[10], tags[18]]},
        {name: "opads", src: project, category: categories[0], tags: [tags[18], tags[17]]},
        {name: "Fashion designs", src: project, category: categories[2], tags: [tags[19], tags[2]]},
        {name: "WP LLM Toolkit", src: project, category: categories[0], tags: [tags[11], tags[15], tags[14], tags[13], tags[12]]},
    ]
    const [projects, setProjects] = useState(projectList)

    useEffect(() => {
        if (sessionStorage.getItem("loadingFinished") === "true") {
            setShouldAnimate(true)
            return
        }

        const handleLoaderHidden = () => setShouldAnimate(true)
        window.addEventListener("load", handleLoaderHidden)
        return () => window.removeEventListener("load", handleLoaderHidden)
    }, [])

    function filterCategory() {
        const catVal = catRef?.value
        const tagVal = tagRef?.value
        const searchVal = searchRef?.value

        const filterProjects = projectList.filter(project => {
            return (
                (catVal === "all" || project.category === catVal) &&
                (tagVal === "all" || project.tags.some(tag => tag === tagVal)) &&
                (searchVal === "" || project.name.toLowerCase().includes(searchVal?.toLowerCase()))
            )
        })

        setProjects(filterProjects)
    }

    searchRef?.addEventListener("keydown", (e) => {
        if (e.keyCode === 13) {
            filterCategory()
        }
    })
    catRef?.addEventListener("change", () => {
        filterCategory()
    })
    tagRef?.addEventListener("change", () => {
        filterCategory()
    })

    return (
        <div className="flex flex-col bg-primary font-sans">
            <Nav/>

            <main>
                <section className="flex flex-col items-center justify-center" style={{height: "100vh"}}>
                    <div className="typewriter-text relative">
                        <span className={`${shouldAnimate ? "typewriter-blockout" : ""}`}/>
                    </div>
                </section>

                <section className="flex justify-center my-36 relative w-full">
                    <Image src={searchChar} alt="search filter character" className="absolute left-[23%] bottom-[-70%]"/>

                    <div className="flex justify-end gap-8 p-4 bg-secondary rounded-lg w-[40%]">
                        <select className="bg-primary text-secondary font-instrument-sans font-bold tracking-wide px-4 py-2 rounded-lg" ref={setCatRef}>
                            <option value="all">Category</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
                        <select className="bg-primary text-secondary font-instrument-sans font-bold tracking-wide px-4 py-2 rounded-lg" ref={setTagRef}>
                            <option value="all">Tag</option>
                            {tags.map((tag, index) => (
                                <option key={index} value={tag}>{tag}</option>
                            ))}
                        </select>
                        <input type="text" placeholder="Search..." className="bg-primary text-secondary px-4 py-2 rounded-lg font-instrument-sans font-bold tracking-wide" ref={setSearchRef}/>
                    </div>
                </section>

                <section className="flex flex-col items-center mb-32">
                    <div className="grid grid-cols-3 gap-22">
                        {projects.map((project, index) => (
                            <div key={index} className="flex flex-col text-left gap-4 font-instrument-sans">
                                <div className="bg-neutral-200 w-125 h-64 relative cursor-pointer hover:h-70 transition-all duration-200">
                                    <Image src={project.src} alt={project.name} className="object-cover w-full h-full rounded-lg"/>
                                    <Image src={arrowLink} alt="arrow link" className="w-15 h-15 absolute right-2 bottom-2"/>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <p className="text-secondary text-xl animated-underline cursor-pointer w-fit" style={{fontWeight: "600"}}>{project.name}</p>
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