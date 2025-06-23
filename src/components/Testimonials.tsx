
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      product: "Consórcio de Carro - Onix 2024",
      photo: "MS",
      testimonial: "O atendimento foi excelente e consegui meu carro muito antes do que imaginava! Recomendo a todos.",
      rating: 5
    },
    {
      name: "João Santos",
      product: "Consórcio Imobiliário - Apartamento",
      photo: "JS",
      testimonial: "Realizei o sonho da casa própria sem comprometer meu orçamento. Processo muito transparente!",
      rating: 5
    },
    {
      name: "Ana Costa",
      product: "Consórcio de Moto - Honda CB 600",
      photo: "AC",
      testimonial: "Fantástico! Fui contemplada no primeiro ano e já estou com minha moto nova. Muito satisfeita!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Veja quem já realizou seu sonho com a gente
          </h2>
          <p className="font-body text-lg text-gray-600">
            Histórias reais de pessoas que conquistaram seus objetivos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-primary-50 to-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.photo}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="font-body text-sm text-gray-600">
                    {testimonial.product}
                  </p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="font-body text-gray-700 leading-relaxed italic">
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
