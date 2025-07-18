import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Zap, Clock, Shield, Award, Flame, Heart } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "30-minute delivery or it's FREE!",
    color: "text-yellow-500",
    bgColor: "bg-yellow-50"
  },
  {
    icon: Shield,
    title: "FSSAI Certified",
    description: "100% safe & hygienic kitchen",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50"
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Best Biryani in Hyderabad 2024",
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Flame,
    title: "127 Spices",
    description: "Secret recipe passed down generations",
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  },
  {
    icon: Clock,
    title: "Always Fresh",
    description: "Made to order, never pre-cooked",
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every grain tells a story",
    color: "text-red-500",
    bgColor: "bg-red-50"
  }
]

export function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">50,000+</span> People Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're not just making biryani, we're creating experiences that go viral
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-8 bg-white rounded-full px-8 py-4 shadow-lg">
            <div>
              <p className="text-3xl font-bold text-orange-600">4.8/5</p>
              <p className="text-sm text-gray-600">Rating</p>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div>
              <p className="text-3xl font-bold text-emerald-600">50K+</p>
              <p className="text-sm text-gray-600">Orders</p>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div>
              <p className="text-3xl font-bold text-blue-600">30min</p>
              <p className="text-sm text-gray-600">Delivery</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
