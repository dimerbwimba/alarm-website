import { ArrowRightCircle, Import } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay , EffectCards } from 'swiper/modules';
import SwiperCore from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cards'

SwiperCore.use([EffectFade, Autoplay]);

const HeroAlarm = () => {
  return (
    // <!-- Hero Section Start ../images/other/bg-lines-1.svg -->
    <section id="home" className="bg-cover bg-no-repeat bg-[url('/bg-lines-1.svg')]">
      <div className="grid xl:grid-cols-5 grid-cols-1 items-center relative">
              {/* <!-- Swiper for Text --> */}
        <div className="relative xl:col-span-2 p-6 xl:p-0 xl:-me-24 xl:mt-0 -mt-24 z-10 order-2 xl:order-none">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                modules={[EffectFade, Autoplay]}
                effect="fade"
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                    <div className="max-w-xl mx-auto xl:ms-auto xl:me-0 rounded-xl bg-default-100 dark:bg-default-50">
                        <div className="p-6">
                  <div className="flex-col flex items-start justify-end xl:h-full">
                    <span className="text-base font-medium uppercase tracking-wider text-default-800">Mission</span>
                        <h2 className="md:text-4xl/snug text-3xl font-semibold text-default-950 mt-6">ALARM <span className="text-yellow-700">RDC</span>.</h2>
                        <h2 className="md:text-xl/snug text-3xl font-semibold text-default-950 mt-6">"L'Afrique <span className="text-yellow-700">sans conflits tribaux </span> et religieux violents." </h2>
                        <p className="md:w-3/4 text-base text-default-800 font-medium mt-5 mb-7"></p>
                        <a href="#" className="inline-flex items-center font-bold justify-center gap-2 border border-default-200 text-default-950 py-2 px-6 rounded-md hover:bg-primary hover:text-white transition-all duration-500">
                            Visitez Nous
                            <ArrowRightCircle className="h-6 w-6" />
                        </a>
                  </div>
                  </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="max-w-xl mx-auto xl:ms-auto xl:me-0 rounded-xl bg-default-100 dark:bg-default-50">
                        <div className="p-6">
                  <div className="flex-col flex items-start justify-end xl:h-full">
                  <div className="swiper-slide">
                        <div className="flex-col flex items-start justify-end xl:h-full">
                            <span className="text-base font-medium uppercase tracking-wider text-default-800">Bienvenu sure</span>
                            <h2 className="md:text-4xl/snug text-3xl font-semibold text-default-950 mt-6">ALARM RDC.</h2>
                            <h2 className="md:text-xl/snug text-3xl font-semibold text-default-950 mt-6">" Empowering <span className="text-yellow-700">African Leaders</span> Reconciling <span className="text-yellow-700">African Communities "</span></h2>
                            <p className="md:w-3/4 text-base text-default-800 font-medium mt-5 mb-7"></p>
                            <a href="#" className="inline-flex items-center font-bold justify-center gap-2 border border-default-200 text-default-950 py-2 px-6 rounded-md hover:bg-primary hover:text-white transition-all duration-500">
                                Contactez Nous
                                <ArrowRightCircle className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                  </div>
                  </div>
                  </div>
                </SwiperSlide>

              </Swiper>
              {/* <!-- Swiper End for Text --> */}
            </div>
          
        {/* <!-- col-span-2 End--> */}

        <div className="xl:col-span-3 order-1 xl:order-none">
          {/* <!-- Swiper for Images --> */}
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            modules={[EffectCards, Autoplay]}
            effect="cards"
            autoplay={{ delay: 3000 }}
          >
            <SwiperSlide>
              <div className="relative">
                <img src="https://i.ibb.co/1qfg6zJ/DSC-0834-compressed-1.jpg" className="h-full w-full" />
                <div className="absolute inset-0 bg-black/25"></div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative">
                <img src="https://i.ibb.co/cknvsfg/Photo-6-group-work-compressed.jpg" className="h-full w-full" />
                <div className="absolute inset-0 bg-black/25"></div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative">
                <img src="https://i.ibb.co/7V5DN97/DSC-0789-compressed.jpg" className="h-full w-full" />
                <div className="absolute inset-0 bg-black/25"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img src="https://i.ibb.co/Ld3YN09/DSC6247-compressed.jpg" className="h-full w-full" />
                <div className="absolute inset-0 bg-black/25"></div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* <!-- Swiper End for Images --> */}
        </div>
        {/* <!-- col-span-3 End--> */}
      </div>
      {/* <!-- grid End--> */}
    </section>
  );
}

export default HeroAlarm;
