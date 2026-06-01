/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { 
  School, 
  Building2,
  GraduationCap,
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
  ExternalLink,
  Search,
  Sliders
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const GlobalLogo = ({ className = "h-11", showText = true, light = false }: { className?: string, showText?: boolean, light?: boolean }) => {
  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Dynamic Network Globe Icon inspired by uploaded asset */}
      <svg
        viewBox="0 0 100 100"
        className="w-11 h-11 shrink-0 group-hover:scale-105 transition-transform duration-300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="globeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2dd4bf" />
            <stop offset="40%" stopColor="#0d9488" />
            <stop offset="80%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
          <linearGradient id="globeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0369a1" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Ambient background sphere ring */}
        <circle cx="50" cy="50" r="46" stroke="url(#globeGlow)" strokeWidth="1.5" />

        {/* Main outer network orbit sphere */}
        <circle cx="50" cy="50" r="41" stroke="url(#globeGrad)" strokeWidth="2.5" opacity="0.9" />

        {/* Dynamic network curved connections (latitudes) */}
        <path d="M 14,30 C 26,38 74,38 86,30" stroke="url(#globeGrad)" strokeWidth="1.5" opacity="0.7" strokeLinecap="round" />
        <path d="M 9,50 C 23,60 77,60 91,50" stroke="url(#globeGrad)" strokeWidth="2" opacity="0.85" strokeLinecap="round" />
        <path d="M 14,70 C 26,78 74,78 86,70" stroke="url(#globeGrad)" strokeWidth="1.5" opacity="0.7" strokeLinecap="round" />

        {/* Longitude grid connections */}
        <path d="M 30,14 C 38,26 38,74 30,86" stroke="url(#globeGrad)" strokeWidth="1.5" opacity="0.7" strokeLinecap="round" />
        <path d="M 50,9 C 60,23 60,77 50,91" stroke="url(#globeGrad)" strokeWidth="2" opacity="0.85" strokeLinecap="round" />
        <path d="M 68,14 C 76,26 76,74 68,86" stroke="url(#globeGrad)" strokeWidth="1.5" opacity="0.7" strokeLinecap="round" />

        {/* Secondary network paths */}
        <path d="M 22,22 C 36,36 64,36 78,22" stroke="url(#globeGrad)" strokeWidth="1.2" opacity="0.5" strokeLinecap="round" />
        <path d="M 22,78 C 36,64 64,64 78,78" stroke="url(#globeGrad)" strokeWidth="1.2" opacity="0.5" strokeLinecap="round" />

        {/* Connecting System Nodes (small dots on vertices) */}
        <circle cx="50" cy="9" r="3.2" fill="#2dd4bf" />
        <circle cx="50" cy="91" r="3.2" fill="#0369a1" />
        <circle cx="9" cy="50" r="3.2" fill="#2dd4bf" />
        <circle cx="91" cy="50" r="3.2" fill="#0369a1" />
        
        <circle cx="22" cy="22" r="2.8" fill="#2dd4bf" />
        <circle cx="78" cy="22" r="2.8" fill="#0d9488" />
        <circle cx="22" cy="78" r="2.8" fill="#0284c7" />
        <circle cx="78" cy="78" r="2.8" fill="#0369a1" />

        <circle cx="36" cy="36" r="2.2" fill="#0d9488" opacity="0.9" />
        <circle cx="64" cy="36" r="2.2" fill="#0d9488" opacity="0.9" />
        <circle cx="36" cy="64" r="2.2" fill="#0284c7" opacity="0.9" />
        <circle cx="64" cy="64" r="2.2" fill="#0284c7" opacity="0.9" />

        {/* Stylized Modern Letter "S" Curve integrated beautifully into the center */}
        <path 
          d="M 60,35
             C 60,25 53,20 46,20 
             C 38,20 34,26 34,34 
             C 34,44.5 66,42.5 66,55.5 
             C 66,65.5 59,71.5 48,71.5 
             C 38,71.5 34,64.5 34,56.5
             L 43.5,56.5
             C 43.5,61 45.5,64 48.5,64 
             C 52.5,64 56.5,61 56.5,55.5 
             C 56.5,47 24,49 24,33 
             C 24,21.5 34,12.5 46,12.5 
             C 58,12.5 69.5,19.5 69.5,35 
             Z" 
          fill="url(#globeGrad)"
          className="drop-shadow-[0_2px_5px_rgba(13,148,136,0.25)]"
        />
      </svg>

      {showText && (
        <div className="flex flex-col text-left justify-center select-none leading-none">
          <span className={`text-[21px] font-black tracking-tight font-display ${light ? 'text-white' : 'text-slate-900 group-hover:text-indigo-600'} transition-colors`}>
            GLOBAL
          </span>
          <span className={`text-[11px] font-bold tracking-[0.27em] -mr-[0.27em] mt-1 font-sans ${light ? 'text-slate-400' : 'text-slate-500'}`}>
            SOFTWARE
          </span>
        </div>
      )}
    </div>
  );
};

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

          <div className="bg-slate-50 p-6 rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center">
            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <img 
                src={qrCodeUrl} 
                alt="Payment QR Code" 
                className="w-48 h-48"
              />
            </div>
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center cursor-pointer group" onClick={onHomeClick}>
            <GlobalLogo />
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <a href="#products" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors text-sm tracking-wide">Products</a>
            <a href="#why-us" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors text-sm tracking-wide">Why Choose Us</a>
            <a href="#pricing" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors text-sm tracking-wide">Pricing</a>
            <a href="#contact" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors text-sm tracking-wide">Contact</a>
            
            <span className="h-4 w-px bg-slate-200"></span>
            
            <div className="flex items-center space-x-4">
              <a 
                href="#demo" 
                className="hidden md:flex bg-slate-900 text-white hover:bg-indigo-600 px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-indigo-100 duration-300"
              >
                Get Started
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-slate-600 hover:bg-slate-50 rounded-xl transition-colors"
            >
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
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-8 space-y-2">
              <a href="#products" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl font-medium text-slate-700 hover:bg-slate-50 transition-colors">Products</a>
              <a href="#why-us" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl font-medium text-slate-700 hover:bg-slate-50 transition-colors">Why Choose Us</a>
              <a href="#pricing" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl font-medium text-slate-700 hover:bg-slate-50 transition-colors">Pricing</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl font-medium text-slate-700 hover:bg-slate-50 transition-colors">Contact</a>
              <div className="h-px bg-slate-100 my-4"></div>
              <div className="grid grid-cols-1 gap-3">
                <a 
                  href="https://wa.me/918200109488" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 text-white px-5 py-3.5 rounded-xl font-bold hover:bg-green-700 shadow-md transition-all active:scale-95"
                >
                  <MessageCircle size={18} /> WhatsApp Support
                </a>
                <a 
                  href="mailto:patelmunaf90@gmail.com" 
                  className="flex items-center justify-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 px-5 py-3.5 rounded-xl font-bold hover:bg-slate-100 transition-colors"
                >
                  <Mail size={18} /> Email Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-36 pb-32 px-4 bg-gradient-to-b from-indigo-50/40 via-white to-white overflow-hidden">
      {/* Decorative background grid effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 text-left"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50/80 text-indigo-700 px-3.5 py-1 rounded-full text-[11px] font-extrabold mb-6 border border-indigo-100/60 shadow-xs uppercase tracking-wider">
            <Sparkles size={12} className="text-indigo-600" /> Global Software Provider
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-5 font-display tracking-tight">
            Empower Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-850 text-shadow-sm pb-1 block sm:inline">Smart Software</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl font-sans">
            High-quality School Management, Pharmacy Medical Store, Construction Builder & Coaching Institute solutions. Ready to scale across India, UK, USA, Canada, UAE & Saudi Arabia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
            <a 
              href="#demo" 
              className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-slate-900 text-white px-8 py-4.5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-indigo-200/50 hover:shadow-slate-200/30 hover:-translate-y-0.5"
            >
              Try Free Demo <ArrowRight size={20} />
            </a>
            <a 
              href="https://wa.me/918200109488" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50 px-8 py-4.5 rounded-2xl font-bold text-lg transition-all shadow-md shadow-slate-100/50 hover:-translate-y-0.5"
            >
              <MessageCircle size={22} className="text-green-500 fill-green-500/10" /> Chat Support
            </a>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4 text-slate-500 border-t border-slate-100 pt-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`} 
                  alt="Verified User badge" 
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p className="text-sm font-medium text-slate-600">
              Trusted by <span className="font-bold text-slate-900">500+ businesses</span> across India, UK, USA, Canada, UAE & Saudi Arabia
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="absolute -top-16 -right-16 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
          <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
          
          <div className="relative p-3 bg-white border border-slate-100 rounded-[2.5rem] shadow-[0_24px_70px_rgba(15,23,42,0.06)]">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800&h=600&v=3" 
              alt="Global Software Solutions Team" 
              className="relative rounded-[2rem] w-full object-cover aspect-video shadow-inner"
              referrerPolicy="no-referrer"
            />
            {/* Elegant overlay card for trust score */}
            <div className="absolute -bottom-20 -right-4 bg-white/95 backdrop-blur-md border border-slate-100 shadow-[0_12px_40px_rgba(15,23,42,0.1)] p-4 rounded-2xl flex items-center gap-4.5 animate-bounce-slow">
              <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500">
                <Sparkles size={22} className="fill-orange-500/20" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Global Rating</p>
                <p className="text-base font-extrabold text-slate-900">4.9 / 5.0 Star Score</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Active Clients", value: "500+", icon: <Users size={20} />, text: "Verified setups" },
    { label: "Markets Supported", value: "6+", icon: <Globe size={20} />, text: "International servers" },
    { label: "Uptime SLA", value: "99.99%", icon: <Zap size={20} />, text: "Fully secure Cloud" },
    { label: "Response SLA", value: "< 1hr", icon: <Headphones size={20} />, text: "Premium fast desk" },
  ];

  return (
    <div className="bg-slate-50/50 py-16 border-y border-slate-100/90">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100/80 shadow-xs hover:shadow-md transition-shadow text-left"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 shrink-0">
                {stat.icon}
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900 font-display tracking-tight">{stat.value}</div>
                <div className="text-sm font-bold text-slate-800">{stat.label}</div>
                <div className="text-xs text-slate-400 font-medium">{stat.text}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      id: "school",
      name: "School Management System",
      icon: <School className="text-indigo-600" size={28} />,
      category: "education",
      description: "A comprehensive solution to manage your educational institution efficiently.",
      features: [
        { icon: <Users size={16} />, text: "Student Management" },
        { icon: <ClipboardCheck size={16} />, text: "Attendance Tracking" },
        { icon: <Wallet size={16} />, text: "Fees Management" },
        { icon: <BarChart3 size={16} />, text: "Reports Dashboard" },
        { icon: <CheckCircle2 size={16} />, text: "Easy to use interface" },
      ],
      color: "indigo",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800&h=600&v=6",
      demoUrl: "https://studio-olive-nine-47.vercel.app"
    },
    {
      id: "medical",
      name: "Smart Medical App",
      icon: <Stethoscope className="text-blue-600" size={28} />,
      category: "healthcare",
      description: "Modern pharmacy and medical store management with real-time stock tracking.",
      features: [
        { icon: <Package size={16} />, text: "Billing System" },
        { icon: <History size={16} />, text: "Medicine Stock Management" },
        { icon: <Users size={16} />, text: "Customer Records" },
        { icon: <BarChart3 size={16} />, text: "Daily Reports" },
        { icon: <CheckCircle2 size={16} />, text: "Fast & Simple UI" },
      ],
      color: "blue",
      image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=800&h=600&v=5",
      demoUrl: "https://munaf-patel.vercel.app"
    },
    {
      id: "builder",
      name: "Builder & Construction App",
      icon: <Building2 className="text-amber-600" size={28} />,
      category: "enterprise",
      description: "Complete builder and construction management app to streamline projects, workers, resources, and finances.",
      features: [
        { icon: <ClipboardCheck size={16} />, text: "Project Progress" },
        { icon: <Package size={16} />, text: "Material Inventory Log" },
        { icon: <Users size={16} />, text: "Labor Attendance & Payroll" },
        { icon: <Wallet size={16} />, text: "Expense & Client Billing" },
        { icon: <BarChart3 size={16} />, text: "Real-time Cost Analysis" },
      ],
      color: "amber",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800&h=600&v=1",
      demoUrl: "https://builder-construction-management-app-280090537452.asia-south1.run.app"
    },
    {
      id: "institute",
      name: "Institute Management System",
      icon: <GraduationCap className="text-emerald-600" size={28} />,
      category: "education",
      description: "Smart coaching class and institute management platform for tracking batches, student attendance, exams, and fee installment payments.",
      features: [
        { icon: <Users size={16} />, text: "Batch & Attendance Tracking" },
        { icon: <ClipboardCheck size={16} />, text: "Exam & Marks Management" },
        { icon: <Wallet size={16} />, text: "Fee Billing & Installments" },
        { icon: <MessageCircle size={16} />, text: "Automated Student Alerts" },
        { icon: <BarChart3 size={16} />, text: "Performance Reports" },
      ],
      color: "emerald",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800&h=600&v=1",
      demoUrl: "https://coaching-class-app.vercel.app/"
    }
  ];

  const categories = [
    { id: "all", label: "All Suites" },
    { id: "education", label: "Education & Coaching" },
    { id: "healthcare", label: "Healthcare & Pharmacy" },
    { id: "enterprise", label: "Construction & Business" }
  ];

  const filteredProducts = products.filter(p => {
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-24 px-4 bg-gradient-to-b from-white via-slate-50/40 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-750 px-3.5 py-1 rounded-full text-[11px] font-extrabold mb-4 border border-indigo-100/60 uppercase tracking-widest">
            <Sparkles size={11} className="text-indigo-600" /> Executive Catalog
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 font-display tracking-tight">Our Premium Suite</h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto mb-6">
            Choose the right specialized solution to automate and elevate your workflows. Built with clean, modern web technologies for blistering speeds.
          </p>
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-[11px] font-bold border border-slate-200/80 shadow-xs">
            <ShieldCheck size={14} className="text-emerald-500" /> Full SLA & Setup Compliance in India, UK, USA, Canada, UAE & Saudi Arabia
          </div>
        </div>

        {/* Dynamic Search & Category Filters */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white border border-slate-100 p-3.5 rounded-[2rem] shadow-xs">
            {/* Filter tags */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-100"
                      : "bg-slate-50 border border-slate-150/50 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search inputs */}
            <div className="relative w-full md:w-72">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                <Search size={16} />
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search software products..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200/80 focus:border-indigo-600 outline-none transition-all rounded-full text-xs font-semibold"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] uppercase font-mono font-bold text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-slate-50/50 rounded-[2rem] border border-slate-100 max-w-xl mx-auto">
            <p className="text-slate-400 font-bold mb-2 text-sm">Koi products nahi mile</p>
            <p className="text-slate-450 text-xs">Aapki custom query " {searchTerm} " ke liye koi search matches nahi mile. Filters reset karein.</p>
            <button 
              onClick={() => { setSearchTerm(""); setSelectedCategory("all"); }}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-slate-900 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, idx) => {
              const colors = {
                indigo: { bg: "bg-indigo-50/50", border: "border-indigo-100/80", text: "text-indigo-600", dot: "bg-indigo-600" },
                blue: { bg: "bg-blue-50/50", border: "border-blue-100/80", text: "text-blue-600", dot: "bg-blue-600" },
                amber: { bg: "bg-amber-50/50", border: "border-amber-100/80", text: "text-amber-600", dot: "bg-amber-600" },
                emerald: { bg: "bg-emerald-50/50", border: "border-emerald-100/80", text: "text-emerald-600", dot: "bg-emerald-600" }
              }[product.color || "indigo"] || { bg: "bg-slate-50", border: "border-slate-100", text: "text-indigo-600", dot: "bg-indigo-600" };
              
              // Direct index-safe color logic
              const pColor = product.color || "indigo";
              const borderStyles = pColor === "indigo" ? "border-indigo-100/85 text-indigo-600" :
                                   pColor === "blue" ? "border-blue-100/85 text-blue-600" :
                                   pColor === "amber" ? "border-amber-100/85 text-amber-600" :
                                   pColor === "emerald" ? "border-emerald-100/85 text-emerald-600" : "border-indigo-100/85 text-indigo-600";
              const textStyles = pColor === "indigo" ? "text-indigo-650" :
                                 pColor === "blue" ? "text-blue-650" :
                                 pColor === "amber" ? "text-amber-650" :
                                 pColor === "emerald" ? "text-emerald-650" : "text-indigo-650";
              const dotStyles = pColor === "indigo" ? "bg-indigo-600" :
                                 pColor === "blue" ? "bg-blue-600" :
                                 pColor === "amber" ? "bg-amber-600" :
                                 pColor === "emerald" ? "bg-emerald-600" : "bg-indigo-600";

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-[2rem] overflow-hidden border border-slate-105 hover:border-slate-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.05)] transition-all duration-500 group flex flex-col justify-between h-full relative"
                >
                  <div>
                    <div className="h-44 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500"></div>
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                      <span className={`absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest shadow-xs bg-white border ${borderStyles} flex items-center gap-1.5`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${dotStyles} animate-pulse`}></span>
                        Active Setup
                      </span>
                    </div>
                    
                    <div className="p-7 pb-0">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 shadow-xs flex items-center justify-center mb-5 -mt-13 relative z-20 group-hover:scale-105 group-hover:border-slate-200 transition-transform duration-300">
                        {product.icon}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors font-display tracking-tight">{product.name}</h3>
                      <p className="text-xs text-slate-450 mb-5 leading-relaxed min-h-[36px]">{product.description}</p>
                      
                      <div className="space-y-2.5 mb-6 border-t border-slate-50 pt-5">
                        {product.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-500">
                            <span className={`shrink-0 ${textStyles}`}>{feature.icon}</span>
                            <span className="font-semibold tracking-tight">{feature.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-7 pt-0">
                    <div className="flex gap-2.5">
                      <a 
                        href={product.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-indigo-600 hover:bg-slate-900 text-white py-2.5 rounded-xl font-bold text-xs shadow-xs transition-all duration-300 hover:scale-[1.02]"
                      >
                        Try Demo
                      </a>
                      <a 
                        href="#pricing" 
                        className="flex-1 text-center bg-slate-50 border border-slate-200/80 text-slate-600 py-2.5 rounded-xl font-bold text-xs hover:border-slate-350 hover:bg-slate-120 transition-all duration-300 hover:scale-[1.02]"
                      >
                        Pricing
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};const WhyChooseUs = () => {
  const reasons = [
    { icon: <Zap className="text-yellow-400" />, title: "Extremely Intuitive", desc: "No complex training needed. Get started and run operations immediately." },
    { icon: <Wallet className="text-emerald-400" />, title: "Unbeatable Affordability", desc: "Super transparent pricing built on value with lifetime upgrade paths." },
    { icon: <Headphones className="text-blue-400" />, title: "Premium 24/7 Desk", desc: "We are at your disposal. Chat or voice access in real-time." },
    { icon: <Cloud className="text-indigo-400" />, title: "Robust Infrastructure", desc: "Fault-tolerant multi-region servers. Data sits safe in global zones." },
    { icon: <ShieldCheck className="text-teal-400" />, title: "6+ Sovereign Regions", desc: "Strict adherence to regional criteria across India, ME, UK & EU." }
  ];

  return (
    <section id="why-us" className="py-24 px-4 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[11px] uppercase font-extrabold tracking-widest text-indigo-400 bg-indigo-950/80 border border-indigo-900 px-3.5 py-1 rounded-full mb-4 inline-block">
            Proven Standard
          </span>
          <h2 className="text-3xl md:text-4xl font-black mb-4 font-display tracking-tight">Why Leading Brands Choose Us</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            We transcend simple licensing; we build a responsive software partnership to systematically digitize your organizational capabilities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900/40 backdrop-blur-md p-6 rounded-[2rem] border border-white/5 hover:border-indigo-500/20 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                <div className="w-10 h-10 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-105 group-hover:border-white/25 transition-all">
                  {reason.icon}
                </div>
                <h3 className="text-base font-bold mb-2 font-display text-white group-hover:text-indigo-400 transition-colors">{reason.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">{reason.desc}</p>
              </div>
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
      text: "Global Software ka Medical App bahut hi simple hai. Stock management ab mere liye bahut aasaan ho gaya hai. Support team is always ready to assist.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150&h=150",
      role: "Pharmacy Owner, Gujarat",
      name: "Dr. Alok Sharma"
    },
    {
      text: "The student management system is robust and very intuitive. Fee collection tracking, exam lists, class schedules - our admin tasks reduced by 40%.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
      role: "Principal, Lotus Intl Academy",
      name: "Mrs. Sarah Jenkins"
    },
    {
      text: "Excellent support team! They helped custom configure the batch alerts in just one business day. Truly values client feedback and setup rules.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
      role: "Director, Apex Coaching Center",
      name: "Mr. Munaf Patel"
    }
  ];

  return (
    <section className="py-24 px-4 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11px] uppercase font-extrabold tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-150/40 px-3.5 py-1 rounded-full mb-4 inline-block">
            Our Wall of Trust
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 font-display tracking-tight">What Our Clients Say</h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto">Trusted by business owners worldwide for operational reliability and incredible ease of use.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.015)] relative flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-5 text-orange-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Sparkles key={i} size={13} className="fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed italic mb-6 relative z-10 font-sans text-sm">
                  "{review.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-3.5 border-t border-slate-50 pt-5">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <h4 className="font-bold text-slate-900 text-xs">{review.name}</h4>
                  <p className="text-[11px] text-indigo-600 font-bold">{review.role}</p>
                </div>
              </div>

              <div className="absolute top-8 right-8 text-slate-100/85 pointer-events-none">
                <MessageCircle size={30} className="fill-slate-55 text-slate-100/40" />
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
  const [copiedText, setCopiedText] = useState<{ [key: string]: boolean }>({});

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

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(prev => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setCopiedText(prev => ({ ...prev, [key]: false }));
    }, 2000);
  };

  const demoApps = [
    {
      id: "school",
      name: "School App",
      icon: <School size={22} className="text-indigo-400" />,
      url: "https://studio-olive-nine-47.vercel.app",
      email: "demoschool@gmail.com",
      pass: "demoschool123"
    },
    {
      id: "medical",
      name: "Medical App",
      icon: <Stethoscope size={22} className="text-blue-400" />,
      url: "https://munaf-patel.vercel.app",
      email: "aaa@gmail.com",
      pass: "aaa123"
    },
    {
      id: "builder",
      name: "Builder App",
      icon: <Building2 size={22} className="text-amber-400" />,
      url: "https://builder-construction-management-app-280090537452.asia-south1.run.app",
      email: "aaa@gmail.com",
      pass: "aaa123"
    },
    {
      id: "institute",
      name: "Institute App",
      icon: <GraduationCap size={22} className="text-emerald-400" />,
      url: "https://coaching-class-app.vercel.app/",
      email: "aaa@gmail.com",
      pass: "aaa123"
    }
  ];

  return (
    <section id="demo" className="py-24 px-4 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-45 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-400 px-3.5 py-1 rounded-full text-[11px] font-extrabold mb-5 border border-indigo-500/20 uppercase tracking-widest">
            <History size={12} /> Sandbox Environment
          </div>

          <h2 className="text-3xl md:text-4xl font-black mb-4 font-display tracking-tight">Interactive Live Playgrounds</h2>
          
          {isExpired ? (
            <div className="bg-slate-950/80 backdrop-blur-xl p-10 rounded-[2.5rem] border border-red-500/20 max-w-xl mx-auto shadow-2xl">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-5 border border-red-500/25">
                <X size={28} className="text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-red-400">Demo Access Expired!</h3>
              <p className="text-xs text-slate-400 mb-6 max-w-sm mx-auto leading-relaxed">
                Aapka 7 din ka free test credentials window freeze ho chuka hai. Dubara active karne ya commercial licensing ke liye kindly WhatsApp request bhejein.
              </p>
              <a 
                href="https://wa.me/918200109488?text=Hi, my demo period has expired. I want to renew it or buy a plan."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors shadow-lg"
              >
                <MessageCircle size={18} /> Request Trial Extension
              </a>
            </div>
          ) : (
            <>
              <p className="text-sm md:text-base text-slate-400 mb-4 max-w-xl mx-auto font-sans leading-relaxed">
                Test-drive our fully featured configurations in real-time. Choose an application interface below to launch your session instantly.
              </p>
              <p className="text-indigo-400 font-bold mb-10 flex items-center justify-center gap-2 text-xs uppercase tracking-wider">
                <Zap size={12} className="text-yellow-400 fill-yellow-400/20 animate-pulse" />
                {hasStarted ? `Credentials window active: ${daysLeft} days left` : '7 Days continuous trial starts upon launching'}
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                {demoApps.map((app) => (
                  <div key={app.id} className="bg-slate-950/80 rounded-3xl p-5.5 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group">
                    <div className="mb-5">
                      <div className="flex items-center justify-between mb-3.5">
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                          {app.icon}
                        </div>
                        <span className="text-[9px] uppercase font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800/80 text-slate-500 font-extrabold">Active</span>
                      </div>
                      <h4 className="text-base font-bold font-display text-white group-hover:text-indigo-400 transition-colors mb-1.5">{app.name}</h4>
                      <p className="text-[11px] text-slate-500 mb-4 font-sans">Full feature sandbox with persistent save states.</p>
                      
                      {/* Copyable Login Details card */}
                      <div className="bg-slate-900/60 p-3 rounded-2xl space-y-2.5 border border-slate-800/60">
                        <div className="flex items-center justify-between gap-2">
                          <div className="truncate">
                            <span className="text-[9px] text-slate-500 uppercase font-mono font-bold block">Test Email</span>
                            <span className="text-xs font-mono font-semibold text-slate-300 truncate block">{app.email}</span>
                          </div>
                          <button 
                            onClick={() => handleCopy(app.email, `${app.id}_email`)}
                            className="px-2 py-1 rounded bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-white transition-all shrink-0 border border-slate-800 text-[10px] font-mono whitespace-nowrap"
                          >
                            {copiedText[`${app.id}_email`] ? "Copied" : "Copy"}
                          </button>
                        </div>
                        <div className="flex items-center justify-between gap-2 border-t border-slate-800/40 pt-2.5">
                          <div>
                            <span className="text-[9px] text-slate-500 uppercase font-mono font-bold block">Password</span>
                            <span className="text-xs font-mono font-semibold text-slate-300">{app.pass}</span>
                          </div>
                          <button 
                            onClick={() => handleCopy(app.pass, `${app.id}_pass`)}
                            className="px-2 py-1 rounded bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-white transition-all shrink-0 border border-slate-800 text-[10px] font-mono whitespace-nowrap"
                          >
                            {copiedText[`${app.id}_pass`] ? "Copied" : "Copy"}
                          </button>
                        </div>
                      </div>
                    </div>
 
                    <a 
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={startDemoCountdown}
                      className="w-full bg-indigo-600 hover:bg-white text-white hover:text-slate-950 py-3 rounded-xl font-bold text-xs transition-all duration-300 flex items-center justify-center gap-1.5 shadow-lg shadow-indigo-900/10 group-hover:scale-[1.02]"
                    >
                      Launch Sandbox <ArrowRight size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </>
          )}
          
          <p className="mt-10 text-slate-550 text-[11px] font-mono">
            * Trial sandboxes reset database cache and storage objects periodically.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<{name: string, price: string} | null>(null);
  const [branches, setBranches] = useState(1);
  const [users, setUsers] = useState(500);
  const [whiteLabel, setWhiteLabel] = useState(false);
  const [selectedProductType, setSelectedProductType] = useState("school");

  const plans = [
    {
      name: "Monthly Plan",
      price: "500",
      period: " /month",
      features: ["Student Management", "Attendance Tracking", "Basic Reports", "Single User Support", "Standard Updates"],
      recommended: false
    },
    {
      name: "Yearly Plan",
      price: "5,000",
      period: " /year",
      features: ["Everything in Monthly", "Fees & Billing Modules", "Advanced Analytics Pack", "Multi-user Role Access", "Priority Desk Support", "Save 15% Annually"],
      recommended: true
    },
    {
      name: "Lifetime Plan",
      price: "15,000",
      period: " /lifetime",
      features: ["Full Access Forever", "Unlimited Active Users", "White-label Custom branding", "Free Lifetime Upgrades", "24/7 Dedicated Server Desk", "Limited to first 10 setups"],
      recommended: false
    }
  ];

  const calculateEstimate = () => {
    let baseSetup = 5000;
    if (selectedProductType === "medical") baseSetup = 3500;
    if (selectedProductType === "builder") baseSetup = 6000;
    if (selectedProductType === "institute") baseSetup = 4000;

    const extraBranchCost = (branches - 1) * 2000;
    const userVolumeCost = Math.max(0, Math.ceil((users - 500) / 100)) * 200;
    const whiteLabelCost = whiteLabel ? 4500 : 0;

    const totalOneTime = baseSetup + extraBranchCost + whiteLabelCost + userVolumeCost;
    const yearlyRenewal = Math.round(totalOneTime * 0.4);

    return { totalOneTime, yearlyRenewal };
  };

  const estimates = calculateEstimate();

  const getWhatsAppEstimateLink = () => {
    const pName = selectedProductType === "school" ? "School Management" :
                  selectedProductType === "medical" ? "Medical Store" :
                  selectedProductType === "builder" ? "Builder & Construction" : "Institute Management";
    const wlText = whiteLabel ? "Yes" : "No";
    const text = `Hi, I am interested in a Custom setup for Global Software. Here are my estimator details:
- Product suite: ${pName}
- Number of Branches/Setups: ${branches}
- Active Users: ${users}
- White-Label Branding: ${wlText}
- Estimated Setup Fee: ₹${estimates.totalOneTime.toLocaleString()}
Please configure a detailed quotation for my company.`;

    return `https://wa.me/918200109488?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="pricing" className="py-24 px-4 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[30rem] bg-indigo-50/40 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[11px] uppercase font-extrabold tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-150/40 px-3.5 py-1 rounded-full mb-4 inline-block">
            SLA Licensing
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 font-display tracking-tight">Simple, Transparent Pricing</h2>
          <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto">
            Acquire full cloud-hosted instances with zero surprise subscription metrics. Regional setup is tailored globally.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative bg-white p-8 rounded-[2rem] border transition-all duration-500 flex flex-col justify-between ${
                plan.recommended 
                  ? 'border-indigo-600 ring-4 ring-indigo-50 shadow-[0_24px_50px_rgba(79,70,229,0.08)] scale-102 z-10 md:-translate-y-2' 
                  : 'border-slate-100 shadow-[0_10px_35px_rgba(15,23,42,0.015)] hover:border-slate-200'
              }`}
            >
              <div>
                {plan.recommended && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider shadow-md shadow-indigo-150">
                    Best Value
                  </span>
                )}
                {plan.name === "Lifetime Plan" && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider shadow-md shadow-orange-150">
                    Limited Offer
                  </span>
                )}
                <h3 className="text-lg font-bold text-slate-850 mb-5 font-sans">{plan.name}</h3>
                
                <div className="mb-6 border-b border-slate-50 pb-5 text-left">
                  <span className="text-4xl font-black text-slate-900 font-display">₹{plan.price}</span>
                  <span className="text-slate-500 font-extrabold text-xs tracking-tight">{plan.period}</span>
                </div>
                
                <div className="space-y-3.5 mb-8 text-left">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-500">
                      <CheckCircle2 size={14} className="text-indigo-650 shrink-0" />
                      <span className="font-semibold tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => setSelectedPlan({ name: plan.name, price: plan.price.replace(/,/g, '') })}
                className={`w-full py-3 rounded-xl font-bold text-xs text-center transition-all duration-300 ${
                  plan.recommended 
                    ? 'bg-indigo-600 text-white hover:bg-slate-950 shadow-md hover:scale-[1.02]' 
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-950 hover:text-white border border-slate-200/80 hover:border-slate-950 hover:scale-[1.02]'
                }`}
              >
                Get Started Instance
              </button>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Calculator Tool Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-150 p-8 rounded-[2rem] shadow-[0_15px_40px_rgba(15,23,42,0.02)] max-w-4xl mx-auto mb-16"
        >
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-50">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <Sliders size={20} />
            </div>
            <div className="text-left">
              <h3 className="text-base font-extrabold text-slate-900">Custom Setup Quotation Builder</h3>
              <p className="text-xs text-slate-450">Set requirements to estimate custom enterprise setup and upfront installation rates.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            {/* Controls */}
            <div className="space-y-5">
              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">Select Software Suite</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "school", label: "School Suite" },
                    { id: "medical", label: "Medical App" },
                    { id: "builder", label: "Builder App" },
                    { id: "institute", label: "Institute App" }
                  ].map((pType) => (
                    <button
                      key={pType.id}
                      onClick={() => setSelectedProductType(pType.id)}
                      className={`px-3 py-2 text-xs font-bold rounded-xl transition-all ${
                        selectedProductType === pType.id
                          ? "bg-indigo-50 border border-indigo-200 text-indigo-700"
                          : "bg-slate-50 border border-slate-100/80 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {pType.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Campuses / Active Setups</label>
                  <span className="text-xs font-bold text-indigo-600">{branches} {branches === 1 ? 'Location' : 'Locations'}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={branches}
                  onChange={(e) => setBranches(parseInt(e.target.value))}
                  className="w-full accent-indigo-600 h-1.5 bg-slate-100 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Estimated Active Users</label>
                  <span className="text-xs font-bold text-indigo-600">{users} Users</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="100"
                  value={users}
                  onChange={(e) => setUsers(parseInt(e.target.value))}
                  className="w-full accent-indigo-600 h-1.5 bg-slate-100 rounded-lg cursor-pointer"
                />
              </div>

              <div className="pt-2 border-t border-slate-50">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={whiteLabel}
                    onChange={(e) => setWhiteLabel(e.target.checked)}
                    className="w-4.5 h-4.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                  />
                  <div className="text-left">
                    <span className="text-xs font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">Request custom White-Labeling</span>
                    <span className="text-[10px] text-slate-400 block">Deploy configurations under your custom organization name & domain branding</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Results output */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-150/60 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-slate-450 uppercase tracking-widest block">Investment Estimate</span>
                
                <div className="flex justify-between items-end border-b border-slate-150/50 pb-3.5">
                  <span className="text-xs text-slate-500 font-medium">Est. Upfront Setup Fee:</span>
                  <div className="text-right">
                    <span className="text-2xl font-black text-slate-900">₹{estimates.totalOneTime.toLocaleString()}</span>
                    <span className="text-[9px] text-slate-400 block font-mono">one-time setup</span>
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <span className="text-xs text-slate-500 font-medium">Est. Annual Maintenance (AMC):</span>
                  <div className="text-right">
                    <span className="text-lg font-bold text-slate-850">₹{estimates.yearlyRenewal.toLocaleString()}</span>
                    <span className="text-[9px] text-slate-400 block font-mono">per year (starts Year 2)</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={getWhatsAppEstimateLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-xl font-bold text-xs transition-colors shadow-xs flex items-center justify-center gap-2"
                >
                  <MessageCircle size={15} /> Book Quotation on WhatsApp
                </a>
                <p className="text-[9px] text-slate-400 font-mono text-center mt-2.5">
                  * Instant deployment pre-checks apply to fully white-labeled parameters.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

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
        
        <div className="mt-16 text-center space-y-6">
          <div className="inline-block bg-white border border-slate-100 rounded-[2rem] px-8 py-6 max-w-3xl shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-5 text-left">
              <div className="w-12 h-12 bg-indigo-50 border border-indigo-100/50 rounded-2xl flex items-center justify-center text-indigo-600 shrink-0">
                <Globe size={22} />
              </div>
              <div>
                <p className="text-slate-950 font-extrabold text-sm font-display">International Gateway SLA (Outside India)</p>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">
                  For deploying server-grade instances across USA, UK, UAE, Canada or Saudi Arabia, please contact our global desk directly via <a href="https://wa.me/918200109488" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-bold underline decoration-indigo-200 hover:decoration-indigo-600 transition-all">WhatsApp Channel</a> or <a href="mailto:patelmunaf90@gmail.com" className="text-indigo-600 font-bold underline decoration-indigo-200 hover:decoration-indigo-600 transition-all">Email Dispatch</a>.
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-slate-400 text-xs font-mono">
            * Regional compliances apply as per statutory tax models in India, Middle East, EU & North America.
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
      a: "Humara setup delivery speed bahut fast hai. Payment complete hote hi, 24 ghante ke andar cloud instances launch karke credentials aapke corporate mail par deliver kar diye jaate hain."
    },
    {
      q: "Kya trial system ka demo data reset ya delete kiya ja sakta hai?",
      a: "Haan. Jab aap live license full active karte hain, toh automatic cleanup setup trigger hota hai aur fresh, empty secure database instance create karke ready kar diya jata hai."
    },
    {
      q: "Kharidne ke baad support query desk kaise kaam karega?",
      a: "Lakhon users ki tarah aapko dedicated WhatsApp integration and Email ticketing desk milega. Emergency glitches mein team, remote systems (AnyDesk/TeamViewer) se active immediate response assist karti hai."
    },
    {
      q: "Kya software binary local hardware ya offline machines par run hogi?",
      a: "Bilkul. Client parameters ko dhyaan mein rakhte hue, options mein digital hybrid setups (Cloud live synchronizations) or stand-alone completely offline machines run capability fully optimized hain."
    }
  ];

  return (
    <section className="py-24 px-4 bg-white relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11px] uppercase font-extrabold tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-150/40 px-3.5 py-1 rounded-full mb-4 inline-block">
            Support Database
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 font-display tracking-tight">Frequently Asked Questions</h2>
          <p className="text-sm text-slate-500 max-w-md mx-auto">Got questions? Everything setup related answered directly by our tech crew.</p>
        </div>

        <div className="space-y-3.5 border-t border-slate-50 pt-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-slate-100 rounded-xl overflow-hidden bg-slate-50/20 transition-all duration-300"
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-4.5 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
                id={`faq-btn-${idx}`}
              >
                <span className="font-bold text-slate-900 text-sm md:text-base font-sans tracking-tight">{faq.q}</span>
                <span className={`w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center transition-transform duration-300 shrink-0 ${openIdx === idx ? 'rotate-180 bg-indigo-50 text-indigo-600' : 'text-slate-500'}`}>
                  <ArrowRight size={14} className="rotate-90" />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden bg-slate-50/40"
                  >
                    <div className="px-6 py-4 text-slate-500 leading-relaxed font-sans text-xs md:text-sm border-t border-slate-100/50">
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
    <section id="contact" className="py-20 px-4 bg-white border-t border-slate-100/60">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 font-display">Get in Touch</h2>
          <p className="text-sm text-slate-550 mb-8 max-w-md">
            Have questions? Our team is ready to help you digitize your business.
          </p>
          
          <div className="space-y-6">
            <a 
              href="https://wa.me/918200109488"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 group"
            >
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 group-hover:bg-green-100 transition-colors shrink-0">
                <MessageCircle size={20} />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider group-hover:text-green-600 transition-colors">WhatsApp Address</p>
                <p className="text-base font-bold text-slate-950 group-hover:text-green-600 transition-colors">
                  Chat with us now
                </p>
              </div>
            </a>

            <a 
              href="mailto:patelmunaf90@gmail.com"
              className="flex items-center gap-5 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-100 transition-colors shrink-0">
                <Mail size={20} />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider group-hover:text-indigo-600 transition-colors">Email Us</p>
                <p className="text-base font-bold text-indigo-600 group-hover:text-indigo-750 transition-colors underline decoration-indigo-200 underline-offset-4 font-display">
                  patelmunaf90@gmail.com
                </p>
              </div>
            </a>

            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-slate-700 shrink-0">
                <ShieldCheck size={20} className="text-indigo-600" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Support SLA</p>
                <p className="text-base font-extrabold text-slate-950 font-display">24/7 Superfast Care</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-[0_10px_35px_rgba(15,23,42,0.02)] text-left">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  return (
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

        // Trigger WhatsApp
        const waText = `Hi Global Software, I'm ${data.name} (Phone: ${data.phone}). I'm interested in testing/buying "${data.product}". Message: ${data.message}`;
        window.open(`https://wa.me/918200109488?text=${encodeURIComponent(waText)}`, '_blank');

        // Mail API Post
        try {
          await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });
        } catch (err) {
          console.error('Email Dispatch Error - WhatsApp route was invoked');
        }

        setIsSubmitSuccess(true);
        form.reset();
        setTimeout(() => setIsSubmitSuccess(false), 8000);
      }}
    >
      {isSubmitSuccess && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-5.5 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-start gap-3.5 text-emerald-800"
        >
          <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
          <div>
            <p className="font-extrabold text-sm font-display">Inquiry successfully registered!</p>
            <p className="text-xs text-emerald-700/90 leading-relaxed mt-1">We have triggered WhatsApp portal and recorded email thread. A sovereign licensing expert will follow up within 30 minutes.</p>
          </div>
        </motion.div>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2.5">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Full Name</label>
          <input 
            name="name"
            type="text" 
            required
            placeholder="e.g. John Doe"
            className="w-full px-5 py-4 rounded-xl border border-slate-200/80 bg-slate-50/20 focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 outline-none transition-all font-sans text-sm"
          />
        </div>
        <div className="space-y-2.5">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone / WhatsApp Number</label>
          <input 
            name="phone"
            type="tel" 
            required
            placeholder="e.g. +91 9999999999"
            className="w-full px-5 py-4 rounded-xl border border-slate-200/80 bg-slate-50/20 focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 outline-none transition-all font-sans text-sm"
          />
        </div>
      </div>
      
      <div className="space-y-2.5">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Target Application Suite</label>
        <select 
          name="product"
          className="w-full px-5 py-4 rounded-xl border border-slate-200/80 bg-slate-50/30 focus:bg-white focus:indigo-600 focus:ring-4 focus:ring-indigo-100 outline-none transition-all font-sans text-sm"
        >
          <option>School Management System</option>
          <option>Smart Pharmacy Medical App</option>
          <option>Builder & Construction Suite</option>
          <option>Coaching Class Institute Platform</option>
          <option>Enterprise Custom Solution</option>
        </select>
      </div>

      <div className="space-y-2.5">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Inquiry Brief</label>
        <textarea 
          name="message"
          rows={4} 
          required
          placeholder="Kindly formulate any customization desires, sovereign parameters, or pricing questions..."
          className="w-full px-5 py-4 rounded-xl border border-slate-200/80 bg-slate-50/20 focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 outline-none transition-all font-sans text-sm leading-relaxed"
        ></textarea>
      </div>
      <button 
        type="submit"
        className="w-full bg-slate-900 hover:bg-indigo-600 text-white font-bold py-4.5 rounded-2xl shadow-xl hover:shadow-indigo-100 hover:-translate-y-0.5 transition-all text-base tracking-wide"
      >
        Transmit WhatsApp Dispatch & Email thread
      </button>
    </form>
  );
};

