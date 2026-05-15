import Link from "next/link"
import Image from "next/image"
import "@/components/components-css/animated-underline.css"

import arrowLink from "public/arrow-link.png"
import label from "public/label.png"
import github from "public/social/github.png"
import instagram from "public/social/instagram.png"
import youtube from "public/social/youtube.png"
import linkedin from "public/social/linkedin.png"

export default function Footer() {
    return (
        <footer className="flex flex-row justify-between p-12 font-instrument-serif">
            <div className="flex flex-col">
                <h3 className="text-black text-4xl">Did you have something in mind?</h3>

                <Link href="/contact" className="flex flex-row gap-2">
                    <h1 className="text-secondary text-[25rem] leading-[85%]">Let's talk!</h1>
                    <Image src={arrowLink} alt="arrow link" className="w-30 h-30 relative left-[-20px] top-[-20px]"/>
                </Link>

                <div className="flex gap-6 font-instrument-sans">
                    <Link href="https://github.com/BleuSkell" className="flex items-center gap-2">
                        <Image src={github} alt="github logo"/>
                        <p className="hover:text-tertiary transition-all duration-200">BleuSkell</p>
                    </Link>

                    <Link href="https://instagram.com/seervska" className="flex items-center gap-2">
                        <Image src={instagram} alt="instagram logo"/>
                        <p className="hover:text-tertiary transition-all duration-200">@seervska</p>
                    </Link>

                    <Link href="https://youtube.com/@SEERVS" className="flex items-center gap-2">
                        <Image src={youtube} alt="youtube logo"/>
                        <p className="hover:text-tertiary transition-all duration-200">@SEERVS</p>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                    <h3 className="text-4xl">Explore</h3>
                    <Link href="/" className="text-2xl text-secondary animated-underline w-fit">
                        Home
                    </Link>
                    <Link href="/projects" className="text-2xl text-secondary animated-underline w-fit">
                        Projects
                    </Link>
                    <Link href="/about" className="text-2xl text-secondary animated-underline w-fit">
                        About
                    </Link>
                    <Link href="/contact" className="text-2xl text-secondary animated-underline w-fit">
                        Contact
                    </Link>
                </div>

                <Image src={label} alt="Seervs label" className="align-bottom w-full h-35"/>
            </div>
        </footer>
    )
}