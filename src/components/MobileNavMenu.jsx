import HeaderLoginBtn from "./HeaderLoginBtn";
import PageNav from "./PageNav";

function MobileNavMenu() {
  return (
    <div className="text-center fixed inset-0 bg-dark-orange text-white z-40 mt-18.5 transform transition-transform duration-300 translate-y-0 min-[790px]:hidden pt-15">
      <PageNav />
      <HeaderLoginBtn />
    </div>
  );
}

export default MobileNavMenu;
