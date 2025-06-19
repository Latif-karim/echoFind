import React from "react";
import {
  TrashIcon,
  PencilSquareIcon,
  EyeIcon,
  MapPinIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

export default function MyLostItems() {
  const items = [
    {
      id: 1,
      name: "Black Leather Wallet",
      description: "Has 2 ID cards and some cash inside.",
      date: "2025-06-10",
      location: "Science Block",
      image: "/wallet.jpg",
    },
    {
      id: 2,
      name: "Blue Backpack",
      description: "Contains lecture notes and a laptop charger.",
      date: "2025-06-05",
      location: "Main Library",
      image: "/wallet.jpg",
    },
  ];

  return (
    <div className="p-4 md:p-10 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">
        🧾 My Lost Items
      </h1>
      <div className="grid gap-8 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="group bg-white border border-gray-100 rounded-3xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <div className="overflow-hidden rounded-t-3xl h-48">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                {item.name}
              </h2>
              <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                {item.description}
              </p>
              <div className="flex items-center text-xs text-gray-400 gap-3 mb-4">
                <div className="flex items-center gap-1">
                  <MapPinIcon className="w-4 h-4" /> {item.location}
                </div>
                <div className="flex items-center gap-1">
                  <CalendarDaysIcon className="w-4 h-4" /> {item.date}
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <button className="flex items-center gap-1 px-4 py-2 bg-[#4318d1] text-white rounded-xl hover:bg-[#3513a6] transition">
                  <EyeIcon className="w-4 h-4" /> View
                </button>
                <button className="flex items-center gap-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-100">
                  <PencilSquareIcon className="w-4 h-4" /> Edit
                </button>
                <button className="flex items-center gap-1 px-4 py-2 text-red-500 border border-red-200 rounded-xl hover:bg-red-50">
                  <TrashIcon className="w-4 h-4" /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
