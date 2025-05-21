"use client";
import { useState } from "react";
import { coupons } from "@/app/data/coupon";

export default function DiscountSection() {
  const [claimed, setClaimed] = useState<string[]>([]);

  const handleClaim = (id: string) => {
    setClaimed([...claimed, id]);
  };
  return (
    <div className="w-[80%] h-full px-25 grid lg:grid-rows-[auto_1fr] place-items-center bg-gray-400 pt-5 p-5">
      <section className="text-center mb-10 ">
        <h1 className="text-4xl font-bold mb-3">
          🎁 Klaim Kupon Diskon Spesial!
        </h1>
        <p className="text-lg text-gray-600">
          Temukan berbagai penawaran menarik dan klaim kuponmu sekarang!
        </p>
      </section>

      {/* Section Kupon */}
      <div className="">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coupons.map((coupon) => {
            const isClaimed =
              claimed.includes(coupon.id) || coupon.status === "Sudah Diklaim";

            return (
              <div
                key={coupon.id}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 flex flex-col justify-between border"
              >
                <div>
                  <h2 className="text-xl font-semibold mb-2">{coupon.title}</h2>
                  <p className="text-gray-600 mb-4">{coupon.description}</p>
                  <p className="text-sm text-blue-600 font-mono">
                    Kode: {coupon.code}
                  </p>
                </div>

                <button
                  className={`mt-6 py-2 px-4 rounded-lg text-white transition duration-300 ${
                    isClaimed
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                  onClick={() => handleClaim(coupon.id)}
                  disabled={isClaimed}
                >
                  {isClaimed ? "Sudah Diklaim" : "Klaim Kupon"}
                </button>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
