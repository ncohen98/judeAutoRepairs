// src/app/(tabs)/layout.tsx
import React from "react";
import TabsLayout from "@/components/TabsLayout";

export default function TabsGroupLayout({ children }: { children: React.ReactNode }) {
  return <TabsLayout>{children}</TabsLayout>;
}
