"use client";

import React from "react";
import { Item } from "../Typedef/Interface";

interface ItemCardProps {
  item: Item;
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="bg-white rounded-[16px] border border-[#F1F5F9] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)] overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <span
            className={`px-3 py-1 rounded-full text-[12px] font-[500] ${
              item.status === "found"
                ? "bg-[#DCFCE7] text-[#059669]"
                : "bg-[#FEF3C7] text-[#D97706]"
            }`}
          >
            {item.status === "found" ? "Found" : "Lost"}
          </span>
          <span className="text-[12px] text-[#64748B]">{item.date}</span>
        </div>
        <h3 className="text-[18px] font-[600] text-[#0F172A] mb-2">
          {item.title}
        </h3>
        <p className="text-[14px] text-[#64748B] mb-3 line-clamp-2">
          {item.description}
        </p>
        <div className="flex items-center gap-2 mb-4">
          <svg
            className="w-4 h-4 text-[#64748B]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-[12px] text-[#64748B]">{item.location}</span>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 px-4 py-2 bg-[#4318D1] text-white text-[14px] font-[500] rounded-[8px]">
            Contact
          </button>
          <button className="px-4 py-2 border border-[#E2E8F0] text-[#64748B] text-[14px] font-[500] rounded-[8px]">
            Edit
          </button>
          <button className="px-4 py-2 border border-[#E2E8F0] text-[#DC2626] text-[14px] font-[500] rounded-[8px]">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
