import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShieldCheck, Zap, Brain, Lock, ArrowRight, Sparkles, Globe, MessageSquareWarning,
  Activity, GraduationCap, TrendingUp, CheckCircle2,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DigitalRakshak — AI Cybersecurity for Digital Payments" },
      { name: "description", content: "AI-powered protection against UPI fraud, phishing URLs, and scam messages. Built for India's digital economy." },
    ],
  }),
  component: Landing,
});

const features = [
  { icon: ShieldCheck, title: "Transaction Verification", desc: "AI scores every UPI payment against verified merchant records in real time." },
  { icon: Globe, title: "Phishing URL Scanner", desc: "Detects fake banking, refund, and KYC sites before they steal credentials." },
  { icon: MessageSquareWarning, title: "Scam Message Detector", desc: "Classifies OTP, lottery, KYC, UPI, and job scams from text or screenshots." },
  { icon: Brain, title: "AI Fraud Assistant", desc: "A Gemini-style chatbot that answers fraud questions in plain language." },
  { icon: Activity, title: "Live Risk Analytics", desc: "Beautiful dashboards for users and admins with real-time fraud trends." },
  { icon: GraduationCap, title: "Learning Center", desc: "Bite-sized lessons on UPI safety, phishing, OTPs, QR scams and more." },
];

const stats = [
  { v: "₹1.2L Cr+", l: "UPI value protected (modeled)" },
  { v: "98.4%", l: "Detection accuracy" },
  { v: "<200 ms", l: "AI verification latency" },
  { v: "24/7", l: "Realtime monitoring" },
];

const steps = [
  { n: "01", t: "Enter or upload", d: "Paste a UPI ID, URL, suspicious message, or upload a transactions CSV." },
  { n: "02", t: "AI analyzes", d: "Models cross-check verified registries, behavioral signals, and known scam patterns." },
  { n: "03", t: "Get a verdict", d: "Receive a risk score, classification (Genuine / Suspicious / Fake) and a clear recommendation." },
];

const testimonials = [
  { n: "Anita Rao", r: "Small Business Owner", q: "Caught a fake refund link my staff almost clicked. This is essential." },
  { n: "Karthik V.", r: "Bank Branch Manager", q: "We use the scam detector to train customers. The explanations are easy to read." },
  { n: "Meera Joshi", r: "College Student", q: "The learning center made me actually understand phishing — finally." },
];

function Landing() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <Logo />
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#how" className="hover:text-foreground">How it works</a>
            <a href="#stats" className="hover:text-foreground">Impact</a>
            <a href="#testimonials" className="hover:text-foreground">Testimonials</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/login"><Button variant="ghost" size="sm">Login</Button></Link>
            <Link to="/signup"><Button size="sm" className="gradient-primary text-primary-foreground shadow-glow-cyan">Get Started</Button></Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative gradient-hero">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-24 md:pt-28 md:pb-32 text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground mb-6">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span>AI Cybersecurity for India's Digital Payments</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Stop fraud before <br />
            it reaches your <span className="text-gradient">wallet.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
            DigitalRakshak verifies every UPI payment, URL and message with realtime AI — and explains the
            risk in plain language anyone can understand.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link to="/signup">
              <Button size="lg" className="gradient-primary text-primary-foreground shadow-glow-cyan">
                Get Started <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="border-border glass">Scan a Transaction</Button>
            </Link>
            <a href="#features"><Button size="lg" variant="ghost">Learn more</Button></a>
          </motion.div>

          {/* Floating dashboard preview */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            className="mt-16 max-w-5xl mx-auto">
            <div className="glass-strong rounded-2xl p-4 md:p-6 shadow-elegant animate-float">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: ShieldCheck, t: "Safety Score", v: "92 / 100", a: "success" },
                  { icon: Zap, t: "Scans Today", v: "1,284", a: "primary" },
                  { icon: Lock, t: "Threats Blocked", v: "47", a: "destructive" },
                ].map((c) => (
                  <div key={c.t} className="rounded-xl p-4 bg-card/60 border border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">{c.t}</span>
                      <c.icon className={`h-4 w-4 ${c.a === "success" ? "text-success" : c.a === "destructive" ? "text-destructive" : "text-accent"}`} />
                    </div>
                    <p className="mt-2 text-2xl font-bold">{c.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-widest text-accent">Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">A complete AI security layer for every transaction</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div key={f.title}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="glass rounded-2xl p-6 hover:shadow-glow-cyan transition-shadow">
              <div className="h-11 w-11 rounded-xl gradient-primary grid place-items-center shadow-glow-cyan">
                <f.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI Fraud Showcase */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full gradient-primary opacity-20 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-accent">AI Fraud Detection</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">See the verdict in milliseconds.</h2>
              <p className="mt-4 text-muted-foreground">Every transaction is screened against verified merchants, behavioral patterns and a growing knowledge base of scams — all explained clearly.</p>
              <ul className="mt-6 space-y-3 text-sm">
                {["Cross-verified with trusted merchant registry", "Color-coded risk badges (Genuine / Suspicious / Fake)", "Plain-language explanation for every decision", "Bulk CSV scanning for businesses & admins"].map((x) => (
                  <li key={x} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-success mt-0.5" />{x}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl glass p-5 space-y-3">
              {[
                { upi: "amazon@apl", name: "Amazon India", amt: "₹1,499", v: "Genuine", c: "text-success", b: "border-success/30 bg-success/10" },
                { upi: "kycupdate@hdfc", name: "KYC Verification Cell", amt: "₹1", v: "Suspicious", c: "text-warning", b: "border-warning/30 bg-warning/10" },
                { upi: "winner-prize@upi", name: "Lottery Winner", amt: "₹25,000", v: "Fake", c: "text-destructive", b: "border-destructive/40 bg-destructive/10" },
              ].map((row) => (
                <div key={row.upi} className={`rounded-xl p-4 border ${row.b}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{row.name}</p>
                      <p className="text-xs text-muted-foreground">{row.upi}</p>
                    </div>
                    <p className="font-semibold">{row.amt}</p>
                  </div>
                  <p className={`mt-2 text-sm font-semibold ${row.c}`}>{row.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-widest text-accent">How it works</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Three steps from doubt to confidence</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div key={s.n} className="glass rounded-2xl p-6">
              <p className="text-4xl font-bold text-gradient">{s.n}</p>
              <h3 className="mt-3 text-lg font-semibold">{s.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="max-w-7xl mx-auto px-4 py-20">
        <div className="glass-strong rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.l}>
                <p className="text-3xl md:text-4xl font-bold text-gradient">{s.v}</p>
                <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-widest text-accent">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Trusted by people who care about safety</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.n} className="glass rounded-2xl p-6">
              <TrendingUp className="h-5 w-5 text-accent" />
              <p className="mt-3 text-sm">"{t.q}"</p>
              <div className="mt-5">
                <p className="text-sm font-semibold">{t.n}</p>
                <p className="text-xs text-muted-foreground">{t.r}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="rounded-3xl gradient-primary p-10 md:p-14 text-center shadow-glow">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Ready to protect every payment?</h2>
          <p className="mt-3 text-primary-foreground/80">Create your free DigitalRakshak account and start scanning in seconds.</p>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <Link to="/signup"><Button size="lg" className="bg-background text-foreground hover:bg-background/90">Get Started Free</Button></Link>
            <Link to="/login"><Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">I have an account</Button></Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo size="sm" />
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} DigitalRakshak. Built for a safer digital India.</p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#how" className="hover:text-foreground">How it works</a>
            <Link to="/login" className="hover:text-foreground">Login</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
