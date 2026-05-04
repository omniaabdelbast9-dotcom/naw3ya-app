export default function About() {
  return (
    <div className="space-y-8">
      
      {/* عنوان */}
      <h1 className="text-3xl font-bold text-purple-700">
        عن المنصة
      </h1>

      {/* تعريف المنصة */}
      <div className="card">
        <h2 className="text-xl font-semibold mb-3">
          ما هي المنصة؟
        </h2>
        <p className="text-gray-600 leading-7">
          منصة تعليمية تهدف إلى تبسيط مفهوم الإضاءة للطلاب، من خلال تقديم
          محتوى منظم وسهل الفهم يساعد على استيعاب أساسيات الإضاءة
          واستخداماتها في الحياة اليومية.
        </p>
      </div>

      {/* الهدف */}
      <div className="card">
        <h2 className="text-xl font-semibold mb-3">
          هدف المنصة
        </h2>
        <p className="text-gray-600 leading-7">
          تهدف المنصة إلى تمكين الطالب من فهم الإضاءة بشكل علمي وعملي،
          والقدرة على التمييز بين أنواعها المختلفة وتطبيقها في مواقف
          حياتية مثل تصميم الغرف أو بيئة العمل.
        </p>
      </div>

      {/* المحتوى التعليمي */}
      <div className="card">
        <h2 className="text-xl font-semibold mb-3">
          المحتوى التعليمي
        </h2>

        <ul className="list-disc pr-5 space-y-2 text-gray-600">
          <li>مفهوم الإضاءة وأهميتها في الحياة اليومية</li>
          <li>أنواع الإضاءة (مباشرة - غير مباشرة - طبيعية - صناعية)</li>
          <li>الخصائص الفنية للضوء (الشدة - اللون - الاتجاه)</li>
          <li>أنواع المصابيح الكهربائية ومقارنتها</li>
          <li>تطبيقات عملية لتصميم الإضاءة في الأماكن المختلفة</li>
        </ul>
      </div>

      {/* مميزات */}
      <div className="card">
        <h2 className="text-xl font-semibold mb-3">
          مميزات المنصة
        </h2>

        <ul className="list-disc pr-5 space-y-2 text-gray-600">
          <li>شرح مبسط ومنظم</li>
          <li>تقسيم المحتوى إلى دروس واضحة</li>
          <li>اختبار لقياس فهم الطالب</li>
          <li>تصميم حديث وسهل الاستخدام</li>
        </ul>
      </div>

    </div>
  );
}