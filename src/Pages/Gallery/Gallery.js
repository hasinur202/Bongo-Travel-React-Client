import React from 'react';

const Gallery = () => {
    return (
        <section id="gallery" class="gallery">
            <div class="container" data-aos="fade-up">

                <div class="section-title">
                <h2>Gallery</h2>
                <p>Here some photos of our different departments.</p>
                </div>

                <div class="gallery-slider swiper">
                <div class="swiper-wrapper align-items-center">
                    <div className="swiper-slide"><a className="gallery-lightbox" href="assets/img/gallery/gallery-1.jpg"><img src="assets/img/gallery/gallery-1.jpg" className="img-fluid" alt=""/></a></div>
                    <div className="swiper-slide mt-3"><a className="gallery-lightbox" href="assets/img/gallery/gallery-2.jpg"><img src="assets/img/gallery/gallery-2.jpg" className="img-fluid" alt=""/></a></div>
                    <div className="swiper-slide mt-3"><a className="gallery-lightbox" href="assets/img/gallery/gallery-3.jpg"><img src="assets/img/gallery/gallery-3.jpg" className="img-fluid" alt=""/></a></div>
                    <div className="swiper-slide mt-3"><a className="gallery-lightbox" href="assets/img/gallery/gallery-4.jpg"><img src="assets/img/gallery/gallery-4.jpg" className="img-fluid" alt=""/></a></div>
                    <div className="swiper-slide mt-3"><a className="gallery-lightbox" href="assets/img/gallery/gallery-5.jpg"><img src="assets/img/gallery/gallery-5.jpg" className="img-fluid" alt=""/></a></div>
                    <div className="swiper-slide mt-3"><a className="gallery-lightbox" href="assets/img/gallery/gallery-6.jpg"><img src="assets/img/gallery/gallery-6.jpg" className="img-fluid" alt=""/></a></div>
                    <div className="swiper-slide mt-3"><a className="gallery-lightbox" href="assets/img/gallery/gallery-7.jpg"><img src="assets/img/gallery/gallery-7.jpg" className="img-fluid" alt=""/></a></div>
                    <div class="swiper-slide mt-3"><a class="gallery-lightbox" href="assets/img/gallery/gallery-8.jpg"><img src="assets/img/gallery/gallery-8.jpg" class="img-fluid" alt=""/></a></div>
                </div>
                <div class="swiper-pagination"></div>
                </div>

            </div>
        </section>
    );
};

export default Gallery;