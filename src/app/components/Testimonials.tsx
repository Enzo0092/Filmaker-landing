import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Marketing Director",
    company: "TechVision Inc.",
    text: "Absolutely phenomenal work! The attention to detail and creative vision exceeded our expectations. Our brand video has generated incredible engagement.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Founder",
    company: "Urban Clothing Co.",
    text: "Professional, creative, and incredibly talented. The commercial he produced for our launch campaign was cinematic and perfectly captured our brand essence.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Content Creator",
    company: "Digital Nomad",
    text: "Fast turnaround without sacrificing quality. The color grading and editing transformed my raw footage into something truly spectacular.",
    rating: 5,
  },
];

export function Testimonials() {
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
              Client Testimonials
            </span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Hear from clients who have experienced the difference
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-neutral-900 to-neutral-950 border-neutral-800 p-8 rounded-3xl h-full hover:border-amber-500/30 transition-all duration-300">
                <Quote className="w-10 h-10 text-amber-500 mb-6 opacity-50" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                <p className="text-neutral-300 mb-8 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-neutral-800 pt-6">
                  <h4 className="text-white mb-1">{testimonial.name}</h4>
                  <p className="text-neutral-400 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
