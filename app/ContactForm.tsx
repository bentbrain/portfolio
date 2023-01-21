"use client";

import { useState } from "react";

const fetchURL = process.env.FETCH_URL;

function ContactForm() {
  const [name, setName] = useState("");
  const [pending, setPending] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [verified, setVerified] = useState(false);

  const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setPending(true);
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!(field as HTMLInputElement).name) return;
      (formData as any)[(field as HTMLInputElement).name] = (
        field as HTMLInputElement
      ).value;
    });
    const res = await fetch(`/api/mailpretty`, {
      method: "post",
      body: JSON.stringify(formData),
    });

    if (res.status == 200) {
      setPending(false);
      setFormSubmitted(true);
    }
  };

  const handleVerify = (r: any) => {
    setVerified(true);
  };

  return !formSubmitted && !pending ? (
    <>
      <h2 className=" text-3xl sm:text-5xl font-bold text-stone-600">
        Contact
      </h2>
      <form
        className="flex flex-col gap-2 py-4"
        onSubmit={(e) => HandleSubmit(e)}
      >
        <label
          className="flex flex-col gap-1 font-medium text-stone-400"
          htmlFor="name"
        >
          Name:
          <input
            required
            className="rounded p-2 text-stone-800 max-w-[45ch]  border border-lime-400"
            name="name"
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label
          className="flex flex-col gap-1 font-medium text-stone-400 "
          htmlFor="email"
        >
          Email:
          <input
            required
            className="rounded p-2 text-stone-800 max-w-[45ch] border border-lime-400"
            name="email"
            id="email"
            type="email"
          />
        </label>
        <label
          className="flex flex-col gap-1 font-medium text-stone-400"
          htmlFor="message"
        >
          Message:
          <textarea
            required
            className="rounded p-2 text-stone-800  border border-lime-400 "
            name="message"
            id="message"
          />
        </label>
        <button className="rounded-full bg-lime-200 text-lime-600 px-4 py-1 my-2 font-bold self-end">
          Submit
        </button>
      </form>
    </>
  ) : pending ? (
    <>
      <h2 className=" text-3xl sm:text-5xl font-bold text-stone-600">
        Contact
      </h2>
      <p>Submitting form...</p>
    </>
  ) : (
    <>
      <h2 className=" text-3xl sm:text-5xl font-bold text-stone-600">
        Contact
      </h2>
      <p>
        Thanks for reaching out {name}. I'll get back to you as soon as
        possible.
      </p>
    </>
  );
}

export default ContactForm;
