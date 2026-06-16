"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const services = [
  {
    title: "Indoor Video",
    heading: (
      <>
        Indoor <br /> Video
      </>
    ),
    image: "https://videocms.digitalconnection.ae/wp-content/uploads/2024/04/indoor.png",
    text: "Lights, camera, Digital Connection... Action! With high-quality equipment and a dedicated team, we create indoor videos for any format. Our passion for perfection goes beyond filming; in post-production, we take care of every detail of color, image, and sound. We guarantee a flawless final result, ready to capture your audience's attention.",
  },
  {
    title: "Outdoor Video",
    heading: (
      <>
        Outdoor <br /> Video
      </>
    ),
    image: "https://videocms.digitalconnection.ae/wp-content/uploads/2024/04/outdoor.png",
    text: "With Digital Connection, capture the essence of your business outdoors! We use top-notch equipment to film in any setting, always seeking the perfect angle. Our experience and professionalism ensure a captivating narrative. After filming, our team takes care of editing and post-production, ensuring a high-quality final video, ready to impress.",
  },
  {
    title: "PHOTOGRAPHY",
    heading: "PHOTOGRAPHY",
    image: "https://videocms.digitalconnection.ae/wp-content/uploads/2024/04/fotographia.png",
    text: "Our photographer turns the mood board into visual magic. Whether for packaging, fashion, food, beverages, real estate, or events, Digital Connection combines expertise, professionalism, and passion in every session. We guarantee stunning photos that highlight the best of each project",
  },
  {
    title: "MOTION DESIGN",
    heading: (
      <>
        MOTION <br /> DESIGN
      </>
    ),
    image: "https://videocms.digitalconnection.ae/wp-content/uploads/2024/04/motion.png",
    text: "When we combine design and cinema, Motion Design emerges. The Digital Connection team offers high-quality Motion Design that incorporates the art of storytelling in all productions. It's the ideal solution to explain ideas clearly, visually appealing, and extremely dynamic.",
  },
  {
    title: "AERIAL IMAGES",
    heading: (
      <>
        AERIAL <br /> IMAGES
      </>
    ),
    image: "https://videocms.digitalconnection.ae/wp-content/uploads/2024/04/drone.png",
    text: "At Digital Connection, we believe the sky is the limit when it comes to good work. That's why we offer a drone operated by an experienced pilot for any aerial recording you desire. Every flight and every image is special to us, and we prepare everything with the best equipment to ensure incredible captures, regardless of altitude.",
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
          Let’s Connect <i className="fas fa-arrow-right"></i>
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
            <h4>SERVICES</h4>
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