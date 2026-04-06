import { Amiri } from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic"],
  display: "swap",
});

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
    <html lang="ar" dir="rtl" className={amiri.className}>
      <head>
        <link rel="preload" as="image" href="/bg.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
