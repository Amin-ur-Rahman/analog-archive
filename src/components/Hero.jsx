import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-border">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/60 dark:bg-background/80 z-10 backdrop-grayscale-[50%]" />
        {/* Using a generic vintage Unsplash image */}
        <img
          src="https://images.unsplash.com/photo-1495707902641-75cac588d2e9?q=80&w=2000&auto=format&fit=crop"
          alt="Vintage Camera Lens"
          className="w-full h-full object-cover opacity-50 dark:opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
          PRESERVE THE GRAIN
        </h1>
        <p className="max-w-xl mx-auto text-lg text-muted-foreground mb-8 leading-relaxed">
          A curated archive of analog photography gear and timeless vinyl
          records. Celebrating the tactile beauty of mechanical media.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/items"
            className="bg-primary text-primary-foreground px-8 py-4 rounded font-bold uppercase tracking-widest hover:opacity-90 transition-all"
          >
            Explore Archive
          </Link>
          <Link
            href="/about"
            className="border-2 border-primary text-primary px-8 py-4 rounded font-bold uppercase tracking-widest hover:bg-primary/10 transition-all"
          >
            Our Philosophy
          </Link>
        </div>
      </div>
    </section>
  );
}
