/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Cpu, 
  GraduationCap, 
  Code2, 
  Radio, 
  School, 
  ShoppingBag, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Menu, 
  X,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Terminal,
  Lightbulb,
  Globe,
  Factory,
  Car,
  HeartPulse,
  Palmtree,
  Compass,
  Trophy,
  BookOpen,
  Wrench,
  ShieldCheck
} from 'lucide-react';

// --- Types ---

interface Project {
  title: string;
  desc: string;
  icon: ReactNode;
  tags: string[];
  image: string;
  link: string;
}

interface Suite {
  id: string;
  name: string;
  accent: string;
  projects: Project[];
}

// --- Data ---

const suites: Suite[] = [
  {
    id: "tvet",
    name: "Smart TVET Suite",
    accent: "brand-blue",
    projects: [
      {
        title: "Smart TVET Systems",
        desc: "The central hub for digital transformation in technical vocational education, bridging the gap between traditional learning and modern tech.",
        icon: <Cpu className="text-brand-blue" />,
        tags: ["Core Brand", "Digital Hub", "Education"],
        image: "https://picsum.photos/seed/tvet-hub/800/500",
        link: "https://smart-tve-tsystems.vercel.app/"
      },
      {
        title: "Assessor Tools TVET",
        desc: "AI-powered automation for TVET instructors to generate marking schemes and session plans, drastically reducing administrative overhead.",
        icon: <Wrench className="text-brand-blue" />,
        tags: ["SaaS", "AI Automation", "Productivity"],
        image: "https://picsum.photos/seed/assessor/800/500",
        link: "https://asessortoolstvet-xp1d.vercel.app/"
      },
      {
        title: "Greenview Academy",
        desc: "Smart school admission portal with AI-powered parent assistance, streamlining the enrollment process for modern educational institutions.",
        icon: <School className="text-brand-blue" />,
        tags: ["EdTech", "AI Assistant", "Portal"],
        image: "https://picsum.photos/seed/greenview/800/500",
        link: "https://greenviewacademyravine.vercel.app/"
      }
    ]
  },
  {
    id: "industry",
    name: "Industry & Automation",
    accent: "brand-purple",
    projects: [
      {
        title: "Lembus Sawmills",
        desc: "Industrial digital presence for timber processing and supply chain management, modernizing manufacturing in the North Rift.",
        icon: <Factory className="text-brand-purple" />,
        tags: ["Manufacturing", "Industrial", "Supply Chain"],
        image: "https://picsum.photos/seed/sawmill/800/500",
        link: "https://lembussawmills.vercel.app/"
      },
      {
        title: "Autocom-rho",
        desc: "Technical automotive engineering platform for vehicle diagnostics and services, bringing precision engineering to the digital space.",
        icon: <Car className="text-brand-purple" />,
        tags: ["Automotive", "Engineering", "Diagnostics"],
        image: "https://picsum.photos/seed/auto/800/500",
        link: "https://autocom-rho.vercel.app/"
      },
      {
        title: "Emsot Herbal Clinic",
        desc: "Healthcare management and product catalog for traditional medicinal solutions, digitizing herbal medicine and patient care.",
        icon: <HeartPulse className="text-brand-purple" />,
        tags: ["Healthcare", "Pharma", "E-commerce"],
        image: "https://picsum.photos/seed/clinic/800/500",
        link: "https://emsot-herbal-clinic.vercel.app/"
      }
    ]
  },
  {
    id: "hospitality",
    name: "Hospitality & Tourism",
    accent: "brand-amber",
    projects: [
      {
        title: "The Kerio River Lodge",
        desc: "Luxury hospitality portal with integrated booking inquiries for the Kerio Valley, showcasing world-class tourism in Kenya.",
        icon: <Palmtree className="text-brand-amber" />,
        tags: ["Hospitality", "Tourism", "Booking"],
        image: "https://picsum.photos/seed/lodge/800/500",
        link: "https://thekerioriverlodge.vercel.app/"
      },
      {
        title: "Vinny Safaris",
        desc: "Tourism and travel booking portal for East African safari experiences, offering seamless adventure planning.",
        icon: <Compass className="text-brand-amber" />,
        tags: ["Safari", "Travel", "Booking"],
        image: "https://picsum.photos/seed/safari/800/500",
        link: "https://vinnysafaris.vercel.app/"
      },
      {
        title: "Cheptebo RDC",
        desc: "Agri-business e-commerce and certified seedling nursery management, supporting sustainable agriculture and hospitality.",
        icon: <ShoppingBag className="text-brand-amber" />,
        tags: ["Agri-Business", "E-commerce", "Nursery"],
        image: "https://picsum.photos/seed/cheptebo/800/500",
        link: "https://cheptebordc.vercel.app/"
      }
    ]
  },
  {
    id: "community",
    name: "Community & Sports",
    accent: "brand-green",
    projects: [
      {
        title: "Kipkorgot Starlets FC",
        desc: "Community sports management and talent showcasing platform, empowering local athletes through digital visibility.",
        icon: <Trophy className="text-brand-green" />,
        tags: ["Sports", "Community", "Talent"],
        image: "https://picsum.photos/seed/football/800/500",
        link: "https://kipkorgotstarletsfc.vercel.app/"
      }
    ]
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Credentials', href: '#credentials' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Stack', href: '#stack' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-extrabold tracking-tighter text-brand-blue flex items-center gap-2">
          <Zap className="fill-brand-green text-brand-green" size={24} />
          ALEX BETT
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-brand-blue text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-900 transition-all shadow-lg shadow-blue-900/20"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 md:hidden py-6 px-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-slate-800"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="bg-brand-blue text-white text-center py-3 rounded-xl font-bold"
            >
              Hire for Remote Roles
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ title, subtitle, light = false }: { title: string, subtitle: string, light?: boolean }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-4xl font-extrabold mb-4 ${light ? 'text-white' : 'text-slate-900'}`}
    >
      {title}
    </motion.h2>
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: true }}
      className="h-1.5 bg-brand-green rounded-full mb-6"
    />
    <p className={`text-lg max-w-2xl ${light ? 'text-blue-100' : 'text-slate-600'}`}>
      {subtitle}
    </p>
  </div>
);

export default function App() {
  const [activeSuite, setActiveSuite] = useState(suites[0].id);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-blue/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-brand-green/20 blur-[100px] rounded-full" />
          <div className="absolute top-[20%] right-[10%] w-[25%] h-[25%] bg-brand-purple/10 blur-[80px] rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-brand-blue text-sm font-bold mb-6 border border-blue-100">
              <GraduationCap size={16} />
              B.Ed Technology (Electrical & Computing)
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Modernizing Industry via <span className="text-brand-blue">Smart Systems.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              10 years of expertise bridging the gap between Electrical Engineering, Technical Pedagogy, and AI Computing. Driving digital transformation from Eldama Ravine to the global stage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                className="bg-brand-blue text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-blue-900 transition-all shadow-xl shadow-blue-900/20 group"
              >
                View My Digital Solutions
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a 
                href="#contact" 
                className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:border-brand-blue hover:text-brand-blue transition-all"
              >
                Hire for Remote Roles
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-slate-100 overflow-hidden shadow-2xl relative group">
              <img 
                src="https://lh3.googleusercontent.com/d/1SjQv4bgCcCO11gebydnHsnK8f1fnE0zl" 
                alt="Alex Bett" 
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <p className="text-white font-bold text-2xl">Alex Bett</p>
                <p className="text-blue-200">Senior Technical Trainer & Architect</p>
              </div>
            </div>
            
            {/* Floating Stats */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100"
            >
              <p className="text-4xl font-black text-brand-blue">10+</p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Years Experience</p>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: 1 }}
              className="absolute -top-6 -right-6 bg-brand-green p-6 rounded-2xl shadow-xl"
            >
              <Cpu className="text-white mb-2" size={32} />
              <p className="text-white font-bold">AI & Smart Systems</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section - The Triple Threat Story */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <SectionHeading 
                title="The Triple Threat Story" 
                subtitle="Bridging the gap between Electrical Engineering, Pedagogy, and AI." 
              />
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  I am <span className="font-bold text-brand-blue">Alex Bett</span>, a result-driven professional with a career dedicated to the field of electrical and electronics technology and computing training. I am self-driven, ambitious, and innovative—a fast learner who takes pride in being a true team player with strong interpersonal skills.
                </p>
                <p>
                  My background is rooted in the rigorous world of <span className="font-bold text-brand-blue">Electrical Engineering</span>, refined by a <span className="font-bold text-brand-blue">B.Ed in Technology</span> from Moi University, and supercharged by modern <span className="font-bold text-brand-blue">AI Computing</span>.
                </p>
                <p>
                  For over a decade, I've served as a Senior Technical Trainer and <span className="font-bold text-brand-blue">Head of Department</span>, overseeing curriculum development and strategic planning. My mission is clear: <span className="italic">"Turning Jitume Labs into AI Power Plants."</span> I don't just teach technology; I build it to solve real-world industrial and educational challenges.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-semibold">Authoritative</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-semibold">Resilient</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-semibold">Innovative</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-semibold">Global Ready</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-2xl bg-brand-blue flex flex-col items-center justify-center text-white p-6 text-center">
                  <Zap size={40} className="mb-4" />
                  <p className="font-bold">Electrical Mastery</p>
                </div>
                <div className="h-64 rounded-2xl bg-slate-200 overflow-hidden">
                  <img src="https://picsum.photos/seed/elec/400/600" alt="Engineering" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 rounded-2xl bg-slate-200 overflow-hidden">
                  <img src="https://picsum.photos/seed/code/400/600" alt="Coding" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="h-48 rounded-2xl bg-brand-green flex flex-col items-center justify-center text-white p-6 text-center">
                  <GraduationCap size={40} className="mb-4" />
                  <p className="font-bold">Pedagogical Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Experience */}
            <div>
              <SectionHeading 
                title="Professional Journey" 
                subtitle="A decade of leadership and technical training in engineering and computing." 
              />
              <div className="space-y-12">
                {[
                  {
                    company: "Eldama Ravine TVC",
                    role: "Head of Department & Senior Trainer",
                    period: "2021 - 2025",
                    desc: "Leading academic leadership, overseeing curriculum development, teaching standards, and strategic planning. Managing departmental budgets and staff while training in digital electronics and electrical installation.",
                    accent: "brand-blue"
                  },
                  {
                    company: "Emining Technical Training Institute",
                    role: "Technical Trainer",
                    period: "Previous",
                    desc: "Specialized in training basic electronics, electrical installation, and engineering mathematics.",
                    accent: "brand-purple"
                  },
                  {
                    company: "Eldoret National Polytechnic",
                    role: "Technical Trainer",
                    period: "Previous",
                    desc: "Focused on core subjects including basic electronics and digital electronics.",
                    accent: "brand-green"
                  },
                  {
                    company: "Rift Valley Textile Industry",
                    role: "Electrical Maintenance Engineer",
                    period: "Industrial Experience",
                    desc: "Hands-on industrial experience in electrical maintenance and systems troubleshooting.",
                    accent: "brand-amber"
                  }
                ].map((job, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative pl-8 border-l-2 border-slate-100"
                  >
                    <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-${job.accent} shadow-lg shadow-${job.accent}/20`} />
                    <p className="text-sm font-bold text-slate-400 mb-1 uppercase tracking-widest">{job.period}</p>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{job.role}</h4>
                    <p className={`font-bold text-${job.accent} mb-3`}>{job.company}</p>
                    <p className="text-slate-600 leading-relaxed">{job.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <SectionHeading 
                title="Academic Excellence" 
                subtitle="Rigorous technical education providing a solid foundation for innovation." 
              />
              <div className="space-y-8">
                {[
                  {
                    school: "Moi University",
                    degree: "Bachelor of Education (Technology Education)",
                    specialization: "Electrical, Electronics & Computing",
                    period: "Graduated Dec 2020",
                    icon: <GraduationCap className="text-brand-blue" />
                  },
                  {
                    school: "Tambach High School",
                    degree: "KCSE (Kenya Certificate of Secondary Education)",
                    specialization: "Mean Grade: B (Plain) | Physics Exhibit 2nd Place (Science Congress)",
                    period: "2008 - 2012",
                    icon: <School className="text-brand-purple" />
                  },
                  {
                    school: "Cheptebo Primary School",
                    degree: "KCPE (Kenya Certificate of Primary Education)",
                    specialization: "351 / 500 Marks",
                    period: "1999 - 2007",
                    icon: <BookOpen className="text-brand-green" />
                  }
                ].map((edu, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        {edu.icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-widest">{edu.period}</p>
                        <h4 className="text-xl font-bold text-slate-900 mb-1">{edu.school}</h4>
                        <p className="font-bold text-brand-blue mb-2">{edu.degree}</p>
                        <p className="text-slate-500 text-sm">{edu.specialization}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Hobbies */}
              <div className="mt-12 p-8 rounded-3xl bg-brand-blue/5 border border-brand-blue/10">
                <h5 className="font-bold text-brand-blue mb-4 flex items-center gap-2">
                  <Palmtree size={20} />
                  Beyond the Lab
                </h5>
                <div className="flex flex-wrap gap-3">
                  {["Travelling", "Reading", "Socializing", "Community Mentorship"].map(hobby => (
                    <span key={hobby} className="px-4 py-2 rounded-full bg-white text-slate-600 text-sm font-semibold shadow-sm border border-slate-100">
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Recognition Section */}
      <section id="credentials" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-transparent -z-10" />
        
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            light
            title="Credentials & Recognition" 
            subtitle="Verified certifications and professional appointments demonstrating technical mastery and leadership." 
          />

          <div className="grid md:grid-cols-3 gap-8">
            {/* Professional Awards */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold flex items-center gap-2 text-brand-amber">
                <Trophy size={24} />
                Awards & Honors
              </h4>
              <div className="space-y-4">
                {[
                  { title: "Trainer of the Year 2023", issuer: "Eldama Ravine TVC", desc: "Outstanding performance in Electrical & Electronics Engineering Department." },
                  { title: "Physics Exhibit - 2nd Place", issuer: "Ministry of Education", desc: "Keiyo District Science Congress competition." }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <p className="font-bold text-white mb-1">{item.title}</p>
                    <p className="text-brand-amber text-xs font-bold uppercase mb-2">{item.issuer}</p>
                    <p className="text-blue-100/60 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold flex items-center gap-2 text-brand-green">
                <CheckCircle2 size={24} />
                Digital Certifications
              </h4>
              <div className="space-y-4">
                {[
                  { title: "Digital Productivity Skills", issuer: "ICT Authority, Kenya", date: "July 2023" },
                  { title: "Ajira Digital Program", issuer: "Ministry of ICT", date: "Sept 2023", tags: ["Content Writing", "Data Entry", "Transcription"] }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <p className="font-bold text-white mb-1">{item.title}</p>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-brand-green text-xs font-bold uppercase">{item.issuer}</p>
                      <p className="text-slate-500 text-[10px]">{item.date}</p>
                    </div>
                    {item.tags && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {item.tags.map(t => <span key={t} className="text-[9px] bg-brand-green/20 text-brand-green px-1.5 py-0.5 rounded">{t}</span>)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Committee Appointments */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold flex items-center gap-2 text-brand-purple">
                <Wrench size={24} />
                Strategic Committees
              </h4>
              <div className="space-y-4">
                {[
                  { title: "Digitalization & ICT Integration", role: "Committee Member" },
                  { title: "Skills Competition & Co-Curriculum", role: "Committee Member" },
                  { title: "Career Services Committee", role: "Committee Member" },
                  { title: "Disability Mainstreaming", role: "Committee Member" }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-sm text-white">{item.title}</p>
                      <p className="text-brand-purple text-[10px] font-bold uppercase">{item.role}</p>
                    </div>
                    <ChevronRight size={16} className="text-slate-600" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Integrity Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-[2rem] bg-gradient-to-r from-brand-blue/20 to-brand-purple/20 border border-white/10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left"
          >
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center text-brand-blue">
              <ShieldCheck size={48} />
            </div>
            <div className="flex-1">
              <h5 className="text-2xl font-bold mb-2">Verified Integrity & Compliance</h5>
              <p className="text-blue-100/60 max-w-2xl">
                Holding a valid **Police Clearance Certificate** (DCI Kenya) and serving on multiple governance committees, I maintain the highest standards of professional ethics and institutional transparency.
              </p>
            </div>
            <div className="px-6 py-3 rounded-full bg-brand-green/20 border border-brand-green/30 text-brand-green font-bold text-sm flex items-center gap-2">
              <CheckCircle2 size={16} />
              DCI Verified
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section - Digital Suites */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="The Digital Suites" 
            subtitle="A comprehensive portfolio of 10+ professional applications categorized by industry impact." 
          />
          
          {/* Suite Tabs */}
          <div className="flex flex-wrap gap-2 mb-12 bg-slate-50 p-2 rounded-2xl border border-slate-100 w-fit">
            {suites.map((suite) => (
              <button
                key={suite.id}
                onClick={() => setActiveSuite(suite.id)}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                  activeSuite === suite.id 
                    ? `bg-${suite.accent} text-white shadow-lg shadow-${suite.accent}/20` 
                    : 'text-slate-500 hover:text-brand-blue hover:bg-white'
                }`}
              >
                {suite.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {suites.find(s => s.id === activeSuite)?.projects.map((project, idx) => {
                const suiteAccent = suites.find(s => s.id === activeSuite)?.accent || 'brand-blue';
                return (
                  <motion.div 
                    key={project.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className={`group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-${suiteAccent}/10 transition-all duration-500 flex flex-col`}
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg">
                        {project.icon}
                      </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border border-slate-200 px-2 py-1 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className={`text-2xl font-bold text-slate-900 mb-3 group-hover:text-${suiteAccent} transition-colors`}>
                        {project.title}
                      </h3>
                      <p className="text-slate-600 mb-6 line-clamp-3 flex-1">
                        {project.desc}
                      </p>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 font-bold text-${suiteAccent} group/btn mt-auto`}
                      >
                        Launch Application
                        <ExternalLink size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue -z-20" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-purple/40 via-transparent to-transparent -z-10" />
        
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            light
            title="Core Services" 
            subtitle="Strategic solutions designed to modernize education and industry." 
          />
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "AI Staff Training",
                desc: "Custom workshops for TVET staff and administrators on leveraging AI for efficiency.",
                icon: <GraduationCap size={32} />,
                accent: "brand-green"
              },
              {
                title: "Full-Stack Dev",
                desc: "Next.js, Vercel, and Gemini AI integration for high-performance web applications.",
                icon: <Code2 size={32} />,
                accent: "brand-amber"
              },
              {
                title: "Curriculum Design",
                desc: "High-level Engineering and ICT lesson planning for modern technical institutions.",
                icon: <Lightbulb size={32} />,
                accent: "brand-purple"
              },
              {
                title: "Strategic Consultancy",
                desc: "Digitizing manual local industries including large-scale farms and media houses.",
                icon: <Globe size={32} />,
                accent: "white"
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.02] group"
              >
                <div className={`text-${service.accent} mb-6 group-hover:scale-110 transition-transform`}>{service.icon}</div>
                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                <p className="text-blue-100/70 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section id="stack" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4">Technical Stack</h2>
            <p className="text-slate-500">The tools I use to build elite digital experiences.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { category: "Frontend", items: ["Next.js 14", "React", "Tailwind CSS", "Framer Motion"] },
              { category: "AI & ML", items: ["Gemini 1.5 Pro", "OpenAI API", "Prompt Engineering", "LangChain"] },
              { category: "Backend", items: ["Vercel", "Supabase", "Node.js", "PostgreSQL"] },
              { category: "Engineering", items: ["Electrical Installation", "PLC Programming", "Digital Electronics", "Engineering Mathematics"] }
            ].map((group, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100">
                <h5 className="font-black text-brand-blue mb-6 uppercase tracking-widest text-xs">{group.category}</h5>
                <ul className="space-y-3">
                  {group.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-slate-700 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-brand-blue/30 via-brand-purple/20 to-transparent -skew-x-12 translate-x-1/4" />
            
            <div className="relative z-10 p-12 md:p-20 grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Ready to Modernize Your <span className="text-brand-green">Systems?</span>
                </h2>
                <p className="text-xl text-blue-100/70 mb-10">
                  Whether you're a local institution in Kenya or an international recruiter looking for senior technical talent, let's build something impactful.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-blue">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200/50 font-bold uppercase tracking-widest">Email Me</p>
                      <p className="text-lg font-semibold">bettkyms@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-green">
                      <Zap size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200/50 font-bold uppercase tracking-widest">Call Me</p>
                      <p className="text-lg font-semibold">+254 723 404 240</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-purple">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200/50 font-bold uppercase tracking-widest">Location</p>
                      <p className="text-lg font-semibold">Eldama Ravine, Kenya (Global Remote)</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-12">
                  <a href="#" className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-brand-blue transition-all hover:scale-110">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-brand-purple transition-all hover:scale-110">
                    <Github size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-brand-amber transition-all hover:scale-110">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Full Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address</label>
                      <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Subject</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all">
                      <option>Hire for Remote Role</option>
                      <option>AI Staff Training</option>
                      <option>Project Consultation</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" placeholder="How can I help you?"></textarea>
                  </div>
                  <button className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-900 transition-all shadow-xl shadow-blue-900/20">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-medium">
            © {new Date().getFullYear()} Alex Bett. Built with <span className="text-brand-blue font-bold">React</span> & <span className="text-brand-purple font-bold">Gemini AI</span>.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-sm font-bold text-slate-400 hover:text-brand-blue transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm font-bold text-slate-400 hover:text-brand-blue transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
