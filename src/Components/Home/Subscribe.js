import React from "react";
import { Link } from "react-router-dom";

const Subscribe = () => {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center">
        <div className="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
          <div className="lg:w-1/2">
            <div className="h-64 bg-cover lg:rounded-lg lg:h-full">
              <img
                src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
                alt=""
              />
            </div>
          </div>

          <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
              Get the Best laptop offer in Your
              <span className="text-blue-600 dark:text-blue-400"> Inbox</span>
            </h2>

            <div className="mt-8 flex justify-center items-center ">
              <input placeholder="Your Email" className="w-full py-2 px-3 border border-gray-500 rounded-lg" type="email" name="" id="" />{" "}
              <Link className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700">
               Subscribe
              </Link>
            </div>
            <p className="text-gray-500">By clicking Subscribe, I agree to receive exclusive offers & promotions, news & reviews, and personalized tips for buying and selling on Recycle.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;
