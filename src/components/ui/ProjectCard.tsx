export default function ProjectCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <article className="rounded-2xl border border-brown/10 p-6">
      <h3 className="display text-4xl">{name}</h3>
      <p className="mt-3 text-sm opacity-70">{description}</p>
    </article>
  );
}
