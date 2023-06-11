import React from "react";
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="mx-auto px-4 py-8 mt-20  bg-stone-100 rounded-lg">
      <div className="flex flex-col lg:flex-row justify-center items-center container mx-auto">
        <div className="lg:w-1/2 lg:pr-8">
          <h4 className="text-3xl font-bold mb-4">Get In Touch</h4>
          <p className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            aliquet mi auctor dolor commodo consequat. Ut mauris lacus,
            scelerisque vitae orci a, sagittis accumsan ipsum.
          </p>

          <form className="mb-6">
            <div className="flex gap-x-4 ">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="form-input mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                placeholder="Your Email"
                id="email"
                name="email"
                className="form-input mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4 mt-3">
              <input
                placeholder="   Your Subject"
                type="text"
                id="subject"
                name="subject"
                className="form-input mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                id="message"
                name="message"
                className="form-textarea mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-primary py-2 px-4 rounded-md bg-blue-500 text-white"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="lg:w-1/2 lg:pl-8 space-y-6">
          <h4 className="text-3xl font-bold mb-4">Contact Info</h4>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            aliquet mi auctor dolor commodo consequat. Ut mauris lacus,
            scelerisque vitae orci a, sagittis accumsan ipsum.
          </p>

          <p className="mb-4 flex items-center gap-3 text-lg">
            <FaHome size={25} color="orange" /> <strong>Address:</strong>{" "}
            <span className="text-sm text-slate-500">
              123 Main Street, City, State, Zip Code
            </span>
          </p>
          <p className="mb-4 flex items-center gap-3 text-lg">
            <FaPhone size={25} color="orange" /> <strong>Phone:</strong>{" "}
            <span className="text-sm text-slate-500">(+88) 01907-252606</span>
          </p>
          <p className="mb-4 flex items-center gap-3 text-lg">
            <FaMailBulk size={25} color="orange" /> <strong>Email:</strong>{" "}
            <span className="text-sm text-slate-500">mail.mehedi22@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
