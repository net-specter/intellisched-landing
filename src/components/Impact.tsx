"use client";

export function Impact() {
  const impacts = [
    {
      category: "For Students",
      items: [
        "Higher BACII pass rates and improved confidence",
        "Elimination of planning paralysis and procrastination",
        "Equitable access to quality exam preparation",
        "Personalized learning at their own pace",
      ],
    },
    {
      category: "For Schools & Teachers",
      items: [
        "Data-driven early intervention for at-risk students",
        "Easy class management and progress reporting",
        "Reduced workload for manual plan and test creation",
        "Real-time analytics and insights",
      ],
    },
    {
      category: "For Society",
      items: [
        "Sets a new digital standard for self-paced learning",
        "Democratizes effective test preparation nationwide",
        "Promotes positive study habits and independence",
        "Transforms education quality in Cambodia",
      ],
    },
  ];

  return (
    <section
      id="impact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary/5 to-cyan-500/5 dark:from-primary/5 dark:to-cyan-500/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Transforming education for students, teachers, and society across
            Cambodia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="card-hover p-8 rounded-2xl bg-white dark:bg-dark-base border-2 border-primary/20 dark:border-primary/10 space-y-6"
            >
              <h3 className="text-2xl font-bold bg-linear-to-br from-primary to-cyan-500 bg-clip-text text-transparent">
                {impact.category}
              </h3>
              <ul className="space-y-4">
                {impact.items.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-primary font-bold text-xl shrink-0">
                      ✓
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
