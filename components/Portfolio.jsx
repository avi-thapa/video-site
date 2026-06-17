"use client";

import { useState } from "react";
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
const sections = [
  {
    title: "Social Media",
    videos: [
      "https://www.youtube.com/embed/MeyOCTqi9fE",
      "https://www.youtube.com/embed/X8U5TEkTySo",
      "https://www.youtube.com/embed/Af9I-lmXiJM",
      "https://www.youtube.com/embed/2MatxLyeauk",
      "https://www.youtube.com/embed/_VQfa3zhHYU",
      "https://www.youtube.com/embed/2Xdy42-71MA",
    ],
  },
  {
    title: "Lifestyle e Desporto",
    videos: [
      "https://www.youtube.com/embed/8yzdIbIz4cI",
      "https://www.youtube.com/embed/Jo2hdfQhjQw",
      "https://www.youtube.com/embed/xsMBZ37jMwc",
      "https://www.youtube.com/embed/1UylN2YjwMY",
      "https://www.youtube.com/embed/tTb-Qiyg9tY",
      "https://www.youtube.com/embed/lVnQ4ERX2PE",
    ],
  },
  {
    title: "VIDEOS INSTITUCIONAIS",
    videos: [
      "https://www.youtube.com/embed/bFBM1KGpMWQ",
      "https://www.youtube.com/embed/4S5o8XBe_EQ",
      "https://www.youtube.com/embed/HduaKosUnwM",
      "https://www.youtube.com/embed/fOs1-HrAJhc",
      "https://www.youtube.com/embed/QdHuQnQcV0c",
      "https://www.youtube.com/embed/6Apyi2lithI",
      "https://www.youtube.com/embed/h6Uxtczn5sQ",
      "https://www.youtube.com/embed/csR2atu54OE",
      
      "https://www.youtube.com/embed/y1jYmF66Nn8",
    ],
  },
  {
    title: "EVENTOS",
    videos: [
      "https://www.youtube.com/embed/jKiCfsFQzWw",
      "https://www.youtube.com/embed/2hi4zHvYPbQ",
      "https://www.youtube.com/embed/9egdaIjQea4",
      "https://www.youtube.com/embed/CggvWt2uugw",
      "https://www.youtube.com/embed/SCE0RYLeN6o",
      "https://www.youtube.com/embed/lJKidxY4nII",
    ],
  },
  {
    title: "REAL ESTATE",
    videos: [
      "https://www.youtube.com/embed/7RDIi7sxn0s",
      "https://www.youtube.com/embed/XEpBfL4yabk",
      "https://www.youtube.com/embed/HES3aJkXQ0I",
    ],
  },
  {
    title: "Motion Graphics",
    videos: [
      "https://www.youtube.com/embed/tFJVHsapkyk",
      "https://www.youtube.com/embed/tjZxO1MyFkc",
      "https://www.youtube.com/embed/3aqZ9ikGf10",
    ],
  },
];

const reels = [
  "https://www.youtube.com/embed/Zgjyok1Ng2Y",
  "https://www.youtube.com/embed/wCy1-nKryKU",
  "https://www.youtube.com/embed/jYkMGaZ2XCM",
  "https://www.youtube.com/embed/MLQnxNaw-Gs",
  "https://www.youtube.com/embed/JqKB8RH05Qs",
  "https://www.youtube.com/embed/4ciAfXXr_N0",
  "https://www.youtube.com/embed/yOIg2b4Jq_k",
  "https://www.youtube.com/embed/NrsTx6M6sZs",
  "https://www.youtube.com/embed/lrUWrO-iy_s",
  "https://www.youtube.com/embed/8E7Q_ScrkgI",
  "https://www.youtube.com/embed/qKA1Iu4NfBQ",
  "https://www.youtube.com/embed/-kqB5PWivVc",
];

