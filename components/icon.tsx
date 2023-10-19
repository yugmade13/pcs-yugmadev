export default function Icon({ children, style }: { children: React.ReactNode, style: string }) {
  return (
    <div className={style}>
      {children}
    </div>
  );
}