import { Inter } from "next/font/google";
import "./globals.css";
import Topo from "../components/Topo/Topo";
import Footer from "../components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clinica Médica",
  description: "Cuidando da sua saúde com excelência e dedicação",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

      </head>
      
      <body>
        < Topo />
        < Footer />
        {children}
      </body>
    </html>
  );
}
