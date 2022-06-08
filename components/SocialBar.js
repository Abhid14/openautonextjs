import Link from "next/link";
import { Icon } from '@iconify/react';
export default function SocialBar() {
    return (
        <div className="flex flex-row gap-4 items-center">
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
    )
}