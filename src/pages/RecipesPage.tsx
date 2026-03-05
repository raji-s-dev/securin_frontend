import { useEffect, useState } from "react";
import { fetchRecipes, searchRecipes } from "../api/recipes";
import type { Recipe } from "../types/recipe";
import RecipeTable from "../components/RecipeTable";
import RecipeDrawer from "../components/RecipeDrawer";
import FiltersBar from "../components/FiltersBar";
import Pagination from "../components/Pagination";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selected, setSelected] = useState<Recipe | null>(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<Record<string, string>>({});

  const isSearching = Object.keys(filters).length > 0;

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      if (isSearching) {
        const res = await searchRecipes(filters);
        setRecipes(res.data);
        setTotal(res.data.length);
      } else {
        const res = await fetchRecipes(page, limit);
        setRecipes(res.data);
        setTotal(res.total);
      }

      setLoading(false);
    };

    loadData();
  }, [page, limit, filters]);

  return (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6">
    <div className="max-w-7xl mx-auto">

      {/* Hero */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Discover Delicious Recipes
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Explore, filter and dive into detailed cooking insights.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-10">
        <FiltersBar
          onApply={(f) => {
            setPage(1);
            setFilters(f);
          }}
          onClear={() => {
            setFilters({});
            setPage(1);
          }}
        />
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex flex-col items-center py-24">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-500">
            Fetching recipes...
          </p>
        </div>
      ) : recipes.length === 0 ? (
        <div className="text-center py-24">
          <div className="text-6xl mb-4">🍽️</div>
          <h2 className="text-xl font-semibold text-gray-800">
            No recipes found
          </h2>
          <p className="text-gray-500 mt-2">
            Try adjusting your filters.
          </p>
        </div>
      ) : (
        <>
          <RecipeTable
            recipes={recipes}
            onRowClick={setSelected}
          />

          {!isSearching && (
            <div className="mt-10">
              <Pagination
                page={page}
                limit={limit}
                total={total}
                onPageChange={setPage}
                onLimitChange={setLimit}
              />
            </div>
          )}
        </>
      )}

      <RecipeDrawer
        recipe={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  </div>
);
};

export default RecipesPage;