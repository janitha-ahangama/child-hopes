import Image1 from "../assets/pro-1.jpg";
import Image2 from "../assets/pro-2.jpg";
import Image3 from "../assets/pro-3.jpg";
import Image4 from "../assets/pro-4.jpg";

export default function Conent() {
  return (
    <div className="relative overflow-hidde bg-gradient-to-r from-yellow-100 to-amber-300">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-black">
              Welcome to <br/> "Give a Child Hope"
            </h1>
            <p className="mt-4  text-black font-semibold text-lg">
              At Give a Child Hope, we believe in the boundless potential that
              education holds for every child. Our mission is clear: to extend a
              helping hand to Sri Lankan children in rural areas who are
              diligently pursuing their studies. Through our dedicated efforts,
              we aim to brighten their futures, break down barriers, and instill
              hope where it's needed the most.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden border-solid border-8 border-white rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src={Image1}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden border-solid border-8 border-white rounded-lg">
                        <img
                          src={Image2}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden border-solid border-8 border-white rounded-lg">
                        <img
                          src={Image3}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden border-solid border-8 border-white rounded-lg">
                        <img
                          src={Image4}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden border-solid border-8 border-white rounded-lg">
                        <img
                          src={Image1}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden border-solid border-8 border-white rounded-lg">
                        <img
                          src={Image2}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden border-solid border-8 border-white rounded-lg">
                        <img
                          src={Image3}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
