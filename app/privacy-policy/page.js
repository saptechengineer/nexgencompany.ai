import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: partha@nexgencompany.ai

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
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
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Privacy Policy for NexGen Technologies

Effective Date: March 28, 2024

Welcome to NexGen Technologies, accessible at https://NexGenCompany.ai. This privacy policy describes how we collect, use, and handle your information when you use our website and services.

1. Information Collection

We collect non-personal data through web cookies to enhance your experience on our site. These cookies help us understand how our website is used, allowing us to optimize our services for digital transformation, including crafting cutting-edge SaaS and AI solutions, data engineering, SAP BTP, and integrated cloud applications specifically designed for enterprises.

2. Use of Information

The information we collect is solely used to improve the quality of our website and the services we provide. It aids in understanding user preferences and tailoring our offerings to better meet your needs.

3. Data Sharing

NexGen Technologies is committed to protecting your privacy. We do not share any collected data with third parties. Your information is used exclusively within NexGen Technologies to enhance the services we offer.

4. Children's Privacy

Our website and services are designed for enterprises and are not intended for children. We do not knowingly collect any information from children under the age of 13. If we become aware that we have inadvertently collected personal information from children without verification of parental consent, we take steps to remove that information from our servers.

5. Your Consent

By using our website, you consent to our Privacy Policy.

6. Changes to Our Privacy Policy

We reserve the right to modify this privacy policy at any time. Changes will take effect immediately upon their posting on the website. We encourage you to frequently check this page for any changes.

7. Contact Us

If you have any questions about this Privacy Policy, please contact us at partha@nexgencompany.ai.

NexGen Technologies - Propelling Enterprises into the Future.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
