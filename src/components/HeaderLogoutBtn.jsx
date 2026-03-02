import { useNavigate } from "react-router-dom";
import Button from "./Button";

function HeaderLogoutBtn({ setLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setLoggedIn(false);
    navigate("/login");

    // localStorage.removeItem("savedEmail");
    // localStorage.removeItem("savedPassword");
    // localStorage.removeItem("isSignedUp");
    // localStorage.removeItem("isLoggedIn");
    // navigate("/");
  };

  return (
    <Button
      bgColor="bg-primary-color"
      textColor="text-white"
      className="py-3.75 px-12 text-[16px] leading-6 rounded-lg font-semibold hover:bg-soft-orange max-[1000px]:px-8 max-[1000px]:py-2.75 max-[790px]:bg-white max-[790px]:text-primary-color max-[790px]:text-xl max-[790px]:mt-16 max-[790px]:py-4 max-[790px]:px-20"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
}

export default HeaderLogoutBtn;
