// app/(tabs)/layout.tsx (server component)
import React from "react";
import dynamic from "next/dynamic";

const TabsLayout = dynamic(() => import('@/components/TabsLayout'), { ssr: false });

export default function TabsGroupLayout({ children }: { children: React.ReactNode }) {
  return <TabsLayout>{children}</TabsLayout>;
}
