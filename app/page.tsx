import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Monitor, Cpu, Recycle, Users, Wrench, Shield, Laptop } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen text-foreground bg-gradient-to-br from-[#0a0f0d] via-[#0d1a14] to-[#0a1510]">
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-black/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-light text-white">
            obscura
          </Link>
          <nav className="flex items-center gap-8">
            <Link href="/about" className="text-white/80 hover:text-white transition-colors text-sm">
              About
            </Link>
            <Link href="/donate-devices" className="text-white/80 hover:text-white transition-colors text-sm">
              Donate Devices
            </Link>
            <Link href="/contact" className="text-white/80 hover:text-white transition-colors text-sm">
              Contact
            </Link>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 rounded-full px-4 py-2 text-sm bg-transparent"
              asChild
            >
              <Link href="#support">Support Us</Link>
            </Button>
          </nav>
        </div>
      </header>

      <section className="flex items-center justify-center min-h-[70vh] px-4 pt-20">
        <div className="text-center max-w-4xl">
          <h1 className="hero-title text-7xl md:text-8xl mb-8 leading-tight text-white">obscura</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-2 font-light text-balance">
            Reducing electronic waste while expanding equitable access to computing devices for education and community use.
          </p>
          <p className="text-lg text-white/70 mb-12 font-light">E-Waste Recovery • Digital Equity • Sustainable Reuse</p>
          <Button
            size="lg"
            className="bg-[#22c55e] hover:bg-[#16a34a] text-white rounded-full px-12 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all mb-8"
            asChild
          >
            <Link href="/donate-devices">Donate Your Devices</Link>
          </Button>

          <div className="flex items-center justify-center gap-6 mb-4">
            <a
              href="#"
              className="w-8 h-8 bg-[#333] rounded flex items-center justify-center hover:scale-110 transition-transform"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.004.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-[#1DA1F2] rounded flex items-center justify-center hover:scale-110 transition-transform"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-[#0A66C2] rounded flex items-center justify-center hover:scale-110 transition-transform"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          <Link href="#workflow" className="text-white/60 hover:text-white text-sm transition-colors">
            See How It Works
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-white mb-12">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#22c55e] rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Environmental Impact</h3>
              <p className="text-white/70 text-sm mb-6">
                Responsible e-waste recovery and reuse to reduce electronic waste in local communities and keep devices out of landfills.
              </p>
            </div>

            <div className="glass-card p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#3b82f6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Digital Equity</h3>
              <p className="text-white/70 text-sm mb-6">
                Providing refurbished devices to students, schools, and community programs who need access to technology for learning and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="workflow" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-light text-white mb-4 text-center">Our Refurbishment Process</h2>
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Devices go through a structured pipeline to ensure quality, safety, and functionality.
          </p>
          <div className="grid md:grid-cols-5 gap-4">
            <div className="glass-card p-6 rounded-lg text-center">
              <div className="w-10 h-10 bg-[#22c55e]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Monitor className="w-5 h-5 text-[#22c55e]" />
              </div>
              <h4 className="text-sm font-medium text-white mb-2">1. Intake</h4>
              <p className="text-white/60 text-xs">
                Devices categorized by type, condition, and compatibility
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg text-center">
              <div className="w-10 h-10 bg-[#3b82f6]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Cpu className="w-5 h-5 text-[#3b82f6]" />
              </div>
              <h4 className="text-sm font-medium text-white mb-2">2. Diagnostics</h4>
              <p className="text-white/60 text-xs">
                Testing storage, display, input devices, and power systems
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg text-center">
              <div className="w-10 h-10 bg-[#f59e0b]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Wrench className="w-5 h-5 text-[#f59e0b]" />
              </div>
              <h4 className="text-sm font-medium text-white mb-2">3. Recovery</h4>
              <p className="text-white/60 text-xs">
                Low-level boot and diagnostic tools for hardware assessment
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg text-center">
              <div className="w-10 h-10 bg-[#ef4444]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-5 h-5 text-[#ef4444]" />
              </div>
              <h4 className="text-sm font-medium text-white mb-2">4. Secure Wipe</h4>
              <p className="text-white/60 text-xs">
                Full erasure and restoration using secure methods
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg text-center">
              <div className="w-10 h-10 bg-[#8b5cf6]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Laptop className="w-5 h-5 text-[#8b5cf6]" />
              </div>
              <h4 className="text-sm font-medium text-white mb-2">5. Deployment</h4>
              <p className="text-white/60 text-xs">
                Configured for educational use and distributed to recipients
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-white mb-12">Get Involved</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#22c55e] rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Donate Devices</h3>
              <p className="text-white/70 text-sm mb-6">
                Have old laptops, computers, or electronics? Donate them to give technology a second life and help bridge the digital divide.
              </p>
              <Button className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white rounded-full" asChild>
                <Link href="/donate-devices">Donate Now</Link>
              </Button>
            </div>

            <div className="glass-card p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#3b82f6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Volunteer</h3>
              <p className="text-white/70 text-sm mb-6">
                Join our team of technical volunteers to help diagnose, repair, and refurbish devices for communities in need.
              </p>
              <Button className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-full" asChild>
                <Link href="/contact?subject=volunteer">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-light text-white mb-12 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="glass-card p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-[#22c55e] mb-2">2,500+</h3>
              <h4 className="text-lg font-medium text-white mb-2">Devices Refurbished</h4>
              <p className="text-white/70 text-sm">
                Laptops and computers given a second life
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-[#3b82f6] mb-2">1,800+</h3>
              <h4 className="text-lg font-medium text-white mb-2">Students Served</h4>
              <p className="text-white/70 text-sm">
                Young learners with access to technology
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-[#f59e0b] mb-2">15</h3>
              <h4 className="text-lg font-medium text-white mb-2">School Partners</h4>
              <p className="text-white/70 text-sm">
                Educational institutions we support
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-[#8b5cf6] mb-2">12 tons</h3>
              <h4 className="text-lg font-medium text-white mb-2">E-Waste Diverted</h4>
              <p className="text-white/70 text-sm">
                Electronics kept out of landfills
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-light text-white mb-8 text-center">Safety & Compliance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#22c55e]/20 rounded-full flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4 text-[#22c55e]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Battery Safety</h4>
                  <p className="text-white/70 text-sm">All lithium-ion batteries are handled according to strict safety standards.</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#3b82f6]/20 rounded-full flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4 text-[#3b82f6]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Secure Data Wiping</h4>
                  <p className="text-white/70 text-sm">All storage devices are fully erased using certified secure methods before redistribution.</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#f59e0b]/20 rounded-full flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4 text-[#f59e0b]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Hazard Management</h4>
                  <p className="text-white/70 text-sm">Recalled or hazardous devices are separated and handled appropriately.</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#8b5cf6]/20 rounded-full flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4 text-[#8b5cf6]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Legal Compliance</h4>
                  <p className="text-white/70 text-sm">We only process devices that are legally owned or properly donated for refurbishment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="support" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-white mb-8">Support Our Mission</h2>
          <p className="text-white/80 text-lg mb-12">
            Help us continue reducing e-waste and providing technology access to those who need it most.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button className="bg-[#22c55e] hover:bg-[#16a34a] text-white rounded-full px-8 py-3" asChild>
              <Link href="/donate-devices">Donate Devices</Link>
            </Button>
            <Button className="bg-[#0070BA] hover:bg-[#005EA6] text-white rounded-full px-8 py-3" asChild>
              <Link href="#">PayPal</Link>
            </Button>
            <Button className="bg-[#00D775] hover:bg-[#00C46A] text-white rounded-full px-8 py-3" asChild>
              <Link href="#">GoFundMe</Link>
            </Button>
          </div>
          <p className="text-white/60 text-sm">
            We welcome collaboration with schools, donors, and technical volunteers.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-white mb-8">Our Story</h2>
          <div className="text-left max-w-3xl mx-auto space-y-6">
            <p className="text-white/80 text-lg leading-relaxed">
              obscura was born from two converging concerns: the growing mountain of electronic waste polluting our planet, and the widening digital divide leaving students and communities without access to essential technology.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              We believe older hardware still has tremendous value when properly recovered and safely repurposed. Every laptop or computer we refurbish is one less device in a landfill and one more opportunity for a student to learn, create, and grow.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              Our vision is a world where technology is sustainable and accessible to all—where no working device goes to waste and no learner is left behind due to lack of access. This is a community-driven project focused on ethical reuse of technology.
            </p>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Recycle className="w-5 h-5 text-[#22c55e]" />
              <span className="text-white font-light text-lg">obscura</span>
            </div>
            <div className="flex items-center gap-8">
              <Link href="/about" className="text-white/60 hover:text-white text-sm transition-colors">
                About
              </Link>
              <Link href="/donate-devices" className="text-white/60 hover:text-white text-sm transition-colors">
                Donate
              </Link>
              <Link href="/contact" className="text-white/60 hover:text-white text-sm transition-colors">
                Contact
              </Link>
            </div>
            <p className="text-white/40 text-sm">
              © 2025 obscura. Community-driven e-waste refurbishment.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
