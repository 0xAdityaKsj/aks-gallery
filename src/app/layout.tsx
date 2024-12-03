import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next/types";
import { ClerkProvider } from "@clerk/nextjs";
import { TopNav } from "./_components/topnav";

export const metadata: Metadata = {
  title: "Ak's Gallery",
  description: "Ak's Gallery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${GeistSans.variable}`}>
          <div className="grid-rows-[auto, 1fr] grid h-screen">
            <TopNav />
            <main className="overflow-y-scroll">{children}</main>
          </div>

          {modal}
          <div id="modal-root" />
        </body>
      </html>
    </ClerkProvider>
  );
}
