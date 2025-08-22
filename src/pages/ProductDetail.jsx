import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import OilImage from "../assets/Oil.png";

const products = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  price: `${499 + i * 50} | 200 ml`,
  rating: 4 + (i % 2 ? 0.5 : 0),
}));

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="py-10 text-center">Product not found</div>;
  }

  return (
    <div className="py-10">
      <Helmet>
        <title>Product #{id}</title>
      </Helmet>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2">
        <div className="rounded-3xl border bg-white p-6">
          <div className="aspect-square rounded-2xl bg-gray-100 grid place-content-center text-6xl">
            <img
              src={OilImage}
              alt="Oil"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">
            Amrutam Kuntal Care Hair Spa | Do-it-yourself Hair Treatment #{id}
          </h1>
          <p className="mt-2 text-gray-600">
            A nourishing blend of herbs and oils to soothe and rejuvenate.
          </p>
          <div className="mt-4 text-xl font-semibold">{product.price}</div>
          <div className="mt-2 text-gray-500">⭐ {product.rating} / 5</div>
          <div className="mt-6 flex gap-3">
            <button className="rounded-2xl bg-emerald-600 px-5 py-3 text-white font-medium">
              Add to Cart
            </button>
            <Link
              to="/checkout"
              className="rounded-2xl border px-5 py-3 font-medium hover:bg-gray-50"
            >
              Buy Now
            </Link>
          </div>
          <div className="mt-8">
            <h3 className="font-semibold">Benefits</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Supports joint health</li>
              <li>Improves circulation</li>
              <li>Promotes relaxation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
