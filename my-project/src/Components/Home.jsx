import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-50">
      <div>
        <div className="container mx-auto px-4 h-24 flex items-center">
          <div className="font-black">
            Logo
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
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div>
          <div className='text-center'>
            <h1 className='text-red-700 text-5xl font-black mb-1'>Where do you want to go?</h1>
            <p className='text-red-700 font-black text-xl'>Choose your state and city to find the best resorts!</p>
          </div>

          <div className='mt-8'>
            <form className='space-x-4'>
              <select className='bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500'>
                <option value="">Choose state</option>
              </select>
              <select className='bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500'>
                <option value="">Choose city</option>
              </select>
              <button className='inline-flex flex items-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded'>
              <svg className='w-4 h-4 mr-1' data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path></svg>
              Search resorts
                </button>
            </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;


