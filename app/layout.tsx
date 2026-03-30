export const metadata = {
  title: "مأذون شرعي بالمدينة المنورة",
  description: "توثيق عقود الزواج - سرعة وإنجاز",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
