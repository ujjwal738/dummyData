import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://dummyjson.com/users';

    axios.get(apiUrl)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setUsers(response.data);
        } else {
          console.error('API response does not contain an array of users:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Dummy Data</h2>
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Profile</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>E-mail</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.sno}>
              <td>{user.sno}</td>
              <td>{user.profile}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
