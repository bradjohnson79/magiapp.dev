type DividerProps = {
  text?: string;
};

export function Divider({ text }: DividerProps) {
  return (
    <div className="relative flex w-full items-center justify-center">
      <div className="h-px w-full bg-(--color-surface-muted)" />

      {text && (
        <span className="absolute bg-(--color-background) px-2 text-xs text-(--color-surface-darker)">
          {text}
        </span>
      )}
    </div>
  );
}