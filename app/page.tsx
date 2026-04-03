"use client";
import { useEffect, useState } from "react";

export default function Home() {

  const reviews = [
    { name: "nouf Ha", text: "ممتاز جدًا 👍 مأذون محترم وملتزم وتعامل واضح وسهل في الإجراءات" },
    { name: "احمد الجابري", text: "الله يوفقه، محترم وأخلاقه طيبة" },
    { name: "Nonoh Alhrb", text: "ما شاء الله على أخلاقه" },
    { name: "عميل", text: "قمة في الأخلاق والتعامل ربي يوفقه 👍👍" },
    { name: "Rov 70", text: "ما شاء الله رجل محترم" },
    { name: "G A", text: "👍" },
    { name: "Naif", text: "تم التعامل معه وجزاه الله خير" }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const current = reviews[index];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');

        body {
          font-family: 'Amiri', serif;
          background-color: #0a3214;
          margin: 0;
        }

        .wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .content-card {
          background: rgba(10, 50, 20, 0.85);
          border: 2px solid #c9a227;
          border-radius: 12px;
          padding: 2rem;
          max-width: 360px;
          width: 100%;
          text-align: center;
          margin: 10px;
        }

        .logo {
          width: 90px;
          margin-bottom: 10px;
        }

        .main-title { color: #f0c040; font-size: 1.8rem; }
        .sub-title { color: #f0c040; margin-bottom: 10px; }

        .btn {
          display: block;
          padding: 10px;
          border-radius: 30px;
          margin: 5px 0;
          text-decoration: none;
          color: white;
        }

        .whatsapp { background: #25d366; }
        .call { background: #c0392b; }
        .map { background: #1e90ff; }

        /* ⭐ التقييم */
        .rating-box {
          border: 1px solid #c9a227;
          border-radius: 10px;
          padding: 10px;
          margin: 10px;
          text-align: center;
          color: white;
        }

        .stars { color: #f0c040; }

        /* 💬 السلايدر */
        .slider {
          max-width: 360px;
          width: 100%;
          margin: 10px;
        }

        .review-card {
          background: rgba(10, 50, 20, 0.85);
          border: 1px solid #c9a227;
          border-radius: 10px;
          padding: 15px;
          text-align: center;
          color: white;
          transition: 0.4s;
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

          <p>توثيق عقود الأنكحة بسرعة واحترافية</p>

          <a className="btn whatsapp" href="https://wa.me/966554659799">
            واتساب
          </a>

          <a className="btn call" href="tel:0554659799">
            اتصال
          </a>

          <a className="btn map" href="https://maps.app.goo.gl/RdM7ghaZNrSQvQLY8">
            الخريطة
          </a>

        </div>

        {/* ⭐ التقييم */}
        <div className="rating-box">
          <div className="stars">★★★★★</div>
          <div>5.0 من 5 - تقييم العملاء عبر Google</div>
        </div>

        {/* 💬 سلايدر التعليقات */}
        <div className="slider">
          <div className="review-card">
            <div>⭐️⭐️⭐️⭐️⭐️</div>
            <p>{current.text}</p>
            <div className="review-name">- {current.name}</div>
          </div>
        </div>

      </div>
    </>
  );
}
