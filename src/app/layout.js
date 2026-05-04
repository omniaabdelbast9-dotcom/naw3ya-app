import "./globals.css";

export const metadata = {
  title: "منصة تعلم الإضاءة",
  description: "تعلم الإضاءة وأنواعها",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-gradient-to-br from-purple-50 to-white min-h-screen">
        
        <nav className="bg-white shadow p-4 flex justify-between">
          <h1 className="font-bold text-purple-700">
            Lighting Academy
          </h1>

          <div className="space-x-4 space-x-reverse">
            <a href="/">الرئيسية</a>
            <a href="/about">عن المنصة</a>
            <a href="/units">المحاضرات</a>
            <a href="/exam">الاختبار</a>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto p-6">
          {children}
        </main>

      </body>
    </html>
  );
}