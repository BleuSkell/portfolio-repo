"use client"

import React, { useState, useEffect, useRef } from "react"
import Nav from "@/components/nav"
import Footer from "@/components/footer"

import { Dot, Pause, SkipForward, SkipBack } from "lucide-react"
import Image from "next/image"
import Link from "next/link";
import "@/app/page-css/home.css"

import name from "public/pages/home/SEERVS.png"
import nameBreakCh from "public/pages/home/burnhead-temp.png"
import helloCh from "public/pages/home/character-temp.png"
import helloChHand from "public/pages/home/character-hand-temp.png"
import aboutCh from "public/pages/home/tv-head temp.png"
import albumCover from "public/pages/home/album-cover-temp.jpg"
import queue from "public/pages/home/queue.png"
import highlight from "public/pages/home/highlighted-projects.png"

import js from "public/pages/home/js.png"
import php from "public/pages/home/php.png"
import react from "public/pages/home/react.png"
import laravel from "public/pages/home/laravel.png"
import sql from "public/pages/home/sql.png"
import digital from "public/pages/home/digital.png"

export default function Home() {
    // banner animation
    const [shouldAnimate, setShouldAnimate] = useState(false)

    // small hello section animation
    const helloContentRef = useRef<HTMLDivElement>(null)
    const isVisible = useRef(false)
    const entryTop = useRef(0)

    // skills selections
    const [softSkillsVisible, setSoftSkillsVisible] = useState(true)
    const [hardSkillsVisible, setHardSkillsVisible] = useState(false)

    // highlighted projects
    const [selectedProject, setSelectedProject] = useState(0)
    const projectContainerRef = useRef<HTMLDivElement>(null)
    const itemRefs = useRef<(HTMLDivElement | null)[]>([])

    // hard skill icons
    const hardSkills = [
        {src: js, alt: "Hard skill JavaScript"},
        {src: php, alt: "Hard skill PHP"},
        {src: react, alt: "Hard skill REACT.tsx"},
        {src: laravel, alt: "Hard skill Laravel"},
        {src: sql, alt: "Hard skill MySQL"},
        {src: digital, alt: "Hard skill design, art, animation"},
    ]

    // highlighted projects
    const projects = [
        {title: "opads", thumb: albumCover, thumbAlt: "alt text", link: "/projects"},
        {title: "POM3", thumb: albumCover, thumbAlt: "alt text", link: "/projects"},
        {title: "WP plugin: LLM Toolkit", thumb: albumCover, thumbAlt: "alt text", link: "/projects"},
        {title: "Fashion design pieces", thumb: albumCover, thumbAlt: "alt text", link: "/projects"},
    ]

    // banner animation
    useEffect(() => {
        if (sessionStorage.getItem("loadingFinished") === "true") {
            setShouldAnimate(true)
            return
        }

        const handleLoaderHidden = () => setShouldAnimate(true)
        window.addEventListener("loaderHidden", handleLoaderHidden)
        return () => window.removeEventListener("loaderHidden", handleLoaderHidden)
    }, [])

    // small hello section animation
    useEffect(() => {
        const el = helloContentRef.current;
        if (!el) return

        const handleScroll = () => {
            if (!isVisible.current) return

            const scrollY = window.scrollY
            const scrolled = scrollY - entryTop.current
            const range = 400
            const progress = Math.min(Math.max(scrolled / range, 0), 1)

            const translateX = -Math.max(-15 + (-44 * progress), -45)
            el.style.transform = `translateX(-${translateX}%)`
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        isVisible.current = true
                        entryTop.current = window.scrollY
                    }, 300)
                }
            })
        }, {})

        observer.observe(el)
        window.addEventListener("scroll", handleScroll)

        return () => {
            observer.disconnect()
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    useEffect(() => {
        const container = projectContainerRef.current
        const activeItem = itemRefs.current[selectedProject]
        if (!container || !activeItem) return

        const windowCenter = window.innerWidth / 2
        const itemCenter = activeItem.offsetLeft + activeItem.offsetWidth / 2
        container.style.transform = `translateX(${windowCenter - itemCenter}px)`
    }, [selectedProject])
    useEffect(() => {
        const handleResize = () => {
            const container = projectContainerRef.current
            const activeItem = itemRefs.current[selectedProject]
            if (!container || !activeItem) return

            const windowCenter = window.innerWidth / 2
            const itemCenter = activeItem.offsetLeft + activeItem.offsetWidth / 2
            container.style.transform = `translateX(${windowCenter - itemCenter}px)`
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [selectedProject])

    // skills section
    const showSoft = () => {
        setHardSkillsVisible(false)
        setSoftSkillsVisible(true)
    }
    const showHard = () => {
        setSoftSkillsVisible(false)
        setHardSkillsVisible(true)
    }

    return (
        <div className="flex flex-col bg-primary font-sans">
            <Nav/>

            <main>
                <section className={`${shouldAnimate ? "translate-x-0" : "translate-x-[-100%]"}
                    flex items-center h-screen overflow-hidden transition-transform duration-300
                `}>
                    <Image src={name} alt="SEERVS"/>
                    <Image src={nameBreakCh} alt="name break character"/>
                </section>

                <section className="flex justify-end relative px-26">
                    <div className="flex items-center absolute" ref={helloContentRef} style={{ transform: "translateX(-15%)" }}>
                        <div className="flex flex-col gap-2 text-right bg-primary py-38 pr-12">
                            <h3 className="font-shrikhand text-secondary text-4xl">Hello, kipije kabare?</h3>
                            <p className="font-instrument-serif text-xl">I’m Seervs, I’m a third year Software Development student based in the Netherlands. I’m self-taught in both art and the music that I make.</p>
                            <p className="font-instrument-serif text-xl">I love art, music, history, and a bit of fashion. I often try to combine all of my interests in one to create something that I like.</p>
                        </div>

                        <Image src={helloChHand} alt=""/>
                    </div>

                    <Image src={helloCh} alt=""/>
                </section>

                <section className="flex flex-col overflow-hidden">
                    <div className="vector-slope"/>
                    <div className="flex flex-row justify-evenly bg-secondary pt-42 pb-52 relative">
                        <div className="flex flex-col gap-4 bg-texture-op8 p-4 rounded-lg w-fit drop-shadow-gray-900 drop-shadow-md">
                            <Image src={albumCover} alt="skills section album cover" className="w-[200px] rounded-lg mx-8"/>

                            <div>
                                <h4 className="font-shrikhand text-primary text-2xl">Skills</h4>
                                <p className="font-inter text-primary-muted">SEERVS</p>
                                <div className="flex flex-row items-center font-inter text-primary-muted text-xs">
                                    <p>Album</p>
                                    <Dot/>
                                    <p>4 Jan</p>
                                    <Dot/>
                                    <p>Newest release</p>
                                </div>
                            </div>

                            <Pause className="text-primary bg-secondary w-10 h-10 rounded-full p-2"/>

                            <div className="flex flex-col gap-2 font-inter">
                                <div>
                                    <button onClick={showSoft} className={`${softSkillsVisible ? "text-tertiary" : "text-primary"} cursor-pointer hover:text-tertiary transition-all duration-200`}>Soft skills</button>
                                    <p className="text-primary-muted text-sm">SEERVS</p>
                                </div>

                                <div>
                                    <button onClick={showHard} className={`${hardSkillsVisible ? "text-tertiary" : "text-primary"} cursor-pointer hover:text-tertiary transition-all duration-200`}>Hard skills</button>
                                    <p className="text-primary-muted text-sm">SEERVS</p>
                                </div>
                            </div>

                            <div className="flex flex-row items-center font-inter text-primary text-xs">
                                <p>2 categories</p>
                                <Dot/>
                                <p>5 min.</p>
                            </div>
                        </div>

                        <Image src={aboutCh} alt="character for small about me" className="absolute top-[400px] left-[410px] w-[500px]"/>

                        <div className="flex flex-col gap-4 w-1/3 relative top-[80px]">
                            <div className={`${softSkillsVisible ? "flex" : "hidden"} flex-row bg-texture-op8 h-fit rounded-lg drop-shadow-gray-900 drop-shadow-md`}>
                                <div className="flex flex-col gap-4 bg-texture-op6 p-4 w-2/3">
                                    <div className="flex flex-col">
                                        <Image src={albumCover} alt="album cover" className="w-[150px] rounded-lg mb-2"/>
                                        <h5 className="font-shrikhand text-primary text-xl">Soft skills</h5>
                                        <p className="font-inter text-primary text-sm">SEERVS</p>
                                    </div>

                                    <div className="flex flex-row justify-between">
                                        <button onClick={showHard} className="cursor-pointer">
                                            <SkipBack className="text-primary w-10 h-10"/>
                                        </button>
                                        <Pause className="text-primary bg-secondary w-10 h-10 rounded-full p-2"/>
                                        <button onClick={showHard} className="cursor-pointer">
                                            <SkipForward className="text-primary w-10 h-10"/>
                                        </button>
                                    </div>

                                    <div className="font-inter text-primary">
                                        <div className="flex flex-row gap-2">
                                            <Image src={queue} alt="queue"/>
                                            <p>Next in queue</p>
                                        </div>
                                        <p className="text-primary-muted">SEERVS</p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 p-6 text-primary">
                                    <div>
                                        <h5 className="font-instrument-serif text-2xl">Creative set</h5>
                                        <p className="font-instrument-sans text-sm tracking-wide">I'm a creative set person who can come up with creative solutions and ideas.</p>
                                    </div>

                                    <div>
                                        <h5 className="font-instrument-serif text-2xl">Eager to learn</h5>
                                        <p className="font-instrument-sans text-sm tracking-wide">I'm eager to learn all sorts of new things: skills, techniques, knowledge; if it helps me to become better at my work or better overall I'm willing to learn!</p>
                                    </div>

                                    <div>
                                        <h5 className="font-instrument-serif text-2xl">Patient</h5>
                                        <p className="font-instrument-sans text-sm tracking-wide">I see myself as a quite patient person. Why rush something when it's better to be thoughtful about it? Or why become restless over something I can't control?</p>
                                    </div>

                                    <div>
                                        <h5 className="font-instrument-serif text-2xl">Independent and a team player</h5>
                                        <p className="font-instrument-sans text-sm tracking-wide">I can work well independently, but I'm also able to work well in a team. I value clear communication and planning over rushing ahead.</p>
                                    </div>

                                    <div className="flex flex-row items-center relative">
                                        <div className="bg-secondary p-2 rounded-full absolute left-2/3"/>
                                        <hr className="w-2/3 border-tertiary rounded-lg"/>
                                        <hr className="w-1/3 border-primary rounded-lg"/>
                                    </div>
                                </div>
                            </div>

                            <div className={`${hardSkillsVisible ? "flex" : "hidden"} flex-row bg-texture-op8 h-fit rounded-lg drop-shadow-gray-900 drop-shadow-md`}>
                                <div className="flex flex-col gap-4 bg-texture-op6 p-4 w-1/3">
                                    <div className="flex flex-col">
                                        <Image src={albumCover} alt="album cover" className="w-[150px] rounded-lg mb-2"/>
                                        <h5 className="font-shrikhand text-primary text-xl">Hard skills</h5>
                                        <p className="font-inter text-primary text-sm">SEERVS</p>
                                    </div>

                                    <div className="flex flex-row justify-between">
                                        <button onClick={showSoft} className="cursor-pointer">
                                            <SkipBack className="text-primary w-10 h-10"/>
                                        </button>
                                        <Pause className="text-primary bg-secondary w-10 h-10 rounded-full p-2"/>
                                        <button onClick={showSoft} className="cursor-pointer">
                                            <SkipForward className="text-primary w-10 h-10"/>
                                        </button>
                                    </div>

                                    <div className="font-inter text-primary">
                                        <div className="flex flex-row gap-2">
                                            <Image src={queue} alt="queue"/>
                                            <p>Next in queue</p>
                                        </div>
                                        <p className="text-primary-muted">SEERVS</p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 p-6 text-primary w-2/3">
                                    {hardSkills.map((skill, index) => (
                                        <Image src={skill.src} alt={skill.alt} key={index} className="w-[100px] h-10 rounded-lg mb-2"/>
                                    ))}

                                    <div className="flex flex-row items-center relative">
                                        <div className="bg-secondary p-2 rounded-full absolute left-2/3"/>
                                        <hr className="w-2/3 border-tertiary rounded-lg"/>
                                        <hr className="w-1/3 border-primary rounded-lg"/>
                                    </div>
                                </div>
                            </div>

                            <Link href="/about">
                                <button className="border border-primary rounded-full py-2 px-4 text-primary font-instrument-serif text-lg
                                    cursor-pointer hover:border-primary-muted hover:text-primary-muted transition-all duration-300
                                ">
                                    <span className="animated-underline">Read more about me! →</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="vector-trapezoid"/>
                    <Image src={highlight} alt="highlighted projects" className="relative bottom-[50px] rotate-[-.04rad]"/>
                </section>

                <section className="flex flex-col items-center relative gap-4 mt-32 mb-56 pb-12 overflow-hidden">
                    <div
                        ref={projectContainerRef}
                        className="flex flex-row items-center text-primary font-instrument-sans relative transition-transform duration-300 ease-in-out h-full"
                    >
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                ref={(el) => {itemRefs.current[index] = el}}
                                className={`
                                    ${index === 0 ? "project-start" : index === projects.length - 1 ? "project-end" : "project-middle"}
                                    ${index === selectedProject ? "active" : ""}
                                    cursor-pointer transition-all duration-300 ease-in-out
                                    flex flex-col items-center
                                `}
                                onClick={() => setSelectedProject(index)}
                            >
                                <Image src={project.thumb} alt={project.thumbAlt} className="w-[200px] h-[200px] mb-2"/>
                                <Link href={project.link}>{project.title}</Link>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-row gap-4 absolute bottom-0">
                        {projects.map((_, index) => (
                            <div
                                key={index}
                                className={`
                                    ${index === selectedProject ? "bg-tertiary" : "bg-secondary"}
                                    p-2 w-[100px] rounded-lg cursor-pointer hover:bg-tertiary transition-all duration-300
                                `}
                                onClick={() => setSelectedProject(index)}
                            />
                        ))}
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    );
}
