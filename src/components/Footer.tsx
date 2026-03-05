const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-white text-xl font-heading mb-4">
          RecipeExplorer
        </h2>

        <p className="text-sm max-w-md">
          Discover, filter and explore delicious recipes with detailed
          nutritional insights and smart filtering.
        </p>

        <div className="mt-8 text-xs text-gray-500">
          © {new Date().getFullYear()} RecipeExplorer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;