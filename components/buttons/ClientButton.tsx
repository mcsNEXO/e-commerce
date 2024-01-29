"use client";
import { Button } from "@nextui-org/react";
import React, { DOMAttributes, ReactNode } from "react";

interface ClientButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  onMouseEnter?: () => void;
  size: "lg" | "md" | "sm";
  children: ReactNode;
  events?: DOMAttributes<Object>;
}

const ClientButton: React.FC<ClientButtonProps> = ({
  type,
  className,
  size,
  children,
  events,
}) => {
  return (
    <Button type={type} className={className} size={size} {...events}>
      {children}
    </Button>
  );
};

export default ClientButton;
