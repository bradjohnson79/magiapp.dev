type NavLinkProps = {
  label: string;
  href: string;
  className?: string;
};

export function NavLink({ label, href, className = '' }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`text-sm font-medium text-(--color-foreground) ${className}`}
    >
      {label}
    </a>
  );
}
