import Link from "next/link";

export default function Header () {
    return (
        <>
        <header className="header">
            <ul>
                <li><Link href="/contacts">Contact</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/">Home</Link></li>
            </ul>
        </header>
        </>
    )
}