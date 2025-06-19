import React from "react";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";

export default function ChatList() {
  const chats = [
    {
      id: 1,
      name: "John Doe",
      lastMessage: "Thanks! I’ll check now.",
      timestamp: "2 min ago",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      lastMessage: "Any update on the wallet?",
      timestamp: "10 min ago",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Michael Smith",
      lastMessage: "I might have seen it near Hall A.",
      timestamp: "1 hr ago",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ];

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">
        💬 Chats
      </h1>
      <div className="divide-y divide-gray-200">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center px-2 py-4 gap-4 cursor-pointer hover:bg-gray-100 transition"
          >
            <img
              src={chat.avatar}
              alt={chat.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <h2 className="font-medium text-gray-900 text-sm truncate">
                  {chat.name}
                </h2>
                <span className="text-xs text-gray-400 whitespace-nowrap">
                  {chat.timestamp}
                </span>
              </div>
              <p className="text-sm text-gray-500 truncate mt-1">
                {chat.lastMessage}
              </p>
            </div>
            <ChatBubbleLeftEllipsisIcon className="w-5 h-5 text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
}
