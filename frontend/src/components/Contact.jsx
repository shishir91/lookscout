import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://lookscout-api-ccr.vercel.app/contact/addContact",
        formData
      );
      console.log("Response:", response.data);
      setMessageSent(true);
      setFormData({
        firstName: "",
        email: "",
        phoneNumber: "",
        country: "",
        message: "",
        agreePolicy: false,
      });
      setAgreePolicy(false)
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <center className="w-100 justify-center content-center">
        <h1 className="h1">Get In Touch With Us</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eius
          nemo dicta repudiandae. Vero consectetur hic rerum explicabo itaque
          dolor eos, qui reprehenderit temporibus, maxime voluptatem deleniti
          ea, suscipit ratione.
        </span>
        <br />
        <br />
        <span className={`text-blue-500 font-bold text-xl ${!messageSent?"hidden":"block"}`}>
          Thank you for contacting us. We will get back to you soon.
        </span>
        <br />
        <br />
      </center>

      <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-gray-800">
        <div className="mb-5">
          <label
            htmlFor="firstName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Name"
            className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-5">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <label
            for="Phone Number"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="+000"
            className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Get In Touch With Us
          </label>
          <select
            id="countries"
            className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Dropdown</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Hi! We are Lookscout..."
          ></textarea>
        </div>
        <div className="flex items-center mb-4">
          <input
            id="agreePolicy"
            name="agreePolicy"
            type="checkbox"
            onChange={(e) => setAgreePolicy(e.target.checked)}
            checked={agreePolicy}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />

          <label
            for="checkbox-1"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree to the Lookscout Privacy Policy
          </label>
        </div>
        <button
          type="submit"
          disabled={!agreePolicy}
          className={`text-white bg-blue-700 ${
            !agreePolicy
              ? "bg-opacity-50 cursor-not-allowed"
              : "hover:bg-blue-800"
          } focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
