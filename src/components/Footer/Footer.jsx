import React from 'react'
import {
      FaFacebook,
      FaInstagram,
      FaLinkedin,
      FaLocationArrow,
      FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/logo.png";

const FooterLinks = [
      {
            id: 1,
            title: "Home",
            link: "https://github.com/Prakhar-002"
      },
      {
            id: 2,
            title: "About",
            link: "https://github.com/Prakhar-002"
      },
      {
            id: 3,
            title: "Service",
            link: "https://github.com/Prakhar-002"
      },
      {
            id: 4,
            title: "Content Us",
            link: "https://github.com/Prakhar-002"
      },
]


const Footer = () => {
      return (
            <div data-aos="fade-up" className='bg-gray-100'>
                  <div className='max-w-[1260px] mx-auto'>
                        <div className="grid md:grid-cols-3 py-5">
                              {/* company details */}
                              <div className='py-8 px-4'>
                                    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
                                          <img className='w-12' src={footerLogo} alt="Logo" />
                                          Burger King
                                    </h1>
                                    <p>Food, in the end, in our own tradition, is something holy. It's not about nutrients and calories. It's about sharing. It's about honesty. It's about identity.</p>
                                    <br />
                                    <div className='flex items-center gap-3 '>
                                          <FaLocationArrow /> 123 Street , city Country
                                    </div>
                                    <div className='flex items-center gap-3 '>
                                          <FaMobileAlt /> +9516230700
                                    </div>
                                    {/* social handles  */}
                                    <div className='flex items-center gap-3 mt-3'>
                                          <a target='_blank' href="https://github.com/Prakhar-002">
                                                <FaInstagram className='text-3xl' />
                                          </a>
                                          <a target='_blank' href="https://github.com/Prakhar-002">
                                                <FaFacebook className='text-3xl' />
                                          </a>
                                          <a target='_blank' href="https://github.com/Prakhar-002">
                                                <FaLinkedin className='text-3xl' />
                                          </a>
                                    </div>
                              </div>
                              {/* Footer Links */}
                              <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                                    {/* First Cols */}
                                    <div>
                                          <div className='py-8 px-4'>
                                                <h1 className='text-xl sm:text-left font-bold text-justify mb-3'>Important Links</h1>
                                                <ul className='flex flex-col gap-3'>
                                                      {FooterLinks.map((data) => (
                                                            <li className='hover:text-primary duration-300'><a target='_blank' href={data.link}><i class="fa-solid fa-angles-right"></i> {data.title}</a></li>
                                                      ))}
                                                </ul>
                                          </div>
                                    </div>
                                    {/* Second Cols  */}
                                    <div>
                                          <div className='py-8 px-4'>
                                                <h1 className='text-xl sm:text-left font-bold text-justify mb-3'>Company Links</h1>
                                                <ul className='flex flex-col gap-3'>
                                                      {FooterLinks.map((data) => (
                                                            <li className='hover:text-primary duration-300'><a target='_blank' href={data.link}><i class="fa-solid fa-angles-right"></i> {data.title}</a></li>
                                                      ))}
                                                </ul>
                                          </div>
                                    </div>
                                    {/* Third col  */}
                                    <div>
                                          <div className='py-8 px-4'>
                                                <h1 className='text-xl sm:text-left font-bold text-justify mb-3'>Useful Links</h1>
                                                <ul className='flex flex-col gap-3'>
                                                      {FooterLinks.map((data) => (
                                                            <li className='hover:text-primary duration-300'><a target='_blank' href={data.link}><i class="fa-solid fa-angles-right"></i> {data.title}</a></li>
                                                      ))}
                                                </ul>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        {/* copyright */}
                        <div>
                              <div className='text-center py-10 border-t-2 border-gray-300/50'>
                                    @copyright 2024 || <a target='_blank' href="https://github.com/Prakhar-002" className='inline hover:text-primary hover:underline transition-all'>Prakhar-002</a>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Footer
