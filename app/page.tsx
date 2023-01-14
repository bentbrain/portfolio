import Image from "next/image";
import ContentWrap from "./ContentWrap";
import Splash from "./Splash";
import Projects from "./Projects";

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
    </main>
  );
}
