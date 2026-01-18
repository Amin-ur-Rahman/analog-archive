export default function Testimonials() {
  return (
    <section className="py-24 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <svg
          className="w-12 h-12 text-primary/40 mx-auto mb-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-4 3.638-4 5.849h4v10h-10z" />
        </svg>
        <blockquote className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8">
          "I sourced a mint condition Leica M6 from the Archive. The grading was
          conservative, the packaging impeccable. It’s rare to find this level
          of respect for the medium."
        </blockquote>
        <div className="font-bold">
          — Sarah Chen,{" "}
          <span className="text-primary">Street Photographer</span>
        </div>
      </div>
    </section>
  );
}
