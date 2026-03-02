import { useNavigate } from "react-router-dom";
import HeaderLogoutBtn from "./HeaderLogoutBtn";
import Logo from "./Logo";
import PageNav from "./PageNav";
import ToggleMenu from "./ToggleMenu";

function Header({ setLoggedIn }) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-4">
      <div className="maxWidth flex items-center justify-between">
        <Logo onClick={() => navigate("/home")} />
        <div className="min-[790px]:hidden">
          <ToggleMenu setLoggedIn={setLoggedIn} />
        </div>
        <div className="max-[790px]:hidden">
          <PageNav />
        </div>
        <div className="max-[790px]:hidden">
          <HeaderLogoutBtn setLoggedIn={setLoggedIn} />
        </div>
      </div>
    </header>
  );
}

export default Header;
