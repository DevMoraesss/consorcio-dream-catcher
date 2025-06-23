
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de fazer uma simulação de consórcio e conhecer os melhores planos disponíveis.";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Realize seu sonho do{" "}
            <span className="text-primary bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
              carro novo
            </span>{" "}
            com parcelas que cabem no seu bolso
          </h1>
          
          <p className="font-body text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Planeje seu futuro sem juros abusivos. Fale com um especialista e encontre o plano de consórcio ideal para você.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={handleWhatsAppClick}
              size="lg" 
              className="bg-primary hover:bg-primary-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 min-w-[280px]"
            >
              <MessageCircle className="w-6 h-6" />
              Simular meu Consórcio via WhatsApp
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Sem juros abusivos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Poder de compra à vista</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Flexibilidade total</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>100% seguro</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Image Placeholder */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10">
        <div className="w-full h-full bg-gradient-to-tl from-primary-200 to-transparent rounded-tl-full"></div>
      </div>
    </section>
  );
};

export default Hero;
