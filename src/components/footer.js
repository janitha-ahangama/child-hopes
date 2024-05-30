import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import Logo from '../assets/header-logo-png.png'

export default function Footer() {
  return (
    <div className="relative isolate overflow-hidden bg-yellow-100 py-4 sm:py-4 lg:py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <div className="flex max-w-md gap-x-4">
              <img className="h-40 w-auto mt-8 ml-10" src={Logo} alt="" />
            </div>
            <p className="mt-4 ml-16 text-2xl font-semibold leading-8 text-black">
            "Giving Hope, Inspiring Change"
            </p>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <dt className="mt-4 text-lg font-bold text-black">Contact Us</dt>
              <dd className="mt-2 leading-7 text-black">
                info@childhopes.org<br/>+94 (71) 434 9574
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <dt className="mt-4 text-lg font-bold text-black">Location</dt>
              <dd className="mt-2 leading-7 text-black">
                NO: 183/34 <br/>4th Lane <br/>Thalapathpitiya Road <br/>Nugegoda <br/> Sri Lanka
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
