
import { Car, Home, CreditCard, Shield } from "lucide-react";

const WhatIsConsortium = () => {
  const benefits = [
    {
      icon: CreditCard,
      title: "Sem Juros",
      description: "Diferente do financiamento, no consórcio você não paga juros abusivos"
    },
    {
      icon: Car,
      title: "Poder de Compra à Vista",
      description: "Com sua carta de crédito, você tem o poder de negociação de quem paga à vista"
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Regulamentado pelo Banco Central, oferece total segurança para seu investimento"
    },
    {
      icon: Home,
      title: "Flexibilidade",
      description: "Você pode usar sua carta para carros, motos, imóveis e diversos outros bens"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            O que é Consórcio?
          </h2>
          <p className="font-body text-lg text-gray-600 leading-relaxed">
            Consórcio é uma forma de compra planejada e colaborativa, onde um grupo de pessoas se une para adquirir bens de forma mais econômica. É a alternativa inteligente ao financiamento tradicional, sem juros e com total flexibilidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-100 transition-colors duration-300">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="font-body text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsConsortium;
