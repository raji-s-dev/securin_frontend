import type { Recipe } from "../types/recipe";
import RatingStars from "./RatingStars";

interface Props {
  recipe: Recipe | null;
  onClose: () => void;
}

const RecipeDrawer = ({ recipe, onClose }: Props) => {
  if (!recipe) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 w-full sm:w-[480px] h-full bg-white shadow-2xl z-50 p-8 overflow-y-auto animate-slide-in">
        
        <button
          onClick={onClose}
          className="mb-6 text-sm text-gray-500 hover:text-gray-800"
        >
          ← Back
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>

        <div className="mb-4">
          <span className="px-3 py-1 text-xs bg-emerald-100 text-emerald-700 rounded-full">
            {recipe.cuisine}
          </span>
        </div>

        <RatingStars rating={recipe.rating} />

        {/* Quick Meta */}
        <div className="flex flex-wrap gap-3 mt-4 text-sm">
          {recipe.total_time && (
            <span className="px-3 py-1 bg-gray-100 rounded-full">
              🕒 {recipe.total_time} mins
            </span>
          )}
          {recipe.serves && (
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
              👥 Serves {recipe.serves}
            </span>
          )}
        </div>

        {/* Description */}
        <div className="mt-8">
          <h3 className="font-semibold text-gray-800 mb-2">
            Description
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {recipe.description}
          </p>
        </div>

        {/* Time Breakdown */}
        <div className="mt-8">
          <h3 className="font-semibold text-gray-800 mb-3">
            Preparation Details
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-gray-500">Prep Time</p>
              <p className="font-semibold">
                {recipe.prep_time || 0} mins
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-gray-500">Cook Time</p>
              <p className="font-semibold">
                {recipe.cook_time || 0} mins
              </p>
            </div>
          </div>
        </div>

        {/* Nutrition */}
        <div className="mt-8">
          <h3 className="font-semibold text-gray-800 mb-4">
            Nutrition
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(recipe.nutrients || {}).map(
              ([key, value]) => (
                <div
                  key={key}
                  className="bg-orange-50 p-4 rounded-xl text-sm"
                >
                  <p className="text-gray-500 capitalize">
                    {key}
                  </p>
                  <p className="font-semibold text-orange-600">
                    {value}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDrawer;