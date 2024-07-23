export interface InputProps {
  placeholder: string;
  ariaLabel: string;
  type?: string;
  className?: string;
}

export default function FormInput({
  placeholder,
  ariaLabel,
  type = "text",
  className,
}: InputProps) {
  return (
    <input
      className={`bg-background border-b border-secondary ${className}`}
      aria-label={ariaLabel}
      type={type}
      placeholder={placeholder}
    />
  );
}
