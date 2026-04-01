import "./globals.css";

export const metadata = {
  title: "ماذون شرعي بالمدينة المنورة",
  description: "توثيق عقود الزواج بسرعة وإنجاز",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
