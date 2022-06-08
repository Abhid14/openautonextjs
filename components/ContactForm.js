import React from "react";
import { useForm } from "react-hook-form";
export default function ContactForm() {
    return (
        <form className="flex mt-4 flex-col gap-5 font-thin lg:items-start lg:w-[65%]">
            <input className="w-full rounded-3xl outline outline-1 py-2 pl-4 bg-primary " type="text" name="name" placeholder="Enter Your Name" />
            <input className="w-full rounded-3xl outline outline-1 py-2 pl-4 bg-primary " type="text" name="email" placeholder="Enter Your Mail" />
            <input className="w-full rounded-3xl outline outline-1 py-2 bg-primary " type="Submit" />
        </form>
    )
}