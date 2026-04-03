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
          flex-direction: column;
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

        .logo {
          width: 90px;
          height: 90px;
          object-fit: contain;
          margin-bottom: 1rem;
        }

        .main-title {
          color: #f0c040;
          font-size: 1.8rem;
          font-weight: 700;
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
        }

        .section-title {
          color: #f0c040;
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0.75rem 0;
        }

        .service-item {
          color: #f5f0e8;
          font-size: 1rem;
        }

        .speed-text {
          color: #f0c040;
          font-size: 1.4rem;
          font-weight: 700;
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

        .whatsapp { background: #25d366; color: white; }
        .call { background: #c0392b; color: white; }
        .map { background: #1e90ff; color: white; }

        .bottom-ornament {
          color: #c9a227;
          font-size: 1.3rem;
        }

        /* ⭐ التقييم */
        .rating-box {
          max-width: 360px;
          width: 100%;
          border: 1px solid #c9a227;
          border-radius: 10px;
          padding: 10px;
          margin: 10px;
          text-align: center;
          color: white;
        }

        .stars { color: #f0c040; }

        /* 💬 سلايدر CSS فقط */
        .slider {
          max-width: 360px;
          overflow: hidden;
          height: 120px;
        }

        .slides {
          display: flex;
          flex-direction: column;
          animation: slide 12s infinite;
        }

        @keyframes slide {
          0% { transform: translateY(0); }
          25% { transform: translateY(-120px); }
          50% { transform: translateY(-240px); }
          75% { transform: translateY(-360px); }
          100% { transform: translateY(0); }
        }

        .review {
          height: 120px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          border: 1px solid #c9a227;
          margin: 5px;
          border-radius: 10px;
        }

        .review-name {
          color: #c9a227;
          margin-top: 5px;
        }
      `}</style>

      <div className="wrapper">

        <div className="content-card">

          <img src="/logo.png" className="logo" />

          <div className="main-title">ماذون شرعي</div>
          <div className="sub-title">بالمدينة المنورة</div>

          <hr />

          <p className="subtitle-text">ماذون شرعي مرخص من وزارة العدل</p>
          <p className="subtitle-text">
            لتوثيق عقود الأنكحة للمواطنين والمقيمين
          </p>

          <hr />

          <div className="section-title">الخدمات</div>

          <div className="service-item">توثيق عقود</div>

          <hr />

          <div className="speed-text">سرعة و إنجاز</div>

          <a className="btn whatsapp" href="https://wa.me/966554659799">واتساب</a>
          <a className="btn call" href="tel:0554659799">اتصال</a>
          <a className="btn map" href="https://maps.app.goo.gl/RdM7ghaZNrSQvQLY8">الخريطة</a>

          <div className="bottom-ornament">✦ ✦ ✦</div>

        </div>

        {/* ⭐ التقييم */}
        <div className="rating-box">
          <div className="stars">★★★★★</div>
          <div>5.0 من 5 - تقييم العملاء</div>
        </div>

        {/* 💬 التعليقات (سلايدر) */}
        <div className="slider">
          <div className="slides">

            <div className="review">
              <div>⭐️⭐️⭐️⭐️⭐️</div>
              <p>ممتاز جدًا 👍 تعامل راقي وسريع</p>
              <div className="review-name">- nouf Ha</div>
            </div>

            <div className="review">
              <div>⭐️⭐️⭐️⭐️⭐️</div>
              <p>محترم وأخلاقه طيبة</p>
              <div className="review-name">- احمد الجابري</div>
            </div>

            <div className="review">
              <div>⭐️⭐️⭐️⭐️⭐️</div>
              <p>قمة في الأخلاق والتعامل</p>
              <div className="review-name">- Nonoh</div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}
