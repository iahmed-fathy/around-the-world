import Logo from "./Logo";
import ThemeSwithcer from "./ThemeSwithcer";

function Header() {
  return (
    <header className="mb-6 bg-white shadow dark:bg-gray-800 md:mb-12">
      <div className="mx-5 flex h-20 items-center justify-between">
        <Logo />
        <ThemeSwithcer />
      </div>
    </header>
  );
}

export default Header;
