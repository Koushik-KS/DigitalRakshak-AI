import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Eye, EyeOff, Loader2, Mail, Lock, User, ShieldCheck } from "lucide-react";
import { AuthShell } from "./login";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Sign up — DigitalRakshak" }, { name: "description", content: "Create your DigitalRakshak account." }] }),
  component: Signup,
});

function Signup() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) return toast.error("Please fill all fields");
    if (password.length < 6) return toast.error("Password must be at least 6 characters");
    setLoading(true);
    try {
      const u = await signup(name, email, password);
      toast.success(`Account created for ${u.name}`);
      navigate({ to: u.role === "admin" ? "/admin" : "/dashboard" });
    } catch { toast.error("Signup failed"); }
    finally { setLoading(false); }
  };

  return (
    <AuthShell title="Create your account" subtitle="Start protecting your digital payments in under a minute.">
      <form onSubmit={submit} className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="name">Full name</Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input id="name" placeholder="Aarav Sharma" className="pl-9" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        </div>
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
            <Input id="password" type={show ? "text" : "password"} placeholder="At least 6 characters" className="pl-9 pr-10" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="button" onClick={() => setShow((s) => !s)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
              {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <Button type="submit" disabled={loading} className="w-full gradient-primary text-primary-foreground shadow-glow-cyan">
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Create account <ShieldCheck className="ml-1 h-4 w-4" /></>}
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          Already have an account? <Link to="/login" className="text-accent hover:underline">Sign in</Link>
        </p>
      </form>
    </AuthShell>
  );
}
