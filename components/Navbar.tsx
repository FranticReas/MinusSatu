import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";

const navLinks = [
  { label: "Help", href: "#help", filled: true },
  { label: "About Us", href: "#about", filled: true },
  { label: "Projects", href: "#projects", filled: false },
];

const themeChangeEvent = "theme-change";

function subscribeToTheme(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(themeChangeEvent, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(themeChangeEvent, callback);
  };
}

function getThemeSnapshot() {
  return window.localStorage.getItem("theme") === "light";
}

function getServerThemeSnapshot() {
  return false;
}

export default function Navbar() {
  const isLight = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  useEffect(() => {
    document.documentElement.dataset.theme = isLight ? "light" : "dark";
  }, [isLight]);

  function toggleTheme() {
    const nextIsLight = !isLight;
    document.documentElement.dataset.theme = nextIsLight ? "light" : "dark";
    window.localStorage.setItem("theme", nextIsLight ? "light" : "dark");
    window.dispatchEvent(new Event(themeChangeEvent));
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="navbar-logo-shell grid h-9 w-9 place-items-center rounded-lg">
            <svg viewBox="0 0 24 24" className="navbar-logo h-6 w-6" aria-hidden="true">
              <path
                d="M12 2 3 7v10l9 5 9-5V7l-9-5Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
              <path d="M3 7l9 5 9-5" fill="none" stroke="currentColor" strokeWidth="1.4" />
              <circle cx="18" cy="5" r="1.6" fill="#e0a01f" />
              <circle cx="21" cy="8" r="1" fill="#3b6cf6" />
            </svg>
          </span>
          <span className="text-lg font-semibold tracking-tight text-white">
            Minus Satu
          </span>
        </Link>

        <ul className="hidden items-center gap-3 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={
                  link.filled
                    ? "rounded-pill bg-accent px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
                    : "rounded-pill border border-border px-5 py-2 text-sm font-semibold text-white/90 transition-colors hover:border-white/40"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isLight ? "Aktifkan mode gelap" : "Aktifkan mode terang"}
            title={isLight ? "Mode gelap" : "Mode terang"}
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-white/80 transition-colors hover:border-accent hover:text-accent"
          >
            {isLight ? (
              <Moon className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Sun className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
          <Link
            href="#login"
            className="hidden text-sm font-semibold text-accent hover:text-accent-hover sm:inline"
          >
            Login
          </Link>
          <Link
            href="#signup"
            className="rounded-pill bg-gold px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-gold-hover"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}
