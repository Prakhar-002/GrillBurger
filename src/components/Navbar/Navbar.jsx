import React from 'react'
import Logo from "../../assets/logo.png";

const NavLinks = [
      {
            id: 1,
            title: "Home",
            link: "./#",
      },
      {
            id: 2,
            title: "About",
            link: "./#About",
      },
      {
            id: 3,
            title: "Menu",
            link: "./#Menu",
      },
      {
            id: 4,
            title: "Services",
            link: "./#Services",
      },
];

const Navbar = () => {
      return (
            <div className='shadow-xl'>
                  <div className="container py-3 sm:py-0">
                        <div className='flex justify-between items-center '>
                              {/* logo section */}
                              <div>
                                    <a href="/#"

                                    >
                                          <img src={Logo} alt=""
                                                className='w-16'
                                          />
                                    </a>
                              </div>
                              {/* links section */}
                              <div className='flex justify-between items-center gap-4'>
                                    <ul className='hidden sm:flex items-center gap-4'>
                                          {NavLinks.map((link) => (
                                                <li key={link.id}>
                                                      <a
                                                            className='inline-block 
                                                      py-4 px-4 
                                                      hover:text-primary 
                                                      duration-300
                                                      '
                                                            href={link.link}>{link.title}</a>
                                                </li>
                                          ))}
                                    </ul>
                                    <button
                                          className='bg-gradient-to-r 
                                    from-primary to-secondary 
                                    text-white px-4 py-1 rounded-full
                                    hover:scale-105 duration-200'
                                    >Order</button>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Navbar