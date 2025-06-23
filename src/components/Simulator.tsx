
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Car, Home, MessageCircle } from "lucide-react";

const Simulator = () => {
  const [selectedType, setSelectedType] = useState<string>("");
  const [value, setValue] = useState<number>(80000);

  const handleWhatsAppSimulation = () => {
    const goodType = selectedType === "car" ? "carro" : selectedType === "house" ? "imóvel" : selectedType === "motorcycle" ? "moto" : "bem";
    const message = `Olá! Gostaria de fazer uma simulação de consórcio para ${goodType} no valor de R$ ${value.toLocaleString('pt-BR')}. Podem me enviar as melhores opções de planos?`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const options = [
    { id: "car", icon: Car, label: "Carro", description: "Carros nacionais e importados" },
    { id: "house", icon: Home, label: "Imóvel", description: "Casas, apartamentos e terrenos" },
    { id: "motorcycle", icon: Car, label: "Moto", description: "Motos de todas as categorias" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Faça sua Simulação Gratuita
            </h2>
            <p className="font-body text-lg text-gray-600">
              Descubra as melhores condições para realizar seu sonho
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-primary-50 to-gray-50 p-8 md:p-12 rounded-3xl shadow-sm">
            <div className="space-y-8">
              {/* Step 1: What do you want to achieve? */}
              <div>
                <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-6 text-center">
                  O que você deseja conquistar?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedType(option.id)}
                      className={`p-6 rounded-2xl border-2 transition-all duration-300 text-center ${
                        selectedType === option.id
                          ? "border-primary bg-primary text-white shadow-lg"
                          : "border-gray-200 bg-white hover:border-primary-300 hover:shadow-md"
                      }`}
                    >
                      <option.icon className={`w-12 h-12 mx-auto mb-4 ${
                        selectedType === option.id ? "text-white" : "text-primary"
                      }`} />
                      <h4 className={`font-heading text-lg font-semibold mb-2 ${
                        selectedType === option.id ? "text-white" : "text-gray-900"
                      }`}>
                        {option.label}
                      </h4>
                      <p className={`font-body text-sm ${
                        selectedType === option.id ? "text-primary-100" : "text-gray-600"
                      }`}>
                        {option.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Step 2: Value */}
              {selectedType && (
                <div className="animate-slide-up">
                  <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-6 text-center">
                    Qual o valor aproximado do bem?
                  </h3>
                  <div className="bg-white p-6 rounded-2xl">
                    <div className="text-center mb-6">
                      <span className="font-heading text-3xl font-bold text-primary">
                        R$ {value.toLocaleString('pt-BR')}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="20000"
                      max="500000"
                      step="5000"
                      value={value}
                      onChange={(e) => setValue(Number(e.target.value))}
                      className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>R$ 20.000</span>
                      <span>R$ 500.000</span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* CTA Button */}
              {selectedType && (
                <div className="text-center animate-slide-up">
                  <div className="bg-white p-6 rounded-2xl mb-6">
                    <p className="font-body text-lg text-gray-700 mb-4">
                      Ótima escolha! Nossos especialistas vão te enviar as melhores opções de planos para um bem de{" "}
                      <strong className="text-primary">R$ {value.toLocaleString('pt-BR')}</strong> diretamente no seu WhatsApp.
                    </p>
                  </div>
                  <Button 
                    onClick={handleWhatsAppSimulation}
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Receber Simulação no WhatsApp
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simulator;
