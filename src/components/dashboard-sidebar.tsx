"use client";
import {
  ChartLine,
  ShoppingCart,
  ArrowUp,
  Zap,
  Pencil,
  Users,
  Lightbulb,
  HelpCircle,
  Menu,
} from "lucide-react";

import { Sidebar, SidebarContent } from "@ui/sidebar";
import { House } from "lucide-react";
import { useState } from "react";

export default function AppSidebar() {
  const [activeTab, setActiveTab] = useState("AUTOMATIONS");
  return (
    <Sidebar className="flex flex-col gap-4">
      <SidebarContent>
        {[
          { desc: "HOME", icon: House },
          { desc: "SALES", icon: ShoppingCart },
          { desc: "ANALYTICS", icon: ChartLine },
          { desc: "BOOST", icon: ArrowUp },
          { desc: "AUTOMATIONS", icon: Zap },
          { desc: "CMS", icon: Pencil },
          { desc: "TEAM", icon: Users },
          { desc: "FAQ'S", icon: Lightbulb },
          { desc: "SUPPORT", icon: HelpCircle },

          { desc: "MENU", icon: Menu },
        ].map((item) => (
          <button
            key={item.desc}
            className={`relative z-10 py-3 font-bold flex pl-4 gap-2 items-center text-center ${
              activeTab === item.desc
                ? "bg-blue-500 text-white"
                : "text-gray-900"
            }`}
            onClick={() => setActiveTab(item.desc)}
          >
            <item.icon /> <p>{item.desc}</p>
          </button>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
