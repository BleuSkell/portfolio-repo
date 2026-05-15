import Link from "next/link";

export default function Nav() {
    return (
        <nav className="flex gap-4 text-tertiary">
            <Link
                href="/"
                className=""
            >
                Home
            </Link>

            <Link
                href="/projects"
                className=""
            >
                Projects
            </Link>

            <Link
                href="/about"
                className=""
            >
                About
            </Link>

            <Link
                href="/contact"
                className=""
            >
                Contact
            </Link>
        </nav>
    )
}