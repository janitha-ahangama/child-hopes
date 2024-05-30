import React from 'react';
import Header from '../components/header';
import Footer_bottom from '../components/footer_bottom'

const Contact = () => {
  return (
    <div>
      <Header />
      <div className=" py-8 sm:py-12 lg:py-12 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-center text-black mb-8">Contact Us</h1>
          <p className="text-lg leading-8 text-black text-center mb-12">
            We would love to hear from you! Whether you have a question, feedback, or want to get involved, please don't hesitate to reach out.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-semibold text-black mb-4">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-black">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-black">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-block px-8 py-3 text-lg font-semibold text-white bg-black rounded-md hover:bg-gray-800"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-black mb-4">Contact Information</h2>
              <ul className="space-y-4 text-lg leading-8 text-black">
                <li>
                  <strong>Email:</strong> info@childhopes.org
                </li>
                <li>
                  <strong>Phone:</strong> +94 (71) 434 9574
                </li>
                <li>
                  <strong>Address:</strong>
                  <div className="mt-2">
                    No: 183/34<br />
                    4th Lane<br />
                    Thalapathpitiya Road<br />
                    Nugegoda, Sri Lanka
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-black mb-4">Follow Us</h3>
                <div className="flex space-x-6">
                  <a href="#" className="text-black hover:text-gray-700">
                    <span className="sr-only">Facebook</span>
                    {/* Replace with your Facebook icon */}
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35C.596 0 0 .596 0 1.325v21.351C0 23.405.596 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.66-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.505 0-1.796.715-1.796 1.763v2.31h3.588l-.467 3.621h-3.121V24h6.116C23.405 24 24 23.405 24 22.676V1.325C24 .596 23.405 0 22.675 0z" />
                    </svg>
                  </a>
                  <a href="#" className="text-black hover:text-gray-700">
                    <span className="sr-only">Twitter</span>
                    {/* Replace with your Twitter icon */}
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.609 1.794-1.574 2.163-2.723-.95.555-2.005.959-3.127 1.184-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.92 2.2-4.92 4.917 0 .39.045.765.127 1.124-4.09-.205-7.719-2.164-10.148-5.144-.422.724-.666 1.562-.666 2.456 0 1.692.86 3.18 2.169 4.054-.798-.026-1.55-.245-2.207-.61v.061c0 2.364 1.685 4.337 3.918 4.779-.41.111-.84.171-1.285.171-.314 0-.617-.03-.916-.085.631 1.953 2.449 3.377 4.604 3.416-1.68 1.319-3.809 2.104-6.115 2.104-.397 0-.79-.023-1.174-.068 2.179 1.397 4.768 2.209 7.557 2.209 9.054 0 14-7.497 14-13.985 0-.21 0-.423-.015-.634.961-.695 1.8-1.56 2.457-2.548l-.047-.02z" />
                    </svg>
                  </a>
                  <a href="#" className="text-black hover:text-gray-700">
                    <span className="sr-only">Instagram</span>
                    {/* Replace with your Instagram icon */}
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.851 0 3.204-.012 3.584-.07 4.85-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.851.07-3.204 0-3.584-.012-4.85-.07-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.851 0-3.204.012-3.584.07-4.85.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.851-.07m0-2.163C8.755 0 8.336.011 7.052.07 5.777.128 4.603.393 3.675 1.32 2.748 2.248 2.482 3.422 2.424 4.698.011 8.336 0 8.755 0 12s.011 3.664.07 4.948c.058 1.275.333 2.449 1.26 3.376.928.928 2.102 1.192 3.378 1.25 1.275.058 1.694.07 5.292.07s4.017-.012 5.292-.07c1.275-.058 2.449-.333 3.376-1.26.928-.928 1.192-2.102 1.25-3.378.058-1.275.07-1.694.07-5.292s-.012-4.017-.07-5.292c-.058-1.275-.333-2.449-1.26-3.376-.928-.928-2.102-1.192-3.378-1.25C15.664.011 15.245 0 11.647 0h-.294zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.205a4.043 4.043 0 1 1 0-8.086 4.043 4.043 0 0 1 0 8.086zm6.406-11.845a1.44 1.44 0 1 1-2.882 0 1.44 1.44 0 0 1 2.882 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer_bottom />
    </div>
  );
}

export default Contact;
