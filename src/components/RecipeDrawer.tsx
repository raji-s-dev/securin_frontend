import { useState } from "react";
import type { Recipe } from "../types/recipe";

interface Props {
  recipe: Recipe | null;
  onClose: () => void;
}

const RecipeDrawer = ({ recipe, onClose }: Props) => {
  const [expand, setExpand] = useState(false);

  if (!recipe) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30"
        onClick={onClose}
      />

      <div className="fixed top-0 right-0 w-[400px] h-full bg-white shadow-xl p-6 overflow-y-auto transition-transform duration-300">

        <button onClick={onClose} className="mb-4 text-red-500">
          Close
        </button>

        <h2 className="text-xl font-bold">{recipe.title}</h2>
        <p className="text-gray-500">{recipe.cuisine}</p>

        <div className="mt-4">
          <strong>Description:</strong>
          <p className="text-sm text-gray-700">
            {recipe.description}
          </p>
        </div>

        <div className="mt-4">
          <div
            className="flex justify-between cursor-pointer"
            onClick={() => setExpand(!expand)}
          >
            <strong>Total Time:</strong>
            <span>{recipe.total_time} mins ▾</span>
          </div>

          {expand && (
            <div className="text-sm text-gray-600 mt-2">
              Prep: {recipe.prep_time} mins <br />
              Cook: {recipe.cook_time} mins
            </div>
          )}
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">
            Nutrition
          </h3>

          <table className="w-full text-sm border">
            <tbody>
              {Object.entries(recipe.nutrients || {}).map(
                ([key, value]) => (
                  <tr key={key} className="border-t">
                    <td className="p-2 font-medium">
                      {key}
                    </td>
                    <td className="p-2">{value}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RecipeDrawer;