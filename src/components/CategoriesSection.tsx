import { Home, Smartphone, Shirt, Sparkles } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: "Home & Living",
    icon: Home,
    description: "Furniture, decor & essentials",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    name: "Gadgets & Tech",
    icon: Smartphone,
    description: "Latest electronics & accessories",
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 3,
    name: "Fashion Finds",
    icon: Shirt,
    description: "Trendy clothing & accessories",
    color: "bg-teal-100 text-teal-600",
  },
  {
    id: 4,
    name: "Beauty Essentials",
    icon: Sparkles,
    description: "Skincare, makeup & wellness",
    color: "bg-pink-100 text-pink-600",
  },
];

export default function CategoriesSection() {
  return (
    <section id="categories" className="bg-background-white section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
            Explore by Category
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Browse our carefully curated categories to find exactly what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-8 text-center card-hover shadow-lg border border-gray-100">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-blue mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}