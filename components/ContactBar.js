import Link from "next/link";
import { Icon } from '@iconify/react';
export default function ContactBar() {
    return (
        <div className="flex flex-row items-center gap-12">
            <Link href="tel:+7695864558">

                <a className="flex flex-row gap-1 items-center">
                    <Icon height="18" icon="ci:phone" />
                    <span>+769 586 4558</span>
                </a>
            </Link>
            <Link href="mailto:service@openauto.ca">

                <a className="flex flex-row gap-1 items-center">
                    <Icon height="18" icon="fluent:mail-16-filled" />
                    <span>service@openauto.ca</span>
                </a>
            </Link>
        </div>
    )
}