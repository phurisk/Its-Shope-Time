import { Search, CheckCircle, Calendar } from 'lucide-react';

const values = [
  {
    id: 1,
    icon: Search,
    title: "Expertly Curated",
    description: "Our team handpicks the best products from thousands of listings, saving you hours of searching.",
  },
  {
    id: 2,
    icon: CheckCircle,
    title: "Honest Reviews",
    description: "Unbiased, detailed reviews from real users to help you make informed purchasing decisions.",
  },
  {
    id: 3,
    icon: Calendar,
    title: "Daily Updates",
    description: "Fresh deals and trending products updated every day so you never miss out on great offers.",
  },
];

export default function ValuePropositionSection() {
  return (
    <section className="bg-background-gray section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
            Why Choose It's Shopee Time?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're committed to making your shopping experience better, faster, and more rewarding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => {
            const IconComponent = value.icon;
            return (
              <div
                key={value.id}
                className="bg-white rounded-xl p-8 text-center shadow-lg card-hover"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary-orange/10 rounded-full flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-semibold text-primary-blue mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}