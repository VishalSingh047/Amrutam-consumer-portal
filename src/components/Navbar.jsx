import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItem =
    "px-3 py-2 rounded-xl text-sm font-medium transition hover:bg-gray-100";
  const active = "bg-gray-900 text-white hover:bg-gray-900";

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold">
              A
            </span>
            <span className="text-lg font-semibold">Amrutam</span>
          </Link>

          <nav className="hidden md:flex items-center lg:gap-10">
            <NavLink
              end
              to="/"
              className={({ isActive }) =>
                `${navItem} ${isActive ? active : "text-gray-700"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${navItem} ${isActive ? active : "text-gray-700"}`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/doctors"
              className={({ isActive }) =>
                `${navItem} ${isActive ? active : "text-gray-700"}`
              }
            >
              Doctors
            </NavLink>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                `${navItem} ${isActive ? active : "text-gray-700"}`
              }
            >
              Orders
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `${navItem} ${isActive ? active : "text-gray-700"}`
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${navItem} ${isActive ? active : "text-gray-700"}`
              }
            >
              Contact
            </NavLink>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/cart"
              className="relative rounded-xl px-3 py-2 text-sm bg-emerald-50 hover:bg-emerald-100"
            >
              Cart
              <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-xs px-1">
                2
              </span>
            </Link>
            <Link
              to="/profile"
              className="hidden md:inline-flex rounded-xl border px-3 py-2 text-sm hover:bg-gray-50"
            >
              Profile
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden rounded-xl border px-3 py-2 text-sm"
            >
              Menu
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {[
                ["Home", "/"],
                ["Products", "/products"],
                ["Doctors", "/doctors"],
                ["Orders", "/orders"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <NavLink
                  key={href}
                  to={href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-3 py-2 text-sm ${
                      isActive ? "bg-gray-900 text-white" : "bg-gray-100"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
