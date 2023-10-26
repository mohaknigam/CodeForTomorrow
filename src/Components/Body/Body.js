import React, { useEffect, useState } from "react";
import "./body.css";
import ListTile from "./ListTile";
import useFetch from "../../utils/useFetch";

const Body = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  const fetchedData = useFetch();

  useEffect(() => {
    setList(fetchedData);
  }, [fetchedData]);

  const handleClick = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleDelete = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };
  return (
    <div className="bodyContainer">
      <div className="list-container">
        {list.slice(page * 6 - 6, page * 6).map((item) => {
          return (
            <ListTile
              title={item.title}
              body={item.body}
              id={item.id}
              key={item.id}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
      <div className="pagination">
        {Array(Math.ceil(list.length / 6))
          .fill("")
          .map((_, idx) => {
            return (
              <button className="pag-btn" onClick={() => handleClick(idx + 1)}>
                {idx + 1}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default Body;
