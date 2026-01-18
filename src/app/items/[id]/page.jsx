import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getItem(slug) {
  const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/get`, {
    cache: "no-store",
  });
  if (!res.ok) return null;

  const items = await res.json();
  return items.find((item) => item.slug === slug);
}

export default async function ItemDetails({ params }) {
  const { id } = await params;
  const item = await getItem(id);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/items"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          ← Back to Archive
        </Link>
      </div>

      <main className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Large Image */}
          <div className="border border-border rounded-lg overflow-hidden bg-muted  sticky top-16">
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={800}
              height={1000}
              priority={true} // Use this ONLY for the main hero/item image
              className="object-cover"
            />
          </div>

          {/* Right Side: Information */}
          <div className="flex flex-col">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-2">
              {item.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">
              {item.name}
            </h1>
            <p className="text-2xl font-semibold mb-8 border-b border-border pb-6">
              ${item.price}
            </p>

            <div className="mb-10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                Description
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Spec Sheet / Properties */}
            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
                Technical Specifications
              </h3>
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                {Object.entries(item.properties).map(([key, value]) => (
                  <div key={key} className="border-b border-border/50 pb-2">
                    <p className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider">
                      {key}
                    </p>
                    <p className="text-sm font-medium uppercase">{value}</p>
                  </div>
                ))}
                <div className="border-b border-border/50 pb-2">
                  <p className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider">
                    Availability
                  </p>
                  <p className="text-sm font-medium uppercase">
                    {item.stock > 0
                      ? `${item.stock} Unit(s) In Stock`
                      : "Sold Out"}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-foreground text-background py-4 font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
                Add to Collection
              </button>
              <button className="flex-1 border border-foreground py-4 font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all">
                Inquire
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
