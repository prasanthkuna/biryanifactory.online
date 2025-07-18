import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ShareButton } from '@/components/ShareButton'
import { ArrowRight, Clock, Star, Zap } from 'lucide-react'
import gsap from 'gsap'

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const floatingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // GSAP animations for floating elements
    if (floatingRef.current) {
      gsap.to(floatingRef.current.children, {
        y: -20,
        rotation: 360,
        duration: 3,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      })
    }
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-emerald-50">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-amber-400/20 animate-pulse" />
      
      {/* Floating spice elements */}
      <div ref={floatingRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl opacity-20">🌶️</div>
        <div className="absolute top-40 right-20 text-4xl opacity-20">🥘</div>
        <div className="absolute bottom-20 left-1/4 text-5xl opacity-20">🍛</div>
        <div className="absolute bottom-40 right-1/3 text-6xl opacity-20">🔥</div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 text-sm"
          >
            <span className="flex items-center gap-1 bg-white/80 backdrop-blur px-3 py-1 rounded-full">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="font-medium">4.8/5 Rating</span>
            </span>
            <span className="flex items-center gap-1 bg-white/80 backdrop-blur px-3 py-1 rounded-full">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span className="font-medium">30min Delivery</span>
            </span>
            <span className="flex items-center gap-1 bg-white/80 backdrop-blur px-3 py-1 rounded-full">
              <Zap className="w-4 h-4 text-orange-500" />
              <span className="font-medium">50,000+ Orders</span>
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Biryani So Good,
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              It'll Break the Internet
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl"
          >
            Secret family recipe • 127 exotic spices • Made with love
          </motion.p>

          {/* Live order counter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-full text-sm font-medium animate-pulse"
          >
            🔥 237 biryanis ordered in the last hour!
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" variant="gradient" className="group" onClick={() => window.location.href = '#pricing'}>
              Order Now - Get 20% OFF
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.location.href = '#menu'}>
              View Our Menu
            </Button>
            <ShareButton />
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center gap-4 mt-8"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-amber-400 border-2 border-white"
                />
              ))}
            </div>
            <p className="text-sm text-gray-600">
              Join <span className="font-semibold text-orange-600">50,000+</span> happy customers
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}
