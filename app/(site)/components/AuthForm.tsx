"use client";
import Input from "@/app/components/inputs/Input";
import ProviderButton from "./ProviderButton";
import { Button } from "@nextui-org/react";
import { FieldValues, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import React from "react";

interface AuthFromProps {
  variant: "SIGNUP" | "SIGNIN";
  label: string;
}

const AuthForm: React.FC<AuthFromProps> = ({ variant, label }) => {
  const singUp = () => {};
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      firstName: "",
      email: "",
      password: "",
      phone: "",
    },
  });
  const onSubmit = (data: any) => {
    console.log(errors);
  };
  return (
    <div className="w-full flex flex-col items-center justify-center py-5">
      <div className="bg-white w-3/4 md:w-3/5 lg:w-2/3 px-10 py-5 rounded-md lg:max-w-lg">
        <h1 className="text-4xl font-bold my-4 text-center">{label}</h1>
        <div className="text-gray-500 text-sm font-medium text-center">
          <span className="text-base text-gray-700 font-semibold">
            {variant === "SIGNIN"
              ? "Welcome back!"
              : " Welcome to our platform!"}
          </span>
          <br />
          {variant === "SIGNIN"
            ? "Sign in to continue your stylish journey."
            : "Sign up  now to unlock your style potential."}
        </div>
        <form className="space-y-6 mt-6" onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            label="E-mail address"
            name="email"
            register={register}
            errors={errors}
            options={{
              minLength: { value: 5, message: "Min length is 5 letters" },
              maxLength: { value: 30, message: "Max length is 30 letters" },
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Incorrect email!",
              },
              required: { value: true, message: "Required field!" },
            }}
          />
          <Input
            type="password"
            label="Password"
            name="password"
            errors={errors}
            register={register}
            options={{
              minLength: { value: 6, message: "Min 6 letters" },
              maxLength: { value: 30, message: "Max 30 letters" },
              required: { value: true, message: "Required field!" },
            }}
          />
          {variant === "SIGNUP" && (
            <>
              <Input
                type="text"
                label="First name"
                name="firstName"
                errors={errors}
                options={{
                  required: { value: true, message: "Required field!" },
                  pattern: {
                    value: /[A-Za-z]{1,32}$/,
                    message: "Use only letters and numbers!",
                  },
                }}
                register={register}
              />
              <Input
                type="tel"
                label="Phone"
                name="phone"
                errors={errors}
                options={{
                  required: { value: true, message: "Required field!" },
                }}
                register={register}
              />
            </>
          )}
          <div className="text-center mt-8">
            <Button
              type="submit"
              className="bg-black text-white w-2/3 font-semibold"
            >
              {label}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center top-1">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm ">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <ProviderButton icon={FcGoogle} providerName="Google" />
            <ProviderButton icon={FaGithub} providerName="Github" />
          </div>
        </div>
        <div className="mt-3 text-sm justify-center flex gap-1">
          {variant === "SIGNIN"
            ? "You don't have an account yet? "
            : "Already have an account?"}
          <span className="underline cursor-pointer">
            <Link href={variant === "SIGNIN" ? "sign-up" : "sign-in"}>
              {variant === "SIGNIN" ? "Create one!" : "Login"}
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
