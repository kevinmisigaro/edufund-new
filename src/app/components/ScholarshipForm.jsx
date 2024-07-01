import React, { useState } from "react";

function ScholarshipForm() {
  const [consent, setConsent] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    surname: "",
    firstName: "",
    otherNames: "",
    sex: "",
    dob: "",
    maritalStatus: "",
    address: "",
    phoneNumber: "",
    emailAddress: "",
    disability: "",
    disabilityDetails: "",
    institution: "",
    levelOfStudy: "",
    programOfStudy: "",
    expectedGraduationDate: "",
    confirmationOfEnrolment: null,
    supportNeeded: "",
    partTimeWork: "",
    partTimeWorkReason: "",
    supportAmount: "",
    paymentDeadline: "",
    certificationName: "",
    certificationDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Consent</h2>
        <label>
          <input
            type="radio"
            name="consent"
            value="yes"
            checked={consent === true}
            onChange={() => setConsent(true)}
          />{" "}
          Yes
        </label>{" "}
        <label>
          <input
            type="radio"
            name="consent"
            value="no"
            checked={consent === false}
            onChange={() => setConsent(false)}
          />{" "}
          No
        </label>
      </div>
      {consent && (
        <div>
          <h2>Personal Information</h2>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </label>
          {/* Add other personal information fields */}
          {/* Add academic information fields */}
          {/* Add certification fields */}
          <button type="submit">Submit</button>
        </div>
      )}
    </form>
  );
}

export default ScholarshipForm;
