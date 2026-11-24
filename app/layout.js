
import "./globals.css";

export const metadata = {
  title: "GadgetKu Store",
  description: "Toko gadget dan aksesori terpercaya"
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
