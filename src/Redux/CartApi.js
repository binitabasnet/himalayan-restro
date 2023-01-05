import { useState, useEffect, useCallback } from "react";

const CartApi = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/");
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [fetchData]);

  return [data, isLoading, error];
};

export default CartApi;
