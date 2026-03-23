/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { 
  School, 
  Stethoscope, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  Users, 
  ClipboardCheck, 
  Wallet, 
  BarChart3, 
  Package, 
  History, 
  ShieldCheck, 
  Zap, 
  Headphones, 
  Cloud,
  Menu,
  X,
  Mail,
  Sparkles,
  Globe,
  QrCode,
  Copy,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const PaymentModal = ({ isOpen, onClose, planName, price }: { isOpen: boolean, onClose: () => void, planName: string, price: string }) => {
  const [copied, setCopied] = useState(false);
  const upiId = "fzspatel007@ybl";
  const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent("Munaf Patel")}&am=${price}&cu=INR&tn=${encodeURIComponent("Payment for " + planName)}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(upiUrl)}`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-white rounded-[2rem] shadow-2xl w-full max-w-md overflow-hidden relative"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors text-slate-500"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Scan to Pay</h3>
            <p className="text-slate-500">Payment for <span className="font-bold text-indigo-600">{planName}</span></p>
            <div className="mt-4 inline-block bg-indigo-50 px-4 py-2 rounded-full text-indigo-700 font-bold text-xl">
              ₹{price}
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center mb-8">
            <div className="bg-white p-4 rounded-2xl shadow-sm mb-4">
              <img 
                src={qrCodeUrl} 
                alt="Payment QR Code" 
                className="w-48 h-48"
              />
            </div>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Scan with any UPI App</p>
            <div className="flex gap-4 mt-4 opacity-60">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/PhonePe_Logo.svg" alt="PhonePe" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Google_Pay_Logo.svg" alt="GPay" className="h-4" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Primary UPI ID</p>
                <p className="font-mono font-bold text-slate-700">{upiId}</p>
              </div>
              <button 
                onClick={() => copyToClipboard(upiId)}
                className="p-3 bg-white hover:bg-indigo-50 text-indigo-600 rounded-xl shadow-sm transition-all active:scale-95"
              >
                {copied ? <CheckCircle2 size={20} className="text-green-500" /> : <Copy size={20} />}
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Other UPI ID</p>
                <p className="text-xs font-mono font-bold text-slate-600">fzspatel007@ibl</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a 
              href={upiUrl}
              className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-[0.98]"
            >
              <ExternalLink size={20} /> Pay via App
            </a>
            <p className="text-center text-slate-400 text-[10px] mt-2">
              (Works on mobile with UPI apps installed)
            </p>
            <p className="text-center text-slate-400 text-xs mt-4">
              After payment, please share the screenshot on WhatsApp.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const PolicyView = ({ type, onClose }: { type: 'privacy' | 'terms' | 'refund', onClose: () => void }) => {
  const content = {
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "March 23, 2026",
      sections: [
        {
          title: "1. Information We Collect",
          text: "We collect information you provide directly to us, such as when you fill out a contact form or purchase a subscription. This may include your name, email address, phone number, and business details."
        },
        {
          title: "2. How We Use Your Information",
          text: "We use the information we collect to provide, maintain, and improve our services, to process transactions, and to communicate with you about our products and offers."
        },
        {
          title: "3. Data Security",
          text: "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or destruction."
        },
        {
          title: "4. Third-Party Sharing",
          text: "We do not sell or share your personal information with third parties for their marketing purposes. We only share data with service providers who help us operate our business."
        }
      ]
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "March 23, 2026",
      sections: [
        {
          title: "1. Acceptance of Terms",
          text: "By accessing or using Global Software solutions, you agree to be bound by these Terms of Service."
        },
        {
          title: "2. Software License",
          text: "We grant you a limited, non-exclusive, non-transferable license to use our software according to the plan you have purchased."
        },
        {
          title: "3. Payment Terms",
          text: "Payments are made via UPI or other approved methods. Subscriptions are billed in advance according to the selected monthly, yearly, or lifetime plan."
        },
        {
          title: "4. Limitation of Liability",
          text: "Global Software shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services."
        }
      ]
    },
    refund: {
      title: "Refund Policy",
      lastUpdated: "March 23, 2026",
      sections: [
        {
          title: "1. Free Demo Period",
          text: "We offer a comprehensive 7-day free demo for all our software products. This allows you to fully evaluate the features and suitability of our solutions before making a purchase."
        },
        {
          title: "2. No Refund Policy",
          text: "Due to the nature of digital software and the availability of a free trial period, we do not offer refunds once a purchase has been made. All sales are final."
        },
        {
          title: "3. Cancellation",
          text: "You can cancel your monthly or yearly subscription at any time. Your access will continue until the end of the current billing cycle, but no partial refunds will be provided."
        }
      ]
    }
  };

  const activePolicy = content[type];

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onClose}
          className="mb-8 flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-700 transition-colors"
        >
          <ArrowRight size={20} className="rotate-180" /> Back to Home
        </button>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">{activePolicy.title}</h1>
          <p className="text-slate-500 mb-12">Last Updated: {activePolicy.lastUpdated}</p>
          
          <div className="space-y-12">
            {activePolicy.sections.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">{section.title}</h2>
                <p className="text-slate-600 leading-relaxed text-lg">{section.text}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-8 bg-slate-50 rounded-3xl border border-slate-100">
            <p className="text-slate-700 font-medium">
              If you have any questions about our {activePolicy.title.toLowerCase()}, please contact us at <a href="mailto:patelmunaf90@gmail.com" className="text-indigo-600 font-bold hover:underline">patelmunaf90@gmail.com</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Navbar = ({ onHomeClick }: { onHomeClick: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center cursor-pointer" onClick={onHomeClick}>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Global Software
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-slate-600 hover:text-indigo-600 transition-colors">Products</a>
            <a href="#why-us" className="text-slate-600 hover:text-indigo-600 transition-colors">Why Choose Us</a>
            <a href="#pricing" className="text-slate-600 hover:text-indigo-600 transition-colors">Pricing</a>
            <a href="#contact" className="text-slate-600 hover:text-indigo-600 transition-colors">Contact</a>
            <div className="flex items-center space-x-4">
              <a 
                href="#demo" 
                className="hidden md:flex bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition-all shadow-md shadow-indigo-200"
              >
                Get Started
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#products" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600">Products</a>
              <a href="#why-us" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600">Why Choose Us</a>
              <a href="#pricing" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600">Pricing</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600">Contact</a>
              <div className="grid grid-cols-1 gap-3 mt-4">
                <a 
                  href="https://wa.me/918200109488" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-xl font-medium active:bg-indigo-700"
                >
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>
              <a 
                href="mailto:patelmunaf90@gmail.com" 
                className="flex items-center justify-center gap-2 bg-blue-50 text-blue-600 px-5 py-3 rounded-xl font-medium mt-3 hover:bg-blue-100 transition-colors"
              >
                <Mail size={18} /> patelmunaf90@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-indigo-100">
            <Sparkles size={16} /> Global Software Provider
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
            Empower Your Business with <span className="text-indigo-600 text-shadow-sm">Smart Software</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
            High-quality School Management and Medical Store solutions supported across India, UK, USA, Canada, UAE & Saudi Arabia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#demo" 
              className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 hover:-translate-y-1"
            >
              Try Free Demo <ArrowRight size={20} />
            </a>
            <div className="flex gap-3">
              <a 
                href="https://wa.me/918200109488" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-6 py-4 rounded-2xl font-bold text-lg hover:border-indigo-600 hover:text-indigo-600 transition-all hover:-translate-y-1 active:scale-95"
              >
                <MessageCircle size={20} className="text-green-500" /> WhatsApp
              </a>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4 text-slate-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`} 
                  alt="User" 
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p className="text-sm font-medium">Trusted by 500+ businesses across India, UK, USA, Canada, UAE & Saudi Arabia</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800&h=600&v=3" 
            alt="Global Software Solutions Team" 
            className="relative rounded-3xl shadow-2xl border border-white/50 w-full object-cover aspect-video"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Active Clients", value: "500+", icon: <Users size={20} /> },
    { label: "Countries Supported", value: "10+", icon: <Globe size={20} /> },
    { label: "Uptime Guarantee", value: "99.9%", icon: <Zap size={20} /> },
    { label: "Support Response", value: "< 1hr", icon: <Headphones size={20} /> },
  ];

  return (
    <div className="bg-white py-12 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-extrabold text-slate-900">{stat.value}</div>
              <div className="text-sm font-medium text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const products = [
    {
      id: "school",
      name: "School Management System",
      icon: <School className="text-indigo-600" size={32} />,
      description: "A comprehensive solution to manage your educational institution efficiently.",
      features: [
        { icon: <Users size={18} />, text: "Student Management" },
        { icon: <ClipboardCheck size={18} />, text: "Attendance Tracking" },
        { icon: <Wallet size={18} />, text: "Fees Management" },
        { icon: <BarChart3 size={18} />, text: "Reports Dashboard" },
        { icon: <CheckCircle2 size={18} />, text: "Easy to use interface" },
      ],
      color: "indigo",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800&h=600&v=6"
    },
    {
      id: "medical",
      name: "Smart Medical App",
      icon: <Stethoscope className="text-blue-600" size={32} />,
      description: "Modern pharmacy and medical store management with real-time stock tracking.",
      features: [
        { icon: <Package size={18} />, text: "Billing System" },
        { icon: <History size={18} />, text: "Medicine Stock Management" },
        { icon: <Users size={18} />, text: "Customer Records" },
        { icon: <BarChart3 size={18} />, text: "Daily Reports" },
        { icon: <CheckCircle2 size={18} />, text: "Fast & Simple UI" },
      ],
      color: "blue",
      image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=800&h=600&v=5"
    }
  ];

  return (
    <section id="products" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Premium Products</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-6">
            Choose the right solution for your business. Our software is built with the latest technology to ensure speed and reliability.
          </p>
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-bold border border-indigo-100">
            <ShieldCheck size={16} /> Supported in India, UK, USA, Canada, UAE & Saudi Arabia
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 -mt-16 relative z-10 group-hover:scale-110 transition-transform`}>
                  {product.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{product.name}</h3>
                <p className="text-slate-600 mb-6">{product.description}</p>
                
                <div className="space-y-3 mb-8">
                  {product.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-slate-700">
                      <span className="text-indigo-500">{feature.icon}</span>
                      <span className="font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={product.id === 'school' ? "https://studio-olive-nine-47.vercel.app" : "https://munaf-patel.vercel.app"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 text-center bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-md`}
                  >
                    Try Demo
                  </a>
                  <a 
                    href="#pricing" 
                    className="flex-1 text-center bg-white border border-slate-200 text-slate-700 py-3 rounded-xl font-bold hover:border-indigo-600 hover:text-indigo-600 transition-colors"
                  >
                    View Pricing
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    { icon: <Zap className="text-yellow-500" />, title: "Easy to use", desc: "Intuitive interface designed for everyone." },
    { icon: <Wallet className="text-green-500" />, title: "Affordable pricing", desc: "Plans that fit every business size." },
    { icon: <Headphones className="text-blue-500" />, title: "Fast support", desc: "Our team is always here to help you." },
    { icon: <Cloud className="text-indigo-500" />, title: "Cloud-based system", desc: "Access your data from anywhere, anytime." },
    { icon: <ShieldCheck className="text-emerald-500" />, title: "Global Support", desc: "Available in India, UK, USA, Canada, UAE & Saudi Arabia." }
  ];

  return (
    <section id="why-us" className="py-24 px-4 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We don't just sell software; we provide a partnership to help your business grow digitally.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors text-center"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-slate-400">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      text: "Global Software ka Medical App bahut hi simple hai. Stock management ab mere liye bahut aasaan ho gaya hai.",
      image: "https://picsum.photos/seed/doc1/100/100"
    },
    {
      text: "The student management system is robust and very intuitive. Our administrative tasks have reduced by 40%.",
      image: "https://picsum.photos/seed/principal1/100/100"
    },
    {
      text: "Excellent support team! They helped us set up everything in just one day. Highly recommended for pharmacies.",
      image: "https://picsum.photos/seed/manager1/100/100"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          <p className="text-slate-600">Trusted by business owners worldwide for reliability and ease of use.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={review.image} 
                  alt="Client Avatar" 
                  className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="text-sm font-bold text-indigo-600">Verified Client</p>
                </div>
              </div>
              <p className="text-slate-600 italic">"{review.text}"</p>
              <div className="absolute top-8 right-8 text-indigo-200">
                <MessageCircle size={40} fill="currentColor" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DemoSection = () => {
  const [isExpired, setIsExpired] = useState(false);
  const [daysLeft, setDaysLeft] = useState(7);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const firstAccess = localStorage.getItem('demo_first_access');
    const now = new Date().getTime();
    
    if (firstAccess) {
      setHasStarted(true);
      const accessTime = parseInt(firstAccess);
      const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
      const timeDiff = now - accessTime;
      
      if (timeDiff >= sevenDaysInMs) {
        setIsExpired(true);
      } else {
        const remaining = Math.ceil((sevenDaysInMs - timeDiff) / (24 * 60 * 60 * 1000));
        setDaysLeft(remaining);
      }
    }
  }, []);

  const startDemoCountdown = () => {
    if (!localStorage.getItem('demo_first_access')) {
      const now = new Date().getTime();
      localStorage.setItem('demo_first_access', now.toString());
      setHasStarted(true);
      setDaysLeft(7);
    }
  };

  return (
    <section id="demo" className="py-24 px-4 bg-indigo-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-bold mb-6 backdrop-blur-md border border-white/30">
            <History size={16} />
            7 Days Free Demo Limited Period Offer
          </div>

          <h2 className="text-4xl font-bold mb-6">Try our software with live demo</h2>
          
          {isExpired ? (
            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-2xl">
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/30">
                <X size={40} className="text-red-200" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-100">Demo Period Expired!</h3>
              <p className="text-indigo-100 mb-8 max-w-md mx-auto">
                Aapka 7 din ka free demo period khatam ho chuka hai. Demo ko dubara access karne ke liye please humare team se contact karein.
              </p>
              <a 
                href="https://wa.me/918200109488?text=Hi, my demo period has expired. I want to renew it or buy a plan."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl"
              >
                <MessageCircle size={24} /> Contact to Renew Demo
              </a>
            </div>
          ) : (
            <>
              <p className="text-xl text-indigo-100 mb-4">
                Experience the power of our solutions before you commit. No credit card required.
              </p>
              <p className="text-indigo-200 font-bold mb-12 flex items-center justify-center gap-2">
                <Zap size={18} className="text-yellow-400" />
                {hasStarted ? `${daysLeft} days left in your free demo period` : '7 days free access starts from your first login'}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <a 
                    href="https://studio-olive-nine-47.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={startDemoCountdown}
                    className="w-full bg-white text-indigo-600 px-8 py-5 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl flex items-center justify-center gap-3"
                  >
                    <School size={24} /> School App Demo
                  </a>
                  <div className="bg-indigo-700/50 p-4 rounded-xl text-sm text-indigo-50 border border-indigo-500/30">
                    <p className="font-bold mb-1">Login Details:</p>
                    <p>Email: demoschool@gmail.com</p>
                    <p>Pass: demoschool123</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <a 
                    href="https://munaf-patel.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={startDemoCountdown}
                    className="w-full bg-white text-indigo-600 px-8 py-5 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl flex items-center justify-center gap-3"
                  >
                    <Stethoscope size={24} /> Medical App Demo
                  </a>
                  <div className="bg-indigo-700/50 p-4 rounded-xl text-sm text-indigo-50 border border-indigo-500/30">
                    <p className="font-bold mb-1">Login Details:</p>
                    <p>Email: aaa@gmail.com</p>
                    <p>Pass: aaa123</p>
                  </div>
                </div>
              </div>
            </>
          )}
          
          <p className="mt-12 text-indigo-200 text-sm">
            * Demo logins are pre-configured for your convenience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<{name: string, price: string} | null>(null);
  const plans = [
    {
      name: "Monthly Plan",
      price: "500",
      period: "/month",
      features: ["Student Management", "Attendance Tracking", "Basic Reports", "Single User", "Email Support"],
      recommended: false
    },
    {
      name: "Yearly Plan",
      price: "5000",
      period: "/year",
      features: ["Everything in Monthly", "Fees Management", "Advanced Analytics", "Multi-user Access", "Priority Support"],
      recommended: true
    },
    {
      name: "Lifetime Plan",
      price: "15000",
      period: " One-time",
      features: ["Full Access Forever", "Unlimited Users", "Custom Branding", "Free Updates", "24/7 Dedicated Support", "Special: Only for first 10 customers"],
      recommended: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Choose the plan that's right for your business. Taxes will be applied based on your country (India, UK, USA, Canada, UAE & Saudi Arabia).
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative bg-white p-8 rounded-3xl border ${plan.recommended ? 'border-indigo-600 shadow-xl scale-105 z-10' : 'border-slate-200 shadow-sm'} flex flex-col`}
            >
              {plan.recommended && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              )}
              {plan.name === "Lifetime Plan" && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Limited Offer
                </span>
              )}
              <h3 className="text-xl font-bold text-slate-900 mb-4">{plan.name}</h3>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-slate-900">₹{plan.price}</span>
                <span className="text-slate-500 font-medium">{plan.period}</span>
              </div>
              
              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 size={18} className="text-indigo-600 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setSelectedPlan({ name: plan.name, price: plan.price })}
                className={`w-full py-4 rounded-xl font-bold text-center transition-all ${plan.recommended ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              >
                Buy Now
              </button>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedPlan && (
            <PaymentModal 
              isOpen={!!selectedPlan} 
              onClose={() => setSelectedPlan(null)} 
              planName={selectedPlan.name} 
              price={selectedPlan.price} 
            />
          )}
        </AnimatePresence>
        
        <div className="mt-12 text-center space-y-6">
          <div className="inline-block bg-indigo-50 border border-indigo-100 rounded-2xl px-8 py-5 max-w-3xl shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-4 text-left">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-indigo-600 shrink-0 shadow-sm">
                <Globe size={24} />
              </div>
              <div>
                <p className="text-indigo-900 font-bold text-lg">International Customers (Outside India)</p>
                <p className="text-indigo-700">
                  If you are looking for a plan outside India (USA, UK, UAE, etc.), please contact us via <a href="https://wa.me/918200109488" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-indigo-800 transition-colors">WhatsApp</a> or <a href="mailto:patelmunaf90@gmail.com" className="underline font-bold hover:text-indigo-800 transition-colors">Email</a>.
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-slate-500 text-sm italic">
            * Note: Final pricing may vary as per local taxes and regulations in India, UK, USA, Canada, UAE & Saudi Arabia.
          </p>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Software setup karne mein kitna time lagta hai?",
      a: "Humara setup process bahut fast hai. Payment ke baad hum 24 ghante ke andar aapka system live kar dete hain."
    },
    {
      q: "Kya main demo data delete kar sakta hoon?",
      a: "Haan, jab aap full version kharidte hain, toh hum aapko ek fresh database dete hain jisme aap apna real data enter kar sakte hain."
    },
    {
      q: "Support kaise milega agar koi problem aaye?",
      a: "Hum 24/7 WhatsApp aur Email support dete hain. Emergency mein hum remote access (AnyDesk/TeamViewer) se bhi help karte hain."
    },
    {
      q: "Kya ye software offline kaam karta hai?",
      a: "Humare paas online (Cloud) aur offline dono options available hain. Aap apni zaroorat ke hisaab se choose kar sakte hain."
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">Everything you need to know about Global Software solutions.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-slate-100 rounded-2xl overflow-hidden bg-slate-50"
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-100 transition-colors"
              >
                <span className="font-bold text-slate-900">{faq.q}</span>
                <span className={`transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}>
                  <ArrowRight size={20} className="rotate-90 text-indigo-600" />
                </span>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Get in Touch</h2>
          <p className="text-lg text-slate-600 mb-10">
            Have questions? Our team is ready to help you digitize your business.
          </p>
          
          <div className="space-y-8">
            <a 
              href="https://wa.me/918200109488"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 group"
            >
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 group-hover:bg-green-100 transition-colors">
                <MessageCircle size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider group-hover:text-green-600 transition-colors">WhatsApp</p>
                <p className="text-xl font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                  Chat with us now
                </p>
              </div>
            </a>

            <a 
              href="mailto:patelmunaf90@gmail.com"
              className="flex items-center gap-6 group cursor-pointer"
              onClick={(e) => {
                window.location.href = "mailto:patelmunaf90@gmail.com";
              }}
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-100 transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider group-hover:text-blue-600 transition-colors">Email Us</p>
                <p className="text-xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors underline decoration-blue-200 underline-offset-4">
                  patelmunaf90@gmail.com
                </p>
              </div>
            </a>

            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Support</p>
                <p className="text-xl font-bold text-slate-900">24/7 Fast Response</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm">
          <form 
            className="space-y-6" 
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const formData = new FormData(form);
              const data = {
                name: formData.get('name'),
                phone: formData.get('phone'),
                product: formData.get('product'),
                message: formData.get('message'),
              };

              // Send to WhatsApp
              const waText = `Hi, I'm ${data.name} (${data.phone}). I'm interested in ${data.product}. Message: ${data.message}`;
              window.open(`https://wa.me/918200109488?text=${encodeURIComponent(waText)}`, '_blank');

              // Also send Email via API
              try {
                await fetch('/api/contact', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data),
                });
                alert('Thank you! Your inquiry has been sent via WhatsApp and Email.');
                form.reset();
              } catch (err) {
                console.error('Email failed but WhatsApp opened');
              }
            }}
          >
            <div className="grid sm:grid-cols-1 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Full Name</label>
                <input 
                  name="name"
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Select Product</label>
              <select 
                name="product"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all bg-white"
              >
                <option>School Management System</option>
                <option>Smart Medical App</option>
                <option>Other Query</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Message</label>
              <textarea 
                name="message"
                rows={4} 
                required
                placeholder="How can we help you?"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const techs = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "WhatsApp API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">Powered by Modern Tech Stack</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {techs.map((tech, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 group">
              <img src={tech.icon} alt={tech.name} className="w-10 h-10 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold text-slate-500">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onPolicyClick }: { onPolicyClick: (type: 'privacy' | 'terms' | 'refund') => void }) => {
  return (
    <footer className="bg-slate-950 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <h2 className="text-3xl font-bold mb-4">Global Software</h2>
            <p className="text-slate-400 max-w-md mb-6">
              Your Digital Partner for smart business solutions. We empower schools and medical stores with cutting-edge technology.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/918200109488" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={18} />
              </a>
              <a 
                href="mailto:patelmunaf90@gmail.com" 
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors text-white"
                title="Email Us"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Live Demo</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Legal</h3>
            <ul className="space-y-4 text-slate-400">
              <li><button onClick={() => onPolicyClick('privacy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => onPolicyClick('terms')} className="hover:text-white transition-colors">Terms of Service</button></li>
              <li><button onClick={() => onPolicyClick('refund')} className="hover:text-white transition-colors">Refund Policy</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 Global Software. All rights reserved.</p>
          <p>Empowering Businesses Globally 🌍</p>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-32 right-8 z-50 w-12 h-12 bg-white text-indigo-600 rounded-full shadow-xl border border-slate-100 flex items-center justify-center hover:bg-indigo-50 transition-colors"
        >
          <ArrowRight size={24} className="-rotate-90" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [view, setView] = useState<'home' | 'privacy' | 'terms' | 'refund'>('home');

  // Handle initial path and browser navigation
  useEffect(() => {
    const path = window.location.pathname.replace('/', '');
    if (['privacy', 'terms', 'refund'].includes(path)) {
      setView(path as any);
    } else {
      setView('home');
    }

    const handlePopState = () => {
      const currentPath = window.location.pathname.replace('/', '');
      if (['privacy', 'terms', 'refund'].includes(currentPath)) {
        setView(currentPath as any);
      } else {
        setView('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (newView: 'home' | 'privacy' | 'terms' | 'refund') => {
    setView(newView);
    const path = newView === 'home' ? '/' : `/${newView}`;
    window.history.pushState({}, '', path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar onHomeClick={() => navigateTo('home')} />
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            <Stats />
            <TechStack />
            <Products />
            <WhyChooseUs />
            <Testimonials />
            <DemoSection />
            <Pricing />
            <FAQ />
            <Contact />
          </>
        ) : (
          <PolicyView type={view as any} onClose={() => navigateTo('home')} />
        )}
      </main>
      <Footer onPolicyClick={(type) => navigateTo(type)} />
      <ScrollToTop />
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <a 
          href="https://wa.me/918200109488" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 group relative"
        >
          <MessageCircle size={32} />
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>
        <a 
          href="mailto:patelmunaf90@gmail.com" 
          className="bg-red-500 text-white p-4 rounded-full shadow-2xl hover:bg-red-600 transition-all hover:scale-110 group relative"
        >
          <Mail size={32} />
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Email Us
          </span>
        </a>
      </div>
    </div>
  );
}

