import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Contact information: partha@nexgencompany.ai
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://shipfa.st/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Terms of Service for NexGen Technologies

**Effective Date: March 28, 2024**

Welcome to NexGen Technologies

These Terms of Service ("Terms") govern your use of the services offered by NexGen Technologies ("we", "us", "our") through our website located at https://NexGenCompany.ai ("Website"). By accessing or using our Website, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not use our services.

1. Services Offered
NexGen Technologies specializes in providing Digital Transformation services for enterprises. This includes crafting cutting-edge SaaS and AI solutions, data engineering, SAP BTP, and integrated cloud applications designed to enhance business operations.

2. Privacy and Data Collection
We are committed to protecting your privacy. Our collection and use of personal information in connection with the services is described in our Privacy Policy located at https://NexGenCompany.ai/privacy-policy. By using our services, you agree to the collection and use of information in accordance with our Privacy Policy. We also use web cookies to improve your experience on our Website.

3. Use of the Website
You agree to use our Website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our Website.

4. Intellectual Property
The content on our Website, including without limitation, the text, software, scripts, graphics, photos, sounds, music, videos, and interactive features and the trademarks, service marks, and logos contained therein, are owned by or licensed to us. Content on the Website is provided to you AS IS for your information and personal use only and may not be used, copied, reproduced, distributed, transmitted, broadcast, displayed, sold, licensed, or otherwise exploited for any other purposes whatsoever without the prior written consent of the respective owners.

5. Changes to the Terms
We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. We will notify you about significant changes by emailing the email address registered by you or by placing a prominent notice on our site.

6. Governing Law
These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.

7. Contact Information
For any questions about these Terms, please contact us at partha@nexgencompany.ai.

By accessing or using our Website, you signify your acceptance of these Terms. If you do not agree to these Terms, please do not use our Website.`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
