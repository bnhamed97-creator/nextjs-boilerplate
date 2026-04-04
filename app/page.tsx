"use client";
import Head from "next/head";
import Image from "next/image";
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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = reviews[index];

  return (
    <>
      {/* 🔥 SEO */}
      <Head>
        <title>مأذون شرعي المدينة المنورة | توثيق عقود الزواج بسرعة</title>
        <meta name="description" content="مأذون شرعي في المدينة المنورة لتوثيق عقود الزواج بسرعة وسهولة في جميع الأحياء." />
      </Head>

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
        }

        .content-card {
          background: rgba(10, 50, 20, 0.85);
          border: 2px solid #c9a227;
          border-radius: 12px;
          padding: 2rem 1.5rem;
          max-width: 360px;
          width: 100%;
          margin: 1rem;
          box-shadow: 0 0 40px rgba(0,0,0,0.6);
          text-align: center;
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
        }

        .section-title {
          color: #f0c040;
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0.75rem 0;
        }

        .service-item {
          color: #f5f0e8;
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
        }

        .btn {
          display: block;
          padding: 0.75rem;
          border-radius: 30px;
          font-weight: 700;
          text-decoration: none;
          margin-bottom: 10px;
        }

        .whatsapp { background: #25d366; color: white; }
        .call { background: #c0392b; color: white; }
        .map { background: #1e90ff; color: white; }

        .rating-box, .slider {
          max-width: 360px;
          width: 100%;
          margin: 10px;
          text-align: center;
          color: white;
        }

        .review-card {
          border: 1px solid #c9a227;
          border-radius: 10px;
          padding: 15px;
        }

        .review-name {
          color: #c9a227;
          margin-top: 5px;
        }
      `}</style>

      <div className="wrapper">

        {/* ✅ الكرت */}
        <div className="content-card">

          {/* 🔥 صورة محسنة */}
          <Image
            src="/logo.webp"
            alt="مأذون شرعي المدينة"
            width={90}
            height={90}
            priority
          />

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

          <a className="btn whatsapp" href="https://wa.me/966554659799">واتساب</a>
          <a className="btn call" href="tel:0554659799">اتصال</a>
          <a className="btn map" href="https://maps.app.goo.gl/RdM7ghaZNrSQvQLY8">الموقع</a>

        </div>

        {/* ⭐ تقييم */}
        <div className="rating-box">
          ★★★★★
          <div>5.0 من 5</div>
        </div>

        {/* 💬 سلايدر */}
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
