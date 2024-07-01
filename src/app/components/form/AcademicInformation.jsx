import React, { useState } from "react";

function AcademicInformation({ formData, handleChange }) {
  // const [formData, setFormData] = useState({
  //   institution: "",
  //   level_of_study: "",
  //   program_of_study: "",
  //   graduation_date: "",
  //   support_reason: [],
  //   part_time_work: "",
  //   reason_not_working: "",
  //   support_amount: "",
  //   payment_deadline: "",
  //   enrollment_confirmation: null,
  //   cert_name: "",
  //   cert_date: "",
  // });
  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]:
  //       type === "checkbox"
  //         ? checked
  //           ? [...prevData[name], value]
  //           : prevData[name].filter((item) => item !== value)
  //         : value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData); // For now, just logging the form data
  // };
  return (
    <div className="w-full md:w-1/2 md:ml-[25%]">
      <form
        action="#"
        method="post"
        // onSubmit={handleSubmit}
        // encType="multipart/form-data"
        classNameName="w-1/2"
      >
        <label className="text-white" htmlFor="institution">
          Name of Institution of study:
        </label>
        <input
          onChange={handleChange}
          value={formData.institution}
          type="text"
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white text-black"
          id="institution"
          name="institution"
          required
        />
        <br />
        <br />

        <label className="text-white" htmlFor="level_of_study">
          Level of study:
        </label>
        <input
          onChange={handleChange}
          value={formData.level_of_study}
          type="text"
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white text-black"
          id="level_of_study"
          name="level_of_study"
          required
        />
        <br />
        <br />

        <label className="text-white" htmlFor="program_of_study">
          Program of Study:
        </label>
        <input
          onChange={handleChange}
          value={formData.program_of_study}
          type="text"
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white text-black"
          id="program_of_study"
          name="program_of_study"
          required
        />
        <br />
        <br />

        <label className="text-white" htmlFor="graduation_date">
          Expected Graduation Date:
        </label>
        <input
          onChange={handleChange}
          value={formData.graduation_date}
          type="date"
          id="graduation_date"
          name="graduation_date"
          required
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white text-black"
        />
        <br />
        <br />

        <label className="text-white" htmlFor="enrolment_confirmation">
          Please upload confirmation of enrolment from institution in the UK
          (dated, not more than one week old) including:
        </label>
        <br />
        <input
          onChange={handleChange}
          value={formData.enrollment_confirmation}
          type="file"
          id="enrolment_confirmation"
          name="enrolment_confirmation"
          required
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white text-black"
        />
        <br />
        <br />

        <label className="text-white" htmlFor="support_reason">
          Why do you need support:
        </label>
        <br />
        <input
          onChange={handleChange}
          type="checkbox"
          id="support_tuition"
          name="support_reason"
          value="tuition"
        />
        <label className="text-white" htmlFor="support_tuition">
          Tuition
        </label>
        <br />
        <input
          onChange={handleChange}
          type="checkbox"
          id="support_accommodation"
          name="support_reason"
          value="accommodation"
        />
        <label className="text-white" htmlFor="support_accommodation">
          Accommodation
        </label>
        <br />
        <input
          onChange={handleChange}
          type="checkbox"
          id="support_other"
          name="support_reason"
          value="other"
        />
        <label className="text-white" htmlFor="support_other">
          Other
        </label>
        <br />
        <br />

        <label className="text-white" htmlFor="part_time_work">
          Do you currently work part-time?
        </label>
        <input
          onChange={handleChange}
          type="radio"
          id="part_time_work_yes"
          name="part_time_work"
          value="yes"
        />
        <label className="text-white" htmlFor="part_time_work_yes">
          Yes
        </label>
        <input
          onChange={handleChange}
          type="radio"
          id="part_time_work_no"
          name="part_time_work"
          value="no"
        />
        <label className="text-white" htmlFor="part_time_work_no">
          No
        </label>
        <br />
        <br />

        <label className="text-white" htmlFor="reason_not_working">
          If no, why?
        </label>
        <br />
        <textarea
          id="reason_not_working"
          name="reason_not_working"
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white text-black"
        ></textarea>
        <br />
        <br />

        <label className="text-white" htmlFor="support_amount">
          How much in GBP do you need for support? Please state in numbers £:
        </label>
        <input
          onChange={handleChange}
          value={formData.support_amount}
          type="number"
          id="support_amount"
          name="support_amount"
          required
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white text-black"
        />
        <br />
        <br />

        <label className="text-white" htmlFor="payment_deadline">
          Is there a deadline for payment?
        </label>
        <input
          onChange={handleChange}
          value={formData.payment_deadline}
          type="date"
          id="payment_deadline"
          name="payment_deadline"
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white text-black"
        />
        <br />
        <br />

        <h2 className="text-white">Certification</h2>
        <p className="text-white">
          By signing below, I certify that all information provided in this
          application is complete and accurate to the best of my knowledge. I
          understand that falsified statements could result in the termination
          of any financial support awarded.
        </p>
        <label className="text-white" htmlFor="cert_name">
          Name:
        </label>
        <input
          onChange={handleChange}
          value={formData.cert_name}
          type="text"
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white text-black"
          id="cert_name"
          name="cert_name"
          required
        />
        <br />
        <br />

        <label className="text-white" htmlFor="cert_date">
          Date:
        </label>
        <input
          onChange={handleChange}
          value={formData.cert_date}
          type="date"
          id="cert_date"
          name="cert_date"
          required
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white text-black"
        />
      </form>
    </div>
  );
}

export default AcademicInformation;
