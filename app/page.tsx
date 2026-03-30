export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        textAlign: "center",
        color: "#fff"
      }}
    >
      <div style={{ maxWidth: "500px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
          مأذون شرعي بالمدينة المنورة
        </h1>

        <p style={{ marginTop: "10px", fontSize: "14px" }}>
          مأذون شرعي بالمدينة مرخص "وزارة العدل"
        </p>

        <p style={{ marginTop: "10px" }}>
          لتوثيق عقود الأنكحة للمواطنين والمقيمين
        </p>

        <h3 style={{ marginTop: "20px", color: "gold" }}>
          الخدمات
        </h3>

        <p>1- رفع الطلبات اونلاين</p>
        <p>2- توثيق عقود الزواج</p>
        <p>3- الاستشارات</p>

        <p style={{ marginTop: "20px" }}>
          سرعة و إنجاز
        </p>

        <a href="https://wa.me/966XXXXXXXXX">
          <button
            style={{
              background: "green",
              color: "white",
              padding: "15px",
              width: "100%",
              border: "none",
              borderRadius: "10px",
              marginTop: "15px"
            }}
          >
            تواصل واتساب
          </button>
        </a>

        <button
          style={{
            background: "red",
            color: "white",
            padding: "15px",
            width: "100%",
            border: "none",
            borderRadius: "10px",
            marginTop: "10px"
          }}
        >
          اتصال
        </button>
      </div>
    </div>
  );
}
