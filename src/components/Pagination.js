import React from "react";

const Pagination = ({ users, page, setPage }) => {
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > users.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = users.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index) => {
    setPage(index);
  };
  return (
    <div>
      <div className="btn-container">
        <button className="prev-btn" onClick={prevPage}>
          prev
        </button>
        {users.map((item, index) => {
          return (
            <button
              key={index}
              className={`page-btn ${index === page ? "active-btn" : null}`}
              onClick={() => handlePage(index)}
            >
              {index + 1}
            </button>
          );
        })}
        <button className="next-btn" onClick={nextPage}>
          next
        </button>
      </div>
    </div>
  );
};
export default Pagination;
