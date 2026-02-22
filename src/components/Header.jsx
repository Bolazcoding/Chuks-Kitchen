import HeaderLoginBtn from "./HeaderLoginBtn";
import Logo from "./Logo";
import PageNav from "./PageNav";

function Header() {
  return (
    <header className="bg-white py-4">
      <div className="maxWidth flex items-center justify-between">
        <Logo />
        <PageNav />
        <HeaderLoginBtn />
      </div>
    </header>
  );
}

export default Header;
