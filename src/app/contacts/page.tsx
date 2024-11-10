import Link from "next/link";

export default function Contacts() {
    return (
        <>
        <div className="contact">
            <h1>Contacts</h1>
            <ul>
                <li><span>Contact no:</span>&nbsp;+92-310-102-2145</li>
                <li><span>Email ID:</span> &nbsp;<Link href="https://zaishwaheed@gmail.com">zaishwaheed@gmail.com</Link></li>
                <li><span>Github Profile:</span>&nbsp;<Link href="https://github.com/zaishwaheed">https://github.com/zaishwaheed</Link></li>
            </ul>
        </div>
        </>
    )
}