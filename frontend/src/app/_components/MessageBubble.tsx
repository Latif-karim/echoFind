"use client";

import React from "react";
import { Message } from "../pages/CampusFind";

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  return (
    <div
      className={`flex mb-4 ${message.isMe ? "justify-end" : "justify-start"}`}
    >
      <div className={`max-w-[70%] ${message.isMe ? "order-2" : "order-1"}`}>
        {!message.isMe && (
          <div className="text-[12px] text-[#64748B] mb-1 ml-3">
            {message.sender}
          </div>
        )}
        <div
          className={`px-4 py-3 rounded-[16px] ${
            message.isMe
              ? "bg-[#4318D1] text-white"
              : "bg-[#F1F5F9] text-[#0F172A]"
          }`}
        >
          <p className="text-[14px] leading-[20px]">{message.message}</p>
        </div>
        <div
          className={`text-[11px] text-[#64748B] mt-1 ${
            message.isMe ? "text-right mr-3" : "text-left ml-3"
          }`}
        >
          {message.time}
        </div>
      </div>
      {!message.isMe && (
        <img
          src="https://placehold.co/32x32/4318D1/FFFFFF?text=JS"
          alt="User"
          className="w-8 h-8 rounded-full order-1 mr-3 mt-6"
        />
      )}
    </div>
  );
}
