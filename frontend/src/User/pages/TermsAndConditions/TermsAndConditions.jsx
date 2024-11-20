import React, { useState } from 'react';

const TermsAndConditions = () => {
  const [isExpanded, setIsExpanded] = useState({});

  const toggleSection = (index) => {
    setIsExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 to-blue-900 text-white p-6 md:p-10 rounded-lg shadow-lg">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-yellow-300">Terms and Conditions for VWoC</h1>
      <p className="mb-6 text-lg">
        Welcome to the VWoC (Vigybag Winter of Code) program! By participating in this program, you agree to the following terms and conditions. Your understanding and compliance are essential for a successful experience.
      </p>
      {[
        {
          title: "1. Acceptance of Terms",
          content: "By participating in VWoC, you accept and agree to be bound by these terms and conditions. If you do not agree to these terms, please do not participate."
        },
        {
          title: "2. Eligibility",
          content: "The VWoC program is open to all individuals who are interested in contributing to open-source projects. Participants must be at least 18 years old or have parental consent."
        },
        {
          title: "3. Code of Conduct",
          content: "Participants are expected to adhere to a code of conduct that promotes respect, inclusivity, and collaboration. Any form of harassment or discrimination will not be tolerated."
        },
        {
          title: "4. Intellectual Property",
          content: "All contributions made during the VWoC program will be licensed under an open-source license. Participants retain ownership of their contributions but grant VWoC the right to use and distribute them."
        },
        {
          title: "5. Limitation of Liability",
          content: "VWoC is not liable for any damages or losses incurred as a result of participation in the program. Participants engage at their own risk."
        },
        {
          title: "6. Changes to Terms",
          content: "VWoC reserves the right to modify these terms and conditions at any time. Participants will be notified of any changes, and continued participation constitutes acceptance of the new terms."
        },
        {
          title: "7. Contact Information",
          content: "For any questions or concerns regarding these terms and conditions, please contact us at support@vowc.org."
        }
      ].map((section, index) => (
        <div key={index} className="mb-6 p-4 bg-gray-800 rounded-lg shadow-md">
          <h2 
            className="text-2xl font-bold mb-2 cursor-pointer hover:text-yellow-300 transition duration-300" 
            onClick={() => toggleSection(index)}
          >
            {section.title}
          </h2>
          {isExpanded[index] && <p className="mb-4 text-lg">{section.content}</p>}
        </div>
      ))}
      <p className="mt-8 text-center text-lg">
        Thank you for your interest in VWoC! We look forward to your contributions.
      </p>
    </div>
  );
};

export default TermsAndConditions;
