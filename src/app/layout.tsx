import { poppins, roboto } from "@/utils/fonts";
import "../styles/globals.css";

export const metadata = {
  title: "Atom Blog",
  description: "Be a better developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Normalmente o header estaria nesse componente para ser renderizado 
    // em todas as paginas Porém como isso desabilitaria o hot reload, 
    // tirando as animações (não sei se tem um jeito de fazer assim).
    // Assim header foi colocado em page.tsx.
    <html lang="en" className={`${roboto.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
