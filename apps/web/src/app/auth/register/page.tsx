"use client";

import React, { useState } from "react";

export default function RegisterPage() {
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    phoneNumber: "",
    role: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/api/v1/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });

      if (!res.ok) {
        throw new Error("Failed fetch");
      }

      setRegisterData({
        email: "",
        firstName: "",
        lastName: "",
        username: "",
        role: "",
        password: "",
        phoneNumber: "",
      });

      alert("New user created!");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="min-h-screen grid place-items-center z-999">
      <div className="bg-[#191717] p-5 rounded-md shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-5 text-white">
          Register
        </h1>
        <form className="grid gap-4 text-white px-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5">
            <div className="w-full">
              <label htmlFor="firstName">First Name : </label>
              <input
                className="border border-white w-full"
                type="text"
                id="firstName"
                value={registerData.firstName}
                onChange={(e) =>
                  setRegisterData((prev) => {
                    return { ...prev, firstName: e.target.value };
                  })
                }
              />
            </div>
            <div className="w-full">
              <label htmlFor="lastName">Last Name : </label>
              <input
                className="border border-white w-full"
                type="text"
                id="lastName"
                value={registerData.lastName}
                onChange={(e) =>
                  setRegisterData((prev) => {
                    return { ...prev, lastName: e.target.value };
                  })
                }
              />
            </div>
          </div>

          <div className="grid">
            <label htmlFor="email">Email</label>
            <input
              className="border border-white"
              type="email"
              id="email"
              value={registerData.email}
              onChange={(e) =>
                setRegisterData((prev) => {
                  return { ...prev, email: e.target.value };
                })
              }
            />
          </div>

          <div className="grid">
            <label htmlFor="username">Username</label>
            <input
              className="border border-white"
              type="text"
              id="username"
              value={registerData.username}
              onChange={(e) =>
                setRegisterData((prev) => {
                  return { ...prev, username: e.target.value };
                })
              }
            />
          </div>

          <div className="grid">
            <label htmlFor="passwordHash">Password</label>
            <input
              className="border border-white"
              type="password"
              id="password"
              value={registerData.password}
              onChange={(e) =>
                setRegisterData((prev) => {
                  return { ...prev, password: e.target.value };
                })
              }
            />
          </div>
          <div className="grid">
            <label htmlFor="role">Phone Number</label>
            <input
              className="border border-white"
              type="text"
              id="phoneNumber"
              value={registerData.phoneNumber}
              onChange={(e) =>
                setRegisterData((prev) => {
                  return { ...prev, phoneNumber: e.target.value };
                })
              }
            />
          </div>
          <div className="grid">
            <label htmlFor="role">Role</label>
            <input
              className="border border-white"
              type="text"
              id="role"
              value={registerData.role}
              onChange={(e) =>
                setRegisterData((prev) => {
                  return { ...prev, role: e.target.value };
                })
              }
            />
          </div>

          <button className="bg-white text-black" type="submit">
            Register
          </button>
        </form>
      </div>
    </main>
  );
}
