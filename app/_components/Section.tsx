import React from "react";

export interface SectionProps {
  className?: string;
  id: string;
  firstSection: boolean;
  lastSection: boolean;
  hasIcon: boolean;
  icon?: JSX.Element;
  customPaddings?: string;
  children: React.ReactNode;
}

const Section = (props: SectionProps) => {
  const { className, id, firstSection, lastSection, hasIcon, icon, children } =
    props;

  return (
    <div
      id={id}
      className={`
      relative 
      flex
      w-full
      scroll-mt-28
      ${className || ""}`}
    >
      <div className="col-1 w-12 flex flex-col items-center">
        {firstSection ? (
          <>
            <div className="w-[13px] h-[13px] border-2 border-secondary-light rounded-full "></div>
            <div className="bg-gradient-to-b from-background to-secondary-light max-md:w-[2px] w-[3px] h-full rounded-md"></div>
          </>
        ) : (
          <>
            {hasIcon && <div className="my-6">{icon}</div>}
            {!lastSection && (
              <div className="bg-gradient-to-b from-secondary-light via-primary to-secondary-light max-md:w-[2px] w-[3px] h-full rounded-md"></div>
            )}
          </>
        )}
      </div>
      <div
        className="col-11 mx-auto"
        style={{ minHeight: `calc(100vh - 208px)` }}
      >
        {children}
      </div>
    </div>
  );
};

export default Section;
