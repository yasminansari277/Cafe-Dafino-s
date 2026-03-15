import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Image } from "@/components/ui/Image";
import { BaseCrudService } from "@/services/cmsService";

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const loadGalleryItems = async () => {
      try {
        setIsLoading(true);
        const result = await BaseCrudService.getAll("gallery");
        setGalleryItems(result.items || []);
      } finally {
        setIsLoading(false);
      }
    };

    loadGalleryItems();
  }, []);

  const categories = ["All", ...Array.from(new Set(galleryItems.map((item) => item.category).filter(Boolean)))];
  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 text-center">
          <h1 className="font-heading text-5xl lg:text-7xl font-bold text-primary mb-6">Gallery</h1>
        </div>
      </section>

      <section className="py-8 bg-secondary">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 font-paragraph text-base lg:text-lg font-medium border-2 transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-secondary-foreground border-buttonborder hover:bg-primary hover:text-primary-foreground hover:border-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 min-h-[400px]">
          {isLoading ? null : filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredItems.map((item, index) => (
                <motion.button
                  key={item._id || index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="group overflow-hidden border border-buttonborder bg-secondary/30 text-left"
                  onClick={() => setSelectedImage(item)}
                >
                  {item.image ? (
                    <div className="aspect-square overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title || "Gallery image"}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : null}
                  <div className="p-4 border-t border-buttonborder">
                    <p className="font-paragraph text-xs uppercase tracking-wide text-foreground/60 mb-1">{item.category}</p>
                    <h3 className="font-heading text-lg text-primary">{item.title}</h3>
                    <p className="font-paragraph text-sm text-foreground/75">{item.description}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          ) : (
            <p className="text-center py-20 font-paragraph text-xl text-foreground">No images found in this category</p>
          )}
        </div>
      </section>

      {selectedImage ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4 lg:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-primary-foreground"
            aria-label="Close"
          >
            <X size={40} />
          </button>

          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            {selectedImage.image ? (
              <Image
                src={selectedImage.image}
                alt={selectedImage.title || "Gallery image"}
                className="w-full max-h-[72vh] object-contain mb-4"
              />
            ) : null}
            <div className="text-primary-foreground">
              <p className="font-paragraph text-sm opacity-80 mb-1">{selectedImage.category}</p>
              <h3 className="font-heading text-2xl mb-1">{selectedImage.title}</h3>
              <p className="font-paragraph text-base opacity-90">{selectedImage.description}</p>
            </div>
          </div>
        </motion.div>
      ) : null}

      <Footer />
    </div>
  );
}
