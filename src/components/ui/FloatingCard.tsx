export default function FloatingCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-brown/15 bg-white/30 p-4 shadow-lg backdrop-blur">
      {children}
    </div>
  );
}
