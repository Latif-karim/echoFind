"use client";
import { useState } from "react";
import {
  SpeakerWaveIcon,
  ClipboardDocumentCheckIcon,
  ArrowPathRoundedSquareIcon,
  ChatBubbleLeftEllipsisIcon,
  UserCircleIcon,
  HomeIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <aside
        className={` fixed inset-y-0 left-0 z-50 bg-background text-foreground p-4 border-r border-gray-200 flex flex-col justify-between transition-transform duration-300
          w-64
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:relative md:flex
        `}
      >
        {/* Top Section */}
        <div>
          {/* Logo & Name */}
          <div className="flex items-center space-x-2 text-base sm:text-lg font-bold mb-6">
            <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-indigo-500 text-white flex items-center justify-center text-sm">
              E
            </div>
            <span className="truncate">Elly Millken</span>
          </div>

          {/* Navigation */}
          <nav className="space-y-1 text-sm sm:text-base">
            <NavLink
              to="/Dashboard"
              label="Dashboard"
              icon={<HomeIcon className="h-4 w-4 sm:h-5 sm:w-5" />}
              onClick={toggleSidebar}
            />
            <NavLink
              label="Report Lost Item"
              icon={<SpeakerWaveIcon className="h-4 w-4 sm:h-5 sm:w-5" />}
              onClick={toggleSidebar}
              to="/Dashboard/Lost/Report"
            />
            <NavLink
              label="My Lost Items"
              icon={
                <ClipboardDocumentCheckIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              }
              to="/Dashboard/Lost/My-items"
              onClick={toggleSidebar}
            />
            <NavLink
              label="Matches"
              icon={
                <ArrowPathRoundedSquareIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              }
              onClick={toggleSidebar}
              to="#"
            />
            <NavLink
              label="Messages"
              icon={
                <ChatBubbleLeftEllipsisIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              }
              to="/Dashboard/messages"
              onClick={toggleSidebar}
            />
            <NavLink
              label="Profile"
              icon={<UserCircleIcon className="h-4 w-4 sm:h-5 sm:w-5" />}
              onClick={toggleSidebar}
              to="/Dashboard/profile"
            />
          </nav>

          {/* Team Section */}
          <div className="mt-8 text-xs sm:text-sm">
            <h3 className="uppercase text-gray-500 mb-2 text-[11px] sm:text-xs">
              Teams
            </h3>
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] sm:text-xs">
                E
              </div>
              <span className="truncate text-[11px] sm:text-sm">
                Elly Millken’s Team
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="space-y-3 text-xs sm:text-sm mt-6">
          <div className="bg-purple-600 text-white p-3 rounded-xl text-center text-[11px] sm:text-sm">
            <p className="font-semibold">Activate Super</p>
            <p className="text-[10px] sm:text-xs">Unlock all features</p>
          </div>
          <NavLink label="Archive" onClick={toggleSidebar} to="#" />
        </div>
      </aside>

      {/* Overlay on Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content Wrapper */}
      <div className="flex flex-col flex-1 w-full overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 bg-background border-b border-gray-200">
          <div className="flex items-center space-x-2 text-base font-bold">
            <div className="h-7 w-7 rounded-full bg-indigo-500 text-white flex items-center justify-center text-sm">
              E
            </div>
            <span>Elly Millken</span>
          </div>
          <button onClick={toggleSidebar} className="text-foreground z-50">
            {isSidebarOpen ? (
              <XMarkIcon className="h-6 w-6 text-background" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </header>

        {/* Main Area */}
        <main className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-6">
          {children}
        </main>
      </div>
    </div>
  );
}

function NavLink({
  label,
  icon,
  to,
  onClick,
}: {
  label: string;
  icon?: React.ReactNode;
  to: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={to}
      onClick={onClick}
      className="flex gap-2 items-center px-2 py-2 rounded hover:bg-gray-200 transition text-gray-700 hover:text-gray-900 text-sm "
    >
      {icon}
      <span className="truncate">{label}</span>
    </Link>
  );
}
