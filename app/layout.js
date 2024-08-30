import Logo from "@/app/_component/Logo";
import Navigation from "@/app/_component/navigation";
import "@/app/_styles/globals.css";

export const metadata = {
  title: {
    template: "%s/The Wild Oasis",
    default: "Welcome/The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Austian Linz,surrounded by beautiful mountains and dark forests",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-100 min-h-screen">
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
