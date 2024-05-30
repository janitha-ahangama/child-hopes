import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer'
import Footer_bottom from '../components/footer_bottom'

const About = () => {
  return (
    <div>
      <Header />
      <div className=" py-8 sm:py-12 lg:py-12 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-center text-black mb-8">About Us</h1>
          <p className="text-lg text-center leading-8 text-black mb-8">
            At Give a Child Hope, we are dedicated to making a difference in the lives of children in need. Our mission is to provide underprivileged children with the opportunities, resources, and support they need to thrive and reach their full potential.
          </p>
          <h2 className="text-3xl text-center font-semibold text-black mb-4">Our Mission</h2>
          <p className="text-lg text-center leading-8 text-black mb-8">
            Our mission is to empower children by providing them with access to education, healthcare, and emotional support. We believe that every child, regardless of their background or circumstances, deserves a chance to succeed and live a fulfilling life. Through our various programs and initiatives, we strive to create a nurturing and supportive environment for children to grow and develop.
          </p>
          <h2 className="text-3xl text-center font-semibold text-black mb-4">What We Do</h2>
          <ul className="list-disc list-inside text-lg leading-8 text-black mb-8">
            <li className="mb-2 flex">
              <strong className="w-1/4 text-right mr-6">Education Support:</strong>
              <span className="w-3/4">
                We provide scholarships, school supplies, and tutoring services to help children excel academically.
              </span>
            </li>
            <li className="mb-2 flex">
              <strong className="w-1/4 text-right mr-6">Healthcare Initiatives:</strong>
              <span className="w-3/4">
                Our healthcare programs ensure that children have access to medical care, nutrition, and mental health services.
              </span>
            </li>
            <li className="mb-2 flex">
              <strong className="w-1/4 text-right mr-6">Community Programs:</strong>
              <span className="w-3/4">
                We organize community events and workshops to foster a sense of belonging and support among children and their families.
              </span>
            </li>
            <li className="mb-2 flex">
              <strong className="w-1/4 text-right mr-6">Mentorship and Counseling:</strong>
              <span className="w-3/4">
                Our mentorship programs connect children with positive role models who provide guidance and support.
              </span>
            </li>
          </ul>
          <h2 className="text-3xl text-center font-semibold text-black mb-4">Our Impact</h2>
          <p className="text-lg text-center leading-8 text-black mb-8">
            Since our inception, Give a Child Hope has positively impacted the lives of hundreds of children. We have seen remarkable improvements in academic performance, health outcomes, and overall well-being among the children we serve. Our dedicated team and generous supporters are the backbone of our organization, driving our efforts to make a lasting difference.
          </p>
          <h2 className="text-3xl text-center font-semibold text-black mb-4">Get Involved</h2>
          <p className="text-lg text-center leading-8 text-black mb-8">
            There are many ways you can support our mission and help make a difference in the lives of children. Whether through donations, volunteering, or spreading awareness, your involvement is crucial to our success. Together, we can create a brighter future for children in need.
          </p>
          <div className="text-center">
            <a
              href="/donate"
              className="inline-block px-8 py-3 text-lg font-semibold text-white bg-black rounded-md hover:bg-gray-800"
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>
      <Footer/>
      <Footer_bottom/>
    </div>
  );
}

export default About;