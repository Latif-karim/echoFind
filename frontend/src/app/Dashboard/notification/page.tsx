import React from "react";
import {
  BellIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function NotificationPage() {
  const notifications = [
    {
      id: 1,
      type: "info",
      message: "You have a new match for your lost item.",
      timestamp: "Just now",
    },
    {
      id: 2,
      type: "warning",
      message: "Your report is missing location details.",
      timestamp: "10 min ago",
    },
    {
      id: 3,
      type: "success",
      message: "Your item report has been submitted successfully.",
      timestamp: "1 hr ago",
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case "info":
        return <BellIcon className="w-5 h-5 text-[#4318d1]" />;
      case "warning":
        return <ExclamationTriangleIcon className="w-5 h-5 text-yellow-500" />;
      case "success":
        return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
      default:
        return <BellIcon className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">
        🔔 Notifications
      </h1>
      <div className="divide-y divide-gray-200">
        {notifications.map((note) => (
          <div
            key={note.id}
            className="flex items-start gap-4 px-2 py-4 hover:bg-gray-100 transition"
          >
            <div>{getIcon(note.type)}</div>
            <div className="flex-1">
              <p className="text-sm text-gray-800">{note.message}</p>
              <p className="text-xs text-gray-400 mt-1">{note.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
