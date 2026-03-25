import React, { useState, useEffect, useRef } from 'react'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 px-6 h-14 flex items-center justify-between shadow-sm">
      <a href="https://aintropy.ai" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
        <img src="./logo.png" alt="AIntropy" className="w-7 h-7 rounded-lg object-cover" />
        <span className="font-bold text-sm tracking-tight text-gray-900">
          <span className="text-[#0891B2]">AI</span>ntropy
          <span className="text-[#0891B2] font-semibold ml-2">· Kurious</span>
        </span>
      </a>
      <a href="#cta" className="text-xs font-semibold text-white bg-[#0891B2] hover:bg-[#0E7490] transition-colors rounded-lg px-3 py-1.5">Try it yourself</a>
    </nav>
  )
}

function ProblemSection() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal()
  const stats = [
    { value: '57.8M', label: 'Records across NJ Open Data' },
    { value: '23', label: 'Government agencies' },
    { value: '8+', label: 'Incompatible formats' },
    { value: '0', label: 'AI systems that could connect them' },
  ]
  return (
    <section id="problem" className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(ellipse at 50% 0%, rgba(8,145,178,0.06) 0%, transparent 65%)'}} />
      <div className="max-w-4xl mx-auto relative z-10">
        <div ref={r1} className="reveal">
          <div className="inline-flex items-center gap-2 border border-[#0891B2]/30 rounded-full px-4 py-1.5 mb-8 bg-[#0891B2]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0891B2] animate-pulse" />
            <span className="text-xs text-[#0891B2] font-medium">NJ Open Data · Exemplar Use Case</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Your data is rich.<br /><span className="text-[#0891B2]">Your AI is clueless.</span>
          </h1>
          <p className="text-xl text-gray-500 mb-6 max-w-2xl mx-auto leading-relaxed">
            95% of the answers your team needs are already in your data, scattered across PDFs, CSVs, and JSONs. Your AI just cannot connect them.
          </p>
          <p className="text-lg text-gray-800 font-medium mb-14 max-w-2xl mx-auto leading-relaxed">
            Kurious reads every format, crosses every silo, and gives your team the answer in seconds. No training. No setup. No waiting.
          </p>
        </div>
        <div ref={r2} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 reveal">
          {stats.map(s => (
            <div key={s.label} className="border border-gray-100 rounded-xl p-5 bg-gray-50 shadow-sm text-center">
              <p className={`text-3xl font-bold mb-1 ${s.value === '0' ? 'text-red-500' : 'text-[#0891B2]'}`}>{s.value}</p>
              <p className="text-xs text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
        <div ref={r3} className="border border-red-100 rounded-2xl p-6 bg-red-50 max-w-2xl mx-auto reveal">
          <p className="text-sm text-gray-700 leading-relaxed">
            The data is all there. A pension CSV here, a policy PDF there, a budget spreadsheet somewhere else. It has always been there. But it sits fragmented across 23 isolated silos, and no AI has ever been able to connect it all.
          </p>
        </div>
      </div>
    </section>
  )
}

function SolutionSection() {
  const r1 = useReveal(), r2 = useReveal()
  return (
    <section id="solution" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div ref={r1} className="text-center mb-12 reveal">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Meet <span className="text-[#0891B2]">Kurious.</span>
          </h2>
          <p className="text-gray-500 text-lg">One platform. Every format. Every silo. Every answer.</p>
        </div>
        <div ref={r2} className="grid md:grid-cols-3 gap-6 reveal">
          {[
            { icon: '🧠', title: 'Natively multimodal', desc: 'PDF, CSV, JSON, JPEG, XLSX, video. All formats, one engine. Nothing gets left behind.' },
            { icon: '🔗', title: 'Cross-silo reasoning', desc: 'Connects pension data to education budgets to policy documents in a single query.' },
            { icon: '⚡', title: 'Answers in seconds', desc: 'No training. No fine-tuning. Connect your data and go live in days, not months.' },
          ].map(item => (
            <div key={item.title} className="border border-[#0891B2]/15 rounded-2xl p-6 bg-white shadow-sm">
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DemoSection() {
  const r1 = useReveal()
  const examples = [
    'Which NJ counties have the highest pension liabilities and the lowest education budgets?',
    'What do scanned health department reports say about chronic disease rates in urban vs rural counties?',
    'Which municipalities flagged in the land use map have the highest EPA violations in the environment CSV?',
    'How do crime rates across NJ counties correlate with unemployment and housing data?',
  ]
  return (
    <section id="demo" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div ref={r1} className="text-center mb-12 reveal">
          <span className="text-xs font-semibold text-[#0891B2] uppercase tracking-widest mb-4 block">Kurious in Action</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Watch it happen</h2>
          <p className="text-gray-500 text-lg">Complex cross-agency questions. Real NJ data. Answered in seconds.</p>
        </div>

        {/* Example questions */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {examples.map((q, i) => (
            <div key={i} className="border border-gray-100 rounded-xl p-4 bg-gray-50 shadow-sm flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#0891B2] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-gray-700 leading-relaxed">{q}</p>
            </div>
          ))}
        </div>

        {/* Demo placeholder — iframe will go here once Nirmit whitelists */}
        <div className="border-2 border-dashed border-[#0891B2]/30 rounded-2xl bg-[#0891B2]/5 flex flex-col items-center justify-center text-center p-16">
          <div className="w-12 h-12 rounded-xl bg-[#0891B2]/10 border border-[#0891B2]/20 flex items-center justify-center mb-4 text-2xl">⚡</div>
          <p className="text-lg font-semibold text-gray-900 mb-2">Live Kurious Demo</p>
          <p className="text-sm text-gray-400 mb-6">The live platform will be embedded here</p>
          <a href="https://njhub.aintropy.ai" target="_blank" rel="noreferrer" className="text-sm font-semibold text-white bg-[#0891B2] hover:bg-[#0E7490] transition-colors rounded-xl px-6 py-3">
            Open Kurious Live
          </a>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const r1 = useReveal(), r2 = useReveal()
  return (
    <section id="cta" className="py-24 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        <div ref={r1} className="reveal">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Try Kurious on<br /><span className="text-[#0891B2]">NJ Open Data.</span>
          </h2>
          <p className="text-xl text-gray-500 mb-12 leading-relaxed">
            Ask it anything. See for yourself what happens when AI can finally connect the dots.
          </p>
        </div>
        <div ref={r2} className="border border-[#0891B2]/20 rounded-2xl p-8 bg-white shadow-sm reveal">
          <p className="text-sm font-semibold text-gray-900 mb-2">Request Early Access</p>
          <p className="text-xs text-gray-400 mb-8">Scan the QR code or open the link to get started</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex flex-col items-center gap-3">
              <div className="w-36 h-36 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center bg-gray-50">
                <p className="text-xs text-gray-400 text-center leading-relaxed px-2">QR code<br />coming soon</p>
              </div>
              <p className="text-xs text-gray-400">Scan with your phone</p>
            </div>
            <div className="text-gray-300 text-2xl font-light hidden sm:block">or</div>
            <div className="flex flex-col items-center gap-3">
              <a href="https://njhub.aintropy.ai" target="_blank" rel="noreferrer" className="border border-[#0891B2]/30 rounded-xl px-8 py-4 bg-[#0891B2]/5 hover:bg-[#0891B2]/10 transition-colors">
                <p className="text-xs text-gray-400 text-center mb-1">Try it now</p>
                <p className="text-sm font-semibold text-[#0891B2] text-center">njhub.aintropy.ai</p>
              </a>
              <p className="text-xs text-gray-400">Open in your browser</p>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex items-center justify-center gap-2.5 mb-2">
            <img src="./logo.png" alt="AIntropy" className="w-6 h-6 rounded-lg object-cover" />
            <span className="font-bold text-sm text-gray-900"><span className="text-[#0891B2]">AI</span>ntropy</span>
          </div>
          <p className="text-xs text-gray-400">© 2026 AIntropy. The Hippocampus of Your Private AI.</p>
          <a href="https://aintropy.ai" target="_blank" rel="noreferrer" className="text-xs text-[#0891B2] hover:underline mt-1 block">aintropy.ai</a>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Nav />
      <div className="pt-14">
        <ProblemSection />
        <SolutionSection />
        <DemoSection />
        <CTASection />
      </div>
    </div>
  )
}
