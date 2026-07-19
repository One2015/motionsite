import { ArrowRight } from "lucide-react";

const linkColumns = [
  {
    title: "Popular",
    links: ["Weight Loss", "Strength", "Anti-Aging", "Hair Growth", "Mood"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Blog", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Telehealth Consent", "Cookie Policy"],
  },
];

/** Inline social SVGs so the footer has no external icon dependency. */
const socials: { name: string; path: string }[] = [
  {
    name: "Facebook",
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z",
  },
  {
    name: "Instagram",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.24a6.6 6.6 0 1 0 0 13.2 6.6 6.6 0 0 0 0-13.2Zm0 10.89a4.29 4.29 0 1 1 0-8.58 4.29 4.29 0 0 1 0 8.58Zm8.4-11.15a1.54 1.54 0 1 1-3.08 0 1.54 1.54 0 0 1 3.08 0Z",
  },
  {
    name: "X",
    path: "M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.22-6.82-5.96 6.82H1.68l7.73-8.83L1.25 2.25h6.82l4.71 6.23 5.46-6.23Zm-1.16 17.52h1.83L7.01 4.13H5.04l12.04 15.64Z",
  },
  {
    name: "TikTok",
    path: "M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-3.2v12.86a2.6 2.6 0 0 1-2.6 2.52 2.6 2.6 0 1 1 .74-5.08V9.99a5.77 5.77 0 0 0-.74-.05A5.77 5.77 0 1 0 15.5 15.7V9.15a7.44 7.44 0 0 0 4.35 1.39V7.34a4.27 4.27 0 0 1-3.25-1.52Z",
  },
  {
    name: "LinkedIn",
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z",
  },
  {
    name: "YouTube",
    path: "M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.24 3.6-6.24 3.6Z",
  },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: logo + signup */}
          <div className="max-w-md">
            <p className="text-2xl font-semibold">Logo</p>
            <p className="mt-4 text-zinc-400">
              Join our newsletter for wellness tips, product updates, and member
              offers.
            </p>
            <form
              className="mt-6 flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-full border border-zinc-700 bg-zinc-800 px-5 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-zinc-500 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-zinc-900 transition hover:bg-zinc-200"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
            <p className="mt-4 text-xs text-zinc-500">
              By subscribing you agree to our Privacy Policy and consent to
              receive updates.
            </p>
          </div>

          {/* Right: link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {linkColumns.map((col) => (
              <div key={col.title}>
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
                  {col.title}
                </p>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-zinc-300 transition-colors hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-12 border-zinc-800" />

        {/* Socials + badges */}
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="flex flex-wrap items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href="#"
                aria-label={s.name}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 transition hover:bg-zinc-700"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-white"
                  aria-hidden="true"
                >
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 items-center justify-center rounded-lg border border-zinc-700 px-4 text-xs font-medium text-zinc-300">
              LegitScript
              <br />
              CERTIFIED
            </div>
            <div className="flex h-12 items-center justify-center rounded-lg border border-zinc-700 px-4 text-center text-xs font-medium text-zinc-300">
              Compounded
              <br />
              Pharmacy
            </div>
          </div>
        </div>

        <p className="mt-10 text-xs leading-relaxed text-zinc-500">
          Compounded medications are not FDA-approved. They are prepared by a
          licensed pharmacy for an individual patient based on a valid
          prescription. The content on this site is for informational purposes
          only and is not a substitute for professional medical advice. Always
          consult your healthcare provider. Results are not guaranteed and vary
          by individual. © {new Date().getFullYear()} Logo Health, Inc. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
