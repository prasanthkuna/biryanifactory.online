import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { motion } from "framer-motion"

interface ShareButtonProps {
  className?: string
}

export function ShareButton({ className }: ShareButtonProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [copied, setCopied] = React.useState(false)

  const shareUrl = window.location.href
  const shareText = "🍛 Just discovered the most amazing Biryani in Hyderabad! Check out @biryani.factory.hyderabad"

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const shareLinks = [
    {
      name: "WhatsApp",
      icon: "📱",
      url: `https://wa.me/?text=${encodeURIComponent(shareText + '\n' + shareUrl)}`,
      color: "bg-green-600"
    },
    {
      name: "Instagram",
      icon: "📸",
      action: () => {
        handleCopy()
        window.open('https://instagram.com/biryani.factory.hyderabad', '_blank')
      },
      color: "bg-gradient-to-br from-purple-600 to-pink-600"
    },
    {
      name: "Facebook",
      icon: "👍",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: "bg-blue-600"
    },
    {
      name: "Twitter",
      icon: "🐦",
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      color: "bg-sky-500"
    }
  ]

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className={className}
        variant="outline"
      >
        <span className="mr-2">🚀</span>
        Share & Get 10% Off
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share & Save! 🎉</DialogTitle>
            <DialogDescription>
              Share with your friends and get 10% off on your next order!
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {shareLinks.map((link) => (
                <motion.button
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if (link.action) {
                      link.action()
                    } else if (link.url) {
                      window.open(link.url, '_blank')
                    }
                  }}
                  className={`${link.color} text-white p-4 rounded-lg flex flex-col items-center gap-2 hover:shadow-lg transition-all`}
                >
                  <span className="text-2xl">{link.icon}</span>
                  <span className="text-sm font-medium">{link.name}</span>
                </motion.button>
              ))}
            </div>

            <div className="relative">
              <div className="flex items-center gap-2 p-3 bg-gray-100 rounded-lg">
                <input
                  type="text"
                  value={`${shareText}\n${shareUrl}`}
                  readOnly
                  className="flex-1 bg-transparent text-sm outline-none"
                />
                <Button
                  size="sm"
                  onClick={handleCopy}
                  className="shrink-0"
                >
                  {copied ? "✓ Copied!" : "Copy"}
                </Button>
              </div>
            </div>

            <div className="text-center text-sm text-gray-600">
              <p>🎁 Share and tag <strong>@biryani.factory.hyderabad</strong></p>
              <p>to unlock exclusive discounts!</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
