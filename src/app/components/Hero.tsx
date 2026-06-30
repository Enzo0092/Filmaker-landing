import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1576280314550-773c50583407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBkYXJrJTIwbW9vZHklMjBmaWxtbWFrZXJ8ZW58MXx8fHwxNzgyNTg3ODY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Cinematic background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-white to-neutral-300 bg-clip-text text-transparent">
              Transforming Ideas into
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Cinematic Stories
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-neutral-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Professional video editing and filmmaking services that bring your vision to life.
          From concept to final cut, creating compelling visual narratives that captivate and inspire.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-8 py-6 text-lg rounded-full shadow-2xl shadow-amber-500/30 transition-all duration-300 hover:scale-105"
          >
            Let's Work Together
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-neutral-600 bg-black/40 backdrop-blur-sm text-white hover:bg-neutral-900 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            View Portfolio
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="w-6 h-10 border-2 border-neutral-600 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-amber-500 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
