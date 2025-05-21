"use client";
import { useState } from "react";

// Dummy user data
const users = [
  { id: "1", name: "John Doe", email: "john@example.com" },
  { id: "2", name: "Jane Smith", email: "jane@example.com" },
];

export default function UserTable() {
  const [userList, setUserList] = useState(users);

  const deleteUser = (id: string) => {
    setUserList(userList.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">User List</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">
                <button className="text-blue-600 mr-2">Edit</button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="text-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
