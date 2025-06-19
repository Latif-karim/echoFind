// import React from "react";
// import {
//   CalendarDaysIcon,
//   MapPinIcon,
//   DocumentArrowUpIcon,
//   TagIcon,
// } from "@heroicons/react/24/outline";

// export default function ReportItem() {
//   return (
//     <div className="p-6 md:p-12 bg-gray-50 min-h-screen flex items-center justify-center">
//       <div className="bg-white w-full max-w-2xl rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
//         <h1 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">
//           📦 Report a Found Item
//         </h1>

//         <form className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               Item Name
//             </label>
//             <div className="relative">
//               <TagIcon className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
//               <input
//                 type="text"
//                 placeholder="e.g. Black Leather Wallet"
//                 className="w-full pl-10 px-4 py-2 rounded-xl bg-gray-50 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#4318d1] text-gray-800 shadow-sm"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               Category
//             </label>
//             <div className="relative">
//               <select className="w-full appearance-none px-4 py-2 pr-10 rounded-xl bg-gray-50 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#4318d1] text-gray-800 shadow-sm">
//                 <option disabled selected>
//                   Select Category
//                 </option>
//                 <option>ID Card</option>
//                 <option>Phone</option>
//                 <option>Bag</option>
//                 <option>Clothing</option>
//                 <option>Other</option>
//               </select>
//               <span className="absolute right-3 top-2.5 text-gray-400 pointer-events-none">
//                 ▾
//               </span>
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               Description
//             </label>
//             <textarea
//               placeholder="Brief description of the item"
//               className="w-full px-4 py-3 h-28 rounded-xl bg-gray-50 border border-transparent resize-none focus:outline-none focus:ring-2 focus:ring-[#4318d1] text-gray-800 shadow-sm"
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-600 mb-1">
//                 Date Found
//               </label>
//               <div className="relative">
//                 <CalendarDaysIcon className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
//                 <input
//                   type="date"
//                   className="w-full pl-10 px-4 py-2 rounded-xl bg-gray-50 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#4318d1] text-gray-800 shadow-sm"
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-600 mb-1">
//                 Location Found
//               </label>
//               <div className="relative">
//                 <MapPinIcon className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
//                 <input
//                   type="text"
//                   placeholder="e.g. Main Library, Hall B"
//                   className="w-full pl-10 px-4 py-2 rounded-xl bg-gray-50 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#4318d1] text-gray-800 shadow-sm"
//                 />
//               </div>
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               Upload Image
//             </label>
//             <div className="relative flex items-center justify-center border border-dashed border-gray-300 rounded-xl bg-gray-50 p-6 cursor-pointer hover:border-[#4318d1] hover:bg-gray-100">
//               <DocumentArrowUpIcon className="w-6 h-6 text-[#4318d1] mr-2" />
//               <span className="text-sm text-gray-600">
//                 Click to upload or drag & drop image here
//               </span>
//               <input
//                 type="file"
//                 className="absolute inset-0 opacity-0 cursor-pointer"
//               />
//             </div>
//           </div>

//           <div className="pt-4">
//             <button
//               type="submit"
//               className="w-full py-3 rounded-xl bg-[#4318d1] text-white font-semibold text-sm tracking-wide hover:bg-[#3513a6] transition"
//             >
//               Submit Report
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }import React from "react";
import {
  PhotoIcon,
  CalendarIcon,
  MapPinIcon,
  TagIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";

export default function ReportItemPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Report Lost Item
        </h1>

        <form className="space-y-10">
          {/* Item Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Item Name
            </label>
            <div className="relative">
              <TagIcon className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="e.g. Black Backpack"
                className="w-full pl-10 pr-4 py-2 text-sm bg-transparent border-b border-gray-300 focus:border-[#4318d1] focus:outline-none placeholder-gray-400"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Description
            </label>
            <div className="relative">
              <ClipboardDocumentIcon className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              <textarea
                placeholder="Provide detailed description of the lost item..."
                className="w-full pl-10 pr-4 py-2 text-sm bg-transparent border-b border-gray-300 focus:border-[#4318d1] focus:outline-none placeholder-gray-400"
                rows={4}
              ></textarea>
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Last Seen Location
            </label>
            <div className="relative">
              <MapPinIcon className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="e.g. Campus Cafeteria"
                className="w-full pl-10 pr-4 py-2 text-sm bg-transparent border-b border-gray-300 focus:border-[#4318d1] focus:outline-none placeholder-gray-400"
              />
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Date Lost
            </label>
            <div className="relative">
              <CalendarIcon className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              <input
                type="date"
                className="w-full pl-10 pr-4 py-2 text-sm bg-transparent border-b border-gray-300 text-gray-600 focus:border-[#4318d1] focus:outline-none"
              />
            </div>
          </div>

          {/* Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Upload Image
            </label>
            <label className="flex items-center justify-center w-full border border-dashed border-gray-300 rounded-xl p-6 bg-white text-gray-400 cursor-pointer hover:border-[#4318d1] hover:text-[#4318d1] transition">
              <PhotoIcon className="h-6 w-6 mr-2" />
              <span>Click to upload or drag & drop</span>
              <input type="file" className="hidden" />
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-[#4318d1] text-white text-sm font-medium rounded-xl hover:bg-[#3513a6] transition"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
