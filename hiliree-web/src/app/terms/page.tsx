import type { Metadata } from "next";
import { LegalPageLayout, type LegalSection } from "@/components/layout/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms of Service — Hiliree",
  description:
    "Read the Hiliree Terms of Service to understand your rights and responsibilities when using our platform.",
};

const sections: LegalSection[] = [
  { id: "introduction",     label: "Introduction"            },
  { id: "definitions",      label: "Definitions"             },
  { id: "eligibility",      label: "Eligibility"             },
  { id: "user-accounts",    label: "User Accounts"           },
  { id: "privacy",          label: "Privacy"                 },
  { id: "third-party",      label: "Third-Party Tools"       },
  { id: "responsibilities", label: "User Responsibilities"   },
  { id: "content",          label: "Content Ownership"       },
  { id: "prohibited",       label: "Prohibited Activities"   },
  { id: "termination",      label: "Termination"             },
  { id: "disclaimer",       label: "Disclaimer of Warranties"},
  { id: "liability",        label: "Limitation of Liability" },
  { id: "indemnification",  label: "Indemnification"         },
  { id: "dispute",          label: "Dispute Resolution"      },
  { id: "changes",          label: "Changes to These Terms"  },
  { id: "miscellaneous",    label: "Miscellaneous"           },
  { id: "contact",          label: "Contact Us"              },
];

