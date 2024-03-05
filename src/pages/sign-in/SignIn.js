import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SadeAdey from "../../assets/logos/luna-letter.png";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Function to handle input changes
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Function to validate email format
  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

const validatePassword = () => {
  const regexNumber = /\d/;
  const regexCapitalLetter = /[A-Z]/;
  const regexSpecialCharacter = /[!@#$%^&*]/;
  const minLength = 6;
  const maxLength = 12;

  if (password.length < minLength || password.length > maxLength) {
    setPasswordError("Password must be between 6 to 12 characters in length.");
  } else if (!regexNumber.test(password) || !regexCapitalLetter.test(password) || !regexSpecialCharacter.test(password)) {
    setPasswordError("Password must contain at least one number, one capital letter, one special character.");
  } else {
    setPasswordError("");
  }
};



  // Check if both email and password are valid
  const isValid = emailError === "" && passwordError === "";

  // stagger motion animation
  const containerMotion = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  // animation parameters for IMAGE
  const textMotion = {
    // movement = FADE-IN + SLIDE DOWN
    hidden: { opacity: 0, y: -50 }, // INITIAL STAGE
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: "easeInOut" },
    }, // ANIMATION STAGE
  };

  return (
    <motion.div
      className="flex flex-col items-center min-h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerMotion}
    >
      {/* LOGO + Title */}
      <div className="sm:mx-auto  sm:w-full sm:max-w-sm">
        <motion.span variants={textMotion}>
          <Link to="/">
            <img
              className="mx-auto h-18 w-auto"
              src={SadeAdey}
              alt="Company Logo"
            />
          </Link>
        </motion.span>
        <motion.h2
          className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
          variants={textMotion}
        >
          Sign in to your account
        </motion.h2>
      </div>

      {/* Input Section */}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          {/* Email Address */}
          <motion.div variants={textMotion}>
            {/* Text Label */}
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email Address
            </label>

            {/* Text Input */}
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="your email address"
                value={email}
                onChange={handleEmailChange}
                onBlur={validateEmail}
                required
                className={`block w-full rounded-md border-0 py-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm text-lg sm:leading-6 ${
                  emailError && "border-red-500"
                }`}
              />
              {emailError && (
                <p className="mt-2 text-sm text-red-500">{emailError}</p>
              )}
            </div>
          </motion.div>

          {/* Password */}
          <motion.div variants={textMotion}>
            <div className="flex items-center justify-between">
              {/* Text Label */}
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>

              {/* Forgot Password Link */}
              <div className="text-sm">
                <Link
                  to="/error/"
                  className="font-semibold text-gray-600 hover:text-gray-500"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* Text Input */}
            <div className="mt-2">
              <input
                id="password"
                // name="password"
                type="password"
                autoComplete="current-password"
                placeholder="************"
                value={password}
                onChange={handlePasswordChange}
                onBlur={validatePassword}
                required
                className={`block w-full rounded-md border-0 py-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm text-lg sm:leading-6 ${
                  passwordError && "border-red-500"
                }`}
              />
              {passwordError && (
                <p className="mt-2 text-sm text-red-500">{passwordError}</p>
              )}
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={textMotion}>
            <button
              type="submit"
              disabled={!isValid}
              className={`flex w-full justify-center rounded-md bg-gray-900 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-md hover:shadow-lg hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 ${
                !isValid && "opacity-50 cursor-not-allowed"
              }`}
            >
              Sign In
            </button>
          </motion.div>
        </form>

        {/* SIGN UP Link */}
        <motion.p
          className="mt-10 text-center text-sm text-gray-500"
          variants={textMotion}
        >
          Not a member?{" "}
          <Link
            to="/error/"
            className="font-semibold leading-6 text-gray-600 hover:text-transparent bg-clip-text bg-gradient-to-l from-gray-500 to-gray-500"
          >
            Join today for free.
          </Link>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default SignIn;
