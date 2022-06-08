import Link from "next/link";
import ContactBar from '../components/ContactBar';
import DownBtn from '../components/DownBtn'
export default function NavBar() {
    return (
        <nav className="container lg:my-10 flex flex-row justify-between items-center">
            <Link href="/">
                <a>
                    <img className="h-[30px]" src="/OALogo.png" alt="Open Auto" />
                </a>
            </Link>
            <div className="lg:flex md:flex flex-row hidden gap-12 text-[15px]">
                <ContactBar />
                <DownBtn />
            </div>
        </nav>
    )
}