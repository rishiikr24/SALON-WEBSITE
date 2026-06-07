import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "AKASH",
    date: "22 Dec 2024",
    stars: 5,
    text: "Very nice and hygienic parlour. Service is also good and pocket friendly. And the staff is super sweet by their behavior 👍👍👍👍👍"
  },
  {
    id: 2,
    name: "Chanda Verma",
    date: "31 Dec 2024",
    stars: 5,
    text: "Lumina Aesthetics exceeded my expectations with their exceptional beauty and personal care services. The results were excellent, leaving me feeling rejuvenated and confident. The staff was professional and attentive, ensuring a truly wonderful experience."
  },
  {
    id: 3,
    name: "Shreya Kundu",
    date: "30 Dec 2024",
    stars: 5,
    text: "I am a very old customer of Lumina Aesthetics since 2009. I would like to thank them because of their pleasant and professional services. Their expert and accurate advices matters a lot. I heartily recommend this salon to any one who wants to come out happy, relaxed & smiling."
  },
  {
    id: 4,
    name: "Raj Shree",
    date: "Recently",
    stars: 5,
    text: "Lumina Aesthetics offers an exceptional beauty and personal care experience. With a hygienic salon environment and clean equipment, you can relax in the cosy space that exudes a luxurious vibe. Their highly skilled professionals provide top-notch services at reasonable prices, complemented by great offers. Whether you're looking for a quick touch-up or a full pampering session, this salon is the perfect choice for anyone seeking quality and comfort!"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewForm, setReviewForm] = useState({ name: '', rating: 5, text: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setReviewForm({ name: '', rating: 5, text: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section className="py-24 bg-beige relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Testimonials Slideshow */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif text-text-dark mb-10"
            >
              Client Stories
            </motion.h2>
            
            <div className="relative bg-white/60 p-8 md:p-10 rounded-2xl shadow-sm border border-sage/20 min-h-[320px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col h-full justify-between"
                >
                  <div>
                    <div className="flex space-x-1 mb-6 text-blush">
                      {[...Array(reviews[currentIndex].stars)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-lg md:text-xl font-serif italic text-text-dark leading-relaxed mb-8">
                      "{reviews[currentIndex].text}"
                    </p>
                  </div>
                  <div className="flex justify-between items-end border-t border-sage/20 pt-6">
                    <div>
                      <h4 className="font-medium text-text-dark uppercase tracking-wider text-sm">{reviews[currentIndex].name}</h4>
                      <p className="text-xs text-text-light mt-1">{reviews[currentIndex].date}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="absolute -bottom-6 right-8 flex space-x-2">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 bg-sage text-white rounded-full flex items-center justify-center hover:bg-sage/90 transition-colors shadow-md"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 bg-sage text-white rounded-full flex items-center justify-center hover:bg-sage/90 transition-colors shadow-md"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Leave a Review Form */}
          <div className="bg-white/80 p-8 md:p-10 rounded-2xl shadow-sm border border-sage/20">
            <h3 className="text-3xl font-serif text-text-dark mb-2">Leave a Review</h3>
            <p className="text-text-light font-light mb-8">We value your feedback and would love to hear about your experience.</p>
            
            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-sage" fill="currentColor" size={30} />
                </div>
                <h4 className="text-xl font-serif text-text-dark mb-2">Thank You!</h4>
                <p className="text-text-light font-light">Your review has been submitted successfully.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-text-dark mb-2">Your Name</label>
                  <input 
                    required 
                    type="text" 
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm({...reviewForm, name: e.target.value})}
                    className="w-full bg-white border border-sage/20 rounded-lg px-4 py-3 focus:outline-none focus:border-sage transition-colors" 
                    placeholder="Enter your name" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-text-dark mb-2">Rating</label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setReviewForm({...reviewForm, rating: star})}
                        className="focus:outline-none"
                      >
                        <Star 
                          size={28} 
                          className={`transition-colors ${star <= reviewForm.rating ? 'text-blush' : 'text-sage/20'}`} 
                          fill={star <= reviewForm.rating ? 'currentColor' : 'none'}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-text-dark mb-2">Your Review</label>
                  <textarea 
                    required 
                    rows="4"
                    value={reviewForm.text}
                    onChange={(e) => setReviewForm({...reviewForm, text: e.target.value})}
                    className="w-full bg-white border border-sage/20 rounded-lg px-4 py-3 focus:outline-none focus:border-sage transition-colors resize-none" 
                    placeholder="Share your experience..." 
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full bg-text-dark text-white py-4 rounded-full font-medium tracking-wider hover:bg-sage transition-colors mt-2">
                  Submit Review
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
