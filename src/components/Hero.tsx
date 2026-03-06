"use client";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-white to-gray-50 dark:from-dark-base dark:to-dark-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                🎓 Cambodia&apos;s AI-Powered Exam Prep
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight ">
              Transform Your{" "}
              <span className="gradient-text">BACII Exam Prep</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Empower Cambodian Grade 12 students with AI-powered, personalized
              study schedules. Master the BACII exam confidently with our
              intelligent learning platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary">Start Your Journey</button>
              <button className="btn-secondary">Watch Demo</button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200 dark:border-dark-tertiary">
              <div>
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Personalized
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">AI</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Powered
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">24/7</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Available
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 animate-slide-in">
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative h-full rounded-3xl bg-linear-to-br from-primary/10 to-cyan-500/10 dark:from-primary/5 dark:to-cyan-500/5 border border-primary/20 dark:border-primary/10 flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full flex flex-col items-center justify-center space-y-4 p-8">
                {/* Animated circles */}
                <div className="absolute w-32 h-32 rounded-full border-2 border-primary/30 animate-pulse"></div>
                <div
                  className="absolute w-24 h-24 rounded-full border-2 border-primary/50 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div className="relative z-10 w-16 h-16 rounded-full bg-linear-to-br from-primary to-cyan-500 flex items-center justify-center text-white text-2xl font-bold">
                  ✓
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
