"use client";
import React from "react";
import {
  ArchiveBoxIcon,
  BellIcon,
  CheckBadgeIcon,
  CalendarDaysIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export const StatCard = ({ title, count }) => (
  <div className="bg-gray-100 rounded-2xl p-6 shadow-md text-center  transition hover:shadow-lg">
    <h3 className="text-sm font-medium text-gray-500 mb-1 tracking-wide uppercase">
      {title}
    </h3>
    <p className="text-3xl font-bold text-gray-900">{count}</p>
  </div>
);

export const MatchCard = ({ item, description, date, location, image }) => (
  <div className="min-w-[280px] bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition overflow-hidden">
    <img src={image} alt={item} className="w-full h-36 object-cover" />
    <div className="p-4">
      <h4 className="font-semibold text-lg text-gray-900 mb-1">{item}</h4>
      <p className="text-sm text-gray-500 mb-2">{description}</p>
      <div className="flex items-center text-sm text-gray-500 gap-2 mb-1">
        <CalendarDaysIcon className="w-4 h-4" /> {date}
      </div>
      <div className="flex items-center text-sm text-gray-500 gap-2">
        <MapPinIcon className="w-4 h-4" /> {location}
      </div>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-8">
        {/* Left side: Greeting */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Welcome back, <span className="text-accent">Elly!</span>
          </h1>
          <p className="text-gray-500">
            Here&apos;s your lost & found summary.
          </p>
        </div>

        {/* Right side: Actions */}
        <div className="mb-6">
          <div className="bg-[#e9e5fc] text-[#4318d1] text-sm font-semibold inline-block px-4 py-2 rounded-xl">
            ⭐ Trust Score: 87 / 100 — Trusted User
          </div>
        </div>
      </div>

      {/* Trust Badge */}

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard title="Items Found" count={136} />
        <StatCard title="Lost Items" count={5} />
        <StatCard title="Resolved Cases" count={92} />
        <StatCard title="Pending Claims" count={11} />
      </div>

      {/* CTA Banner */}
      <div className="mt-10 bg-white border border-gray-200 rounded-2xl p-6 shadow-md flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Did you find something recently?
          </h3>
          <p className="text-sm text-gray-500">
            Report found items to help reconnect people with their belongings.
          </p>
        </div>
        <button className="bg-[#4318d1] hover:bg-[#3513a6] text-white font-medium py-2 px-5 rounded-lg shadow-sm transition">
          + Upload Found Item
        </button>
      </div>

      {/* Recent Activity */}
      <div className="mt-12">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Activity
        </h2>
        <div className="space-y-3">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
            <ArchiveBoxIcon className="w-6 h-6 text-gray-400" />
            <div>
              <p className="text-gray-800">You reported a lost backpack</p>
              <p className="text-sm text-gray-500">2 days ago</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
            <BellIcon className="w-6 h-6 text-gray-400" />
            <div>
              <p className="text-gray-800">Your ID card has 2 matches</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
            <CheckBadgeIcon className="w-6 h-6 text-gray-400" />
            <div>
              <p className="text-gray-800">
                Dominic found a phone that may match your listing
              </p>
            </div>
          </div>
        </div>
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
  );
}
