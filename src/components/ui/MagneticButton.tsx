"use client";

export default function MagneticButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="rounded-full border border-brown/20 px-5 py-3 text-xs uppercase tracking-widest transition hover:-translate-y-1 hover:bg-brown hover:text-cream">
      {children}
    </button>
  );
}
