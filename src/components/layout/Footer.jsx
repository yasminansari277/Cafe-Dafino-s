import React from "react";
import { Link } from "react-router-dom";
import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneDisplay = "+1 514-933-8959";
  const phoneHref = "tel:+15149338959";
  const { t } = useTranslation();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
    <footer className="bg-footerbackground text-primary-foreground">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <motion.div {...fadeInUp}>
            <h3 className="font-heading text-2xl font-bold mb-6">{t('footer.title')}</h3>
            <p className="font-paragraph text-base text-primary-foreground/90 leading-relaxed">
              {t('footer.description')}
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <h4 className="font-heading text-xl font-semibold mb-6">{t('footer.quickLinks')}</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="font-paragraph text-base text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-300">{t('header.nav.home')}</Link>
              <Link to="/menu" className="font-paragraph text-base text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-300">{t('header.nav.menu')}</Link>
              <Link to="/gallery" className="font-paragraph text-base text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-300">{t('header.nav.gallery')}</Link>
              <Link to="/contact" className="font-paragraph text-base text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-300">{t('header.nav.contact')}</Link>
            </nav>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <h4 className="font-heading text-xl font-semibold mb-6">{t('footer.contactUs')}</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3"><MapPin size={20} className="mt-1 flex-shrink-0" /><p className="font-paragraph text-base text-primary-foreground/90">1 Westmount square suite 106 et 111, Westmount, QC, Canada, Quebec</p></div>
              <div className="flex items-center gap-3"><Phone size={20} className="flex-shrink-0" /><p className="font-paragraph text-base text-primary-foreground/90">{phoneDisplay}</p></div>
              <div className="flex items-center gap-3"><Mail size={20} className="flex-shrink-0" /><p className="font-paragraph text-base text-primary-foreground/90">Dafinos.ca@gmail.com</p></div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.3 }}>
            <h4 className="font-heading text-xl font-semibold mb-6">{t('footer.openingHours')}</h4>
            <div className="flex items-start gap-3 mb-6">
              <Clock size={20} className="mt-1 flex-shrink-0" />
              <div className="font-paragraph text-base text-primary-foreground/90"><p>{t('footer.mondayFriday')}</p><p>{t('footer.saturdaySunday')}</p></div>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/p/Cafe-Dafinos-100063646476121/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-300" aria-label="Facebook"><Facebook size={24} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-300" aria-label="Instagram"><Instagram size={24} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-300" aria-label="Twitter"><Twitter size={24} /></a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-primary-foreground/20"
        >
          <p className="font-paragraph text-base text-center text-primary-foreground/80">{t('footer.copyright', { year: currentYear })}</p>
        </motion.div>
      </div>
    </footer>
      <a
        href={phoneHref}
        className="fixed bottom-6 right-6 z-[70] inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary/90"
        aria-label={`Call Cafe Dafino's at ${phoneDisplay}`}
      >
        <Phone size={18} />
        <span className="font-paragraph text-sm font-semibold">{t('footer.callNow')}</span>
      </a>
    </>
  );
}

