import { Link } from "react-router-dom"

const Contact = () => {
  return (
    /* Navigation bar */
    <div>
      <div className="bg-gray-50 text-gray-600">
        <div className="container max-w-5xl mx-auto px-4 h-24 flex items-center">
          <div className="font-black">
            <img src='./airplane.png' alt='Airplane' />
          </div>
          <ul className="ml-auto flex space-x-4">
            <li>
              <Link to="" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">Book now</Link>
            </li>
            <li>
              <Link to="/about-us" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">About us</Link>
            </li>
            <li>
              <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
        {/* Footer */}
      <div className='border-t border-gray-300'>
        <div className='container max-w-5xl mx-auto px-4 flex items-center justify-between'>
          <div className="text-gray-400 font-black">Social Media:</div>
          <div className='flex items-center justify-evenly'>
            <img src='./instagram.png' alt='Instagram' width="50" />
            <img src='./twitter.png' alt='Twitter' />
            <img src='./facebook.png' alt='Facebook' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
