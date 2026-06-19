import type { Metadata } from "next";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions | NeurologicX",
  description: "Terms and Conditions for NeurologicX Innovations Labs — governing use of our website and services.",
};

const LAST_UPDATED = "June 2026";

export default function TermsPage() {
  return (
    <main className="bg-slate-950 text-white antialiased">
      <Navbar />

      <section className="pt-36 pb-16 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-4">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms &amp; Conditions</h1>
          <p className="text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="pb-24 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-slate-300 leading-relaxed">

            <div className="p-6 bg-blue-500/5 border border-blue-500/15 rounded-xl">
              <p className="text-sm">
                By accessing <strong className="text-white">{COMPANY.domain}</strong> or using any services provided by <strong className="text-white">{COMPANY.legalName}</strong> (&quot;NeurologicX&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you agree to be bound by these Terms &amp; Conditions. Please read them carefully.
              </p>
            </div>

            {[
              {
                heading: "1. Acceptance of Terms",
                content: [
                  "By accessing or using our website or services, you confirm that you are at least 18 years of age and agree to these Terms & Conditions in full.",
                  "If you are accessing our services on behalf of a company or organization, you represent that you have the authority to bind that entity to these terms.",
                ],
              },
              {
                heading: "2. Services Description",
                content: [
                  "NeurologicX Innovations Labs provides AI-powered SaaS products (including SalonIQ, ClinicFlow, and StockSense) and technology services including cloud infrastructure migration and DevOps engineering.",
                  "Specific service terms, deliverables, timelines, and pricing are governed by individual service agreements or statements of work signed between NeurologicX and the client.",
                ],
              },
              {
                heading: "3. Use of Our Website",
                content: [
                  "You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others.",
                  "You must not attempt to gain unauthorized access to any part of our website, servers, or networks.",
                  "We reserve the right to restrict access to our website for any reason without prior notice.",
                ],
              },
              {
                heading: "4. Intellectual Property",
                content: [
                  "All content on this website — including text, graphics, logos, product names (SalonIQ, ClinicFlow, StockSense), and code — is the intellectual property of NeurologicX Innovations Labs.",
                  "You may not reproduce, distribute, or use our content for commercial purposes without written permission.",
                  "Our SaaS products are licensed, not sold. Licensing terms are detailed in individual subscription agreements.",
                ],
              },
              {
                heading: "5. Disclaimer of Warranties",
                content: [
                  `This website and its content are provided on an "as is" basis without any warranties, express or implied.`,
                  "We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.",
                  "Any reliance on information from this website is at your own risk.",
                ],
              },
              {
                heading: "6. Limitation of Liability",
                content: [
                  "To the maximum extent permitted by applicable law, NeurologicX Innovations Labs shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or our services.",
                  "Our total liability in connection with any claim under these terms shall not exceed the amount paid by you for the relevant service in the three months preceding the claim.",
                ],
              },
              {
                heading: "7. Third-Party Services",
                content: [
                  "Our services may integrate with or depend on third-party platforms (e.g., AWS, Azure, GCP). We are not responsible for the availability, terms, or performance of those platforms.",
                  "Links to third-party websites are provided for convenience only and do not constitute endorsement.",
                ],
              },
              {
                heading: "8. Termination",
                content: [
                  "We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any breach of these Terms.",
                  "Upon termination, all provisions that by their nature should survive will remain in effect, including intellectual property rights and limitation of liability clauses.",
                ],
              },
              {
                heading: "9. Governing Law",
                content: [
                  "These Terms are governed by and construed in accordance with the laws of India, specifically the State of Maharashtra.",
                  "Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra, India.",
                ],
              },
              {
                heading: "10. Changes to These Terms",
                content: [
                  "We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to this page with an updated date.",
                  "Your continued use of our website or services after any changes constitutes your acceptance of the revised terms.",
                ],
              },
              {
                heading: "11. Contact",
                content: [
                  `For questions about these Terms, contact us at: <strong class="text-white">${COMPANY.email}</strong>`,
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
