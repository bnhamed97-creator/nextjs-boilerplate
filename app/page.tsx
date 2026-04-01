export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          font-family: 'Amiri', serif;
          background-color: #0a3214;
        }

        .wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #0a3214;
        }

        .content-card {
          background: rgba(10, 50, 20, 0.85);
          border: 2px solid #c9a227;
          border-radius: 12px;
          padding: 2rem 1.5rem;
          max-width: 360px;
          width: 100%;
          margin: 1rem;
          box-shadow: 0 0 40px rgba(0,0,0,0.6), inset 0 0 60px rgba(10,50,20,0.4);
          text-align: center;
        }

        /* 🔥 الشعار */
        .logo {
          width: 90px;
          height: 90px;
          object-fit: contain;
          margin-bottom: 1rem;
          filter: drop-shadow(0 0 6px rgba(255,255,255,0.2));
        }

        .main-title {
          color: #f0c040;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 0.3rem;
          text-shadow: 0 0 10px rgba(200,160,30,0.5);
        }

        .sub-title {
          color: #f0c040;
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }

        hr {
          border: none;
          border-top: 1px solid rgba(201,162,39,0.5);
          margin: 0.8rem 0;
        }

        .subtitle-text {
          color: #f5f0e8;
          font-size: 0.95rem;
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }

        .section-title {
          color: #f0c040;
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0.75rem 0;
          text-shadow: 0 0 8px rgba(200,160,30,0.5);
        }

        .service-item {
          color: #f5f0e8;
          font-size: 1rem;
          padding: 0.35rem 0;
        }

        .service-number {
          color: #f0c040;
          font-weight: 700;
          margin-left: 5px;
        }

        .speed-text {
          color: #f0c040;
          font-size: 1.4rem;
          font-weight: 700;
          text-shadow: 0 0 10px rgba(200,160,30,0.6);
          margin: 0.5rem 0;
        }

        .phone-display {
          color: #f0c040;
          font-size: 1.1rem;
          font-weight: 700;
          direction: ltr;
          margin-bottom: 1rem;
        }

        .btn {
          display: block;
          padding: 0.75rem;
          border-radius: 30px;
          font-size: 1.1rem;
          font-weight: 700;
          text-decoration: none;
          width: 100%;
          margin-bottom: 10px;
        }

        .whatsapp {
          background: linear-gradient(135deg, #25d366, #128c7e);
          color: white;
        }

        .call {
          background: linear-gradient(135deg, #c0392b, #922b21);
          color: white;
        }

        /* 🔥 زر الخريطة */
        .map {
          background: linear-gradient(135deg, #1e90ff, #0066cc);
          color: white;
        }

        .bottom-ornament {
          color: #c9a227;
          font-size: 1.3rem;
        }
      `}</style>

      <div className="wrapper">
        <div className="content-card">

          {/* 🔥 الشعار */}
          <img src="/logo.png" alt="شعار" className="logo" />

          <div className="main-title">مأذون شرعي</div>
          <div className="sub-title">بالمدينة المنورة</div>

          <hr />

          <p className="subtitle-text">مأذون شرعي مرخص من وزارة العدل</p>
          <p className="subtitle-text">
            لتوثيق عقود الأنكحة للمواطنين والمقيمين
          </p>

          <hr />

          <div className="section-title">الخدمات</div>

          <div className="service-item"><span className="service-number">١-</span>رفع طلبات اونلاين</div>
          <div className="service-item"><span className="service-number">٢-</span>توثيق عقود</div>
          <div className="service-item"><span className="service-number">٣-</span>الاستشارات</div>

          <hr />

          <div className="speed-text">سرعة و إنجاز</div>

          <div className="phone-display">📞 +966 55 465 9799</div>

          <a className="btn whatsapp" href="https://wa.me/966554659799" target="_blank">
            تواصل واتساب
          </a>

          <a className="btn call" href="tel:0554659799">
            اتصال
          </a>

          {/* 🔥 زر الخريطة */}
          <a 
            className="btn map"
            href="https://maps.app.goo.gl/RdM7ghaZNrSQvQLY8" 
            target="_blank"
          >
            موقعنا على الخريطة
          </a>

          <div className="bottom-ornament">✦ ✦ ✦</div>

        </div>
      </div>
    </>
  );
}
