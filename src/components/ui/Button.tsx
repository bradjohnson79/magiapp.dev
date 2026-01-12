type ButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export function Button({
  label,
  href,
  onClick,
  className = '',
  leftIcon,
  rightIcon,
}: ButtonProps) {
  const content = (
    <>
      {leftIcon && <span className='mr-2 inline-flex'>{leftIcon}</span>}
      {label}
      {rightIcon && <span className='ml-2 inline-flex'>{rightIcon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <button type='button' onClick={onClick} className={className}>
      {content}
    </button>
  );
}
