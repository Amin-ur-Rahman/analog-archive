const features = [
  {
    number: "01.",
    title: "Intentionality",
    description:
      "Limited exposures and physical processes force you to slow down, compose carefully, and make every shot count.",
  },
  {
    number: "02.",
    title: "Tactile Experience",
    description:
      "From the mechanical winding of film to dropping the needle on wax, engage with media physically, not just visually.",
  },
  {
    number: "03.",
    title: "Archival Quality",
    description:
      "Physical formats, when stored properly, outlast hard drives and cloud servers. Own your history properly.",
  },
];

export default function WhyAnalog() {
  return (
    <section className="py-24 container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-4 tracking-tight">
          Why We Return to the Physical
        </h2>
        <p className="text-muted-foreground">
          In an era of infinite digital noise, analog offers clarity, patience,
          and permanence.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-lg border border-border bg-card hover:border-primary transition-colors"
          >
            <span className="block text-5xl font-black text-primary/20 mb-4">
              {feature.number}
            </span>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
