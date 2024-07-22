"use client";

import MuiThemeProvider from "@/modules/components/library/ThemeProvider/MuiThemeProvider";
import Navbar from "@/modules/components/ui/Navbar/Navbar";

const docsRoutes = [
  { name: "Home", path: "/" },
  { name: "Docs", path: "/docs" },
  { name: "API Docs", path: "/docs/api" },
  { name: "Test Coverage", path: "/docs/test-coverage" },
];

function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MuiThemeProvider>
      <Navbar routes={docsRoutes} />
      {children}
    </MuiThemeProvider>
  );
}

export default DocsLayout;
