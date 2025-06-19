import React from "react";

import Button from "../_components/GetStartedButton";

import { dummyitems } from "@/db/dummy";

export default function page() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-6 max-sm:px-4">
        <div className="flex justify-between items-center mb-8 max-sm:flex-col max-sm:gap-4">
          <div>
            <h1 className="text-[32px] font-[700] text-foreground mb-2 max-sm:text-[24px]">
              Lost & Found Items
            </h1>
            <p className="text-[16px] text-[#64748B]">
              Browse items or report something you&apos;ve lost or found
            </p>
          </div>
        </div>

        <div className="flex gap-4 mb-8 max-sm:flex-col">
          <Button type="button" variant="primary" className="px-6 py-3">
            All Items
          </Button>
          <Button type="button" variant="secondary" className="px-6 py-3">
            Lost Items
          </Button>
          <Button type="button" variant="secondary" className="px-6 py-3">
            Found Items
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {dummyitems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-1">
                <h2 className="text-sm font-semibold text-gray-800">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-500">{item.description}</p>
                <span
                  className={`inline-block mt-2 text-xs font-medium px-2 py-1 rounded-full ${
                    item.status === "found"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// // Ensure this path matches your setup

// export default function BrowsePage() {
//   const items = [
//     {
//       id: 1,
//       name: "Black Backpack",
//       description:
//         "Found near the library entrance. Contains books and a power bank.",
//       image:
//         "https://images.unsplash.com/photo-1585386959984-a41552263f85?auto=format&fit=crop&w=500&q=60",
//       status: "found",
//     },
//     {
//       id: 2,
//       name: "iPhone 12",
//       description: "White iPhone found in the cafeteria with a cracked screen.",
//       image:
//         "https://images.unsplash.com/photo-1603898037225-dab9d87f870b?auto=format&fit=crop&w=500&q=60",
//       status: "lost",
//     },
//     {
//       id: 3,
//       name: "Set of Keys",
//       description: "Bunch of keys found in the campus garden area.",
//       image:
//         "https://images.unsplash.com/photo-1603897293722-6c89f5b4d73b?auto=format&fit=crop&w=500&q=60",
//       status: "found",
//     },
//   ];

//   return (
//     <div className="min-h-screen py-8 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6 max-sm:px-4">
//         <div className="flex justify-between items-center mb-8 max-sm:flex-col max-sm:gap-4">
//           <div>
//             <h1 className="text-[32px] font-bold text-gray-800 mb-2 max-sm:text-[24px]">
//               Lost & Found Items
//             </h1>
//             <p className="text-base text-gray-500">
//               Browse items or report something you've lost or found
//             </p>
//           </div>
//         </div>

//         <div className="flex gap-4 mb-8 max-sm:flex-col">
//           <Button
//             type="button"
//             className="px-6 py-3 bg-[#4318d1] text-white hover:bg-[#3413b5]"
//           >
//             All Items
//           </Button>
//           <Button
//             type="button"
//             className="px-6 py-3 border border-gray-300 hover:border-[#4318d1]"
//           >
//             Lost Items
//           </Button>
//           <Button
//             type="button"
//             className="px-6 py-3 border border-gray-300 hover:border-[#4318d1]"
//           >
//             Found Items
//           </Button>
//         </div>

//         <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
//           {items.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4 space-y-1">
//                 <h2 className="text-sm font-semibold text-gray-800">
//                   {item.name}
//                 </h2>
//                 <p className="text-sm text-gray-500">{item.description}</p>
//                 <span
//                   className={`inline-block mt-2 text-xs font-medium px-2 py-1 rounded-full ${
//                     item.status === "found"
//                       ? "bg-green-100 text-green-700"
//                       : "bg-red-100 text-red-700"
//                   }`}
//                 >
//                   {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
