import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import "./Faqs.css"; // Import the CSS file

const faqs = [
  {
    question: "What kind of talent can I hire through your platform?",
    answer:
      "We provide pre-vetted professionals for roles such as Virtual Assistants, Web Developers, IT Support Specialists, and more.",
  },
  {
    question: "How do I register for a course?",
    answer:
      'Visit our "Start Learning" page, choose a career track, and fill in your details. We\'ll guide you through the process.',
  },
  {
    question: "What if the person I hire doesn’t work out?",
    answer:
      "We offer a 14-day free replacement guarantee to ensure you find the right fit for your team.",
  },
  {
    question: "Can I interview candidate before making a decision?",
    answer:
      "Yes, absolutely. We would also conduct our own interview first then connect with shortlisted candidates so you can schedule interviews directly. This helps you assess their skills, experience, and fit for your role before making a hiring decision"
  },
  {
    question: "Do you offer bulk hiring solutions for companies?",
    answer:
      "Yes. If you need to hire multiple candidates at once, we provide tailored bulk hiring solutions. Whether it's for entry-levels roles, seasonal projects, or specialized teams, we'll work closely with you to streamline the process and deliver qualified candidate efficiently"
  },
  {
    question: "How long does it usually take to get matched with a candidate?",
    answer:
      "The matching process depends on your requirements. For employers, many roles recieve qualified applicants within a few days of posting. For Job seekers, it depends on the demand for your skills and how well your profile aligns with available jobs. In most cases, matches happen faster when profiles are complete and detailed"
  },
  {
    question: "Does Remotehub provide additional support?",
    answer:
      "Yes. Upon completion of the hiring process, a dedicated customer success manager will be assigned to you. Their responsibility is to provide ongoing support, address any issues that may arise, and ensure the effective integration of your new team member by sharing best practices and guidance throughout the engagement"
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              {/* Question */}
              <button
                className="faq-question"
                onClick={() => toggle(index)}
              >
                <span>{faq.question}</span>
                <span
                  className={`faq-icon ${openIndex === index ? "open" : ""}`}
                >
                  {openIndex === index ? <HiChevronUp /> : <HiChevronDown />}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`faq-answer ${
                  openIndex === index ? "show" : ""
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
