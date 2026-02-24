import { BrowserRouter } from "react-router-dom";
import { KitchenProvider } from "./contexts/KitchenContext";
import Welcome from "./pages/Welcome";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import FoodDetails from "./pages/FoodDetails";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <KitchenProvider>
        <BrowserRouter>
          {/* <Welcome /> */}
          {/* <SignIn /> */}
          {/* <SignUp /> */}
          {/* <HomePage /> */}
          <MenuPage />
          {/* <FoodDetails /> */}
          {/* <Cart /> */}
        </BrowserRouter>
      </KitchenProvider>
    </div>
  );
}

export default App;
