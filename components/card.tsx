export default function Card({ children, props }: { children: React.ReactNode, props?: string }) {
  return (
    <div className={`p-4 shadow-lg border rounded-xl bg-white ${props}`}>
      {children}
    </div>
  );
}