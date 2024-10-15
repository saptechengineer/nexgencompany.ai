"use client";

import { useRef, useState } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "What do I get exactly?",
    answer: <div className="space-y-2 leading-relaxed">
      ✨ When you hire our Enterprise Engineers, 
      you will get free assessment of your system and business requirements 
      by our Nexgen Enterprise Tech Lead

      <br/>
      <br/>
      ✨ Our NexGen Engineers will Develop your Business requirements, 
      do end-to-end testing, deploy till production

      <br/>
      <br/>
      ✨ We support 2 weeks of hypercare post production deployment
      
    </div>,
  },
  {
    question: "What is NexGen's tech stack expertise?",
    answer: (
      <p>
        ✨ SAP BTP (Cloud Foundry, Kyma)
        <br/>
        <br/>

        ✨ SAP BTP Administration, Cloud DevOps
        <br/>
        <br/>

        ✨ SAP BTP CAP Development (NodeJS)
        <br/>
        <br/>

        ✨ Integration (Event Mesh, Kafka, Solace, CPI)
        <br/>
        <br/>

        ✨ Data Engineering (HANA Cloud, PostgreSQL, Azure DL, AWS S3, SDI, BODS, CPI-DS)
        <br/>
        <br/>       

        ✨ SAP Core (ABAP)
        <br/>
        <br/>

        ✨ Microsoft Power Platform (Power Apps, Power Automate, Logic Apps, Power BI)
        <br/>
        <br/>        

        ✨ Gen AI (Business AI apps - MS OpenAI, Hugging Face Models, RAG)
        <br/>
        <br/>

        ✨ Programming - NodeJS, Python, TypeScript
        <br/>
        <br/>        

        ✨ UI/UX (FIORI, React, NextJS)
        <br/>
        <br/>                                                                    
      </p>
    ),
  },
  {
    question: "I have another question",
    answer: (
      <div className="space-y-2 leading-relaxed">Great! Reach out to us via email at <a href="mailto:partha@nexgencompany.ai">partha@nexgencompany.ai</a></div>
    ),
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
