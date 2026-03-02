import { createContext } from "react";

const KitchenContext = createContext();

function KitchenProvider({ children }) {
  return (
    <KitchenContext.Provider value={{}}>{children}</KitchenContext.Provider>
  );
}

// function useKitchen() {
//   const context = useContext(KitchenContext);
//   if (context === undefined)
//     throw new Error("KitchenContext was used outside the KitchenProvider");
//   return context;
// }

export { KitchenProvider };
