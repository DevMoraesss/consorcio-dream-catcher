
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const LocationContact = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de agendar uma visita ou tirar algumas dúvidas sobre consórcio.";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Venha tomar um café com a gente
          </h2>
          <p className="font-body text-lg text-gray-600">
            Estamos aqui para ajudar você a realizar seus sonhos
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <div className="bg-gray-100 rounded-3xl p-8 flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                Nossa Localização
              </h3>
              <p className="font-body text-gray-600">
                Mapa interativo será carregado aqui
              </p>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary-50 to-gray-50 p-8 rounded-3xl">
              <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-gray-900 mb-1">Endereço</h4>
                    <p className="font-body text-gray-600">
                      Rua das Flores, 123 - Centro<br />
                      São Paulo - SP, 01234-567
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-gray-900 mb-1">Telefone</h4>
                    <p className="font-body text-gray-600">(11) 9999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-gray-900 mb-1">E-mail</h4>
                    <p className="font-body text-gray-600">contato@consorciopremium.com.br</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                <MessageCircle className="w-6 h-6" />
                Falar no WhatsApp
              </Button>
            </div>
            
            <div className="flex justify-center gap-6">
              <a 
                href="#" 
                className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center hover:bg-primary text-primary hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <span className="text-xl">📷</span>
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center hover:bg-primary text-primary hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <span className="text-xl">📘</span>
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center hover:bg-primary text-primary hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <span className="text-xl">💼</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationContact;
