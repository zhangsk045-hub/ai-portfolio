import Link from "next/link";
export default function ProjectCard({ slug, title, description, icon, gradient }) {
  return (
    <Link href={"/projects/" + slug} className="group block p-6 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all">
      <div className={"w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 " + gradient}>{icon}</div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </Link>
  );
}
