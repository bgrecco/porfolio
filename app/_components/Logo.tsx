import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        className="rounded-full"
        src={"/logo.png"}
        height={32}
        width={32}
        quality={100}
        alt={"portfolio logo"}
      />
      <span className="hidden text-xl font-semibold text-gray-200 lg:flex">
        {" "}
        Portfolio Bruno Grecco
      </span>
    </Link>
  );
}
