import { motion } from 'framer-motion';

const Lookbook = () => {
  const images = [
    { src: "/salon_stylists_row_1.png", fallback: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop", span: "md:col-span-2 md:row-span-2" },
    { src: "/salon_stylists_row_2.png", fallback: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2036&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
    { src: "/salon_interior.png", fallback: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071&auto=format&fit=crop", fallback: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071&auto=format&fit=crop", span: "md:col-span-1 md:row-span-2" },
    { src: "/salon_exterior.png", fallback: "https://images.unsplash.com/photo-1521590832167-7bfcfaa6362f?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-2 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1516975080661-4623a9d98e7d?q=80&w=1974&auto=format&fit=crop", fallback: "https://images.unsplash.com/photo-1516975080661-4623a9d98e7d?q=80&w=1974&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  ];

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1, transition: { duration: 0.8 } },
    out: { opacity: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="bg-beige min-h-screen py-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-serif text-text-dark mb-4"
          >
            The Lookbook
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-text-light font-light tracking-wide"
          >
            A curated gallery of our finest transformations
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-4 md:gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className={`relative group overflow-hidden rounded-xl ${img.span}`}
            >
              <img
                src={img.src}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                onError={(e) => { e.target.src = img.fallback }}
              />
              <div className="absolute inset-0 bg-text-dark/0 group-hover:bg-text-dark/20 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Lookbook;
