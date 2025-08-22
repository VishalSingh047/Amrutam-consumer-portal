import { Helmet } from "react-helmet-async";
import AppComp from "../components/AppComp";

export default function Checkout() {
  return (
    <div className="pt-10">
      <Helmet>
        <title>Checkout</title>
      </Helmet>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-3 pb-10">
        <form className="md:col-span-2 rounded-2xl border bg-white p-6 grid gap-4">
          <h2 className="font-semibold">Shipping Details</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              className="rounded-xl border px-3 py-2 text-sm"
              placeholder="Full name"
            />
            <input
              className="rounded-xl border px-3 py-2 text-sm"
              placeholder="Phone"
            />
            <input
              className="rounded-xl border px-3 py-2 text-sm sm:col-span-2"
              placeholder="Address line 1"
            />
            <input
              className="rounded-xl border px-3 py-2 text-sm sm:col-span-2"
              placeholder="Address line 2"
            />
            <input
              className="rounded-xl border px-3 py-2 text-sm"
              placeholder="City"
            />
            <input
              className="rounded-xl border px-3 py-2 text-sm"
              placeholder="Pincode"
            />
          </div>
          <h2 className="mt-6 font-semibold">Payment</h2>
          <div className="grid gap-3">
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="pay" defaultChecked /> UPI
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="pay" /> Card
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="pay" /> Cash on Delivery
            </label>
          </div>
          <button className="mt-4 rounded-xl bg-emerald-600 px-4 py-2 text-sm text-white w-fit">
            Place Order
          </button>
        </form>
        <aside className="rounded-2xl border bg-white p-6 h-fit">
          <h3 className="font-semibold">Order Summary</h3>
          <ul className="mt-3 space-y-3 text-sm">
            <li className="flex justify-between">
              <span>Herbal Oil</span>
              <span>₹499</span>
            </li>
            <li className="flex justify-between">
              <span>Shipping</span>
              <span>₹49</span>
            </li>
            <li className="flex justify-between font-semibold border-t pt-2">
              <span>Total</span>
              <span>₹548</span>
            </li>
          </ul>
        </aside>
      </div>
      <AppComp />
    </div>
  );
}
