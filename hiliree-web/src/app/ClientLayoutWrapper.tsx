// app/ClientLayoutWrapper.tsx
"use client";

import { useHashNavigation } from "@/lib/useHashNavigation";

export function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useHashNavigation();

  return <>{children}</>;
}