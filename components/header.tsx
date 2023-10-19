export default function Header({ children, props }: { children: React.ReactNode, props?: string }) {
  return (
    <header className={`${props}`}>
      <div className="flex justify-between items-center ">
        {children}
      </div>
    </header>
  );
}