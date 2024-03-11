import { cn } from "@/lib/utils";
import { NavItems } from "./nav-items";
import { navItems } from "@/constants/data";

const SideBar = () => {
    return (
        <nav
            className={cn(`relative hidden h-screen border-r pt-16 lg:block w-72 bg-gray-100`)}
        >
            <div className="space-y-4 py-4">
                <div className="py-2">
                    <div className="space-y-1">
                        <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
                            Overview
                        </h2>
                        <NavItems items={navItems} />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default SideBar;