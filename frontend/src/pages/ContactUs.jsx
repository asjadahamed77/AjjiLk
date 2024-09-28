import React from "react";
import email_icon from "../assets/write.png";
import call_icon from "../assets/call.png";
import location_icon from "../assets/location.png";
const ContactUs = () => {
  return (
    <div className="py-8 sm:px-6 ">
      <div className="text-center">
        <h1 className="text-mainColor text-3xl font-semibold">Contact Us</h1>
        <p className="text-secondaryColor text-[20px]">
          Your voice matters. Reach out to our team.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-evenly mt-10 gap-10">
        <div className="flex flex-col items-center text-mainColor">
          <img className="w-24" src={email_icon} alt="email" />
          <p className="font-semibold text-[20px]">WRITE US</p>
          <p className="italic">ajjiShopLk@gmail.com</p>
        </div>
        <div className="flex flex-col items-center text-mainColor">
          <img className="w-24" src={call_icon} alt="email" />
          <p className="font-semibold text-[20px]">CALL US</p>
          <p className="italic">+94 76 125 7755</p>
        </div>
        <div className="flex flex-col items-center text-mainColor">
          <img className="w-24" src={location_icon} alt="email" />
          <p className="font-semibold text-[20px]">VISIT US</p>
          <p className="italic">
            No.123, Galle Road, <br />
            Bambalapitya <br />
            Colombo-004
          </p>
        </div>
      </div>
      <div className="mt-10 bg-mainColor text-lightColor sm:w-[500px] w-[350px]  mx-auto p-8 border border-secondaryColor rounded-[0px_35px_0px_35px]">
      <div className="text-center">
        <h1 className="text-backgroundColor text-3xl font-semibold">Send Us a Message</h1>
        <p className="text-secondaryColor text-[20px] leading-[22px] mt-2">
        We'd love to hear from you. Drop us a message below!
        </p>
      </div>
      <form className="max-w-[400px] flex flex-col mx-auto gap-3 mt-10 ">
        <label htmlFor="name">
            <p>Name:</p>
            <input type="text" placeholder="Enter Here..." className="w-full pl-3 p-2 rounded bg-transparent border border-backgroundColor mt-1" />
        </label>
        <label htmlFor="email">
            <p>Email:</p>
            <input type="email" placeholder="Enter Here..." className="w-full pl-3 p-2 rounded bg-transparent border border-backgroundColor mt-1" />
        </label>
        <label htmlFor="message">
            <p>Message:</p>
            <textarea type="text" placeholder="Enter Here..." className="w-full pl-3 p-2 rounded bg-transparent border border-backgroundColor mt-1" />
        </label>
        <button type="submit" className="bg-backgroundColor text-mainColor font-semibold py-2 rounded w-36">SEND MESSAGE</button>
      </form>
      </div>
    </div>
  );
};

export default ContactUs;
