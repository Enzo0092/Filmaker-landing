import { motion } from "motion/react";
import { Award, Zap, Users, Heart } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Award-Winning Quality",
    description: "Delivering excellence with every frame, backed by years of industry experience.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Efficient workflow without compromising on quality or attention to detail.",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description: "Your vision drives the process. I work closely with you to ensure satisfaction.",
  },
  {
    icon: Heart,
    title: "Passionate Storytelling",
    description: "Every project is crafted with dedication, creativity, and artistic vision.",
  },
];

export function WhyWorkWithMe() {
  return (
    <section className="py-32 px-6 bg-black">
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
              Why Work With Me
            </span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Combining technical expertise with creative vision to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-10 h-10 text-amber-500" />
                </div>
                <h3 className="text-xl mb-3 text-white">{reason.title}</h3>
                <p className="text-neutral-400 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
