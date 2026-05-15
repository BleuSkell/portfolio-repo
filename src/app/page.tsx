import Nav from "@/components/nav"
import Footer from "@/components/footer"

export default function Home() {
    return (
        <div className="flex flex-col bg-primary font-sans">
            <Nav/>

            <main></main>

            <Footer/>
        </div>
    );
}
