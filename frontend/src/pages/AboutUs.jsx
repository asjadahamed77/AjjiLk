import React from "react";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <div className="min-h-screen py-12 px-6 sm:px-12 bg-gray-100 text-mainColor">
      <div className="max-w-6xl mx-auto">
        {/* Introduction Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
          <p className="text-xl text-center text-secondaryColor">
            Welcome to Ajji-Lk! We're here to connect buyers and sellers of mobile phones, offering a trusted and seamless experience.
          </p>
        </section>

        {/* Our Story */}
        <section className="mb-12 bg-lightColor p-3 rounded border">
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg">
            Ajji-Lk was founded with a mission to create a user-friendly platform that makes buying and selling mobile phones simple and secure. 
            What started as a small initiative has now grown into a thriving community of tech enthusiasts and professionals.
          </p>
        </section>

        {/* Mission and Vision */}
        <section className="mb-12 grid sm:grid-cols-2 gap-10 ">
          <div className="bg-lightColor p-3 rounded border">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg">
              Our mission is to offer a trusted marketplace where individuals can buy and sell mobile phones with confidence. We focus on providing a smooth, 
              efficient, and transparent experience to all our users.
            </p>
          </div>
          <div className="bg-lightColor p-3 rounded border">
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-lg">
              Our vision is to become the go-to platform for mobile phone sales across the region, fostering a reliable and connected community of tech-savvy individuals.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
          <div className="grid sm:grid-cols-3 gap-10">
            <div className="p-6 bg-lightColor shadow-lg rounded-lg ">
              <h3 className="text-2xl font-bold mb-2">Trust</h3>
              <p className="text-lg">
                We prioritize safety and trustworthiness in every transaction, ensuring users feel confident using our platform.
              </p>
            </div>
            <div className="p-6 bg-lightColor shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Transparency</h3>
              <p className="text-lg">
                We believe in transparency at every step, from listing phones to completing a sale. Clear information leads to better experiences.
              </p>
            </div>
            <div className="p-6 bg-lightColor shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Innovation</h3>
              <p className="text-lg">
                We're always working to improve the buying and selling experience, using the latest technology and feedback from our users.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
          <p className="text-lg mb-6">
            Ajji-Lk is powered by a passionate team of tech enthusiasts and professionals who are dedicated to making the platform the best it can be.
          </p>
          <div className="grid sm:grid-cols-3 gap-10">
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="mx-auto rounded-full w-40 h-40 mb-4"
              />
              <h3 className="text-2xl font-bold">John Doe</h3>
              <p className="text-lg text-secondaryColor">Founder & CEO</p>
            </div>
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="mx-auto rounded-full w-40 h-40 mb-4"
              />
              <h3 className="text-2xl font-bold">Jane Smith</h3>
              <p className="text-lg text-secondaryColor">Head of Operations</p>
            </div>
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="mx-auto rounded-full w-40 h-40 mb-4"
              />
              <h3 className="text-2xl font-bold">David Lee</h3>
              <p className="text-lg text-secondaryColor">Lead Developer</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-12">
          <h2 className="text-3xl font-semibold mb-4">Join Us</h2>
          <p className="text-lg mb-6">
            Whether you’re looking to buy or sell a phone, Ajji-Lk is here to make the process easy and enjoyable.
          </p>
          <Link to={'/'}><button className="px-6 py-3 bg-mainColor text-white font-bold rounded-lg hover:bg-secondaryColor transition duration-300">
            Start Exploring
          </button></Link>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
