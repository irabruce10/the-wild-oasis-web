import Logo from "@/app/_component/Logo";
import Navigation from "@/app/_component/navigation";
import "@/app/_styles/globals.css";

export const metadata = {
  title: "The Wild Oasis",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-blue-900">
        <header>
          <Logo />
        </header>
        <Navigation />

        <main>{children}</main>

        <footer>@ 2024 Oasis. All rights reserved.</footer>
      </body>
    </html>
  );
}
