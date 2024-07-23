export interface ContactInfoProps {
  label: string;
  text: string;
  icon: JSX.Element;
  className?: string;
}

export default function ContactInfo({
  label,
  text,
  icon,
  className,
}: ContactInfoProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex bg-background size-12 rounded-full items-center justify-center">
        {icon}
      </div>
      <p className="font-medium text-[#7d8590] truncate">
        <span className="text-white font-medium">{label}: </span>
        {text}
      </p>
    </div>
  );
}
