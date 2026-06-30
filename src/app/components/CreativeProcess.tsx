import { motion } from "motion/react";
import { Search, Lightbulb, Video, Edit, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "Understanding your vision, goals, and target audience",
  },
  {
    icon: Lightbulb,
    title: "Planning",
    description: "Developing creative concepts and production strategy",
  },
  {
    icon: Video,
    title: "Production",
    description: "Capturing stunning footage with professional equipment",
  },
  {
    icon: Edit,
    title: "Editing",
    description: "Crafting the narrative through expert post-production",
  },
  {
    icon: CheckCircle,
    title: "Delivery",
    description: "Final review and delivery in your preferred format",
  },
];

export function CreativeProcess() {
  return (
    <section className="py-32 px-6 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl mb-6">
            <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              Creative Process
            </span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            A proven workflow that ensures quality, creativity, and timely delivery
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  className="relative text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {/* Timeline Node */}
                  <div className="relative z-10 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-neutral-900 to-black border-4 border-amber-500 mb-6 shadow-2xl shadow-amber-500/30">
                    <Icon className="w-10 h-10 text-amber-500" />
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 text-xs bg-amber-500 text-black px-2 py-1 rounded-full">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <h3 className="text-xl mb-3 text-white">{step.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
