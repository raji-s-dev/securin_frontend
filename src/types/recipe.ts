export interface Nutrients {
  calories?: string;
  carbohydrateContent?: string;
  cholesterolContent?: string;
  fiberContent?: string;
  proteinContent?: string;
  saturatedFatContent?: string;
  sodiumContent?: string;
  sugarContent?: string;
  fatContent?: string;
}

export interface Recipe {
  id: number;
  title: string;
  cuisine: string;
  rating: number | null;
  prep_time: number | null;
  cook_time: number | null;
  total_time: number | null;
  description: string;
  nutrients: Nutrients;
  serves: string;
}