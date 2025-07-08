import Logo from "./Logo";
import ThemeSwithcer from "./ThemeSwithcer";

const Header = () => {
  return (
    <header className="mb-6 shadow md:mb-12 bg-white dark:bg-gray-800 justify-stretch">
      <div className="container px-5 flex justify-between  h-20 items-center mx-auto">
        <Logo />
        <ThemeSwithcer />
      </div>
    </header>
  );
};

export default Header;
