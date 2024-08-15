"use client";

import "../styles/base/reset.scss";
import "../styles/base/global.scss";
import "../styles/main.scss";

import { Inter } from "next/font/google";
import QueryProvider from "@/modules/tanstackQuery/QueryProvider";
import MuiThemeProvider from "@/modules/components/library/ThemeProvider/MuiThemeProvider";
import Navbar from "@/modules/components/ui/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

const routes = [
  { name: "Home", path: "/" },
  { name: "instructions", path: "/instructions/pull-ups/level-1" },
];

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MuiThemeProvider>
          <QueryProvider>
            <Navbar routes={routes} />
            {children}
          </QueryProvider>
        </MuiThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
