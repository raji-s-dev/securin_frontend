import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-28 text-center">

        <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 leading-tight">
          Discover Recipes <br />
          <span className="text-orange-600">
            Like Never Before
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto font-body">
          Explore rich culinary insights, filter by nutrition,
          rating, time and cuisine — all in one beautifully
          crafted experience.
        </p>

        <div className="mt-10">
          <Link
            to="/explore"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg transition-all hover:scale-105"
          >
            Start Exploring →
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-gray-900">
              Powerful Features
            </h2>

            <p className="mt-4 text-gray-600 font-body">
              Everything you need to explore, analyze, and enjoy recipes
              with a smooth and modern experience.
            </p>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-10">

            <div className="group bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-100 text-2xl group-hover:scale-110 transition">
                🔍
              </div>

              <h3 className="mt-6 text-xl font-heading font-semibold text-gray-900">
                Smart Filtering
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed font-body">
                Instantly filter recipes by calories, cuisine, preparation time,
                and ratings to find the perfect dish tailored to your needs.
              </p>

            </div>

            <div className="group bg-gradient-to-br from-amber-50 to-white border border-amber-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-amber-100 text-2xl group-hover:scale-110 transition">
                📊
              </div>

              <h3 className="mt-6 text-xl font-heading font-semibold text-gray-900">
                Nutritional Insights
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed font-body">
                View detailed nutritional breakdowns including calories,
                protein, carbs, fats, and serving information.
              </p>

            </div>

            <div className="group bg-gradient-to-br from-yellow-50 to-white border border-yellow-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-yellow-100 text-2xl group-hover:scale-110 transition">
                ⚡
              </div>

              <h3 className="mt-6 text-xl font-heading font-semibold text-gray-900">
                Lightning Performance
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed font-body">
                Built with modern frameworks to ensure fast loading,
                seamless browsing, and a delightful user experience.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-heading font-bold text-gray-900">
          Ready to Cook Something Amazing?
        </h2>

        <div className="mt-8">
          <Link
            to="/explore"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105"
          >
            Explore Recipes Now →
          </Link>
        </div>
      </section>

    </div>
  );
};

export default HomePage;