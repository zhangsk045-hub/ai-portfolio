import Link from "next/link";
export default function BlogCard({ slug, title, excerpt, date }) {
  return (
    <Link href={"/blog/" + slug} className="block p-6 rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-sm transition-all">
      <p className="text-xs text-gray-400 mb-2">{date}</p>
      <h3 className="font-semibold mb-2 hover:text-primary-600">{title}</h3>
      <p className="text-gray-500 text-sm">{excerpt}</p>
    </Link>
  );
}
