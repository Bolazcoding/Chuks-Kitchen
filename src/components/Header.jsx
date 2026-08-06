import { useNavigate } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { cart } from "ionicons/icons";
import HeaderLogoutBtn from "./HeaderLogoutBtn";
import Logo from "./Logo";
import PageNav from "./PageNav";
import ToggleMenu from "./ToggleMenu";
import { useKitchen } from "../contexts/useKitchen";

function Header({ setLoggedIn }) {
  const navigate = useNavigate();
  const { cartItems } = useKitchen();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-4">
      <div className="maxWidth flex items-center justify-between">
        <Logo onClick={() => navigate("/home")} />

        <div className="flex items-center gap-4">
          <div className="max-[790px]:hidden">
            <PageNav />
          </div>

          <button
            type="button"
            onClick={() => navigate("/cart")}
            className="relative rounded-full w-11 h-11 flex items-center justify-center bg-[var(--color-primary-color)] text-white hover:bg-[var(--color-soft-orange)] transition-colors duration-150"
          >
            <IonIcon icon={cart} className="text-2xl" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-5 rounded-full bg-red-500 text-[10px] font-semibold text-white flex items-center justify-center px-1">
                {cartCount}
              </span>
            )}
          </button>

          <div className="max-[790px]:hidden">
            <HeaderLogoutBtn setLoggedIn={setLoggedIn} />
          </div>

          <div className="min-[790px]:hidden">
            <ToggleMenu setLoggedIn={setLoggedIn} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
