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

      <div className="bg-lime-50 pt-10 pb-6 mb-10 text-lime-800">
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
