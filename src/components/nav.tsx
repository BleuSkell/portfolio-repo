import Image from "next/image"
import Link from "next/link"
import "@/components/components-css/animated-underline.css"

import star from "public/star.png"

export default function Nav() {
    return (
        <nav className="flex flex-col fixed t-0 l-0 items-center
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
    )
}