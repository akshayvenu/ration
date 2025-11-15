"use client";

import { Home, Package, Calendar, Bell } from "lucide-react";
import { useState } from "react";

export function BottomNav() {
  const [active, setActive] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActive(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border/40 bg-white/95 backdrop-blur dark:bg-gray-900/95">
      <div className="flex items-center justify-around h-16">
        <button
          onClick={() => scrollToSection("home")}
          className={`flex flex-col items-center justify-center flex-1 gap-1 transition-colors ${
            active === "home"
              ? "text-orange-600 dark:text-orange-500"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Home className="h-5 w-5" />
          <span className="text-xs font-medium">Home</span>
        </button>
        <button
          onClick={() => scrollToSection("stock")}
          className={`flex flex-col items-center justify-center flex-1 gap-1 transition-colors ${
            active === "stock"
              ? "text-orange-600 dark:text-orange-500"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Package className="h-5 w-5" />
          <span className="text-xs font-medium">Stock</span>
        </button>
        <button
          onClick={() => scrollToSection("quota")}
          className={`flex flex-col items-center justify-center flex-1 gap-1 transition-colors ${
            active === "quota"
              ? "text-orange-600 dark:text-orange-500"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Calendar className="h-5 w-5" />
          <span className="text-xs font-medium">Quota</span>
        </button>
        <button
          onClick={() => scrollToSection("alerts")}
          className={`flex flex-col items-center justify-center flex-1 gap-1 transition-colors ${
            active === "alerts"
              ? "text-orange-600 dark:text-orange-500"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Bell className="h-5 w-5" />
          <span className="text-xs font-medium">Alerts</span>
        </button>
      </div>
    </nav>
  );
}
