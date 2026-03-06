"use client";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Get Assessed",
      description:
        "Take quick diagnostic quizzes in your BACII subjects to identify your knowledge gaps and baseline competency.",
    },
    {
      number: "02",
      title: "Personalized Plan",
      description:
        "Our AI analyzes your results and creates a customized day-by-day study roadmap based on your exam date.",
    },
    {
      number: "03",
      title: "Study & Practice",
      description:
        "Follow your plan with curated materials and adaptive quiz practice with instant feedback and explanations.",
    },
    {
      number: "04",
      title: "Track Progress",
      description:
        "Monitor your improvement with detailed analytics, heat maps, and progress projections throughout your journey.",
    },
    {
      number: "05",
      title: "Stay Accountable",
      description:
        "Earn badges, maintain study streaks, and join study groups to stay motivated and consistent.",
    },
    {
      number: "06",
      title: "Ace Your Exam",
      description:
        "Walk into your BACII exam fully prepared with confidence and a proven study strategy that works.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-base"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A simple, proven process to transform your exam preparation and
            achieve success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-6">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-primary to-cyan-500 text-white font-bold text-xl shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-8 top-20 w-0.5 h-24 bg-linear-to-b from-primary/50 to-transparent -ml-px -mt-2"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
