import React from "react";

const appFeatures = [
  { title: "Access To Prescriptions", icon: "📄" },
  { title: "Track Health Efficiently", icon: "📊" },
  { title: "Direct Chat With Doctors", icon: "💬" },
  { title: "In-App Reminders For Consultations", icon: "⏰" },
];
function AppComp() {
  return (
    <section className="py-16 bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left side */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-green-900">
            Download Amrutam Ayurveda App Now
          </h2>
          <p className="mt-4 text-gray-700 max-w-prose">
            The Amrutam Ayurveda App is your one-stop app for all things
            Ayurvedic! Apart from mimicking the website, the app has added
            benefits
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {appFeatures.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border bg-white p-4 text-sm flex items-center gap-3"
              >
                <span className="text-lg">{f.icon}</span>
                <span className="text-gray-700">{f.title}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-18"
              />
            </a>
            <a href="#">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-18 px-11"
              />
            </a>
          </div>
        </div>

        {/* Right side */}
        <div className="relative flex justify-center">
          <div className="ml-20 w-64 h-[480px] bg-yellow-100 rounded-3xl shadow-lg overflow-hidden">
            <div className="h-full w-full grid place-content-center text-gray-500">
              📱 App Screenshot
            </div>
          </div>

          <div className="absolute top-10 left-1 bg-green-900 text-white px-4 py-2 rounded-lg text-xs shadow-md">
            <div className="font-semibold">Engagement Time</div>
            <div>6m 33s</div>
          </div>

          <div className="absolute bottom-10 left-8 bg-yellow-100 px-4 py-2 rounded-lg text-xs shadow-md flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-yellow-300 grid place-content-center">
              👩
            </span>
            <div>
              <div className="font-semibold">10K+</div>
              <div className="text-gray-600">Downloads</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppComp;
