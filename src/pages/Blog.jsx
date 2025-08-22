import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import OilImage from "../assets/Oil.png";
import AppComp from "../components/AppComp";

const posts = [
  {
    id: 1,
    title: "Ayurvedic Morning Routine",
    excerpt: "Start your day the holistic way...",
    date: "Aug 18, 2025",
  },
  {
    id: 2,
    title: "Foods to Balance Vata",
    excerpt: "Warm, grounding meals to pacify Vata...",
    date: "Aug 19, 2025",
  },
  {
    id: 3,
    title: "Herbs for Everyday Immunity",
    excerpt: "Build resilience with classics like Tulsi...",
    date: "Aug 21, 2025",
  },
];

export default function Blog() {
  return (
    <div className="pt-10">
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
        <h1 className="text-2xl font-semibold">Insights & Guides</h1>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.id} className="rounded-2xl border bg-white p-6">
              <div className="aspect-video rounded-xl bg-gray-100 grid place-content-center text-3xl">
                <img
                  src={OilImage}
                  alt="Oil"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h3 className="mt-3 font-medium">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{p.excerpt}</p>
              <div className="mt-2 text-xs text-gray-500">{p.date}</div>
              <Link
                to="#"
                className="mt-3 inline-block text-sm text-emerald-700 hover:underline"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      </div>

      <AppComp />
    </div>
  );
}
