import Link from "next/link";

export default function About() {
    return (
        <>
        <div className="about">
            <ul>
                <li><Link href="/experience">Experience and Education</Link></li>
                <li><Link href="/skills">Skills</Link></li>
            </ul>
        </div>
        </>
    )
}