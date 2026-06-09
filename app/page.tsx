export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Security Automation
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Automated API Key Rotation
          <span className="block text-[#58a6ff]">for Security</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Automatically rotate API keys across all your services on scheduled intervals.
          Zero-downtime deployment, instant team notifications, and full audit logs — built for DevOps teams and security engineers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Rotating Keys — $29/mo
          </a>
          <a
            href="#faq"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-xs text-[#8b949e] mt-1">Integrations</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">0</div>
            <div className="text-xs text-[#8b949e] mt-1">Downtime</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-xs text-[#8b949e] mt-1">Monitoring</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited key rotations',
              'Connect up to 50 services',
              'Slack & email notifications',
              'Full audit log & history',
              'Custom rotation schedules',
              'Priority support',
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-xs text-[#8b949e] mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does zero-downtime rotation work?</h3>
            <p className="text-[#8b949e] text-sm">We generate the new key, update all dependent services atomically, verify connectivity, then revoke the old key — ensuring no service interruption during the process.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which services and cloud providers are supported?</h3>
            <p className="text-[#8b949e] text-sm">We support AWS, GCP, Azure, GitHub, Stripe, Twilio, SendGrid, and 40+ other popular APIs. New integrations are added regularly based on user requests.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my data and credentials secure?</h3>
            <p className="text-[#8b949e] text-sm">All credentials are encrypted at rest using AES-256 and in transit via TLS 1.3. We never store plaintext keys and follow SOC 2 security practices.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} API Key Rotation Bot. All rights reserved.
      </footer>
    </main>
  )
}
