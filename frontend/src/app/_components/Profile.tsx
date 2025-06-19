"use client";
import React, { useState } from "react";
import { PencilIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const profile = {
    name: "Elly Millken",
    email: "elly@example.com",
    phone: "+233 24 123 4567",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Final-year Computer Science student passionate about AI and web development. Creator of EchoFind.",
    badges: ["Verified Reporter", "Top Contributor"],
    activity: [
      { action: "Reported lost wallet", time: "2 hours ago" },
      { action: "Matched with found item", time: "1 day ago" },
      { action: "Updated profile", time: "3 days ago" },
    ],
  };

  return (
    <div className="p-4 md:p-10 bg-gray-50 min-h-screen max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">
        👤 Profile
      </h1>

      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-10">
        <img
          src={profile.avatar}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border border-gray-200"
        />

        <div className="text-center sm:text-left w-full">
          {isEditing ? (
            <div className="space-y-2">
              <input
                type="text"
                defaultValue={profile.name}
                className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm"
              />
              <input
                type="email"
                defaultValue={profile.email}
                className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm"
              />
              <input
                type="text"
                defaultValue={profile.phone}
                className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm"
              />
              <textarea
                defaultValue={profile.bio}
                className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm"
              />
              <button
                onClick={() => setIsEditing(false)}
                className="mt-2 px-4 py-2 bg-green-600 text-white rounded-xl text-sm"
              >
                Save Changes
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-gray-800 mb-1">
                {profile.name}
              </h2>
              <p className="text-sm text-gray-500">{profile.email}</p>
              <p className="text-sm text-gray-500">{profile.phone}</p>
              <p className="text-sm text-gray-600 mt-2 italic">{profile.bio}</p>

              <button
                onClick={() => setIsEditing(true)}
                className="mt-4 inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-[#4318d1] hover:bg-[#3513a6] rounded-xl transition"
              >
                <PencilIcon className="w-4 h-4" /> Edit Profile
              </button>
            </>
          )}
        </div>
      </div>

      {/* Badges */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">🏅 Badges</h3>
        <div className="flex gap-2 flex-wrap">
          {profile.badges.map((badge, index) => (
            <span
              key={index}
              className="inline-block bg-[#4318d1]/10 text-[#4318d1] text-xs font-medium px-3 py-1 rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-4">
          📌 Recent Activity
        </h3>
        <ul className="divide-y divide-gray-200">
          {profile.activity.map((item, index) => (
            <li key={index} className="flex items-start gap-3 py-4">
              <ClockIcon className="w-5 h-5 text-[#4318d1] mt-1" />
              <div>
                <p className="text-sm text-gray-800 font-medium">
                  {item.action}
                </p>
                <p className="text-xs text-gray-500 mt-1">{item.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
