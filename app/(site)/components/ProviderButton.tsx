"use client";
import { Button } from "@nextui-org/react";
import React from "react";
import { IconType } from "react-icons";

interface ProviderButtonProps {
  icon: IconType;
  providerName: string;
  disabled: boolean;
  onClick: () => any;
}

const ProviderButton: React.FC<ProviderButtonProps> = ({
  icon: Icon,
  providerName,
  disabled,
  onClick,
}) => {
  return (
    <Button
      size="md"
      className="w-full"
      isDisabled={disabled}
      onClick={onClick}
    >
      <Icon size={24} /> {providerName}
    </Button>
  );
};

export default ProviderButton;
