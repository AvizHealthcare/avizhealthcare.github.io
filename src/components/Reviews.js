import React, { useEffect } from "react";
import "./Reviews.css";
import { FaStar } from "react-icons/fa";
import Swiper from 'swiper/bundle';
import 'swiper/css';


import review1 from "../assets/review1.jpg";
import review2 from "../assets/review2.jpg";
import review3 from "../assets/review3.jpg";
import review4 from "../assets/review4.jpg";
import review5 from "../assets/review5.jpg";

const Reviews = () => {
    useEffect(() => {
      new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
          delay: 2000, 
          disableOnInteraction: false 
        },
        slidesPerView: 2,
        spaceBetween: 100
        
      });
    }, []);

  return (
    <div>
      <section className="review-testimonials">
        <div className="review-container">
          <div className="review-header">
            <h2 className="review-title">What our clients say</h2>
          </div>
          <div className="review-testimonial-content">
            <div className="review-testimonial-slider swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="review-testimonials-item">
                    <div className="review-info">
                      <img className="review-image" src={review1} alt="review-image1" />
                      <div className="review-text-box">
                        <h3 className="review-name">John Doe</h3>
                        <span className="review-job">Web Developer</span>
                      </div>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                    <div className="review-rating">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="review-testimonials-item">
                    <div className="review-info">
                      <img className="review-image" src={review2} alt="review-image2" />
                      <div className="review-text-box">
                        <h3 className="review-name">Jane Smith</h3>
                        <span className="review-job">Graphic Designer</span>
                      </div>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                    <div className="review-rating">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="review-testimonials-item">
                    <div className="review-info">
                      <img className="review-image" src={review3} alt="review-image3" />
                      <div className="review-text-box">
                        <h3 className="review-name">Alice Johnson</h3>
                        <span className="review-job">Marketing Manager</span>
                      </div>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                    <div className="review-rating">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="review-testimonials-item">
                    <div className="review-info">
                      <img className="review-image" src={review4} alt="review-image4" />
                      <div className="review-text-box">
                        <h3 className="review-name">David Williams</h3>
                        <span className="review-job">CEO, XYZ Company</span>
                      </div>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                    <div className="review-rating">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="review-testimonials-item">
                    <div className="review-info">
                      <img className="review-image" src={review5} alt="review-image5" />
                      <div className="review-text-box">
                        <h3 className="review-name">Vedang Nagar</h3>
                        <span className="review-job">Software Engineer Intern</span>
                      </div>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                    <div className="review-rating">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
