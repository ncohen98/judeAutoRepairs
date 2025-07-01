import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Phone, Info } from "lucide-react";
import Colors from "@/constants/colors";

const tabs = [
  { href: "/", label: "Home", icon: Home, title: "Jude Auto Repair" },
  { href: "/contact", label: "Contact Us", icon: Phone, title: "Contact Us" },
  { href: "/about", label: "About", icon: Info, title: "About Us" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <main style={{ flex: 1 }}>{children}</main>

      <nav
        style={{
          display: "flex",
          borderTop: "1px solid #ccc",
          backgroundColor: "#fff",
          justifyContent: "space-around",
          padding: "10px 0",
        }}
      >
        {tabs.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: isActive ? Colors.secondary : "#666",
                textDecoration: "none",
                fontWeight: isActive ? "bold" : "normal",
              }}
            >
              <Icon size={24} />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
