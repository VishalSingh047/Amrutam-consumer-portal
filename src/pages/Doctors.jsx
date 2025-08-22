import { Helmet } from "react-helmet-async";
import AppComp from "../components/AppComp";

const doctors = [
  { id: 1, name: "Dr. Ananya Sharma", spec: "Panchakarma", exp: "8 yrs" },
  { id: 2, name: "Dr. Rohan Iyer", spec: "Diet & Lifestyle", exp: "6 yrs" },
  { id: 3, name: "Dr. Meera Nair", spec: "Skin & Hair", exp: "10 yrs" },
];

export default function Doctors() {
  return (
    <div className="pt-10">
      <Helmet>
        <title>Find Doctors</title>
      </Helmet>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
        <h1 className="text-2xl font-semibold">Consult Ayurvedic Doctors</h1>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {doctors.map((d) => (
            <div key={d.id} className="rounded-2xl border bg-white p-6">
              <div className="h-30 w-30 rounded-full bg-emerald-100 grid place-content-center text-2xl">
                🩺
              </div>
              <h3 className="mt-3 font-medium">{d.name}</h3>
              <div className="text-sm text-gray-600">{d.spec}</div>
              <div className="text-xs text-gray-500">{d.exp} experience</div>
              <button className="mt-4 rounded-xl bg-emerald-600 px-4 py-2 text-sm text-white">
                Book Consultation
              </button>
            </div>
          ))}
        </div>
      </div>
      <AppComp />
    </div>
  );
}
