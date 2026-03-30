export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "sans-serif" }}>
      
      <h1>مأذون شرعي بالمدينة المنورة</h1>

      <p>توثيق عقود الزواج - سرعة وإنجاز</p>

      <a href="https://wa.me/966554659799">
        <button style={{
          background: "green",
          color: "white",
          padding: "15px",
          border: "none",
          borderRadius: "10px",
          width: "80%",
          marginBottom: "10px",
          fontSize: "18px"
        }}>
          تواصل واتساب
        </button>
      </a>

      <br />

      <a href="tel:0554659799">
        <button style={{
          background: "red",
          color: "white",
          padding: "15px",
          border: "none",
          borderRadius: "10px",
          width: "80%",
          fontSize: "18px"
        }}>
          اتصال
        </button>
      </a>

    </div>
  );
}
