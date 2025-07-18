import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const pricingPlans = [
  {
    name: "Starter Pack",
    price: "₹199",
    description: "Perfect for trying our authentic biryani",
    features: [
      "1 Full Biryani Plate",
      "Choice of Chicken/Veg",
      "Raita & Shorba",
      "Free Delivery"
    ],
    badge: null,
    popular: false
  },
  {
    name: "Family Feast",
    price: "₹699",
    originalPrice: "₹899",
    description: "Most popular choice for families",
    features: [
      "4 Full Biryani Plates",
      "Mix & Match Options",
      "4 Drinks + Desserts",
      "Priority Delivery",
      "Instagram Shoutout"
    ],
    badge: "SAVE ₹200",
    popular: true
  },
  {
    name: "Party Pack",
    price: "₹1999",
    originalPrice: "₹2499",
    description: "Ultimate biryani experience",
    features: [
      "12 Full Biryani Plates",
      "All Varieties Available",
      "Complete Party Setup",
      "Live Chef Service",
      "Social Media Feature",
      "Exclusive Recipes Access"
    ],
    badge: "BEST VALUE",
    popular: false
  }
]

export function Pricing() {
  const [countdown, setCountdown] = React.useState({ hours: 23, minutes: 59, seconds: 59 })

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          return { hours: 23, minutes: 59, seconds: 59 }
        }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4" variant="secondary">Limited Time Offer</Badge>
          <h2 className="text-4xl font-bold mb-4">
            Choose Your <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Perfect Pack</span>
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Special prices valid for next
          </p>
          <div className="flex justify-center gap-4 text-3xl font-bold">
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <span className="text-orange-600">{String(countdown.hours).padStart(2, '0')}</span>
              <p className="text-sm text-gray-600">Hours</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <span className="text-orange-600">{String(countdown.minutes).padStart(2, '0')}</span>
              <p className="text-sm text-gray-600">Minutes</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <span className="text-red-600">{String(countdown.seconds).padStart(2, '0')}</span>
              <p className="text-sm text-gray-600">Seconds</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative",
                plan.popular && "transform scale-105"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-orange-600 to-red-600">
                    🔥 MOST POPULAR
                  </Badge>
                </div>
              )}
              <Card className={cn(
                "h-full transition-all hover:shadow-xl",
                plan.popular && "border-orange-600 border-2"
              )}>
                <CardHeader>
                  {plan.badge && (
                    <Badge variant="secondary" className="w-fit mb-2">
                      {plan.badge}
                    </Badge>
                  )}
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.originalPrice && (
                      <span className="text-xl text-gray-500 line-through ml-2">
                        {plan.originalPrice}
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={cn(
                      "w-full",
                      plan.popular 
                        ? "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                        : ""
                    )}
                    size="lg"
                  >
                    Order Now {plan.popular && "🔥"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            <span className="font-bold text-orange-600">🎁 Special Bonus:</span> Tag us on Instagram @biryani.factory.hyderabad and get 10% extra off!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
