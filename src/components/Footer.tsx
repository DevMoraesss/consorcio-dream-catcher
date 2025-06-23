
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Company Info */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              Consórcio Premium
            </h3>
            <p className="font-body text-gray-400 mb-4 leading-relaxed">
              Há mais de 10 anos ajudando pessoas a realizarem seus sonhos com segurança e transparência.
            </p>
            <div className="text-sm text-gray-400">
              <p>CNPJ: 12.345.678/0001-90</p>
              <p>Consórcio Premium Ltda.</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">
              Links Rápidos
            </h4>
            <nav className="space-y-2">
              <a href="#inicio" className="font-body text-gray-400 hover:text-white transition-colors duration-300 block">
                Início
              </a>
              <a href="#simulador" className="font-body text-gray-400 hover:text-white transition-colors duration-300 block">
                Simulador
              </a>
              <a href="#depoimentos" className="font-body text-gray-400 hover:text-white transition-colors duration-300 block">
                Depoimentos
              </a>
              <a href="#contato" className="font-body text-gray-400 hover:text-white transition-colors duration-300 block">
                Contato
              </a>
            </nav>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">
              Legal
            </h4>
            <nav className="space-y-2">
              <a href="#" className="font-body text-gray-400 hover:text-white transition-colors duration-300 block">
                Política de Privacidade
              </a>
              <a href="#" className="font-body text-gray-400 hover:text-white transition-colors duration-300 block">
                Termos de Uso
              </a>
              <a href="#" className="font-body text-gray-400 hover:text-white transition-colors duration-300 block">
                Regulamentação BACEN
              </a>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-body text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Consórcio Premium. Todos os direitos reservados.
            </p>
            <p className="font-body text-gray-400 text-sm">
              Desenvolvido com ❤️ para realizar sonhos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
