import React from "react";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Coffee, Heart, Instagram, MapPin, Users } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Image } from "@/components/ui/Image";
import { useTranslation } from 'react-i18next';

const SectionDivider = () => (
  <div className="w-full flex justify-center py-12 opacity-20">
    <div className="h-16 w-px bg-primary" />
  </div>
);

const ParallaxImage = ({ src, alt, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`overflow-hidden ${className || ""}`}>
      <motion.div style={{ y }} className="w-full h-[120%] -mt-[10%]">
        <Image src={src} alt={alt} className="w-full h-full object-cover" />
      </motion.div>
    </div>
  );
};

const FadeIn = ({ children, delay = 0, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function HomePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const { t } = useTranslation();

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-clip">
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-multiply" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }} />
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]" style={{ scaleX }} />

      <Header />

      <section className="relative w-full pt-32 lg:pt-48 pb-0 bg-background flex flex-col items-center">
        <div className="w-full max-w-[120rem] mx-auto px-6 lg:px-12 mb-16 lg:mb-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <span className="block font-paragraph text-sm lg:text-base tracking-[0.2em] uppercase text-primary/60 mb-6">{t('home.subtitle')}</span>
            <h1 className="font-heading text-6xl sm:text-8xl lg:text-[9rem] leading-[0.9] text-primary mb-8 tracking-tight">{t('home.title')}</h1>
            <p className="font-paragraph text-xl lg:text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed font-light">{t('home.description')}</p>
          </motion.div>
        </div>

        <div className="w-full h-[60vh] lg:h-[85vh] relative overflow-hidden">
          <ParallaxImage src="https://static.wixstatic.com/media/0ca13e_72b7403a0fe24a8984b934119168520e~mv2.png?originWidth=1600&originHeight=832" alt="Artisan table setting with coffee and pastries" className="w-full h-full" />
          <motion.div initial={{ opacity: 0, rotate: -10 }} animate={{ opacity: 1, rotate: 0 }} transition={{ delay: 1, duration: 1 }} className="absolute bottom-12 right-6 lg:bottom-24 lg:right-24 bg-background/90 backdrop-blur-sm p-6 lg:p-8 max-w-xs border border-primary/10 shadow-2xl hidden md:block">
            <p className="font-heading text-2xl text-primary mb-2">{t('home.openDaily')}</p>
            <p className="font-paragraph text-sm text-foreground/80" dangerouslySetInnerHTML={{ __html: t('home.hours') }}></p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-24 lg:py-40 bg-secondary text-secondary-foreground overflow-hidden">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-4">
              <FadeIn>
                <h2 className="font-heading text-4xl lg:text-6xl mb-8 text-primary">{t('home.principlesTitle')}</h2>
                <p className="font-paragraph text-lg lg:text-xl opacity-80 max-w-md leading-relaxed">{t('home.principlesDesc')}</p>
              </FadeIn>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: Coffee, title: t('home.qualityTitle'), desc: t('home.qualityDesc') },
                  { icon: Heart, title: t('home.careTitle'), desc: t('home.careDesc') },
                  { icon: Users, title: t('home.communityTitle'), desc: t('home.communityDesc') }
                ].map((item, idx) => (
                  <FadeIn key={idx} delay={idx * 0.1} className="group">
                    <div className="h-full p-8 border border-primary/10 bg-background/50 hover:bg-background transition-colors duration-500 flex flex-col">
                      <div className="mb-6 p-4 bg-secondary w-fit rounded-full group-hover:scale-110 transition-transform duration-300"><item.icon size={32} className="text-primary" /></div>
                      <h3 className="font-heading text-2xl text-primary mb-4">{item.title}</h3>
                      <p className="font-paragraph text-base opacity-80 leading-relaxed flex-grow">{item.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-40 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <FadeIn className="text-center mb-20 lg:mb-32">
            <h2 className="font-heading text-5xl lg:text-7xl text-primary mb-6">{t('home.offeringsTitle')}</h2>
            <p className="font-paragraph text-xl text-foreground/60">{t('home.offeringsSubtitle')}</p>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-primary/10">
            <div className="group relative h-[600px] lg:h-[800px] overflow-hidden border-b lg:border-b-0 lg:border-r border-primary/10">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10" />
              <Image src="https://static.wixstatic.com/media/0ca13e_ee1021f54f5a46b5921eea355a750504~mv2.png?originWidth=960&originHeight=768" alt="Specialty Coffee" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 z-20 flex flex-col justify-between p-12 lg:p-16">
                <span className="font-paragraph text-primary-foreground/80 tracking-widest uppercase text-sm">01 - Beverage</span>
                <div>
                  <h3 className="font-heading text-5xl lg:text-6xl text-primary-foreground mb-4">{t('home.coffeeTitle')}</h3>
                  <p className="font-paragraph text-xl text-primary-foreground/90 max-w-md mb-8">{t('home.coffeeDesc')}</p>
                  <Link to="/menu" className="inline-flex items-center gap-2 text-primary-foreground border-b border-primary-foreground/30 pb-1 hover:border-primary-foreground transition-all">{t('home.viewCoffeeMenu')} <ArrowRight size={18} /></Link>
                </div>
              </div>
            </div>
            <div className="group relative h-[600px] lg:h-[800px] overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10" />
              <Image src="https://static.wixstatic.com/media/0ca13e_13987736607c4429be17d55d8c11182f~mv2.png?originWidth=960&originHeight=768" alt="Fresh Pastries" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30 border-t border-primary/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl lg:text-6xl text-primary mb-8">{t('home.experienceTitle')}</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/menu" className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-paragraph text-lg hover:bg-primary/90 transition-colors duration-300">{t('home.exploreMenu')}</Link>
              <Link to="/gallery" className="inline-flex items-center justify-center px-10 py-4 border border-primary text-primary font-paragraph text-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300">{t('home.viewGallery')}</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}


