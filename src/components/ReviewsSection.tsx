const reviews = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Best Skincare Products Under $30",
    excerpt: "We tested 15 popular skincare products to find the ones that actually deliver results without breaking the bank...",
    readTime: "5 min read",
    category: "Beauty",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Wireless Earbuds: Worth the Hype?",
    excerpt: "After testing 10 different wireless earbuds under $50, here's what we found about sound quality, battery life...",
    readTime: "7 min read",
    category: "Tech",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Cozy Home Essentials for Winter",
    excerpt: "Transform your space into a warm, inviting sanctuary with these affordable home decor finds that won't disappoint...",
    readTime: "4 min read",
    category: "Home",
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-background-white section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
            Latest Reviews
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            In-depth reviews and buying guides to help you make the best choices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="bg-white rounded-xl shadow-lg card-hover overflow-hidden"
            >
              <div className="relative">
                <img
                  src={review.image}
                  alt={review.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 bg-primary-teal text-white px-3 py-1 rounded-full text-sm font-medium">
                  {review.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-blue mb-3 line-clamp-2">
                  {review.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {review.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {review.readTime}
                  </span>
                  <button className="text-primary-orange font-medium hover:text-orange-600 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}