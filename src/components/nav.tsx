"use client"
import { useState } from "react";
import { Menu } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import "@/components/components-css/animated-underline.css";
import "@/components/components-css/nav.css";

import star from "public/star.png";

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isStarOpen, setIsStarOpen] = useState(false);
    const [isLineDown, setIsLineDown] = useState(false);
    const [isLineUp, setIsLineUp] = useState(false);
    const [isSlideSide, setIsSlideSide] = useState(false);
    const [isSlideSideReverse, setIsSlideSideReverse] = useState(false);


    const handleMenuToggle = () => {
        if (!isMenuOpen) {
            setIsMenuOpen(true);
            setIsStarOpen(true);

            setTimeout(() => {
                setIsLineDown(true);

                setTimeout(() => {
                    setIsSlideSide(true);
                }, 300)
            }, 200)
        } else {
            setIsSlideSide(false);

            setTimeout(() => {
                setIsLineDown(false);
                setIsStarOpen(false);

                setTimeout(() => {
                    setIsMenuOpen(false);
                }, 200)
            }, 300)
        }
    }

    return (
        <>
            <nav className="lg:hidden flex flex-col items-center fixed t-0 l-0 p-2">
                <button onClick={handleMenuToggle} className="cursor-pointer flex gap-2 items-center pb-2 text-tertiary font-instrument-serif text-xl">
                    { isMenuOpen ? <Image src={star} alt="star" className={`${isStarOpen ? "mobile-star-open" : "mobile-star-close"} w-10 h-10`}/> : <Menu className="mobile-menu w-10 h-10"/> }
                    Menu
                </button>

                <div className={`${isMenuOpen ? "flex" : "hidden"} flex-row gap-2 ml-[14px]`}>
                    <hr className={`${isLineDown ? "animate-line-down" : "opacity-0"} w-[2px] h-[160px] bg-tertiary`}/>

                    <div className={`${isSlideSide ? "slide-sideways" : "opacity-0"} flex flex-col gap-4 text-tertiary font-instrument-serif text-xl`}>
                        <Link
                            href="/"
                            className="animated-underline w-fit"
                        >
                            Home
                        </Link>

                        <Link
                            href="/projects"
                            className="animated-underline w-fit"
                        >
                            Projects
                        </Link>

                        <Link
                            href="/about"
                            className="animated-underline w-fit"
                        >
                            About
                        </Link>

                        <Link
                            href="/contact"
                            className="animated-underline w-fit"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>

            <nav className="hidden lg:flex flex-col fixed t-0 l-0 items-center
                text-tertiary font-instrument-serif text-2xl
                w-full p-6
            ">
                <div>
                    <div className="flex flex-row gap-12">
                        <Link
                            href="/"
                            className="animated-underline"
                        >
                            Home
                        </Link>

                        <Link
                            href="/projects"
                            className="animated-underline"
                        >
                            Projects
                        </Link>

                        <Link
                            href="/about"
                            className="animated-underline"
                        >
                            About
                        </Link>

                        <Link
                            href="/contact"
                            className="animated-underline"
                        >
                            Contact
                        </Link>
                    </div>

                    <div className="flex flex-row items-center gap-4 w-full relative top-[-20px] pointer-events-none">
                        <hr className="w-full"/>

                        <Image src={star} alt="navigation star" className="w-12 h-12"/>

                        <hr className="w-full"/>
                    </div>
                </div>
            </nav>
        </>
    )
}