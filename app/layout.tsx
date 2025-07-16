export const metadata = {
  title: "Sydney Bridge Walk",
  description: "A scenic itinerary across Sydney Harbour Bridge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-blue-50 text-gray-800">{children}</body>
    </html>
  );
}
