import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
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
              About Me
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1587050265310-1a2d98ccce5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtbWFrZXIlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3ODI1ODc4NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional filmmaker portrait"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-4xl text-white mb-6">
              Crafting Visual Stories for Over{" "}
              <span className="text-amber-500">10 Years</span>
            </h3>
            
            <p className="text-neutral-300 leading-relaxed text-lg">
              I'm a passionate filmmaker and video editor dedicated to transforming ideas into 
              compelling visual narratives. With a keen eye for detail and a commitment to excellence, 
              I specialize in creating cinematic content that resonates with audiences and drives results.
            </p>

            <p className="text-neutral-300 leading-relaxed text-lg">
              My journey in filmmaking has taken me from corporate productions to creative campaigns, 
              working with brands and creators who value quality, creativity, and authentic storytelling. 
              Every project is an opportunity to push creative boundaries and deliver work that exceeds expectations.
            </p>

            <p className="text-neutral-300 leading-relaxed text-lg">
              Whether it's a brand film, commercial, or social media content, I bring the same level 
              of professionalism, artistic vision, and technical expertise to every collaboration. 
              Let's create something extraordinary together.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-800">
              <div>
                <div className="text-4xl text-amber-500 mb-2">500+</div>
                <div className="text-neutral-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl text-amber-500 mb-2">200+</div>
                <div className="text-neutral-400">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl text-amber-500 mb-2">15+</div>
                <div className="text-neutral-400">Awards Won</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
