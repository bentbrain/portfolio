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

      <div>
        <ContentWrap>
          {/* 
        // @ts-ignore */}
          <Projects featured />
        </ContentWrap>
      </div>

      <ContentWrap>
        <ContactForm />
      </ContentWrap>
    </main>
  );
}
