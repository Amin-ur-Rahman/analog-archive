export default function Newsletter() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 tracking-tight">
          Join the Collector's List
        </h2>
        <p className="max-w-xl mx-auto mb-8 opacity-90">
          Be the first to know about rare acquisitions and limited drops. We
          only send emails worth opening.
        </p>
        <form className="max-w-md mx-auto flex gap-2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 p-4 rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <button
            type="submit"
            className="bg-foreground text-background px-6 py-4 rounded font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
