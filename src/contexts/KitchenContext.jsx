import { useMemo, useState } from "react";
import { KitchenContext } from "./KitchenContextValue";

function KitchenProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((prev) => prev.id === item.id);
      if (existingItem) {
        return prevItems.map((prev) =>
          prev.id === item.id ? { ...prev, quantity: prev.quantity + 1 } : prev,
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (itemId, delta) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === itemId
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = useMemo(
    () => ({ cartItems, addToCart, updateQuantity, removeFromCart, clearCart }),
    [cartItems],
  );

  return (
    <KitchenContext.Provider value={value}>{children}</KitchenContext.Provider>
  );
}

export default KitchenProvider;
