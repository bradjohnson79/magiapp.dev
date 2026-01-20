import { Navbar } from '@/components/layout.tsx/navbar';

type LandingHeaderShellProps = {
  children: React.ReactNode;
  bgImageSrc?: string; // optional
  className?: string;
};

export function LandingHeaderShell({
  children,
  bgImageSrc,
  className = '',
}: LandingHeaderShellProps) {
  return (
    <header
      className={`relative w-full pb-12 ${bgImageSrc ? 'bg-cover bg-top' : ''} ${className}`}
      style={
        bgImageSrc ? { backgroundImage: `url('${bgImageSrc}')` } : undefined
      }
    >
      <div className="relative z-10">
        <Navbar />
        {children}
      </div>
    </header>
  );
}
