// import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import { cn } from "@/lib/utils";
// import { MobileSidebar } from "./mobile-sidebar";
// import { UserNav } from "./user-nav";
import Link from "next/link";
import { MobileSidebar } from "./mobile-sidebar";
import { UserNav } from "./user-nav";

export default function NavMenu() {
  return (
    <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
      <nav className="h-14 flex items-center justify-between px-4 bg-gray-200">
        <div className="hidden lg:block">
          <Link
            href={"/dashboard"}
            // target="_blank"
          >
            
                <img src="/alarm.png" alt="logo" className=" h-10 sm:h-20" />
                
          </Link>
        </div>
        <div className={cn("block lg:!hidden")}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          <UserNav />
          {/* <ThemeToggle /> */}
        </div>
      </nav>
    </div>
  );
}
