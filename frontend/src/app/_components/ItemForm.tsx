"use client";

import React from "react";
import { Item, NewItem } from "./CampusFind";

interface ItemFormProps {
  editingItem: Item | null;
  newItem: NewItem;
  setNewItem: React.Dispatch<React.SetStateAction<NewItem>>;
  onSave: () => void;
  onClose: () => void;
}

export default function ItemForm({
  editingItem,
  newItem,
  setNewItem,
  onSave,
  onClose,
}: ItemFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave();
  };

  const updateField = (field: keyof NewItem, value: string) => {
    setNewItem((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-[16px] p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[24px] font-[700] text-[#0F172A]">
            {editingItem ? "Edit Item" : "Report New Item"}
          </h2>
          <button onClick={onClose} className="text-[#64748B] text-[24px]">
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-[14px] font-[500] text-[#0F172A] mb-2">
              Title
            </label>
            <input
              value={newItem.title}
              onChange={(e) => updateField("title", e.target.value)}
              type="text"
              className="w-full px-4 py-3 border border-[#E2E8F0] rounded-[8px] text-[14px]"
              placeholder="e.g., iPhone 14 Pro"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-[14px] font-[500] text-[#0F172A] mb-2">
              Description
            </label>
            <textarea
              value={newItem.description}
              onChange={(e) => updateField("description", e.target.value)}
              className="w-full px-4 py-3 border border-[#E2E8F0] rounded-[8px] text-[14px] h-24"
              placeholder="Detailed description..."
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-[14px] font-[500] text-[#0F172A] mb-2">
              Location
            </label>
            <input
              value={newItem.location}
              onChange={(e) => updateField("location", e.target.value)}
              type="text"
              className="w-full px-4 py-3 border border-[#E2E8F0] rounded-[8px] text-[14px]"
              placeholder="Where was it lost/found?"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-[14px] font-[500] text-[#0F172A] mb-2">
              Image URL
            </label>
            <input
              value={newItem.image}
              onChange={(e) => updateField("image", e.target.value)}
              type="url"
              className="w-full px-4 py-3 border border-[#E2E8F0] rounded-[8px] text-[14px]"
              placeholder="https://..."
            />
          </div>

          <div className="mb-6">
            <label className="block text-[14px] font-[500] text-[#0F172A] mb-2">
              Status
            </label>
            <select
              value={newItem.status}
              onChange={(e) =>
                updateField("status", e.target.value as "lost" | "found")
              }
              className="w-full px-4 py-3 border border-[#E2E8F0] rounded-[8px] text-[14px]"
            >
              <option value="lost">Lost</option>
              <option value="found">Found</option>
            </select>
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-[#4318D1] text-white text-[16px] font-[600] rounded-[8px]"
            >
              Save Item
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-[#E2E8F0] text-[#64748B] text-[16px] font-[600] rounded-[8px]"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
