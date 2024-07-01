import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
function PersonalInformation({ formData, handleChange }) {
  // const [formData, setFormData] = useState({
  //   title: "",
  //   surname: "",
  //   firstname: "",
  //   othernames: "",
  //   sex: "",
  //   dob: "",
  //   marital_status: "",
  //   address: "",
  //   phone: "",
  //   email: "",
  //   disability: "",
  //   disability_details: "",
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
        <label className="text-white" htmlFor="title">
          Title:
        </label>
        <input
          onChange={handleChange}
          value={formData.title}
          type="text"
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          id="title"
          name="title"
          required
        />
        <br />
        <br />

        <label className="text-white" htmlFor="surname">
          Surname:
        </label>
        <input
          onChange={handleChange}
          value={formData.surname}
          type="text"
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          id="surname"
          name="surname"
          required
        />
        <br />
        <br />

        <label className="text-white" htmlFor="firstname">
          First name:
        </label>
        <input
          onChange={handleChange}
          value={formData.firstname}
          type="text"
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          id="firstname"
          name="firstname"
          required
        />
        <br />
        <br />

        <label className="text-white" htmlFor="othernames">
          Other names:
        </label>
        <input
          onChange={handleChange}
          value={formData.othernames}
          type="text"
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          id="othernames"
          name="othernames"
        />
        <br />
        <br />

        <label className="text-white" htmlFor="sex">
          Sex:
        </label>
        <input
          onChange={handleChange}
          value={formData.sex}
          type="text"
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          id="sex"
          name="sex"
          required
        />
        <br />
        <br />

        <label className="text-white" htmlFor="dob">
          Date of Birth:
        </label>
        <input
          onChange={handleChange}
          value={formData.dob}
          type="date"
          id="dob"
          name="dob"
          required
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
        />
        <br />
        <br />

        <label className="text-white" htmlFor="marital_status">
          Marital status:
        </label>
        <input
          onChange={handleChange}
          value={formData.marital_status}
          type="text"
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          id="marital_status"
          name="marital_status"
          required
        />
        <br />
        <br />

        <label className="text-white" htmlFor="address">
          Address:
        </label>
        <input
          onChange={handleChange}
          value={formData.address}
          type="text"
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          id="address"
          name="address"
          required
        />
        <br />
        <br />

        <label className="text-white" htmlFor="phone">
          Phone Number:
        </label>
        <input
          onChange={handleChange}
          value={formData.phone}
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          required
        />
        <br />
        <br />

        <label className="text-white" htmlFor="email">
          Email Address:
        </label>
        <input
          onChange={handleChange}
          value={formData.email}
          type="email"
          id="email"
          name="email"
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          required
        />
        <br />
        <br />

        <label className="text-white" htmlFor="disability">
          Do you identify as having a disability:
        </label>
        <br />
        <input
          onChange={handleChange}
          type="radio"
          id="disability_yes"
          name="disability"
          value="yes"
        />
        <label className="text-white" htmlFor="disability_yes">
          Yes
        </label>
        <input
          onChange={handleChange}
          value={formData.disability}
          type="radio"
          id="disability_no"
          name="disability"
        />
        <label className="text-white" htmlFor="disability_no">
          No
        </label>
        <br />
        <br />

        <label className="text-white" htmlFor="disability_details">
          If yes, please state here:
        </label>
        <br />
        <textarea
          id="disability_details"
          name="disability_details"
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
        ></textarea>
        <br />
        <br />

        <br />
        <br />
        {/* <TabsTrigger value="AcademicInformation"> */}
        <a className="button-2" href="#">
          <span className="button-2__icon-wrapper">
            <svg
              width="10"
              class="button-2__icon-svg"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 15"
            >
              <path
                fill="currentColor"
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              ></path>
            </svg>

            <svg
              className="button-2__icon-svg  button-2__icon-svg--copy"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              fill="none"
              viewBox="0 0 14 15"
            >
              <path
                fill="currentColor"
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              ></path>
            </svg>
          </span>
          Next
        </a>
        {/* </TabsTrigger> */}
      </form>
    </div>
  );
}

export default PersonalInformation;
