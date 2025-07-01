"use client";

import { useEffect, useState } from "react";

export default function FontLoader({ children }: { children: React.ReactNode }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Add font loading logic here if needed
    setFontsLoaded(true);
  }, []);

  if (!fontsLoaded) return null;

  return <>{children}</>;
}
