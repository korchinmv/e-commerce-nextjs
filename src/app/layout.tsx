import { Metadata } from "next";
import { Rubik } from "next/font/google";
import "@/styles/globals.scss";
import StoreProvider from "./StoreProvider";
import MobileMenu from "@/components/ui/MobileMenu/MobileMenu";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Main from "@/components/Main/Main";
import Cart from "@/components/ui/Cart/Cart";

const font = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce Shoping App",
  description: "E-commerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/svg+xml' href='favicon.svg' />
        <link rel='icon' type='image/png' href='favicon.png' />
        <meta name='theme-color' content='#ffffff' />
        <meta
          httpEquiv='Content-Security-Policy'
          content='upgrade-insecure-requests'
        ></meta>
      </head>
      <StoreProvider>
        <body className={font.className}>
          <Header />
          <Main>{children}</Main>
          <Footer />
          <MobileMenu />
          <Cart />
        </body>
      </StoreProvider>
    </html>
  );
}
