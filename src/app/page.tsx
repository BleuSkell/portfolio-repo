"use client"

import { useState, useEffect, useRef } from "react"
import Nav from "@/components/nav"
import Footer from "@/components/footer"
import Image from "next/image"
import "@/app/page-css/home.css"

import name from "public/pages/home/SEERVS.png"
import nameBreakCh from "public/pages/home/burnhead-temp.png"
import helloCh from "public/pages/home/character-temp.png"
import helloChHand from "public/pages/home/character-hand-temp.png"

export default function Home() {
    const [shouldAnimate, setShouldAnimate] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        if (sessionStorage.getItem("loadingFinished") === "true") {
            setShouldAnimate(true)
            return
        }

        const handleLoaderHidden = () => setShouldAnimate(true)
        window.addEventListener("loaderHidden", handleLoaderHidden)
        return () => window.removeEventListener("loaderHidden", handleLoaderHidden)
    }, [])

    const handleScroll = (e) => {
        const scrollTop = e.target.scrollTop
        setScrollPosition(scrollTop)
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

                <section className="flex justify-end relative p-12">
                    <div className={`flex items-center absolute right-[29%]`}>
                        <div className="flex flex-col gap-2 text-right bg-primary py-38 pr-12">
                            <h3 className="font-shrikhand text-secondary text-4xl">Hello, kipije kabare?</h3>
                            <p className="font-instrument-serif text-xl">I’m Seervs, I’m a third year Software Development student based in the Netherlands. I’m self-taught in both art and the music that I make.</p>
                            <p className="font-instrument-serif text-xl">I love art, music, history, and a bit of fashion. I often try to combine all of my interests in one to create something that I like.</p>
                        </div>

                        <Image src={helloChHand} alt=""/>
                    </div>

                    <Image src={helloCh} alt=""/>
                </section>

                <section>

                </section>
            </main>

            <Footer/>
        </div>
    );
}
