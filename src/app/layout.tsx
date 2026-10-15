import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Raleway } from "./fonts/Raleway";
import { NewYork } from "./fonts/newyork";
import LenisScroll from "./components/LenisScroll";



// import Grid from "./components/grid/Grid";


export const viewport: Viewport = { width: "device-width", initialScale: 1 };

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
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>

      <body
        className={`${Raleway.className} ${NewYork.variable} bg-[var(--background-black)]  text-white antialiased `}
        suppressHydrationWarning
      >
        <LenisScroll>
     
            {children}
        
        </LenisScroll>
      </body>
    </html>
  );
}
