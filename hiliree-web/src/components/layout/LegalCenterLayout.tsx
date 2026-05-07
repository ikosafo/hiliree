"use client";
import { useState, ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ArrowUp } from "lucide-react";

type LegalTab = "privacy" | "safety" | "licenses" | "cookies";

interface TabContent {
  id: LegalTab;
  label: string;
  title: string;
  lastUpdated: string;
  sections: { id: string; label: string }[];
  content: ReactNode;
}

function SidebarNav({ sections, activeTab }: { sections: { id: string; label: string }[]; activeTab: LegalTab }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections, activeTab]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="sticky top-24">
      <div className="flex items-center gap-2 mb-5">
        <BookOpen size={13} className="text-gray-400" strokeWidth={1.5} />
        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400">On this page</span>
      </div>
      <nav className="space-y-0.5">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`block w-full text-left px-3 py-2 rounded-lg text-[12px] transition-colors ${
              activeId === s.id
                ? "bg-[#41307e]/5 text-[#41307e] font-medium"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            {s.label}
          </button>
        ))}
      </nav>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="mt-5 text-[11px] text-gray-400 hover:text-gray-600 flex items-center gap-1.5 transition-colors"
      >
        <ArrowUp size={12} />
        Back to top
      </button>
    </div>
  );
}

function TabNav({ tabs, activeTab, onTabChange }: { tabs: TabContent[]; activeTab: LegalTab; onTabChange: (tab: LegalTab) => void }) {
  return (
    <div className="border-b border-gray-100 bg-white sticky top-0 z-30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex gap-6 overflow-x-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-1 py-3.5 text-[13px] font-medium whitespace-nowrap transition-colors border-b-2 font-poppins ${
                  isActive
                    ? "text-[#41307e] border-[#41307e]"
                    : "text-gray-500 border-transparent hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function LegalCenterLayout() {
  const [activeTab, setActiveTab] = useState<LegalTab>("privacy");

  const tabs: TabContent[] = [
    {
      id: "privacy", label: "Privacy Policy", title: "Privacy Policy", lastUpdated: "11/19/2025",
      sections: [
        { id: "privacy-intro", label: "Introduction" },
        { id: "privacy-info-collect", label: "Information We Collect" },
        { id: "privacy-how-use", label: "How We Use Your Information" },
        { id: "privacy-legal-basis", label: "Legal Basis for Processing" },
        { id: "privacy-share", label: "How We Share Your Information" },
        { id: "privacy-rights", label: "Your Privacy Rights" },
        { id: "privacy-security", label: "Data Security" },
        { id: "privacy-retention", label: "Data Retention" },
        { id: "privacy-transfers", label: "International Data Transfers" },
        { id: "privacy-cookies", label: "Cookies and Tracking" },
        { id: "privacy-children", label: "Children's Privacy" },
        { id: "privacy-changes", label: "Changes to This Policy" },
        { id: "privacy-contact", label: "Contact Us" },
      ],
      content: <PrivacyContent />,
    },
    {
      id: "safety", label: "Child Safety Standards", title: "Child Safety Standards", lastUpdated: "11/19/2025",
      sections: [
        { id: "safety-intro", label: "Introduction" },
        { id: "safety-zero", label: "Zero-Tolerance Policy" },
        { id: "safety-reporting", label: "Reporting and User Safety" },
        { id: "safety-enforcement", label: "Enforcement" },
        { id: "safety-cooperation", label: "Cooperation With Authorities" },
        { id: "safety-scope", label: "Scope" },
        { id: "safety-contact", label: "Contact" },
      ],
      content: <SafetyContent />,
    },
    {
      id: "licenses", label: "Licenses and Third-Party", title: "Licenses and Third-Party", lastUpdated: "11/19/2025",
      sections: [
        { id: "licenses-intro", label: "Introduction" },
        { id: "licenses-services", label: "Third-Party Services" },
        { id: "licenses-opensource", label: "Open-Source Software" },
        { id: "licenses-data", label: "Data Handling by Third Parties" },
        { id: "licenses-disclaimer", label: "Disclaimer of Liability" },
        { id: "licenses-changes", label: "Changes to Third-Party Tools" },
        { id: "licenses-contact", label: "Contact Us" },
      ],
      content: <LicensesContent />,
    },
    {
      id: "cookies", label: "Cookies Policy", title: "Cookies Policy", lastUpdated: "08/27/2025",
      sections: [
        { id: "cookies-what", label: "What Are Cookies?" },
        { id: "cookies-types", label: "Types of Cookies We Use" },
        { id: "cookies-why", label: "Why We Use Cookies" },
        { id: "cookies-third-party", label: "Third-Party Tracking" },
        { id: "cookies-consent", label: "Consent and Control" },
        { id: "cookies-manage", label: "Managing Your Preferences" },
        { id: "cookies-dnt", label: "Do Not Track (DNT)" },
        { id: "cookies-duration", label: "Cookie Duration" },
        { id: "cookies-changes", label: "Changes to This Policy" },
        { id: "cookies-contact", label: "Contact Us" },
      ],
      content: <CookiesContent />,
    },
  ];

  const currentTab = tabs.find((t) => t.id === activeTab)!;

  return (
    <main className="min-h-screen pt-20 bg-white">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <motion.div
          key={`${activeTab}-header`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 font-poppins">
            Legal Document
          </span>
          <h1 className="font-['Cormorant_Garamond',serif] text-3xl lg:text-4xl font-bold mt-3 mb-3 tracking-[-0.02em]" style={{ color: "#2D206A" }}>
            {currentTab.title}
          </h1>
          <p className="text-[12px] text-gray-400 font-poppins">
            Last updated <span className="font-medium text-gray-500">{currentTab.lastUpdated}</span>
          </p>
        </motion.div>
      </div>

      {/* Tab Navigation */}
      <TabNav tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[200px_1fr] gap-10">
          <aside className="hidden lg:block">
            <SidebarNav sections={currentTab.sections} activeTab={activeTab} />
          </aside>

          <article className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="
                  [&_section]:scroll-mt-24
                  [&_section]:mb-12

                  [&_h2]:font-['Cormorant_Garamond',serif]
                  [&_h2]:text-xl
                  [&_h2]:lg:text-2xl
                  [&_h2]:font-bold
                  [&_h2]:text-gray-900
                  [&_h2]:mb-4

                  [&_h3]:text-[14px]
                  [&_h3]:font-semibold
                  [&_h3]:text-gray-800
                  [&_h3]:mb-3
                  [&_h3]:mt-7

                  [&_p]:text-[13px]
                  [&_p]:text-gray-600
                  [&_p]:leading-[1.75]
                  [&_p]:mb-4

                  [&_ul]:space-y-2
                  [&_ul]:mb-5
                  [&_ul]:list-none

                  [&_li]:text-[13px]
                  [&_li]:text-gray-600
                  [&_li]:leading-relaxed
                  [&_li]:pl-4
                  [&_li]:relative

                  [&_li::before]:content-['']
                  [&_li::before]:absolute
                  [&_li::before]:left-0
                  [&_li::before]:top-[9px]
                  [&_li::before]:w-1
                  [&_li::before]:h-1
                  [&_li::before]:rounded-full
                  [&_li::before]:bg-gray-300

                  [&_strong]:text-gray-900
                  [&_strong]:font-semibold

                  [&_a]:text-[#41307e]
                  [&_a]:font-medium
                  [&_a]:hover:underline
                "
              >
                {currentTab.content}
              </motion.div>
            </AnimatePresence>

            <div className="mt-14 pt-8 border-t border-gray-100">
              <p className="text-[12px] text-gray-500 leading-relaxed">
                If you have any questions, please contact us at{" "}
                <a href="mailto:support@hiliree.com" className="text-[#41307e] font-medium hover:underline">
                  support@hiliree.com
                </a>
              </p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}

function PrivacyContent() {
  return (
    <>
      <section id="privacy-intro">
        <h2>Privacy Policy</h2>
        <p>At Hiliree, we respect your privacy and are committed to safeguarding your personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you use the Hiliree mobile application and website (the "Service"). It also outlines your rights under applicable privacy laws including GDPR, CCPA, LGPD, PIPL, and other global data protection regulations.</p>
        <p>By using Hiliree, you agree to this Privacy Policy. If you do not agree, please discontinue use of the Service.</p>
      </section>

      <section id="privacy-info-collect">
        <h2>Information We Collect</h2>
        <p>We collect only the information necessary to operate the Service and improve your experience.</p>
        <h3>Personal Information</h3>
        <p>This includes data that can identify you directly or indirectly:</p>
        <ul>
          <li><strong>Account Information:</strong> Your name, phone number, email address, profile photo, and related account details.</li>
          <li><strong>Family Tree Information:</strong> Voluntary information you provide to build or manage family trees, including names, relationships, birthdates, and optional profile details for each member.</li>
          <li><strong>Contact Information:</strong> If you invite others to join your family or connect accounts, we may collect their email or phone number to deliver the invitation.</li>
          <li><strong>Device & Technical Information:</strong> Device ID, IP address, operating system, app version, and basic diagnostic data used for security and performance.</li>
        </ul>
        <h3>Non-Personal Information</h3>
        <p>This includes aggregated or anonymized data:</p>
        <ul>
          <li>Usage statistics</li>
          <li>Interaction patterns</li>
          <li>App performance metrics</li>
          <li>Non-identifiable technical data</li>
        </ul>
        <h3>Information from Third Parties</h3>
        <p>We may receive limited information from third-party login providers (e.g., Apple or Google) if you choose to log in using those accounts. Only basic account identifiers are shared, and no passwords or sensitive data are transferred.</p>
      </section>

      <section id="privacy-how-use">
        <h2>How We Use Your Information</h2>
        <p>We use your information strictly to provide, maintain, and improve the Service.</p>
        <ul>
          <li><strong>Account Management:</strong> Creating and managing your profile and login.</li>
          <li><strong>Family Tree Features:</strong> Supporting tree creation, sharing, and member relationships.</li>
          <li><strong>Communications:</strong> Sending service updates, notifications, and support messages.</li>
          <li><strong>Security & Fraud Prevention:</strong> Protecting the platform and detecting unauthorized activity.</li>
          <li><strong>Improvement & Analytics:</strong> Monitoring usage trends to improve performance, stability, and user experience.</li>
          <li><strong>Compliance:</strong> Meeting our legal and regulatory obligations.</li>
        </ul>
        <p>We do not use your personal data for financial transactions, contributions, or project-related tools at this time.</p>
      </section>

      <section id="privacy-legal-basis">
        <h2>Legal Basis for Processing (GDPR Users)</h2>
        <p>If you are located in the EEA, we rely on these legal bases:</p>
        <ul>
          <li>Consent</li>
          <li>Performance of a Contract</li>
          <li>Legal Obligation</li>
          <li>Legitimate Interests, balanced against your rights</li>
        </ul>
      </section>

      <section id="privacy-share">
        <h2>How We Share Your Information</h2>
        <p>Hiliree does not sell your personal information.</p>
        <p>We share information only under the following strict circumstances:</p>
        <h3>Service Providers (Processors)</h3>
        <p>We work with trusted service providers who assist with:</p>
        <ul>
          <li>App functionality</li>
          <li>Data hosting and storage</li>
          <li>Security</li>
          <li>Performance analytics</li>
          <li>Customer support</li>
          <li>Distribution of the app via recognized platforms</li>
        </ul>
        <p>All service providers are bound by confidentiality and data-protection agreements. We do not reveal names of internal infrastructure providers for security reasons.</p>
        <h3>Legal Requirements</h3>
        <p>We may share information if required by law, court order, or governmental request.</p>
        <h3>Business Transitions</h3>
        <p>If Hiliree undergoes a merger, acquisition, or restructuring, your data may transfer as part of the business assets. You will be notified of any material changes.</p>
      </section>

      <section id="privacy-rights">
        <h2>Your Privacy Rights</h2>
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul>
          <li>Access the personal data we hold</li>
          <li>Request corrections to inaccurate information</li>
          <li>Request deletion of your data ("Right to be Forgotten")</li>
          <li>Withdraw consent where applicable</li>
          <li>Restrict or object to processing</li>
          <li>Request a portable copy of your data</li>
        </ul>
        <p>To exercise your rights, email privacy@hiliree.com. We may verify your identity before processing your request.</p>
      </section>

      <section id="privacy-security">
        <h2>Data Security</h2>
        <p>We use administrative, technical, and physical safeguards consistent with industry standards to protect your data, including:</p>
        <ul>
          <li>Encrypted data transmission</li>
          <li>Access control restrictions</li>
          <li>Routine security monitoring</li>
          <li>Regular policy and practice reviews</li>
        </ul>
        <p>No system is completely secure, but we take reasonable and appropriate steps to protect your data from unauthorized access or disclosure.</p>
      </section>

      <section id="privacy-retention">
        <h2>Data Retention</h2>
        <p>We retain your personal data only for as long as necessary for the purposes outlined in this policy, unless a longer period is required by law.</p>
        <ul>
          <li><strong>Account Data:</strong> Stored while your account is active.</li>
          <li><strong>Family Tree Data:</strong> Stored until you remove it or request deletion.</li>
          <li><strong>Technical Logs:</strong> Retained for security and diagnostic purposes for a limited period.</li>
        </ul>
        <p>When data is no longer needed, it is securely deleted or anonymized.</p>
      </section>

      <section id="privacy-transfers">
        <h2>International Data Transfers</h2>
        <p>Your data may be processed or stored in countries outside your region. Any transfers comply with applicable data protection laws such as:</p>
        <ul>
          <li>Standard Contractual Clauses (GDPR)</li>
          <li>LGPD and PIPL transfer requirements</li>
          <li>Adequacy decisions where applicable</li>
        </ul>
      </section>

      <section id="privacy-cookies">
        <h2>Cookies and Tracking Technologies</h2>
        <p>For details on how we use cookies and similar tools, please refer to our Cookies Policy.</p>
      </section>

      <section id="privacy-children">
        <h2>Children's Privacy</h2>
        <ul>
          <li>Hiliree is not intended for children under 13 (or the minimum age required in your region).</li>
          <li>We do not knowingly collect data from children.</li>
          <li>If we learn that a child has provided information, we will delete it promptly.</li>
        </ul>
      </section>

      <section id="privacy-changes">
        <h2>Changes to This Privacy Policy</h2>
        <p>We may update this policy to reflect changes in our practices or legal obligations. The "Last Updated" date will be revised accordingly. Material updates may be communicated through the Service or email.</p>
      </section>

      <section id="privacy-contact">
        <h2>Contact Us</h2>
        <p>For questions or privacy-related requests, contact us at:</p>
        <p>Email: <a href="mailto:privacy@hiliree.com">privacy@hiliree.com</a></p>
      </section>
    </>
  );
}

function SafetyContent() {
  return (
    <>
      <section id="safety-intro">
        <h2>Child Safety Standards</h2>
        <p>At Hiliree, we are committed to maintaining a safe environment for all users and to preventing child sexual abuse and exploitation (CSAE) on our platform. Hiliree strictly prohibits any content, behavior, or interaction that exploits, abuses, sexualizes, grooms, endangers, or harms minors.</p>
      </section>
      <section id="safety-zero">
        <h2>Zero-Tolerance Policy</h2>
        <p>Hiliree does not allow:</p>
        <ul>
          <li>Child sexual abuse material (CSAM)</li>
          <li>Any sexual content involving minors</li>
          <li>Grooming, sextortion, or predatory behavior toward minors</li>
          <li>Trafficking, exploitation, or solicitation involving minors</li>
          <li>Content that promotes, depicts, or facilitates child sexual abuse or exploitation</li>
          <li>Attempts to use Hiliree's messaging, media sharing, profiles, or community features to harm or exploit children</li>
        </ul>
      </section>
      <section id="safety-reporting">
        <h2>Reporting and User Safety</h2>
        <p>Hiliree provides users with ways to report unsafe behavior, inappropriate content, suspicious accounts, or child safety concerns within the app. Users may report content, messages, posts, profiles, or other interactions they believe violate these standards.</p>
      </section>
      <section id="safety-enforcement">
        <h2>Enforcement</h2>
        <p>When Hiliree becomes aware of content or conduct that may involve child sexual abuse material or child sexual abuse and exploitation, we may:</p>
        <ul>
          <li>Remove the content immediately</li>
          <li>Suspend or permanently ban the responsible account</li>
          <li>Restrict account access pending investigation</li>
          <li>Preserve relevant information where required for safety review or legal compliance</li>
          <li>Report the matter to appropriate regional or national authorities or child protection organizations where required by applicable law</li>
        </ul>
      </section>
      <section id="safety-cooperation">
        <h2>Cooperation With Authorities</h2>
        <p>Hiliree complies with applicable child safety laws and cooperates with lawful requests from law enforcement and relevant child protection authorities.</p>
      </section>
      <section id="safety-scope">
        <h2>Scope</h2>
        <p>These standards apply to all areas of the Hiliree platform, including but not limited to:</p>
        <ul>
          <li>User profiles</li>
          <li>Family tree content</li>
          <li>Chat and messaging</li>
          <li>Audio/video communication features</li>
          <li>Moments, posts, images, videos, and comments</li>
          <li>Any other user-generated content or interactions</li>
        </ul>
      </section>
      <section id="safety-contact">
        <h2>Contact</h2>
        <p>For child safety concerns, compliance inquiries, or law enforcement-related questions, please contact:</p>
        <p>Email: <a href="mailto:safety@hiliree.com">safety@hiliree.com</a></p>
      </section>
    </>
  );
}

function LicensesContent() {
  return (
    <>
      <section id="licenses-intro">
        <h2>Licenses and Third-Party</h2>
        <p>Hiliree uses trusted third-party tools and open-source components to provide, secure, and improve the Service. This section explains, at a high level, how those tools are used and how we manage related obligations.</p>
        <p>Last Updated: 11/19/2025</p>
      </section>
      <section id="licenses-services">
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
      <section id="licenses-opensource">
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
      <section id="licenses-data">
        <h2>Data Handling by Third Parties</h2>
        <p>Whenever we share data with third-party providers, we do so in line with our Privacy Policy and applicable laws. We:</p>
        <ul>
          <li>Share only the minimum data needed for the provider to perform their function (data minimization)</li>
          <li>Require providers to maintain appropriate technical and organizational security measures</li>
          <li>Use appropriate safeguards (e.g., contractual clauses) for international transfers where required</li>
        </ul>
        <p>For more details on how your personal data is processed, please refer to our Privacy Policy.</p>
      </section>
      <section id="licenses-disclaimer">
        <h2>Disclaimer of Liability for Third-Party Services</h2>
        <p>While Hiliree relies on third-party services to power certain features, those services are operated independently of Hiliree. Accordingly:</p>
        <ul>
          <li>Hiliree does not guarantee the availability, accuracy, or performance of any third-party service</li>
          <li>Third-party services are provided "as is" and "as available"</li>
          <li>To the fullest extent permitted by law, Hiliree is not liable for any direct or indirect damages arising from the use, failure, or unavailability of third-party services</li>
        </ul>
        <p>Your use of third-party services may also be governed by those providers' own terms and policies, which we encourage you to review.</p>
      </section>
      <section id="licenses-changes">
        <h2>Changes to Third-Party Tools</h2>
        <p>We may add, remove, or replace third-party tools and open-source components from time to time to improve security, performance, or functionality.</p>
        <p>When such changes are significant to how your data is handled, we will reflect them in our Privacy Policy or related documentation and update the "Last Updated" date.</p>
      </section>
      <section id="licenses-contact">
        <h2>Contact Us</h2>
        <p>If you have questions about our use of third-party tools or open-source components, you can contact us at: <a href="mailto:support@hiliree.com">support@hiliree.com</a></p>
      </section>
    </>
  );
}

function CookiesContent() {
  return (
    <>
      <section id="cookies-what">
        <h2>What Are Cookies?</h2>
        <p>Cookies are small files stored on your device that help websites and applications function, enhance performance, and deliver more personalized experience. Cookies may be set directly by us (first-party cookies) or by approved partners who provide supporting services (third-party cookies).</p>
      </section>
      <section id="cookies-types">
        <h2>Types of Cookies We Use</h2>
        <p>Hiliree uses a limited range of cookies designed to support functionality, improve performance, and ensure secure and reliable experience.</p>
        <h3>Essential Cookies</h3>
        <p>These cookies are required for the Service to operate. They enable core functions such as login, session management, navigation, and security protections.</p>
        <p>Purpose:</p>
        <ul>
          <li>To provide access to key app features</li>
          <li>To maintain session integrity</li>
          <li>To protect the platform from misuse and unauthorized access</li>
        </ul>
        <h3>Performance & Analytics Cookies</h3>
        <p>These cookies collect anonymized information about how users interact with the Service. They help us understand usage patterns and improve stability, speed, and overall functionality.</p>
        <p>Purpose:</p>
        <ul>
          <li>To analyze user flow and engagement</li>
          <li>To identify app performance issues</li>
          <li>To support service optimization and quality improvements</li>
        </ul>
        <h3>Functional Cookies</h3>
        <p>These cookies allow the Service to remember your preferences, such as language settings or display options, so you receive consistent, personalized experience.</p>
        <p>Purpose:</p>
        <ul>
          <li>To store preference settings</li>
          <li>To improve usability and convenience</li>
        </ul>
        <h3>Limited Third-Party Cookies</h3>
        <p>Certain trusted service providers may place cookies that support essential Service functions such as authentication, content delivery, app performance, and system analytics.</p>
        <p><strong>Important:</strong> We do not disclose internal systems, programs, infrastructure providers, or backend architecture. Third-party cookies are used strictly for operational purposes and not for profiling or cross-site tracking.</p>
        <p>Purpose:</p>
        <ul>
          <li>To support technical delivery of the Service</li>
          <li>To ensure app stability, secure interactions, and reliable functionality</li>
          <li>To assist with performance monitoring</li>
        </ul>
      </section>
      <section id="cookies-why">
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
      <section id="cookies-third-party">
        <h2>Third-Party Tracking Technologies</h2>
        <p>Hiliree may work with authorized partners who provide essential services such as analytics, security, app distribution, and feature support. These partners may use cookies or similar technologies as part of their standard operations.</p>
        <ul>
          <li>We carefully evaluate each partner to ensure compliance with global privacy requirements.</li>
          <li>We do not permit advertising networks or behavioral targeting platforms to access your usage data.</li>
        </ul>
      </section>
      <section id="cookies-consent">
        <h2>Consent and Control (GDPR, CCPA & Global Standards)</h2>
        <p>Upon first use of the Service, you will be presented with a cookie banner or notice requesting your consent for non-essential cookies. You may:</p>
        <ul>
          <li>Accept all cookies</li>
          <li>Reject non-essential cookies</li>
          <li>Adjust your preferences at any time</li>
        </ul>
        <p>Your choice will not affect essential features required for the Service to function properly.</p>
      </section>
      <section id="cookies-manage">
        <h2>Managing Your Cookie Preferences</h2>
        <h3>In Your Device or Browser</h3>
        <p>Most devices and browsers allow you to manage cookie settings, delete cookies, or block them entirely. Please note that disabling essential cookies may affect Service functionality.</p>
        <h3>Cookie Management Tools</h3>
        <p>You may adjust your cookie preference at any time through the "Cookie Settings" section available within the app or website (where applicable).</p>
      </section>
      <section id="cookies-dnt">
        <h2>Do Not Track (DNT)</h2>
        <p>The Service does not currently respond to Do Not Track signals because no consistent industry standard exists. Instead, we rely on your explicit cookie preferences set within our consent tools.</p>
      </section>
      <section id="cookies-duration">
        <h2>Cookie Duration</h2>
        <ul>
          <li><strong>Session Cookies:</strong> Removed when you close the app or browser</li>
          <li><strong>Persistent Cookies:</strong> Remain for a limited period to remember preferences unless manually deleted</li>
        </ul>
        <p>We do not intentionally store cookies longer than operationally necessary.</p>
      </section>
      <section id="cookies-changes">
        <h2>Changes to This Policy</h2>
        <p>Hiliree may update this Cookies Policy to reflect changes in technology, regulations, or our practices. The "Last Updated" date will indicate the latest revision. Significant changes will be communicated through the app or website.</p>
        <p>Continued use of the Service after any update constitutes acceptance of the revised policy.</p>
      </section>
      <section id="cookies-contact">
        <h2>Contact Us</h2>
        <p>If you have questions about this Cookies Policy or how we use cookies, please contact us at: <a href="mailto:support@hiliree.com">support@hiliree.com</a></p>
      </section>
    </>
  );
}