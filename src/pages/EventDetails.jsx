import { ArrowRight, Phone, GraduationCap } from "lucide-react";

import detailimg from "../assets/destinations/detials1.webp";
import livingCost from "../assets/destinations/living-cost.png";
import uni1 from "../assets/partner/1.png";
import uni2 from "../assets/partner/2.png";
import uni3 from "../assets/partner/3.png";
import uni4 from "../assets/partner/4.png";
import uni5 from "../assets/partner/5.png";
import uni6 from "../assets/partner/6.png";
import uni7 from "../assets/partner/7.png";
import uni8 from "../assets/partner/8.png";
import uni9 from "../assets/partner/9.png";
import uni10 from "../assets/partner/10.png";
import BlogHeroSection from "../components/blog/BlogHeroSection";
export default function EventDetails() {
  const universites = [
    {
      id: 1,
      img: uni1,
    },
    {
      id: 2,
      img: uni2,
    },
    {
      id: 3,
      img: uni3,
    },
    {
      id: 4,
      img: uni4,
    },
    {
      id: 5,
      img: uni5,
    },
    {
      id: 6,
      img: uni6,
    },
    {
      id: 7,
      img: uni7,
    },
    {
      id: 8,
      img: uni8,
    },
    {
      id: 9,
      img: uni9,
    },
    {
      id: 10,
      img: uni10,
    },
  ];
  return (
    <>
      <BlogHeroSection />
      {/* all content goes here  */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <div>
              <h4 className="text-blue text-xl font-semibold font-mont">
                Study in New Zealand for Bangladeshi Students
              </h4>
              <p className="text-black/80 font-mont text-sm mt-4">
                New Zealand has become one of the world’s most desirable study
                destinations, offering world-class education, stunning natural
                landscapes, and exceptional post-study work opportunities. With
                international student enrolments growing by 14% in universities
                and reaching 73,535 students between January-August 2024, New
                Zealand provides Bangladeshi students with access to globally
                recognized degrees in a safe, multicultural environment.
              </p>
              <p className="text-black/70">
                The country’s education system is renowned for its
                research-oriented approach, student-focused learning, and
                practical application. New Zealand hosts 8 universities, all
                ranking among the top 500 globally, with institutions
                consistently performing well in international rankings. The
                nation’s commitment to international education excellence,
                combined with its English-speaking environment and innovative
                teaching methods, makes it an ideal destination for Bangladeshi
                students seeking transformative educational experiences.
              </p>
            </div>
            <img src={detailimg} alt="" />
            <div className="mt-4">
              <h4 className="text-blue text-xl font-semibold font-mont">
                Why Study in New Zealand?
              </h4>
              <div>
                <h5 className="text-black font-bold text-xs font-mont mt-4">
                  World-Class Education Excellence
                </h5>
                <p className="text-black/80 font-mont text-sm mt-2">
                  New Zealand has become one of the world’s most desirable study
                  destinations, offering world-class education, stunning natural
                  landscapes, and exceptional post-study work opportunities.
                  With international student enrolments growing by 14% in
                  universities and reaching 73,535 students between
                  January-August 2024, New Zealand provides Bangladeshi students
                  with access to globally recognized degrees in a safe,
                  multicultural environment.
                </p>
              </div>
              <div className="mt-3">
                <h5 className="text-black font-bold text-xs font-mont mt-4">
                  World-Class Education Excellence
                </h5>
                <p className="text-black/80 font-mont text-sm mt-2">
                  New Zealand has become one of the world’s most desirable study
                  destinations, offering world-class education, stunning natural
                  landscapes, and exceptional post-study work opportunities.
                  With international student enrolments growing by 14% in
                  universities and reaching 73,535 students between
                  January-August 2024, New Zealand provides Bangladeshi students
                  with access to globally recognized degrees in a safe,
                  multicultural environment.
                </p>
              </div>
            </div>

            {/* cost of australia  */}
            <div className="mt-4">
              <h4 className="text-blue text-xl font-semibold font-mont">
                Cost of Studying in Australia
              </h4>
              <p className="text-black/80 font-mont text-sm mt-2">
                Australia offers a variety of degree programs tailored to the
                needs of Bangladeshi students. With numerous scholarships
                available, the process of studying is made more accessible. The
                costs of accommodation, groceries, and transportation are also
                relatively low. Thus, Australia is an attractive destination for
                education.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="bg-blue/80 p-4 rounded-lg text-white">
                  <h5 className="font-mont font-bold text-lg">Bachelor's</h5>
                  <p> 20,000 - 35,000 AUD</p>
                </div>
                <div className="bg-blue/80 p-4 rounded-lg text-white">
                  <h5 className="font-mont font-bold text-lg">Bachelor's</h5>
                  <p> 20,000 - 35,000 AUD</p>
                </div>
                <div className="bg-blue/80 p-4 rounded-lg text-white">
                  <h5 className="font-mont font-bold text-lg">Bachelor's</h5>
                  <p> 20,000 - 35,000 AUD</p>
                </div>
              </div>
            </div>
            {/* Cost of Living in Australia  */}
            <div className="mt-4">
              <h4 className="text-blue text-xl font-semibold font-mont">
                Cost of Living in Australia
              </h4>
              <p className="text-black/80 font-mont text-sm mt-2">
                Costs are often a concern for Bangladeshi students studying
                abroad. However, the cost of living in Australia is generally
                lower compared to many other countries worldwide. Aside from
                tuition fees, accommodation is often the most significant
                expense. Fortunately, Bangladeshi communities provide
                considerable support in various ways. You will find fellow
                countrymen both on your campus and in the job sector, which can
                help you save money during your studies. Some universities even
                offer on-campus accommodation, making the process simpler.
              </p>
              <p className="text-black/80 font-mont text-sm mt-2">
                Transportation costs should also be considered, but public
                transportation is usually the most economical option. Cooking at
                home can lead to significant savings on food expenses. For books
                and other study materials, utilizing libraries is often the best
                choice.
              </p>
              <div className="mt-4">
                <img src={livingCost} alt="" />
              </div>
            </div>
            {/* Admission Requirements for Studying in Australia  */}
            <div className="mt-4">
              <h4 className="text-blue text-xl font-semibold font-mont">
                Admission Requirements for Studying in Australia
              </h4>
              <p className="text-black/80 font-mont text-sm mt-2">
                English is not the native language in Bangladesh, and most
                studies in the country are conducted in the native Bangla
                language. Therefore, Bangladeshi students must present a
                language proficiency test when applying to Australian
                universities. To gain admission to Australia, you must submit
                proof of language proficiency. Most universities allow students
                to choose from various language tests, including the
                International English Language Testing System (IELTS) and the
                Test of English as a Foreign Language (TOEFL). The Pearson Test
                of English (PTE) and Cambridge English: Advanced tests are also
                accepted. Generally, a score of 6.5 on the IELTS or 79 on the
                TOEFL is required, although these requirements may vary
                depending on the chosen subjects. These English language tests
                are specifically designed for countries where English is not the
                native language. If you are interested in applying to Australia,
                it is advisable to take the language tests as early as possible.
              </p>
              <div className="mt-4 w-full shadow-lg rounded-lg overflow-hidden border border-gray-200">
                <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
                  <thead className="bg-blue text-white">
                    <tr>
                      <th className="text-left py-3 px-8 text-md font-semibold font-mont">
                        English Language Test
                      </th>
                      <th className="text-left py-3 px-8   font-semibold font-mont text-md">
                        Required Score
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition duration-200">
                      <td className="py-3 px-8 font-semibold text-gray-800 font-mont text-md">
                        IELTS
                      </td>
                      <td className="py-3 px-8 text-gray-700 font-mont text-md">
                        Minimum overall band of 6.5 (with no individual band
                        below 6.0)
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition duration-200">
                      <td className="py-3 px-8 font-semibold text-gray-800 font-mont text-md">
                        TOEFL
                      </td>
                      <td className="py-3 px-8 text-gray-700 text-md font-mont">
                        TOEFL (Internet Based Test - IBT): minimum overall score
                        of 79 (with minimum of 13 in Reading, 12 in Listening,
                        18 in Speaking and 21 in Writing)
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition duration-200">
                      <td className="py-5 px-8 font-semibold text-gray-800 font-mont">
                        PTE
                      </td>
                      <td className="py-5 px-8 text-gray-700 font-mont">
                        overall score of 58 (with no communication band less
                        than 50)
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition duration-200">
                      <td className="py-5 px-8 font-semibold text-gray-800 font-mont">
                        CAE (C1 Advanced Exam)
                      </td>
                      <td className="py-5 px-8 text-gray-700 font-mont">
                        You will require a minimum score of 169-176 while
                        scoring a minimum of 169 in every section
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/*  Visa Requirements  */}
            <div className="mt-4">
              <h4 className="text-blue text-xl font-semibold font-mont">
                Visa Requirements
              </h4>
              <p className="text-black/80 font-mont text-sm mt-2">
                The visa application rate for Bengali students wishing to study
                in Australia is relatively high. It is essential to apply for
                your visa at least three months before your intended travel
                date, as the processing time typically exceeds one month.
              </p>
              <p className="text-black/80 font-mont text-sm mt-2">
                When applying for an Australian visa, you will need to submit
                several important documents. First, ensure you have a valid
                passport. You will also need an acceptance letter from your
                university. The Genuine Student (GS) statement is crucial, as it
                demonstrates your suitability for studying in Australia and your
                commitment as a student. Additionally, proof of funds is
                essential to show that you can support yourself financially
                during your stay.
              </p>
              <p className="text-black/80 font-mont text-sm mt-2">
                You will also need to provide evidence of Overseas Student
                Health Cover (OSHC), which is health insurance that protects you
                in case of any unfortunate circumstances. Furthermore, your
                academic transcripts and any relevant work experience will be
                required. Lastly, as a Bangladeshi student, you will need to
                include a statement of purpose with your visa application.
              </p>
              <div className="mt-4">
                <ol
                  type="number"
                  className="  list-decimal list-inside space-y-1 font-mont text-sm text-gray-800 font-normal marker:text-gold marker:font-bold"
                >
                  <li>Valid Passport</li>
                  <li>
                    Confirmation of Enrolment (CoE) from your chosen university
                  </li>
                  <li>GS Statement (Genuine Student Statement)</li>
                  <li>Proof of sufficient funds</li>
                  <li>Overseas Student Health Cover (OSHC)</li>
                  <li>English proficiency proof</li>
                  <li>Recent passport-sized photographs</li>
                  <li>Statement of Purpose (SOP)</li>
                  <li>Academic and work experience documents</li>
                </ol>
              </div>
            </div>

            {/* Partner Institutions in Australia Universities  */}
            <div className="mt-4">
              <h4 className="text-blue text-xl font-semibold font-mont">
                Partner Institutions in Australia <br /> Universities
              </h4>

              <div className="mt-4">
                <div className="grid grid-cols-3 gap-2">
                  {universites.map((image) => (
                    <div key={image.id} className="">
                      <img src={image.img} alt={image.img} className="w-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Partner Institutions in Australia Universities  */}
            <div className="mt-4">
              <h4 className="text-blue text-xl font-semibold font-mont">
                University Pathways
              </h4>

              <div className="mt-4">
                <div className="grid grid-cols-3 gap-2">
                  {universites.map((image) => (
                    <div key={image.id} className="">
                      <img src={image.img} alt={image.img} className="w-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Partner Institutions in Australia Universities  */}
            <div className="mt-4">
              <h4 className="text-blue text-xl font-semibold font-mont">
                Private College / Higher Education
              </h4>

              <div className="mt-4">
                <div className="grid grid-cols-3 gap-2">
                  {universites.map((image) => (
                    <div key={image.id} className="">
                      <img src={image.img} alt={image.img} className="w-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
