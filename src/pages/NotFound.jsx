import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | RK Travels Sahab</title>
        <meta
          name="description"
          content="Oops! The page you're looking for doesn't exist. Navigate back to explore amazing travel packages with RK Travels Sahab."
        />
      </Helmet>

      <div className="w-full min-h-screen flex flex-col justify-center items-center bg-white px-6 py-12 lg:px-16">
        <div className="text-center max-w-xl">
          <h1 className="text-6xl font-bold text-stone-800 mb-6">404</h1>
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-stone-600 mb-8">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          <Link
            to="/"
            className="inline-block bg-stone-800 text-white px-6 py-3 rounded-full font-medium hover:bg-stone-700 transition duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
