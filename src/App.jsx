import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { KitchenProvider } from "./contexts/KitchenContext";
import SpinnerFullPage from "./components/SpinnerFullPage";
// import Welcome from "./pages/Welcome";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
// import HomePage from "./pages/HomePage";
// import MenuPage from "./pages/MenuPage";
// import FoodDetails from "./pages/FoodDetails";
// import Cart from "./pages/Cart";

const Welcome = lazy(() => import("./pages/Welcome"));
const SignIn = lazy(() => import("./pages/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp"));
const HomePage = lazy(() => import("./pages/HomePage"));
const MenuPage = lazy(() => import("./pages/MenuPage"));
const FoodDetails = lazy(() => import("./pages/FoodDetails"));
const Cart = lazy(() => import("./pages/Cart"));

function App() {
  // const [isOnboarded, setIsOnboarded] = useState(false);

  // useEffect(() => {
  //   const status = localStorage.getItem("onboardingComplete");
  //   if (status === "true") {
  //     setIsOnboarded(true);
  //   }
  // }, []);

  return (
    <div>
      <KitchenProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              {/* <Route
              path="/"
              element={
                isOnboarded ? (
                  <Navigate to="/home" />
                  ) : (
                  <Welcome setIsOnboarded={setIsOnboarded} />
                )
                }
            /> */}
              <Route path="/home" element={<HomePage />} />
              <Route path="/explore" element={<MenuPage />} />
              <Route path="/foodDetails" element={<FoodDetails />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </KitchenProvider>
    </div>
  );
}

export default App;
