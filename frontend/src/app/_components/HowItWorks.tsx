// // components/HowItWorks.tsx

"use client";

import {
  MegaphoneIcon,
  MagnifyingGlassIcon,
  HandRaisedIcon as HandshakeIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Report",
    description:
      "Share details about lost items so others can help you find them.",
    icon: <MegaphoneIcon className="w-8 h-8 text-indigo-600" />,
    bg: "bg-indigo-100",
  },
  {
    title: "Search",
    description: "Find or match items using smart filters and notifications.",
    icon: <MagnifyingGlassIcon className="w-8 h-8 text-green-600" />,
    bg: "bg-green-100",
  },
  {
    title: "Connect",
    description: "Securely contact the item finder or owner to arrange return.",
    icon: <HandshakeIcon className="w-8 h-8 text-red-600" />,
    bg: "bg-red-100",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#fafafa] py-20 px-4 sm:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">How It Works</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Three simple steps to reunite with your lost belongings or help others
          find theirs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 text-center hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div
              className={`mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full ${step.bg}`}
            >
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// components/HowItWorksDark.tsx

// "use client";

// import {
//   MegaphoneIcon,
//   MagnifyingGlassIcon,
//   HandThumbUpIcon as HandshakeIcon,
// } from "@heroicons/react/24/outline";
// import { motion } from "framer-motion";

// const steps = [
//   {
//     title: "Report",
//     description:
//       "Share details about lost items so others can help you find them.",
//     icon: <MegaphoneIcon className="w-8 h-8 text-indigo-400" />,
//     glow: "bg-indigo-800/20",
//   },
//   {
//     title: "Search",
//     description: "Find or match items using smart filters and notifications.",
//     icon: <MagnifyingGlassIcon className="w-8 h-8 text-green-400" />,
//     glow: "bg-green-800/20",
//   },
//   {
//     title: "Connect",
//     description: "Securely contact the item finder or owner to arrange return.",
//     icon: <HandshakeIcon className="w-8 h-8 text-red-400" />,
//     glow: "bg-red-800/20",
//   },
// ];

// export default function HowItWorksDark() {
//   return (
//     <section className="bg-neutral-900 text-white py-20 px-4 sm:px-8">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-2">How It Works</h2>
//         <p className="text-neutral-400 max-w-xl mx-auto">
//           Three simple steps to reunite with your lost belongings or help others
//           find theirs.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {steps.map((step, index) => (
//           <motion.div
//             key={index}
//             className={`rounded-2xl p-6 text-center border border-neutral-700 ${step.glow} hover:border-white/10 transition duration-300 shadow-xl`}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2, duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <div className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
//               {step.icon}
//             </div>
//             <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
//             <p className="text-neutral-300 text-sm">{step.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// "use client";

// import {
//   MegaphoneIcon,
//   MagnifyingGlassIcon,
//   HandRaisedIcon as HandshakeIcon,
// } from "@heroicons/react/24/outline";
// import { motion } from "framer-motion";

// const steps = [
//   {
//     title: "Report",
//     description:
//       "Share details about lost items so others can help you find them.",
//     icon: <MegaphoneIcon className="w-8 h-8 text-indigo-400" />,
//     glow: "bg-indigo-800/20",
//   },
//   {
//     title: "Search",
//     description: "Find or match items using smart filters and notifications.",
//     icon: <MagnifyingGlassIcon className="w-8 h-8 text-green-400" />,
//     glow: "bg-green-800/20",
//   },
//   {
//     title: "Connect",
//     description: "Securely contact the item finder or owner to arrange return.",
//     icon: <HandshakeIcon className="w-8 h-8 text-red-400" />,
//     glow: "bg-red-800/20",
//   },
// ];

// export default function HowItWorksDark() {
//   return (
//     <section className="bg-neutral-900 text-white py-20 px-4 sm:px-8">
//       <motion.div
//         className="text-center mb-12"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-3xl sm:text-4xl font-bold mb-2">How It Works</h2>
//         <p className="text-neutral-400 max-w-xl mx-auto">
//           Three simple steps to reunite with your lost belongings or help others
//           find theirs.
//         </p>
//       </motion.div>

//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {steps.map((step, index) => (
//           <motion.div
//             key={index}
//             className={`rounded-2xl p-6 text-center border border-neutral-700 ${step.glow} hover:border-white/10 transition duration-300 shadow-xl`}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.3, duration: 0.6, ease: "easeOut" }}
//             viewport={{ once: true, amount: 0.4 }}
//           >
//             <div className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
//               {step.icon}
//             </div>
//             <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
//             <p className="text-neutral-300 text-sm">{step.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
