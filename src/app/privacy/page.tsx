export const metadata = {
  title: "Privacy - STRIVIO",
};

import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="font-sans text-center space-y-4 px-6">
        <h1 className="text-xl font-medium">Privacy Policy</h1>
        <p className="text-sm text-neutral-600">We respect your privacy. Details coming soon.</p>
        <Link href="/" className="text-sm underline decoration-neutral-300 hover:decoration-neutral-500">Back</Link>
      </div>
    </main>
  );
}
