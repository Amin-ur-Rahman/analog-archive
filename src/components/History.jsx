export default function History() {
  return (
    <section className="py-24 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div className=" rounded-lg overflow-hidden border border-border">
          <img
            src="https://images.unsplash.com/photo-1461360228754-6e81c478b882?q=80&w=1000"
            alt="Old film archive"
            className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div>
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">
            Our Origins
          </h2>
          <h3 className="text-3xl font-bold mb-6 tracking-tight">
            Curating History Since 2026
          </h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The Analog Archive began not as a store, but as a personal crusade
              against the ephemeral nature of the digital age. We believe
              physical media holds a soul that binary code cannot replicate.
            </p>
            <p>
              Every camera, lens, and record in our collection is rigorously
              inspected, cleaned, and graded. We aren't just selling objects; we
              are preserving the tools of memory creation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
