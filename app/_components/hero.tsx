"use client"
import { ArrowRightCircle, Import } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, EffectCards } from 'swiper/modules';
import SwiperCore from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cards'
import axios from "axios";
import { useEffect, useState } from "react";

SwiperCore.use([EffectFade, Autoplay]);
interface CardsProps {

  button_title: string,
  slogan_title: string,
  company_name: string,
  small_title: string

}
export default function HeroAlarm() {
  const [images, setImages] = useState([])
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    response()
  }, [])
  
  const response = async () => {
    setLoading(true)
    await axios.get("/api/public/hero-section-elements").then(({ data }) => {
      setImages(data.hero_section_images)
      setCards(data.hero_section_cards)
      setLoading(false)
    })
  }
  if (loading) {
    return (<div aria-label="Loading..." role="status" className="flex items-center h-screen space-x-2">
    <svg className="h-20 w-20 animate-spin stroke-gray-500" viewBox="0 0 256 256">
        <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
        <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="24"></line>
        <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
        </line>
        <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="24"></line>
        <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
        </line>
        <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="24"></line>
        <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
        <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
        </line>
    </svg>
    <span className="text-4xl font-medium text-gray-500">Loading...</span>
</div>)
  }




  return (
    // <!-- Hero Section Start ../images/other/bg-lines-1.svg -->
    <section id="home" className="bg-cover border-b bg-no-repeat bg-[url('/bg-lines-1.svg')]">
      <div className="grid lg:grid-cols-1 xl:grid-cols-5 grid-cols-1 items-center relative">
        {/* <!-- Swiper for Text --> */}
        <div className="relative xl:col-span-2 p-6 xl:p-0 xl:-me-24 xl:mt-0 -mt-24 z-10 order-2 xl:order-none">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            modules={[EffectFade, Autoplay]}
            effect="flip"
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
          >
              <div className="max-w-xl mx-auto border xl:ms-auto xl:me-0 rounded-xl bg-default-100 dark:bg-default-50">
            {cards.map((card: CardsProps, index) => <SwiperSlide key={index}>
                <div className=" px-16 shadow py-2  rounded-r-lg bg-white">
                  <div className="flex-col flex items-start justify-end xl:h-full">
                    <span className="text-base font-medium uppercase tracking-wider text-default-800">{card.small_title}</span>
                    <h2 className="md:text-4xl/snug text-3xl font-semibold  text-yellow-700 mt-6">{card.company_name}</h2>
                    <h2 className="md:text-xl/snug text-3xl font-semibold text-default-950 mt-6">{card.slogan_title}</h2>
                    <p className="md:w-3/4 text-base text-default-800 font-medium mt-5 mb-7"></p>
                    <a href="/contactez-nous" className="inline-flex items-center font-bold justify-center gap-2 border border-default-200 text-default-950 py-2 px-6 rounded-md hover:bg-primary hover:text-white transition-all duration-500">
                      {card.button_title}
                      <ArrowRightCircle className="h-6 w-6" />
                    </a>
                  </div>
                </div>
            </SwiperSlide>)}
              </div>
          </Swiper>
          {/* <!-- Swiper End for Text --> */}
        </div>
        {/* <!-- col-span-2 End--> */}
        <div className="xl:col-span-3 order-1 xl:order-none">
          {/* <!-- Swiper for Images --> */}
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            modules={[EffectFade, Autoplay]}
            effect="fade"
            autoplay={{ delay: 3000 }}
          >
            {images.map((image: { url: string }, index) => (<SwiperSlide key={index}>
              <div className="relative">
                <img src={image.url} className="  h-96 object-cover w-full" />
                <div className="absolute inset-0 bg-black/25"></div>
              </div>
            </SwiperSlide>))}
          </Swiper>
          {/* <!-- Swiper End for Images --> */}
        </div>
        {/* <!-- col-span-3 End--> */}
      </div>
      {/* <!-- grid End--> */}
    </section>
  );
}

