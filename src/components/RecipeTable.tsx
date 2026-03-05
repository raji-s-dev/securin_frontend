import type { Recipe } from "../types/recipe";
import RatingStars from "./RatingStars";

interface Props {
  recipes: Recipe[];
  onRowClick: (recipe: Recipe) => void;
}

const RecipeTable = ({ recipes, onRowClick }: Props) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          onClick={() => onRowClick(recipe)}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer p-5 border border-gray-100 hover:-translate-y-1"
        >
          {/* Cuisine Badge */}
          <div className="inline-block mb-3 px-3 py-1 text-xs font-semibold bg-emerald-100 text-emerald-700 rounded-full">
            {recipe.cuisine}
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-2">
            {recipe.title}
          </h3>

          {/* Rating */}
          <div className="mb-2">
            <RatingStars rating={recipe.rating} />
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-2 text-xs text-gray-600 mt-3">
            {recipe.total_time && (
              <span className="px-2 py-1 bg-gray-100 rounded-full">
                🕒 {recipe.total_time} mins
              </span>
            )}
            {recipe.nutrients?.calories && (
              <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full">
                🔥 {recipe.nutrients.calories}
              </span>
            )}
            {recipe.serves && (
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                👥 Serves {recipe.serves}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeTable;