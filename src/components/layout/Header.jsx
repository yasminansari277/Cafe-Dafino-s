import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: t('header.nav.home') },
    { path: "/menu", label: t('header.nav.menu') },
    { path: "/gallery", label: t('header.nav.gallery') },
    { path: "/contact", label: t('header.nav.contact') },
    { path: "/login", label: t('header.nav.login') }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link to="/" className="flex items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="font-heading text-2xl lg:text-3xl font-bold text-primary tracking-wider">{t('header.title')}</h1>
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`font-paragraph text-base lg:text-lg transition-colors duration-300 ${
                    location.pathname === link.path ? "text-primary font-semibold underline" : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <LanguageSwitcher />
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-primary p-2" aria-label="Toggle menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <button
              className="absolute inset-0 bg-black/55 backdrop-blur-[1px]"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute right-0 top-0 h-full w-[82%] max-w-sm bg-background/80 backdrop-blur-xl border-l border-primary/20 shadow-2xl"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-primary/10">
                <p className="font-heading text-xl text-primary">Navigation</p>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-primary p-1"
                  aria-label="Close menu"
                >
                  <X size={26} />
                </button>
              </div>

              <nav className="flex flex-col px-6 py-6 gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-paragraph text-lg py-3 border-b border-primary/10 transition-colors duration-300 ${
                      location.pathname === link.path ? "text-primary font-semibold" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-primary/10 mt-4">
                  <LanguageSwitcher />
                </div>
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
