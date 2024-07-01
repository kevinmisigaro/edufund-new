import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import PersonalInformation from "./form/PersonalInformation";
import AcademicInformation from "./form/AcademicInformation";

function TabsDemo() {
  const [personalData, setPersonalData] = useState({
    title: "",
    surname: "",
    firstname: "",
    othernames: "",
    sex: "",
    dob: "",
    marital_status: "",
    address: "",
    phone: "",
    email: "",
    disability: "",
    disability_details: "",
  });

  const [academicData, setAcademicData] = useState({
    institution: "",
    level_of_study: "",
    program_of_study: "",
    graduation_date: "",
    support_reason: [],
    part_time_work: "",
    reason_not_working: "",
    support_amount: "",
    payment_deadline: "",
    enrollment_confirmation: null,
    cert_name: "",
    cert_date: "",
  });

  const handlePersonalChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPersonalData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox"
          ? checked
            ? [...prevData[name], value]
            : prevData[name].filter((item) => item !== value)
          : value,
    }));
  };

  const handleAcademicChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAcademicData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox"
          ? checked
            ? [...prevData[name], value]
            : prevData[name].filter((item) => item !== value)
          : value,
    }));
    console.log("academic data:" + JSON.stringify(academicData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const combinedData = { ...personalData, ...academicData };
    console.log(combinedData);
    // Send combinedData to your API or handle it as needed
  };

  return (
    <div className="w-[70%] mx-[15%] relative isolate pt-[6em]">
      <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-[40%] mx-[30%] mb-12 grid-cols-2 rounded-full">
          <TabsTrigger value="account" className="ml-2 rounded-full">
            Personal information
          </TabsTrigger>
          <TabsTrigger value="password" className="ml-2 rounded-full">
            Academic information
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <PersonalInformation
            formData={personalData}
            handleChange={handlePersonalChange}
          />
        </TabsContent>
        <TabsContent value="password">
          <AcademicInformation
            formData={academicData}
            handleChange={handleAcademicChange}
          />
        </TabsContent>
      </Tabs>
      <div>
        <div className="mt-4 w-full flex items-center justify-center my-4">
          <Button onClick={handleSubmit} className="">Save all changes</Button>
        </div>
      </div>
      <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
    </div>
  );
}

export default TabsDemo;
