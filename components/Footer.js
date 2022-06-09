import Link from "next/link";
import ContactBar from "../components/ContactBar";
import SocialBar from "./SocialBar";
import { Icon } from '@iconify/react';
export default function Footer() {
    return (
        <section className="container flex flex-col items-center py-10">
            <hr />
            <div className="my-10 w-full lg:gap-0 gap-6 flex lg:flex-row flex-col justify-center lg:justify-between items-center">
                <Link href="/">
                    <a>
                        <img className="lg:h-[30px] h-[25px]" src="/OALogo.png" alt="Open Auto" />
                    </a>
                </Link>
                <ContactBar />
            </div>
            <div className="flex lg:flex-row flex-col w-full justify-center lg:justify-between items-center">
                <Link href="/">
                    <p className="font-thin lg:text-[16px] text-[14px]">
                        &copy; {new Date().getFullYear()} Open Auto. All rights reserved.
                    </p>
                </Link>
                <div className="lg:flex md:flex flex-row hidden gap-12 text-[15px]">
                    <SocialBar />
                </div>
                <div className="flex flex-row text-[12px] my-4 w-full justify-between items-center lg:hidden">
                    <Link href="/privacy-policy">
                        <a>
                            Privacy policy
                        </a>
                    </Link>
                    <Link href="/terms">
                        <a>
                            Terms of use
                        </a>
                    </Link>
                    <Link href="/cookie-policy">
                        <a>
                            Cookie policy
                        </a>
                    </Link>
                </div>
                <div className="flex flex-row my-4 w-full justify-between items-center lg:hidden">
                    <Link href="https://www.facebook.com">
                        <a>
                            <Icon height="25" icon="eva:facebook-fill" />
                        </a>
                    </Link>
                    <Link href="https://www.twitter.com">
                        <a>
                            <Icon height="25" icon="eva:twitter-fill" />
                        </a>
                    </Link>
                    <Link href="https://www.youtube.com">
                        <a>
                            <Icon height="25" icon="ant-design:youtube-filled" />
                        </a>
                    </Link>
                    <Link href="https://www.linkedin.com">
                        <a>
                            <Icon height="25" icon="akar-icons:linkedin-v1-fill" />
                        </a>
                    </Link>
                    <Link href="https://www.instagram.com">
                        <a>
                            <Icon height="25" icon="akar-icons:instagram-fill" />
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    )
}