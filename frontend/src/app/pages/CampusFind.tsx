"use client";

import React, { useState } from "react";

export interface Item {
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  status: "lost" | "found";
  contact: string;
}

export interface Message {
  id: number;
  sender: string;
  message: string;
  time: string;
  isMe: boolean;
}

export interface NewItem {
  title: string;
  description: string;
  location: string;
  image: string;
  status: "lost" | "found";
}

export default function CampusFind() {
  const [currentPage, setCurrentPage] = useState<"landing" | "browse" | "chat">(
    "landing"
  );
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      title: "iPhone 14 Pro",
      description: "Black iPhone found near library",
      location: "Main Library",
      date: "2024-01-15",
      image: "https://placehold.co/300x200/4318D1/FFFFFF?text=iPhone",
      status: "found",
      contact: "john@university.edu",
    },
    {
      id: 2,
      title: "Blue Backpack",
      description: "Nike backpack with textbooks inside",
      location: "Student Center",
      date: "2024-01-14",
      image: "https://placehold.co/300x200/059669/FFFFFF?text=Backpack",
      status: "lost",
      contact: "sarah@university.edu",
    },
    {
      id: 3,
      title: "Silver MacBook",
      description: "MacBook Air with university stickers",
      location: "Engineering Building",
      date: "2024-01-13",
      image: "https://placehold.co/300x200/DC2626/FFFFFF?text=MacBook",
      status: "found",
      contact: "mike@university.edu",
    },
  ]);

  const [newItem, setNewItem] = useState<NewItem>({
    title: "",
    description: "",
    location: "",
    image: "",
    status: "lost",
  });

  const [newMessage, setNewMessage] = useState("");

  const navigateTo = (page: "landing" | "browse" | "chat") => {
    setCurrentPage(page);
    setShowForm(false);
    setEditingItem(null);
  };

  const openForm = (item: Item | null = null) => {
    setEditingItem(item);
    setNewItem(
      item
        ? { ...item }
        : {
            title: "",
            description: "",
            location: "",
            image: "",
            status: "lost",
          }
    );
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingItem(null);
    setNewItem({
      title: "",
      description: "",
      location: "",
      image: "",
      status: "lost",
    });
  };

  const saveItem = () => {
    if (editingItem) {
      setItems(
        items.map((item) =>
          item.id === editingItem.id
            ? {
                ...newItem,
                id: editingItem.id,
                date: item.date,
                contact: item.contact,
              }
            : item
        )
      );
    } else {
      const newItemWithId: Item = {
        ...newItem,
        id: Date.now(),
        date: new Date().toISOString().split("T")[0],
        contact: "user@university.edu",
      };
      setItems([...items, newItemWithId]);
    }
    closeForm();
  };

  const deleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now(),
        sender: "You",
        message: newMessage,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isMe: true,
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] font-[Inter]">
      <Navigation currentPage={currentPage} navigateTo={navigateTo} />

      {currentPage === "landing" && <LandingPage navigateTo={navigateTo} />}

      {currentPage === "browse" && (
        <BrowsePage
          items={items}
          showForm={showForm}
          editingItem={editingItem}
          newItem={newItem}
          setNewItem={setNewItem}
          openForm={openForm}
          closeForm={closeForm}
          saveItem={saveItem}
          deleteItem={deleteItem}
        />
      )}

      {currentPage === "chat" && (
        <ChatPage
          messages={messages}
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          sendMessage={sendMessage}
        />
      )}
    </div>
  );
}
