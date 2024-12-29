import "./globals.css";

export const metadata = {
  title: "Строительные решения",
  description: "Строительные решения",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="icon.ico" type="image/x-icon" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}