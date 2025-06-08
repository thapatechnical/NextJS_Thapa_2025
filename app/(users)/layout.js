import "../globals.css";
import Navigation from "@/components/Navigation";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {/* <h1>Hello Layout</h1> */}
        <Navigation />
        {children}
      </body>
    </html>
  );
}
