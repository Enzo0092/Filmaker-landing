import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MessageSquare, Instagram, Mail, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              Let's Connect
            </span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's discuss your project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="block"
          >
            <Card className="bg-gradient-to-br from-neutral-900 to-neutral-950 border-neutral-800 p-8 rounded-3xl text-center hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl text-white mb-2">WhatsApp</h3>
              <p className="text-neutral-400">Quick response guaranteed</p>
            </Card>
          </motion.a>

          <motion.a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="block"
          >
            <Card className="bg-gradient-to-br from-neutral-900 to-neutral-950 border-neutral-800 p-8 rounded-3xl text-center hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <div className="bg-gradient-to-br from-pink-500/20 to-purple-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl text-white mb-2">Instagram</h3>
              <p className="text-neutral-400">See my latest work</p>
            </Card>
          </motion.a>

          <motion.a
            href="mailto:contact@filmmaker.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="block"
          >
            <Card className="bg-gradient-to-br from-neutral-900 to-neutral-950 border-neutral-800 p-8 rounded-3xl text-center hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl text-white mb-2">Email</h3>
              <p className="text-neutral-400">contact@filmmaker.com</p>
            </Card>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-neutral-900 to-neutral-950 border-neutral-800 p-12 rounded-3xl max-w-3xl mx-auto">
            <h3 className="text-3xl text-white mb-8 text-center">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-black border-neutral-700 text-white placeholder:text-neutral-500 rounded-xl h-14 focus:border-amber-500"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-black border-neutral-700 text-white placeholder:text-neutral-500 rounded-xl h-14 focus:border-amber-500"
                  required
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-black border-neutral-700 text-white placeholder:text-neutral-500 rounded-xl min-h-[200px] focus:border-amber-500 resize-none"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black py-6 text-lg rounded-xl shadow-2xl shadow-amber-500/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
