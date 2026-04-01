export const metadata = {
  title: "مأذون شرعي المدينة المنورة | توثيق عقود الزواج بسرعة",
  description:
    "مأذون شرعي معتمد في المدينة المنورة لتوثيق عقود الزواج للمواطنين والمقيمين بسرعة وسهولة. خدمة جميع أحياء المدينة المنورة.",
};

export default function Services() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a3214",
        color: "#f5f0e8",
        fontFamily: "Amiri, serif",
        padding: "20px",
        textAlign: "center",
      }}
    >
      {/* العنوان الرئيسي */}
      <h1 style={{ color: "#f0c040", fontSize: "28px", marginBottom: "10px" }}>
        مأذون شرعي في المدينة المنورة
      </h1>

      {/* وصف قوي */}
      <p style={{ marginBottom: "20px", lineHeight: "1.8" }}>
        مأذون شرعي معتمد في المدينة المنورة يقدم خدمات توثيق عقود الزواج
        للمواطنين والمقيمين، مع سرعة في الإنجاز وتغطية جميع أحياء المدينة
        المنورة.
      </p>

      <hr style={{ borderColor: "#c9a227", margin: "20px 0" }} />

      {/* الخدمات */}
      <h2 style={{ color: "#f0c040" }}>خدماتنا</h2>

      <p>✔️ توثيق عقود الزواج</p>
      <p>✔️ رفع الطلبات إلكترونيًا عبر ناجز</p>
      <p>✔️ إتمام إجراءات الزواج بسرعة</p>
      <p>✔️ الاستشارات الشرعية</p>
      <p>✔️ خدمة جميع أحياء المدينة المنورة</p>

      <hr style={{ borderColor: "#c9a227", margin: "20px 0" }} />

      {/* كلمات تقوية SEO */}
      <p style={{ lineHeight: "1.8" }}>
        إذا كنت تبحث عن مأذون شرعي في المدينة المنورة لتوثيق عقد زواجك بسرعة
        واحترافية، فنحن نقدم لك الخدمة في جميع الأحياء مع الالتزام بالأنظمة
        الرسمية لوزارة العدل.
      </p>

      <hr style={{ borderColor: "#c9a227", margin: "20px 0" }} />

      {/* التواصل */}
      <h2 style={{ color: "#f0c040" }}>تواصل الآن</h2>

      <p style={{ fontSize: "18px", marginBottom: "10px" }}>
        📞 0554659799
      </p>

      {/* زر واتساب */}
      <a
        href="https://wa.me/966554659799?text=السلام عليكم، أرغب في توثيق عقد زواج"
        style={{
          display: "inline-block",
          background: "#25d366",
          color: "white",
          padding: "12px 25px",
          borderRadius: "25px",
          textDecoration: "none",
          marginBottom: "15px",
          fontSize: "16px",
        }}
      >
        تواصل عبر واتساب
      </a>

      <br />

      {/* زر الموقع */}
      <a
        href="https://maps.app.goo.gl/RdM7ghaZNrSQvQLY8"
        target="_blank"
        style={{
          display: "inline-block",
          background: "#c0392b",
          color: "white",
          padding: "12px 25px",
          borderRadius: "25px",
          textDecoration: "none",
          fontSize: "16px",
        }}
      >
        موقعنا على الخريطة
      </a>
    </div>
  );
}
