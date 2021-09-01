import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import "./ListOfUsers.css";

const ListOfUsers = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const fetchData = async () => {
    const res = await fetch("https://reqres.in/api/users?page=2");
    const json = await res.json();
    setUsers(json.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              <div key={user.id}>
                <p>
                  <strong>{user.first_name}</strong>
                </p>
                <p>{user.email}</p>
                <img key={user.avatar} alt="user" src={user.avatar} />
                <p>{user.text}</p>
              </div>
            );
          })}
      </div>
      <div>
        {" "}
        <Pagination page={page} setPage={setPage} users={users} />
      </div>
    </>
  );
};

export default ListOfUsers;
