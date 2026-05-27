import Nav from "@/components/nav"
import Footer from "@/components/footer"
import "@/components/components-css/animated-underline.css"

import Link from "next/link";
import Image from "next/image";

import email from "public/pages/contact/email.png"
import instagram from "public/pages/contact/instagram.png"
import char from "public/pages/contact/temp-char.png"
import send from "public/pages/contact/send.png"

export default function ContactPage() {
    return (
        <div className="flex flex-col bg-primary font-sans">
            <Nav/>

            <main>
                <section className="flex flex-row justify-center gap-8 py-56">
                    <div className="font-instrument-sans w-1/3">
                        <div className="flex flex-col gap-4">
                            <h3 className="font-shrikhand text-secondary text-3xl">Contact</h3>
                            <p className="text-lg">Have something in mind you're excited about? Let's talk! Wether if it's about code, art, fashion, or simply just have a question or a nice chat, don't be afraid to drop a message!</p>
                            <p className="text-lg">You can also contact me through Direct Messages on Instagram!</p>

                            <Link href="https://instagram.com/seervska" target="_blank" className="flex items-center gap-2 text-lg font-medium hover:text-secondary transition-all duration-200 w-fit">
                                <Image src={instagram} alt="instagram logo" className="w-7 h-7"/>
                                <span className="animated-underline w-fit">DM me!</span>
                            </Link>

                            <Link href="/" target="_blank" className="flex items-center gap-2 text-lg font-medium hover:text-secondary transition-all duration-200 w-fit">
                                <Image src={email} alt="email icon" className="w-7 h-7"/>
                                <span className="animated-underline w-fit">Send me an E-mail!</span>
                            </Link>
                        </div>

                        <div className="flex items-end">
                            <Image src={char} alt="Character"/>
                            <p className="font-instrument-serif text-2xl">Thx for stopping by!</p>
                        </div>
                    </div>

                    <form action="/" method="POST" className="flex flex-col gap-2 bg-secondary p-4 rounded-lg text-primary w-1/3 drop-shadow-xl">
                        <label htmlFor="fullname" className="text-instrument-sans">Full name:</label>
                        <input type="text" name="fullname" id="fullname" className="bg-primary p-2 rounded-md"/>

                        <label htmlFor="email" className="text-instrument-sans">E-mail:</label>
                        <input type="email" name="email" id="email" className="bg-primary p-2 rounded-md"/>

                        <label htmlFor="message" className="text-instrument-sans">Message:</label>
                        <textarea name="message" id="message" className="bg-primary p-2 rounded-md h-[100%]"></textarea>

                        <button type="submit" className="bg-primary w-fit py-2 px-4 rounded-md flex gap-2 cursor-pointer hover:bg-primary-muted transition-all duration-200">
                            <Image src={send} alt="paper airplane"/>
                            <span className="text-secondary font-medium">Submit</span>
                        </button>
                    </form>
                </section>
            </main>

            <Footer/>
        </div>
    )
}