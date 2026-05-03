// hiliree-web\src\app\licenses\page.tsx
import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";

export const metadata: Metadata = { 
  title: "Licenses & Third-Party — Hiliree",
  description: "Information about third-party services and open-source components used by Hiliree."
};

const sections = [
  { id: "third-party-services", label: "Third-Party Services" },
  { id: "open-source", label: "Open-Source Software" },
  { id: "data-handling", label: "Data Handling by Third Parties" },
  { id: "disclaimer", label: "Disclaimer of Liability" },
  { id: "changes", label: "Changes to Third-Party Tools" },
  { id: "contact", label: "Contact Us" },
];

export default function LicensesPage() {
  return (
    <LegalPageLayout title="Licenses and Third-Party" lastUpdated="11/19/2025" sections={sections}>
      
      <section id="third-party-services">
        <p>Hiliree uses trusted third-party tools and open-source components to provide, secure, and improve the Service. This section explains, at a high level, how those tools are used and how we manage related obligations.</p>

        <h2>Third-Party Services</h2>
        <p>We work with carefully selected third-party service providers to support features such as:</p>
        <ul>
          <li>Application hosting and infrastructure</li>
          <li>Data storage and backup</li>
          <li>Security and performance monitoring</li>
          <li>Authentication and communication features</li>
          <li>Mobile app distribution (e.g., app stores)</li>
        </ul>
        <p>These providers act as our processors or independent controllers, depending on their role, and may process limited data necessary to deliver their services.</p>
        <p>We do not publicly list all internal platforms, systems, or vendors to protect the security and integrity of our infrastructure.</p>
        <p>Your use of the Service may be subject to the terms and privacy practices of these third parties. Where required, we enter into appropriate agreements (including Data Processing Agreements) to ensure compliance with applicable data protection laws.</p>
      </section>

      <section id="open-source">
        <h2>Open-Source Software</h2>
        <p>Hiliree integrates open-source software components that are essential to the operation of the Service. Each component is used in accordance with its applicable license (for example, MIT, Apache, or similar open-source licenses).</p>
        <p>Where required, attribution or license text may be included:</p>
        <ul>
          <li>Within the app</li>
          <li>In documentation</li>
          <li>Or in a dedicated "Open-Source Notices" section available on request</li>
        </ul>
        <p>Use of the Service does not grant you ownership of the underlying software, and all rights not expressly granted are reserved by the respective rights holders.</p>
      </section>

      <section id="data-handling">
        <h2>Data Handling by Third Parties</h2>
        <p>Whenever we share data with third-party providers, we do so in line with our Privacy Policy and applicable laws. We:</p>
        <ul>
          <li>Share only the minimum data needed for the provider to perform their function (data minimization)</li>
          <li>Require providers to maintain appropriate technical and organizational security measures</li>
          <li>Use appropriate safeguards (e.g., contractual clauses) for international transfers where required</li>
        </ul>
        <p>For more details on how your personal data is processed, please refer to our Privacy Policy.</p>
      </section>

      <section id="disclaimer">
        <h2>Disclaimer of Liability for Third-Party Services</h2>
        <p>While Hiliree relies on third-party services to power certain features, those services are operated independently of Hiliree. Accordingly:</p>
        <ul>
          <li>Hiliree does not guarantee the availability, accuracy, or performance of any third-party service</li>
          <li>Third-party services are provided "as is" and "as available"</li>
          <li>To the fullest extent permitted by law, Hiliree is not liable for any direct or indirect damages arising from the use, failure, or unavailability of third-party services</li>
        </ul>
        <p>Your use of third-party services may also be governed by those providers' own terms and policies, which we encourage you to review.</p>
      </section>

      <section id="changes">
        <h2>Changes to Third-Party Tools</h2>
        <p>We may add, remove, or replace third-party tools and open-source components from time to time to improve security, performance, or functionality.</p>
        <p>When such changes are significant to how your data is handled, we will reflect them in our Privacy Policy or related documentation and update the "Last Updated" date.</p>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>If you have questions about our use of third-party tools or open-source components, you can contact us at: <a href="mailto:support@hiliree.com">support@hiliree.com</a></p>
      </section>
    </LegalPageLayout>
  );
}