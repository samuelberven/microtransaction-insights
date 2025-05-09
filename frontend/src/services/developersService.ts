import { apiAdapter } from "./apiAdapter";
import { Developer } from "../types/Developer";

// Retrieve all developers
export const getDevelopers = async (): Promise<Developer[]> => {
  return apiAdapter.get<Developer[]>("/api/developers");
};

// Create new developer (developerID generated by MySQL in backend)
export const createDeveloper = async (
  developer: Omit<Developer, "developerID">
): Promise<Developer> => {
  return apiAdapter.post<Developer>("/api/developers", developer);
};

// Update existing developer by ID
export const updateDeveloper = async (
  id: number,
  data: Partial<Developer>
): Promise<Developer> => {
  return apiAdapter.patch<Developer>(`/api/developers/${id}`, data);
};

// Delete developer by ID
export const deleteDeveloper = async (id: number): Promise<void> => {
  return apiAdapter.delete(`/api/developers/${id}`);
};
