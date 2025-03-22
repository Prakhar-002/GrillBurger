import React from 'react'
import Img1 from "../../assets/burger/burger1.png";
import Img2 from "../../assets/burger/burger2.png";
import Img3 from "../../assets/burger/burger3.png";
import Img4 from "../../assets/burger/burger4.png";
import Img6 from "../../assets/burger/burger6.png";
import Img7 from "../../assets/burger/burger7.png";

import HeaderTitle from "../../components/HeaderTitle/HeaderTitle.jsx"

const ServicesData = [
      {
            id: 1,
            img: Img1,
            name: "Cheese Burger",
            description:
                  "In most cases, one good burger mugshot is enough. But adding a caption or two hurts no one.",
            aosDelay: "100",
      },
      {
            id: 2,
            img: Img2,
            name: "Chicken Burger",
            description:
                  "Indeed, we are so fortunate to have these tasty creations in our midst. The least we can do is share.",
            aosDelay: "300",
      },
      {
            id: 3,
            img: Img3,
            name: "Veg Burger",
            description:
                  "Burgers bring people together like no other food.",
            aosDelay: "500",
      },
      {
            id: 4,
            img: Img4,
            name: "Aloo Tikki Burger",
            description:
                  "A culinary experience that leaves a lasting impression on the taste buds.",
            aosDelay: "600",
      },
      {
            id: 6,
            img: Img6,
            name: "Bean Burger",
            description:
                  "Better to wait a short time for your burger than to have your burger wait a long time for you.",
            aosDelay: "700",
      },
      {
            id: 7,
            img: Img7,
            name: "Paneer Burger",
            description:
                  "Burgers are an invitation to indulge in a moment of pure gastronomic delight.",
            aosDelay: "700",
      },
];

const Services = () => {
      return (
            <div className='bg-gray-100'>
                  <div className='py-12 lg:py-20'>
                        <div className="container">
                              {/* Header title */}
                              <HeaderTitle
                              title="Services"
                              subtitle="Our services"
                              description="The food served in fast-food restaurants is typically part of a meat-sweet diet, offered from a limited menu, cooked in bulk in advance and kept hot, finished and packaged to order, and usually available for take away, though seating may be provided"
                              />
                              {/* card section */}
                              <div className='grid grid-cols-1 sm:grid-cols-2 
                              md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
                                    {
                                          ServicesData.map((service) => (
                                                <div data-aos="fade-up" data-aos-delay={service.aosDelay} className='rounded-2xl bg-white hover:text-white hover:bg-primary relative
                                                shadow-xl duration-500 group max-w-[300px] my-4'>
                                                      <div className='h-[100px]'>
                                                            <img 
                                                            className='my-4 max-w-[200px] block mx-auto transform -translate-y-16 group-hover:scale-105 duration-300'
                                                            src={service.img} alt='Burger images'/>
                                                      </div>
                                                      <div className='p-4 text-center'>
                                                            <h1 className='text-xl font-bold'>{service.name}</h1>
                                                            <p className='text-gray-500 group-hover:text-white duration-500 text-sm line-clamp-2'>{service.description}</p>
                                                      </div>
                                                </div>
                                          ))
                                    }
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Services
