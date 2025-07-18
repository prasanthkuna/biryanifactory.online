import * as React from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function DeliveryPartners() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4" variant="secondary">Order Now</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Multiple Ways to <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Order</span>
          </h2>
          <p className="text-lg text-gray-600">
            Choose your favorite platform or order directly from us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="text-center p-6 hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-bold text-lg mb-2">Direct Order</h3>
              <p className="text-gray-600 mb-4">Call us directly</p>
              <Button 
                className="w-full"
                onClick={() => window.location.href = 'tel:+919573264441'}
              >
                📞 9573 264 441
              </Button>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="text-center p-6 hover:shadow-lg transition-all">
              <div className="w-full h-12 mb-3 flex items-center justify-center">
                <span className="text-orange-500 font-bold text-2xl">Swiggy</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Swiggy</h3>
              <p className="text-gray-600 mb-4">Fast delivery</p>
              <Button 
                className="w-full bg-orange-500 hover:bg-orange-600"
                onClick={() => window.open('https://www.swiggy.com', '_blank')}
              >
                Order on Swiggy
              </Button>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="text-center p-6 hover:shadow-lg transition-all">
              <div className="w-full h-12 mb-3 flex items-center justify-center">
                <span className="text-red-500 font-bold text-2xl">zomato</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Zomato</h3>
              <p className="text-gray-600 mb-4">Track your order</p>
              <Button 
                className="w-full bg-red-500 hover:bg-red-600"
                onClick={() => window.open('https://www.zomato.com', '_blank')}
              >
                Order on Zomato
              </Button>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="text-center p-6 hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">📍</div>
              <h3 className="font-bold text-lg mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Dine in available</p>
              <Button 
                className="w-full"
                variant="outline"
                onClick={() => window.open('https://maps.app.goo.gl/Mnb8XrLKD1ddLuXv6', '_blank')}
              >
                Get Directions
              </Button>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-gray-600">
            <span className="font-semibold">📍 Location:</span> Kondapur, OYO Silver Key near RTO office, Hyderabad
          </p>
          <p className="text-gray-600 mt-2">
            <span className="font-semibold">⏰ Timing:</span> 12 PM - 12 AM Daily
          </p>
        </motion.div>
      </div>
    </section>
  )
}
