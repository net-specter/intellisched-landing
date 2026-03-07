"use client";

export function Features() {
  const features = [
    {
      icon: "🎯",
      title: "AI-Powered Study Plans",
      description:
        "Intelligent algorithms analyze your progress and generate personalized daily study schedules optimized for your exam date.",
    },
    {
      icon: "📊",
      title: "Personalized Assessment",
      description:
        "Comprehensive diagnostic quizzes identify your knowledge gaps and track improvement with detailed analytics.",
    },
    {
      icon: "🔄",
      title: "Dynamic Adjustment",
      description:
        "Plans automatically adapt to your performance, adjusting difficulty and focus areas in real-time.",
    },
    {
      icon: "🔔",
      title: "Smart Reminders",
      description:
        "Intelligent notification system keeps you motivated and on track with customizable reminder preferences.",
    },
    {
      icon: "❓",
      title: "Practice Quiz Generator",
      description:
        "Unlimited quizzes drawn from BACII question database with instant feedback and detailed explanations.",
    },
    // {
    //   icon: "👥",
    //   title: "Study Groups",
    //   description:
    //     "Collaborate with peers, share knowledge, and stay accountable through virtual study communities.",
    // },
    // {
    //   icon: "📈",
    //   title: "Progress Dashboard",
    //   description:
    //     "Visual tools show your syllabus coverage, strengths, weaknesses, and projected exam readiness.",
    // },
    {
      icon: "🏆",
      title: "Motivation System",
      description:
        "Earn badges, maintain study streaks, and unlock achievements to stay motivated throughout your journey.",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-secondary"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features for <span className="gradient-text">Success</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to master the BACII exam with confidence and
            achieve your academic goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-hover p-6 rounded-2xl bg-white dark:bg-dark-base border border-gray-200 dark:border-dark-tertiary/50 shadow-sm dark:shadow-lg space-y-4"
            >
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
