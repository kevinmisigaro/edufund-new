import React, { useState } from "react";
import axios from "axios";
import { ScrollArea } from "@/components/ui/scroll-area";
import { alerter, trimLeadingPlus, trimLeadingZero } from "@/app/utils";
import CountrySelector from "../CountrySelector";

export const BASE_URL = "https://edufunddash.kibuti.co.tz/api/card-payment";

function DonationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    address: "",
    postalCode: "",
    amount: "",
    currency: "USD",
    countryCode: "",
    dialCode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleCountryChange = (selectedCountry) => {
    setFormData({
      ...formData,
      countryCode: selectedCountry.code,
      dialCode: selectedCountry.dialCode,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      amount: formData.amount,
      currency: formData.currency,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNo: `${trimLeadingPlus(formData.dialCode)}${trimLeadingZero(
        formData.phoneNo
      )}`,
      address: formData.address,
      countryCode: formData.countryCode,
      postalCode: formData.postalCode,
    };

    // const headers = {
    //   "Content-Type": "application/json",
    // };

    try {
      const response = await axios.post(BASE_URL, JSON.stringify(data));
      window.location.href = response.data.data.paymentUrl;
      alerter("You'll be redirect to a payment page");
      console.log("The response is: ", response);
    } catch (error) {
      alerter("Error submitting the form. Please try again.");
      console.error("Form submission error: ", error);
      console.log("The data you have submitted:", data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ScrollArea className="h-[36rem] border-none w-full rounded-md border">
        <div className="bg-neutral-900/90 dark:bg-gray-900 h-[30%]">
          <div className="w-full outline-none max-w-3xl mx-auto p-4 md:p-8">
            <div className="bg-neutral-900/90 dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
              <h1 className="text-2xl font-bold text-white dark:text-white mb-4">
                Donor's form
              </h1>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-white dark:text-white mb-2">
                  Contact Information
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-white dark:text-white mb-1"
                    >
                      First Name
                    </label>
                    <input
                      required
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full outline-none bg-neutral-500/90 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-white dark:text-white mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      required
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full outline-none bg-neutral-500/90 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="email"
                    className="block text-white dark:text-white mb-1"
                  >
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full outline-none bg-neutral-500/90 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mt-4">
                    <label
                      htmlFor="country"
                      className="block text-white dark:text-white mb-1"
                    >
                      Select your country
                    </label>
                    <CountrySelector onCountryChange={handleCountryChange} />
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="phoneNo"
                      className="block text-white dark:text-white mb-1"
                    >
                      Phone Number
                    </label>
                    <div className="flex">
                      <span className="bg-neutral-500/90 rounded-l-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none">
                        {formData.dialCode}
                      </span>
                      <input
                        required
                        type="text"
                        id="phoneNo"
                        value={formData.phoneNo}
                        onChange={handleChange}
                        className="w-full outline-none bg-neutral-500/90 rounded-r-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="address"
                    className="block text-white dark:text-white mb-1"
                  >
                    Address
                  </label>
                  <input
                    required
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full outline-none bg-neutral-500/90 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="postalCode"
                    className="block text-white dark:text-white mb-1"
                  >
                    Postal Code
                  </label>
                  <input
                    required
                    type="text"
                    id="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="w-full outline-none bg-neutral-500/90 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="amount"
                    className="block text-white dark:text-white mb-1"
                  >
                    Amount
                  </label>
                  <input
                    required
                    type="text"
                    id="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="w-full outline-none bg-neutral-500/90 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-col-reverse gap-y-4 md:gap-y-0 md:flex-row items-center justify-evenly">
                <button
                  type="submit"
                  className="bg-purple-600/50 text-white px-12 md:px-6 py-3 rounded-lg font-semibold shadow-lg transform transition-transform hover:scale-105 hover:bg-neutral-700/30 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900 flex items-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 12H4"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4l8 8-8 8"
                    ></path>
                  </svg>
                  Donate now
                </button>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </form>
  );
}

export default DonationForm;
