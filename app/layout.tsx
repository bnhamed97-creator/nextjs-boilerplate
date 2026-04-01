import './globals.css'

export const metadata = {
  title: "مأذون شرعي بالمدينة المنورة | توثيق عقود زواج رسمي",
  description:
    "مأذون شرعي معتمد في المدينة المنورة، توثيق عقود الزواج بسرعة واحترافية، خدمة جميع الأحياء داخل المدينة وضواحيها.",
  keywords: [
    "مأذون شرعي",
    "مأذون المدينة المنورة",
    "عقود زواج",
    "توثيق زواج",
    "مأذون أنكحة",
  ],
  authors: [{ name: "مأذون شرعي" }],
  openGraph: {
    title: "مأذون شرعي بالمدينة المنورة",
    description: "توثيق عقود الزواج بسرعة وإنجاز داخل المدينة المنورة",
    url: "https://mathoonshari.com",
    siteName: "مأذون شرعي",
    locale: "ar_SA",
    type: "website",
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
