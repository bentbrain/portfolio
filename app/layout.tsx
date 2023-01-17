import "./globals.css";
import { Figtree } from "@next/font/google";
import Header from "./Header";

const figtree = Figtree({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body
        className={`${figtree.className}  bg-gradient-to-b pb-10	 min-h-[100dvh] from-stone-100 to-lime-50 text-stone-800`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
