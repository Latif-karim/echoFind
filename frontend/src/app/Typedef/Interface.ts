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

interface BrowsePageProps {
  items: Item[];
  showForm: boolean;
  editingItem: Item | null;
  newItem: NewItem;
  setNewItem: React.Dispatch<React.SetStateAction<NewItem>>;
  openForm: (item?: Item | null) => void;
  closeForm: () => void;
  saveItem: () => void;
  deleteItem: (id: number) => void;
}

interface ChatPageProps {
  messages: Message[];
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
  sendMessage: () => void;
}
interface ItemCardProps {
  item: Item;
  onEdit: () => void;
  onDelete: () => void;
}
interface ItemFormProps {
  editingItem: Item | null;
  newItem: NewItem;
  setNewItem: React.Dispatch<React.SetStateAction<NewItem>>;
  onSave: () => void;
  onClose: () => void;
}
interface LandingPageProps {
  navigateTo: (page: "landing" | "browse" | "chat") => void;
}

interface MessageBubbleProps {
  message: Message;
}

interface NavigationProps {
  currentPage: "landing" | "browse" | "chat";
  navigateTo: (page: "landing" | "browse" | "chat") => void;
}

export type {
  BrowsePageProps,
  ChatPageProps,
  ItemCardProps,
  ItemFormProps,
  LandingPageProps,
  MessageBubbleProps,
  NavigationProps,
};
