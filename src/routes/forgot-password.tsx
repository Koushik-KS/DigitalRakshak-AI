import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Loader2, Mail } from "lucide-react";
import { AuthShell } from "./login";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({ meta: [{ title: "Forgot password — DigitalRakshak" }] }),
  component: Forgot,
});

function Forgot() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return toast.error("Enter your email");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSent(true);
    toast.success("If an account exists, a reset link was sent.");
  };

  return (
    <AuthShell title="Reset your password" subtitle="We'll send you a link to set a new password.">
      {sent ? (
        <div className="text-center space-y-3">
          <p className="text-sm">Check your inbox at <span className="font-semibold">{email}</span>.</p>
          <Link to="/login" className="text-accent text-sm hover:underline">Back to login</Link>
        </div>
      ) : (
        <form onSubmit={submit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input id="email" type="email" placeholder="you@example.com" className="pl-9" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <Button type="submit" disabled={loading} className="w-full gradient-primary text-primary-foreground shadow-glow-cyan">
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send reset link"}
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            Remembered? <Link to="/login" className="text-accent hover:underline">Sign in</Link>
          </p>
        </form>
      )}
    </AuthShell>
  );
}
