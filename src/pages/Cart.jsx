import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Cart() {
  return (
    <div className="py-10">
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2 rounded-2xl border bg-white p-6">
          <h2 className="font-semibold">Items</h2>
          <div className="mt-4 divide-y">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center gap-4 py-4">
                <div className="h-30 w-16 rounded-lg bg-gray-100 grid place-content-center">
                  🧴
                </div>
                <div className="flex-1">
                  <div className="font-medium">
                    Amrutam Kuntal care Hair Spa | Do-it yourself Hair Treatment{" "}
                    {i}
                  </div>
                  <div className="text-sm text-gray-600">₹{299 + i * 50}</div>
                </div>
                <button className="text-sm text-red-600">Remove</button>
              </div>
            ))}
          </div>
        </div>
        <aside className="rounded-2xl border bg-white p-6 h-fit">
          <h3 className="font-semibold">Summary</h3>
          <dl className="mt-3 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt>Subtotal</dt>
              <dd>₹898</dd>
            </div>
            <div className="flex justify-between">
              <dt>Shipping</dt>
              <dd>₹49</dd>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2">
              <dt>Total</dt>
              <dd>₹947</dd>
            </div>
          </dl>
          <Link
            to="/checkout"
            className="mt-4 block rounded-xl bg-emerald-600 px-4 py-2 text-center text-white"
          >
            Checkout
          </Link>
        </aside>
      </div>
    </div>
  );
}
