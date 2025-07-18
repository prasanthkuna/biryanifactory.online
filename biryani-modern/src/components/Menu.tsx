import * as React from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const menuData = {
  combos: [
    {
      name: "Bug Fix Lunch",
      price: "219",
      type: "combo",
      details: "Irani Chicken Dum Biryani + Water",
      save: "Perfect for busy developers",
      segment: "tech"
    },
    {
      name: "Deploy & Dine",
      price: "399",
      type: "combo",
      details: "Chicken 65 Biryani + Chicken 65 + Water",
      save: "Save ₹61",
      segment: "tech"
    },
    {
      name: "Hackathon Pack",
      price: "1,299",
      type: "combo",
      details: "Serves 5: Mixed Biryanis + Starters + Water",
      save: "Save ₹201",
      segment: "tech"
    },
    {
      name: "Interval Feast",
      price: "359",
      type: "combo",
      details: "Chicken Fry Piece Biryani + Chicken 65 + Water",
      save: "Save ₹81",
      segment: "movie"
    },
    {
      name: "Weekend Family Feast",
      price: "899",
      type: "combo",
      details: "Chicken + Veg Biryanis + Starters + Phulkas",
      save: "Save ₹121 | Feeds 4-5",
      segment: "family"
    },
  ],
  
  biryani: [
    { name: "Irani Chicken Dum Biryani", price: "180/280/480", type: "non-veg" },
    { name: "Chicken Fry Piece Biryani", price: "220/320/520", type: "non-veg" },
    { name: "Factory Spl Chicken Biryani", price: "240/340/560", type: "non-veg" },
    { name: "Chicken 65 Biryani", price: "240/340/560", type: "non-veg" },
    { name: "Gongura Chicken Biryani", price: "240/340/560", type: "non-veg" },
    { name: "Chicken Mughlai Biryani", price: "260/360/580", type: "non-veg" },
    { name: "Chicken Lollipop Biryani", price: "220/320/520", type: "non-veg" },
    { name: "Prawns Fry Biryani", price: "320/450/800", type: "non-veg" },
    { name: "Mixed Veg Biryani", price: "180/260/450", type: "veg" },
    { name: "Paneer Biryani", price: "220/320/520", type: "veg" },
    { name: "Gutti Vankaya Biryani", price: "180/260/450", type: "veg" },
    { name: "Mushroom Biryani", price: "220/320/520", type: "veg" },
    { name: "Kaju Biryani", price: "260/360/560", type: "veg" },
  ],
  
  starters: [
    { name: "Chicken 65", price: "200", type: "non-veg" },
    { name: "Chilli Chicken", price: "200", type: "non-veg" },
    { name: "Chicken Manchuria", price: "200", type: "non-veg" },
    { name: "Chicken Lollipop (3/6pc)", price: "150/240", type: "non-veg" },
    { name: "Chicken Majestic", price: "240", type: "non-veg" },
    { name: "Pepper Chicken", price: "200", type: "non-veg" },
    { name: "Ghee Roast Chicken", price: "260", type: "non-veg" },
    { name: "Gobi Manchuria", price: "160", type: "veg" },
    { name: "Paneer 65", price: "200", type: "veg" },
    { name: "Paneer Chilli", price: "200", type: "veg" },
    { name: "Mushroom Chilli", price: "200", type: "veg" },
    { name: "Crispy Fried Baby Corn", price: "200", type: "veg" }
  ],
  
  others: [
    { name: "Avakaya Muddapappu Annam", price: "160", type: "veg" },
    { name: "Ghee Sambar Rice", price: "160", type: "veg" },
    { name: "Chicken 65 Sambar Rice", price: "280", type: "non-veg" },
    { name: "Double Egg Chicken Fried Rice", price: "220", type: "non-veg" },
    { name: "Veg Fried Rice", price: "120", type: "veg" },
    { name: "Butter Chicken", price: "220", type: "non-veg" },
    { name: "Kadai Chicken", price: "220", type: "non-veg" },
    { name: "Paneer Butter Masala", price: "220", type: "veg" },
    { name: "Phulka", price: "20", type: "veg" },
    { name: "Butter Phulka", price: "30", type: "veg" },
  ]
}

export function Menu() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4" variant="secondary">Full Menu</Badge>
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Delicious Menu</span>
          </h2>
          <p className="text-xl text-gray-600">
            From our kitchen to your table - authentic Hyderabadi flavors
          </p>
        </motion.div>

        <Tabs defaultValue="combos" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="combos">Combos</TabsTrigger>
            <TabsTrigger value="biryani">Biryani</TabsTrigger>
            <TabsTrigger value="starters">Starters</TabsTrigger>
            <TabsTrigger value="others">Others</TabsTrigger>
          </TabsList>

          <TabsContent value="combos" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuData.combos.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <Badge variant="destructive">SAVE</Badge>
                      </div>
                      <div className="text-2xl font-bold text-orange-600">₹{item.price}</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-2">{item.details}</p>
                      <Badge variant="outline" className="bg-green-50 text-green-700">
                        {item.save}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="biryani" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuData.biryani.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center justify-between">
                        {item.name}
                        {item.type === "veg" ? (
                          <Badge variant="outline" className="bg-green-50">🟢 Veg</Badge>
                        ) : (
                          <Badge variant="outline" className="bg-red-50">🔴 Non-Veg</Badge>
                        )}
                      </CardTitle>
                      <div className="text-xl font-bold text-orange-600">₹{item.price}</div>
                      <p className="text-sm text-gray-500">Single/Family/Jumbo</p>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="starters" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {menuData.starters.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="hover:shadow-md transition-all">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">{item.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-orange-600">₹{item.price}</span>
                        {item.type === "veg" ? (
                          <Badge variant="outline" className="text-xs">Veg</Badge>
                        ) : (
                          <Badge variant="outline" className="text-xs">Non-Veg</Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="others" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {menuData.others.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="hover:shadow-md transition-all">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">{item.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-orange-600">₹{item.price}</span>
                        {item.type === "veg" ? (
                          <Badge variant="outline" className="text-xs">Veg</Badge>
                        ) : (
                          <Badge variant="outline" className="text-xs">Non-Veg</Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600">
            Download Full Menu PDF
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
