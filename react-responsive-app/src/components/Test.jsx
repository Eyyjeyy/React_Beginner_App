import { useRef, useEffect } from "react";
import { motion, useInView, stagger, useScroll, useAnimation, useAnimate } from "motion/react"

// const items = [1, 2, 3];


// const containerVariants = {
//   hidden: { 
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.5, // 👈 Stagger when exiting
//       delayChildren: 0.5,
//       staggerDirection: -1
//     }
//   },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.5, // Delay between children
//       delayChildren: 0.5
//     }
//   }
// };

// const itemVariants = {
//   hidden: (customIndex) => ({ 
//     y: 20, 
//     x: 110,
//     opacity: 0,
//     transition: { 
//       type: "spring",
//       // delay: customIndex * 0.2 // 👈 Keep consistent delays
//     }
//   }),
//   visible: (customIndex) => ({
//     y: 0,
//     x: 0,
//     opacity: 1,
//     transition: {
//       // delay: customIndex * 0.2,
//       type: "spring"
//     }
//   })
// };

// export default function Test() {
//   return (
//     <motion.ul
//       initial="hidden"
//       whileInView="visible"
//       variants={containerVariants}
//       viewport={{ amount: 0.5, once: false }}
//       className="bg-green-300 h-[740px]"
//     >
//       {items.map((item, index) => (
//         <motion.li
//           key={index}
//           variants={itemVariants}
//           custom={index} // Pass index to variants function
//           className="text-8xl"
//         >
//           {item.text}
//           TEST
//         </motion.li>
//       ))}
//     </motion.ul>
//   );
// }







// const items = [1, 2, 3];

// const containerVariants = {
//   hidden: { 
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.5,
//       // delayChildren: 0.5,
//       staggerDirection: -1, // Reverse order on exit
//     }
//   },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.5,
//       // delayChildren: 0.5,
//     }
//   }
// };

// const itemVariants = {
//   hidden: (customIndex) => ({ 
//     y: 20, 
//     x: 110,
//     opacity: 0,
//     transition: { 
//       type: "spring",
//     }
//   }),
//   visible: (customIndex) => ({
//     y: 0,
//     x: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//     }
//   })
// };

// export default function Test() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { amount: 0.5 });
//   const controls = useAnimation();

//   useEffect(() => {
//     if (isInView) {
//       controls.start("visible"); // Animate in
//     } else {
//       controls.start("hidden"); // Animate out (mirrors entrance)
//     }
//   }, [isInView]);

//   return (
//     <motion.ul
//       ref={ref}
//       initial="hidden"
//       animate={controls} // 👈 Controlled by `isInView`
//       variants={containerVariants}
//       className="bg-green-300 h-[740px]"
//     >
//       {items.map((item, index) => (
//         <motion.li
//           key={index}
//           variants={itemVariants}
//           custom={index}
//           className="text-8xl"
//         >
//           TEST {index + 1} {/* Fixed: Display item number */}
//         </motion.li>
//       ))}
//     </motion.ul>
//   );
// }


export default function Test() {
//   const list = {
//     visible: { 
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.5
//       }
//     },
//     hidden: {
//       opacity: 0,
//       transition: {
//         staggerChildren: 0.5
//       }
//     },
//   }

//     const item = {
//         visible: { 
//             opacity: 1, x: 0,
//             transition: {
//                 type: "string"
//             }
//         },
//         hidden: { 
//             opacity: 0, x: -100,
//             transition: {
//                 stagger: 0.5,
//                 delay: 5,
//                 type: "string"
//             }
//         },
//     }

//     const controls = useAnimation();
//     const ref = useRef(null);

//     return (
//         <motion.ul
//         initial="hidden"
//         // whileInView="visible"
//         animate={controls} // 👈 Control animation manually
//         variants={list}
//         viewport={{ amount: 0.5 }}
//         onViewportEnter={() => controls.start("visible")} // Entrance
//         onViewportLeave={() => {controls.start("hidden"); console.log("test")}}  // Exit (mirrors entrance)
//         className="w-full h-[720px] bg-amber-500 overflow-x-hidden"
//         >
//             <motion.li variants={item} className="text-8xl font-bold">
//                 Test
//             </motion.li>
//             <motion.li variants={item} className="text-8xl font-bold">
//                 Test
//             </motion.li>
//             <motion.li variants={item} className="text-8xl font-bold">
//                 Test
//             </motion.li>
//         </motion.ul>
//     )


    const item = {
        visible: { 
            opacity: 1, 
            x: 0,
            transition: {
                type: "spring" // Fixed typo ("string" → "spring")
            }
        },
        hidden: { 
            opacity: 0, 
            x: -100,
            transition: {
                type: "spring" // Removed stagger/delay (they belong in parent)
            }
        },
    };

    const list = {
        visible: { 
            opacity: 1,
            transition: {
                staggerChildren: 0.5
            }
        },
        hidden: {
            opacity: 0,
            transition: {
                staggerChildren: 0.5,
                delay: 2
            }
        },
    }

    const controls = useAnimation();


    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });

    useEffect(() => {
        if (isInView) controls.start("visible");
        else controls.start("hidden");
    }, [isInView]);

    return (
        <motion.ul
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={list}
        className="w-full h-[720px] bg-amber-500"
        >
            {[1, 2, 3].map((_, index) => (
                <motion.li key={index} variants={item} className="text-8xl font-bold">
                    Test
                </motion.li>
            ))}
        </motion.ul>
    );
}