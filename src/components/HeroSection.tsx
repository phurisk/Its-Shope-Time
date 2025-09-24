export default function HeroSection() {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-background-white to-background-gray">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-blue leading-tight mb-6">
              Discover What's{' '}
              <span className="text-primary-orange">Trending</span>{' '}
              on Shopee
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Your trusted source for the hottest deals, honest reviews, and trending products. 
              We curate the best finds so you don't have to search through endless listings.
            </p>
            <button className="btn-primary animate-bounce-gentle">
              View Today's Top Picks
            </button>
          </div>

          {/* Hero Image */}
          <div className="animate-slide-up">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Happy person unboxing packages"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 bg-primary-orange text-white px-4 py-2 rounded-full font-semibold animate-bounce-gentle">
                🔥 Hot Deals
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-medium text-primary-blue">
                ⭐ 4.9/5 Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}