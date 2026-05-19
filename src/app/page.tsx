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
import vector from "public/pages/home/vector.png"

export default function Home() {
    const [shouldAnimate, setShouldAnimate] = useState(false)
    const helloContentRef = useRef<HTMLDivElement>(null)
    const isVisible = useRef(false)
    const entryTop = useRef(0)

    useEffect(() => {
        if (sessionStorage.getItem("loadingFinished") === "true") {
            setShouldAnimate(true)
            return
        }

        const handleLoaderHidden = () => setShouldAnimate(true)
        window.addEventListener("loaderHidden", handleLoaderHidden)
        return () => window.removeEventListener("loaderHidden", handleLoaderHidden)
    }, [])

    useEffect(() => {
        const el = helloContentRef.current;
        if (!el) return

        const handleScroll = () => {
            if (!isVisible.current) return

            const scrollY = window.scrollY;
            const scrolled = scrollY - entryTop.current;
            const range = 400;
            const progress = Math.min(Math.max(scrolled / range, 0), 1)

            const translateX = -Math.max(-15 + (-44 * progress), -45)
            el.style.transform = `translateX(-${translateX}%)`;
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
    }, []);

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

                <section>
                    <div className="vector"/>
                </section>
            </main>

            <Footer/>
        </div>
    );
}
