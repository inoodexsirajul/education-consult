import React from "react";

export default function CounselingSection() {
  return (
    <>
      <section className="py-16 bg-linear-to-b from-blue to-gold">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Who Can Benefit */}
            <div className="space-y-10">
              <h2 className="text-4xl font-bold text-white font-mont">
                Who Can Benefit from Our Counselling Services?
              </h2>

              <div className="space-y-6">
                {[
                  "High school graduates planning to start their tertiary education in Australia.",
                  "University students seeking course or provider changes",
                  "Diploma/TAFE students looking to pathway into university degrees",
                  "Parents and guardians seeking professional guidance for their children's future",
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 bg-linear-to-br from-[#c3a25d] to-[#b8934e]  rounded-lg flex items-center justify-center">
                      <div className="w-5 h-5 bg-[#283e77] rounded-sm"></div>
                    </div>
                    <p className="text-sm text-white leading-relaxed   font-mont">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Registration Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100">
              <h3 className="text-2xl font-bold text-blue mb-8 text-center font-mont">
                Register with Us to Take the Next Step
              </h3>

              <form className="space-y-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-mont">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c3a25d] focus:border-transparent transition"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="font-mont block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c3a25d] focus:border-transparent transition"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className="font-mont block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c3a25d] focus:border-transparent transition"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div className="mt-5">
                  <label className=" font-mont block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number
                  </label>
                  <div className="flex">
                    <span className="inline-flex font-mont items-center px-4 py-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-gray-600">
                      +880
                    </span>
                    <input
                      type="tel"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-[#c3a25d] focus:border-transparent transition"
                      placeholder="1700 000 000"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className="block text-sm font-mont font-medium text-gray-700 mb-2">
                    Your Nearest PTECC Office
                  </label>
                  <select className="w-full px-4 py-3 border text-blue border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c3a25d] focus:border-transparent transition">
                    <option>Select office</option>
                    <option>Dhaka</option>
                    <option>Chattogram</option>
                    <option>Sylhet</option>
                  </select>
                </div>

                <div className="mt-5">
                  <label className="block text-sm font-mont font-medium text-gray-700 mb-2">
                    Your Preferred Study Destination
                  </label>
                  <select className="w-full px-4 py-3 text-blue border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c3a25d] focus:border-transparent transition">
                    <option>Australia</option>
                    <option>Canada</option>
                    <option>UK</option>
                    <option>USA</option>
                  </select>
                </div>

                <div className="mt-5">
                  <label className="block font-mont text-sm font-medium text-gray-700 mb-2">
                    English Language Test Status
                  </label>
                  <select className="w-full px-4 py-3 text-blue font-mont border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c3a25d] focus:border-transparent transition">
                    <option>Not taken yet</option>
                    <option>IELTS</option>
                    <option>PTE</option>
                    <option>TOEFL</option>
                  </select>
                </div>

                <div className="mt-5">
                  <label className="block text-sm font-medium font-mont text-gray-700 mb-2">
                    How do you plan to fund your studies
                  </label>
                  <select className="w-full px-4 py-3 border font-mont text-blue border-gray-300 rounded-lg   transition">
                    <option>Self-funded</option>
                    <option>Scholarship</option>
                    <option>Education Loan</option>
                    <option>Family Support</option>
                  </select>
                </div>

                <div className="mt-8 flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 text-gold   border-gray-300 rounded"
                  />
                  <label htmlFor="terms" className="ml-3 text-sm text-gray-600">
                    By clicking, you agree to our{" "}
                    <a
                      href="#"
                      className="text-[#283e77] font-medium hover:underline"
                    >
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-[#283e77] font-medium hover:underline"
                    >
                      Terms & Conditions
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-8 w-full bg-gradient-to-r from-[#283e77] to-[#1e2d5a] text-white font-bold py-4 rounded-lg hover:from-[#1e2d5a] hover:to-[#17224d] transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
