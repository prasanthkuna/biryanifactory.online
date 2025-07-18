import * as React from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function CTA() {
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [showSuccess, setShowSuccess] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the data to your backend
    setShowSuccess(true)
    setEmail("")
    setPhone("")
  }

  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            initial={{ 
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              rotate: Math.random() * 360
            }}
            animate={{ 
              rotate: 360,
              y: [null, "-100%"]
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            🍛
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            🎉 Limited Time Offer
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get 20% Off Your First Order!
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join our exclusive Biryani Lovers Club and never miss our special offers.
            Plus, get instant access to secret menu items!
          </p>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
                <Input
                  type="tel"
                  placeholder="Your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
              </div>
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-white text-orange-600 hover:bg-white/90"
              >
                Claim Your 20% Discount 🎁
              </Button>
              <p className="text-sm text-white/70">
                By subscribing, you agree to receive marketing messages. Follow us on{" "}
                <a 
                  href="https://instagram.com/biryani.factory.hyderabad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline"
                >
                  @biryani.factory.hyderabad
                </a>
              </p>
            </form>
          </Card>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap justify-center gap-6 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span>Instant Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span>100% Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span>Exclusive Offers</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl">🎉 Welcome to the Club!</DialogTitle>
            <DialogDescription className="text-lg pt-4">
              Your 20% discount code: <strong className="text-orange-600">BIRYANI20</strong>
              <br /><br />
              Check your email for more details and follow us on Instagram 
              <a 
                href="https://instagram.com/biryani.factory.hyderabad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-600 underline ml-1"
              >
                @biryani.factory.hyderabad
              </a>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  )
}