const TechStack = () => {
  const techs = [
    { name: "React 18+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node Engine", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "GCP Multi-zone", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Secure PGSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "TypeScript 5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  ];

  return (
    <section className="py-20 bg-slate-50/50 border-y border-slate-100/90 leading-none">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-12">Engineered with State-Of-The-Art stacks</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 hover:opacity-100 transition-opacity duration-300">
          {techs.map((tech, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors shadow-xs">
              <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain" />
              <span className="text-xs font-bold text-slate-700">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onPolicyClick }: { onPolicyClick: (type: 'privacy' | 'terms' | 'refund') => void }) => {
  return (
    <footer className="bg-slate-950 text-white py-20 px-4 relative overflow-hidden border-t border-slate-900">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 text-left">
            <div className="mb-5">
              <GlobalLogo light={true} />
            </div>
            <p className="text-slate-400 text-sm max-w-sm mb-6 font-sans leading-relaxed">
              Your sovereign engineering partner for agile systems automation. Powering hundreds of schools, institutes, builders, and medical depots with secure, performant software arrays.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://wa.me/918200109488" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center hover:bg-green-600 hover:border-transparent transition-all"
                title="WhatsApp Direct Support"
              >
                <MessageCircle size={18} />
              </a>
              <a 
                href="mailto:patelmunaf90@gmail.com" 
                className="w-10 h-10 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center hover:bg-indigo-600 hover:border-transparent transition-all text-white"
                title="Email Desk"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div className="text-left">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-indigo-400 mb-6">Service Arrays</h3>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li><a href="#products" className="hover:text-white transition-colors">Enterprise Products</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Our Advantage</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing Matrix</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Interactive Sandboxes</a></li>
            </ul>
          </div>
          
          <div className="text-left">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-indigo-400 mb-6">Sovereign Integrity</h3>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li><button onClick={() => onPolicyClick('privacy')} className="hover:text-white transition-colors text-left">Privacy Guidelines</button></li>
              <li><button onClick={() => onPolicyClick('terms')} className="hover:text-white transition-colors text-left">Terms & Protocols</button></li>
              <li><button onClick={() => onPolicyClick('refund')} className="hover:text-white transition-colors text-left">Refund Terms</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© 2026 Global Software Group Ltd. All engineering reserves held.</p>
          <p className="flex items-center gap-1.5 font-mono">
            Empowering modern businesses globally 🌍
          </p>
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-32 right-8 z-50 w-12 h-12 bg-white text-indigo-600 rounded-full shadow-2xl border border-slate-100 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors"
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

