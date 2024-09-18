"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

const SignIn: React.FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState("exqmp@example.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState({ email: "", password: "" });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    let errors = { email: "", password: "" };

    if (!email) {
      errors.email = "Email is required.";
      valid = false;
    } else if (!validateEmail(email)) {
      errors.email = "Please enter a valid email address.";
      valid = false;
    }

    if (!password) {
      errors.password = "Password is required.";
      valid = false;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
      valid = false;
    }

    setError(errors);

    if (valid) {
      console.log({ email, password });
      router.push("/about");
    }
  };

  return (
    <div className="container flex flex-col mx-auto bg-gradient-to-b   pt-12 pb-12 my-10 ">
      <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
        <div className="flex items-center justify-center w-full lg:p-12">
          <div className="flex items-center xl:p-10">
            <form
              className="flex flex-col w-full h-full text-center bg-white shadow-2xl rounded-3xl p-8"
              onSubmit={handleSubmit}
            >
              <h3 className="mb-6 text-4xl font-extrabold text-gray-900">
                Sign In
              </h3>
              <p className="mb-6 text-gray-600">
                Welcome back! Please enter your email and password.
              </p>

              <Label
                htmlFor="email"
                className="mb-2 text-sm text-left text-gray-900"
              >
                Email*
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="mail@loopple.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-5 py-4 mb-5 text-sm rounded-2xl bg-gray-100 placeholder-gray-500 focus:ring-2  outline-none ${
                  error.email ? "border border-red-500" : ""
                }`}
              />
              {error.email && (
                <p className="text-red-500 text-xs text-left mb-4">
                  {error.email}
                </p>
              )}

              <Label
                htmlFor="password"
                className="mb-2 text-sm text-left text-gray-900"
              >
                Password*
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-5 py-4 mb-5 text-sm rounded-2xl bg-gray-100 placeholder-gray-500 focus:ring-2  outline-none ${
                  error.password ? "border border-red-500" : ""
                }`}
              />
              {error.password && (
                <p className="text-red-500 text-xs text-left mb-4">
                  {error.password}
                </p>
              )}

              <div className="flex justify-end mb-8">
                <a href="#" className="text-sm font-medium  hover:underline">
                  Forgot password?
                </a>
              </div>

              <Button
                type="submit"
                className="w-full mb-5 text-sm font-bold leading-none transition duration-300  text-white  rounded-2xl"
                disabled={!email || !password}
              >
                Sign In
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
