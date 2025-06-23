
const Partners = () => {
  const partners = [
    { name: "Administradora A", logo: "Logo A" },
    { name: "Administradora B", logo: "Logo B" },
    { name: "Administradora C", logo: "Logo C" },
    { name: "Administradora D", logo: "Logo D" },
    { name: "Administradora E", logo: "Logo E" },
    { name: "Administradora F", logo: "Logo F" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Trabalhamos com as Maiores e Mais Confiáveis Administradoras do Brasil
          </h2>
          <p className="font-body text-lg text-gray-600">
            Sua segurança é nossa prioridade. Trabalhamos apenas com empresas regulamentadas pelo Banco Central.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group"
            >
              <div className="w-24 h-16 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                <span className="font-body text-sm text-gray-500 text-center">
                  {partner.logo}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="font-body text-gray-600">
            E muito mais... Entre em contato para conhecer todas as nossas opções!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
