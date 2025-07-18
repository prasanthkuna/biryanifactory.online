import * as React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Khanna",
    handle: "@rajesh_foodie",
    text: "The best biryani in Hyderabad! A must-try for all food lovers.",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Anita Sharma",
    handle: "@anita_gourmet",
    text: "Delicious and authentic! I love the spice and the aroma.",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Vikram Das",
    handle: "@vikram_traveller",
    text: "Great taste and quality. Definitely the best in town.",
    image: "https://i.pravatar.cc/150?img=3",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Happy <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Customers</span>
          </h2>
          <p className="text-xl text-gray-600">
            Hear from our satisfied biryani enthusiasts!
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <div className="flex space-x-4">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: testimonial.id * 0.1 }}
                className="flex-shrink-0 w-80 bg-gradient-to-r from-orange-100 to-white rounded-xl shadow-md p-6"
              >
                <div className="mb-4">
                  <Avatar className="w-16 h-16 mx-auto">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  </Avatar>
                </div>
                <div className="flex justify-center mb-3">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-orange-600"
                  >
                    <path
                      fill="currentColor"
                      d="M21 17h-4V7h4v10zm-5-10v10h-2V7h2zm-6 0h2v10h-2V7zm-1 10H5V7h4v10z"
                    />
                  </svg>
                </div>
                <p className="text-center text-gray-700 italic mb-4">
                  "{testimonial.text}"
                </p>
                <div className="text-center">
                  <span className="font-bold text-lg">{testimonial.name}</span>
                  <p className="text-sm text-gray-500">{testimonial.handle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
