"use client";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

export default function AuthPage() {
  return (
    <SessionProvider>
      <RealHome />
</SessionProvider>
  );
}

function RealHome() {
  const { status } = useSession();
  const [showLogin, setShowLogin] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });

  if (status === "authenticated"){    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome 🎉</h2>
        <button
          onClick={() => signOut()}
          className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );}
  
  return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {showLogin ? "Login" : "Sign Up"}
        </h2>

        {!showLogin ? (
          // ---------- SIGN UP FORM ----------
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button
              type="button"
              className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              onClick={() => setShowLogin(true)} // after signup, show login
            >
              Sign Up
            </button>
          </form>
        ) : (
          // ---------- LOGIN FORM ----------
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              signIn("credentials", {
                username: formData.username,
                password: formData.password,
                redirect: false,
              });
            }}
          >
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button
              type="submit"
              className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

