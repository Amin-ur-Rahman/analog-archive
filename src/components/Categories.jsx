import Link from "next/link";

export default function Categories() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-4 h-[500px]">
          {/* Cameras Link */}
          <Link
            href="/items?category=cameras"
            className="group relative overflow-hidden rounded-lg border border-border"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000"
              alt="Cameras"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-8 left-8 z-20">
              <h2 className="text-4xl font-bold text-white tracking-tight mb-2">
                CAMERAS
              </h2>
              <span className="text-primary font-medium uppercase tracking-widest">
                View Collection →
              </span>
            </div>
          </Link>

          {/* Vinyl Link */}
          <Link
            href="/items?category=vinyl"
            className="group relative overflow-hidden rounded-lg border border-border"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
            <img
              src="https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1000"
              alt="Vinyl Records"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-8 left-8 z-20">
              <h2 className="text-4xl font-bold text-white tracking-tight mb-2">
                VINYL
              </h2>
              <span className="text-primary font-medium uppercase tracking-widest">
                View Collection →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
