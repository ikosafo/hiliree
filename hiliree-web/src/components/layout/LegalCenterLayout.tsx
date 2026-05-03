"use client";
import { useState, ReactNode, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { BookOpen, Shield, ArrowUp, Lock } from "lucide-react";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
type LegalTab = "privacy" | "safety" | "licenses" | "cookies";

/* ─────────────────────────────────────────────
   Reading Progress Bar
───────────────────────────────────────────── */
function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const [pct, setPct] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setPct(latest * 100);
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 inset-x-0 z-[70] h-px bg-transparent pointer-events-none"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-gray-900 to-gray-600"
        style={{
          width: `${pct}%`,
        }}
      />
    </motion.div>
  );
}

interface TabContent {
  id: LegalTab;
  label: string;
  icon: React.ReactNode;
  title: string;
  lastUpdated: string;
  sections: { id: string; label: string }[];
  content: ReactNode;
}

/* ─────────────────────────────────────────────
   Floating Tab Indicator
───────────────────────────────────────────── */
function FloatingTabIndicator({ tabs, activeTab, scrollProgress }: { tabs: TabContent[]; activeTab: LegalTab; scrollProgress: number }) {
  const [documentHeight, setDocumentHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      setDocumentHeight(document.documentElement.scrollHeight);
      setWindowHeight(window.innerHeight);
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const shouldShow = scrollProgress > 300 && scrollProgress < documentHeight - windowHeight - 100;
  const currentTab = tabs.find(t => t.id === activeTab);

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 px-5 py-3 rounded-full bg-gray-900 text-white shadow-xl"
        >
          <p className="text-sm font-semibold">
            Reading: <span className="font-bold">{currentTab?.title}</span>
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
function SidebarNav({ sections, activeTab }: { sections: { id: string; label: string }[]; activeTab: LegalTab }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
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
    <div className="sticky top-24 flex flex-col h-[calc(100vh-96px)]">
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-6 pb-5 border-b border-gray-200 flex-shrink-0">
        <div className="w-7 h-7 rounded-lg bg-gray-900/5 flex items-center justify-center">
          <BookOpen size={13} className="text-gray-900" strokeWidth={1.5} />
        </div>
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
          Sections
        </span>
      </div>

      {/* Scrollable Navigation */}
      <nav className="space-y-0.5 overflow-y-auto flex-1 pr-2">
        {sections.map((s) => {
          const isActive = activeId === s.id;
          return (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`group w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                isActive
                  ? "bg-gray-900 text-white font-medium"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {s.label}
            </button>
          );
        })}
      </nav>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="mt-6 text-xs font-medium text-gray-400 hover:text-gray-900 flex items-center gap-2 group transition-colors flex-shrink-0"
      >
        <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
        Top
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Tab Navigation
───────────────────────────────────────────── */
function TabNav({ tabs, activeTab, onTabChange }: { tabs: TabContent[]; activeTab: LegalTab; onTabChange: (tab: LegalTab) => void }) {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="section-wrapper">
        <div className="flex gap-8 overflow-x-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-1 py-4 text-sm font-medium whitespace-nowrap transition-all duration-200 border-b-2 ${
                  isActive
                    ? "text-gray-900 border-gray-900"
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

/* ─────────────────────────────────────────────
   Main Layout
───────────────────────────────────────────── */
export function LegalCenterLayout() {
  const [activeTab, setActiveTab] = useState<LegalTab>("privacy");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollProgress(scrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs: TabContent[] = [
    {
      id: "privacy",
      label: "Privacy Policy",
      icon: <Lock size={16} />,
      title: "Privacy Policy",
      lastUpdated: "11/19/2025",
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
      id: "safety",
      label: "Child Safety Standards",
      icon: <Shield size={16} />,
      title: "Child Safety Standards",
      lastUpdated: "11/19/2025",
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
      id: "licenses",
      label: "Licenses and Third-Party",
      icon: <BookOpen size={16} />,
      title: "Licenses and Third-Party",
      lastUpdated: "11/19/2025",
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
      id: "cookies",
      label: "Cookies Policy",
      icon: <BookOpen size={16} />,
      title: "Cookies Policy",
      lastUpdated: "08/27/2025",
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
    <>
      <ReadingProgress />
      <FloatingTabIndicator tabs={tabs} activeTab={activeTab} scrollProgress={scrollProgress} />

      <main className="min-h-screen pt-20 bg-white">
        {/* Header Section */}
        <div className="section-wrapper py-12 border-b border-gray-200">
          <motion.div
            key={`${activeTab}-header`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-5xl mx-auto"
          >
            {/* Badge */}
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                Legal Document
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent" />
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl lg:text-5xl leading-tight text-gray-900 mb-6">
              {tabs.find(t => t.id === activeTab)?.title}
            </h1>

            {/* Metadata */}
            <div className="text-sm text-gray-500">
              Last updated <span className="font-semibold text-gray-700">{tabs.find(t => t.id === activeTab)?.lastUpdated}</span>
            </div>
          </motion.div>
        </div>

        {/* Tab Navigation */}
        <TabNav tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="section-wrapper py-12 lg:py-16 relative">
          <div className="grid lg:grid-cols-[220px_1fr] gap-12 lg:gap-16 max-w-5xl mx-auto">

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <SidebarNav sections={currentTab.sections} activeTab={activeTab} />
            </aside>

            {/* Article */}
            <article className="min-w-0">
              {/* Divider */}
              <div className="mb-12 h-px bg-gray-200" />

              {/* Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="
                    [&_section]:scroll-mt-20
                    [&_section]:mb-14

                    [&_h2]:font-serif
                    [&_h2]:text-2xl
                    [&_h2]:lg:text-3xl
                    [&_h2]:text-gray-900
                    [&_h2]:leading-tight
                    [&_h2]:mb-6
                    [&_h2]:pb-4
                    [&_h2]:border-b
                    [&_h2]:border-gray-200

                    [&_h3]:text-base
                    [&_h3]:font-semibold
                    [&_h3]:text-gray-900
                    [&_h3]:mb-4
                    [&_h3]:mt-8

                    [&_p]:text-base
                    [&_p]:text-gray-600
                    [&_p]:leading-[1.8]
                    [&_p]:mb-5

                    [&_p:first-of-type]:text-lg
                    [&_p:first-of-type]:text-gray-700

                    [&_ul]:space-y-3
                    [&_ul]:mb-6
                    [&_ul]:pl-0
                    [&_ul]:list-none

                    [&_li]:relative
                    [&_li]:flex
                    [&_li]:items-start
                    [&_li]:gap-3
                    [&_li]:text-base
                    [&_li]:text-gray-600
                    [&_li]:leading-relaxed

                    [&_strong]:text-gray-900
                    [&_strong]:font-semibold

                    [&_a]:text-gray-900
                    [&_a]:font-medium
                    [&_a]:underline
                    [&_a]:underline-offset-2
                    [&_a]:decoration-gray-300
                    [&_a:hover]:decoration-gray-900
                    [&_a]:transition-colors
                    [&_a]:duration-200
                  "
                >
                  {currentTab.content}
                </motion.div>
              </AnimatePresence>

              {/* Footer */}
              <motion.div
                key={`${activeTab}-footer`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-16 pt-10 border-t border-gray-200"
              >
                <p className="text-sm text-gray-600 leading-relaxed">
                  If you have any questions, please contact us at{" "}
                  <a href="mailto:support@hiliree.com" className="text-gray-900 font-medium hover:underline">
                    support@hiliree.com
                  </a>
                </p>
              </motion.div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}

/* ─────────────────────────────────────────────
   Content Components
───────────────────────────────────────────── */

function Dot() {
  return <span className="mt-[9px] w-1.5 h-1.5 rounded-full shrink-0 bg-gray-400/40" aria-hidden />;
}

function PrivacyContent() {
  return (
    <>
      <section id="privacy-intro">
        <h2>Privacy Policy</h2>
        <p>
          At Hiliree, we respect your privacy and are committed to safeguarding your personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you use the Hiliree mobile application and website (the "Service"). It also outlines your rights under applicable privacy laws including GDPR, CCPA, LGPD, PIPL, and other global data protection regulations.
        </p>
        <p>
          By using Hiliree, you agree to this Privacy Policy. If you do not agree, please discontinue use of the Service.
        </p>
      </section>

      <section id="privacy-info-collect">
        <h2>Information We Collect</h2>
        <p>We collect only the information necessary to operate the Service and improve your experience.</p>

        <h3>Personal Information</h3>
        <p>This includes data that can identify you directly or indirectly:</p>
        <ul>
          <li><Dot /><span><strong>Account Information:</strong> Your name, phone number, email address, profile photo, and related account details.</span></li>
          <li><Dot /><span><strong>Family Tree Information:</strong> Voluntary information you provide to build or manage family trees, including names, relationships, birthdates, and optional profile details for each member.</span></li>
          <li><Dot /><span><strong>Contact Information:</strong> If you invite others to join your family or connect accounts, we may collect their email or phone number to deliver the invitation.</span></li>
          <li><Dot /><span><strong>Device & Technical Information:</strong> Device ID, IP address, operating system, app version, and basic diagnostic data used for security and performance.</span></li>
        </ul>

        <h3>Non-Personal Information</h3>
        <p>This includes aggregated or anonymized data:</p>
        <ul>
          <li><Dot /><span>Usage statistics</span></li>
          <li><Dot /><span>Interaction patterns</span></li>
          <li><Dot /><span>App performance metrics</span></li>
          <li><Dot /><span>Non-identifiable technical data</span></li>
        </ul>

        <h3>Information from Third Parties</h3>
        <p>
          We may receive limited information from third-party login providers (e.g., Apple or Google) if you choose to log in using those accounts. Only basic account identifiers are shared, and no passwords or sensitive data are transferred.
        </p>
      </section>

      <section id="privacy-how-use">
        <h2>How We Use Your Information</h2>
        <p>We use your information strictly to provide, maintain, and improve the Service.</p>
        <ul>
          <li><Dot /><span><strong>Account Management:</strong> Creating and managing your profile and login.</span></li>
          <li><Dot /><span><strong>Family Tree Features:</strong> Supporting tree creation, sharing, and member relationships.</span></li>
          <li><Dot /><span><strong>Communications:</strong> Sending service updates, notifications, and support messages.</span></li>
          <li><Dot /><span><strong>Security & Fraud Prevention:</strong> Protecting the platform and detecting unauthorized activity.</span></li>
          <li><Dot /><span><strong>Improvement & Analytics:</strong> Monitoring usage trends to improve performance, stability, and user experience.</span></li>
          <li><Dot /><span><strong>Compliance:</strong> Meeting our legal and regulatory obligations.</span></li>
        </ul>
        <p>
          We do not use your personal data for financial transactions, contributions, or project-related tools at this time.
        </p>
      </section>

      <section id="privacy-legal-basis">
        <h2>Legal Basis for Processing (GDPR Users)</h2>
        <p>If you are located in the EEA, we rely on these legal bases:</p>
        <ul>
          <li><Dot /><span>Consent</span></li>
          <li><Dot /><span>Performance of a Contract</span></li>
          <li><Dot /><span>Legal Obligation</span></li>
          <li><Dot /><span>Legitimate Interests, balanced against your rights</span></li>
        </ul>
      </section>

      <section id="privacy-share">
        <h2>How We Share Your Information</h2>
        <p>Hiliree does not sell your personal information.</p>
        <p>We share information only under the following strict circumstances:</p>

        <h3>Service Providers (Processors)</h3>
        <p>We work with trusted service providers who assist with:</p>
        <ul>
          <li><Dot /><span>App functionality</span></li>
          <li><Dot /><span>Data hosting and storage</span></li>
          <li><Dot /><span>Security</span></li>
          <li><Dot /><span>Performance analytics</span></li>
          <li><Dot /><span>Customer support</span></li>
          <li><Dot /><span>Distribution of the app via recognized platforms</span></li>
        </ul>
        <p>
          All service providers are bound by confidentiality and data-protection agreements. We do not reveal names of internal infrastructure providers for security reasons.
        </p>

        <h3>Legal Requirements</h3>
        <p>
          We may share information if required by law, court order, or governmental request.
        </p>

        <h3>Business Transitions</h3>
        <p>
          If Hiliree undergoes a merger, acquisition, or restructuring, your data may transfer as part of the business assets. You will be notified of any material changes.
        </p>
      </section>

      <section id="privacy-rights">
        <h2>Your Privacy Rights</h2>
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul>
          <li><Dot /><span>Access the personal data we hold</span></li>
          <li><Dot /><span>Request corrections to inaccurate information</span></li>
          <li><Dot /><span>Request deletion of your data ("Right to be Forgotten")</span></li>
          <li><Dot /><span>Withdraw consent where applicable</span></li>
          <li><Dot /><span>Restrict or object to processing</span></li>
          <li><Dot /><span>Request a portable copy of your data</span></li>
        </ul>
        <p>
          To exercise your rights, email privacy@hiliree.com. We may verify your identity before processing your request.
        </p>
      </section>

      <section id="privacy-security">
        <h2>Data Security</h2>
        <p>We use administrative, technical, and physical safeguards consistent with industry standards to protect your data, including:</p>
        <ul>
          <li><Dot /><span>Encrypted data transmission</span></li>
          <li><Dot /><span>Access control restrictions</span></li>
          <li><Dot /><span>Routine security monitoring</span></li>
          <li><Dot /><span>Regular policy and practice reviews</span></li>
        </ul>
        <p>
          No system is completely secure, but we take reasonable and appropriate steps to protect your data from unauthorized access or disclosure.
        </p>
      </section>

      <section id="privacy-retention">
        <h2>Data Retention</h2>
        <p>We retain your personal data only for as long as necessary for the purposes outlined in this policy, unless a longer period is required by law.</p>
        <ul>
          <li><Dot /><span><strong>Account Data:</strong> Stored while your account is active.</span></li>
          <li><Dot /><span><strong>Family Tree Data:</strong> Stored until you remove it or request deletion.</span></li>
          <li><Dot /><span><strong>Technical Logs:</strong> Retained for security and diagnostic purposes for a limited period.</span></li>
        </ul>
        <p>
          When data is no longer needed, it is securely deleted or anonymized.
        </p>
      </section>

      <section id="privacy-transfers">
        <h2>International Data Transfers</h2>
        <p>Your data may be processed or stored in countries outside your region. Any transfers comply with applicable data protection laws such as:</p>
        <ul>
          <li><Dot /><span>Standard Contractual Clauses (GDPR)</span></li>
          <li><Dot /><span>LGPD and PIPL transfer requirements</span></li>
          <li><Dot /><span>Adequacy decisions where applicable</span></li>
        </ul>
      </section>

      <section id="privacy-cookies">
        <h2>Cookies and Tracking Technologies</h2>
        <p>
          For details on how we use cookies and similar tools, please refer to our Cookies Policy.
        </p>
      </section>

      <section id="privacy-children">
        <h2>Children's Privacy</h2>
        <ul>
          <li><Dot /><span>Hiliree is not intended for children under 13 (or the minimum age required in your region).</span></li>
          <li><Dot /><span>We do not knowingly collect data from children.</span></li>
          <li><Dot /><span>If we learn that a child has provided information, we will delete it promptly.</span></li>
        </ul>
      </section>

      <section id="privacy-changes">
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this policy to reflect changes in our practices or legal obligations. The "Last Updated" date will be revised accordingly. Material updates may be communicated through the Service or email.
        </p>
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
        <p>
          At Hiliree, we are committed to maintaining a safe environment for all users and to preventing child sexual abuse and exploitation (CSAE) on our platform. Hiliree strictly prohibits any content, behavior, or interaction that exploits, abuses, sexualizes, grooms, endangers, or harms minors.
        </p>
      </section>

      <section id="safety-zero">
        <h2>Zero-Tolerance Policy</h2>
        <p>Hiliree does not allow:</p>
        <ul>
          <li><Dot /><span>Child sexual abuse material (CSAM)</span></li>
          <li><Dot /><span>Any sexual content involving minors</span></li>
          <li><Dot /><span>Grooming, sextortion, or predatory behavior toward minors</span></li>
          <li><Dot /><span>Trafficking, exploitation, or solicitation involving minors</span></li>
          <li><Dot /><span>Content that promotes, depicts, or facilitates child sexual abuse or exploitation</span></li>
          <li><Dot /><span>Attempts to use Hiliree's messaging, media sharing, profiles, or community features to harm or exploit children</span></li>
        </ul>
      </section>

      <section id="safety-reporting">
        <h2>Reporting and User Safety</h2>
        <p>
          Hiliree provides users with ways to report unsafe behavior, inappropriate content, suspicious accounts, or child safety concerns within the app. Users may report content, messages, posts, profiles, or other interactions they believe violate these standards.
        </p>
      </section>

      <section id="safety-enforcement">
        <h2>Enforcement</h2>
        <p>When Hiliree becomes aware of content or conduct that may involve child sexual abuse material or child sexual abuse and exploitation, we may:</p>
        <ul>
          <li><Dot /><span>Remove the content immediately</span></li>
          <li><Dot /><span>Suspend or permanently ban the responsible account</span></li>
          <li><Dot /><span>Restrict account access pending investigation</span></li>
          <li><Dot /><span>Preserve relevant information where required for safety review or legal compliance</span></li>
          <li><Dot /><span>Report the matter to appropriate regional or national authorities or child protection organizations where required by applicable law</span></li>
        </ul>
      </section>

      <section id="safety-cooperation">
        <h2>Cooperation With Authorities</h2>
        <p>
          Hiliree complies with applicable child safety laws and cooperates with lawful requests from law enforcement and relevant child protection authorities.
        </p>
      </section>

      <section id="safety-scope">
        <h2>Scope</h2>
        <p>These standards apply to all areas of the Hiliree platform, including but not limited to:</p>
        <ul>
          <li><Dot /><span>User profiles</span></li>
          <li><Dot /><span>Family tree content</span></li>
          <li><Dot /><span>Chat and messaging</span></li>
          <li><Dot /><span>Audio/video communication features</span></li>
          <li><Dot /><span>Moments, posts, images, videos, and comments</span></li>
          <li><Dot /><span>Any other user-generated content or interactions</span></li>
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
        <p>
          Hiliree uses trusted third-party tools and open-source components to provide, secure, and improve the Service. This section explains, at a high level, how those tools are used and how we manage related obligations.
        </p>
        <p>Last Updated: 11/19/2025</p>
      </section>

      <section id="licenses-services">
        <h2>Third-Party Services</h2>
        <p>We work with carefully selected third-party service providers to support features such as:</p>
        <ul>
          <li><Dot /><span>Application hosting and infrastructure</span></li>
          <li><Dot /><span>Data storage and backup</span></li>
          <li><Dot /><span>Security and performance monitoring</span></li>
          <li><Dot /><span>Authentication and communication features</span></li>
          <li><Dot /><span>Mobile app distribution (e.g., app stores)</span></li>
        </ul>
        <p>
          These providers act as our processors or independent controllers, depending on their role, and may process limited data necessary to deliver their services.
        </p>
        <p>
          We do not publicly list all internal platforms, systems, or vendors to protect the security and integrity of our infrastructure.
        </p>
        <p>
          Your use of the Service may be subject to the terms and privacy practices of these third parties. Where required, we enter into appropriate agreements (including Data Processing Agreements) to ensure compliance with applicable data protection laws.
        </p>
      </section>

      <section id="licenses-opensource">
        <h2>Open-Source Software</h2>
        <p>
          Hiliree integrates open-source software components that are essential to the operation of the Service. Each component is used in accordance with its applicable license (for example, MIT, Apache, or similar open-source licenses).
        </p>
        <p>Where required, attribution or license text may be included:</p>
        <ul>
          <li><Dot /><span>Within the app</span></li>
          <li><Dot /><span>In documentation</span></li>
          <li><Dot /><span>Or in a dedicated "Open-Source Notices" section available on request</span></li>
        </ul>
        <p>
          Use of the Service does not grant you ownership of the underlying software, and all rights not expressly granted are reserved by the respective rights holders.
        </p>
      </section>

      <section id="licenses-data">
        <h2>Data Handling by Third Parties</h2>
        <p>
          Whenever we share data with third-party providers, we do so in line with our Privacy Policy and applicable laws. We:
        </p>
        <ul>
          <li><Dot /><span>Share only the minimum data needed for the provider to perform their function (data minimization)</span></li>
          <li><Dot /><span>Require providers to maintain appropriate technical and organizational security measures</span></li>
          <li><Dot /><span>Use appropriate safeguards (e.g., contractual clauses) for international transfers where required</span></li>
        </ul>
        <p>
          For more details on how your personal data is processed, please refer to our Privacy Policy.
        </p>
      </section>

      <section id="licenses-disclaimer">
        <h2>Disclaimer of Liability for Third-Party Services</h2>
        <p>
          While Hiliree relies on third-party services to power certain features, those services are operated independently of Hiliree. Accordingly:
        </p>
        <ul>
          <li><Dot /><span>Hiliree does not guarantee the availability, accuracy, or performance of any third-party service</span></li>
          <li><Dot /><span>Third-party services are provided "as is" and "as available"</span></li>
          <li><Dot /><span>To the fullest extent permitted by law, Hiliree is not liable for any direct or indirect damages arising from the use, failure, or unavailability of third-party services</span></li>
        </ul>
        <p>
          Your use of third-party services may also be governed by those providers' own terms and policies, which we encourage you to review.
        </p>
      </section>

      <section id="licenses-changes">
        <h2>Changes to Third-Party Tools</h2>
        <p>
          We may add, remove, or replace third-party tools and open-source components from time to time to improve security, performance, or functionality.
        </p>
        <p>
          When such changes are significant to how your data is handled, we will reflect them in our Privacy Policy or related documentation and update the "Last Updated" date.
        </p>
      </section>

      <section id="licenses-contact">
        <h2>Contact Us</h2>
        <p>
          If you have questions about our use of third-party tools or open-source components, you can contact us at: <a href="mailto:support@hiliree.com">support@hiliree.com</a>
        </p>
      </section>
    </>
  );
}

function CookiesContent() {
  return (
    <>
      <section id="cookies-what">
        <h2>What Are Cookies?</h2>
        <p>
          Cookies are small files stored on your device that help websites and applications function, enhance performance, and deliver more personalized experience. Cookies may be set directly by us (first-party cookies) or by approved partners who provide supporting services (third-party cookies).
        </p>
      </section>

      <section id="cookies-types">
        <h2>Types of Cookies We Use</h2>
        <p>
          Hiliree uses a limited range of cookies designed to support functionality, improve performance, and ensure secure and reliable experience.
        </p>

        <h3>Essential Cookies</h3>
        <p>These cookies are required for the Service to operate. They enable core functions such as login, session management, navigation, and security protections.</p>
        <p>Purpose:</p>
        <ul>
          <li><Dot /><span>To provide access to key app features</span></li>
          <li><Dot /><span>To maintain session integrity</span></li>
          <li><Dot /><span>To protect the platform from misuse and unauthorized access</span></li>
        </ul>

        <h3>Performance & Analytics Cookies</h3>
        <p>
          These cookies collect anonymized information about how users interact with the Service. They help us understand usage patterns and improve stability, speed, and overall functionality.
        </p>
        <p>Purpose:</p>
        <ul>
          <li><Dot /><span>To analyze user flow and engagement</span></li>
          <li><Dot /><span>To identify app performance issues</span></li>
          <li><Dot /><span>To support service optimization and quality improvements</span></li>
        </ul>

        <h3>Functional Cookies</h3>
        <p>
          These cookies allow the Service to remember your preferences, such as language settings or display options, so you receive consistent, personalized experience.
        </p>
        <p>Purpose:</p>
        <ul>
          <li><Dot /><span>To store preference settings</span></li>
          <li><Dot /><span>To improve usability and convenience</span></li>
        </ul>

        <h3>Limited Third-Party Cookies</h3>
        <p>
          Certain trusted service providers may place cookies that support essential Service functions such as authentication, content delivery, app performance, and system analytics.
        </p>
        <p>
          <strong>Important:</strong> We do not disclose internal systems, programs, infrastructure providers, or backend architecture. Third-party cookies are used strictly for operational purposes and not for profiling or cross-site tracking.
        </p>
        <p>Purpose:</p>
        <ul>
          <li><Dot /><span>To support technical delivery of the Service</span></li>
          <li><Dot /><span>To ensure app stability, secure interactions, and reliable functionality</span></li>
          <li><Dot /><span>To assist with performance monitoring</span></li>
        </ul>
      </section>

      <section id="cookies-why">
        <h2>Why We Use Cookies</h2>
        <p>Hiliree uses cookies for the following purposes:</p>
        <ul>
          <li><Dot /><span><strong>Service delivery:</strong> Enabling features necessary for the app to function</span></li>
          <li><Dot /><span><strong>Security:</strong> Detecting misuse and enhancing safety</span></li>
          <li><Dot /><span><strong>Performance analysis:</strong> Understanding how the Service is used</span></li>
          <li><Dot /><span><strong>User experience:</strong> Remembering settings and improving navigation</span></li>
        </ul>
        <p>
          We do not use cookies to collect sensitive personal information, financial details, or project data.
        </p>
      </section>

      <section id="cookies-third-party">
        <h2>Third-Party Tracking Technologies</h2>
        <p>
          Hiliree may work with authorized partners who provide essential services such as analytics, security, app distribution, and feature support. These partners may use cookies or similar technologies as part of their standard operations.
        </p>
        <ul>
          <li><Dot /><span>We carefully evaluate each partner to ensure compliance with global privacy requirements.</span></li>
          <li><Dot /><span>We do not permit advertising networks or behavioral targeting platforms to access your usage data.</span></li>
        </ul>
      </section>

      <section id="cookies-consent">
        <h2>Consent and Control (GDPR, CCPA & Global Standards)</h2>
        <p>
          Upon first use of the Service, you will be presented with a cookie banner or notice requesting your consent for non-essential cookies. You may:
        </p>
        <ul>
          <li><Dot /><span>Accept all cookies</span></li>
          <li><Dot /><span>Reject non-essential cookies</span></li>
          <li><Dot /><span>Adjust your preferences at any time</span></li>
        </ul>
        <p>
          Your choice will not affect essential features required for the Service to function properly.
        </p>
      </section>

      <section id="cookies-manage">
        <h2>Managing Your Cookie Preferences</h2>

        <h3>In Your Device or Browser</h3>
        <p>
          Most devices and browsers allow you to manage cookie settings, delete cookies, or block them entirely. Please note that disabling essential cookies may affect Service functionality.
        </p>

        <h3>Cookie Management Tools</h3>
        <p>
          You may adjust your cookie preference at any time through the "Cookie Settings" section available within the app or website (where applicable).
        </p>
      </section>

      <section id="cookies-dnt">
        <h2>Do Not Track (DNT)</h2>
        <p>
          The Service does not currently respond to Do Not Track signals because no consistent industry standard exists. Instead, we rely on your explicit cookie preferences set within our consent tools.
        </p>
      </section>

      <section id="cookies-duration">
        <h2>Cookie Duration</h2>
        <ul>
          <li><Dot /><span><strong>Session Cookies:</strong> Removed when you close the app or browser</span></li>
          <li><Dot /><span><strong>Persistent Cookies:</strong> Remain for a limited period to remember preferences unless manually deleted</span></li>
        </ul>
        <p>
          We do not intentionally store cookies longer than operationally necessary.
        </p>
      </section>

      <section id="cookies-changes">
        <h2>Changes to This Policy</h2>
        <p>
          Hiliree may update this Cookies Policy to reflect changes in technology, regulations, or our practices. The "Last Updated" date will indicate the latest revision. Significant changes will be communicated through the app or website.
        </p>
        <p>
          Continued use of the Service after any update constitutes acceptance of the revised policy.
        </p>
      </section>

      <section id="cookies-contact">
        <h2>Contact Us</h2>
        <p>
          If you have questions about this Cookies Policy or how we use cookies, please contact us at: <a href="mailto:support@hiliree.com">support@hiliree.com</a>
        </p>
      </section>
    </>
  );
}