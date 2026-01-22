type ButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export function Button({
  label,
  href,
  onClick,
  type = 'button',
  disabled,
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
    <button type={type} onClick={onClick} disabled={disabled} className={className}>
      {content}
    </button>
  );
}