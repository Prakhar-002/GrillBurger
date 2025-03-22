import AppStoreImg from '../../assets/appStore.png'
import PlayStoreImg from '../../assets/playStore.png'

const AppStore = () => {
      return (
            <div className='bg-gray-100 py-14 '>
                  <div className='container'>
                        <div className='grid'>
                              <div className='space-y-6 max-w-xl mx-auto'>
                                    <h1 data-aos="zoom-in" className='text-xl sm:text-4xl font-semibold text-center text-gray-700'> Burger King is available for Android and IOS</h1>
                                    <div className='flex flex-wrap justify-center items-center'>
                                          <a href="#">
                                                <img 
                                                data-aos="fade-up" 
                                                className='max-w-[100px] sm:max-w-[200px]'
                                                src={PlayStoreImg} alt="PlayStore" />
                                          </a>
                                          <a href="#">
                                                <img 
                                                data-aos="fade-up" 
                                                data-aos-delay="200"
                                                className='max-w-[100px] sm:max-w-[200px]'
                                                src={AppStoreImg} alt="PlayStore" />
                                          </a>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default AppStore
