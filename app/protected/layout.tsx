import { ThemeSwitcher } from "@/components/theme-switcher";
import { LogoutButton } from "@/components/logout-button";
import { BottomNav } from "@/components/bottom-nav";
import Link from "next/link";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 backdrop-blur dark:bg-gray-900/95 supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href={"/protected"} className="flex items-center gap-2 md:gap-3">
            <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg bg-orange-500 text-white font-bold text-sm md:text-base">
              PDS
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-sm md:text-base font-bold text-orange-600 dark:text-orange-500">राशन वितरण प्रणाली</span>
              <span className="text-xs text-muted-foreground">Public Distribution System</span>
            </div>
            <span className="sm:hidden text-sm font-bold text-orange-600 dark:text-orange-500">PDS</span>
          </Link>
          <div className="flex items-center gap-2 md:gap-4">
            <ThemeSwitcher />
            <LogoutButton />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 py-6 md:px-6 md:py-8 max-w-7xl">
        {children}
      </div>

      {/* Bottom Navigation - Mobile Only */}
      <BottomNav />

      {/* Footer - Hidden on mobile */}
      <footer className="hidden md:flex w-full items-center justify-center border-t border-border/40 bg-white dark:bg-gray-900 py-6">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 text-xs text-muted-foreground">
          <p>Government of India | भारत सरकार</p>
          <span className="hidden sm:inline">•</span>
          <p>Public Distribution System</p>
          <span className="hidden sm:inline">•</span>
          <p>© 2025 All Rights Reserved</p>
        </div>
      </footer>

      {/* Mobile spacing for bottom nav */}
      <div className="md:hidden h-16"></div>
    </main>
  );
}
