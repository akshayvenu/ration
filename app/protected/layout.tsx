import { ThemeSwitcher } from "@/components/theme-switcher";
import { LogoutButton } from "@/components/logout-button";
import Link from "next/link";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 bg-white dark:bg-gray-900">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Link href={"/protected"} className="flex items-center gap-2">
                <span className="text-orange-600">राशन वितरण प्रणाली</span>
                <span className="text-gray-600">| PDS</span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <ThemeSwitcher />
              <LogoutButton />
            </div>
          </div>
        </nav>
        <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5 w-full">
          {children}
        </div>

        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-8 text-gray-500">
          <p>Government of India | भारत सरकार</p>
          <p>Public Distribution System</p>
        </footer>
      </div>
    </main>
  );
}
