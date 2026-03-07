"use client";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800 dark:bg-linear-to-b dark:from-dark-secondary dark:to-dark-base dark:border-dark-tertiary"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-gray-800 dark:border-dark-tertiary">
          {/* Brand */}
          <div className="space-y-4">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Image
                src="/image/IntelliSched_Logo.png"
                width={50}
                height={50}
                alt="IntelliSched Logo"
              />
              <span className="text-xl font-bold text-primary">
                IntelliSched
              </span>
            </div>

            <p className="text-gray-400">
              Empowering Cambodian students with AI-powered exam preparation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#features" className="hover:text-primary transition">
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-primary transition"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-primary transition">
                  Impact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61586629426973"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.009 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.017 1.792-4.687 4.533-4.687 1.312 0 2.686.235 2.686.235v2.961h-1.514c-1.492 0-1.956.928-1.956 1.88v2.254h3.328l-.532 3.49h-2.796V24C19.612 23.082 24 18.092 24 12.073z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2H21.5l-7.114 8.131L22.75 22h-6.55l-5.13-6.89L5.04 22H1.78l7.61-8.698L1.25 2h6.71l4.636 6.264L18.244 2zm-1.143 18h1.804L6.977 3.894H5.041L17.101 20z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5z"></path>
                  <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8z"></path>
                  <circle cx="17.5" cy="6.5" r="1.2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400">
          <p>
            &copy; {currentYear} BACII AI Self-Study Scheduler. All rights
            reserved. Prepared by Team Chakkho.
          </p>
        </div>
      </div>
    </footer>
  );
}
