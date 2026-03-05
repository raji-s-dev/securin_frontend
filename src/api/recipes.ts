import axios from "axios";
import type  { Recipe } from "../types/recipe";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export interface PaginatedResponse {
  page: number;
  limit: number;
  total: number;
  data: Recipe[];
}



export const fetchRecipes = async (
  page: number,
  limit: number
): Promise<PaginatedResponse> => {
  const res = await API.get(`/recipes?page=${page}&limit=${limit}`);
  return res.data;
};

export const searchRecipes = async (params: Record<string, string | number | boolean>): Promise<PaginatedResponse> => {
  const query = new URLSearchParams(params as Record<string, string>).toString();
  const res = await API.get(`/recipes/search?${query}`);
  return res.data;
};