import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import OilImage from "../assets/Oil.png";
import SkinImage from "../assets/Skin.png";
import MaltImage from "../assets/Malt.png";
import AppComp from "../components/AppComp";

const features = [
  {
    title: "Clinically Curated",
    desc: "Formulations based on classical Ayurvedic texts.",
    icon: "🌿",
  },
  {
    title: "Certified Quality",
    desc: "GMP-certified manufacturing & rigorous testing.",
    icon: "✅",
  },
  {
    title: "Doctor Guidance",
    desc: "Consult with certified Ayurvedic practitioners.",
    icon: "🩺",
  },
];

const products = [
  {
    name: `Amrutam Kuntal care Hair Spa | Do-it yourself Hair Treatment`,
    image: OilImage,
  },
  {
    name: `Amrutam Face Clean-Up | Do-It-Yourself Face and Skin Repair`,
    image: SkinImage,
  },
  {
    name: `Ayurvedic Solution for Women Above 40 Year | Nari 40+ Malt`,
    image: MaltImage,
  },
];

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Amrutam Consumer Portal - Home</title>
        <meta
          name="description"
          content="Discover Ayurvedic solutions with Amrutam Consumer Portal."
        />
      </Helmet>

      {/* Hero  Sec */}
      <section className="bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Your Daily Ritual of{" "}
              <span className="text-emerald-700">Wellness</span>
            </h1>
            <p className="mt-4 text-gray-600 max-w-prose">
              Shop authentic Ayurvedic products and book doctor
              consultations—from one seamless portal.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                to="/products"
                className="rounded-2xl bg-emerald-600 px-5 py-3 text-white font-medium"
              >
                Shop Products
              </Link>
              <Link
                to="/doctors"
                className="rounded-2xl border px-5 py-3 font-medium hover:bg-gray-50"
              >
                Find Doctors
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="aspect-video w-full rounded-2xl bg-emerald-100 grid place-content-center text-6xl">
              🌿
            </div>
            <p className="mt-3 text-sm text-gray-500 text-center">
              Pure ingredients. Transparent sourcing.
            </p>
          </div>
        </div>
      </section>

      {/* Features Sec */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-3 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Summer Collection 1 */}
      <section className="py-12 bg-yellow-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Summer Collection</h2>
            <Link
              to="/products"
              className="text-sm text-emerald-700 hover:underline"
            >
              View all
            </Link>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {products.map((p, i) => (
              <Link
                key={p.id}
                to={`/products/${p.id}`}
                className="rounded-2xl border p-4 hover:shadow-md bg-white"
              >
                <div className="aspect-[4/3] rounded-xl bg-gray-100 grid place-content-center text-4xl">
                  <img
                    src={p.image}
                    alt="Oil"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-center mt-3 font-medium">{p.name}</h3>
                <div className="text-center mt-1 text-sm text-gray-600">
                  ₹{499 + i * 50}| 200 ml
                </div>
                <div className="text-center mt-2 text-xs">
                  ⭐⭐⭐⭐ {4 + (i % 2 ? 0.5 : 0)} / 5
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Summer Collection 2 */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Summer Collection</h2>
            <Link
              to="/products"
              className="text-sm text-emerald-700 hover:underline"
            >
              View all
            </Link>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {products.map((p, i) => (
              <Link
                key={p.id}
                to={`/products/${p.id}`}
                className="rounded-2xl border p-4 hover:shadow-md bg-white"
              >
                <div className="aspect-[4/3] rounded-xl bg-gray-100 grid place-content-center text-4xl">
                  <img
                    src={p.image}
                    alt="Oil"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-center mt-3 font-medium">{p.name}</h3>
                <div className="text-center mt-1 text-sm text-gray-600">
                  ₹{499 + i * 50}| 200 ml
                </div>
                <div className="text-center mt-2 text-xs">
                  ⭐⭐⭐⭐ {4 + (i % 2 ? 0.5 : 0)} / 5
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* App Sec */}
      <AppComp />
    </div>
  );
}
