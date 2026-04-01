export const metadata = {
  title: "خدمات مأذون شرعي بالمدينة المنورة",
  description: "توثيق عقود الزواج - مأذون شرعي معتمد وزارة العدل - خدمات سريعة داخل المدينة المنورة",
};

export default function Services() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#0a3214",
      color: "#f5f0e8",
      fontFamily: "Amiri, serif",
      padding: "20px",
      textAlign: "center"
    }}>
      
      <h1 style={{ color: "#f0c040", fontSize: "28px", marginBottom: "10px" }}>
        خدمات مأذون شرعي بالمدينة المنورة
      </h1>

      <p style={{ marginBottom: "20px", lineHeight: "1.8" }}>
        نقدم خدمات توثيق عقود الزواج للمواطنين والمقيمين في المدينة المنورة 
        بسرعة واحترافية، معتمدين من وزارة العدل.
      </p>

      <hr style={{ borderColor: "#c9a227", margin: "20px 0" }} />

      <h2 style={{ color: "#f0c040" }}>الخدمات</h2>

      <p>✔️ توثيق عقود الزواج</p>
      <p>✔️ رفع الطلبات إلكترونيًا</p>
      <p>✔️ الاستشارات الشرعية</p>
      <p>✔️ خدمة جميع أحياء المدينة المنورة</p>

      <hr style={{ borderColor: "#c9a227", margin: "20px 0" }} />

      <h2 style={{ color: "#f0c040" }}>تواصل الآن</h2>

      <p style={{ fontSize: "18px", marginBottom: "10px" }}>
        📞 0554659799
      </p>

      <a 
        href="https://wa.me/966554659799"
        style={{
          display: "inline-block",
          background: "#25d366",
          color: "white",
          padding: "10px 20px",
          borderRadius: "20px",
          textDecoration: "none",
          marginBottom: "10px"
        }}
      >
        واتساب
      </a>

      <br />

      <a 
        href="https://maps.app.goo.gl/RdM7ghaZNrSQvQLY8"
        target="_blank"
        style={{
          display: "inline-block",
          background: "#c0392b",
          color: "white",
          padding: "10px 20px",
          borderRadius: "20px",
          textDecoration: "none"
        }}
      >
        الموقع على الخريطة
      </a>

    </div>
  );
}
