import React from "react";

const Form = () => {
  return (
    <>
      <div className="bg-white rounded-2xl shadow-xl p-4 lg:p-6 border border-gray-100">
        <h3 className="text-2xl font-bold text-blue mb-4 text-center font-mont">
          Register with Us to Take the Next Step
        </h3>

        <form className="space-y-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 font-mont">
                First Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-1.5 border border-gray-300 rounded-lg text-black  font-mont focus:border-transparent transition"
                placeholder="John"
              />
            </div>
            <div>
              <label className="font-mont block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-1.5 border border-gray-300 rounded-lg text-black font-mont   focus:border-transparent transition"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="mt-2">
            <label className="font-mont block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-1.5 border border-gray-300 rounded-lg text-black  font-mont  focus:border-transparent transition"
              placeholder="john.doe@example.com"
            />
          </div>

          <div className="mt-2">
            <label className=" font-mont block text-sm font-medium text-gray-700 mb-2">
              Mobile Number
            </label>
            <div className="flex">
              <span className="inline-flex font-mont items-center px-4 py-1.5 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-gray-600">
                +880
              </span>
              <input
                type="tel"
                className="flex-1 px-4 py-1.5 border border-gray-300 rounded-r-lg font-mont text-black   focus:border-transparent transition"
                placeholder="1700 000 000"
              />
            </div>
          </div>

          <div className="mt-2">
            <label className="block text-sm font-mont font-medium text-gray-700 mb-2">
              Your Nearest PTECC Office
            </label>
            <select className="w-full px-4 py-1.5 border text-blue font-mont border-gray-300  rounded-lg focus:border-transparent transition">
              <option>Select office</option>
              <option>Dhaka</option>
              <option>Chattogram</option>
              <option>Sylhet</option>
            </select>
          </div>

          <div className="mt-2">
            <label className="block text-sm font-mont font-medium text-gray-700 mb-1">
              Your Preferred Study Destination
            </label>
            <select className="w-full px-4 py-1.5 text-blue border font-mont border-gray-300 rounded-lg  focus:border-transparent transition">
              <option>Australia</option>
              <option>Canada</option>
              <option>UK</option>
              <option>USA</option>
            </select>
          </div>

          <div className="mt-2">
            <label className="block font-mont text-sm font-medium text-gray-700 mb-2">
              English Language Test Status
            </label>
            <select className="w-full px-4 py-1.5 text-blue font-mont border border-gray-300 rounded-lg  focus:border-transparent transition">
              <option>Not taken yet</option>
              <option>IELTS</option>
              <option>PTE</option>
              <option>TOEFL</option>
            </select>
          </div>

          <div className="mt-2">
            <label className="block text-sm font-medium font-mont text-gray-700 mb-2">
              How do you plan to fund your studies
            </label>
            <select className="w-full px-4 py-1.5 border font-mont text-blue border-gray-300 rounded-lg   transition">
              <option>Self-funded</option>
              <option>Scholarship</option>
              <option>Education Loan</option>
              <option>Family Support</option>
            </select>
          </div>

          <div className="mt-2 flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-gold   border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-3 text-sm text-gray-600">
              By clicking, you agree to our{" "}
              <a href="#" className="text-blue font-medium hover:underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue font-medium hover:underline">
                Terms & Conditions
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="mt-8 w-full bg-linear-to-r from-blue to-[#1e2d5a] text-white font-bold py-4 rounded-lg hover:from-[#1e2d5a] hover:to-[#17224d] transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
