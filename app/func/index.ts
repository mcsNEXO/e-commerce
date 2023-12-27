"use client";
import { useSession } from "next-auth/react";
import { ReactNode } from "react";

export const CheckingAuth: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const session = useSession();
  return session.status === "authenticated" ? null : children;
};
