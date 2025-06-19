import React from "react";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  ArchiveBoxIcon,
  BellIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import { MatchCard, StatCard } from "../_components/Card";
const page = () => {
  return (
    // <div className="min-h-screen w-full ">
    //   <nav className="flex items-center gap-4  h-[4rem] text-sm">
    //     <div className="hidden md:flex items-center gap-3 text-gray-700  h-[2.5rem] rounded-lg">
    //       <Link href="#" className="hover:scale-[1.02] cursor-pointer">
    //         Explore
    //       </Link>
    //       <Link href="#" className="hover:scale-[1.02] cursor-pointer">
    //         Feed
    //       </Link>
    //       <Link href="#" className="hover:scale-[1.02] cursor-pointer">
    //         Notifications
    //       </Link>
    //     </div>
    //     <div className="flex items-center gap-3 rounded-lg px-3 py-2 bg-gray-100 text-sm text-gray-700 w-[40%] mr-auto">
    //       <MagnifyingGlassIcon className="h-4 w-4 text-gray-500" />
    //       <input
    //         type="text"
    //         className="border-none outline-none bg-transparent w-full"
    //         placeholder="Search for items, users, or messages..."
    //       />
    //     </div>
    //     <div className="flex gap-2">
    //       <div className="bg-accent px-4 py-2 text-gray-50 rounded-lg cursor-pointer">
    //         publish
    //       </div>
    //       <div className="h-9 w-9 bg-gray-100 rounded-full flex justify-center items-center cursor-pointer">
    //         <UserCircleIcon className="text-gray-700 h-6 w-6" />
    //       </div>
    //     </div>
    //   </nav>
    //   <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
    //     {/* Top Bar */}
    //     <div className="flex justify-between items-center mb-8">
    //       {/* Left side: Greeting */}
    //       <div>
    //         <h1 className="text-2xl font-semibold text-gray-900">
    //           Welcome back, Elly!
    //         </h1>
    //         <p className="text-gray-500">
    //           Here&apos;s your lost & found summary.
    //         </p>
    //       </div>

    //       {/* Right side: Actions */}
    //       <div className="mb-6">
    //         <div className="bg-[#e9e5fc] text-[#4318d1] text-sm font-semibold inline-block px-4 py-2 rounded-xl">
    //           ⭐ Trust Score: 87 / 100 — Trusted User
    //         </div>
    //       </div>
    //     </div>

    //     {/* Trust Badge */}

    //     {/* Stats Cards */}
    //     <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    //       <StatCard title="Items Found" count={136} />
    //       <StatCard title="Lost Items" count={5} />
    //       <StatCard title="Resolved Cases" count={92} />
    //       <StatCard title="Pending Claims" count={11} />
    //     </div>

    //     {/* Recent Activity - Repositioned */}
    //     <div className="mt-12">
    //       <h2 className="text-lg font-semibold text-gray-900 mb-4">
    //         Recent Activity
    //       </h2>
    //       <div className="space-y-4 pl-2 border-l-2 border-[#4318d1]/20">
    //         <div className="flex items-start gap-3">
    //           <ArchiveBoxIcon className="w-5 h-5 text-[#4318d1] mt-1" />
    //           <div>
    //             <p className="text-gray-800">You reported a lost backpack</p>
    //             <p className="text-sm text-gray-500">2 days ago</p>
    //           </div>
    //         </div>
    //         <div className="flex items-start gap-3">
    //           <BellIcon className="w-5 h-5 text-[#4318d1] mt-1" />
    //           <div>
    //             <p className="text-gray-800">Your ID card has 2 matches</p>
    //           </div>
    //         </div>
    //         <div className="flex items-start gap-3">
    //           <CheckBadgeIcon className="w-5 h-5 text-[#4318d1] mt-1" />
    //           <div>
    //             <p className="text-gray-800">
    //               Dominic found a phone that may match your listing
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* CTA Banner */}
    //     <div className="mt-12 bg-white border border-gray-200 rounded-2xl p-6 shadow-md flex items-center justify-between">
    //       <div>
    //         <h3 className="text-lg font-semibold text-gray-900">
    //           Did you find something recently?
    //         </h3>
    //         <p className="text-sm text-gray-500">
    //           Report found items to help reconnect people with their belongings.
    //         </p>
    //       </div>
    //       <button className="bg-[#4318d1] hover:bg-[#3513a6] text-white font-medium py-2 px-5 rounded-lg shadow-sm transition">
    //         + Upload Found Item
    //       </button>
    //     </div>

    //     {/* Matching Suggestions */}
    //     <div className="mt-12">
    //       <h2 className="text-lg font-semibold text-gray-900 mb-4">
    //         Matching Suggestions
    //       </h2>
    //       <div className="flex gap-4 overflow-x-auto pb-2">
    //         <MatchCard
    //           item="ID Card"
    //           description="Blue student ID with faded print"
    //           date="April 22"
    //           location="Library"
    //           image="/party.jpg"
    //         />
    //         <MatchCard
    //           item="Blue Backpack"
    //           description="Medium-sized with white zip. Small tear on side."
    //           date="April 20"
    //           location="Hall B"
    //           image="/party.jpg"
    //         />
    //         <MatchCard
    //           item="Laptop Charger"
    //           description="Black Dell charger with label peeling off"
    //           date="April 18"
    //           location="IT Block"
    //           image="/party.jpg"
    //         />
    //       </div>
    //     </div>

    //     {/* Floating Upload Button for Mobile */}
    //     <button className="fixed bottom-6 right-6 bg-[#4318d1] text-white p-4 rounded-full shadow-lg hover:bg-[#3513a6] md:hidden">
    //       +
    //     </button>
    //   </div>
    // </div>
    <div className="min-h-screen w-full">
      {/* NAVIGATION */}
      <nav className="flex flex-wrap items-center gap-4 h-auto px-4 py-3 md:px-10 md:py-0 text-sm">
        {/* Links */}
        <div className="hidden md:flex items-center gap-3 text-gray-700">
          <Link href="/Browse" className="hover:scale-[1.02] cursor-pointer">
            Explore
          </Link>
          <Link href="#" className="hover:scale-[1.02] cursor-pointer">
            Feed
          </Link>
          <Link
            href="/Dashboard/notifications"
            className="hover:scale-[1.02] cursor-pointer"
          >
            Notifications
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-3 rounded-lg px-3 py-2 bg-gray-100 text-sm text-gray-700 w-full md:w-[40%] order-last md:order-none">
          <MagnifyingGlassIcon className="h-4 w-4 text-gray-500" />
          <input
            type="text"
            className="border-none outline-none bg-transparent w-full text-sm"
            placeholder="Search for items, users, or messages..."
          />
        </div>

        {/* Publish & User */}
        <div className="flex gap-2 ml-auto">
          <div className="bg-accent px-4 py-2 text-gray-50 rounded-lg cursor-pointer text-sm">
            Publish
          </div>
          <div className="h-9 w-9 bg-gray-100 rounded-full flex justify-center items-center cursor-pointer">
            <UserCircleIcon className="text-gray-700 h-6 w-6" />
          </div>
        </div>
      </nav>

      {/* DASHBOARD CONTENT */}
      <div className="p-4 md:p-10 bg-gray-50 min-h-screen">
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
          {/* Left side: Greeting */}
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Welcome back, Elly!
            </h1>
            <p className="text-sm text-gray-500">
              Here&apos;s your lost & found summary.
            </p>
          </div>

          {/* Right side: Trust Score */}
          <div>
            <div className="bg-[#e9e5fc] text-[#4318d1] text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl text-center">
              ⭐ Trust Score: 87 / 100 — Trusted User
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <StatCard title="Items Found" count={136} />
          <StatCard title="Lost Items" count={5} />
          <StatCard title="Resolved Cases" count={92} />
          <StatCard title="Pending Claims" count={11} />
        </div>

        {/* Recent Activity */}
        <div className="mt-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4 pl-2 border-l-2 border-[#4318d1]/20">
            <div className="flex items-start gap-3">
              <ArchiveBoxIcon className="w-5 h-5 text-[#4318d1] mt-1" />
              <div>
                <p className="text-gray-800 text-sm">
                  You reported a lost backpack
                </p>
                <p className="text-xs text-gray-500">2 days ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <BellIcon className="w-5 h-5 text-[#4318d1] mt-1" />
              <div>
                <p className="text-gray-800 text-sm">
                  Your ID card has 2 matches
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckBadgeIcon className="w-5 h-5 text-[#4318d1] mt-1" />
              <div>
                <p className="text-gray-800 text-sm">
                  Dominic found a phone that may match your listing
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 bg-white border border-gray-200 rounded-2xl p-6 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Did you find something recently?
            </h3>
            <p className="text-sm text-gray-500">
              Report found items to help reconnect people with their belongings.
            </p>
          </div>
          <button className="bg-[#4318d1] hover:bg-[#3513a6] text-white font-medium py-2 px-5 rounded-lg shadow-sm transition w-full sm:w-auto">
            + Upload Found Item
          </button>
        </div>

        {/* Matching Suggestions */}
        <div className="mt-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Matching Suggestions
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            <MatchCard
              item="ID Card"
              description="Blue student ID with faded print"
              date="April 22"
              location="Library"
              image="/party.jpg"
            />
            <MatchCard
              item="Blue Backpack"
              description="Medium-sized with white zip. Small tear on side."
              date="April 20"
              location="Hall B"
              image="/party.jpg"
            />
            <MatchCard
              item="Laptop Charger"
              description="Black Dell charger with label peeling off"
              date="April 18"
              location="IT Block"
              image="/party.jpg"
            />
          </div>
        </div>

        {/* Floating Upload Button for Mobile */}
        <button className="fixed bottom-6 right-6 bg-[#4318d1] text-white p-4 rounded-full shadow-lg hover:bg-[#3513a6] md:hidden">
          +
        </button>
      </div>
    </div>
  );
};

export default page;
