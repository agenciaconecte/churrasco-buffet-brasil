import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { 
  Instagram, 
  MessageCircle, 
  ChefHat, 
  UtensilsCrossed, 
  Star, 
  CheckCircle2, 
  Clock, 
  MapPin,
  Menu as MenuIcon,
  X,
  ChevronRight
} from "lucide-react";
import MenuPopup from "./components/MenuPopup";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? "bg-black/80 backdrop-blur-xl border-white/10 py-3 shadow-2xl" 
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('hero')}>
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqSkov_-K0tiVFx5ZeDpXBERdB_CGSHXcZ_7ueZVsrdK0U3cFC45LvXVcn_606GfsJ8mb8vpGg3wyfGpXyZ2HQGOk2MqMdMv6amJlqJ9sqFaxILFHyk8eWVP_ExFU0kCk1H9aMiBUTSKjva2R16jXzYWnYxY7IZCWJeiXDnnODcA-KqROOBsfkKmga-mQ/s320/logo.png" 
              alt="Churrasco Buffet Brasil" 
              className="h-10 sm:h-12 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['Início', 'Serviços', 'Diferenciais', 'Sobre'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                className="text-sm font-medium hover:text-secondary transition-colors"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-secondary hover:bg-secondary/90 rounded-full text-sm font-bold transition-all transform hover:scale-105"
            >
              <UtensilsCrossed className="w-4 h-4" />
              Ver Cardápio
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {['Início', 'Serviços', 'Diferenciais', 'Sobre'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                  className="text-left py-2 text-lg font-medium"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => {
                  setIsMenuOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-4 bg-secondary rounded-xl font-bold flex items-center justify-center gap-2"
              >
                <UtensilsCrossed className="w-5 h-5" />
                Ver Cardápio
              </button>
            </div>
          </motion.div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="relative h-screen flex items-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgANlGR0tG8NMN-YL8P8jREa8GGfmkmE1IOBoRNzWlUjFEuVW9c7gOSFmaXrQxM6ZlJv_RjgZbslWajxFQ9C-V-iYCS-g36z-e61QfBRKzcqHA64sEqJ4jqw2JGGpoOpa5fTurFIrxN_PWmbN3bJ9w04hu_A6p6fJfxiFFsTeRbrbYJIlMcs0upl7d16b0/s16000/hero1.png" 
              alt="Churrasco Premium" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-widest mb-6"
              >
                O Melhor Churrasco de Rolim de Moura
              </motion.span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6 text-balance">
                O <span className="text-primary italic">Buffet certo</span> <br />
                faz toda diferença!
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
                Buffet completo com carnes nobres selecionadas e preparadas por quem entende de tradição há mais de 20 anos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/5569985001030" 
                  target="_blank"
                  className="px-8 py-4 bg-primary hover:bg-primary/90 rounded-full font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-primary/20 animate-pulse-soft"
                >
                  <MessageCircle className="w-5 h-5" />
                  Solicitar Orçamento
                </a>
                <button 
                  onClick={() => setIsMenuOpen(true)}
                  className="px-8 py-4 glass hover:bg-white/10 rounded-full font-bold flex items-center justify-center gap-2 transition-all"
                >
                  <UtensilsCrossed className="w-5 h-5 text-secondary" />
                  Conhecer Cardápio
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Authority Section */}
        <section className="py-12 glass border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Anos de Tradição", value: "20+" },
                { label: "Eventos Realizados", value: "500+" },
                { label: "Carnes Nobres", value: "100%" },
                { label: "Clientes Satisfeitos", value: "1k+" }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center animate-glow-blue"
                >
                  <div className="text-3xl sm:text-4xl font-display font-bold text-secondary mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-16 md:py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">Soluções Gastronômicas</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Oferecemos uma estrutura completa para que você se preocupe apenas em aproveitar seu evento.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ChefHat className="w-8 h-8" />,
                  title: "Churrasco Profissional",
                  desc: "Cortes selecionados preparados no ponto perfeito por mestres churrasqueiros."
                },
                {
                  icon: <UtensilsCrossed className="w-8 h-8" />,
                  title: "Buffet Completo",
                  color: "text-secondary",
                  bg: "bg-secondary/10",
                  desc: "Acompanhamentos frescos, saladas elaboradas e pratos quentes que encantam."
                },
                {
                  icon: <CheckCircle2 className="w-8 h-8" />,
                  title: "Gestão de Eventos",
                  desc: "Cuidamos de toda a estrutura do buffet, do planejamento à execução final."
                }
              ].map((service, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="p-8 glass rounded-3xl border border-white/10 group"
                >
                  <div className={`w-16 h-16 ${service.bg || 'bg-primary/10'} rounded-2xl flex items-center justify-center ${service.color || 'text-primary'} mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bento Grid Diferenciais */}
        <section id="diferenciais" className="py-16 md:py-24 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">Por que nos escolher?</h2>
              <p className="text-gray-400">O segredo do nosso sucesso está nos detalhes e na paixão pelo que fazemos.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[240px]">
              {/* Card 1 - Large */}
              <motion.div 
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                className="md:col-span-2 md:row-span-2 rounded-3xl p-6 sm:p-10 flex flex-col justify-end relative overflow-hidden group border border-white/10 min-h-[450px] md:min-h-0"
              >
                <div className="absolute inset-0 z-0">
                  <img 
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgANlGR0tG8NMN-YL8P8jREa8GGfmkmE1IOBoRNzWlUjFEuVW9c7gOSFmaXrQxM6ZlJv_RjgZbslWajxFQ9C-V-iYCS-g36z-e61QfBRKzcqHA64sEqJ4jqw2JGGpoOpa5fTurFIrxN_PWmbN3bJ9w04hu_A6p6fJfxiFFsTeRbrbYJIlMcs0upl7d16b0/s16000/hero1.png" 
                    alt="Churrasco de Qualidade" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>
                
                <div className="relative z-10 glass p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Experiência que faz a diferença</h3>
                  <p className="text-gray-200 text-lg max-w-md">
                    Com Fátima Oliveira e Edmilson Silva à frente, somamos mais de 20 anos de expertise entregando o melhor churrasco da região.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-8 flex flex-col justify-center text-center"
              >
                <div className="text-secondary mb-4 flex justify-center">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">Carnes Nobres</h3>
                <p className="text-gray-400 text-sm">Seleção rigorosa dos melhores cortes para garantir sabor e maciez.</p>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-8 flex flex-col justify-center text-center"
              >
                <div className="text-primary mb-4 flex justify-center">
                  <Clock className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">Pontualidade</h3>
                <p className="text-gray-400 text-sm">Respeito total ao cronograma do seu evento, sem atrasos.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sobre Section */}
        <section id="sobre" className="py-16 md:py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8">Nossa História, <br /><span className="text-primary">Sua Celebração</span></h2>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    O Churrasco Buffet Brasil nasceu da paixão por reunir pessoas em torno de uma boa mesa. Localizados em Rolim de Moura, somos referência em transformar eventos em experiências memoráveis.
                  </p>
                  <p>
                    Nossa equipe é liderada por Fátima Oliveira e Edmilson Silva, profissionais que dedicam suas vidas à gastronomia. Não apenas servimos comida; entregamos cuidado, sabor e profissionalismo em cada detalhe.
                  </p>
                  <div className="pt-6 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <span>Rolim de Moura - RO e Região</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                        <Instagram className="w-5 h-5" />
                      </div>
                      <a href="https://www.instagram.com/churrascobuffetbrasil" target="_blank" className="hover:text-secondary transition-colors">@churrascobuffetbrasil</a>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <img 
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIxJUp4w21C4OhlIp-DrpZXoaA2PdwEf9jD2V0rPJETcRtZKtGkHjzuZdchfi6XYzj3DWEOB2xf_pzH-F7QKixicfDeNtTuoOO7ar6fjalrlr8EEIrimVL7KlnuPjGnc3FHnH-c_Jkom8muLVfirkXkiLJAawDEbT85r-H54kifECsNIvBTrEzum5ldN4/s16000/sobre.png" 
                    alt="Equipe Churrasco Buffet Brasil" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 glass p-8 rounded-2xl hidden sm:block">
                  <div className="text-4xl font-display font-bold text-secondary">20+</div>
                  <div className="text-xs uppercase tracking-widest font-bold">Anos de Expertise</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">O que dizem nossos clientes</h2>
              <p className="text-gray-400">A satisfação de quem já viveu a experiência Churrasco Buffet Brasil.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Ricardo Santos",
                  role: "Empresário",
                  text: "Contratei para o aniversário da minha empresa e foi impecável. A carne estava no ponto exato e o buffet de acompanhamentos surpreendeu a todos."
                },
                {
                  name: "Juliana Mendes",
                  role: "Noiva",
                  text: "Meu casamento foi perfeito graças ao profissionalismo da Fátima e do Edmilson. Todos os convidados elogiaram a comida. Recomendo de olhos fechados!"
                },
                {
                  name: "Marcos Oliveira",
                  role: "Produtor Rural",
                  text: "O melhor churrasco da região. Atendimento nota 10 e organização exemplar. Não tem erro, é garantia de sucesso no evento."
                }
              ].map((testimonial, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 glass rounded-3xl border border-white/10"
                >
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                  </div>
                  <p className="text-gray-300 italic mb-8">"{testimonial.text}"</p>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-xs text-secondary uppercase tracking-widest">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-8 text-balance">Pronto para tornar seu evento <span className="text-primary italic">inesquecível?</span></h2>
            <p className="text-xl text-gray-300 mb-12">
              Entre em contato agora e solicite um orçamento personalizado para sua celebração.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://wa.me/5569985001030" 
                target="_blank"
                className="w-full sm:w-auto px-10 py-5 bg-primary hover:bg-primary/90 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all transform hover:scale-105 animate-pulse-soft"
              >
                <MessageCircle className="w-6 h-6" />
                Falar no WhatsApp
              </a>
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="w-full sm:w-auto px-10 py-5 glass hover:bg-white/10 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all"
              >
                <UtensilsCrossed className="w-6 h-6 text-secondary" />
                Ver Opções de Cardápio
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
            <div className="md:col-span-2 flex flex-col items-center md:items-start">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqSkov_-K0tiVFx5ZeDpXBERdB_CGSHXcZ_7ueZVsrdK0U3cFC45LvXVcn_606GfsJ8mb8vpGg3wyfGpXyZ2HQGOk2MqMdMv6amJlqJ9sqFaxILFHyk8eWVP_ExFU0kCk1H9aMiBUTSKjva2R16jXzYWnYxY7IZCWJeiXDnnODcA-KqROOBsfkKmga-mQ/s320/logo.png" 
                alt="Logo" 
                className="h-12 w-auto mb-6"
                referrerPolicy="no-referrer"
              />
              <p className="text-gray-400 max-w-sm">
                Buffet de churrasco premium para casamentos, aniversários e eventos corporativos em Rolim de Moura e região.
              </p>
            </div>
            <div className="hidden md:block">
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Links Rápidos</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><button onClick={() => scrollTo('hero')} className="hover:text-secondary transition-colors">Início</button></li>
                <li><button onClick={() => scrollTo('servicos')} className="hover:text-secondary transition-colors">Serviços</button></li>
                <li><button onClick={() => scrollTo('sobre')} className="hover:text-secondary transition-colors">Sobre Nós</button></li>
                <li><button onClick={() => setIsMenuOpen(true)} className="hover:text-secondary transition-colors">Cardápio Digital</button></li>
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Contato</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-center gap-2 justify-center md:justify-start"><MapPin className="w-4 h-4 text-secondary" /> Rolim de Moura - RO</li>
                <li className="flex items-center gap-2 justify-center md:justify-start"><MessageCircle className="w-4 h-4 text-secondary" /> +55 (69) 98500-1030</li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <a href="https://www.instagram.com/churrascobuffetbrasil" target="_blank" className="flex items-center gap-2 hover:text-secondary transition-colors">
                    <Instagram className="w-4 h-4 text-secondary" /> @churrascobuffetbrasil
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 text-center">
            <p>© Copyright 2026 - Churrasco Buffet Brasil</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Digital Menu Popup */}
      <MenuPopup isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/5569985001030" 
        target="_blank"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>
    </div>
  );
}
