"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/constants";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass border-b border-border/30 shadow-lg shadow-black/5"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
                <img src="/logo.png" alt="Companion Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                {siteConfig.name}
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <Link
                href="/apply"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="flex md:hidden items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-border/50 bg-secondary/50"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute right-0 top-0 h-full w-72 bg-background border-l border-border p-6 pt-20"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-base text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="h-px bg-border my-2" />
                <Link
                  href="/apply"
                  onClick={() => setIsMobileOpen(false)}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
                >
                  Apply Now
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
