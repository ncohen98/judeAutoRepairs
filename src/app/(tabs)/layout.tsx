// src/app/(tabs)/layout.tsx
import React from "react";
import TabsLayout from "@/components/TabsLayout"; // this should be a client component

export default function TabsGroupLayout({ children }: { children: React.ReactNode }) {
  return <TabsLayout>{children}</TabsLayout>;
}
