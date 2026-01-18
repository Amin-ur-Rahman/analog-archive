"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Archive", href: "/items" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy", href: "/privacy" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { data: session, status } = useSession();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tighter">
            ANALOG <span className="text-primary">ARCHIVE</span>
          </Link>

          {/* Desktop Links & Auth */}
          <div className="hidden md:flex items-center gap-8">
            {session && (
              <Link
                href="/items/add"
                className="block py-2 text-base text-sm font-medium"
              >
                Add New Item
              </Link>
            )}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center gap-4 pl-4 border-l border-border">
              <ThemeToggle />

              {/* 3. Dynamic Auth Section */}
              {status === "loading" ? (
                <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />
              ) : session ? (
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => signOut()}
                    className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                  >
                    Logout
                  </button>
                  <div className="h-8 w-8 rounded-full overflow-hidden border border-border">
                    {session.user?.image ? (
                      <img
                        src={session.user.image}
                        alt="Profile"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                        {session.user?.name?.charAt(0) || "U"}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="text-xs font-bold uppercase tracking-widest px-4 py-2 bg-foreground text-background hover:opacity-90 transition-all rounded"
                >
                  Login
                </Link>
              )}
            </div>
          </div>

          {/* Mobile hamburger logic... */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            {session && (
              <div className="h-8 w-8 rounded-full overflow-hidden border border-border">
                <img
                  src={session.user?.image || "/default-avatar.png"}
                  alt="User"
                />
              </div>
            )}
            <button
              onClick={toggleMenu}
              className="p-2 text-foreground focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-border mt-2">
            {session && (
              <Link className="block py-2 text-base font-medium">
                Add New Item
              </Link>
            )}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-base font-medium ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            {!session ? (
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-base font-bold text-primary"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={() => signOut()}
                className="block py-2 text-base font-bold text-red-500 uppercase tracking-widest"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
