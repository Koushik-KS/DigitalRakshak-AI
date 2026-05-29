import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Loader2, Mail, Lock, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Login — DigitalRakshak" }, { name: "description", content: "Login to DigitalRakshak." }] }),
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return toast.error("Please fill all fields");
    setLoading(true);
    try {
      const u = await login(email, password);
      toast.success(`Welcome back, ${u.name}`);
      navigate({ to: u.role === "admin" ? "/admin" : "/dashboard" });
    } catch {
      toast.error("Login failed");
    } finally { setLoading(false); }
  };

  return (
    <AuthShell title="Welcome back" subtitle="Sign in to continue protecting your payments.">
      <form onSubmit={submit} className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input id="email" type="email" placeholder="you@example.com" className="pl-9" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input id="password" type={show ? "text" : "password"} placeholder="••••••••" className="pl-9 pr-10" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="button" onClick={() => setShow((s) => !s)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
              {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center gap-2 text-muted-foreground"><input type="checkbox" className="rounded" /> Remember me</label>
          <Link to="/forgot-password" className="text-accent hover:underline">Forgot password?</Link>
        </div>
        <Button type="submit" disabled={loading} className="w-full gradient-primary text-primary-foreground shadow-glow-cyan">
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Sign in <ShieldCheck className="ml-1 h-4 w-4" /></>}
        </Button>
        <div className="relative my-4 text-center text-xs text-muted-foreground">
          <span className="bg-card px-2 relative z-10">or continue with</span>
          <div className="absolute inset-x-0 top-1/2 h-px bg-border" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button type="button" variant="outline" onClick={() => toast.info("Mock social login")}>Google</Button>
          <Button type="button" variant="outline" onClick={() => toast.info("Mock social login")}>Apple</Button>
        </div>
        <p className="text-center text-xs text-muted-foreground">
          New to DigitalRakshak? <Link to="/signup" className="text-accent hover:underline">Create an account</Link>
        </p>
        <p className="text-center text-[11px] text-muted-foreground">
          Tip: use an email containing <span className="text-accent">"admin"</span> to login as admin.
        </p>
      </form>
    </AuthShell>
  );
}

export function AuthShell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:flex relative gradient-hero items-center justify-center p-12 border-r border-border">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-md">
          <Logo size="lg" />
          <h1 className="mt-8 text-4xl font-bold leading-tight">AI cybersecurity for every <span className="text-gradient">digital payment</span>.</h1>
          <p className="mt-4 text-muted-foreground">Realtime fraud verdicts, scam-message detection and a learning center — all in one beautiful dashboard.</p>
          <div className="mt-10 glass rounded-2xl p-5 animate-float">
            <p className="text-xs uppercase tracking-widest text-accent">Live verdict</p>
            <p className="mt-2 font-semibold">amazon@apl · ₹1,499</p>
            <p className="text-sm text-success mt-1">✓ Genuine — verified merchant</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-6">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
          <div className="lg:hidden mb-6"><Logo /></div>
          <div className="glass-strong rounded-2xl p-7 shadow-elegant">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
            <div className="mt-6">{children}</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
