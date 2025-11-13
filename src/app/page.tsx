import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="font-sans text-center space-y-6 px-6">
        <div className="mx-auto h-12 w-12 grid place-items-center rounded-md border-2 border-black">
          <span className="text-xl font-extrabold leading-none">S</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">STRIVIO</h1>
        <p className="text-sm text-neutral-600">Multiple SaaS products under one ecosystem.</p>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="https://yt-copilot.strivio.world" className="underline decoration-neutral-300 hover:decoration-neutral-500">
              yt-copilot.strivio.world
            </a>
          </li>
          <li>
            <a href="https://writeflow.strivio.world" className="underline decoration-neutral-300 hover:decoration-neutral-500">
              writeflow.strivio.world
            </a>
          </li>
        </ul>
        <div className="flex items-center justify-center gap-4 text-sm">
          <a href="https://www.linkedin.com/company/strivio" className="underline decoration-neutral-300 hover:decoration-neutral-500">
            LinkedIn
          </a>
          <span>•</span>
          <Link href="/privacy" className="underline decoration-neutral-300 hover:decoration-neutral-500">
            Privacy
          </Link>
        </div>
        <div className="text-xs text-neutral-500">©2025 Strivio.</div>
      </div>
    </main>
  );
}
