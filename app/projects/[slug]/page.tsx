import Link from "next/link";
import { projects } from "@/app/data/projects";
export async function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = projects.find(x => x.slug === params.slug); return { title: p ? `${p.title} — Project` : "Project" };
}
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = projects.find(x => x.slug === params.slug);
  if (!p) return <div className="p-6">Project not found.</div>;
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Link href="/projects" className="text-sm text-slate-600 hover:underline">← All projects</Link>
      <h1 className="mt-3 text-3xl font-bold tracking-tight">{p.title}</h1>
      <p className="text-slate-500">{p.year}</p>
      <img src={p.image} alt={p.title} className="mt-6 w-full h-64 object-cover rounded-2xl" />
      <p className="mt-6 text-slate-700 leading-relaxed">{p.long}</p>
      <div className="mt-6 flex flex-wrap gap-2">{p.tags.map(t => (<span key={t} className="px-2.5 py-1 rounded-xl text-xs bg-slate-100 border border-slate-200">{t}</span>))}</div>
      <div className="mt-8 flex gap-4 text-sm">
        {p.links?.demo && <a href={p.links.demo} className="underline">Demo</a>}
        {p.links?.repo && <a href={p.links.repo} className="underline">Code</a>}
      </div>
    </div>
  );
}
