import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "./fonts/Raleway";
import { NewYork } from "./fonts/newyork";
import LenisScroll from "./components/LenisScroll";



// import Grid from "./components/grid/Grid";


export const metadata: Metadata = {
  title: "Yassydotme portfolio",
  description: "Frontend developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>

      <body
        className={`${Raleway.className} ${NewYork.variable} bg-[var(--background-black)]  text-white antialiased `}
        suppressHydrationWarning
      >
        <LenisScroll>
     
            <main>{children}</main>
        
        </LenisScroll>
      </body>
    </html>
  );
}
