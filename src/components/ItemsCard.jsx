import Link from "next/link";

export default function ItemCard({ item }) {
  // Destructure based on your specific MongoDB JSON structure
  const { name, slug, price, category, imageUrl, properties, featured } = item;

  return (
    <div className="group relative bg-card border border-border rounded-lg overflow-hidden transition-all hover:border-primary hover:shadow-lg">
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-2 right-2 z-10 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
          Featured
        </div>
      )}

      {/* Image Container */}
      <div className=" overflow-hidden bg-muted">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Item Info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <span className="text-[10px] uppercase tracking-widest text-primary font-bold">
            {category}
          </span>
          <span className="text-sm font-semibold">${price}</span>
        </div>

        <h3 className="text-lg font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Technical Specs (Properties) */}
        <div className="flex flex-wrap gap-y-1 gap-x-3 mb-5 border-t border-border pt-3">
          <div className="text-[11px] text-muted-foreground">
            <span className="font-semibold text-foreground uppercase">
              Year:
            </span>{" "}
            {properties.year}
          </div>
          <div className="text-[11px] text-muted-foreground">
            <span className="font-semibold text-foreground uppercase">
              Condition:
            </span>{" "}
            {properties.condition}
          </div>
          {properties.format && (
            <div className="text-[11px] text-muted-foreground">
              <span className="font-semibold text-foreground uppercase">
                Format:
              </span>{" "}
              {properties.format}
            </div>
          )}
        </div>

        <Link
          href={`/items/${slug}`}
          className="block w-full text-center py-2 border border-foreground bg-foreground text-background font-bold text-xs uppercase tracking-widest hover:bg-transparent hover:text-foreground transition-all"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
