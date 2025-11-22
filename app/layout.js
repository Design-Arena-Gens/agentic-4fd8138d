import "./globals.css";

export const metadata = {
  title: "Présentation professionnelle - Entretien en français simplifié",
  description:
    "Présentation personnelle et expérience en entretien pour un poste de maintenance des ponts."
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
