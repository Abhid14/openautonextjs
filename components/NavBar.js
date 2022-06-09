import Link from "next/link";
import ContactBar from '../components/ContactBar';
import DownBtn from '../components/DownBtn'
export default function NavBar() {
    return (
        <nav className="container lg:my-10 my-9 flex flex-row justify-between items-center">
            <Link href="/">
                <a>
                    <img className="lg:h-[30px] h-[25px]" src="/OALogo.png" alt="Open Auto" />
                </a>
            </Link>
            <div className="lg:flex hideMob md:flex flex-row gap-12 text-[15px]">
                <ContactBar />
                <DownBtn />
            </div>
        </nav>
    )
}