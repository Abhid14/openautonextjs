import React from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    fetch("https://wgumwdvxesnsfwcurpwh.supabase.co/rest/v1/Subscribe Ticket", {
      body: `{ "emailID": "${data.email}", "name": "${data.name}" }`,
      headers: {
        Apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndndW13ZHZ4ZXNuc2Z3Y3VycHdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ3MDY0ODQsImV4cCI6MTk3MDI4MjQ4NH0.U3362Lir0EMu52ISJ-sL0py1onKwK1aLtav2y0qq2I8",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndndW13ZHZ4ZXNuc2Z3Y3VycHdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ3MDY0ODQsImV4cCI6MTk3MDI4MjQ4NH0.U3362Lir0EMu52ISJ-sL0py1onKwK1aLtav2y0qq2I8",
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      method: "POST",
    })
      .then(
        (document.getElementById("contact-text").innerText = "Details Sent ✅")
      )
      .catch((error) =>
        alert("Please enter proper details before submitting!")
      );
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex mt-4 flex-col gap-5 font-thin lg:items-start lg:w-[65%] w-[100%]"
    >
      <input
        {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })}
        required
        type="text"
        name="name"
        className="w-full rounded-3xl border-2 bg-transparent py-2 pl-4"
        placeholder="Enter Your Name"
      />
      {errors.name?.type === "required" && "Name is required"}
      <input
        type="email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        required
        name="email"
        className="w-full rounded-3xl bg-transparent border-2 py-2 pl-4"
        placeholder="Enter Your Mail"
      />
      {errors.email && "Please enter a valid email ID"}
      <button
        className="w-full rounded-3xl border-2 py-2 hover:bg-[#7e0fe1] hover:border-[#7e0fe1]"
        id="contact-text"
        type="Submit"
      >
        Submit
      </button>
    </form>
  );
}
