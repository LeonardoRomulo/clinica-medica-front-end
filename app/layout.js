import "./globals.css";


export const metadata = {
  title: "Clinica Médica",
  description: "Confiança para a sua saúde",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
