import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Instagram, Twitter, MessageCircle } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const socialPosts = [
  {
    platform: 'instagram',
    username: '@foodie_hyderabad',
    content: 'Just had the BEST biryani of my life! 🔥 The flavors are insane! #BiryaniFactory',
    likes: '12.5K',
    image: '🥘'
  },
  {
    platform: 'twitter',
    username: '@tech_guru',
    content: 'Ordered from @BiryaniFactory during my hackathon. 30 min delivery as promised! Team loved it! 💯',
    likes: '8.2K',
    retweets: '2.1K'
  },
  {
    platform: 'instagram',
    username: '@celebchef',
    content: 'As a chef, I appreciate authentic flavors. This is it! Secret recipe indeed 👨‍🍳',
    likes: '45.8K',
    verified: true
  }
]

const reviews = [
  {
    name: 'Priya Sharma',
    rating: 5,
    comment: 'Best biryani in Hyderabad! The aroma itself is worth 5 stars.',
    date: '2 hours ago'
  },
  {
    name: 'Rajesh Kumar',
    rating: 5,
    comment: 'Ordered for my office party. Everyone loved it! Will order again.',
    date: '5 hours ago'
  },
  {
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'Im from the US visiting India. This biryani is INCREDIBLE!',
    date: '1 day ago'
  }
]

export function SocialProof() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              #BiryaniFactory
            </span> is Trending
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join the conversation • 1.2M posts and counting
          </p>
        </motion.div>

        {/* Social Media Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {socialPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {post.platform === 'instagram' ? (
                        <Instagram className="w-5 h-5 text-pink-600" />
                      ) : (
                        <Twitter className="w-5 h-5 text-blue-400" />
                      )}
                      <div>
                        <p className="font-semibold flex items-center gap-1">
                          {post.username}
                          {post.verified && <span className="text-blue-500">✓</span>}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{post.content}</p>
                  {post.image && <div className="text-6xl text-center mb-4">{post.image}</div>}
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>❤️ {post.likes}</span>
                    {post.retweets && <span>🔄 {post.retweets}</span>}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Customer Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Live Customer Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold">{review.name}</p>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-white/90 mb-2">{review.comment}</p>
                <p className="text-white/60 text-sm">{review.date}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg mb-4">Share your experience and get</p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-full font-semibold">
            <MessageCircle className="w-5 h-5" />
            ₹100 OFF on your next order!
          </div>
        </motion.div>
      </div>
    </section>
  )
}
