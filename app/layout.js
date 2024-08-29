import Logo from "./component/Logo";
import Navigation from "./component/navigation";

export const metadata = {
  title: "The Wild Oasis",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
