export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0b3d2e",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div style={{ textAlign: "center", width: "100%", maxWidth: "500px" }}>
        
        <h1 style={{ color: "white", fontSize: "28px", marginBottom: "10px" }}>
          مأذون شرعي بالمدينة المنورة
        </h1>

        <p style={{ color: "#ddd", marginBottom: "30px" }}>
          توثيق عقود الزواج سرعة وإنجاز
        </p>

        {/* زر واتساب */}
        <a href="https://wa.me/966554659799">
          <button
            style={{
              background: "green",
              color: "white",
              padding: "15px",
              border: "none",
              borderRadius: "10px",
              width: "100%",
              marginBottom: "15px",
              fontSize: "16px",
            }}
          >
            تواصل واتساب
          </button>
        </a>

        {/* زر اتصال */}
        <a href="tel:0554659799">
          <button
            style={{
              background: "red",
              color: "white",
              padding: "15px",
              border: "none",
              borderRadius: "10px",
              width: "100%",
              fontSize: "16px",
            }}
          >
            اتصال
          </button>
        </a>

      </div>
    </div>
  );
}
