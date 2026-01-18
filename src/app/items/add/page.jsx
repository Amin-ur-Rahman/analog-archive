"use client";

import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function AddItemPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      stock: 1,
      featured: false,
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const slug = data.name
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

    const payload = {
      ...data,
      slug,
      price: Number(data.price),
      stock: Number(data.stock),
      userEmail: session.user.email,
      createdAt: new Date(),
    };

    try {
      const response = await fetch("/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        await Swal.fire({
          title: "Success!",
          text: "Item added to archive successfully",
          icon: "success",
          confirmButtonColor: "#d97706",
          confirmButtonText: "View Items",
        });
        reset();
        router.push("/items");
      } else {
        await Swal.fire({
          title: "Error!",
          text: "Failed to add item. Please try again.",
          icon: "error",
          confirmButtonColor: "#d97706",
        });
      }
    } catch (error) {
      console.error("Failed to add item", error);
      await Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonColor: "#d97706",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-card border border-border mt-10 rounded-sm shadow-lg mb-20">
      <h1 className="text-2xl font-black uppercase tracking-tighter mb-6">
        New <span className="text-primary">Archive Entry</span>
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xs font-black text-primary uppercase mb-3">
              General Details
            </h3>

            <div>
              <label className="text-xs font-bold uppercase tracking-wide mb-2 block text-foreground">
                Product Name
              </label>
              <input
                {...register("name", { required: true })}
                placeholder="e.g. Leica M6"
                className="w-full p-4 bg-background border border-border rounded-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wide mb-2 block text-foreground">
                Category
              </label>
              <input
                {...register("category", { required: true })}
                placeholder="e.g. Cameras"
                className="w-full p-4 bg-background border border-border rounded-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wide mb-2 block text-foreground">
                Image URL
              </label>
              <input
                {...register("imageUrl", { required: true })}
                placeholder="https://..."
                className="w-full p-4 bg-background border border-border rounded-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all"
              />
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="text-xs font-bold uppercase tracking-wide mb-2 block text-foreground">
                  Price
                </label>
                <input
                  type="number"
                  {...register("price", { required: true })}
                  placeholder="0.00"
                  className="w-full p-4 bg-background border border-border rounded-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all"
                />
              </div>
              <div className="w-1/2">
                <label className="text-xs font-bold uppercase tracking-wide mb-2 block text-foreground">
                  Stock
                </label>
                <input
                  type="number"
                  {...register("stock")}
                  placeholder="1"
                  className="w-full p-4 bg-background border border-border rounded-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 p-6 bg-muted/50 rounded-sm border border-border">
            <h3 className="text-xs font-black text-primary uppercase mb-3">
              Technical Properties
            </h3>

            <div>
              <label className="text-xs font-bold uppercase tracking-wide mb-2 block text-foreground">
                Brand
              </label>
              <input
                {...register("properties.brand")}
                placeholder="e.g. Leica"
                className="w-full p-4 bg-background border border-border rounded-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wide mb-2 block text-foreground">
                Year
              </label>
              <input
                type="number"
                {...register("properties.year")}
                placeholder="1984"
                className="w-full p-4 bg-background border border-border rounded-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wide mb-2 block text-foreground">
                Format
              </label>
              <input
                {...register("properties.format")}
                placeholder="e.g. 35mm Film"
                className="w-full p-4 bg-background border border-border rounded-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wide mb-2 block text-foreground">
                Condition
              </label>
              <input
                {...register("properties.condition")}
                placeholder="e.g. Excellent"
                className="w-full p-4 bg-background border border-border rounded-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="text-xs font-bold uppercase tracking-wide mb-2 block text-foreground">
            Description
          </label>
          <textarea
            {...register("description", { required: true })}
            rows="5"
            className="w-full p-4 bg-background border border-border rounded-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all resize-none"
            placeholder="Detailed history and description of the item..."
          />
        </div>

        <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-sm border border-border">
          <input
            type="checkbox"
            {...register("featured")}
            id="featured"
            className="w-5 h-5 accent-primary cursor-pointer"
          />
          <label
            htmlFor="featured"
            className="text-xs font-bold uppercase cursor-pointer select-none"
          >
            Feature this item in the gallery
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-primary text-primary-foreground font-black uppercase tracking-widest text-xs hover:opacity-90 disabled:opacity-50 rounded-sm transition-all shadow-lg hover:shadow-xl"
        >
          {isSubmitting ? "Uploading..." : "Save to Archive"}
        </button>
      </form>
    </div>
  );
}
