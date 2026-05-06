// lib/useHashNavigation.ts
import { useEffect } from "react";

export function useHashNavigation() {
  useEffect(() => {
    // Function to scroll to hash element
    const scrollToHash = (hash: string) => {
      if (!hash || !hash.startsWith("#")) return;
      
      // Remove the # symbol
      const id = hash.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        // Small delay to ensure element is rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    };

    // Handle initial hash on page load
    const handleInitialHash = () => {
      const hash = window.location.hash;
      if (hash) {
        scrollToHash(hash);
      }
    };

    // Handle hash changes (when clicking links or browser back/forward)
    const handleHashChange = () => {
      scrollToHash(window.location.hash);
    };

    // Wait for DOM to be ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", handleInitialHash);
    } else {
      handleInitialHash();
    }

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    
    return () => {
      document.removeEventListener("DOMContentLoaded", handleInitialHash);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
}