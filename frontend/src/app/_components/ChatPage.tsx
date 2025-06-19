"use client";
import React from "react";

export default function ChatPage() {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="User avatar"
              className="w-10 h-10 rounded-full"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
          </div>
          <div>
            <h2 className="text-sm font-medium text-gray-800">Ama Boateng</h2>
            <p className="text-xs text-gray-400">Online</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        <div className="flex justify-start">
          <div className="max-w-xs bg-gray-100 px-4 py-2 text-sm text-gray-800 rounded-2xl rounded-tl-[0rem] rounded-br-[0rem]">
            Hey, did you find a black backpack around the library?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-xs bg-[#4318d1] text-white px-4 py-2 text-sm rounded-2xl  rounded-tl-[0rem] rounded-br-[0rem]">
            Yes! I think I saw one today.
            <div className="text-xs text-right text-violet-200 mt-1">Seen</div>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-xs bg-gray-100 px-4 py-2 text-sm text-gray-800 rounded-2xl  rounded-tl-[0rem] rounded-br-[0rem]">
            That’s great. Can you describe it?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-xs bg-[#4318d1] text-white px-4 py-2 text-sm rounded-2xl  rounded-tl-[0rem] rounded-br-[0rem]">
            It had a zipper missing on the front pocket.
            <div className="text-xs text-right text-violet-200 mt-1">Seen</div>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <form className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 rounded-full bg-gray-100 text-sm border border-gray-200 focus:outline-none placeholder-gray-400"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-[#4318d1] text-white text-sm rounded-full hover:bg-[#3513a6] transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
