import { useState } from "react";
import { User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/GradientButton";

const navLinks = [
  "Weight Loss",
  "Strength",
  "Anti-Aging",
  "Hair Growth",
  "Mood",
  "More",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-50">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: logo */}
        <a href="/" className="text-xl font-semibold">
          Logo
        </a>

        {/* Center: nav links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-sm font-medium transition-opacity hover:opacity-60"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: actions */}
        <div className="flex items-center gap-3">
          <Button className="hidden md:inline-flex">Get started</Button>
          <GradientButton innerClassName="px-4 py-2">
            <User className="h-4 w-4" />
            <span>Login</span>
          </GradientButton>
          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-200 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-border lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  onClick={() => setOpen(false)}
                  className="block rounded-full px-4 py-3 text-sm font-medium transition-colors hover:bg-gray-200"
                >
                  {link}
                </a>
              </li>
            ))}
            <li className="mt-2 px-1">
              <Button className="w-full md:hidden">Get started</Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
