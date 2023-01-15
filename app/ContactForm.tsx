"use client";

import React from "react";

const fetchURL = process.env.FETCH_URL;

const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = {};
  Array.from(e.currentTarget.elements).forEach((field) => {
    if (!(field as HTMLInputElement).name) return;
    (formData as any)[(field as HTMLInputElement).name] = (
      field as HTMLInputElement
    ).value;
  });
  const res = await fetch(`/api/mail`, {
    method: "post",
    body: JSON.stringify(formData),
  });

  console.log(res);
};

function ContactForm() {
  return (
    <form className="flex flex-col gap-2" onSubmit={(e) => HandleSubmit(e)}>
      <label
        className="flex flex-col gap-1 font-medium text-stone-400"
        htmlFor="name"
      >
        Name:
        <input
          required
          className="rounded p-2 text-stone-800"
          name="name"
          id="name"
          type="text"
        />
      </label>
      <label
        className="flex flex-col gap-1 font-medium text-stone-400"
        htmlFor="email"
      >
        Email:
        <input
          required
          className="rounded p-2 text-stone-800"
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
          className="rounded p-2 text-stone-800"
          name="message"
          id="message"
        />
      </label>
      <button className="rounded-full bg-lime-200 text-lime-600 px-4 py-1 my-2 font-bold self-end">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
