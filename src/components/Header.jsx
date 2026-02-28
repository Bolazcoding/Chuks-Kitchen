import { useNavigate } from "react-router-dom";
import HeaderLoginBtn from "./HeaderLoginBtn";
import Logo from "./Logo";
import PageNav from "./PageNav";
import ToggleMenu from "./ToggleMenu";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-4">
      <div className="maxWidth flex items-center justify-between">
        <Logo onClick={() => navigate("/home")} />
        <div className="min-[790px]:hidden">
          <ToggleMenu />
        </div>
        <div className="max-[790px]:hidden">
          <PageNav />
        </div>
        <div className="max-[790px]:hidden">
          <HeaderLoginBtn />
        </div>
      </div>
    </header>
  );
}

export default Header;
