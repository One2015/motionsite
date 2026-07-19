import { User } from "lucide-react";
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
        </div>
      </nav>
    </header>
  );
}
