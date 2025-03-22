import React from 'react'
import BurgerImg from "../../assets/burger/burger5.png"
import {GrSecure} from "react-icons/gr"
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";


const Banner = () => {
      return (
            <div className='min-h-[550px] my-4'>
                  <div className='min-h-[550px] flex justify-center items-center'>
                        <div className='container'>
                              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                                    {/* image section */}
                                    <div data-aos="flip-up" >
                                          <img
                                                src={BurgerImg}
                                                alt="biryani img"
                                                className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                                          />
                                    </div>
                                    {/* text content section */}
                                    <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                                          <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold'>Buy 2 Get 1 Free</h1>
                                          <p data-aos="fade-up" className='text-gray-500 text-sm tracking-wide loading-5'>Fridays are for freebies and burgers! Get a FREE paneer Burger when you order two delicious Great Cheeseburger or VegBurger  <br/> <br /> Here at DealSunny we keep an up to date list of all Burger King coupons, so you never have to waste time searching the web for something that actually works. You never have to pay full price again with DealSunny! </p>
                                          <div className='flex gap-6'>
                                                <div data-aos="fade-up" >
                                                      <GrSecure className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100'/>
                                                </div>
                                                <div data-aos="fade-up" data-aos-delay="200">
                                                      <IoFastFood className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100'/>
                                                </div>
                                                <div data-aos="fade-up" data-aos-delay="400">
                                                      <GiFoodTruck className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100'/>
                                                </div>
                                          </div>
                                          <div data-aos="fade-up" data-aos-delay="00">
                                                <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-200'>
                                                      Order Now
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Banner
