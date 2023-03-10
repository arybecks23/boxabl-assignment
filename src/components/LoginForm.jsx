import React from "react";

const LoginForm = () => {
  return (
    <div className="bg-gray-200 h-screen grid place-items-center">
      <div className="w-2/5">
        <h1 className="text-2xl text-boxabl-blue text-center font-semibold">
          SECRET DASHBOARD
        </h1>
        <div className="bg-white rounded-lg shadow-md m-5">
          <form className="p-8">
            <h1 className="text-center text-3xl">Log In</h1>
            <label for="email-input" className="block text-gray-300 mt-5">
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="email-input"
              className="block  border border-gray-200 w-full rounded-md p-3 mb-4"
            />
            <label for="password-input" className="block text-gray-300 mt-5">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password-input"
              className="block border border-gray-200 w-full rounded-md p-3 mb-4"
            />
            <input
              type="submit"
              value="Log In"
              className="block bg-boxabl-orange text-white w-full rounded-md p-3 mb-4 mt-9"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
