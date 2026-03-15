import React from "react";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent", { description: "Thank you for contacting us. We'll get back to you soon." });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/65 to-background/80" />
        <div className="relative max-w-[120rem] mx-auto px-6 lg:px-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-5xl lg:text-7xl font-bold text-primary mb-5"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-paragraph text-lg lg:text-xl text-foreground/85 max-w-3xl mx-auto"
          >
            Questions, catering requests, or feedback. Reach us directly or send a message and we will reply soon.
          </motion.p>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-primary mb-6">Visit Us</h2>

              <div className="rounded-2xl border border-buttonborder bg-secondary/35 p-6 lg:p-7">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="text-primary mt-1" size={20} />
                  <p className="font-paragraph text-base lg:text-lg text-foreground">
                    1 Westmount square suite 106 et 111, Westmount, QC, Canada, Quebec
                  </p>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <Phone className="text-primary" size={20} />
                  <a href="tel:+15149338959" className="font-paragraph text-base lg:text-lg text-foreground hover:text-primary transition-colors">
                    +1 514-933-8959
                  </a>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <Mail className="text-primary" size={20} />
                  <a href="mailto:Dafinos.ca@gmail.com" className="font-paragraph text-base lg:text-lg text-foreground hover:text-primary transition-colors">
                    Dafinos.ca@gmail.com
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="text-primary mt-1" size={20} />
                  <div className="font-paragraph text-base lg:text-lg text-foreground">
                    <p>Monday - Friday: 9:00 AM - 4:00 PM</p>
                    <p>Saturday - Sunday: 9:00 AM - 3:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-buttonborder bg-secondary/40 p-8 lg:p-10"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-6 lg:mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-background border-2 border-buttonborder text-primary font-paragraph text-base lg:text-lg px-4 py-3"
                />
                <Input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-background border-2 border-buttonborder text-primary font-paragraph text-base lg:text-lg px-4 py-3"
                />
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className="w-full bg-background border-2 border-buttonborder text-primary font-paragraph text-base lg:text-lg px-4 py-3"
                />
                <Textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us how we can help..."
                  className="w-full bg-background border-2 border-buttonborder text-primary font-paragraph text-base lg:text-lg px-4 py-3 resize-none"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph text-lg lg:text-xl py-6 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={20} />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

