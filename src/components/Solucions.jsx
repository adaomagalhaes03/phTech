// src/components/SolutionsPortugueseSection.jsx
//import React from 'react';

const SolutionsPortugueseSection = () => {
  return (
    <section
      id="solutions-portuguese"
      className="pt-12 pb-12  ptMobile-6 pbMobile-6 bg-gray-100 flex flex-col items-center"
      style={{
        backgroundImage: 'url(/path/to/your/background-image.jpg)', // Substitua pelo caminho correto da imagem
        backgroundSize: 'cover',
        backgroundPosition: 'top left',
      }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <div className=" p-6 rounded-md">
          <div className="mt-4">
              <h3 className="text-3xl font-semibold text-blue-400">
                Nossas Soluções
              </h3>
            </div>
            <div className="relative">
              <img
                src="https://newfold.scene7.com/is/content/NewfoldDigital/dots?ts=1685650426473&dpr=off"
                alt=""
                className="w-full h-2"
                loading="lazy"
              />
            </div>
            
          </div>
        </div>

        <div className="grid m-10 grid-cols-1 sm:grid-cols-4 gap-4">
          {/* Domínios */}
          <div className="bg-blue-400 p-6 text-center rounded-md">
            <img
              src="https://newfold.scene7.com/is/content/NewfoldDigital/icon-domains?ts=1685529176178&dpr=off"
              alt="Domínios"
              className="mx-auto mb-10"
              loading="lazy"
            />
            <p className="text-white">Domínios</p>
          </div>

          {/* Construção de Sites */}
          <div className="bg-blue-400 p-6 text-center rounded-md">
            <img
              src="https://newfold.scene7.com/is/content/NewfoldDigital/icon-websites?ts=1685529175419&dpr=off"
              alt="Construa o seu próprio site"
              className="mx-auto mb-10"
              loading="lazy"
            />
            <p className="text-white">
              Construa o seu
              <br />
              próprio site
            </p>
          </div>

          {/* Hospedagem */}
          <div className="bg-blue-400 p-6 text-center rounded-md">
            <img
              src="https://newfold.scene7.com/is/content/NewfoldDigital/icon-hosting?ts=1685529177593&dpr=off"
              alt="Hospedagem"
              className="mx-auto mb-10"
              loading="lazy"
            />
            <p className="text-white">Hospedagem</p>
          </div>

          {/* Segurança */}
          <div className="bg-blue-400  p-6 text-center rounded-md">
            <img
              src="https://newfold.scene7.com/is/content/NewfoldDigital/icon-ssl?ts=1685529172768&dpr=off"
              alt="Segurança"
              className="mx-auto mb-10"
              loading="lazy"
            />
            <p className="text-white">
              Segurança
            </p>
          </div>

          {/* Marketing Online */}
          <div className="bg-blue-400 p-6 text-center rounded-md">
            <img
              src="https://newfold.scene7.com/is/content/NewfoldDigital/icon-onlinemarketing?ts=1685529173512&dpr=off"
              alt="Online Marketing"
              className="mx-auto mb-16"
              loading="lazy"
            />
            <p className="text-white">
              Online
              <br />
              Marketing
            </p>
          </div>

          {/* Design Profissional */}
          <div className="bg-blue-400 p-6 text-center rounded-md">
            <img
              src="https://newfold.scene7.com/is/content/NewfoldDigital/icon-professionalwebsites?ts=1685529176897&dpr=off"
              alt="Design Profissional"
              className="mx-auto mb-10"
              loading="lazy"
            />
            <p className="text-white">
              Profissional
              <br />
              Design do site
            </p>
          </div>

          {/* Serviços de SEO */}
          <div className="bg-blue-400 p-6 text-center rounded-md">
            <img
              src="https://newfold.scene7.com/is/content/NewfoldDigital/icon-seo?ts=1685529172035&dpr=off"
              alt="Serviços de SEO"
              className="mx-auto mb-10"
              loading="lazy"
            />
            <p className="text-white">
              Serviços
              <br />
              de SEO
            </p>
          </div>

          {/* Suporte ao Cliente */}
          <div className="bg-blue-400 p-6 text-center rounded-md">
            <img
              src="https://newfold.scene7.com/is/content/NewfoldDigital/icon-support?ts=1685529174699&dpr=off"
              alt="Suporte ao Cliente"
              className="mx-auto mb-10"
              loading="lazy"
            />
            <p className="text-white">
              Suporte
              <br />
              ao cliente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsPortugueseSection;
