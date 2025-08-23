import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen text-foreground">
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-black/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-light text-white">
            obscura
          </Link>
          <nav className="flex items-center space-x-8">
            <Link href="/about" className="text-white/80 hover:text-white transition-colors text-sm">
              About
            </Link>
            <Link href="#tools" className="text-white/80 hover:text-white transition-colors text-sm">
              Tools
            </Link>
            <Link href="#community" className="text-white/80 hover:text-white transition-colors text-sm">
              Community
            </Link>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 rounded-full px-4 py-2 text-sm bg-transparent"
            >
              Donate
            </Button>
          </nav>
        </div>
      </header>

      <section className="flex items-center justify-center min-h-[70vh] px-4 pt-20">
        <div className="text-center max-w-4xl">
          <h1 className="hero-title text-8xl md:text-9xl mb-8 leading-tight text-white">obscura</h1>
          
          {/* Social Media Icons Below Logo */}
          <div className="flex items-center justify-center space-x-8 mb-12">
            {/* Discord Icon */}
            <a 
              href="#" 
              className="group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#5865F2] hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-[#5865F2]/25"
            >
              <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>

            {/* Twitter/X Icon */}
            <a 
              href="#" 
              className="group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-black/25"
            >
              <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* GitHub Icon */}
            <a 
              href="#" 
              className="group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#333] hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-[#333]/25"
            >
              <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* YouTube Icon */}
            <a 
              href="#" 
              className="group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#FF0000] hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF0000]/25"
            >
              <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-2 font-light">A community fighting for digital privacy.</p>
          <p className="text-lg text-white/70 mb-12 font-light">Privacy Advocacy • Digital Rights • Community Action</p>
          <Button
            size="lg"
            className="bg-[#007AFF] hover:bg-[#0056CC] text-white rounded-full px-12 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all mb-8"
          >
            Join Our Movement
          </Button>

          <Link href="#versions" className="text-white/60 hover:text-white text-sm transition-colors">
            View Recent Updates
          </Link>
        </div>
      </section>

      <section id="tools" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 rounded-lg text-center">
              <h3 className="text-xl font-medium text-white mb-3">Secure</h3>
              <p className="text-white/70 text-sm">
                Military-grade encryption protects your data from surveillance and tracking.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg text-center">
              <h3 className="text-xl font-medium text-white mb-3">Private</h3>
              <p className="text-white/70 text-sm">
                Zero-log policy ensures your online activities remain completely anonymous.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg text-center">
              <h3 className="text-xl font-medium text-white mb-3">Free</h3>
              <p className="text-white/70 text-sm">
                Open-source tools available to everyone fighting for digital rights.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="versions" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-light text-white mb-8 text-center">Recent Updates:</h2>
          <div className="space-y-4">
            <div className="version-card p-6 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-medium text-white">Community Milestone</h3>
                <span className="text-white/60 text-sm"></span>
              </div>
              <ul className="text-white/80 text-sm space-y-1">
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="community" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center space-x-8 mb-8">
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
              Discord
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
              Twitter
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
              GitHub
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
              YouTube
            </a>
          </div>
          <p className="text-white/50 text-sm">Join our community fighting for digital privacy rights.</p>
        </div>
      </section>

      <section className="py-20 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-white mb-8">About Obscura</h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Obscura is a non-profit community dedicated to protecting digital privacy rights and educating people about
            online surveillance. We believe privacy is a fundamental human right that must be defended through
            collective action and education.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-medium text-white mb-4">Education & Advocacy</h3>
              <p className="text-white/70 text-sm">
                We provide resources, workshops, and advocacy tools to help individuals and communities protect their
                digital rights.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-white mb-4">Community Driven</h3>
              <p className="text-white/70 text-sm">
                Our initiatives are powered by volunteers and supporters who believe in the importance of digital
                privacy for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
