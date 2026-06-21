import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

// ✅ imports de CSS obrigatórios
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import gym from "../img/devgym.png";
import barb from "../img/devbarb.png";
import nail from "../img/devnail.png";

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    { id: "1",
      imagem: gym,
      alt: "Projeto de site para academia",
      button: "Ver Projeto",
      link:"https://john-balbino.github.io/Site-Academia/" 
    },

    { id: "2",
      imagem: barb, 
      alt: "Projeto de site para barbearia",
      button: "Ver Projeto",
      link:"https://john-balbino.github.io/Barbearia/"
    },

    { id: "3",
      imagem: nail,
      alt: "Projeto de site para salão de beleza",
      button: "Ver Projeto",
      link:"https://john-balbino.github.io/Manicure/"
    },
  ];

  return (
    <section className="">
      <h2 className="text-center text-2xl">Projetos</h2>
      <p className="text-center font-[Roboto] font-extralight p-2">
        Projetos para Inspiração...
      </p>

      <Swiper
        // ✅ todos os módulos usados registrados aqui
        modules={[EffectCoverflow, Navigation, Pagination]}
        effect="coverflow"
        // ✅ essencial para o efeito 3D ficar visível
        centeredSlides={true}
        slidesPerView={1.8}
        // ✅ configuração do efeito
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className=" w-full h-50 md:h-120  md:flex md:items-center md:justify-center md:mt-10"
        pagination={{ clickable: true }}
        
        speed={600}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.imagem}
              alt={slide.alt}
              className="  w-full h-auto md:w-200 md:h-100  object-cover rounded-lg overflow-hidden 
               transtion shadow-[0px_10px_20px_0px] shadow-blue-400/50 duration-500 ease-in-out"
              style={{
                filter: activeIndex === i ? "grayscale(0%)" : "grayscale(100%)",
                
                transition: "filter 0.6s ease",
              }}
            />
            
            <a href={slide.link} target="_blank" rel="noopener noreferrer">
              <button className=" fixed bottom-7 left-1/2 transform -translate-x-1/2  text-black 
               py-2 px-4 rounded mt-5 hover:translate-y-2 transition duration-300 z-10 bg-white shadow-[0px_10px_15px_0px] shadow-blue-400">
              {slide.button}
              </button>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
