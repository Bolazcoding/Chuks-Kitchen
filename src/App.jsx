import { BrowserRouter } from "react-router-dom";
import { KitchenProvider } from "./contexts/KitchenContext";
import Welcome from "./pages/Welcome";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import FoodDetails from "./pages/FoodDetails";

function App() {
  return (
    <div>
      <KitchenProvider>
        <BrowserRouter>
          {/* <Welcome /> */}
          {/* <SignIn /> */}
          {/* <SignUp /> */}
          {/* <HomePage /> */}
          {/* <MenuPage /> */}
          <FoodDetails />
        </BrowserRouter>
      </KitchenProvider>
    </div>
  );
}

export default App;
