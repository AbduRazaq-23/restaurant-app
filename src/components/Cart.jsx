import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="fixed bottom-5 right-5 bg-white p-4 shadow-xl rounded-xl">
      <h3 className="font-bold">Cart ({cart.length})</h3>
    </div>
  );
}
