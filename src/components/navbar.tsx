"use client";

import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { brandName } from "@/lib/shopify";
import { HugeiconsIcon } from "@hugeicons/react";
import { ShoppingBasket01Icon, ShoppingCart02Icon, Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { CartContext } from "@/components/CartContext";

// --- Configuration ---
const navigation = [
  { name: "Home", href: "/" },
  { name: "Custom Builds", href: "/custom-builds" },
  { name: "Services", href: "/services" },
  { name: "Parts", href: "/parts" },
  { name: "Gallery", href: "/gallery" },
  { name: "Financing", href: "/financing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  { name: "Facebook", href: "#", path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
  { name: "Instagram", href: "#", path: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" },
  { name: "YouTube", href: "#", path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const cart = useContext(CartContext);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // Handle Scroll Effect
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !isScrolled) setIsScrolled(true);
    if (latest <= 50 && isScrolled) setIsScrolled(false);
  });

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
      <>
        <motion.header
            className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ease-in-out ${
                isScrolled
                    ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-xl"
                    : "bg-transparent border-b border-transparent"
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
          <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-8 text-white">

            {/* Logo */}
            <Link href="/" className="relative z-50 text-xl font-black tracking-tighter uppercase transition-opacity hover:opacity-80">
              {brandName.split("_").map((item, i) => (
                  <span key={i} className={i !== 0 ? "text-red-600 ml-1" : ""}>
                {item}
              </span>
              ))}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 lg:flex">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                            isActive ? "text-white" : "text-slate-300 hover:text-white"
                        }`}
                    >
                      {isActive && (
                          <motion.span
                              layoutId="activeNav"
                              className="absolute inset-0 rounded-full bg-white/10"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                      )}
                      {item.name}
                    </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-6 lg:flex">
              <Link
                  href="/cart"
                  className="group relative flex items-center justify-center p-2 text-slate-300 transition-colors hover:text-white"
              >
                <HugeiconsIcon icon={ShoppingCart02Icon} size={24} />
                <AnimatePresence>
                  {(cart?.cart?.totalQuantity ?? 0) > 0 && (
                      <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white shadow-sm ring-2 ring-slate-950"
                      >
                        {cart?.cart?.totalQuantity}
                      </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={toggleMenu}
                className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 lg:hidden"
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                    <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                    >
                      <HugeiconsIcon icon={Cancel01Icon} size={20} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                    >
                      <HugeiconsIcon icon={Menu01Icon} size={20} />
                    </motion.div>
                )}
              </AnimatePresence>
            </button>
          </nav>
        </motion.header>

        {/* Full Screen Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
              <motion.div
                  initial={{ opacity: 0, y: "-100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: "-100%" }}
                  transition={{ type: "spring", damping: 30, stiffness: 300 }}
                  className="fixed inset-0 z-40 flex flex-col bg-slate-950 lg:hidden"
              >
                {/* Background Texture (Matches Gallery Page) */}
                <div className="absolute inset-0 z-0 opacity-20">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#ef444420,transparent)]" />
                </div>

                {/* Menu Content */}
                <div className="relative z-10 flex h-full flex-col px-6 pb-8 pt-24 overflow-y-auto">

                  {/* Navigation Links */}
                  <nav className="flex flex-col space-y-2">
                    {navigation.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + index * 0.05 }}
                        >
                          <Link
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="block border-l-2 border-white/10 py-3 pl-6 text-2xl font-bold text-slate-400 transition-all hover:border-red-600 hover:text-white"
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                    ))}
                  </nav>

                  <div className="mt-auto pt-8">
                    {/* Mobile CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                      <Link
                          href="/cart"
                          onClick={() => setIsOpen(false)}
                          className="flex w-full items-center justify-between rounded-xl bg-white/5 p-4 backdrop-blur-md transition-all active:scale-95 active:bg-white/10"
                      >
                        <span className="flex items-center gap-3 text-lg font-semibold text-white">
                            <HugeiconsIcon icon={ShoppingBasket01Icon} className="text-red-500"/>
                            View Cart
                        </span>
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                            {cart?.cart?.totalQuantity ?? 0}
                        </span>
                      </Link>
                    </motion.div>

                    {/* Social Links & Contact */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-8 flex flex-col gap-6"
                    >
                      <div className="flex justify-center gap-8">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                className="text-slate-500 transition-colors hover:text-red-500"
                                aria-label={social.name}
                            >
                              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d={social.path} />
                              </svg>
                            </a>
                        ))}
                      </div>

                      <div className="text-center text-sm text-slate-500">
                        <p>Need help?</p>
                        <a href="tel:+18005550123" className="text-slate-400 hover:text-white transition-colors">
                          (800) 555-0123
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
          )}
        </AnimatePresence>
      </>
  );
}