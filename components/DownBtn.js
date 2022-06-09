import Link from "next/link";
export default function DownBtn() {
  return (
    <div className="outline flex items-center justify-center outline-white hover:bg-white hover:text-primary rounded-3xl outline-2">
      <Link href="/">
        <a className="flex items-center">
          <span className="lg:px-5 py-2">Download the mobile app</span>
        </a>
      </Link>
    </div>
  );
}
