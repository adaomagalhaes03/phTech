// src/components/HomePortugueseSection.jsx
//import React from 'react';

const HomePortugueseSection = () => {
  return (
    <section
      id="home-portuguese"
      data-id="section_copy"
      className="pt-200 h-500px  h-full pb-200 ptMobile-50 pbMobile-50 v-centered bgp-d-tc bgp-m-cc bg-custom bgImage--js active bgImage--js__visible"
    >
      <div className="container">
        <div className="responsivecolumns">
          <div
            className="row responsive-columns__row responsive-columns__row--no-gutter responsive-columns__row--left responsive-columns__row--desktop-left reg-final-price"
            style={{ backgroundColor: '' }}
          >
            <div
              style={{ minWidth: '' }}
              className="responsive-columns__column responsive-columns__column-- col-sm-6"
            >
              <div className="flex flex-col justify-center w-full h-full mx-auto text-white font-bold">
                 <p className="text-6xl m-20">Nossa Empresa</p> <br />

                 <p className=" m-10 text-xl">A Newfold Digital é uma provedora líder de soluções de presença na web, <br /> atendendo a milhões de pequenas e médias empresas em todo o mundo.
                 </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePortugueseSection;
