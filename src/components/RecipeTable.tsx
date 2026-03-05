import type  { Recipe } from "../types/recipe";
import RatingStars from "./RatingStars";

interface Props {
  recipes: Recipe[];
  onRowClick: (recipe: Recipe) => void;
}

const RecipeTable = ({ recipes, onRowClick }: Props) => {
  return (
    <table className="w-full border">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3 text-left">Title</th>
          <th className="p-3 text-left">Cuisine</th>
          <th className="p-3 text-left">Rating</th>
          <th className="p-3 text-left">Total Time</th>
          <th className="p-3 text-left">Serves</th>
        </tr>
      </thead>

      <tbody>
        {recipes.map((recipe) => (
          <tr
            key={recipe.id}
            onClick={() => onRowClick(recipe)}
            className="border-t hover:bg-gray-50 cursor-pointer"
          >
            <td className="p-3 truncate max-w-[200px]">
              {recipe.title}
            </td>
            <td className="p-3">{recipe.cuisine}</td>
            <td className="p-3">
              <RatingStars rating={recipe.rating} />
            </td>
            <td className="p-3">
              {recipe.total_time ? `${recipe.total_time} mins` : "N/A"}
            </td>
            <td className="p-3">{recipe.serves}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecipeTable;