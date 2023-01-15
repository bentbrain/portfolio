import Image from "next/image";
import ContentWrap from "./ContentWrap";
import Splash from "./Splash";
import Projects from "./Projects";
import ContactForm from "./ContactForm";

export default function Home() {
  return (
    <main>
      <ContentWrap>
        <Splash />
      </ContentWrap>

      <ContentWrap>
        {/* 
// @ts-ignore */}
        <Projects />
      </ContentWrap>

      <ContentWrap>
        <ContactForm />
      </ContentWrap>
    </main>
  );
}
