import * as React from "react"
import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What makes your biryani special?",
    answer: "Our biryani is cooked using traditional Hyderabadi methods with premium basmati rice, authentic spices, and fresh ingredients. Each batch is slow-cooked to perfection ensuring every grain is infused with flavor."
  },
  {
    question: "Do you offer vegetarian options?",
    answer: "Yes! We have delicious vegetarian biryani options including Paneer Biryani, Vegetable Biryani, and Mushroom Biryani. All prepared with the same care and authentic spices."
  },
  {
    question: "How can I order from Instagram?",
    answer: "Simply DM us on @biryani.factory.hyderabad with your order details. Our team will confirm your order and arrange delivery. You can also use the order link in our bio!"
  },
  {
    question: "What areas do you deliver to?",
    answer: "We deliver across Hyderabad including Banjara Hills, Jubilee Hills, Gachibowli, Madhapur, Kondapur, and surrounding areas. Free delivery on orders above ₹500!"
  },
  {
    question: "Can I customize the spice level?",
    answer: "Absolutely! We offer mild, medium, and spicy options. Just let us know your preference when ordering, and we'll adjust the spice level to your taste."
  },
  {
    question: "Do you cater for events?",
    answer: "Yes! Our Party Pack is perfect for events. We also offer custom catering packages for larger gatherings. Contact us for special event pricing and live chef services."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our biryani
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  <span className="flex items-center gap-2">
                    <span className="text-orange-600">🍛</span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a 
            href="https://instagram.com/biryani.factory.hyderabad" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
          >
            <span>📸</span>
            DM us on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
