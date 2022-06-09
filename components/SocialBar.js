import Link from "next/link";
import { Icon } from "@iconify/react";
import socialLinks from "../data/SocialLinks";
export default function SocialBar() {
  return (
    <div className="flex flex-row gap-4 items-center">
      {socialLinks.map((socialLinks, index) => (
        <Link href={socialLinks.link} key={index}>
          <a>
            <Icon height="25" icon={socialLinks.icon} />
          </a>
        </Link>
      ))}
    </div>
  );
}
