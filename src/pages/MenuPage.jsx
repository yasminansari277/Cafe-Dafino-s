import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function MenuPage() {
  const menuCategories = [
    {
      title: "Mediterranean Salads",
      description: "A huge diversity of fresh, artisanal salads [5, 9].",
      items: [
        { name: "3-Salad Combo (Includes Drink)", price: "16.00", desc: "Choose three: Lentil Rice, Couscous, or Ratatouille [6, 8]." },
        { name: "4-Salad Combo (Includes Drink)", price: "18.00", desc: "Choose four fresh daily selections [7, 10]." },
        { name: "Ratatouille Salad", price: "7.50", desc: "Eggplant, tomato, and chickpeas [6, 11]." },
        { name: "Lentil Rice Salad", price: "7.00", desc: "Freshly prepared Lebanese style [12, 13]." }
      ]
    },
    {
      title: "Signature Sandwiches",
      description: "Generous portions with fresh ingredients [13, 14].",
      items: [
        { name: "Cajun Chicken Sandwich", price: "13.50", desc: "Our highly recommended house specialty [3, 4]." },
        { name: "Full Sandwich Plate", price: "17.00", desc: "A filling plate with your choice of sandwich and sides [12, 15]." },
        { name: "Chicken Specialty Wraps", price: "12.50", desc: "Available in various Mediterranean flavours [4]." },
        { name: "Tuna Croquette Sandwich", price: "11.50", desc: "Fresh tuna prepared daily [5]." }
      ]
    },
    {
      title: "Hot Kitchen & Soups",
      description: "Warm, comforting dishes made fresh [5, 9].",
      items: [
        { name: "House Lasagna", price: "15.00", desc: "Classic hot dish served with a side [5]." },
        { name: "Spinach Quiche", price: "9.50", desc: "Freshly baked savory pastry [5]." },
        { name: "Vegetarian Soup", price: "6.50", desc: "Daily selection of fresh vegetable soups [5]." },
        { name: "Chicken & Vegetable Soup", price: "7.50", desc: "Hearty and homemade [5]." }
      ]
    },
    {
      title: "Beverages",
      description: "Specialized coffee and refreshing drinks [5].",
      items: [
        { name: "Espresso", price: "3.50", desc: "Rich and professional grade [5]." },
        { name: "Specialized Coffee", price: "5.50", desc: "Lattes, Cappuccinos, and more [5]." },
        { name: "Soft Drinks", price: "2.50", desc: "Included in combo plates [6, 7]." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/65 to-background/80" />
        <div className="relative max-w-[120rem] mx-auto px-6 lg:px-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 rounded-full border border-primary/30 bg-background/60 px-5 py-2 font-paragraph text-sm tracking-wide text-primary"
          >
            Crafted Fresh Daily
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-5xl lg:text-7xl font-bold text-primary mb-6"
          >
            Our Menu
          </motion.h1>
          <p className="font-paragraph text-lg lg:text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our carefully crafted beverages and artisanal treats.
          </p>
        </div>
      </section>

      <section className="relative pb-16 lg:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-background/55" />
        <div className="relative max-w-[120rem] mx-auto px-6 lg:px-12 grid gap-8 lg:gap-10">
          {menuCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-2xl border border-buttonborder bg-secondary/40 overflow-hidden"
            >
              <div className="border-b border-buttonborder px-6 py-5 lg:px-8">
                <h2 className="font-heading text-2xl lg:text-3xl text-primary mb-1">{category.title}</h2>
                <p className="font-paragraph text-sm lg:text-base text-foreground/80">{category.description}</p>
              </div>

              <div className="px-6 py-4 lg:px-8 lg:py-6 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                {category.items.map((item) => (
                  <div key={item.name} className="flex items-start justify-between gap-4 border-b border-primary/10 pb-3">
                    <div>
                      <h3 className="font-heading text-lg lg:text-xl text-primary">{item.name}</h3>
                      <p className="font-paragraph text-sm text-foreground/75">{item.desc}</p>
                    </div>
                    <span className="font-heading text-lg font-bold text-linkcolor whitespace-nowrap">${item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
