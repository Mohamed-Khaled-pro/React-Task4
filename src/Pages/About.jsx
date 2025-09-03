import React from 'react'

export default function About() {
  return (
   <section dir='ltr' className="text-white py-12 px-6 md:px-16 mt-40">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-100 mb-6">About Us</h2>
        <p className="text-2xl text-gray-300 mb-4 leading-relaxed">
          Welcome to our online store – your one-stop destination for everything you need.
          We bring you a wide range of high-quality products, from fashion and accessories
          to home essentials and the latest tech gadgets.
        </p>
        <p className="text-2xl text-gray-300 leading-relaxed">
          Our mission is to make shopping simple, enjoyable, and accessible for everyone.
          With modern design and a user-friendly experience powered by React and Tailwind CSS,
          we aim to provide a seamless journey from browsing to checkout.
        </p>
      </div>
    </section>
  )
}
