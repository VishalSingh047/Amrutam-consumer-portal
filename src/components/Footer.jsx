import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-yellow-50 border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-10 md:grid-cols-3">
        {/* this is the Left */}
        <div>
          <h4 className="font-semibold text-green-900">Get in touch</h4>
          <p className="mt-2 text-sm text-gray-700">support@amrutam.global</p>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">
            Amrutam Pharmaceuticals Pvt Ltd.,
            <br />
            chitragupt ganj, Nai Sadak, Lashkar,
            <br />
            Gwalior - 474001
          </p>
          <p className="mt-2 text-sm text-gray-700">+91 9713171999</p>

          {/* Icons */}
          <div className="mt-4 flex gap-3">
            <a
              href="#"
              className="h-9 w-9 flex items-center justify-center rounded-full bg-green-700 text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="h-9 w-9 flex items-center justify-center rounded-full bg-green-700 text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="h-9 w-9 flex items-center justify-center rounded-full bg-green-700 text-white"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="h-9 w-9 flex items-center justify-center rounded-full bg-green-700 text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="h-9 w-9 flex items-center justify-center rounded-full bg-green-700 text-white"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="h-9 w-9 flex items-center justify-center rounded-full bg-green-700 text-white"
            >
              <FaPinterestP />
            </a>
          </div>
        </div>

        {/* this is the center part */}
        <div>
          <h4 className="font-semibold text-green-900">Information</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy for Mobile Apps
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shipping, return and cancellation Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                International Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                For Businesses, Hotels, and Resorts
              </a>
            </li>
          </ul>
        </div>

        {/* This is teh Right */}
        <div>
          <h4 className="font-semibold text-green-900">
            Subscribe to our Newsletter and join Amrutam Family today!
          </h4>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 rounded-l-full border px-4 py-2 text-sm focus:outline-none"
            />
            <button className="rounded-r-full bg-black px-5 py-2 text-sm font-medium text-white">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
