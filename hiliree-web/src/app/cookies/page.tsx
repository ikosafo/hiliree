// hiliree-web\src\app\cookies\page.tsx
import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";

export const metadata: Metadata = { 
  title: "Cookies Policy — Hiliree",
  description: "Learn how Hiliree uses cookies and similar tracking technologies."
};

const sections = [
  { id: "what-are-cookies", label: "What Are Cookies?" },
  { id: "types-of-cookies", label: "Types of Cookies We Use" },
  { id: "why-we-use-cookies", label: "Why We Use Cookies" },
  { id: "third-party-tracking", label: "Third-Party Tracking" },
  { id: "consent", label: "Consent and Control" },
  { id: "managing-preferences", label: "Managing Preferences" },
  { id: "do-not-track", label: "Do Not Track" },
  { id: "duration", label: "Cookie Duration" },
  { id: "changes", label: "Changes to This Policy" },
  { id: "contact", label: "Contact Us" },
];

export default function CookiesPage() {
  return (
    <LegalPageLayout title="Cookies Policy" lastUpdated="08/27/2025" sections={sections}>
      
      <section id="what-are-cookies">
        <p>This Cookies Policy explains how Hiliree ("we", "us" or "our") uses cookies and similar tracking technologies on our mobile application and website (the "Service"). By using the Service, you agree to the use of cookies as described in this policy. If you do not agree, you may adjust your cookie settings or discontinue use of the Service.</p>

        <h2>What Are Cookies?</h2>
        <p>Cookies are small files stored on your device that help websites and applications function, enhance performance, and deliver more personalized experience. Cookies may be set directly by us (first-party cookies) or by approved partners who provide supporting services (third-party cookies).</p>
      </section>

      <section id="types-of-cookies">
        <h2>Types of Cookies We Use</h2>
        <p>Hiliree uses a limited range of cookies designed to support functionality, improve performance, and ensure secure and reliable experience.</p>

        <h3>2.1 Essential Cookies</h3>
        <p>These cookies are required for the Service to operate. They enable core functions such as login, session management, navigation, and security protections.</p>
        <p><strong>Purpose:</strong></p>
        <ul>
          <li>To provide access to key app features</li>
          <li>To maintain session integrity</li>
          <li>To protect the platform from misuse and unauthorized access</li>
        </ul>

        <h3>2.2 Performance & Analytics Cookies</h3>
        <p>These cookies collect anonymized information about how users interact with the Service. They help us understand usage patterns and improve stability, speed, and overall functionality.</p>
        <p><strong>Purpose:</strong></p>
        <ul>
          <li>To analyze user flow and engagement</li>
          <li>To identify app performance issues</li>
          <li>To support service optimization and quality improvements</li>
        </ul>

        <h3>2.3 Functional Cookies</h3>
        <p>These cookies allow the Service to remember your preferences, such as language settings or display options, so you receive consistent, personalized experience.</p>
        <p><strong>Purpose:</strong></p>
        <ul>
          <li>To store preference settings</li>
          <li>To improve usability and convenience</li>
        </ul>

        <h3>2.4 Limited Third-Party Cookies</h3>
        <p>Certain trusted service providers may place cookies that support essential Service functions such as authentication, content delivery, app performance, and system analytics.</p>
        <p><strong>Important:</strong> We do not disclose internal systems, programs, infrastructure providers, or backend architecture. Third-party cookies are used strictly for operational purposes and not for profiling or cross-site tracking.</p>
        <p><strong>Purpose:</strong></p>
        <ul>
          <li>To support technical delivery of the Service</li>
          <li>To ensure app stability, secure interactions, and reliable functionality</li>
          <li>To assist with performance monitoring</li>
        </ul>
      </section>

      <section id="why-we-use-cookies">
        <h2>Why We Use Cookies</h2>
        <p>Hiliree uses cookies for the following purposes:</p>
        <ul>
          <li><strong>Service delivery:</strong> Enabling features necessary for the app to function</li>
          <li><strong>Security:</strong> Detecting misuse and enhancing safety</li>
          <li><strong>Performance analysis:</strong> Understanding how the Service is used</li>
          <li><strong>User experience:</strong> Remembering settings and improving navigation</li>
        </ul>
        <p>We do not use cookies to collect sensitive personal information, financial details, or project data.</p>
      </section>

      <section id="third-party-tracking">
        <h2>Third-Party Tracking Technologies</h2>
        <p>Hiliree may work with authorized partners who provide essential services such as analytics, security, app distribution, and feature support. These partners may use cookies or similar technologies as part of their standard operations.</p>
        <ul>
          <li>We carefully evaluate each partner to ensure compliance with global privacy requirements.</li>
          <li>We do not permit advertising networks or behavioral targeting platforms to access your usage data.</li>
        </ul>
      </section>

      <section id="consent">
        <h2>Consent and Control (GDPR, CCPA & Global Standards)</h2>
        <p>Upon first use of the Service, you will be presented with a cookie banner or notice requesting your consent for non-essential cookies. You may:</p>
        <ul>
          <li>Accept all cookies</li>
          <li>Reject non-essential cookies</li>
          <li>Adjust your preferences at any time</li>
        </ul>
        <p>Your choice will not affect essential features required for the Service to function properly.</p>
      </section>

      <section id="managing-preferences">
        <h2>Managing Your Cookie Preferences</h2>

        <h3>6.1 In Your Device or Browser</h3>
        <p>Most devices and browsers allow you to manage cookie settings, delete cookies, or block them entirely. Please note that disabling essential cookies may affect Service functionality.</p>

        <h3>6.2 Cookie Management Tools</h3>
        <p>You may adjust your cookie preference at any time through the "Cookie Settings" section available within the app or website (where applicable).</p>
      </section>

      <section id="do-not-track">
        <h2>Do Not Track (DNT)</h2>
        <p>The Service does not currently respond to Do Not Track signals because no consistent industry standard exists. Instead, we rely on your explicit cookie preferences set within our consent tools.</p>
      </section>

      <section id="duration">
        <h2>Cookie Duration</h2>
        <ul>
          <li><strong>Session Cookies:</strong> Removed when you close the app or browser</li>
          <li><strong>Persistent Cookies:</strong> Remain for a limited period to remember preferences unless manually deleted</li>
        </ul>
        <p>We do not intentionally store cookies longer than operationally necessary.</p>
      </section>

      <section id="changes">
        <h2>Changes to This Policy</h2>
        <p>Hiliree may update this Cookies Policy to reflect changes in technology, regulations, or our practices. The "Last Updated" date will indicate the latest revision. Significant changes will be communicated through the app or website.</p>
        <p>Continued use of the Service after any update constitutes acceptance of the revised policy.</p>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>If you have questions about this Cookies Policy or how we use cookies, please contact us at: <a href="mailto:support@hiliree.com">support@hiliree.com</a></p>
      </section>
    </LegalPageLayout>
  );
}