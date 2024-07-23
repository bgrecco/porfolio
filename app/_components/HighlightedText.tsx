export interface TextProps {
  text: string;
  fontSize: string;
  marginRight?: string;
  className?: string;
}

export default function HighlightedText({
  text,
  fontSize,
  marginRight,
  className,
}: TextProps) {
  return (
    <div className={`relative mx-auto ${marginRight}`}>
      <div
        className={`absolute -inset-0 ${fontSize} text-secondary-light font-extrabold blur-md opacity-75 lg:text-left lg:text-nowrap`}
      >
        {text}
      </div>
      <h1
        className={`relative ${fontSize} text-secondary-light font-extrabold lg:text-left lg:text-nowrap`}
      >
        {text}
      </h1>
    </div>
  );
}
