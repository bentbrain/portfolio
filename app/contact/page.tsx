import Link from "next/link";
import React from "react";
import ContactForm from "../ContactForm";
import ContentWrap from "../ContentWrap";

function page() {
  return (
    <ContentWrap width={`75ch`}>
      <div className="breadcrumbs [&>*]:transition-colors [&>*:hover]:text-lime-500 mb-4 text-sm text-center text-stone-400">
        <Link href={`/`}>Home</Link> / Contact
      </div>
      <ContactForm />
    </ContentWrap>
  );
}

export default page;
