"use client"
import { useEffect, useState, useRef } from "react";
import "@/app/page-css/about.css"

import Nav from "@/components/nav";
import FooterDark from "@/components/footer-dark"
import Image from "next/image";

import akiraSlide from "public/pages/about/akira-slide.png"
import about from "public/pages/about/aboutme.png"
import meChar from "public/pages/home/burnhead-temp.png"
import meSpin from "public/pages/about/man-temp.png"

import bootstrap from "public/pages/about/skills/stack/bootstrap.png"
import css from "public/pages/about/skills/stack/css.png"
import devops from "public/pages/about/skills/stack/devops.png"
import figma from "public/pages/about/skills/stack/figma.png"
import html from "public/pages/about/skills/stack/html.png"
import js from "public/pages/about/skills/stack/js.png"
import laravel from "public/pages/about/skills/stack/laravel.png"
import php from "public/pages/about/skills/stack/php.png"
import react from "public/pages/about/skills/stack/react.png"
import sql from "public/pages/about/skills/stack/sql.png"
import tailwind from "public/pages/about/skills/stack/tailwind.png"
import wp from "public/pages/about/skills/stack/wp.png"

import davinci from "public/pages/about/skills/other/davinci.png"
import digital from "public/pages/about/skills/other/digital.png"
import fl from "public/pages/about/skills/other/fl.png"
import traditional from "public/pages/about/skills/other/traditional.png"

export default function AboutPage() {
    // banner animation
    const [shouldAnimate, setShouldAnimate] = useState(false)

    const stack = [
        {name: "HTML", src: html},
        {name: "CSS", src: css},
        {name: "JavaScript", src: js},
        {name: "PHP", src: php},
        {name: "Laravel", src: laravel},
        {name: "REACT", src: react},
        {name: "WordPress", src: wp},
        {name: "MySQL", src: sql},
        {name: "Bootstrap", src: bootstrap},
        {name: "Tailwind", src: tailwind},
        {name: "Figma", src: figma},
        {name: "DevOps", src: devops},
    ]
    const other = [
        {name: "Davinci resolve", src: davinci},
        {name: "FL Studio", src: fl},
        {name: "Digital art / design", src: digital},
        {name: "Traditional art", src: traditional},
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

    return (
        <div className="flex flex-col bg-primary font-sans">
            <Nav/>

            <main>
                <section className="flex flex-col items-center justify-center mt-42 mb-56 relative">
                    <Image src={about} alt="About me" className="relative"/>
                    <Image
                        src={akiraSlide} 
                        alt="Akira slide"
                        className={`${shouldAnimate ? "translate-y-[-35%]" : "translate-y-[100%]"}
                            absolute transition-transform duration-300 z-5
                        `}
                    />
                    <div className="vector"/>
                </section>

                <section className="flex flex-col gap-32 items-center bg-secondary w-full p-32">
                    <div className="flex gap-6 text-primary font-instrument-sans w-3/4">
                        <div className="w-2/3">
                            <div className="flex flex-col gap-4">
                                <h3 className="font-shrikhand text-2xl">Who am I?</h3>
                                <p className="text-md">I'm Seervs, a web developer and web designer with a passion for all things creative. 
                                    Born and raised in the Netherlands, I grew up with a passion for art. 
                                    Ever since I could remember I was sketching and drawing every chance I could get. 
                                    I would usually listen to music during those sessions, hence I find it only natural that I'd eventually make a 
                                    few of my own songs.
                                </p>
                                <p className="text-md">
                                    How I ended up doing web development and design is a different story however. 
                                    I had never heard of these two before, but when a good friend of mine told me he was going to follow a 
                                    software development course I thought, "why not? I'll check it out.". 
                                    Years later I'm about to finish my software development course, having met amazing people during that time and a 
                                    new found passion.
                                </p>
                            </div>
                        </div>
                        
                        <div className="w-1/3 h-140 bg-neutral-200">
                            <Image src={meChar} alt="Me" className="w-full h-full object-cover object-center"/>
                        </div>
                    </div>

                    <div className="flex font-instrument-sans text-primary w-3/4">
                        <Image src={meSpin} alt="spinning"/>

                        <div className="flex flex-col gap-4">
                            <h3 className="font-shrikhand text-2xl">My philosophy</h3>
                            <p className="text-md">"Quality over anything else", that's something I deeply believe in. 
                                For all my projects I want to be able to look back on them and be truly proud of the results. 
                                And not only for projects, I put the same mentality into action for my work.
                            </p>
                            <p className="text-md">
                                But purely focusing on quality may result in work and projects taking too long to complete. 
                                That's why I value efficiency on the same level as quality. Planning, time- and resource management, 
                                and many more aspects are in my eyes essential for a job well done. With efficiency you can tackle problems 
                                before they arise, which improves quality at the same time.
                            </p>
                            <p className="text-md">"Quality combined with efficiency produce the best results", that's what I believe in.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 items-center w-3/4">
                        <h3 className="font-shrikhand text-primary text-3xl">Skills</h3>

                        <hr className="p-[1px] rounded-lg bg-primary w-full"/>

                        <div className="flex flex-row justify-evenly w-full">
                            {stack.map((skill, index) => (
                                <span key={index} className="flex flex-col items-center">
                                    <Image src={skill.src} alt={skill.name}/>
                                    <p className="font-instrument-sans text-primary">{skill.name}</p>
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-row gap-6">
                            {other.map((skill, index) => (
                                <span key={index} className="flex flex-col items-center">
                                    <Image src={skill.src} alt={skill.name}/>
                                    <p className="font-instrument-sans text-primary">{skill.name}</p>
                                </span>
                            ))}
                        </div>

                        <hr className="p-[1px] rounded-lg bg-primary w-full"/>
                    </div>

                    <div className="flex flex-col w-3/4">
                        <div className="text-center">
                            <h3 className="font-shrikhand text-primary text-3xl mb-4">Experience</h3>
                            <p className="font-instrument-sans text-primary">
                                Besides my work experience, which usually have clear start- and end dates, I've also picked up a few projects, 
                                both for clients and personal which helped me improve on my skills. These projects include art commissions; 
                                songs; fashion, where I designed and made clothing pieces; and coding, building tons of applications and websites.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <FooterDark/>
        </div>
    )
}