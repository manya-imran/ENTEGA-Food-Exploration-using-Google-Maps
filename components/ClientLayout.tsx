// app/components/ClientLayout.tsx (client-side)
"use client";

import React from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-sm p-4 flex justify-between items-center">
        <div className="font-bold text-xl text-black">ENATEGA</div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-700">Login</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Sign up
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer (Optional) */}
      <footer className="bg-gray-100 text-center p-4">
        <p className="text-sm text-gray-600">
          &copy; 2024 ENATEGA. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
