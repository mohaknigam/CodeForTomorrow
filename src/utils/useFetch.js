import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";
  const fetchData = async () => {
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};

export default useFetch;
