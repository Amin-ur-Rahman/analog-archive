"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function ContactPage() {
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSending(true);

    // Simulate an API call
    console.log("Contact Form Data:", data);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSending(false);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto mt-20 p-10 text-center space-y-4 border border-primary/20 rounded-lg">
        <h2 className="text-3xl font-black uppercase italic">
          Message Received
        </h2>
        <p className="text-muted-foreground">
          Thank you for reaching out. We will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs font-bold uppercase tracking-widest text-primary underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
      {/* Contact Info Side */}
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Have a question about a specific camera? Or perhaps you found a bug
            in the archive? Fill out the form and our team will assist you.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-muted flex items-center justify-center rounded-full text-lg">
              📍
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-primary">
                Office
              </p>
              <p className="text-sm">Rajshahi, Bangladesh</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-muted flex items-center justify-center rounded-full text-lg"></div>
            <div>
              <p className="text-[10px] font-black uppercase text-primary">
                Email
              </p>
              <p className="text-sm">hello@analogarchive.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="bg-card border border-border p-8 rounded-xl shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-[10px] font-bold uppercase tracking-widest mb-1 block">
              Your Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full p-3 bg-background border border-border rounded focus:border-primary outline-none transition-all"
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-red-500 text-[10px] mt-1 italic">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-[10px] font-bold uppercase tracking-widest mb-1 block">
              Email Address
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
              })}
              className="w-full p-3 bg-background border border-border rounded focus:border-primary outline-none transition-all"
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-[10px] mt-1 italic">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-[10px] font-bold uppercase tracking-widest mb-1 block">
              Subject
            </label>
            <select
              {...register("subject")}
              className="w-full p-3 bg-background border border-border rounded focus:border-primary outline-none transition-all"
            >
              <option>General Inquiry</option>
              <option>Archive Submission Help</option>
              <option>Technical Issue</option>
            </select>
          </div>

          <div>
            <label className="text-[10px] font-bold uppercase tracking-widest mb-1 block">
              Message
            </label>
            <textarea
              {...register("message", { required: "Message cannot be empty" })}
              rows="5"
              className="w-full p-3 bg-background border border-border rounded focus:border-primary outline-none transition-all"
              placeholder="How can we help?"
            />
            {errors.message && (
              <p className="text-red-500 text-[10px] mt-1 italic">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="w-full py-4 bg-primary text-primary-foreground font-black uppercase tracking-widest text-xs hover:opacity-90 disabled:opacity-50 transition-all shadow-lg shadow-primary/20"
          >
            {isSending ? "Dispatching..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
