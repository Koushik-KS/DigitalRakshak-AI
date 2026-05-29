import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

export const Route = createFileRoute("/_authenticated")({
  component: AuthGate,
});

function AuthGate() {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate({ to: "/login" });
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen grid place-items-center text-muted-foreground text-sm">
        Checking session…
      </div>
    );
  }
  // Expose role via context where needed via useAuth().user
  void user;
  return <Outlet />;
}
