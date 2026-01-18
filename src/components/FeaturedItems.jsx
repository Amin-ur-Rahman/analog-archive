"use client";
import Link from "next/link";

import { useEffect, useState } from "react";
import ItemCard from "./ItemsCard";

export default function FeaturedItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/get").then((res) => res.json().then((data) => setItems(data)));
  }, []);

  console.log(items);

  const displayItems = items.slice(0, 3);

  return (
    <section className="py-24 container mx-auto px-4 border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">
            The Vault
          </h2>
          <h3 className="text-4xl font-bold tracking-tight">
            Featured Acquisitions
          </h3>
        </div>
        <Link
          href="/items"
          className="text-muted-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1"
        >
          View Full Archive
        </Link>
      </div>

      {displayItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayItems.map((item) => (
            <ItemCard key={item._id || item.slug} item={item} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">Loading featured items...</p>
      )}
    </section>
  );
}
