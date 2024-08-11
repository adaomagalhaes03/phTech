// src/components/PortfolioPortugueseSection.jsx
//import React from 'react';
import Face from '../assets/contents.png';

const PortfolioPortugueseSection = () => {
  return (
    <section
      id="portfolio-portuguese"
      className="pt-12 pb-12 ptMobile-6 overflow-x-hidden pbMobile-6 bg-white" // Ajuste conforme necessário
     
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {/* Coluna 1 */}
          <div className="w-full sm:w-5/12 px-4 mb-2">
            <div className="text-center">
              <h3 className="text-xl  font-bold text-orange-500 m-20">
                Em nosso portfólio de marcas...
              </h3>
              <p className="font-bold  m-8">
                Bluehost, CrazyDomains, HostGator, Network Solutions, Register.com, Web.com e muitos outros - ajudamos clientes de todos os tamanhos a construir uma presença digital que entrega resultados e agrega valor às empresas.
              </p>
              <p>
                Com nossa ampla oferta de produtos e suporte personalizado, temos orgulho em colaborar com nossos clientes para atender às suas necessidades de presença online.
              </p>
            </div>
          </div>

          {/* Coluna 2 (Espaço vazio) */}
          <div className="w-full sm:w-1/12 px-4 mb-4"></div>

          {/* Coluna 3 */}
          <div className="w-full sm:w-5/12 px-4 mb-4">
            <div className="flex justify-center">
              <img
                src="https://newfold.scene7.com/is/image/NewfoldDigital/content?ts=1685529187325&dpr=off&fmt=png-alpha"
                alt=""
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPortugueseSection;
