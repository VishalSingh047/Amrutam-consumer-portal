import { Helmet } from "react-helmet-async";

export default function Profile() {
  return (
    <div className="py-10">
      <Helmet>
        <title>My Profile</title>
      </Helmet>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-3">
        <aside className="rounded-2xl border bg-white p-6 h-fit">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 grid place-content-center rounded-full bg-emerald-100">
              🧑🏻
            </div>
            <div>
              <div className="font-medium">Vishal</div>
              <div className="text-xs text-gray-500">vishal@example.com</div>
            </div>
          </div>
          <nav className="mt-6 grid gap-2 text-sm">
            {["Account", "Addresses", "Payments", "Preferences"].map((i) => (
              <button
                key={i}
                className="rounded-xl border px-3 py-2 text-left hover:bg-gray-50"
              >
                {i}
              </button>
            ))}
          </nav>
        </aside>
        <section className="md:col-span-2 rounded-2xl border bg-white p-6">
          <h2 className="font-semibold">Account</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <input
              className="rounded-xl border px-3 py-2 text-sm"
              defaultValue="Vishal"
            />
            <input
              className="rounded-xl border px-3 py-2 text-sm"
              defaultValue="vishal@example.com"
            />
            <input
              className="rounded-xl border px-3 py-2 text-sm sm:col-span-2"
              placeholder="Phone"
            />
          </div>
          <button className="mt-4 rounded-xl bg-emerald-600 px-4 py-2 text-sm text-white">
            Save changes
          </button>
        </section>
      </div>
    </div>
  );
}
