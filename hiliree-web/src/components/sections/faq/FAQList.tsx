"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, MessageCircle } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

type FAQSection = {
  title: string;
  items: FAQItem[];
};

const faqData: FAQSection[] = [
  {
    title: "General Information",
    items: [
      {
        question: "What is Hiliree?",
        answer: "Hiliree is a family connection app that helps you build your family tree, connect with relatives, share memories, chat, call, schedule events, and preserve your family story across generations.",
      },
      {
        question: "What can I do on Hiliree?",
        answer: (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[12px]">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="py-2 pr-4 font-semibold text-gray-700">Feature</th>
                  <th className="py-2 font-semibold text-gray-700">What You Can Do</th>
                </tr>
              </thead>
              <tbody className="text-gray-500">
                <tr className="border-b border-gray-50"><td className="py-2 pr-4 font-medium text-gray-600">Family Tree</td><td className="py-2">Add and organize relatives across generations</td></tr>
                <tr className="border-b border-gray-50"><td className="py-2 pr-4 font-medium text-gray-600">Handshake Invites</td><td className="py-2">Connect with real family members through mutual approval</td></tr>
                <tr className="border-b border-gray-50"><td className="py-2 pr-4 font-medium text-gray-600">Chats</td><td className="py-2">Message connected family members</td></tr>
                <tr className="border-b border-gray-50"><td className="py-2 pr-4 font-medium text-gray-600">Voice & Video Calls</td><td className="py-2">Call family members directly in the app</td></tr>
                <tr className="border-b border-gray-50"><td className="py-2 pr-4 font-medium text-gray-600">Moments</td><td className="py-2">Share photos, videos, memories, and family updates</td></tr>
                <tr className="border-b border-gray-50"><td className="py-2 pr-4 font-medium text-gray-600">Events</td><td className="py-2">Create family gatherings, celebrations, and meetings</td></tr>
                <tr className="border-b border-gray-50"><td className="py-2 pr-4 font-medium text-gray-600">Map View</td><td className="py-2">View family locations where shared or added</td></tr>
                <tr className="border-b border-gray-50"><td className="py-2 pr-4 font-medium text-gray-600">Home Insights</td><td className="py-2">Discover birthdays, family patterns, and "Did You Know" facts</td></tr>
                <tr><td className="py-2 pr-4 font-medium text-gray-600">Privacy Settings</td><td className="py-2">Control what information family members can see</td></tr>
              </tbody>
            </table>
          </div>
        ),
      },
    ],
  },
  {
    title: "Getting Started",
    items: [
      { question: "How do I create a Hiliree account?", answer: "Download Hiliree from the Apple App Store or Google Play Store, open the app, and follow the sign-up steps." },
      { question: "Do I have to pay to create an account?", answer: "No. You do not need to pay a fee to create a Hiliree account." },
      { question: "What information should I add to my profile?", answer: "Add your name, birthday, profile photo, location, and other details you want your family to see. This helps Hiliree organize your tree and provide better family insights." },
    ],
  },
  {
    title: "Family Tree",
    items: [
      { question: "How do I start my family tree?", answer: "Start by adding yourself, then add your parents, siblings, spouse, children, and other relatives in the correct family relationship line." },
      { question: "Why is the relationship line important?", answer: "Hiliree follows real family structure. Each person should be added as the correct relationship, such as parent, sibling, spouse, child, or relative. For example, a parent should not be added as a sibling." },
      { question: "How does Hiliree organize siblings?", answer: "Hiliree automatically organizes siblings by age when birthdays are added." },
      { question: "Do I need to manually arrange siblings?", answer: "No. Add the correct birthday, and Hiliree will help organize siblings in the proper age order." },
      { question: "Why do men appear on the left and women on the right?", answer: "Hiliree uses a traditional family tree display style where men appear on the left and women appear on the right. This helps make the tree easier to view and understand." },
    ],
  },
  {
    title: "Adding Family Members",
    items: [
      {
        question: "What information should I add for a family member?",
        answer: (
          <div>
            <p className="mb-3">Add as much accurate information as possible.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[12px]">
                <thead><tr className="border-b border-gray-100"><th className="py-2 pr-4 font-semibold text-gray-700">Information</th><th className="py-2 font-semibold text-gray-700">Why It Helps</th></tr></thead>
                <tbody className="text-gray-500">
                  <tr className="border-b border-gray-50"><td className="py-2 pr-4 font-medium text-gray-600">Full name</td><td className="py-2">Helps identify the correct person</td></tr>
                  <tr className="border-b border-gray-50"><td className="py-2 pr-4 font-medium text-gray-600">Birthday</td><td className="py-2">Helps with age order, birthdays, and insights</td></tr>
                  <tr className="border-b border-gray-50"><td className="py-2 pr-4 font-medium text-gray-600">Gender</td><td className="py-2">Helps display the tree correctly</td></tr>
                  <tr className="border-b border-gray-50"><td className="py-2 pr-4 font-medium text-gray-600">Current location</td><td className="py-2">Helps show where living relatives are</td></tr>
                  <tr className="border-b border-gray-50"><td className="py-2 pr-4 font-medium text-gray-600">Pinned location</td><td className="py-2">Helps preserve places linked to deceased relatives</td></tr>
                  <tr className="border-b border-gray-50"><td className="py-2 pr-4 font-medium text-gray-600">Death date</td><td className="py-2">Helps keep family history accurate</td></tr>
                  <tr><td className="py-2 pr-4 font-medium text-gray-600">Profile photo</td><td className="py-2">Makes the tree more personal and recognizable</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
      },
      { question: "Can I add deceased relatives?", answer: "Yes. Hiliree allows you to add relatives who have passed away so your family history and legacy can be preserved." },
      { question: "What location should I use for a deceased relative?", answer: "You can pin a meaningful location, such as their hometown, final resting place, or another important family location." },
      { question: "Why should I add a death date?", answer: "Adding a death date helps Hiliree keep your family history accurate and provide better family timeline and legacy insights." },
    ],
  },
  {
    title: "Automatic Family Placeholders",
    items: [
      {
        question: "Why did Hiliree automatically add a spouse or parents when I added someone?",
        answer: "Hiliree may automatically create placeholder family members to keep your tree structure complete and realistic.",
      },
      {
        question: "What should I do after Hiliree adds a placeholder spouse or parent?",
        answer: "After adding the new family member, open the automatically added spouse or parent profile and update their details including name, birthday, gender, location, photo, and death date if applicable.",
      },
      { question: "Do I need to keep the automatically added spouse or parents?", answer: "If they are needed to keep the family structure accurate, you should update their details instead of removing them. This helps Hiliree keep your tree properly connected." },
    ],
  },
  {
    title: "Connecting With Family Members",
    items: [
      { question: "How do I connect with a family member on Hiliree?", answer: "Add the family member to your tree, open their profile details, share the invite link with them, and ask them to accept the invite from their side. The connection is complete only after both sides accept." },
      { question: "What is a Handshake Invite?", answer: "A Handshake Invite is Hiliree's two-way connection process. Both users must accept the invite before they are officially connected." },
      { question: "Why do both people need to accept the invite?", answer: "This protects privacy, prevents wrong connections, and makes sure both people agree to the family connection." },
      { question: "Can I connect with someone who is not already on my tree?", answer: "No. You must first add the person to your family tree before you can share an invite link with them." },
      { question: "Can someone connect to the profile I created for them?", answer: "Yes. When they accept your invite, their Hiliree account can connect to the family profile you created for them." },
    ],
  },
  {
    title: "Unlinking, Deleting, and Removing Family Members",
    items: [
      { question: "What is the difference between unlinking and deleting a family member?", answer: "Unlinking disconnects the invited user's account from the family profile. Deleting removes the family member from your tree view." },
      { question: "If I delete a family member, does it also unlink them?", answer: "No. Deleting a family member only removes them from your tree. It does not automatically unlink them if you already invited and connected with that user." },
      { question: "How do I fully remove and disconnect someone?", answer: "Unlink the user first, then delete the family member from your tree if you no longer want to see them." },
      { question: "What if I only want to disconnect from someone?", answer: "Use Unlink only. This disconnects the invited user but keeps the person visible on your tree." },
      { question: "What if I only want to remove someone from my tree?", answer: "Use Delete. This removes the person from your tree view, but it does not unlink them if they were already connected." },
      { question: "Why should I unlink first before deleting?", answer: "If the person was invited and connected, unlinking first makes sure the account connection is removed before the profile is deleted from your tree." },
    ],
  },
  {
    title: "Home Page & Family Insights",
    items: [
      { question: "What can I see on the Hiliree Home page?", answer: "The Home page gives you quick access to family updates, birthdays, insights, and important family activity." },
      { question: "What are \"Did You Know\" cards?", answer: "\"Did You Know\" cards show interesting family facts, patterns, and hidden gems based on your family tree information." },
      { question: "What is the Life Chart?", answer: "The Life Chart gives you a visual summary of your family, including family size, living and deceased members, generations, ages, and other meaningful family patterns." },
      { question: "What are Birthday cards?", answer: "Birthday cards help you remember, celebrate, and stay connected around family birthdays." },
      { question: "How do I get better family insights?", answer: "Add complete and accurate details for each family member, especially names, birthdays, gender, locations, and relationships." },
      { question: "Why are my insights limited?", answer: "Insights may be limited if your tree has missing birthdays, missing relationships, or only a few family members added." },
    ],
  },
  {
    title: "Moments & Memories",
    items: [
      { question: "What are Moments?", answer: "Moments are family updates you can share with relatives. They may include photos, videos, text updates, celebrations, memories, or milestones." },
      { question: "What can I post as a Moment?", answer: "You can share birthday wishes, funeral memories, family celebrations, announcements, photos, videos, and general updates." },
      { question: "Who can see my Moments?", answer: "Visibility depends on your family connections and privacy settings." },
      { question: "Can Moments help preserve family memories?", answer: "Yes. Moments help keep important family memories connected to your family story." },
    ],
  },
  {
    title: "Chats, Voice & Video Calls",
    items: [
      { question: "How do I start a chat with a family member?", answer: "Go to Chats, tap the \"+\" icon, and select a family member from your tree." },
      { question: "Can I make voice and video calls?", answer: "Yes. Open a chat with a family member and tap the voice or video call icon." },
      { question: "Are chats and calls secure?", answer: "Hiliree is designed with privacy and security safeguards to help protect conversations between family members." },
    ],
  },
  {
    title: "Events & Meetings",
    items: [
      { question: "How do I create a family event?", answer: "Go to Events or Home, tap Create Event, add the event details, and invite family members." },
      { question: "What types of events can I create?", answer: "You can create birthdays, family meetings, reunions, celebrations, funerals, memorials, or general family gatherings." },
      { question: "Can family members RSVP?", answer: "Yes. Invited family members can respond to events so you know who is attending." },
      { question: "Can I schedule virtual family meetings?", answer: "Yes. Hiliree supports virtual family connections through built-in voice and video features." },
    ],
  },
  {
    title: "Map & Location",
    items: [
      { question: "What is Map View?", answer: "Map View helps you see where family members are located, based on the location information added or shared on their profiles." },
      { question: "Can I hide my location?", answer: "Yes. You can control location visibility through your privacy settings." },
      { question: "Can I add a location for deceased relatives?", answer: "Yes. You can pin a meaningful location for deceased relatives, such as a hometown, resting place, or important family place." },
      { question: "Why is location useful on Hiliree?", answer: "Location helps families understand where relatives live, where family roots are connected, and where important memories belong." },
    ],
  },
  {
    title: "Privacy Settings",
    items: [
      { question: "Who can see my family tree information?", answer: "Only you and the family members you connect with, based on your privacy settings." },
      { question: "Can I control what people see?", answer: "Yes. You can manage visibility for details such as birthday, location, and contact information." },
      { question: "Can I hide my birthday?", answer: "Yes. You can control whether your birthday is visible through privacy settings." },
      { question: "Can I hide my contact information?", answer: "Yes. You can manage contact visibility in your privacy settings." },
      { question: "Can I hide or blur my location?", answer: "Yes. You can control whether your location is visible to family members." },
      { question: "Can family privacy settings override individual settings?", answer: "Yes. Some family-level privacy settings may limit what is visible across the family group." },
    ],
  },
  {
    title: "Notifications",
    items: [
      { question: "What notifications will I receive?", answer: "You may receive notifications for invites, chats, calls, events, birthdays, Moments, and family updates." },
      { question: "Can I turn notifications off?", answer: "Yes. You can manage notifications in the app or through your device settings." },
      { question: "Why am I not receiving notifications?", answer: "Check that notifications are enabled for Hiliree in both your device settings and the app settings." },
    ],
  },
  {
    title: "App Security",
    items: [
      { question: "Can I use biometric login?", answer: "Yes, where supported by your device. You can use biometric login such as Face ID, Touch ID, or fingerprint access." },
      { question: "How is my data protected?", answer: "Hiliree uses privacy and security safeguards such as secure data handling, controlled access, and encryption where applicable." },
      { question: "Does Hiliree use third-party services?", answer: "Yes. Hiliree may use trusted third-party providers for hosting, communication, analytics, app performance, payments, and support." },
      { question: "Does Hiliree sell my personal data?", answer: "No. Hiliree is designed around family privacy and does not sell your personal family data." },
    ],
  },
  {
    title: "Cookies & Tracking",
    items: [
      { question: "Does Hiliree use cookies or tracking tools?", answer: "Yes. Cookies and similar tools may help improve performance, remember preferences, and understand how the app is used." },
      { question: "How do I manage cookie preferences?", answer: "Go to Settings > Cookie Settings, or manage permissions from your device or browser settings where available." },
    ],
  },
  {
    title: "Installation & Updates",
    items: [
      { question: "How do I install Hiliree?", answer: "Search for Hiliree in the Apple App Store or Google Play Store and download the app." },
      { question: "How do I update Hiliree?", answer: "Open your device's app store, search for Hiliree, and tap Update if available." },
      { question: "Why should I keep Hiliree updated?", answer: "Updates may include new features, design improvements, bug fixes, and security enhancements." },
    ],
  },
  {
    title: "Account & Data Deletion",
    items: [
      { question: "How do I delete my Hiliree account?", answer: "Go to Settings > Delete Account and follow the confirmation steps." },
      { question: "What happens when I delete my account?", answer: "Your account and personal data will be deleted according to Hiliree's Privacy Policy, unless certain information must be kept for legal or compliance reasons." },
      { question: "Is deleting my account the same as deleting a family member from my tree?", answer: "No. Deleting your account removes your Hiliree account. Deleting a family member only removes that person from your tree view." },
      { question: "Can I request a copy of my data?", answer: "Yes. Go to Settings > Privacy Settings or contact privacy@hiliree.com." },
    ],
  },
  {
    title: "Troubleshooting",
    items: [
      { question: "Why is my family tree not displaying correctly?", answer: "Check that family members are added in the correct relationship line and that important details like gender and birthday are completed." },
      { question: "Why are siblings not in the right order?", answer: "Add or correct their birthdays. Hiliree uses birthdays to organize siblings by age." },
      { question: "Why did Hiliree add extra people to my tree?", answer: "Hiliree may automatically add placeholder parents or a spouse to keep the family structure complete. You can edit those profiles with the correct details." },
      { question: "Why are my insights not showing?", answer: "You may need to add more family members or complete missing details such as birthdays, locations, and relationships." },
      { question: "Why is my app not working properly?", answer: "Try updating the app, checking your internet connection, restarting your device, or contacting support." },
    ],
  },
  {
    title: "Legal & Compliance",
    items: [
      { question: "What rights do I have over my data?", answer: "Depending on your location, you may have rights to access, correct, delete, restrict, object to, or request a copy of your data." },
      { question: "How are disputes handled?", answer: "Disputes are handled according to Hiliree's Terms of Service. Users are encouraged to contact support first so issues can be reviewed and resolved." },
    ],
  },
];

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button onClick={onToggle} className="w-full flex items-center justify-between py-4 text-left group">
        <span className="text-[14px] font-medium text-gray-900 pr-4 group-hover:text-[#41307e] transition-colors">
          {item.question}
        </span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="text-gray-400 flex-shrink-0">
          <ChevronDown size={16} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-[13px] text-gray-500 leading-relaxed font-light">
              {typeof item.answer === "string" ? <p>{item.answer}</p> : item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQList() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState(faqData[0].title);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [sidebarStyle, setSidebarStyle] = useState<React.CSSProperties>({});

  const toggleItem = (sectionTitle: string, index: number) => {
    const key = `${sectionTitle}-${index}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Handle sticky sidebar with bottom scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!sidebarRef.current || !contentRef.current) return;

      const contentRect = contentRef.current.getBoundingClientRect();
      const sidebarHeight = sidebarRef.current.offsetHeight;
      const contentBottom = contentRect.bottom;
      const viewportHeight = window.innerHeight;
      const sidebarTop = Math.max(contentRect.top, 0);

      // Calculate max top position before sidebar hits bottom of content
      const maxTop = contentRect.height - sidebarHeight + contentRect.top;

      if (contentRect.top <= 0 && contentBottom > sidebarHeight) {
        // Sidebar is within the content — make it sticky
        const top = Math.min(Math.max(0, -contentRect.top + 20), maxTop - contentRect.top);
        setSidebarStyle({
          position: "sticky",
          top: "80px",
          alignSelf: "flex-start",
        });
      } else if (contentBottom <= viewportHeight) {
        // Content is fully visible — no need for sticky
        setSidebarStyle({
          position: "relative",
          top: "auto",
        });
      } else {
        setSidebarStyle({
          position: "sticky",
          top: "80px",
          alignSelf: "flex-start",
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active section based on scroll position
  useEffect(() => {
    const handleSectionScroll = () => {
      const sections = faqData.map((s) => document.getElementById(`section-${s.title.replace(/\s+/g, "-")}`));
      let currentSection = faqData[0].title;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.getBoundingClientRect().top <= 120) {
          currentSection = faqData[i].title;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleSectionScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleSectionScroll);
  }, []);

  const filteredData = searchQuery
    ? faqData
        .map((section) => ({
          ...section,
          items: section.items.filter(
            (item) =>
              item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
              (typeof item.answer === "string" && item.answer.toLowerCase().includes(searchQuery.toLowerCase()))
          ),
        }))
        .filter((section) => section.items.length > 0)
    : faqData;

  const scrollToSection = (sectionTitle: string) => {
    setActiveSection(sectionTitle);
    document.getElementById(`section-${sectionTitle.replace(/\s+/g, "-")}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative py-16 md:py-20" style={{ background: "#FAFAF8" }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Search */}
        <div className="relative mb-12">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-white text-[14px] font-poppins outline-none focus:border-[#41307e] transition-colors"
          />
        </div>

        <div className="grid md:grid-cols-[240px_1fr] gap-10" ref={contentRef}>
          {/* Sidebar — sticky */}
          <div className="hidden md:block">
            <div ref={sidebarRef} style={sidebarStyle} className="transition-all duration-200">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400 mb-4">Categories</p>
              <nav className="space-y-0.5 max-h-[calc(100vh-160px)] overflow-y-auto">
                {faqData.map((section) => (
                  <button
                    key={section.title}
                    onClick={() => scrollToSection(section.title)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-[12px] transition-colors ${
                      activeSection === section.title
                        ? "bg-[#41307e]/5 text-[#41307e] font-medium"
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* FAQ content */}
          <div className="min-w-0">
            {filteredData.map((section) => (
              <div key={section.title} id={`section-${section.title.replace(/\s+/g, "-")}`} className="mb-12 last:mb-0">
                <h3 className="font-['Cormorant_Garamond',serif] text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                <div className="bg-white rounded-2xl border border-gray-100 px-5">
                  {section.items.map((item, idx) => {
                    const key = `${section.title}-${idx}`;
                    return (
                      <FAQAccordion key={key} item={item} isOpen={!!openItems[key]} onToggle={() => toggleItem(section.title, idx)} />
                    );
                  })}
                </div>
              </div>
            ))}

            {filteredData.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-400 text-[14px]">No results found for "{searchQuery}"</p>
                <button onClick={() => setSearchQuery("")} className="mt-3 text-[12px] text-[#41307e] font-medium hover:underline">
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Contact footer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-16 pt-12 border-t border-gray-200 text-center"
        >
          <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-indigo-300 bg-indigo-500/10 px-3.5 py-1.5 rounded-full border border-indigo-500/20 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            Need More Help?
          </div>
          <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold mb-3" style={{ color: "#2D206A" }}>
            We&apos;re here for you
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[13px] text-gray-500 font-light">
            <a href="mailto:support@hiliree.com" className="flex items-center gap-2 hover:text-[#41307e] transition-colors">
              <MessageCircle size={14} />
              support@hiliree.com
            </a>
            <span className="hidden sm:block text-gray-300">|</span>
            <a href="mailto:privacy@hiliree.com" className="hover:text-[#41307e] transition-colors">
              privacy@hiliree.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}