"use client";

import { useState } from "react";

export default function Exam() {
  const questions = [
    {
      question: "ما هي الإضاءة؟",
      options: ["طاقة مرئية", "صوت", "حرارة", "ماء"],
      answer: "طاقة مرئية",
    },
    {
      question: "ما مصدر الضوء الطبيعي؟",
      options: ["المصباح", "الشمس", "LED", "الشمعة"],
      answer: "الشمس",
    },
    {
      question: "أي نوع يسبب ظلال حادة؟",
      options: ["ضوء ناعم", "ضوء مباشر", "ضوء منتشر", "ضوء خافت"],
      answer: "ضوء مباشر",
    },
    {
      question: "ما هو الضوء الناعم؟",
      options: ["Hard Light", "Soft Light", "LED", "Flash"],
      answer: "Soft Light",
    },
    {
      question: "ما وحدة قياس شدة الإضاءة؟",
      options: ["واط", "لوكس", "أمبير", "فولت"],
      answer: "لوكس",
    },
    {
      question: "أي نوع من الظلال يلتصق بالجسم؟",
      options: ["ظل منفصل", "ظل متصل", "ظل وهمي", "ظل ضعيف"],
      answer: "ظل متصل",
    },
    {
      question: "الضوء الجانبي يعطي؟",
      options: ["سطوع فقط", "عمق وظلال", "لون فقط", "ظلام"],
      answer: "عمق وظلال",
    },
    {
      question: "أي من هذه أنواع المصابيح؟",
      options: ["LED", "خشب", "ماء", "حديد"],
      answer: "LED",
    },
    {
      question: "الإضاءة الخلفية تستخدم في؟",
      options: ["إخفاء الجسم", "إظهار الظل", "إضاءة كاملة", "تكبير الصوت"],
      answer: "إظهار الظل",
    },
    {
      question: "ما الهدف من الإضاءة؟",
      options: ["الرؤية", "الأكل", "النوم", "الجري"],
      answer: "الرؤية",
    },
  ];

  const [currentAnswers, setCurrentAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleChange = (qIndex, option) => {
    setCurrentAnswers({
      ...currentAnswers,
      [qIndex]: option,
    });
  };

  const handleSubmit = () => {
    let finalScore = 0;

    questions.forEach((q, index) => {
      if (currentAnswers[index] === q.answer) {
        finalScore++;
      }
    });

    setScore(finalScore);
  };

  return (
    <div className="space-y-6">

      <h2 className="text-3xl font-bold text-purple-700">
        الاختبار الشامل
      </h2>

      {questions.map((q, index) => (
        <div key={index} className="card space-y-2">
          <p className="font-semibold">
            {index + 1}- {q.question}
          </p>

          {q.options.map((opt, i) => (
            <label key={i} className="block">
              <input
                type="radio"
                name={`q-${index}`}
                value={opt}
                onChange={() => handleChange(index, opt)}
              />
              <span className="mr-2">{opt}</span>
            </label>
          ))}
        </div>
      ))}

      <button onClick={handleSubmit} className="btn-primary">
        عرض النتيجة
      </button>

      {score !== null && (
        <div className="card text-center">
          <h3 className="text-xl font-bold">
            نتيجتك: {score} / 10
          </h3>

          {score >= 7 ? (
            <p className="text-green-600">ممتاز 👏</p>
          ) : (
            <p className="text-red-600">حاول مرة أخرى 💪</p>
          )}
        </div>
      )}

    </div>
  );
}