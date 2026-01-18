"use client";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">
          Preserving <span className="text-primary">Grain</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Analog Archive is a digital sanctuary for mechanical precision in an
          increasingly virtual world.
        </p>
      </section>

      {/* The Mission */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-muted aspect-square rounded-lg flex items-center justify-center border border-border overflow-hidden">
          {/* Placeholder for a nice film-related image */}
          <div className="text-[100px] opacity-10">🎞️</div>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold uppercase tracking-tight">
            The Mission
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            In the era of instant gratification and digital filters, the tactile
            experience of film photography is a form of meditation. We built
            this archive to document the history, technical specifications, and
            stories behind the tools that captured the last century.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Every item entered into this database is more than just "stock"—it
            is a piece of industrial art.
          </p>
        </div>
      </section>

      {/* The Tech Stack (The "Assignment" Part) */}
      <section className="border-t border-border pt-16">
        <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-center text-primary">
          Under the Hood
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <h3 className="font-bold">Next.js 15</h3>
            <p className="text-xs text-muted-foreground">The Engine</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">MongoDB Atlas</h3>
            <p className="text-xs text-muted-foreground">The Vault</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">NextAuth.js</h3>
            <p className="text-xs text-muted-foreground">The Guard</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Tailwind CSS</h3>
            <p className="text-xs text-muted-foreground">The Aesthetic</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground p-12 rounded-2xl text-center space-y-6">
        <h2 className="text-3xl font-black uppercase tracking-tighter">
          Ready to contribute?
        </h2>
        <p className="opacity-90 max-w-md mx-auto">
          Join our community of collectors and help us document the world of
          analog photography.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/register"
            className="bg-primary-foreground text-primary px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Join Now
          </Link>
        </div>
      </section>

      <footer className="text-center text-[10px] text-muted-foreground uppercase tracking-[0.5em] pb-10">
        &copy; 2026 Analog Archive &mdash; Developed with Intent
      </footer>
    </div>
  );
}
