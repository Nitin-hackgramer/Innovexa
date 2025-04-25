// 'use client';

// import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button';
// import { MessageSquare } from 'lucide-react';

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
//       {/* Subtle glowing background blur */}
//       <div className="absolute -z-10 w-[500px] h-[500px] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse top-[-100px] left-[50%] -translate-x-1/2" />

//       <div className="max-w-6xl mx-auto text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//         >
//           <img
//             src="/logo.png"
//             alt="Innovexa Logo"
//             className="h-28 md:h-36 mx-auto mb-6 drop-shadow-lg"
//           />

//           <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
//             Welcome to Innovexa
//           </h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4, duration: 1 }}
//             className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto"
//           >
//             🚀 A place where <span className="font-semibold text-white">tech minds</span> connect, grow, and hustle together. Whether you’re a code wizard 🧙‍♂️ or a noob on the grind 💻—there’s space for you here.
//           </motion.p>

//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             <Button
//               size="lg"
//               className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:opacity-90 transition-opacity"
//               onClick={() => window.open("https://chat.whatsapp.com/C8mxw1OQ8sg1nnCv8RpqiL", "_blank")}
//             >
//               <MessageSquare className="mr-2 h-5 w-5" />
//               Join on WhatsApp Community
//             </Button>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button';
// import { MessageSquare, ChevronDown } from 'lucide-react';

// export default function HeroSection() {
//   const [scrollOpacity, setScrollOpacity] = useState(1);

//   // Parallax scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const newOpacity = 1 - Math.min(scrollY / 500, 0.6);
//       setScrollOpacity(newOpacity);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 px-4 overflow-hidden">
//       {/* Background elements matching original gradient colors */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-0 left-0 w-full h-full bg-black opacity-85" />
//         <div className="absolute -z-10 w-[600px] h-[600px] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse top-[-100px] left-[50%] -translate-x-1/2" />
//         <div className="absolute -z-10 w-[400px] h-[400px] bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse delay-700 bottom-[-50px] right-[-100px]" />
//         <div className="absolute -z-10 w-[300px] h-[300px] bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000 bottom-[20%] left-[-50px]" />
//       </div>

//       {/* Subtle pattern overlay */}
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTMwIDMwaDMwdjMwSDMwVjMwem0wLTMwaDMwdjMwSDMwVjB6TTAgMGgzMHYzMEgwVjB6TTAgMzBoMzB2MzBIMFYzMHoiIHN0cm9rZT0iI2ZmZmZmZiIgb3BhY2l0eT0iLjAzIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-30 z-0" />

//       {/* Accent line using the logo's gradient colors */}
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600" />

//       <div className="max-w-6xl mx-auto text-center z-10" style={{ opacity: scrollOpacity }}>
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           className="backdrop-blur-sm bg-black/30 p-8 rounded-xl border border-white/5 shadow-2xl"
//         >
//           {/* Logo with enhanced presentation */}
//           <div className="relative mb-8">
//             <motion.img
//               src="/logo.png"
//               alt="Innovexa Logo"
//               className="h-28 md:h-40 mx-auto drop-shadow-xl"
//               initial={{ y: -20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 1.2, delay: 0.2 }}
//             />
//             <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent blur-sm" />
//           </div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.4 }}
//             className="text-4xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-transparent bg-clip-text tracking-tight"
//           >
//             Welcome to Innovexa
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6, duration: 1 }}
//             className="text-lg md:text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed"
//           >
//             A <span className="font-semibold text-pink-400">premium</span> community where <span className="font-semibold text-pink-400">tech innovators</span> connect, grow, and excel together. From seasoned developers to ambitious newcomers — discover your place in our exclusive network.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 1 }}
//             className="flex justify-center"
//           >
//             <motion.div
//               whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(236, 72, 153, 0.4)" }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <Button
//                 size="lg"
//                 className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:opacity-90 transition-opacity shadow-lg border border-pink-500/20 px-8 py-6 text-lg font-medium"
//                 onClick={() => window.open("https://chat.whatsapp.com/C8mxw1OQ8sg1nnCv8RpqiL", "_blank")}
//               >
//                 <MessageSquare className="mr-3 h-5 w-5" />
//                 Join Our Community
//               </Button>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Elegant scroll indicator */}
//       <motion.div 
//         className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.7 }}
//         transition={{ delay: 2, duration: 1 }}
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//           className="flex flex-col items-center"
//         >
//           <p className="text-pink-400 text-sm mb-2 font-light tracking-widest">DISCOVER</p>
//           <ChevronDown className="h-6 w-6 text-pink-400" />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }



'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageSquare, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = 1 - Math.min(scrollY / 500, 0.6);
      setScrollOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Luxurious background with dark blue and purple gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80" />
        <div className="absolute -z-10 w-[600px] h-[600px] bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-full blur-3xl opacity-20 animate-pulse top-[-100px] left-[50%] -translate-x-1/2" />
        <div className="absolute -z-10 w-[400px] h-[400px] bg-gradient-to-r from-indigo-700 to-purple-800 rounded-full blur-3xl opacity-20 animate-pulse delay-700 bottom-[-50px] right-[-100px]" />
        <div className="absolute -z-10 w-[300px] h-[300px] bg-gradient-to-r from-blue-600 to-orange-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000 bottom-[20%] left-[-50px]" />
      </div>

      {/* Subtle grid overlay for premium feel */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTMwIDMwaDMwdjMwSDMwVjMwem0wLTMwaDMwdjMwSDMwVjB6TTAgMGgzMHYzMEgwVjB6TTAgMzBoMzB2MzBIMFYzMHoiIHN0cm9rZT0iI2ZmZmZmZiIgb3BhY2l0eT0iLjAzIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-30 z-0" />

      {/* Golden accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400" />

      <div className="max-w-6xl mx-auto text-center z-10" style={{ opacity: scrollOpacity }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="backdrop-blur-sm bg-black/30 p-8 rounded-xl border border-white/5 shadow-2xl"
        >
          {/* Logo with reflection effect */}
          <div className="relative mb-8">
            <motion.img
              src="/logo.png"
              alt="Community Logo"
              className="h-28 md:h-36 mx-auto drop-shadow-xl"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            />
            <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-orange-400/50 to-transparent blur-sm" />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-orange-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text tracking-tight"
          >
            Welcome to Innovexa
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-lg md:text-xl mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            A <span className="font-semibold text-orange-400">premium</span> community where <span className="font-semibold text-orange-400">tech innovators</span> connect, grow, and excel together. From seasoned developers to ambitious newcomers — discover your place in our exclusive network.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(251, 191, 36, 0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-400 to-purple-600 hover:from-orange-500 hover:to-purple-700 text-white shadow-lg border border-orange-400/20 px-8 py-6 text-lg font-medium"
                onClick={() => window.open("https://chat.whatsapp.com/C8mxw1OQ8sg1nnCv8RpqiL", "_blank")}
              >
                <MessageSquare className="mr-3 h-5 w-5" />
                Join Our Exclusive Community
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Elegant scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center"
        >
          <p className="text-orange-400 text-sm mb-2 font-light tracking-widest">DISCOVER</p>
          <ChevronDown className="h-6 w-6 text-orange-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
