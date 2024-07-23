export interface ButtonProps {
  variant: "text" | "contained" | "outlined";
  children: JSX.Element | string;
}

export default function Button({ variant, children }: ButtonProps) {
  return (
    <a
      href="#_"
      className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
    >
      {variant !== "text" ? (
        <>
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-secondary group-hover:opacity-100"></span>
          <span
            className={`absolute top-0 left-0 w-full ${
              variant === "contained"
                ? "bg-secondary h-full"
                : "bg-gradient-to-b from-secondary to-transparent opacity-5 h-1/3"
            } `}
          ></span>
          {variant === "outlined" ? (
            <>
              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-secondary-light to-transparent opacity-5"></span>
              <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-secondary-light to-transparent opacity-5"></span>
              <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-secondary-light to-transparent opacity-5"></span>
              <span className="absolute inset-0 w-full h-full border border-secondary-light rounded-md opacity-10"></span>
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-secondary-light rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
            </>
          ) : (
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-secondary-light rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
          )}
          <span className="relative flex">{children}</span>
        </>
      ) : (
        <span className="relative">{children}</span>
      )}
    </a>
  );
}
