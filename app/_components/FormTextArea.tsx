export interface TextAreaProps {
  placeholder: string;
  maxLength: number;
  className?: string;
}

export default function FormTextArea({
  placeholder,
  maxLength,
  className,
}: TextAreaProps) {
  return (
    <textarea
      className={`bg-background border border-secondary h-52 resize-none ${className}`}
      maxLength={maxLength}
      placeholder={placeholder}
    />
  );
}
