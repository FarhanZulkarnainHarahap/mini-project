import Link from "next/link";
import { LiaOpencart } from "react-icons/lia";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CartHeaderPopUp() {
  const [showCartPopup, setShowCartPopup] = useState(false);
  const { cartItems, clearCart, removeFromCart } = useCart();
  return (
    <section>
      <button>
        <Link href="#cart">
          <label>
            <span
              className="flex items-center gap-1 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setShowCartPopup(!showCartPopup);
              }}
            >
              <LiaOpencart className="text-lg" />
            </span>
          </label>
        </Link>

        {showCartPopup && (
          <div className="absolute right-4 top-[80px] md:top-[70px] bg-white text-black p-4 rounded-lg shadow-xl w-[280px] z-50">
            <h3 className="text-lg font-bold mb-2">Your Cart</h3>
            {cartItems.length === 0 ? (
              <p className="text-sm text-gray-700">Cart is currently empty.</p>
            ) : (
              <ul className="text-sm max-h-[200px] overflow-y-auto">
                {cartItems.length === 0 ? (
                  <p className="text-sm text-gray-700">
                    Cart is currently empty.
                  </p>
                ) : (
                  <ul className="text-sm max-h-[200px] overflow-y-auto space-y-2">
                    {cartItems.map((item) => (
                      <li
                        key={item.id}
                        className="flex justify-between items-center"
                      >
                        <div>
                          {item.title} x {item.quantity}
                          <br />
                          <span className="text-xs text-gray-600">
                            Rp {(item.quantity * item.price).toLocaleString()}
                          </span>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 text-xs hover:underline"
                        >
                          Hapus
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </ul>
            )}
            <div className="grid grid-cols-2 place-items-center mt-4">
              <button
                onClick={() => setShowCartPopup(false)}
                className="mt-3 bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 transition"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert("Pembayaran belum diimplementasikan.");
                  clearCart();
                  setShowCartPopup(false);
                }}
                className="mt-3 bg-green-700 text-white px-3 py-1 rounded hover:bg-green-800 transition"
              >
                PAY
              </button>
            </div>
          </div>
        )}
      </button>
    </section>
  );
}
