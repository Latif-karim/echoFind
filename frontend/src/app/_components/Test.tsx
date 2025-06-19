"use client";
// import Image from "next/image";
import React from "react";

import MessageBubble from "./MessageBubble";
// import { dummymessages } from "@/db/dummy";
import { Message } from "../pages/CampusFind";

interface ChatPageProps {
  messages: Message[];
}

export default function ChatPage({ messages }: ChatPageProps) {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-6 max-sm:px-4">
        <div className="bg-white rounded-[16px] border border-[#F1F5F9] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] overflow-hidden h-[600px] flex flex-col">
          <div className="p-6 border-b border-[#F1F5F9] bg-[#FAFAFA]">
            <div className="flex items-center gap-4">
              <img
                src="https://placehold.co/48x48/4318D1/FFFFFF?text=JS"
                alt="User"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-[18px] font-[600] text-[#0F172A]">
                  John Smith
                </h3>
                <p className="text-[14px] text-[#64748B]">
                  About: iPhone 14 Pro
                </p>
              </div>
              <div className="ml-auto">
                <span className="w-3 h-3 bg-[#059669] rounded-full inline-block" />
                <span className="text-[12px] text-[#64748B] ml-2">Online</span>
              </div>
            </div>
          </div>

          <div className="flex-1 p-6 overflow-y-auto">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
          </div>

          <div className="p-6 border-t border-[#F1F5F9] bg-[#FAFAFA]">
            <div className="flex gap-3">
              <input
                type="text"
                className="flex-1 px-4 py-3 border border-[#E2E8F0] rounded-[8px] text-[14px]"
                placeholder="Type your message..."
              />
              <button className="px-6 py-3 bg-[#4318D1] text-white text-[14px] font-[600] rounded-[8px]">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
