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
          <p className="text-xl md:text-2xl text-white/90 mb-2 font-light">A community fighting for digital privacy.</p>
          <p className="text-lg text-white/70 mb-12 font-light">Privacy Advocacy • Digital Rights • Community Action</p>
          <Button
            size="lg"
            className="bg-[#007AFF] hover:bg-[#0056CC] text-white rounded-full px-12 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all mb-8"
            asChild
          >
            <Link href="/join">Join Our Movement</Link>
          </Button>

          <Link href="#versions" className="text-white/60 hover:text-white text-sm transition-colors">
            <br></br>
            View Recent Updates
          </Link>
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

      <section id="tools" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 rounded-lg text-center">
              <h3 className="text-xl font-medium text-white mb-3">Secure</h3>
              <p className="text-white/70 text-sm">
                Encryption protects your data from surveillance and tracking.
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
                <span className="text-white/60 text-sm">12/15/2024</span>
              </div>
              <ul className="text-white/80 text-sm space-y-1">
                <li>• 10,000+ privacy advocates joined our movement</li>
                <li>• Launched new educational privacy workshops</li>
                <li>• Published comprehensive digital rights guide</li>
              </ul>
            </div>
            <div className="version-card p-6 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-medium text-white">Campaign Success</h3>
                <span className="text-white/60 text-sm">11/28/2024</span>
              </div>
              <ul className="text-white/80 text-sm space-y-1">
                <li>• Successfully lobbied for stronger data protection laws</li>
                <li>• Organized nationwide privacy awareness events</li>
              </ul>
            </div>
          </div>
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
