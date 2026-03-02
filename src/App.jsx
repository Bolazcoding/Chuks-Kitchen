import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
  const [onboarded, setOnboarded] = useState(false);
  const [signedUp, setSignedUp] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(function () {
    async function account() {
      setOnboarded(localStorage.getItem("onboardingComplete") === "true");
      setSignedUp(localStorage.getItem("isSignedUp") === "true");
      setLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    }
    account();
  }, []);

  return (
    <div>
      <KitchenProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route
                path="/"
                element={
                  !onboarded ? (
                    <Navigate to="/onboarding" />
                  ) : loggedIn ? (
                    <Navigate to="/home" />
                  ) : signedUp ? (
                    <Navigate to="/login" />
                  ) : (
                    <Navigate to="/sign-up" />
                  )
                }
              />

              {/* <Route
                path="/"
                element={
                  !onboarded ? (
                    <Navigate to="/onboarding" />
                  ) : !signedUp ? (
                    <Navigate to="/signup" />
                  ) : (
                    <Navigate to="/home" />
                  )
                }
              /> */}

              <Route
                path="/onboarding"
                element={<Welcome setOnboarded={setOnboarded} />}
              />
              <Route
                path="/sign-up"
                element={
                  <SignUp setSignedUp={setSignedUp} setLoggedIn={setLoggedIn} />
                }
              />
              <Route
                path="/login"
                element={<SignIn setLoggedIn={setLoggedIn} />}
              />

              <Route
                path="/home"
                element={
                  loggedIn ? (
                    <HomePage setLoggedIn={setLoggedIn} />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
              <Route
                path="/explore"
                element={<MenuPage setLoggedIn={setLoggedIn} />}
              />
              <Route
                path="/foodDetails"
                element={<FoodDetails setLoggedIn={setLoggedIn} />}
              />
              <Route
                path="/cart"
                element={<Cart setLoggedIn={setLoggedIn} />}
              />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </KitchenProvider>
    </div>
  );
}

export default App;
