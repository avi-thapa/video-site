"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const services = [
  {
    title: "Indoor Video",
    heading: (
      <>
        Vídeo <br /> indoor
      </>
    ),
    image: "https://videocms.digitalconnection.ae/wp-content/uploads/2024/04/indoor.png",
    text: "Luzes, câmaras, Digital Connection... Ação! Com equipamentos de alta qualidade e uma equipa dedicada, criamos vídeos indoor para qualquer formato. A nossa paixão pela perfeição vai além das filmagens; na pós-produção, cuidamos de cada detalhe de cor, imagem e som. Garantimos um resultado final impecável, pronto para capturar a atenção do seu público.",
  },
  {
    title: "Outdoor Video",
    heading: (
      <>
        VÍDEOS  <br /> OUTDOOR
      </>
    ),
    image: "https://videocms.digitalconnection.ae/wp-content/uploads/2024/04/outdoor.png",
    text: "Com a Digital Connection, capte a essência do seu negócio ao ar livre! Usamos equipamentos de topo para filmar em qualquer cenário, procurando sempre o ângulo perfeito. A nossa experiência e profissionalismo garantem uma narrativa envolvente. Depois das filmagens, a nossa equipa cuida da edição e pós-produção, assegurando um vídeo final de alta qualidade, pronto para impressionar.",
  },
  {
    title: "PHOTOGRAPHY",
    heading: "FOTOGRAFIA",
    image: "https://videocms.digitalconnection.ae/wp-content/uploads/2024/04/fotographia.png",
    text: "O nosso fotógrafo transforma o moodboard em magia visual. Seja para packaging, moda, comida, bebidas, imobiliário ou eventos, a Digital Connection combina expertise, profissionalismo e paixão em todas as sessões. Garantimos fotos impressionantes que destacam o melhor de cada projeto.",
  },
  {
    title: "MOTION DESIGN",
    heading: (
      <>
        MOTION <br /> DESIGN
      </>
    ),
    image: "https://videocms.digitalconnection.ae/wp-content/uploads/2024/04/motion.png",
    text: "Quando unimos design e cinema, surge o Motion Design. A equipa Digital Connection oferece um Motion Design de alta qualidade que incorpora a arte do storytelling em todas as produções. É a solução ideal para explicar ideias de maneira clara, visualmente atraente e extremamente dinâmica.",
  },
  {
    title: "AERIAL IMAGES",
    heading: (
      <>
        IMAGENS   <br /> AÉREAS
      </>
    ),
    image: "https://videocms.digitalconnection.ae/wp-content/uploads/2024/04/drone.png",
    text: "Na Digital Connection, quando se fala em bom trabalho, acreditamos que o céu é o limite. Por isso, oferecemos um drone operado por um piloto experiente para qualquer gravação aérea desejada. Cada voo e cada imagem são especiais para nós, e preparamos tudo com os melhores equipamentos para garantir capturas incríveis, independente da altitude.",
  },
];

function ServiceItem({ service }) {
  return (
    <div
      className="item"
      style={{
        background: `url('${service.image}')`,
        backgroundSize: "cover",
      }}
    >
      <div className="sec_btn">
        <a href="#">{service.title}</a>
      </div>

      <div className="abs-content">
        <h3>{service.heading}</h3>
        <p>{service.text}</p>

        <a href="#contact-form" className="main_btn_new outline">
          Conecte-se <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <section className="sec_services d-none d-md-block">
        <div className="container-fluid">
          <div className="sec_title mb-5">
            <h4>SERVIÇOS</h4>
          </div>

          <div className="service-wrapper d-flex">
            {services.map((service) => (
              <ServiceItem key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="mobile-service sec_services d-block d-md-none">
        <div className="container-fluid">
          <Swiper className="mySwipermobile" slidesPerView={1} spaceBetween={20}>
            {services.map((service) => (
              <SwiperSlide key={service.title}>
                <ServiceItem service={service} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}