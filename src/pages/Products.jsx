import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import OilImage from "../assets/Oil.png";
import AppComp from "../components/AppComp";

const all = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: `Amrutam Kuntal care Hair Spa | Do-it yourself Hair Treatment ${i + 1}`,
  price: 299 + i * 30,
}));

export default function Products() {
  const [q, setQ] = useState("");
  const items = all.filter((p) =>
    p.name.toLowerCase().includes(q.toLowerCase())
  );
  return (
    <div className="pt-10">
      <Helmet>
        <title>Products</title>
      </Helmet>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">Products</h1>
            <p className="text-sm text-gray-600">
              Browse our bestsellers and new arrivals.
            </p>
          </div>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products..."
            className="rounded-2xl border px-4 py-2 text-sm w-60"
          />
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((p) => (
            <Link
              key={p.id}
              to={`/products/${p.id}`}
              className="rounded-2xl border bg-white p-4 hover:shadow"
            >
              <div className="aspect-square rounded-xl bg-gray-100 grid place-content-center text-4xl">
                <img
                  src={OilImage}
                  alt="Oil"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h3 className="text-center mt-3 font-medium">{p.name}</h3>
              <div className="text-center mt-1 text-sm text-gray-600">
                ₹{p.price}
              </div>
              <button className="mt-3 w-full rounded-xl bg-emerald-600 px-4 py-2 text-sm text-white">
                Add to cart
              </button>
            </Link>
          ))}
        </div>
      </div>
      <AppComp />
    </div>
  );
}
