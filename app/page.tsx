import Logo from "@/components/Logo";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="text-center px-4">
        {/* Logo */}
        <div className="mb-8">
          <Logo />
        </div>
        
        {/* Company Name */}
        <h1 className="text-4xl font-bold mb-4">STRIVIO</h1>
        
        {/* Tagline */}
        <p className="text-lg mb-8 text-gray-700">
          Multiple SaaS products under one ecosystem.
        </p>
        
        {/* Product Links */}
        <div className="mb-8 space-y-2">
          <div>
            <a 
              href="https://yt-copilot.strivio.world" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 underline"
            >
              yt-copilot.strivio.world
            </a>
          </div>
          <div>
            <a 
              href="https://writeflow.strivio.world" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 underline"
            >
              writeflow.strivio.world
            </a>
          </div>
        </div>
        
        {/* Footer Links */}
        <div className="flex justify-center items-center gap-4 text-sm mb-4">
          <a 
            href="https://www.linkedin.com/company/strivio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black hover:text-gray-600 underline"
          >
            LinkedIn
          </a>
          <span className="text-gray-400">|</span>
          <a 
            href="/privacy" 
            className="text-black hover:text-gray-600 underline"
          >
            Privacy
          </a>
        </div>
        
        {/* Copyright */}
        <p className="text-sm text-gray-600">©2025 Strivio</p>
      </div>
    </main>
  );
}
