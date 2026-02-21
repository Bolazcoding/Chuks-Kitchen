import HeaderLoginBtn from "./HeaderLoginBtn";
import Logo from "./Logo";
import PageNav from "./PageNav";

function Header() {
  return (
    <header className="maxWidth bg-white py-4">
      <div className="flex items-center justify-between">
        <Logo />
        <PageNav />
        <HeaderLoginBtn />
      </div>
    </header>
  );
}

export default Header;
