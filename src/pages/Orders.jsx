import { Helmet } from "react-helmet-async";

export default function Orders() {
  const orders = [
    { id: "AMR1024", date: "2025-08-18", status: "Delivered", total: 1299 },
    { id: "AMR1025", date: "2025-08-20", status: "Shipped", total: 549 },
  ];

  return (
    <div className="py-10">
      <Helmet>
        <title>Orders</title>
      </Helmet>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold">My Orders</h1>
        <div className="mt-6 divide-y rounded-2xl border bg-white">
          {orders.map((o) => (
            <div
              key={o.id}
              className="p-6 grid gap-2 md:grid-cols-4 md:items-center"
            >
              <div className="font-medium">{o.id}</div>
              <div className="text-sm text-gray-600">{o.date}</div>
              <div className="text-sm">
                <span
                  className={`rounded-full px-3 py-1 text-xs ${
                    o.status === "Delivered"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {o.status}
                </span>
              </div>
              <div className="font-medium text-right md:text-left">
                ₹{o.total}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
