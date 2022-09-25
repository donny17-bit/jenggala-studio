import Layout from "../../components/layout";
import axios from "../../utils/axios";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import FsLightbox from "fslightbox-react";

function Engagement() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });
  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  const source = [
    "/assets/engagement/engagement1.jpg",
    "/assets/engagement/engagement2.jpg",
    "/assets/engagement/engagement3.jpg",
    "/assets/engagement/engagement4.jpg",
    "/assets/engagement/engagement5.jpg",
    "/assets/engagement/engagement6.jpg",
    "/assets/engagement/engagement7.jpg",
    "/assets/engagement/engagement8.jpg",
    "/assets/engagement/engagement9.jpg",
    "/assets/engagement/engagement10.jpg",
    "/assets/engagement/engagement11.jpg",
    "/assets/engagement/engagement12.jpg",
  ];

  return (
    <>
      <div className="title-banner text-center justify-content-center container-fluid align-items-center d-flex">
        <div className="row row-cols-1">
          <div className="col">
            <h3 className="title-text mb-0">GALERI</h3>
          </div>
          <div className="col">
            <h3 className="title-subtitle">FOTO ENGAGEMENT</h3>
          </div>
        </div>
      </div>
      <div className="container pb-2" style={{ backgroundColor: "white" }}>
        <div className="row row-cols-4 galeri-row">
          {source.map((item, index) => (
            <div className="col galeri-col align-self-center px-1">
              <div className="overlay-container">
                <img
                  src={`/assets/engagement/engagement${index + 1}.jpg`}
                  alt="galeri-terbaru"
                  className="galeri-img px-0"
                />
                <div
                  className="overlay"
                  onClick={() => openLightboxOnSlide(index + 1)}
                ></div>
              </div>
            </div>
          ))}
          <FsLightbox
            toggler={lightboxController.toggler}
            sources={source}
            slide={lightboxController.slide}
          />
        </div>
        <Link href="/kontak">
          <button
            type="button"
            className="btn btn-success floating-btn sticky-bottom position-fixed"
          >
            Hubungi Kami
          </button>
        </Link>
      </div>
    </>
  );
}

export default Engagement;

Engagement.getLayout = function getLayout(page) {
  return <Layout title={"Foto Engagement | Janggala Studio"}>{page}</Layout>;
};