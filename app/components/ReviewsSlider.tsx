"use client";

import { useEffect, useState } from "react";

const reviews = [
  {
    name: "nouf Ha",
    text: "ممتاز جدًا 👍 مأذون محترم وملتزم، تعامل واضح وسهل في الإجراءات. جزاه الله خير الجزاء.",
  },
  {
    name: "احمد الجابري",
    text: "الله يوفقه، محترم وأخلاقه طيبة.",
  },
  {
    name: "Nonoh Alhrb",
    text: "ما شاء الله على أخلاقه.",
  },
  {
    name: "عميل",
    text: "ما شاء الله عليه قمة في الأخلاق والتعامل، ربي يوفقه 👍👍",
  },
  {
    name: "Rov 70",
    text: "ما شاء الله رجل محترم.",
  },
  {
    name: "G A",
    text: "👍",
  },
  {
    name: "Naif",
    text: "تم التعامل معه وجزاه الله خير.",
  },
];

export default function ReviewsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const current = reviews[index];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100 text-center">
      <div className="max-w-3xl mx-auto px-4">

        <h2 className="text-3xl font-bold mb-3">
          ⭐ تقييمات العملاء
        </h2>

        <p className="text-gray-500 mb-10">
          آراء حقيقية من Google
        </p>

        <div className="bg-white rounded-3xl shadow-xl p-8 transition-all duration-500">
          
          <div className="text-yellow-500 text-2xl mb-4">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="text-lg text-gray-700 leading-loose mb-6">
            "{current.text}"
          </p>

          <p className="font-bold text-gray-900 text-lg">
            {current.name}
          </p>
        </div>

        {/* نقاط تحت */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
