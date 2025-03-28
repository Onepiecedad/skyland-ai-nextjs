import { cn } from "@/lib/utils";
import { glass, hover, transition, layout, typography } from "@/lib/theme";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className={cn("py-20", layout.container)}>
      <div className={layout.elementSpacing}>
        <h2 className={cn(typography.heading, "text-3xl sm:text-4xl")}>
          Your AI Employee—Fully Trained in Days, No Effort Required
        </h2>
        <p className={cn(typography.paragraph, "max-w-2xl")}>
          You focus on the results—we'll handle the setup. Just follow 4 simple steps.
        </p>
      </div>

      <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-white/85 mt-12">
        <li
          className={cn(
            glass.card,
            transition.base,
            hover.card,
            "p-6"
          )}
        >
          <div className="text-5xl font-bold text-blue-400 mb-4">1</div>
          <h3 className="text-lg font-semibold text-white/90 mb-2">
            Book Your Free AI Strategy Call
          </h3>
          <p className="text-sm text-white/75 mb-2">
            Let's break down your workflow to uncover time-wasters, bottlenecks, and untapped opportunities—then map out how AI can fix them fast.
          </p>
          <p className="text-sm text-white/70">
            This 15-minute call is where your transformation starts. We'll walk through your daily workflows and identify what's costing you time, money, and momentum. You'll get expert insight into what's possible with AI—without the jargon or sales pitch. Just clarity, strategy, and next steps you can act on.
          </p>
        </li>

        <li
          className={cn(
            glass.card,
            transition.base,
            hover.card,
            "p-6"
          )}
        >
          <div className="text-5xl font-bold text-blue-400 mb-4">2</div>
          <h3 className="text-lg font-semibold text-white/90 mb-2">
            Get Your Custom AI Plan
          </h3>
          <p className="text-sm text-white/75 mb-2">
            You'll receive a personalized automation roadmap—tailored to your workflows, goals, and growth potential.
          </p>
          <p className="text-sm text-white/70">
            After the strategy call, you'll receive a tailored automation plan based on your workflows, goals, and biggest opportunities. We'll show you what to automate, how it works, and the results you can expect. You'll know exactly what it costs, what it delivers, and how quickly it can go live—so you can move forward with total confidence.
          </p>
        </li>

        <li
          className={cn(
            glass.card,
            transition.base,
            hover.card,
            "p-6"
          )}
        >
          <div className="text-5xl font-bold text-blue-400 mb-4">3</div>
          <h3 className="text-lg font-semibold text-white/90 mb-2">
            We Build & Test Your AI Solution
          </h3>
          <p className="text-sm text-white/75 mb-2">
            We build, train, and test your custom AI system—so it's ready to perform from day one.
          </p>
          <p className="text-sm text-white/70">
            Once you approve the plan, we get to work. Your custom AI system is built, trained, and configured to match your workflows, rules, and preferences. You'll preview the system, test it live, and make final tweaks—so it works exactly how you want it. Launch in days, not months.
          </p>
        </li>

        <li
          className={cn(
            glass.card,
            transition.base,
            hover.card,
            "p-6"
          )}
        >
          <div className="text-5xl font-bold text-blue-400 mb-4">4</div>
          <h3 className="text-lg font-semibold text-white/90 mb-2">
            Launch & Start Seeing Results
          </h3>
          <p className="text-sm text-white/75 mb-2">
            Your AI system goes live—and keeps getting smarter with every interaction.
          </p>
          <p className="text-sm text-white/70">
            Once your system goes live, it doesn't just run—it learns. Every call, click, and conversation helps your AI improve accuracy, speed, and impact automatically. We monitor performance and make smart updates—so your results keep compounding without any extra effort from you.
          </p>
        </li>
      </ol>
    </section>
  );
} 