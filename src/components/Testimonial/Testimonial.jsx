import React from 'react';
import HeaderTitle from "../HeaderTitle/HeaderTitle.jsx";
import Slider from "react-slick";
import { data } from 'autoprefixer';


const settings = {
  dots: false,
  arrows: false,
  loop: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  mobileFirst: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  pauseOnHover: true,
};
const TestimonialData = [
  {
    id: 1,
    name: "Prakhar",
    testimonial:
      "Burger King burger is one of the best in the town. Very delicious burger strongly recommend this especially Maharaja burger its very tasty",
    img: "https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/ed/7b/default-avatar-2020-6.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    testimonial:
      "very nice burger. The best quality. Friendly staff and a good value for money.easy listening music and happy faces everywhere.",
    img: "https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/e7/3d/default-avatar-2020-55.jpg",
  },
  {
    id: 3,
    name: "Kakashi Hatake",
    testimonial:
      "This place has decent option of burgers to choose from. They should keep prices low to make this place worth visiting again and again",
    img: "https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/f6/0d/default-avatar-2020-34.jpg",
  },
];

const Testimonial = () => {
  return (
    <div className='py-10'>
        <div className='container'>
          {/* header Title */}
          <HeaderTitle
          title="Testimonial"
          subtitle="Whats our customers say"
          description="The food served in fast-food restaurants is typically part of a meat-sweet diet, offered from a limited menu, cooked in bulk in advance and kept hot, finished and packaged to order, and usually available for take away, though seating may be provided"
          />

          {/* Testimonial card  */}
          <div className='max-w-[600px] mx-auto'>
            <Slider {...settings}>
              {
                TestimonialData.map((data) => (
                  <div key={data.id} data-aos="fade-up" >
                    <div className='text-center shadow-lg p-4 rounded-xl space-y-3 my-8 mx-5'>
                      <h1 className='text-xl font-bold'>{data.name}</h1>
                      <img
                      className='rounded-full block mx-auto '
                      src={data.img} alt="Testimonial" />
                      <p className='text-gray-500 text-sm'>{data.testimonial}</p>
                    </div>
                  </div>
                ))
              }
            </Slider>
          </div>
        </div>
    </div>
  )
}

export default Testimonial
