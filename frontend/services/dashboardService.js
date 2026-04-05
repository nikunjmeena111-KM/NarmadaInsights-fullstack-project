// services/dashboardService.js

const BASE_URL = "http://localhost:8000/api/v1";

export const getDashboardData = async (country = null) => {
  try {
    const url = country
      ? `${BASE_URL}/dashboard?country=${country}`
      : `${BASE_URL}/dashboard`;

    const response = await fetch(url, {
      method: "GET",
      credentials: "include",
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.message || "Failed to fetch dashboard");
    }

    return result.data;
  } catch (error) {
    console.error("Dashboard API Error:", error);
    throw error;
  }
};