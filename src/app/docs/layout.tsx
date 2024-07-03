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
    <div>
      <Navbar routes={docsRoutes} />
      {children}
    </div>
  );
}

export default DocsLayout;
