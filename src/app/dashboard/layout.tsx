import { SidebarProvider } from "@ui/sidebar";
import AppSidebar from "@/components/dashboard-sidebar";
import { Search } from "lucide-react";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full bg-gray-100 text-black">
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5"
                  stroke="currentColor"
                >
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-black">
                WELCOME TO YOUR DASHBOARD JOSH.
              </h1>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="SEARCH"
                className="pl-4 pr-10 py-2 w-64 rounded-full border border-gray-300 focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <Search className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>
          {/* Content */}
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
