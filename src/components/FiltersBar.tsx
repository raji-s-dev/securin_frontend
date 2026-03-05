import { useState } from "react";

interface Props {
  onApply: (filters: Record<string, string>) => void;
  onClear: () => void;
}

const operatorOptions = [
  { label: "Exactly", value: "=" },
  { label: "At least", value: ">=" },
  { label: "At most", value: "<=" },
];

const numericFields = ["rating", "total_time", "calories"];

const FiltersBar = ({ onApply, onClear }: Props) => {
  const [form, setForm] = useState<Record<string, string>>({});
  const [operators, setOperators] = useState<Record<string, string>>({
    rating: ">=",
    total_time: "<=",
    calories: "<=",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateNumericField = (key: string, value: string) => {
    if (!value) return "";

    const num = Number(value);

    if (isNaN(num)) return "Invalid number";
    if (num < 0) return "Cannot be negative";
    if (key === "rating" && num > 5) return "Rating must be 0–5";

    return "";
  };

  const update = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));

    if (numericFields.includes(key)) {
      const error = validateNumericField(key, value);
      setErrors((prev) => ({ ...prev, [key]: error }));
    }
  };

  const updateOperator = (key: string, value: string) => {
    setOperators((prev) => ({ ...prev, [key]: value }));
  };

  const hasError = numericFields.some(
    (field) => form[field] && errors[field]
  );

  const handleApply = () => {
    if (hasError) return;

    const formattedFilters: Record<string, string> = {};

    Object.keys(form).forEach((key) => {
      if (form[key]) {
        if (numericFields.includes(key)) {
          formattedFilters[key] = `${operators[key]}${form[key]}`;
        } else {
          formattedFilters[key] = form[key];
        }
      }
    });

    onApply(formattedFilters);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">

        {/* Title */}
        <input
          placeholder="Search Title..."
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          onChange={(e) => update("title", e.target.value)}
        />

        {/* Cuisine */}
        <input
          placeholder="Cuisine"
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          onChange={(e) => update("cuisine", e.target.value)}
        />

        {/* Rating */}
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center">
            <select
            aria-label="rating"
              className="border rounded-lg px-2 py-2 w-28 bg-white"
              value={operators.rating}
              onChange={(e) => updateOperator("rating", e.target.value)}
            >
              {operatorOptions.map((op) => (
                <option key={op.value} value={op.value}>
                  {op.label}
                </option>
              ))}
            </select>

            <input
              type="number"
              min={0}
              max={5}
              step="0.1"
              placeholder="Rating"
              className="border p-2 rounded-lg w-full"
              onChange={(e) => update("rating", e.target.value)}
            />
          </div>

          {form.rating && errors.rating && (
            <span className="text-xs text-red-500">{errors.rating}</span>
          )}
        </div>

        {/* Total Time */}
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center">
            <select
            aria-label="rating"
              className="border rounded-lg px-2 py-2 w-28 bg-white"
              value={operators.total_time}
              onChange={(e) =>
                updateOperator("total_time", e.target.value)
              }
            >
              {operatorOptions.map((op) => (
                <option key={op.value} value={op.value}>
                  {op.label}
                </option>
              ))}
            </select>

            <input
              type="number"
              min={0}
              placeholder="Total Time"
              className="border p-2 rounded-lg w-full"
              onChange={(e) => update("total_time", e.target.value)}
            />
          </div>

          {form.total_time && errors.total_time && (
            <span className="text-xs text-red-500">
              {errors.total_time}
            </span>
          )}
        </div>

        {/* Calories */}
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center">
            <select
            aria-label="rating"
              className="border rounded-lg px-2 py-2 w-28 bg-white"
              value={operators.calories}
              onChange={(e) =>
                updateOperator("calories", e.target.value)
              }
            >
              {operatorOptions.map((op) => (
                <option key={op.value} value={op.value}>
                  {op.label}
                </option>
              ))}
            </select>

            <input
              type="number"
              min={0}
              placeholder="Calories"
              className="border p-2 rounded-lg w-full"
              onChange={(e) => update("calories", e.target.value)}
            />
          </div>

          {form.calories && errors.calories && (
            <span className="text-xs text-red-500">
              {errors.calories}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 items-start">
          <button
            onClick={handleApply}
            disabled={hasError}
            className={`px-4 py-2 rounded-lg text-white ${
              hasError
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Apply
          </button>

          <button
            onClick={() => {
              setForm({});
              setErrors({});
              onClear();
            }}
            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"
          >
            Clear
          </button>
        </div>

      </div>
    </div>
  );
};

export default FiltersBar;