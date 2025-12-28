'use client'
import {AnimatePresence, motion} from "framer-motion"
import {useState, useEffect} from "react";
import {brandName} from "@/lib/shopify";


export default function LoadingScreen() {
    const phrases = [
        "Innovative",
        "Reliable",
        "Professional",
        "Durable",
        ""
    ]
    const [current, setCurrent] = useState<number>(0)
    const [visible, setVisible] = useState<boolean>(true)
    const [hasVisited, setHasVisited] = useState<boolean>(false)

    // Check if user has visited before on component mount
    useEffect(() => {
        const visited = localStorage.getItem('hasVisitedSite')
        if (visited === 'true') {
            setHasVisited(true)
            setVisible(false) // Skip loading screen if already visited
        }
    }, [])

    // Handle phrase cycling
    useEffect(() => {
        if (!visible || hasVisited) return // Don't cycle if not visible or already visited

        const timer = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % phrases.length)
        }, 350)
        if (current === phrases.length-1) clearTimeout(timer);
        return () => clearTimeout(timer)
    }, [current, phrases.length, visible, hasVisited])
    if (!hasVisited) {
        return (
            <>
                <AnimatePresence mode="popLayout">

                    {visible && (<motion.div
                        className="min-h-screen w-full fixed z-50 bg-black flex items-center justify-center flex-col text-center"
                        exit={{opacity: 0}}>
                        {current !== phrases.length - 1 ? <motion.h1 key={current}
                                                                     initial={{opacity: 0, y: 60, filter: "blur(4px)"}}
                                                                     animate={{opacity: 1, y: 0, filter: "blur(0px)"}}
                                                                     exit={{opacity: 0, y: -20, filter: "blur(4px)"}}
                                                                     transition={{
                                                                         duration: 0.28,
                                                                         ease: [0.25, 0.46, 0.45, 0.94]
                                                                     }}
                                                                     className={"text-white absolute w-full z-10 text-5xl"}
                        >{phrases[current]}</motion.h1> : <Logo setVisible={setVisible}/>}
                    </motion.div>)}
                </AnimatePresence>

            </>
        )
    }
}
function Logo({setVisible}: {setVisible: (visible: boolean) => void}) {
    return <motion.span className={"text-6xl font-bold"}
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{opacity: 1, scale: 1, y: 0}}
                        transition={{
                            duration: 0.84,
                            ease: [0.34, 1.56, 0.64, 1], // Custom spring-like cubic bezier
                            opacity: { duration: 0.35 },
                            scale: { type: "spring", stiffness: 200, damping: 15 },
                            delay: 0.175,
                        }}
            onAnimationComplete={()=>{
                localStorage.setItem('hasVisited', 'true') // Mark as visited
                setVisible(false)
            }}
            >
        {brandName.split("_").map((item, i) => (i===0 ? <span key={i}>{item}</span> : <span key={i} className="text-[#D6452F]"> {item}</span>))}

    </motion.span>
}