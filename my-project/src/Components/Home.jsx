import React from 'react';

const Home = () => {
  return (
    <>
      <div className="bg-gray-50 text-gray-600">
        <div className="container max-w-5xl mx-auto px-4 h-24 flex items-center">
          <div className="font-black">
            <img src='./airplane.png' alt='' />
          </div>
          <ul className="ml-auto flex space-x-4">
            <li>
              <a href="" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">How to book</a>
            </li>
            <li>
              <a href="" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">About us</a>
            </li>
            <li>
              <a href="" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">Information</a>
            </li>
            <li>
              <a href="" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Banner Section */}
      <div style={{ backgroundImage: `url('./Melhores-cadeiras-de-praia.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '450px' }}>
        <div className="container max-w-5xl mx-auto px-4 h-full flex items-center justify-center">
          <div>
            <div className='text-center'>
              <h1 className='text-red-700 text-5xl font-black mb-1'>Where do you want to go?</h1>
              <p className='text-red-700 font-black text-xl'>Choose your state and city to find the best resorts!</p>
            </div>

            <div className='mt-8'>
              <form className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
                <select className='bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500'>
                  <option value="">Choose state</option>
                </select>
                <select className='bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500'>
                  <option value="">Choose city</option>
                </select>
                <button className='col-span-2 lg:col-span-1 inline-flex flex items-center justify-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded'>
                <svg className='w-4 h-4 mr-1' data-slot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
                </svg>
                  Search resorts
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Resort Section */}
      <div>
        <div className='container max-w-5xl mx-auto px-4 py-20'>
          <div className='flex flex-col-reverse lg:flex-row'>
            <div className='lg:pr-10'>
              <div className='text-sm text-gray-400 font-medium'>FEATURED RESORTS</div>
              <div className='text-2xl'>Ecoresort Praia do Forte Bahia</div>
              <div className='text-sm text-gray-400 font-medium'>Hotel qualidade 5 estrelas</div>
              <div className='text-sm text-gray-400 font-medium mt-4'>
                <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <button className='inline-flex flex items-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded'>
                Request reservation
                <svg className='w-4 h-4 ml-2' data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                </svg>
              </button>
            </div>
            <div className=' flex-shrink-0 lg:ml-auto mb-5 lg:mb-0'>
              <img src='./feartured-img.jpg' alt='' width="450" />
            </div>
          </div>
        </div>
      </div>

      {/* Know more about resorts Section */}
      <div className='container max-w-5xl mx-auto px-4'>
        <div>
          <h3 className='text-2xl text-center text-gray-500 font-semibold mb-8'>Know more about resorts</h3>
          <div className='md:grid md:grid-cols-4 md:grid-rows-2 md:gap-6 space-y-6 md:space-y-0'>
            <div className='relative md:col-span-2 md:row-span-2 rounded-md overflow-hidden'>
              <div className='absolute top-0 pl-4 pb-4 text-white font-black'>
                Beach Park Resort
              </div>
              <img src='./hotel-11.jpg' alt='' width="100%" className='w-full h-full object-cover' />
            </div>
            <div className=' relative md:col-span-2 md:h-40 rounded-md overflow-hidden'>
              <div className='absolute top-0 pl-4 pb-4 text-white font-black'>
                Salinas do Maragogi
              </div>
              <img src='./hotel-2.jpg' alt='' width="" className='w-full h-full object-cover' />
            </div>
            <div className=' relative rounded-md overflow-hidden'>
              <div className='absolute bottom-0 pl-4 pb-4 text-white font-black'>
                Grand Palladium
              </div>
              <img src='./hotel-3.jpg' alt='' width="" className='w-full h-full object-cover' />
            </div>
            <div className=' relative rounded-md overflow-hidden'>
              <div className='absolute bottom-0 pl-4 pb-4 text-white font-black shadow-lg'>
                Arraial d'Ajuda Eco Resort
              </div>
              <img src='./hotel-4.jpg' alt='' width="" className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
      </div>

      <div className='py-20'>
        <div className='container max-w-5xl mx-auto px-4 flex justify-center'></div>
        <form className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
                <select className='bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500'>
                  <option value="">Choose state</option>
                </select>
                <select className='bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500'>
                  <option value="">Choose city</option>
                </select>
                <button className='col-span-2 lg:col-span-1 inline-flex flex items-center justify-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded'>
                <svg className='w-4 h-4 mr-1' data-slot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
                </svg>
                  Search resorts
                </button>
              </form>
      </div>

      <div className='border-t border-gray-300'>
        <div className='container max-w-5xl mx-auto px-4 flex items-center justify-between'></div>
        <div className=" text-gray-400 font-black">
          </div>
          <div className='flex items-center justify-evenly'>
            <img src='./instagram.png' alt='' width="50"/>
            <img src='./twitter.png' alt=''/>
            <img src='./facebook.png' alt=''/>
          </div>
      </div>
    </>
  );
}

export default Home;