const photography = [
   "https://videocms.digitalconnection.ae/wp-content/uploads/2024/06/asma-1.png",
  "https://videocms.digitalconnection.ae/wp-content/uploads/2024/06/izidoro-1.png",
  "https://videocms.digitalconnection.ae/wp-content/uploads/2024/06/asma-1.png",
  "https://videocms.digitalconnection.ae/wp-content/uploads/2024/06/izidoro-1.png",
  "https://videocms.digitalconnection.ae/wp-content/uploads/2024/06/asma-1.png",
  "https://videocms.digitalconnection.ae/wp-content/uploads/2024/06/izidoro-1.png",
  "https://videocms.digitalconnection.ae/wp-content/uploads/2024/06/asma-1.png",
  "https://videocms.digitalconnection.ae/wp-content/uploads/2024/06/izidoro-1.png",
  "https://videocms.digitalconnection.ae/wp-content/uploads/2024/06/asma-1.png",
  "https://videocms.digitalconnection.ae/wp-content/uploads/2024/06/izidoro-1.png",
  "https://videocms.digitalconnection.ae/wp-content/uploads/2024/06/asma-1.png",
  "https://videocms.digitalconnection.ae/wp-content/uploads/2024/06/izidoro-1.png",
];

function getYoutubeId(url) {
  const match = url.match(/embed\/([^?&]+)/);
  return match ? match[1] : "";
}

function LazyVideo({ src, reel = false }) {
  const [loaded, setLoaded] = useState(false);
  const videoId = getYoutubeId(src);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className={`portfolio-video ${reel ? "portfolio-reel" : ""}`}>
      {!loaded ? (
        <button
          type="button"
          className="portfolio-play"
          style={{
            backgroundImage: `url("${thumbnail}")`,
          }}
          onClick={() => setLoaded(true)}
        >
          <span className="portfolio-play-icon">
            <i className="fas fa-play"></i>
          </span>
        </button>
      ) : (
        <iframe
          src={`${src}?autoplay=1&rel=0`}
          title="YouTube video"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}

function Section({ title, videos, reel = false }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={`container-fluid portfolio-slider ${reel ? "reels-new" : ""}`}>
      <div className="sec_title">
        <h4>{title}</h4>
        <a href="#contact-form" className="main_btn_new outline">
          Conecte-se <i className="fas fa-arrow-right"></i>
        </a>
      </div>

      <div className={`portfolio-grid ${reel ? "reel-grid" : ""}`}>
        {videos.map((video, index) => (
          <div
            key={video}
            className={index >= 3 && !showMore ? "mobile-hidden-video" : ""}
          >
            <LazyVideo src={video} reel={reel} />
          </div>
        ))}
      </div>

      {videos.length > 3 && (
        <div className="portfolio-view-more-wrap">
          <button
            type="button"
            className="portfolio-view-more"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
}

function PhotographySection({ photos = [] }) {
  if (!photos.length) return null;

  return (
    <section className="sec-portfolio pt-0">
      <div className="history-image about-gallery container-fluid portfolio-slider photo-section mb-0">
        <div className="sec_title">
          <h4>Photography</h4>
          <a href="#contact-form" className="main_btn_new outline">
            Let’s Connect <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        <div className="netflix-slider" style={{ overflow: "hidden" }}>
          <Swiper
            modules={[Navigation, Scrollbar]}
            navigation
            scrollbar={{ draggable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            className="swiper-container swiper2"
          >
            {photos.map((src, index) => (
              <SwiperSlide key={`${src}-${index}`}>
                <div className="photo-item">
                  <img src={src} alt="Photography" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default function Portfolio({ photographyImages = [] }) {
  const photos = photographyImages.length ? photographyImages : photography;

  return (
    <>
      <section className="sec-portfolio">
        {sections.map((section) => (
          <Section
            key={section.title}
            title={section.title}
            videos={section.videos}
          />
        ))}

        <Section title="REELS" videos={reels} reel />
      </section>

      {/* <PhotographySection photos={photos} /> */}
    </>
  );
}