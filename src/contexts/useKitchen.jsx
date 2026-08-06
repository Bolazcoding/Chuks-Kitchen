import { useContext } from "react";
import { KitchenContext } from "./KitchenContextValue";

export function useKitchen() {
  const context = useContext(KitchenContext);
  if (context === undefined) {
    throw new Error("KitchenContext was used outside the KitchenProvider");
  }
  return context;
}
