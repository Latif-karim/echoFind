// components/TestimonialCarousel.js
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    title: "Student, University",
    rating: 4,
    text: '"I never thought I would see my lost backpack again, but thanks to this platform, it was returned to me within days!"',
    image: "/user (1).png", // Replace with actual image path
  },
  {
    id: 2,
    name: "John Doe",
    title: "Professional, Tech Corp",
    rating: 5,
    text: '"Amazing service! My wallet was found and returned in perfect condition."',
    image: "/user (2).png", // Replace with actual image path
  },
  {
    id: 3,
    name: "Alice Smith",
    title: "Student, College",
    rating: 5,
    text: '"This platform is a lifesaver! I got my laptop back within a week."',
    image: "/user.png", // Replace with actual image path
  },
  {
    id: 4,
    name: "Michael Brown",
    title: "Freelancer",
    rating: 4,
    text: '"I was skeptical at first, but the process was smooth and my lost headphones were returned quickly."',
    image: "/user.png", // Replace with actual image path
  },
  {
    id: 5,
    name: "Sarah Wilson",
    title: "Graduate Student",
    rating: 5,
    text: '"Incredible experience! My lost textbook was found and returned within days."',
    image: "/user (2).png", // Replace with actual image path
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="max-w-4xl mx-auto px-6 py-28  bg-white">
      {/* <div className="flex justify-between items-center mb-4">
        <a href="#" className="text-blue-600 hover:underline">
          Sign Up
        </a>
        <a href="#" className="text-blue-600 hover:underline">
          Join Us
        </a>
      </div> */}
      <div className="flex items-center">
        <div className="w-1/2 pr-4">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentTestimonial.id}
              src={currentTestimonial.image}
              alt={`${currentTestimonial.name}'s profile`}
              className="w-full h-auto"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>
        <div className="w-1/2 pl-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              className="space-y-2"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < currentTestimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-2">
                {currentTestimonial.text}
              </p>
              <p className="text-gray-900 font-semibold">
                {currentTestimonial.name}
              </p>
              <p className="text-gray-600 text-sm">
                {currentTestimonial.title}
              </p>
              <div className="flex justify-end mt-2 space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
