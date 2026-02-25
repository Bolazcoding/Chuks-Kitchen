import HeaderLoginBtn from "./HeaderLoginBtn";
import Logo from "./Logo";
import PageNav from "./PageNav";
import ToggleMenu from "./ToggleMenu";

function Header() {
  return (
    <header className="bg-white py-4">
      <div className="maxWidth flex items-center justify-between">
        <Logo />
        <ToggleMenu />
        {/* <div className="min-[790px]:hidden">
          <PageNav />
          <HeaderLoginBtn />
        </div> */}
      </div>
    </header>
  );
}

export default Header;
