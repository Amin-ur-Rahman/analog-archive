import ItemCard from "@/components/ItemsCard";

async function getAllItems() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  try {
    const res = await fetch(`${baseUrl}/api/get`, {
      cache: "no-store",
    });

    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Archive fetch error:", error);
    return [];
  }
}

export default async function ArchivePage() {
  const items = await getAllItems();

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="pt-16 pb-12 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
            The Full <span className="text-primary">Archive</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Browsing {items.length} curated pieces of analog history. From 35mm
            rangefinders to rare pressings.
          </p>
        </div>
      </header>

      {/* Grid Section */}
      <main className="container mx-auto px-4 py-12">
        {items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {items.map((item) => (
              <ItemCard key={item._id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-border rounded-lg">
            <p className="text-muted-foreground italic">
              No items found in the archive.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
