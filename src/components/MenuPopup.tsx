import { motion, AnimatePresence } from "motion/react";
import { X, Utensils, Star, Flame, Coffee, Info, CheckCircle2 } from "lucide-react";

interface MenuPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuData = {
  principais: [
    {
      title: "OPÇÃO 1",
      carnes: "fraldinha, alcatra, cupim, linguiça",
      acompanhamentos: "leitão recheado, arroz branco, feijão tropeiro, talharim alho e óleo, salpicão, salada de folhas e frutas, molho tártaro",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "OPÇÃO 2",
      carnes: "fraldinha, alcatra, contra-filé, linguiça",
      acompanhamentos: "coxa e sobrecoxa de frango assado com batata rústica, arroz branco, lasanha à bolonhesa, feijão tropeiro, maionese, salada de folhas e frutas, molho tártaro",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "OPÇÃO 3",
      carnes: "fraldinha, maminha, alcatra, linguiça",
      acompanhamentos: "arroz branco, rondelli de presunto e queijo ou frango com requeijão, filé ao molho madeira, salpicão, salada de folhas e frutas, legumes sauté",
      image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=800"
    }
  ],
  opcionais: [
    { name: "FILÉ À PARMEGIANA", items: "arroz branco, purê de batata, batata frita, salada de folhas" },
    { name: "FEIJOADA", items: "arroz branco, farofa de cenoura, pururuca, salada de couve e repolho, laranja fatiada" },
    { name: "VATAPÁ", items: "opção: frango ou camarão. Acompanha arroz branco e salada" },
    { name: "ARROZ DE FRALDINHA", items: "batata sauté, salada de folhas e conservas" },
    { name: "BOBÓ", items: "opção: frango ou camarão. Acompanha arroz branco e salada" },
    { name: "FILÉ DE FRANGO AO MARACUJÁ", items: "arroz branco, rondelli de presunto e queijo, salada de folhas e frutas" },
    { name: "MORANGA RECHEADA", items: "carne seca ou camarão, acompanha queijo coalho" },
    { name: "STROGONOFF", items: "carne ou frango, arroz branco, purê, batata palha" }
  ],
  sobremesas: [
    { name: "TORTA ALEMÃ", items: "ganache de chocolate, geleia de frutas vermelhas, biscoito champagne" },
    { name: "BOMBOM DE TRAVESSA", items: "ganache de chocolate ao leite, creme francês, uvas verdes" },
    { name: "PAVÊ DE DOCE DE LEITE", items: "creme francês, doce de leite, biscoito, chantilly" },
    { name: "CHEESECAKE", items: "Geleia de morango, frutas vermelhas, maracujá ou chocolate" },
    { name: "BANANA ASSADA", items: "banana na churrasqueira, doce de leite, paçoca ou castanha" },
    { name: "BANOFFE", items: "banana em rodelas, chantilly, biscoito, doce de leite" }
  ]
};

export default function MenuPopup({ isOpen, onClose }: MenuPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl"
          >
            {/* Header Sticky */}
            <div className="sticky top-0 z-10 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                  <Utensils className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-white leading-none">Cardápio Digital</h2>
                  <p className="text-xs text-secondary font-bold uppercase tracking-widest mt-1">Churrasco Buffet Brasil</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 sm:p-10 space-y-16">
              {/* Principais Section */}
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                  <h3 className="text-xl font-display font-bold flex items-center gap-2">
                    <Flame className="w-5 h-5 text-primary" />
                    CARDÁPIOS PRINCIPAIS
                  </h3>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                </div>
                
                <div className="grid lg:grid-cols-3 gap-6">
                  {menuData.principais.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ y: -5 }}
                      className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10"
                    >
                      <div className="h-40 relative overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-primary/30">
                            {item.title}
                          </span>
                        </div>
                      </div>
                      <div className="p-5 space-y-4">
                        <div>
                          <p className="text-[10px] text-primary font-bold uppercase mb-1">Carnes Selecionadas</p>
                          <p className="text-sm text-gray-200 leading-relaxed">{item.carnes}</p>
                        </div>
                        <div className="pt-4 border-t border-white/5">
                          <p className="text-[10px] text-gray-500 font-bold uppercase mb-1">Acompanhamentos</p>
                          <p className="text-xs text-gray-400 leading-relaxed">{item.acompanhamentos}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Opcionais Section */}
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                  <h3 className="text-xl font-display font-bold flex items-center gap-2">
                    <Star className="w-5 h-5 text-secondary" />
                    CARDÁPIOS OPCIONAIS
                  </h3>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {menuData.opcionais.map((item, idx) => (
                    <div key={idx} className="p-4 bg-white/[0.03] rounded-xl border border-white/5 hover:border-secondary/30 transition-colors group">
                      <h4 className="text-sm font-bold text-white mb-2 group-hover:text-secondary transition-colors">{item.name}</h4>
                      <p className="text-[11px] text-gray-500 leading-relaxed">{item.items}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Sobremesas Section */}
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                  <h3 className="text-xl font-display font-bold flex items-center gap-2">
                    <Coffee className="w-5 h-5 text-secondary" />
                    SOBREMESAS
                  </h3>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {menuData.sobremesas.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-white/[0.03] rounded-xl border border-white/5">
                      <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">{item.name}</h4>
                        <p className="text-[11px] text-gray-500">{item.items}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Footer Info */}
              <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3 text-gray-400">
                  <Info className="w-5 h-5 text-secondary" />
                  <p className="text-xs">Consulte disponibilidade para datas específicas.</p>
                </div>
                <a 
                  href="https://wa.me/5569985001030" 
                  target="_blank"
                  className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-primary/90 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all animate-pulse-soft"
                >
                  Fazer Reserva Agora
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
