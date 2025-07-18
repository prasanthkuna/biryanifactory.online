import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <span className="text-2xl">🍛</span>
            <span className="font-bold text-xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Biryani Factory
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="hover:text-orange-600 transition-colors">Menu</a>
            <a href="#features" className="hover:text-orange-600 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-orange-600 transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-orange-600 transition-colors">Reviews</a>
            <a href="#faq" className="hover:text-orange-600 transition-colors">FAQ</a>
            <a 
              href="https://instagram.com/biryani.factory.hyderabad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-orange-600 transition-colors flex items-center gap-1"
            >
              <span>📸</span> Instagram
            </a>
            <Button size="sm" className="bg-gradient-to-r from-orange-600 to-red-600" onClick={() => window.location.href = '#pricing'}>
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            <div className="space-y-1">
              <span className={cn(
                "block w-6 h-0.5 bg-gray-800 transition-all",
                isMobileMenuOpen && "rotate-45 translate-y-1.5"
              )} />
              <span className={cn(
                "block w-6 h-0.5 bg-gray-800 transition-all",
                isMobileMenuOpen && "opacity-0"
              )} />
              <span className={cn(
                "block w-6 h-0.5 bg-gray-800 transition-all",
                isMobileMenuOpen && "-rotate-45 -translate-y-1.5"
              )} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-4">
              <a href="#menu" className="hover:text-orange-600 transition-colors">Menu</a>
              <a href="#features" className="hover:text-orange-600 transition-colors">Features</a>
              <a href="#pricing" className="hover:text-orange-600 transition-colors">Pricing</a>
              <a href="#testimonials" className="hover:text-orange-600 transition-colors">Reviews</a>
              <a href="#faq" className="hover:text-orange-600 transition-colors">FAQ</a>
              <a 
                href="https://instagram.com/biryani.factory.hyderabad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-orange-600 transition-colors flex items-center gap-1"
              >
                <span>📸</span> Instagram
              </a>
              <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600" onClick={() => window.location.href = '#pricing'}>
                Order Now
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
