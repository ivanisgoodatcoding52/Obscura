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
            <Link href="/blog" className="text-white/80 hover:text-white transition-colors text-sm">
              Blog
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
          <h1 className="hero-title text-8xl md:text-9xl mb-8 leading-tight text-white">obscura</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-2 font-light">
            Obscura is a nonprofit dedicated to protecting digital privacy by raising awareness and advocating for stronger digital rights policies.
          </p>
          <p className="text-lg text-white/70 mb-12 font-light">Privacy Advocacy • Digital Rights • Community Action</p>
          <Button
            size="lg"
            className="bg-[#007AFF] hover:bg-[#0056CC] text-white rounded-full px-12 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all mb-8"
            asChild
          >
            <Link href="/join">Join Our Movement</Link>
          </Button>

          <div className="flex items-center justify-center space-x-6 mb-4">
            <a
              href="https://discord.gg/obscura"
              className="w-8 h-8 bg-[#5865F2] rounded flex items-center justify-center hover:scale-110 transition-transform"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/obscuraprivacy"
              className="w-8 h-8 bg-[#1DA1F2] rounded flex items-center justify-center hover:scale-110 transition-transform"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://github.com/obscura"
              className="w-8 h-8 bg-[#333] rounded flex items-center justify-center hover:scale-110 transition-transform"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://youtube.com/@obscuraprivacy"
              className="w-8 h-8 bg-[#FF0000] rounded flex items-center justify-center hover:scale-110 transition-transform"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          <Link href="#updates" className="text-white/60 hover:text-white text-sm transition-colors">
            View Our Roadmap
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-white mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#007AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🔒</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Secure</h3>
              <p className="text-white/70 text-sm mb-6">
                We promote tools like Signal and ProtonMail to ensure secure communication and protect your data from
                surveillance.
              </p>
            </div>

            <div className="glass-card p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#5865F2] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🛡️</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Private</h3>
              <p className="text-white/70 text-sm mb-6">
                We teach people how to safeguard their personal data online through education, workshops, and practical
                guides.
              </p>
            </div>

            <div className="glass-card p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#28A745] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🆓</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Free</h3>
              <p className="text-white/70 text-sm mb-6">
                We believe privacy is a right, not a luxury—our resources are open to everyone, regardless of technical
                background or income.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-white mb-12">Get Involved</h2>
        </div>
      </section>

            <div className="glass-card p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#5865F2] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">💬</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Join Community</h3>
              <p className="text-white/70 text-sm mb-6">
                Join our Discord to collaborate with privacy advocates worldwide, get real-time support, and participate
                in discussions.
              </p>
              <Button className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-full" asChild>
                <Link href="https://discord.gg/obscura">Join Discord</Link>
              </Button>
            </div>

            <div className="glass-card p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#28A745] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🤝</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Volunteer</h3>
              <p className="text-white/70 text-sm mb-6">
                Help us organize events, create educational content, and spread awareness about digital privacy rights.
              </p>
              <Button className="w-full bg-[#28A745] hover:bg-[#218838] text-white rounded-full" asChild>
                <Link href="/contact?subject=volunteer">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="tools" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-light text-white mb-12 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-[#007AFF] mb-2">15K+</h3>
              <h4 className="text-xl font-medium text-white mb-3">Community Members</h4>
              <p className="text-white/70 text-sm">
                Privacy advocates from around the world working together for digital rights.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-[#28A745] mb-2">50+</h3>
              <h4 className="text-xl font-medium text-white mb-3">Educational Workshops</h4>
              <p className="text-white/70 text-sm">
                Free privacy workshops conducted in schools, libraries, and community centers.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-[#FFC107] mb-2">12</h3>
              <h4 className="text-xl font-medium text-white mb-3">Policy Changes</h4>
              <p className="text-white/70 text-sm">
                Successful advocacy campaigns that strengthened data protection laws.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="updates" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-light text-white mb-8 text-center">Our Roadmap</h2>
          <div className="space-y-4">
            <div className="version-card p-6 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-medium text-white">📌 January 2025</h3>
                <span className="text-[#007AFF] text-sm font-medium">Upcoming</span>
              </div>
              <ul className="text-white/80 text-sm space-y-1">
                <li>• Launch of our online community platform</li>
                <li>• Release comprehensive privacy toolkit</li>
                <li>• Begin monthly virtual meetups</li>
              </ul>
            </div>
            <div className="version-card p-6 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-medium text-white">📌 Spring 2025</h3>
                <span className="text-[#28A745] text-sm font-medium">Planned</span>
              </div>
              <ul className="text-white/80 text-sm space-y-1">
                <li>• Hosting our first virtual privacy workshop series</li>
                <li>• Partnership with local libraries for in-person events</li>
                <li>• Launch of privacy advocacy training program</li>
              </ul>
            </div>
            <div className="version-card p-6 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-medium text-white">📌 Future Goals</h3>
                <span className="text-[#FFC107] text-sm font-medium">Vision</span>
              </div>
              <ul className="text-white/80 text-sm space-y-1">
                <li>• Collaborating with other digital rights organizations</li>
                <li>• Establishing regional privacy advocacy chapters</li>
                <li>• Creating multilingual educational resources</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="support" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-white mb-8">Support Our Mission</h2>
          <p className="text-white/80 text-lg mb-12">
            Help us continue fighting for digital privacy rights. Every contribution makes a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button className="bg-[#0070BA] hover:bg-[#005EA6] text-white rounded-full px-8 py-3" asChild>
              <Link href="https://paypal.me/obscuraprivacy">PayPal</Link>
            </Button>
            <Button className="bg-[#FFDD00] hover:bg-[#E6C200] text-black rounded-full px-8 py-3" asChild>
              <Link href="https://buymeacoffee.com/obscura">Buy Me a Coffee</Link>
            </Button>
            <Button className="bg-[#00D775] hover:bg-[#00C46A] text-white rounded-full px-8 py-3" asChild>
              <Link href="https://gofundme.com/obscura">GoFundMe</Link>
            </Button>
          </div>
          <p className="text-white/60 text-sm">
            We're working on becoming an official 501(c)(3) nonprofit. Until then, these platforms help us continue our
            work.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-white mb-8">Our Story</h2>
          <div className="text-left max-w-3xl mx-auto space-y-6">
            <p className="text-white/80 text-lg leading-relaxed">
              Obscura was born from a growing concern about the erosion of digital privacy in our interconnected world.
              As surveillance capitalism expanded and data breaches became commonplace, we realized that individual
              action alone wasn't enough—we needed a community.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              What inspired us was seeing how many people felt helpless against big tech's data collection practices,
              government surveillance programs, and the increasing use of AI to analyze personal information. We believe
              that privacy shouldn't be a luxury for the tech-savvy few, but a fundamental right accessible to everyone.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              Our vision of success is a world where privacy is the norm, not the exception. Where people understand
              their digital rights, have access to privacy-protecting tools, and feel empowered to advocate for stronger
              data protection policies. Together, we're building that future.
            </p>
          </div>
        </div>
      </section>
          <section id="community" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center space-x-8 mb-8">
            <a
              href="https://discord.gg/obscura"
              className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              <span>Discord</span>
            </a>
            <a
              href="https://twitter.com/obscuraprivacy"
              className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>Twitter</span>
            </a>
            <a
              href="https://github.com/obscura"
              className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://youtube.com/@obscuraprivacy"
              className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>YouTube</span>
            </a>
          </div>
          <p className="text-white/50 text-sm">Join our community fighting for digital privacy rights.</p>
        </div>
      </section>
    </div>
  )
}
