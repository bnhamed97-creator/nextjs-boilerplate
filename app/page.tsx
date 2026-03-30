export default function Home() {
  return (
    <main style={{
      textAlign: "center",
      marginTop: "50px",
      background: "#0b3d2e",
      color: "white",
      height: "100vh",
      padding: "20px"
    }}>
      <h1>مأذون شرعي بالمدينة المنورة</h1>
      <p>توثيق عقود الزواج - سرعة وإنجاز</p>

      <br />

      <a href="https://wa.me/966554659799">
        <button style={{
          background: "green",
          color: "white",
          padding: "15px",
          border: "none",
          borderRadius: "10px",
          width: "80%",
          marginBottom: "10px"
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
          width: "80%"
        }}>
          اتصال
        </button>
      </a>
    </main>
  );
}
