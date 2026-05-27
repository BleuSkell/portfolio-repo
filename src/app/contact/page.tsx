import Nav from "@/components/nav"
import Footer from "@/components/footer"

import Link from "next/link";
import Image from "next/image";

import email from "public/pages/contact/email.png"
import instagram from "public/pages/contact/instagram.png"

export default function ContactPage() {
    return (
        <div className="flex flex-col bg-primary font-sans">
            <Nav/>

            <main>
                <section className="flex flex-row justify-evenly">
                    <div className="font-instrument-sans w-1/3">
                        <h3 className="font-shrikhand text-secondary">Contact</h3>
                        <p>Have something in mind you're excited about? Let's talk! Wether if it's about code, art, fashion, or simply just have a question or a nice chat, don't be afraid to drop a message!</p>
                        <p>You can also contact me through Direct Messages on Instagram!</p>
                        <Link href="https://instagram.com/seervska" target="_blank" className="flex items-center gap-2">
                            <Image src={instagram} alt="instagram logo" className="w-7 h-7"/>
                            DM me!
                        </Link>
                        <Link href="/" target="_blank" className="flex items-center gap-2">
                            <Image src={email} alt="email icon" className="w-7 h-7"/>
                            Send me an E-mail!
                        </Link>
                    </div>

                    <form action="/" method="POST" className="flex flex-col bg-secondary text-primary w-1/3">
                        <label htmlFor="fullname" className="text-instrument-sans">Full name:</label>
                        <input type="text" name="fullname" id="fullname" className="bg-primary-muted p-2"/>

                        <label htmlFor="email" className="text-instrument-sans">E-mail:</label>
                        <input type="email" name="email" id="email" className="bg-primary-muted p-2"/>

                        <label htmlFor="message" className="text-instrument-sans">Message:</label>
                        <textarea name="message" id="message" className="bg-primary-muted p-2"></textarea>

                        <button type="submit">Send</button>
                    </form>
                </section>
            </main>

            <Footer/>
        </div>
    )
}