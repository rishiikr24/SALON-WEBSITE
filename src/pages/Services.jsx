import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('Hair');
  const [bookingStep, setBookingStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', service: '', date: '', time: '', phone: '', email: '' });

  const servicesMenu = {
    'Hair': [
      { name: 'Signature Cut & Style', price: '₹850+' },
      { name: 'Balayage & Toner', price: '₹2200+' },
      { name: 'Full Color Transformation', price: '₹1800+' },
      { name: 'Keratin Smoothing', price: '₹2500+' },
      { name: 'Luxury Blowout', price: '₹550+' }
    ],
    'Skin': [
      { name: 'Custom Radiance Facial', price: '₹1200' },
      { name: 'Dermaplaning & Peel', price: '₹1500' },
      { name: 'HydraFacial MD', price: '₹1990' },
      { name: 'Microneedling', price: '₹2500' }
    ],
    'Makeup': [
      { name: 'Bridal Trial & Consultation', price: '₹1500' },
      { name: 'Bridal Day-Of Application', price: '₹2500' },
      { name: 'Event Glamour Makeup', price: '₹1200' },
      { name: 'Lash Extensions (Full Set)', price: '₹1800' }
    ]
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = (e) => {
    e.preventDefault();
    setBookingStep(step => step + 1);
  };

  const submitBooking = (e) => {
    e.preventDefault();
    setBookingStep(4); // Success state
  };

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
      className="bg-cream min-h-screen py-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Services Menu Section */}
        <div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-serif text-text-dark mb-8"
          >
            Service Menu
          </motion.h1>
          
          <div className="flex space-x-6 mb-10 border-b border-sage/30 pb-4 overflow-x-auto">
            {Object.keys(servicesMenu).map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-lg tracking-wider transition-colors font-medium whitespace-nowrap ${activeCategory === category ? 'text-sage border-b-2 border-sage pb-4 -mb-[18px]' : 'text-text-light hover:text-text-dark'}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {servicesMenu[activeCategory].map((service, idx) => (
                  <div key={idx} className="flex justify-between items-end border-b border-beige py-4 group">
                    <div className="pr-4">
                      <h3 className="text-xl font-serif text-text-dark group-hover:text-sage transition-colors">{service.name}</h3>
                    </div>
                    <div className="text-text-light font-light text-lg">
                      {service.price}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Booking Form Section */}
        <div className="bg-beige p-8 md:p-12 rounded-2xl shadow-sm border border-white/50">
          <h2 className="text-3xl font-serif text-text-dark mb-2">Book an Appointment</h2>
          <p className="text-text-light font-light mb-8">Reserve your moment of tranquility.</p>
          
          <AnimatePresence mode="wait">
            {bookingStep === 1 && (
              <motion.form key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={nextStep}>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-text-dark mb-2">Full Name</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-white/50 border border-sage/20 rounded-lg px-4 py-3 focus:outline-none focus:border-sage transition-colors" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-sm text-text-dark mb-2">Select Service</label>
                    <select required name="service" value={formData.service} onChange={handleInputChange} className="w-full bg-white/50 border border-sage/20 rounded-lg px-4 py-3 focus:outline-none focus:border-sage transition-colors appearance-none">
                      <option value="" disabled>Choose a service...</option>
                      <optgroup label="Hair">
                        {servicesMenu['Hair'].map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
                      </optgroup>
                      <optgroup label="Skin">
                        {servicesMenu['Skin'].map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
                      </optgroup>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-sage text-white py-4 rounded-full font-medium tracking-wider hover:bg-sage/90 transition-colors mt-4">
                    Continue to Schedule
                  </button>
                </div>
              </motion.form>
            )}

            {bookingStep === 2 && (
              <motion.form key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={nextStep}>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-text-dark mb-2">Date</label>
                      <input required type="date" name="date" value={formData.date} onChange={handleInputChange} className="w-full bg-white/50 border border-sage/20 rounded-lg px-4 py-3 focus:outline-none focus:border-sage transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm text-text-dark mb-2">Time</label>
                      <input required type="time" name="time" value={formData.time} onChange={handleInputChange} className="w-full bg-white/50 border border-sage/20 rounded-lg px-4 py-3 focus:outline-none focus:border-sage transition-colors" />
                    </div>
                  </div>
                  <div className="flex space-x-4 mt-8">
                    <button type="button" onClick={() => setBookingStep(1)} className="w-1/3 bg-white text-text-dark py-4 rounded-full font-medium tracking-wider border border-sage/20 hover:bg-cream transition-colors">
                      Back
                    </button>
                    <button type="submit" className="w-2/3 bg-sage text-white py-4 rounded-full font-medium tracking-wider hover:bg-sage/90 transition-colors">
                      Contact Details
                    </button>
                  </div>
                </div>
              </motion.form>
            )}

            {bookingStep === 3 && (
              <motion.form key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={submitBooking}>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-text-dark mb-2">Email Address</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-white/50 border border-sage/20 rounded-lg px-4 py-3 focus:outline-none focus:border-sage transition-colors" placeholder="jane@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm text-text-dark mb-2">Phone Number</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-white/50 border border-sage/20 rounded-lg px-4 py-3 focus:outline-none focus:border-sage transition-colors" placeholder="(555) 000-0000" />
                  </div>
                  <div className="flex space-x-4 mt-8">
                    <button type="button" onClick={() => setBookingStep(2)} className="w-1/3 bg-white text-text-dark py-4 rounded-full font-medium tracking-wider border border-sage/20 hover:bg-cream transition-colors">
                      Back
                    </button>
                    <button type="submit" className="w-2/3 bg-text-dark text-white py-4 rounded-full font-medium tracking-wider hover:bg-text-dark/90 transition-colors">
                      Confirm Booking
                    </button>
                  </div>
                </div>
              </motion.form>
            )}

            {bookingStep === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                <div className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-serif text-text-dark mb-2">Appointment Confirmed</h3>
                <p className="text-text-light font-light">Thank you, {formData.name}. We look forward to seeing you on {formData.date} at {formData.time}.</p>
                <button onClick={() => { setBookingStep(1); setFormData({ name: '', service: '', date: '', time: '', phone: '', email: '' }); }} className="mt-8 text-sage hover:text-text-dark transition-colors border-b border-sage pb-1">
                  Book Another Appointment
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
