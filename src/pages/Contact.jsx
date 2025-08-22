import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <div className="py-10">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 rounded-2xl border bg-white p-6">
        <h1 className="text-2xl font-semibold">Contact Us</h1>
        <p className="mt-2 text-sm text-gray-600">
          We'd love to hear from you. Fill the form and our team will get back
          shortly.
        </p>
        <form className="mt-6 grid gap-4">
          <input
            className="rounded-xl border px-3 py-2 text-sm"
            placeholder="Your name"
          />
          <input
            className="rounded-xl border px-3 py-2 text-sm"
            placeholder="Email"
          />
          <textarea
            className="rounded-xl border px-3 py-2 text-sm"
            placeholder="Message"
            rows={5}
          />
          <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm text-white w-fit">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
