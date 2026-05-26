import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    out: { opacity: 0, transition: { duration: 0.5, ease: "easeIn" } }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="bg-cream"
    >
      {/* Hero Section */}
      <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-beige -mt-20">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <img 
            src="/salon_interior.png" 
            alt="Salon Interior" 
            className="w-full h-full object-cover opacity-80"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2036&auto=format&fit=crop' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-text-dark/40 via-text-dark/20 to-cream"></div>
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-6xl md:text-8xl font-serif text-cream mb-6 drop-shadow-lg"
          >
            N.K Neha <br className="hidden md:block" />
            <span className="text-5xl md:text-7xl italic text-sage/90">Beauty Salon</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-2xl font-light text-beige tracking-widest uppercase mb-10"
          >
            Redefining Elegance
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Link to="/services" className="inline-block bg-cream text-text-dark px-8 py-4 rounded-full font-medium tracking-wider hover:bg-blush transition-colors duration-300">
              Discover Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Experience Section (Scroll Bound) */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-text-dark mb-8">A Sanctuary <br/> <span className="text-sage italic">of Beauty</span></h2>
            <p className="text-lg text-text-light font-light leading-relaxed mb-8">
              Step into a realm where luxury meets tranquility. Our expert stylists and estheticians are dedicated to enhancing your natural beauty in an environment designed for ultimate relaxation. Using only the finest premium products, we craft personalized experiences tailored to your unique style and needs.
            </p>
            <Link to="/lookbook" className="inline-flex items-center space-x-2 text-sage hover:text-text-dark font-medium transition-colors border-b border-sage pb-1">
              <span>View our Lookbook</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
          <motion.div 
            className="relative h-[600px] w-full rounded-tr-[100px] rounded-bl-[100px] overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <img 
              src="/salon_exterior.png" 
              alt="Salon Exterior" 
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1521590832167-7bfcfaa6362f?q=80&w=2070&auto=format&fit=crop' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Services Teaser Grid */}
      <section className="py-24 bg-lavender/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif text-text-dark mb-16"
          >
            Our Offerings
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Hair Design", img: "/salon_stylists_row_2.png", defaultImg: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop" },
              { title: "Bridal Makeup", img: "/salon_stylists_row_1.png", defaultImg: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop" },
              { title: "Skin Therapy", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop", defaultImg: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop" }
            ].map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group cursor-pointer relative overflow-hidden rounded-lg aspect-[4/5]"
              >
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { e.target.src = service.defaultImg }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-text-dark/80 to-transparent flex items-end justify-center pb-10">
                  <h3 className="text-2xl font-serif text-cream transition-transform duration-500 group-hover:-translate-y-2">{service.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-16">
             <Link to="/services" className="inline-block bg-text-dark text-cream px-8 py-4 rounded-full font-medium tracking-wider hover:bg-sage transition-colors duration-300">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
    </motion.div>
  );
};

export default Home;
