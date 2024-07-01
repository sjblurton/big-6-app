import Navbar from "@/modules/components/ui/Navbar/Navbar";

function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default DocsLayout;
