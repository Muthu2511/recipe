import axios from "axios";
// Hard-coded API Key (Replace with your valid key)
const API_KEY = "c0f27d3979bb4b89a74b1bceba2aa8b8";
export const fetchRecipes = async (query = "chicken", mealType = "") => {
    try {
        const response = await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch`,
            {
                params: {
                    query: query,
                    type: mealType, // e.g., breakfast, lunch, dinner
                    number: 10, // Number of recipes
                    apiKey: API_KEY // API Key added here
                }
            }
        );
        return response.data.results; // Return recipes
    } catch (error) {
        console.error("Error fetching recipes:", error);
        return [];
    }
};