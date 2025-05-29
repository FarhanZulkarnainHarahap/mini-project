"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

type CurrentUser = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  phoneNumber: string;
  role: string;
  UserImage?: { url: string }[];
};

export default function ProfilePage() {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    phoneNumber: "",
    role: "USER",
  });
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      try {
        const res = await fetch(
          "http://localhost:8000/api/v1/user/current-user",
          {
            credentials: "include",
          }
        );
        const data = await res.json();
        if (data.data) {
          const u = data.data;
          setCurrentUser(u);
          setForm({
            firstName: u.firstName || "",
            lastName: u.lastName || "",
            email: u.email || "",
            username: u.username || "",
            password: "",
            phoneNumber: u.phoneNumber || "",
            role: u.role || "USER",
          });
          if (u.UserImage && u.UserImage[0]) {
            setPreview(u.UserImage[0].url);
          }
        }
      } catch (error) {
        console.error("Failed to fetch user", err);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  function validate() {
    const errs: { [key: string]: string } = {};
    if (!form.firstName) errs.firstName = "First name required";
    if (!form.lastName) errs.lastName = "Last name required";
    if (!form.email) {
      errs.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = "Invalid email";
    }
    if (!form.username) errs.username = "Username required";
    if (form.password && form.password.length < 6)
      errs.password = "Password must be at least 6 characters";
    if (!form.phoneNumber) errs.phoneNumber = "Phone number required";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSaving(true);
    const fd = new FormData();
    Object.entries(form).forEach(([key, val]) => {
      fd.append(key, val);
    });
    if (image) {
      fd.append("singleImage", image);
    }

    try {
      const res = await fetch(
        "http://localhost:8000/api/v1/user/current-user",
        {
          method: "PUT",
          credentials: "include",
          body: fd,
        }
      );

      const result = await res.json();

      if (res.ok) {
        alert("Profile updated");
        setCurrentUser(result.data);
        setForm((f) => ({ ...f, password: "" }));
        if (result.data.UserImage && result.data.UserImage[0]) {
          setPreview(result.data.UserImage[0].url);
        }
      } else {
        alert(result.message || "Failed to update");
      }
    } catch (err) {
      console.error("Update error", err);
      alert("Server error");
    } finally {
      setSaving(false);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  }

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Edit Profile</h1>

      {preview && (
        <div className="w-24 h-24 relative mx-auto mb-4 rounded-full overflow-hidden border">
          <Image src={preview} alt="Profile" fill className="object-cover" />
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {["firstName", "lastName", "email", "username", "phoneNumber"].map(
          (field) => (
            <label key={field} className="block mb-2">
              <span className="text-gray-700 capitalize">
                {field.replace(/([A-Z])/g, " $1")}
              </span>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={(form as any)[field]}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 ${
                  errors[field] ? "border-red-500" : ""
                }`}
              />
              {errors[field] && (
                <p className="text-red-500 text-sm">{errors[field]}</p>
              )}
            </label>
          )
        )}

        <label className="block mb-2">
          <span className="text-gray-700">Password</span>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 ${
              errors.password ? "border-red-500" : ""
            }`}
            placeholder="Leave blank to keep current password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Role</span>
          <input
            type="text"
            name="role"
            value={form.role}
            readOnly
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 cursor-not-allowed"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Profile Image</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 block w-full"
          />
        </label>

        <button
          type="submit"
          disabled={saving}
          className={`w-full ${
            saving ? "bg-gray-400" : "bg-red-600 hover:bg-red-700"
          } text-white py-2 rounded-md font-semibold transition`}
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
