import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center space-y-10">
      <h1 className="text-4xl font-bold text-purple-700">
        تعلم الإضاءة من الصفر
      </h1>

      <p className="text-gray-600 text-lg">
        منصة تعليمية تساعدك على فهم الإضاءة، أنواعها، واستخدامها في الحياة العملية
      </p>

      <div className="flex justify-center gap-4">
        <Link href="/units" className="btn-primary">
          ابدأ التعلم
        </Link>
        <Link href="/exam" className="btn-secondary">
          اختبر نفسك
        </Link>
      </div>
    </div>
  );
}
