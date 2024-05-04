import React from "react";

const Contact = () => {
  return (
    <div style={{ "backgroundColor": "black", "color": "white"}}>
      <center className="w-100 justify-center content-center">
        <h1 className="h1">Get In Touch With Us</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eius
          nemo dicta repudiandae. Vero consectetur hic rerum explicabo itaque
          dolor eos, qui reprehenderit temporibus, maxime voluptatem deleniti
          ea, suscipit ratione.
        </span>
      </center>
      <form action="" className="max-w-sm mx-auto">
        <div class="mb-5">
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Base input
          </label>
          <input
            type="text"
            id="base-input"
            class="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
