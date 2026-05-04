import Link from "next/link";

const lessons = [
  { id: 1, title: "الغرض من الضوء وخصائصه" },
  { id: 2, title: "انواع الضوء" },
  { id: 3, title: "الظلال" },
  { id: 4, title: "اتجاة الضوء" },
  { id: 5, title: "الإضاءةالثلاثية " },
];

export default function Units() {
  return (
    <div>
        
      <h2 className="text-2xl font-bold mb-6">الوحدات الدراسية</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lessons.map((lesson) => (
          <Link
            key={lesson.id}
            href={`/units/unit${lesson.id}`}
            className="card"
          >
            <h3 className="text-lg font-semibold">{lesson.title}</h3>
            <p className="text-gray-500 mt-2">اضغط لعرض الدرس</p>
          </Link>
        ))}
      </div>
    </div>
  );
}