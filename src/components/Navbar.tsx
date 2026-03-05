import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-heading font-bold text-orange-600"
        >
          RecipeExplorer
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <Link
            to="/explore"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium transition-all"
          >
            Explore Recipes
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;