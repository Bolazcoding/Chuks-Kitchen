import { BrowserRouter } from "react-router-dom";
import { KitchenProvider } from "./contexts/KitchenContext";
import Welcome from "./pages/Welcome";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <KitchenProvider>
        <BrowserRouter>
          {/* <Welcome /> */}
          {/* <SignIn /> */}
          {/* <SignUp /> */}
          <HomePage />
        </BrowserRouter>
      </KitchenProvider>
    </div>
  );
}

export default App;
