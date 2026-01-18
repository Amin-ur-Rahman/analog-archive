"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/login"); // Send them to login after success
      } else {
        const data = await res.json();
        setError(data.message || "Something went wrong");
      }
    } catch (err) {
      setError("Failed to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-8 bg-card p-8 border border-border rounded-lg shadow-sm">
        <div className="text-center">
          <h1 className="text-3xl font-black tracking-tighter uppercase">
            Join the <span className="text-primary">Archive</span>
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Create your collector profile
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              className="w-full p-3 bg-background border border-border rounded focus:border-primary outline-none transition-all"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              className="w-full p-3 bg-background border border-border rounded focus:border-primary outline-none transition-all"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest mb-1">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="Min. 6 characters"
              className="w-full p-3 bg-background border border-border rounded focus:border-primary outline-none transition-all"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          {error && (
            <p className="text-red-500 text-xs font-medium bg-red-500/10 p-2 rounded border border-red-500/20">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-primary text-primary-foreground font-black uppercase tracking-[0.2em] text-xs hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? "Registering..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-xs text-muted-foreground">
          Already a member?{" "}
          <Link
            href="/login"
            className="text-primary hover:underline font-bold"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
