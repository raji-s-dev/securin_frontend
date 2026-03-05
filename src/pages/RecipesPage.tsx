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
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow p-6">

        <h1 className="text-2xl font-bold mb-6">
          Recipe Explorer
        </h1>

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

        {loading ? (
          <div className="py-20 text-center text-gray-500">
            Loading recipes...
          </div>
        ) : recipes.length === 0 ? (
          <div className="py-20 text-center text-gray-500">
            No recipes found 🍽️
          </div>
        ) : (
          <>
            <RecipeTable recipes={recipes} onRowClick={setSelected} />

            {!isSearching && (
              <Pagination
                page={page}
                limit={limit}
                total={total}
                onPageChange={setPage}
                onLimitChange={setLimit}
              />
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