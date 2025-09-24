import { Star } from 'lucide-react';

const deals = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Wireless Bluetooth Earbuds",
    rating: 4.8,
    originalPrice: 89.99,
    discountedPrice: 34.99,
    discount: 61,
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Smart Fitness Watch",
    rating: 4.6,
    originalPrice: 199.99,
    discountedPrice: 79.99,
    discount: 60,
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "LED Desk Lamp with USB",
    rating: 4.9,
    originalPrice: 45.99,
    discountedPrice: 19.99,
    discount: 57,
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Portable Phone Stand",
    rating: 4.7,
    originalPrice: 24.99,
    discountedPrice: 9.99,
    discount: 60,
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Skincare Gift Set",
    rating: 4.8,
    originalPrice: 79.99,
    discountedPrice: 39.99,
    discount: 50,
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Cozy Throw Blanket",
    rating: 4.9,
    originalPrice: 59.99,
    discountedPrice: 24.99,
    discount: 58,
  },
];

export default function HotDealsSection() {
  return (
    <section id="deals" className="bg-background-gray section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
            Today's Hot Deals
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Limited-time offers on trending products. Don't miss out on these amazing savings!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-xl shadow-lg card-hover overflow-hidden"
            >
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 bg-primary-orange text-white px-2 py-1 rounded-full text-sm font-semibold">
                  -{deal.discount}%
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-primary-blue mb-2 line-clamp-2">
                  {deal.title}
                </h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(deal.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    ({deal.rating})
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary-orange">
                      ${deal.discountedPrice}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ${deal.originalPrice}
                    </span>
                  </div>
                </div>
                
                <button className="w-full btn-secondary">
                  Get Deal
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}