function Dot() {
  return (
    <span
      className="mt-[9px] w-1.5 h-1.5 rounded-full shrink-0 bg-gray-400/40"
      aria-hidden
    />
  );
}

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      lastUpdated="11/19/2025"
      sections={sections}
    >

      {/* 1 */}
      <section id="introduction">
        <h2>Introduction</h2>
        <p>
          Welcome to Hiliree. These Terms of Service (the "Terms") govern your access to and use of the Hiliree mobile application and website (the "Service"). By using the Service, you agree to be bound by these Terms. If you disagree, do not use the Service.
        </p>
        <p>
          Hiliree is a family-connection platform that enables users to build family trees, connect with relatives, communicate, and preserve family information. These Terms apply to all users, visitors, and anyone who accesses or uses the Service.
        </p>
      </section>

      {/* 2 */}
      <section id="definitions">
        <h2>Definitions</h2>
        <ul>
          <li><Dot /><span><strong>"User", "You", "Your"</strong> – Any individual who accesses or uses the Service.</span></li>
          <li><Dot /><span><strong>"We", "Us", "Our", "Hiliree"</strong> – Hiliree, its owners, affiliates, officers, employees, and authorized agents.</span></li>
          <li><Dot /><span><strong>"Content"</strong> – Any information submitted, uploaded, or made available through the Service, including family tree data, photos, messages, and profile details.</span></li>
        </ul>
      </section>

      {/* 3 */}
      <section id="eligibility">
        <h2>Eligibility</h2>
        <p>
          You must be at least 13 years old, or the minimum required age in your jurisdiction, to use Hiliree. Users under 18 must have permission from a parent or legal guardian.
        </p>
        <p>
          By using the Service, you represent that you meet all legal age and eligibility requirements.
        </p>
      </section>

      {/* 4 */}
      <section id="user-accounts">
        <h2>User Accounts</h2>
        <p>
          To use certain features, you must create an account and provide accurate and complete information.
        </p>
        <p>You agree to:</p>
        <ul>
          <li><Dot /><span>Maintain the confidentiality of your login credentials</span></li>
          <li><Dot /><span>Notify us immediately of any unauthorized use</span></li>
          <li><Dot /><span>Be responsible for all activities under your account</span></li>
        </ul>
        <p>
          Hiliree may suspend or terminate accounts that provide false information or violate these Terms.
        </p>
      </section>

      {/* 5 */}
      <section id="privacy">
        <h2>Privacy</h2>
        <p>
          Your privacy matters to us. Our{" "}
          <a href="/privacy">Privacy Policy</a> explains how we collect, use, and protect your personal information. The Privacy Policy is incorporated into these Terms.
        </p>
      </section>

      {/* 6 */}
      <section id="third-party">
        <h2>Third-Party Tools</h2>
        <p>
          Hiliree may use third-party tools to support functionality, security, analytics, and performance.
        </p>
        <p>For your protection:</p>
        <ul>
          <li><Dot /><span>We do not disclose tool names or internal technologies in the Terms.</span></li>
          <li><Dot /><span>We do not reveal system architecture or backend providers.</span></li>
          <li><Dot /><span>Third-party tools may process limited data necessary to operate the Service.</span></li>
        </ul>
        <p>
          By using the Service, you acknowledge that certain features rely on trusted third-party providers under their own compliance obligations.
        </p>
      </section>

      {/* 7 */}
      <section id="responsibilities">
        <h2>User Responsibilities</h2>
        <p>When using Hiliree, you agree to:</p>
        <ul>
          <li><Dot /><span>Use the Service only for lawful purposes</span></li>
          <li><Dot /><span>Provide accurate information about yourself and family members</span></li>
          <li><Dot /><span>Respect the privacy of others</span></li>
          <li><Dot /><span>Not upload content that is harmful, offensive, defamatory, violent, hateful, or illegal</span></li>
          <li><Dot /><span>Not attempting to access systems without authorization</span></li>
          <li><Dot /><span>Not engage in data scraping, reverse engineering, or copying of the platform</span></li>
        </ul>
        <p>Hiliree may remove any content or limit access for violations.</p>
      </section>

      {/* 8 */}
      <section id="content">
        <h2>Content Ownership &amp; License</h2>

        <h3>Your Content</h3>
        <p>
          You retain ownership of the content you submit.
        </p>
        <p>
          By using the Service, you grant Hiliree a <strong>non-exclusive, worldwide, royalty-free license</strong> to:
        </p>
        <ul>
          <li><Dot /><span>Host</span></li>
          <li><Dot /><span>Store</span></li>
          <li><Dot /><span>Display</span></li>
          <li><Dot /><span>Process</span></li>
          <li><Dot /><span>Transmit</span></li>
        </ul>
        <p>
          your content <strong>solely to operate, maintain, and improve the Service</strong>.
        </p>

        <h3>Your Warranties</h3>
        <p>You represent that:</p>
        <ul>
          <li><Dot /><span>You own or have permission to share the content you upload</span></li>
          <li><Dot /><span>Your content does not infringe the rights of others</span></li>
        </ul>
        <p>Hiliree is not responsible for content uploaded by users.</p>
      </section>

      {/* 9 */}
      <section id="prohibited">
        <h2>Prohibited Activities</h2>
        <p>You agree NOT to use the Service to:</p>
        <ul>
          <li><Dot /><span>Harass, threaten, or harm others</span></li>
          <li><Dot /><span>Upload malicious code, viruses, or automated scripts</span></li>
          <li><Dot /><span>Misuse of personal information of family members</span></li>
          <li><Dot /><span>Create fake profiles</span></li>
          <li><Dot /><span>Engage in unauthorized data harvesting or extraction</span></li>
          <li><Dot /><span>Attempt to disrupt platform security or operations</span></li>
        </ul>
        <p>
          Violations may result in account termination and possible legal action.
        </p>
      </section>

      {/* 10 */}
      <section id="termination">
        <h2>Termination</h2>
        <p>
          We may suspend or terminate your account at any time, with or without notice, if:
        </p>
        <ul>
          <li><Dot /><span>You violate these Terms</span></li>
          <li><Dot /><span>You misuse the Service</span></li>
          <li><Dot /><span>Your behavior risks the safety or operation of the platform</span></li>
        </ul>
        <p>
          You may delete your account at any time. Upon deletion, your personal data and family tree information will be removed as described in our Privacy Policy.
        </p>
      </section>

      {/* 11 */}
      <section id="disclaimer">
        <h2>Disclaimer of Warranties</h2>
        <p>
          Hiliree is provided <strong>"as is"</strong> and <strong>"as available"</strong> without warranties of any kind.
        </p>
        <p>We do not guarantee:</p>
        <ul>
          <li><Dot /><span>Error-free operation</span></li>
          <li><Dot /><span>Uninterrupted access</span></li>
          <li><Dot /><span>Complete accuracy of content</span></li>
          <li><Dot /><span>That the Service will meet your expectations</span></li>
        </ul>
        <p>
          To the fullest extent permitted by law, all warranties, express or implied, are disclaimed.
        </p>
      </section>

      {/* 12 */}
      <section id="liability">
        <h2>Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Hiliree is <strong>not liable</strong> for:
        </p>
        <ul>
          <li><Dot /><span>Loss of data</span></li>
          <li><Dot /><span>Lost profits</span></li>
          <li><Dot /><span>Personal or emotional distress</span></li>
          <li><Dot /><span>Indirect, incidental, or consequential damages</span></li>
          <li><Dot /><span>Unauthorized access to your account</span></li>
        </ul>
        <p>
          If liability cannot be excluded, it is limited to the smallest amount permitted under applicable law.
        </p>
      </section>

      {/* 13 */}
      <section id="indemnification">
        <h2>Indemnification</h2>
        <p>
          You agree to indemnify and hold Hiliree harmless from any claims, damages, liabilities, or expenses arising from:
        </p>
        <ul>
          <li><Dot /><span>Your use or misuse of the Service</span></li>
          <li><Dot /><span>Your violation of these Terms</span></li>
          <li><Dot /><span>Your infringement of third-party rights</span></li>
        </ul>
      </section>

      {/* 14 */}
      <section id="dispute">
        <h2>Dispute Resolution</h2>

        <h3>Governing Law</h3>
        <p>
          These Terms are governed by the laws of the State of New Jersey, USA (without regard to conflict-of-law rules).
        </p>

        <h3>Arbitration Requirement</h3>
        <p>
          All disputes must be resolved through <strong>binding arbitration</strong> in New Jersey under the rules of the New Jersey State Board of Mediation or a comparable arbitration body.
        </p>

        <h3>Class Action Waiver</h3>
        <p>
          You agree not to participate in any class or collective action. Disputes must be resolved individually.
        </p>
      </section>

      {/* 15 */}
      <section id="changes">
        <h2>Changes to These Terms</h2>
        <p>
          Hiliree may update these Terms at any time. The "Last Updated" date reflects the latest version. Material changes may be communicated through the app or website. Continued use of the Service constitutes acceptance of updated Terms.
        </p>
      </section>

      {/* 16 */}
      <section id="miscellaneous">
        <h2>Miscellaneous</h2>
        <ul>
          <li>
            <Dot />
            <span>
              <strong>Severability:</strong> If any part of these Terms is invalid, the rest remains enforceable.
            </span>
          </li>
          <li>
            <Dot />
            <span>
              <strong>No Waiver:</strong> Failure to enforce a provision does not waive our right to enforce it later.
            </span>
          </li>
          <li>
            <Dot />
            <span>
              <strong>Entire Agreement:</strong> These Terms, along with the Privacy Policy and Cookies Policy, form the entire agreement between you and Hiliree.
            </span>
          </li>
        </ul>
      </section>

      {/* 17 */}
      <section id="contact">
        <h2>Contact Us</h2>
        <p>For questions about these Terms, contact us at:</p>
        <p>
          <a href="mailto:support@hiliree.com">support@hiliree.com</a>
        </p>
      </section>

    </LegalPageLayout>
  );
}