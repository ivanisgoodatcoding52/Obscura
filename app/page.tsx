import { Button } from "@/components/ui/button"
import { Shield, Eye, Lock, Users, Target, Zap } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen text-foreground">
      <header className="glass sticky top-0 z-50 border-b border-border/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Shield className="h-10 w-10 text-primary drop-shadow-lg" />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-foreground/90 hover:text-foreground transition-colors font-medium drop-shadow-sm"
            >
              Home
            </Link>
            <Link href="/about" className="text-foreground font-medium drop-shadow-sm">
              About
            </Link>
            <a
              href="/#community"
              className="text-foreground/90 hover:text-foreground transition-colors font-medium drop-shadow-sm"
            >
              Community
            </a>
            <a
              href="#contact"
              className="text-foreground/90 hover:text-foreground transition-colors font-medium drop-shadow-sm"
            >
              Contact
            </a>
            <Button className="bg-primary/90 backdrop-blur-sm text-primary-foreground hover:bg-primary rounded-full px-6 font-medium shadow-lg">
              Donate
            </Button>
          </nav>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card rounded-3xl p-12 text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-thin mb-8">
              WHO WE <span className="text-primary font-light">ARE</span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-light drop-shadow-sm">
              Obscura is a non-profit organization dedicated to protecting digital privacy rights and educating people
              about the threats to their online freedom.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="glass-card rounded-3xl p-8 hover:scale-105 transition-all duration-300">
              <div className="h-16 w-16 bg-primary/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6 shadow-lg">
                <Target className="h-8 w-8 text-primary drop-shadow-sm" />
              </div>
              <h3 className="text-2xl text-foreground font-light mb-4 drop-shadow-sm">Our Mission</h3>
              <p className="text-foreground/80 leading-relaxed font-light">
                To empower individuals with the knowledge and tools needed to protect their digital privacy in an
                increasingly surveilled world. We believe privacy is a fundamental human right, not a privilege.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8 hover:scale-105 transition-all duration-300">
              <div className="h-16 w-16 bg-secondary/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6 shadow-lg">
                <Eye className="h-8 w-8 text-secondary drop-shadow-sm" />
              </div>
              <h3 className="text-2xl text-foreground font-light mb-4 drop-shadow-sm">The Problem</h3>
              <p className="text-foreground/80 leading-relaxed font-light">
                Every day, corporations and governments collect massive amounts of personal data without consent. Your
                browsing habits, location, communications, and personal information are being harvested and sold.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="glass-card rounded-3xl p-12 mb-12">
              <h2 className="text-4xl font-thin text-center text-foreground drop-shadow-lg">
                WHAT WE <span className="text-primary font-light">DO</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card rounded-3xl p-8 hover:scale-105 transition-all duration-300 group">
                <div className="text-center">
                  <div className="h-16 w-16 bg-primary/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform shadow-lg">
                    <Users className="h-8 w-8 text-primary drop-shadow-sm" />
                  </div>
                  <h3 className="text-xl text-foreground font-light mb-4 drop-shadow-sm">Education</h3>
                  <p className="text-foreground/80 font-light">
                    We create resources, guides, and workshops to teach people about digital privacy threats and
                    protection methods.
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-3xl p-8 hover:scale-105 transition-all duration-300 group">
                <div className="text-center">
                  <div className="h-16 w-16 bg-secondary/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform shadow-lg">
                    <Lock className="h-8 w-8 text-secondary drop-shadow-sm" />
                  </div>
                  <h3 className="text-xl text-foreground font-light mb-4 drop-shadow-sm">Tools</h3>
                  <p className="text-foreground/80 font-light">
                    We develop and recommend privacy-focused tools, apps, and services that help protect your digital
                    footprint.
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-3xl p-8 hover:scale-105 transition-all duration-300 group">
                <div className="text-center">
                  <div className="h-16 w-16 bg-accent/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform shadow-lg">
                    <Zap className="h-8 w-8 text-accent drop-shadow-sm" />
                  </div>
                  <h3 className="text-xl text-foreground font-light mb-4 drop-shadow-sm">Advocacy</h3>
                  <p className="text-foreground/80 font-light">
                    We advocate for stronger privacy laws and regulations to protect individuals from corporate and
                    government surveillance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-thin mb-6 text-foreground drop-shadow-lg">
              JOIN THE <span className="text-primary font-light">FIGHT</span>
            </h2>
            <p className="text-foreground/80 mb-8 max-w-2xl mx-auto font-light drop-shadow-sm">
              Your privacy matters. Together, we can build a future where digital rights are respected and protected.
              Join our community and take action today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button
                  size="lg"
                  className="bg-primary/90 backdrop-blur-sm hover:bg-primary text-primary-foreground rounded-full px-8 font-medium shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  Get Started
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-border/50 text-foreground hover:bg-muted/50 backdrop-blur-sm rounded-full px-8 bg-transparent font-medium shadow-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="glass border-t border-border/30 py-8 px-4 mt-20">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-6 w-6 text-primary drop-shadow-lg" />
            <span className="text-lg font-light text-foreground drop-shadow-sm">Obscura</span>
          </div>
          <p className="text-foreground/70 text-sm drop-shadow-sm">
            © 2024 Obscura. Fighting for digital privacy rights.
          </p>
        </div>
      </footer>
    </div>
  )
}
