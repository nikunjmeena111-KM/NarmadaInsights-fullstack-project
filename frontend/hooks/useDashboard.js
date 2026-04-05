import { useEffect, useState } from "react";
import { getDashboardData } from "../services/dashboardService";

const useDashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedCountry, setSelectedCountry] = useState("IN");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDashboardData();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
    selectedCountry,
    setSelectedCountry,
  };
};

export default useDashboard;