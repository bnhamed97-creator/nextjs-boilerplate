export const metadata = {
  title: "مأذون شرعي بالمدينة المنورة | توثيق عقود زواج فوري",
  description: "مأذون شرعي معتمد في المدينة المنورة لتوثيق عقود الزواج بسرعة وإنجاز، خدمة للمواطنين والمقيمين",
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
