import FooterNavigation from "./FooterNavigation";

export default function Footer() {
  return (
    <footer
      id="section-footer"
      className="flex flex-col lg:flex-row items-center justify-between border-b bg-border border-background py-4 px-4 w-full"
    >
      <div>
        <p>{`Bruno Grecco ${new Date().getFullYear()}`}</p>
      </div>
      <div className="flex justify-between items-center max-w-7xl py-2">
        <FooterNavigation />
      </div>
    </footer>
  );
}
