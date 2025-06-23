
import { Search, FileText, Trophy, Car } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Simulação",
      description: "Você escolhe o bem e o plano ideal com nossa ajuda personalizada."
    },
    {
      icon: FileText,
      title: "Contratação",
      description: "Adesão ao grupo de forma rápida e sem burocracia desnecessária."
    },
    {
      icon: Trophy,
      title: "Contemplação",
      description: "Seja contemplado por sorteio ou lance e receba sua carta de crédito."
    },
    {
      icon: Car,
      title: "Realização",
      description: "Use sua carta de crédito para comprar seu bem com poder de negociação à vista."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Conquistar seu bem é simples
          </h2>
          <p className="font-body text-lg text-gray-600">
            Veja como é fácil realizar seu sonho em apenas 4 passos
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-300">
                      <div className="absolute right-0 top-0 w-2 h-2 bg-gray-300 rounded-full transform translate-x-1 -translate-y-0.5"></div>
                    </div>
                  )}
                </div>
                
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="font-body text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
