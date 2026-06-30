import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Film, Video, Share2, Plane, Palette, Sparkles } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Video Editing",
    description: "Professional post-production that transforms raw footage into compelling stories with precision and creativity.",
  },
  {
    icon: Video,
    title: "Commercial Videos",
    description: "High-impact promotional content designed to elevate your brand and convert viewers into customers.",
  },
  {
    icon: Share2,
    title: "Social Media Content",
    description: "Engaging, platform-optimized videos that capture attention and drive engagement across all channels.",
  },
  {
    icon: Plane,
    title: "Drone Footage",
    description: "Stunning aerial cinematography that adds breathtaking perspective and production value to any project.",
  },
  {
    icon: Palette,
    title: "Color Grading",
    description: "Cinematic color correction and grading that sets the mood and enhances the visual storytelling.",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description: "Dynamic animated graphics and visual effects that add polish and professionalism to your content.",
  },
];

export function Services() {
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
              Services
            </span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Comprehensive video production and post-production services tailored to your unique needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group bg-gradient-to-br from-neutral-900 to-neutral-950 border-neutral-800 p-8 rounded-3xl hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-amber-500" />
                  </div>
                  <h3 className="text-2xl mb-3 text-white">{service.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
