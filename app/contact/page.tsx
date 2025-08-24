import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactPage() {
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
            <Link href="/contact" className="text-white hover:text-white transition-colors text-sm">
              Contact
            </Link>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 rounded-full px-4 py-2 text-sm bg-transparent"
              asChild
            >
              <Link href="/#support">Support Us</Link>
            </Button>
          </nav>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light text-white mb-6">Get in Touch</h1>
            <p className="text-xl text-white/80">Have questions? Want to collaborate? We'd love to hear from you.</p>
          </div>

          <div className="glass-card p-8 rounded-lg mb-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white text-sm font-medium mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
                >
                  <option value="">Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="volunteer">Volunteer Opportunities</option>
                  <option value="partnership">Partnership</option>
                  <option value="media">Media Inquiry</option>
                  <option value="support">Technical Support</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <Button className="w-full bg-[#007AFF] hover:bg-[#0056CC] text-white rounded-lg py-3 text-lg">
                Send Message
              </Button>
            </form>
          </div>

          <div className="text-center">
            <p className="text-white/70 mb-4">Or reach us directly:</p>
            <a href="mailto:contact@obscuraprivacy.org" className="text-[#007AFF] hover:underline text-lg">
              contact@obscuraprivacy.org
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
