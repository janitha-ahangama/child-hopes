import { useState } from "react"

const callouts = [
    {
      name: 'Educational Sponsorship',
      description: 'Support a child’s education by providing school supplies, uniforms, and tuition fees.',
      imageSrc: 'https://i0.wp.com/www.hayleys.com/wp-content/uploads/2022/02/Puritas-Sathdiyawara-continues-to-empower-adopted-villages-with-educational-care-packs-for-7th-year.png?fit=1200%2C798&ssl=1',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Scholarship Programs',
      description: 'Empower talented students with scholarships to continue their education.',
      imageSrc: 'https://sathkaara.lk/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-30-at-16.32.50-2-768x512.jpeg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Community Libraries',
      description: 'Help us build and maintain libraries in rural schools to provide access to books and learning materials.',
      imageSrc: 'https://archives.sundayobserver.lk/2009/07/26/z_p-21-Room-02.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
    {
      name: 'School Improvement Projects',
      description: 'Contribute to infrastructure projects like building classrooms, providing clean water, and improving sanitation facilities.',
      imageSrc: 'https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.ft.lk/ftadmin/wp-content/uploads/2017/07/07000533/0194.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ]
  
  export default function Feed() {

    const [selectedCallout, setSelectedCallout] =useState(null);

    const openPopup =(callout) =>{
        setSelectedCallout(callout);
    }
    const closePopup =() =>{
        setSelectedCallout(null);
    }

    return (
      <div className="mt-32 bg-cyan-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-black">Top Events for the week</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative" onClick={() => openPopup(callout)}>
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img 
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-lg text-black font-bold">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-black mb-3.5 ">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  