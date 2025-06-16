import Navigation from "@/components/Navigation";

export default function RootLayout({ children }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
