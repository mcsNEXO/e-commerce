"use client";
import { Button } from "@nextui-org/react";
import React from "react";
import { IconType } from "react-icons";

interface ProviderButtonProps {
  icon: IconType;
  providerName: string;
}

const ProviderButton: React.FC<ProviderButtonProps> = ({
  icon: Icon,
  providerName,
}) => {
  return (
    <Button size="md" className="w-full ">
      <Icon size={24} /> {providerName}
    </Button>
  );
};

export default ProviderButton;
