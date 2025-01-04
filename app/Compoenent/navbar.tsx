"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="sticky top-0 z-10 h-[70px] bg-[#494226] flex items-center justify-center ">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-6 py-4 bg-black/70 shadow-md fixed top-0">
        <Link href="/" className="text-xl font-bold text-white">
          DataFetchers
        </Link>
        <div className="hidden md:flex gap-6">
          <Link
            href="/client"
            className="text-white hover:text-blue-400 transition-colors"
          >
            Client
          </Link>
          <Link
            href="/server-data-fetch"
            className="text-white hover:text-blue-400 transition-colors"
          >
            Server
          </Link>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={24} />
          </button>
          {menuOpen && (
            <div className="absolute top-14 left-0 w-full h-24 bg-white flex flex-col justify-center items-center space-y-4 rounded-b-lg shadow-lg">
              <Link
              onClick={()=>{setMenuOpen(!menuOpen)}}
                href="/client"
                className="text-black text-lg hover:text-blue-400 transition-colors"
              >
                Client
              </Link>
              <Link
              onClick={()=>{setMenuOpen(!menuOpen)}}
                href="/server-data-fetch"
                className="text-black text-lg hover:text-blue-400 transition-colors"
              >
                Server
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
