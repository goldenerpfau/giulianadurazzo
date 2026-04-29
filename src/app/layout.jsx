import './globals.css';

export const metadata = {
  title: 'Giuliana Durazzo | Marketing, Social Media, Eventos e Branding',
  description: 'Portfólio premium de Giuliana Durazzo — marketing, social media, eventos, ativações e branding.'
};

export const viewport = {
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
