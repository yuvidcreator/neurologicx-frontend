import type { Metadata } from "next";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | NeurologicX",
  description: "Privacy Policy for NeurologicX Innovations Labs — how we collect, use, and protect your personal information.",
};

const LAST_UPDATED = "June 2026";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-slate-950 text-white antialiased">
      <Navbar />

      <section className="pt-36 pb-16 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-4">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="pb-24 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-slate-300 leading-relaxed">

            <div className="p-6 bg-blue-500/5 border border-blue-500/15 rounded-xl">
              <p className="text-sm">
                This Privacy Policy describes how <strong className="text-white">{COMPANY.legalName}</strong> (&quot;NeurologicX&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and protects information when you visit <strong className="text-white">{COMPANY.domain}</strong> or use our services.
              </p>
            </div>

            {[
              {
                heading: "1. Information We Collect",
                content: [
                  "<strong>Contact information:</strong> When you contact us via our website form or email, we collect your name, email address, company name, and the content of your message.",
                  "<strong>Usage data:</strong> We may collect non-personally identifiable information about how you interact with our website, including pages visited, browser type, and referring URLs.",
                  "<strong>Cookies:</strong> Our website uses essential cookies to ensure basic functionality. We do not use tracking or advertising cookies.",
                ],
              },
              {
                heading: "2. How We Use Your Information",
                content: [
                  "To respond to your inquiries and provide requested services.",
                  "To send you information about our products and services when you have explicitly requested it.",
                  "To improve our website and services based on aggregated, anonymized usage data.",
                  "To fulfill our contractual obligations in active service engagements.",
                ],
              },
              {
                heading: "3. Data Sharing",
                content: [
                  "We do not sell, trade, or rent your personal information to third parties.",
                  "We may share data with trusted service providers (e.g., cloud hosting, email delivery) who assist in operating our website and services, under strict confidentiality agreements.",
                  "We may disclose information if required by law or to protect the rights, property, or safety of NeurologicX Innovations Labs or others.",
                ],
              },
              {
                heading: "4. Data Security",
                content: [
                  "We implement industry-standard security measures to protect your personal information, including encryption in transit (HTTPS) and secure access controls.",
                  "While we take reasonable precautions, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data.",
                ],
              },
              {
                heading: "5. Data Retention",
                content: [
                  "We retain contact information only as long as necessary to respond to your inquiry or fulfill an active service engagement.",
                  "You may request deletion of your personal data at any time by contacting us at " + COMPANY.email + ".",
                ],
              },
              {
                heading: "6. Your Rights",
                content: [
                  "You have the right to access the personal information we hold about you.",
                  "You have the right to request correction or deletion of your personal data.",
                  "You have the right to opt out of any marketing communications at any time.",
                  "To exercise any of these rights, contact us at " + COMPANY.email + ".",
                ],
              },
              {
                heading: "7. Third-Party Links",
                content: [
                  "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites.",
                ],
              },
              {
                heading: "8. Changes to This Policy",
                content: [
                  "We reserve the right to update this Privacy Policy at any time. Changes will be reflected by updating the &quot;Last updated&quot; date at the top of this page.",
                  "Continued use of our website after changes constitutes acceptance of the revised policy.",
                ],
              },
              {
                heading: "9. Contact Us",
                content: [
                  `For any privacy-related questions, contact us at: <strong class="text-white">${COMPANY.email}</strong>`,
                  `${COMPANY.legalName}, ${COMPANY.location}`,
                ],
              },
            ].map(({ heading, content }) => (
              <div key={heading}>
                <h2 className="text-lg font-bold text-white mb-4">{heading}</h2>
                <ul className="space-y-3">
                  {content.map((item, i) => (
                    <li key={i} className="text-sm text-slate-300 leading-relaxed pl-4 border-l border-slate-700"
                      dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
