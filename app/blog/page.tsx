import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BlogPage() {
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
            <Link href="/blog" className="text-white hover:text-white transition-colors text-sm">
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
              <Link href="/#support">Support Us</Link>
            </Button>
          </nav>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light text-white mb-6">Privacy Blog</h1>
            <p className="text-xl text-white/80">Updates, insights, and educational content about digital privacy.</p>
          </div>

          <div className="space-y-8">
            <article className="glass-card p-8 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#007AFF] text-sm font-medium">EDUCATION</span>
                <span className="text-white/60 text-sm">December 20, 2024</span>
              </div>
              <h2 className="text-2xl font-medium text-white mb-4">
                <Link href="/blog/complete-guide-to-digital-privacy" className="hover:text-[#007AFF] transition-colors">
                  The Complete Guide to Digital Privacy in 2024
                </Link>
              </h2>
              <p className="text-white/70 mb-4">
                Everything you need to know about protecting your personal data online, from basic privacy settings to
                advanced security tools.
              </p>
              <Link href="/blog/complete-guide-to-digital-privacy" className="text-[#007AFF] hover:underline text-sm">
                Read More →
              </Link>
            </article>

            <article className="glass-card p-8 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#28A745] text-sm font-medium">PROGRESS UPDATE</span>
                <span className="text-white/60 text-sm">December 15, 2024</span>
              </div>
              <h2 className="text-2xl font-medium text-white mb-4">
                <Link href="/blog/community-milestone-15k-members" className="hover:text-[#007AFF] transition-colors">
                  Community Milestone: 15,000 Privacy Advocates Strong
                </Link>
              </h2>
              <p className="text-white/70 mb-4">
                Celebrating our growing community and the impact we've made together in the fight for digital privacy
                rights.
              </p>
              <Link href="/blog/community-milestone-15k-members" className="text-[#007AFF] hover:underline text-sm">
                Read More →
              </Link>
            </article>

            <article className="glass-card p-8 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#FFC107] text-sm font-medium">ADVOCACY</span>
                <span className="text-white/60 text-sm">December 10, 2024</span>
              </div>
              <h2 className="text-2xl font-medium text-white mb-4">
                <Link href="/blog/data-protection-law-victory" className="hover:text-[#007AFF] transition-colors">
                  Victory: New Data Protection Laws Passed in Three States
                </Link>
              </h2>
              <p className="text-white/70 mb-4">
                Our advocacy efforts helped pass stronger data protection legislation. Here's what it means for your
                privacy.
              </p>
              <Link href="/blog/data-protection-law-victory" className="text-[#007AFF] hover:underline text-sm">
                Read More →
              </Link>
            </article>

            <article className="glass-card p-8 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#DC3545] text-sm font-medium">ALERT</span>
                <span className="text-white/60 text-sm">December 5, 2024</span>
              </div>
              <h2 className="text-2xl font-medium text-white mb-4">
                <Link href="/blog/major-data-breach-response" className="hover:text-[#007AFF] transition-colors">
                  Major Data Breach: How to Protect Yourself
                </Link>
              </h2>
              <p className="text-white/70 mb-4">
                A major tech company exposed millions of user records. Here's what happened and steps you can take to
                protect your data.
              </p>
              <Link href="/blog/major-data-breach-response" className="text-[#007AFF] hover:underline text-sm">
                Read More →
              </Link>
            </article>
          </div>

          <div className="text-center mt-16">
            <Button className="bg-[#007AFF] hover:bg-[#0056CC] text-white rounded-full px-8 py-3">
              Load More Posts
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
