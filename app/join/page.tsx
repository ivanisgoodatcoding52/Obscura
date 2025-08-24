import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, MessageSquare, Shield } from "lucide-react"

export default function JoinPage() {
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
            <Link href="/" className="text-white/80 hover:text-white transition-colors text-sm">
              Home
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
          <h1 className="hero-title text-6xl md:text-7xl mb-8 leading-tight text-white">Join the Movement</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-light">
            Ready to fight for digital privacy? Follow these steps to become part of our community.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1: Application */}
            <div className="glass-card p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#007AFF] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">Apply to Join</h3>
              <p className="text-white/70 text-sm mb-6 leading-relaxed">
                Tell us why you want to join our privacy advocacy community. Share your passion for digital rights.
              </p>
              <Button
                className="bg-[#007AFF] hover:bg-[#0056CC] text-white rounded-full px-6 py-3 text-sm font-medium w-full"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Fill Application
                </a>
              </Button>
              <p className="text-white/50 text-xs mt-3">Google Form (you'll create this)</p>
            </div>

            {/* Step 2: Discord */}
            <div className="glass-card p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#5865F2] rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">Join Discord</h3>
              <p className="text-white/70 text-sm mb-6 leading-relaxed">
                Connect with fellow privacy advocates, participate in discussions, and stay updated on our initiatives.
              </p>
              <Button
                className="bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-full px-6 py-3 text-sm font-medium w-full"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Join Discord Server
                </a>
              </Button>
              <p className="text-white/50 text-xs mt-3">Real-time community chat</p>
            </div>

            {/* Step 3: Privacy Concerns */}
            <div className="glass-card p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">Share Your Concerns</h3>
              <p className="text-white/70 text-sm mb-6 leading-relaxed">
                Tell us what privacy threats worry you most: data collection, surveillance, tracking, or other concerns.
              </p>
              <Button
                className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white rounded-full px-6 py-3 text-sm font-medium w-full"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Share Concerns
                </a>
              </Button>
              <p className="text-white/50 text-xs mt-3">Help us understand your needs</p>
            </div>
          </div>

          <div className="mt-16 glass-card p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-medium text-white mb-4">What Happens Next?</h3>
            <div className="text-left space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-white/80 text-sm">We'll review your application and welcome you to the community</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-white/80 text-sm">You'll get access to exclusive resources and privacy tools</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-white/80 text-sm">Participate in advocacy campaigns and educational workshops</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-white/80 text-sm">Connect with like-minded privacy advocates worldwide</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/" className="text-white/60 hover:text-white text-sm transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
