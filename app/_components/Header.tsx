import Logo from "./Logo";
import Navigation from "./Navigation";
import NavigationMobile from "./NavigationMobile";

export default function Header() {
  return (
    <header
      id="section-header"
      className="border-b bg-border border-background backdrop-blur-sm fixed z-50 w-full"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-5">
        <Logo />
        <Navigation />
        <NavigationMobile />
      </div>
    </header>
  );
}
